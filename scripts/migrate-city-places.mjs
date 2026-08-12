#!/usr/bin/env node
/**
 * 도시별 info 카드를 Google Places 로 매칭 → placeId + placePhotos(최대 5장) 자동 수집.
 * 기존 로컬 이미지(photos 필드) 대신 Google Places 사진을 인포팝업에 표시하기 위한 데이터 마이그레이션.
 *
 * 사용법:
 *   node scripts/migrate-city-places.mjs <cityDir>                         # 이름 검색+리포트 (기존 마이그레이션)
 *   node scripts/migrate-city-places.mjs <cityDir> --photos-only           # info의 검증된 placeId로 사진만 조회
 *   node scripts/migrate-city-places.mjs <cityDir> --photos-only --apply   # 사진 리포트를 placePhotos로 적용
 *
 * <cityDir>: src/data/cities/ 아래 폴더명 (예: bali, bangkok, osaka)
 * 검색 대상: src/data/cities/<cityDir>/info/{restaurants,accommodations,shopping,tourSpa}.ts
 * (파일 일부만 존재해도 있는 파일만 처리)
 *
 * API 비용 (Google 2024 요금):
 *   - Find Place from Text: $17/1000 = $0.017/건
 *   - Place Details:        $17/1000 = $0.017/건
 *   → 카드 1개당 ~$0.034 (Google $200 무료 크레딧 안에서 대부분 커버)
 *
 * 리포트: scratchpad/places-report-<cityDir>.json
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

// ────────────────────────────────────────────────────────────
// CLI 파싱
// ────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const APPLY = args.includes('--apply');
const FORCE = args.includes('--force'); // 기존 이름검색 모드에서 이미 placeId 있는 카드도 덮어쓰기
const PHOTOS_ONLY = args.includes('--photos-only'); // info에 이미 기록된 검증된 placeId만 사용해 Place Details 사진 조회
const MISSING_PHOTOS_ONLY = args.includes('--missing-photos-only'); // photos-only에서 이미 placePhotos가 있는 항목은 건너뜀
const cityDir = args.find((a) => !a.startsWith('--'));
const categoryArgIndex = args.indexOf('--category');
const ONLY_CATEGORY = categoryArgIndex >= 0 ? args[categoryArgIndex + 1] : '';
if (categoryArgIndex >= 0 && !ONLY_CATEGORY) {
    console.error('--category 뒤에 restaurants|accommodations|shopping|tourSpa가 필요합니다.');
    process.exit(1);
}
if (MISSING_PHOTOS_ONLY && !PHOTOS_ONLY) {
    console.error('--missing-photos-only는 --photos-only와 함께 사용해야 합니다.');
    process.exit(1);
}
if (!cityDir) {
    console.error('Usage: node scripts/migrate-city-places.mjs <cityDir> [--photos-only] [--apply]');
    console.error('  cityDir 예: bali, bangkok, osaka (src/data/cities/ 아래 폴더명)');
    process.exit(1);
}

const CITY_DATA_DIR = path.join(ROOT, 'src/data/cities', cityDir, 'info');
if (!fs.existsSync(CITY_DATA_DIR)) {
    console.error(`❌ 도시 info 폴더 없음: ${CITY_DATA_DIR}`);
    process.exit(1);
}

// destinations.ts 에서 도시 정보 로드 (검색 쿼리에 도시명 붙이기 위해)
function loadCityDisplayName(dirName) {
    // destinations.ts 를 문자열로 파싱: engName 이 dirName 슬러그와 매칭되는 도시 찾기
    const src = fs.readFileSync(path.join(ROOT, 'src/data/destinations.ts'), 'utf-8');
    // 슬러그 규칙: engName.toLowerCase().replace(/\s+/g,"-") === dirName
    // 예: engName "Nha Trang" → dirName "nha-trang"
    const re = /engName:\s*["']([^"']+)["']/g;
    let m;
    while ((m = re.exec(src))) {
        const engName = m[1];
        const slug = engName.toLowerCase().replace(/\s+/g, '-');
        if (slug === dirName) return engName;
    }
    // 폴백: dirName 을 그대로 title case
    return dirName.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

const CITY = loadCityDisplayName(cityDir);
const MAX_PHOTOS = 5;

// 처리할 info 파일 자동 감지 (있는 것만)
const CANDIDATE_FILES = [
    { name: 'restaurants', file: 'restaurants.ts' },
    { name: 'accommodations', file: 'accommodations.ts' },
    { name: 'shopping', file: 'shopping.ts' },
    { name: 'tourSpa', file: 'tourSpa.ts' },
];
const FILES = CANDIDATE_FILES
    .filter((c) => !ONLY_CATEGORY || c.name === ONLY_CATEGORY)
    .map((c) => ({ ...c, path: path.join(CITY_DATA_DIR, c.file) }))
    .filter((c) => fs.existsSync(c.path));

if (FILES.length === 0) {
    console.error(`❌ ${CITY_DATA_DIR} 아래에 처리 가능한 info 파일 없음`);
    process.exit(1);
}

const REPORT_DIR = process.env.CLAUDE_SCRATCHPAD || path.join(ROOT, '.scratchpad');
const REPORT_PATH = path.join(REPORT_DIR, `places-report-${cityDir}.json`);

// ────────────────────────────────────────────────────────────
// 유틸
// ────────────────────────────────────────────────────────────
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function loadApiKey() {
    const env = fs.readFileSync(path.join(ROOT, '.env.local'), 'utf-8');
    const m = env.match(/NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=(.+)/);
    if (!m) throw new Error('.env.local 에 NEXT_PUBLIC_GOOGLE_MAPS_API_KEY 없음');
    return m[1].trim().replace(/["']/g, '');
}

// info 파일에서 각 top-level 카드의 { koreanName, slug } 추출.
// 기존 로컬 photos[0]가 있으면 파일명 slug를 검색 보조로 쓰고,
// existing-destination-update가 photos: []로 만든 신규 항목은 카드명으로 검색한다.
function extractEntries(fileSrc) {
    const entries = [];
    const keyRe = /^\s{4}(?:"([^"]+)"|'([^']+)')\s*:\s*\{/gm;
    const matches = [...fileSrc.matchAll(keyRe)];

    for (let i = 0; i < matches.length; i++) {
        const match = matches[i];
        const koreanName = match[1] || match[2];
        const start = match.index;
        const end = i + 1 < matches.length ? matches[i + 1].index : fileSrc.length;
        const block = fileSrc.slice(start, end);
        const photosMatch = block.match(/\bphotos\s*:\s*\[([\s\S]*?)\]/);
        if (!photosMatch) continue;

        const firstPhoto = photosMatch[1].match(/["']([^"']+)["']/);
        const photoPath = firstPhoto?.[1] || '';
        const filename = photoPath.split('/').pop() || '';
        const slug = filename.replace(/\.(jpg|jpeg|png|webp)$/i, '');
        const placeId = block.match(/\bplaceId\s*:\s*["']([^"']+)["']/)?.[1] || '';
        const hasPlacePhotos = /\bplacePhotos\s*:\s*\[/.test(block);
        entries.push({ koreanName, slug, placeId, hasPlacePhotos });
    }
    return entries;
}

// 원본 이미지 파일명이 실제 상호명이 아닌 자리표시자(place-2.jpg, 해시 문자열 등)인 경우 감지.
// - place-N / spot-N: 원본 데이터에 실제 이미지 파일이 없어 자동 생성된 placeholder
// - 해시 세그먼트: 8자+ 알파벳/숫자 혼합에 자음 위주 → 사람이 안 쓰는 패턴
// 이런 경우 슬러그로 검색하면 엉뚱한 곳이 매칭됨 → 한글 이름 + 도시명으로 대체
function isPlaceholderSlug(slug, city) {
    // 자리표시자: "place", "place-N", "place-<해시>", "spot" 계열 등
    // 실제 지명 슬러그는 "place-eiffel-tower" 같이 시작하지 않으므로 place- 시작은 모두 자리표시자로 간주
    if (/^(place|spot|image|img|photo|thumb|thumbnail)(-.+)?$/i.test(slug)) return true;
    // 너무 짧은 슬러그 (검색 쿼리로 부적합) — 2자 이하는 확실히 자리표시자 (예: "jr", "id")
    if (slug.length <= 2) return true;
    // 도시명 단어가 슬러그에서 2회 이상 반복 (예: "da-lat-spa-da-lat", "mandalaspa-da-lat-da-lat")
    // → 원본에 상호명이 없어 도시명이 감싸는 자동 생성 슬러그일 가능성 높음
    // 슬러그 전부가 도시명 단어로만 이루어짐 (예: "bangkok-bangkok" for Bangkok) → 실질적으로 빈 쿼리
    if (city) {
        const cityWords = city.toLowerCase().split(/\s+/);
        const segs = slug.toLowerCase().split('-').filter((s) => s);
        if (segs.length > 0 && segs.every((s) => cityWords.includes(s))) return true;
        // 도시명이 2회 이상 반복
        for (const cw of cityWords) {
            if (segs.filter((s) => s === cw).length >= 2) return true;
        }
    }
    // 단일 세그먼트 · 8+ 문자 · 알파벳+숫자 혼합 (예: da39a3ee5e6b)
    if (/^[a-z0-9]{8,}$/i.test(slug) && /\d/.test(slug) && /[a-z]/i.test(slug)) return true;
    // 세그먼트 중 하나가 6+ 자 · 자음 위주 (모음 패턴 없음) · 숫자 포함 → 해시 (예: jf3la9zu, wkg-t9i8 뒤 세그먼트)
    for (const seg of slug.toLowerCase().split('-')) {
        if (seg.length >= 6 && /\d/.test(seg) && /[a-z]/.test(seg)) {
            const hasWordPattern = /[aeiou][bcdfghjklmnpqrstvwxyz][aeiou]/.test(seg);
            if (!hasWordPattern) return true;
        }
    }
    // 마지막 세그먼트가 8+ 자 · 순 알파벳 · 자음 위주 → 해시 (예: eczowoqs, qcopgpwi, smvkvbek)
    // 실제 영어 지명은 대부분 모음:자음 비율이 1:1.5 이내 (osaka=2:3, tokyo=2:3, seminyak=4:4)
    const segments = slug.toLowerCase().split('-');
    const last = segments[segments.length - 1];
    if (last.length >= 8 && /^[a-z]+$/.test(last)) {
        const vowels = (last.match(/[aeiou]/g) || []).length;
        const consonants = last.length - vowels;
        if (consonants > vowels * 1.5) return true;
    }
    return false;
}

function buildQuery(entry, city) {
    // 로컬 사진 slug가 없거나 placeholder면 한글 이름 + 도시명으로 검색한다.
    if (!entry.slug || isPlaceholderSlug(entry.slug, city)) {
        return `${entry.koreanName} ${city}`;
    }
    // 정상 슬러그면 기존 방식 (도시명 중복 제거하며 공백 변환)
    const cityWords = city.toLowerCase().split(/\s+/);
    const cleaned = entry.slug.replace(/-/g, ' ').split(/\s+/)
        .filter((w) => !cityWords.includes(w.toLowerCase()))
        .join(' ')
        .trim();
    return `${cleaned} ${city}`;
}

// ────────────────────────────────────────────────────────────
// Google APIs
// ────────────────────────────────────────────────────────────
async function findPlace(query, key) {
    const url =
        `https://maps.googleapis.com/maps/api/place/findplacefromtext/json` +
        `?input=${encodeURIComponent(query)}` +
        `&inputtype=textquery` +
        `&fields=place_id,name,formatted_address` +
        `&language=ko` +
        `&key=${key}`;
    const res = await fetch(url);
    const d = await res.json();
    if (d.status !== 'OK' || !d.candidates?.length) {
        return { ok: false, status: d.status, error: d.error_message };
    }
    const c = d.candidates[0];
    return { ok: true, placeId: c.place_id, matchedName: c.name, address: c.formatted_address };
}

async function placeDetails(placeId, key) {
    const url =
        `https://maps.googleapis.com/maps/api/place/details/json` +
        `?place_id=${placeId}` +
        `&fields=photos,name,place_id,formatted_address` +
        `&language=ko` +
        `&key=${key}`;
    const res = await fetch(url);
    const d = await res.json();
    if (d.status !== 'OK') {
        return { ok: false, status: d.status, error: d.error_message };
    }
    const photos = (d.result.photos || []).slice(0, MAX_PHOTOS).map((p) => ({
        photoReference: p.photo_reference,
        width: p.width,
        height: p.height,
        attributions: p.html_attributions || [],
    }));
    return {
        ok: true,
        placeId: d.result.place_id,
        matchedName: d.result.name,
        address: d.result.formatted_address,
        photos,
    };
}

// ────────────────────────────────────────────────────────────
// 조회 단계
// ────────────────────────────────────────────────────────────
async function fetchStage(key) {
    console.log(`\n🌐 도시: ${CITY} (${cityDir})`);
    console.log(`📂 처리 대상 파일 (${FILES.length}): ${FILES.map((f) => f.name).join(', ')}`);
    console.log(`🔧 모드: ${PHOTOS_ONLY ? '검증된 placeId로 사진만 조회' : '이름 검색 후 장소+사진 조회'}`);

    const report = {
        generatedAt: new Date().toISOString(),
        city: CITY,
        cityDir,
        mode: PHOTOS_ONLY ? 'photos-only' : 'search',
        category: ONLY_CATEGORY || null,
        files: {},
    };

    for (const file of FILES) {
        const src = fs.readFileSync(file.path, 'utf-8');
        const entries = extractEntries(src);
        console.log(`\n\n📁 ${file.name} · ${entries.length} 카드`);
        report.files[file.name] = { count: entries.length, entries: [] };

        for (const entry of entries) {
            if (PHOTOS_ONLY) {
                if (MISSING_PHOTOS_ONLY && entry.hasPlacePhotos) {
                    report.files[file.name].entries.push({ ...entry, ok: false, skipped: true, reason: 'already has placePhotos' });
                    process.stdout.write(`  ↷ ${entry.koreanName} 이미 placePhotos 있음\n`);
                    continue;
                }
                process.stdout.write(`  ▶ ${entry.koreanName} [placeId=${entry.placeId || '없음'}] … `);
                if (!entry.placeId) {
                    console.log('❌ placeId 없음');
                    report.files[file.name].entries.push({
                        ...entry, ok: false, stage: 'input', status: 'MISSING_PLACE_ID',
                    });
                    continue;
                }

                const details = await placeDetails(entry.placeId, key);
                await sleep(150);
                if (!details.ok) {
                    console.log(`❌ details ${details.status}`);
                    report.files[file.name].entries.push({
                        ...entry, ok: false, stage: 'details', status: details.status,
                    });
                    continue;
                }
                if (details.placeId !== entry.placeId) {
                    throw new Error(`Place Details ID 불일치: ${entry.koreanName} ${entry.placeId} != ${details.placeId}`);
                }
                if (!details.photos.length) {
                    console.log('❌ 사진 없음');
                    report.files[file.name].entries.push({
                        ...entry, ok: false, stage: 'details', status: 'NO_PHOTOS',
                        matchedName: details.matchedName, address: details.address,
                    });
                    continue;
                }

                console.log(`✅ ${details.matchedName} · 사진 ${details.photos.length}장`);
                report.files[file.name].entries.push({
                    ...entry, ok: true,
                    placeId: entry.placeId,
                    matchedName: details.matchedName,
                    address: details.address,
                    placePhotos: details.photos,
                });
                continue;
            }

            const query = buildQuery(entry, CITY);
            process.stdout.write(`  ▶ ${entry.koreanName} [${query}] … `);

            const found = await findPlace(query, key);
            await sleep(150);
            if (!found.ok) {
                console.log(`❌ ${found.status}`);
                report.files[file.name].entries.push({ ...entry, ok: false, stage: 'find', status: found.status });
                continue;
            }

            const details = await placeDetails(found.placeId, key);
            await sleep(150);
            if (!details.ok) {
                console.log(`❌ details ${details.status}`);
                report.files[file.name].entries.push({
                    ...entry, ok: false, stage: 'details', status: details.status,
                    placeId: found.placeId, matchedName: found.matchedName,
                });
                continue;
            }

            console.log(`✅ ${found.matchedName} · 사진 ${details.photos.length}장`);
            report.files[file.name].entries.push({
                ...entry, ok: true,
                placeId: found.placeId,
                matchedName: found.matchedName,
                address: found.address,
                placePhotos: details.photos,
            });
        }
    }

    fs.mkdirSync(REPORT_DIR, { recursive: true });
    fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
    console.log(`\n📄 리포트 저장: ${REPORT_PATH}`);

    // 요약 통계
    let total = 0, ok = 0;
    const failed = [];
    for (const [fname, f] of Object.entries(report.files)) {
        for (const e of f.entries) {
            total++;
            if (e.ok) ok++;
            else failed.push({ file: fname, name: e.koreanName, slug: e.slug, reason: e.status });
        }
    }
    console.log(`\n━━━━━ 요약 ━━━━━`);
    console.log(`총 ${total} / ✅ 성공 ${ok} / ❌ 실패 ${failed.length}`);
    if (failed.length > 0) {
        console.log(`\n실패 카드:`);
        for (const f of failed) console.log(`  [${f.file}] ${f.name} (${f.slug}) → ${f.reason}`);
    }
}

// ────────────────────────────────────────────────────────────
// 적용 단계 — 리포트를 소스 파일에 삽입
// ────────────────────────────────────────────────────────────
function stringifyPlacePhotos(photos, indent) {
    const esc = (s) => JSON.stringify(s);
    const lines = photos.map((p) => {
        const attrs = (p.attributions || []).map(esc).join(', ');
        return `${indent}    { photoReference: ${esc(p.photoReference)}, width: ${p.width}, height: ${p.height}, attributions: [${attrs}] }`;
    });
    return `[\n${lines.join(',\n')}\n${indent}]`;
}

function applyStage() {
    if (!fs.existsSync(REPORT_PATH)) {
        throw new Error(`리포트 없음: ${REPORT_PATH}\n먼저 --apply 없이 실행하세요.`);
    }
    const report = JSON.parse(fs.readFileSync(REPORT_PATH, 'utf-8'));
    if (report.cityDir !== cityDir) {
        throw new Error(`리포트 도시 불일치: expected=${cityDir}, actual=${report.cityDir || 'missing'}`);
    }
    const expectedMode = PHOTOS_ONLY ? 'photos-only' : 'search';
    if (report.mode !== expectedMode) {
        throw new Error(`리포트 모드 불일치: expected=${expectedMode}, actual=${report.mode || 'legacy-search'}`);
    }
    if ((report.category || '') !== (ONLY_CATEGORY || '')) {
        throw new Error(`리포트 category 불일치: expected=${ONLY_CATEGORY || 'all'}, actual=${report.category || 'all'}`);
    }

    for (const file of FILES) {
        let src = fs.readFileSync(file.path, 'utf-8');
        const currentEntries = extractEntries(src);
        const currentNames = new Set(currentEntries.map((e) => e.koreanName));
        const currentPlaceIds = new Map(currentEntries.map((e) => [e.koreanName, e.placeId]));
        const reportEntries = report.files[file.name]?.entries || [];
        const reportNames = new Set(reportEntries.map((e) => e.koreanName));
        const missingInReport = [...currentNames].filter((name) => !reportNames.has(name));
        const staleInReport = [...reportNames].filter((name) => !currentNames.has(name));
        if (missingInReport.length || staleInReport.length) {
            throw new Error(
                `${file.name} 리포트/현재 info key 불일치` +
                `\n  report 누락: ${missingInReport.join(', ') || '없음'}` +
                `\n  stale 항목: ${staleInReport.join(', ') || '없음'}` +
                `\n리포트를 다시 생성하고 매칭을 검토하세요.`
            );
        }
        const entries = reportEntries.filter((e) => e.ok);
        if (PHOTOS_ONLY) {
            const changedPlaceIds = reportEntries.filter(
                (e) => currentPlaceIds.get(e.koreanName) !== e.placeId
            );
            if (changedPlaceIds.length) {
                throw new Error(
                    `${file.name} 리포트 생성 후 placeId 변경 감지: ` +
                    changedPlaceIds.map((e) => e.koreanName).join(', ') +
                    `\n현재 placeId로 photos-only 리포트를 다시 생성하세요.`
                );
            }
        }
        let updated = 0, skipped = 0;

        for (const e of entries) {
            const nameEsc = e.koreanName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const quotedKey = `(?:"${nameEsc}"|'${nameEsc}')`;

            if (PHOTOS_ONLY) {
                const placeIdEsc = e.placeId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const existingPhotosRe = new RegExp(
                    `(${quotedKey}:[\\s\\S]*?\\n(\\s*)placeId:\\s*["']${placeIdEsc}["'],)\\n\\2placePhotos:\\s*\\[[\\s\\S]*?\\n\\2\\],`
                );
                const existingMatch = src.match(existingPhotosRe);
                if (existingMatch) {
                    const indent = existingMatch[2];
                    const replacement = `${existingMatch[1]}\n${indent}placePhotos: ${stringifyPlacePhotos(e.placePhotos, indent)},`;
                    src = src.replace(existingPhotosRe, replacement);
                    updated++;
                    continue;
                }

                const placeIdRe = new RegExp(
                    `(${quotedKey}:[\\s\\S]*?\\n(\\s*)placeId:\\s*["']${placeIdEsc}["'],)`
                );
                const match = src.match(placeIdRe);
                if (!match) {
                    console.warn(`  ⚠️  ${file.name} · ${e.koreanName} → 검증된 placeId 라인 매칭 실패 (스킵)`);
                    continue;
                }
                const indent = match[2];
                const insert = `\n${indent}placePhotos: ${stringifyPlacePhotos(e.placePhotos, indent)},`;
                src = src.replace(placeIdRe, `$1${insert}`);
                updated++;
                continue;
            }

            const re = new RegExp(
                `(${quotedKey}:\\s*\\{\\s*\\n(\\s*)photos:\\s*\\[[^\\]]*\\],)\\n`
            );
            const match = src.match(re);
            if (!match) {
                console.warn(`  ⚠️  ${file.name} · ${e.koreanName} → photos 라인 매칭 실패 (스킵)`);
                continue;
            }
            const indent = match[2];
            const alreadyRe = new RegExp(`${quotedKey}:[\\s\\S]{0,500}placeId:`);
            const already = alreadyRe.test(src);

            if (already && !FORCE) { skipped++; continue; }

            if (already && FORCE) {
                // 기존 placeId + placePhotos 블록 제거 후 재삽입
                // 패턴: photos: [...],\n<indent>placeId: "...",\n<indent>placePhotos: [...],\n
                const stripRe = new RegExp(
                    `((${quotedKey}:\\s*\\{\\s*\\n\\s*photos:\\s*\\[[^\\]]*\\],)\\n)\\s*placeId:\\s*"[^"]*",\\n\\s*placePhotos:\\s*\\[[\\s\\S]*?\\n\\s*\\],\\n`
                );
                if (stripRe.test(src)) {
                    src = src.replace(stripRe, '$1');
                } else {
                    console.warn(`  ⚠️  ${file.name} · ${e.koreanName} → 기존 블록 제거 패턴 매칭 실패 (스킵)`);
                    continue;
                }
            }

            const insert = `\n${indent}placeId: "${e.placeId}",\n${indent}placePhotos: ${stringifyPlacePhotos(e.placePhotos, indent)},`;
            src = src.replace(re, `$1${insert}\n`);
            updated++;
        }

        fs.writeFileSync(file.path, src);
        console.log(`✅ ${file.name} · 신규/덮어쓰기 ${updated}개${skipped ? ` (이미 반영된 ${skipped}개 스킵)` : ''}`);
    }
}

// ────────────────────────────────────────────────────────────
async function main() {
    const key = loadApiKey();
    if (APPLY) applyStage();
    else {
        await fetchStage(key);
        console.log(`\n※ 조회만 완료. 리포트 확인 후 다음 실행:`);
        console.log(
            PHOTOS_ONLY
                ? `   node scripts/migrate-city-places.mjs ${cityDir} --photos-only --apply`
                : `   node scripts/migrate-city-places.mjs ${cityDir} --apply`
        );
    }
}

main().catch((e) => { console.error(e); process.exit(1); });
