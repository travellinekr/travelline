#!/usr/bin/env node
/**
 * 나트랑 신규 스파 10개 인포팝업 보강:
 *  - Google Places Text Search 로 좌표 검증(+정정)
 *  - Places Photo 로 대표 이미지 다운로드 → public/images/nha-trang/info/tourSpa/<slug>.jpg
 *
 * 실행: node scripts/enrich-nha-trang-spa.mjs          (조회+다운로드+리포트, 파일수정 X)
 *      node scripts/enrich-nha-trang-spa.mjs --apply   (tourSpa.ts 좌표 + info/tourSpa.ts photos 반영)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const APPLY = process.argv.includes('--apply');

const ARR_FILE = path.join(ROOT, 'src/data/cities/nha-trang/tourSpa.ts');
const INFO_FILE = path.join(ROOT, 'src/data/cities/nha-trang/info/tourSpa.ts');
const IMG_DIR = path.join(ROOT, 'public/images/nha-trang/info/tourSpa');
const REPORT = path.join(ROOT, 'nha-trang-spa-enrich-report.json');

// 신규 스파 10개: name(파일과 정확히 일치) + 검색 쿼리 + 이미지 슬러그
const SPAS = [
    { name: '궁스파', query: '궁스파 goongspa Nha Trang massage', slug: 'gung-spa-nha-trang' },
    { name: '반얀스파', query: '반얀스파 banyan spa Nha Trang massage', slug: 'banyan-spa-nha-trang' },
    { name: '제이스파', query: '제이스파 J spa Nha Trang massage', slug: 'j-spa-nha-trang' },
    { name: '원스파', query: '원스파 one spa Nha Trang massage', slug: 'one-spa-nha-trang' },
    { name: '더 힐스파', query: '더힐스파 the hill spa Nha Trang massage', slug: 'the-hill-spa-nha-trang' },
    { name: '루나스파', query: '루나스파 luna spa Nha Trang massage', slug: 'luna-spa-nha-trang' },
    { name: '아만스파', query: '아만스파 aman spa Nha Trang massage', slug: 'aman-spa-nha-trang' },
    { name: '그랜드스파', query: '그랜드스파 grand spa Nha Trang massage', slug: 'grand-spa-nha-trang' },
    { name: '라군스파 깜란', query: '라군스파 lagoon spa Cam Ranh Nha Trang massage', slug: 'lagoon-spa-cam-ranh' },
    { name: '센스파', query: '센스파 sen spa Nha Trang massage', slug: 'sen-spa-nha-trang' },
];

function loadKey() {
    const env = fs.readFileSync(path.join(ROOT, '.env.local'), 'utf-8');
    const m = env.match(/NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=(.+)/);
    if (!m) throw new Error('Google Maps API 키 없음');
    return m[1].trim().replace(/["']/g, '');
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// 파일에서 현재 좌표 읽기 (name → {lat,lng})
function readCurrentCoords() {
    const src = fs.readFileSync(ARR_FILE, 'utf-8');
    const map = {};
    const re = /name:\s*"([^"]+)"[\s\S]*?coordinates:\s*\{\s*lat:\s*(-?[\d.]+),\s*lng:\s*(-?[\d.]+)\s*\}/g;
    let m;
    while ((m = re.exec(src))) map[m[1]] = { lat: parseFloat(m[2]), lng: parseFloat(m[3]) };
    return map;
}

async function textSearch(query, key) {
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${key}`;
    const d = await (await fetch(url)).json();
    if (d.status !== 'OK' || !d.results?.length) return { ok: false, status: d.status };
    const r = d.results[0];
    return {
        ok: true,
        matchedName: r.name,
        lat: r.geometry.location.lat,
        lng: r.geometry.location.lng,
        address: r.formatted_address,
        placeId: r.place_id,
        rating: r.rating,
        photoRef: r.photos?.[0]?.photo_reference || null,
    };
}

async function downloadPhoto(photoRef, dest, key) {
    const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=${photoRef}&key=${key}`;
    const res = await fetch(url); // 302 → 실제 이미지로 리다이렉트, fetch 가 자동 추적
    if (!res.ok) return false;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 1000) return false; // 에러 이미지 방지
    fs.writeFileSync(dest, buf);
    return buf.length;
}

async function main() {
    const key = loadKey();
    fs.mkdirSync(IMG_DIR, { recursive: true });
    const current = readCurrentCoords();
    const results = [];

    for (const spa of SPAS) {
        process.stdout.write(`\n▶ ${spa.name} … `);
        const r = await textSearch(spa.query, key);
        await sleep(200);
        if (!r.ok) {
            console.log(`❌ 검색 실패 (${r.status})`);
            results.push({ ...spa, ok: false, status: r.status });
            continue;
        }
        const cur = current[spa.name];
        const diffKm = cur ? Math.hypot(r.lat - cur.lat, r.lng - cur.lng) * 111 : null;
        let photoSaved = false, photoBytes = 0;
        if (r.photoRef) {
            const dest = path.join(IMG_DIR, `${spa.slug}.jpg`);
            photoBytes = await downloadPhoto(r.photoRef, dest, key);
            photoSaved = !!photoBytes;
            await sleep(200);
        }
        console.log(
            `✅ 매칭="${r.matchedName}" | 좌표차 ${diffKm != null ? diffKm.toFixed(2) + 'km' : 'N/A'} | 사진 ${photoSaved ? Math.round(photoBytes / 1024) + 'KB' : '없음'}`
        );
        results.push({
            ...spa, ok: true, matchedName: r.matchedName, address: r.address, rating: r.rating,
            oldCoord: cur, newCoord: { lat: r.lat, lng: r.lng }, diffKm,
            photoSaved, photoPath: photoSaved ? `/images/nha-trang/info/tourSpa/${spa.slug}.jpg` : null,
        });
    }

    fs.writeFileSync(REPORT, JSON.stringify(results, null, 2));
    console.log(`\n\n📄 리포트: ${REPORT}`);

    if (!APPLY) {
        console.log('\n※ 조회/다운로드만 완료. 매칭 확인 후 `--apply` 로 파일 반영.');
        return;
    }

    // ── 파일 반영 ──
    let arrSrc = fs.readFileSync(ARR_FILE, 'utf-8');
    let infoSrc = fs.readFileSync(INFO_FILE, 'utf-8');
    let coordUpdated = 0, photoUpdated = 0;

    for (const r of results) {
        if (!r.ok) continue;
        // 좌표: 100m 이상 차이날 때만 정정
        if (r.diffKm != null && r.diffKm > 0.1) {
            const nameEsc = r.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const re = new RegExp(`(name:\\s*"${nameEsc}"[\\s\\S]*?coordinates:\\s*\\{\\s*lat:\\s*)-?[\\d.]+(,\\s*lng:\\s*)-?[\\d.]+(\\s*\\})`);
            if (re.test(arrSrc)) {
                arrSrc = arrSrc.replace(re, `$1${r.newCoord.lat}$2${r.newCoord.lng}$3`);
                coordUpdated++;
            }
        }
        // photos: [] → [경로]
        if (r.photoSaved) {
            const nameEsc = r.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const re = new RegExp(`("${nameEsc}":\\s*\\{\\s*\\n\\s*photos:\\s*)\\[\\]`);
            if (re.test(infoSrc)) {
                infoSrc = infoSrc.replace(re, `$1["${r.photoPath}"]`);
                photoUpdated++;
            }
        }
    }
    fs.writeFileSync(ARR_FILE, arrSrc);
    fs.writeFileSync(INFO_FILE, infoSrc);
    console.log(`\n✅ 좌표 정정 ${coordUpdated}개, 사진 경로 반영 ${photoUpdated}개`);
}

main().catch((e) => { console.error(e); process.exit(1); });
