#!/usr/bin/env node
/**
 * GPS 좌표 자동 검증 및 업데이트 스크립트 v2
 * 
 * 개선사항:
 * - 라인 단위 직접 수정으로 정확성 향상
 * - 업데이트 전후 검증 추가
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 설정
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const ACCOMMODATIONS_FILE = path.join(__dirname, '../src/data/accommodations.ts');
const BACKUP_FILE = path.join(__dirname, '../src/data/accommodations.ts.backup');
const REPORT_FILE = path.join(__dirname, '../coordinate-update-report.json');
const ENV_FILE = path.join(__dirname, '../.env.local');

const RATE_LIMIT_MS = 100;
const MAX_RETRIES = 3;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 유틸리티 함수
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function loadEnv() {
    const envContent = fs.readFileSync(ENV_FILE, 'utf-8');
    const apiKeyMatch = envContent.match(/NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=(.+)/);
    if (!apiKeyMatch) {
        throw new Error('Google Maps API 키를 찾을 수 없습니다.');
    }
    return apiKeyMatch[1].trim();
}

async function geocodeAddress(hotelName, cityName, apiKey, retries = 0) {
    const query = `${hotelName} ${cityName}`;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(query)}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === 'OK' && data.results.length > 0) {
            const location = data.results[0].geometry.location;
            return {
                success: true,
                lat: location.lat,
                lng: location.lng,
                formattedAddress: data.results[0].formatted_address,
                placeId: data.results[0].place_id
            };
        } else if (data.status === 'OVER_QUERY_LIMIT' && retries < MAX_RETRIES) {
            console.log(`⚠️  Rate limit 도달, ${retries + 1}초 대기 후 재시도...`);
            await sleep((retries + 1) * 1000);
            return geocodeAddress(hotelName, cityName, apiKey, retries + 1);
        } else {
            return {
                success: false,
                error: data.status,
                query
            };
        }
    } catch (error) {
        if (retries < MAX_RETRIES) {
            console.log(`⚠️  API 오류, ${retries + 1}초 대기 후 재시도...`);
            await sleep((retries + 1) * 1000);
            return geocodeAddress(hotelName, cityName, apiKey, retries + 1);
        }
        return {
            success: false,
            error: error.message,
            query
        };
    }
}

function parseAccommodationsFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    const hotels = [];
    let currentCity = null;
    let currentHotel = null;
    let lineNumber = 0;

    for (const line of lines) {
        lineNumber++;

        // 도시명 찾기
        const cityMatch = line.match(/"([^"]+)":\s*\[/);
        if (cityMatch) {
            currentCity = cityMatch[1];
            continue;
        }

        // 숙소명 찾기
        const nameMatch = line.match(/name:\s*"([^"]+)"/);
        if (nameMatch && currentCity) {
            currentHotel = {
                name: nameMatch[1],
                city: currentCity,
                nameLine: lineNumber
            };
            continue;
        }

        // 좌표 찾기
        const coordMatch = line.match(/coordinates:\s*\{\s*lat:\s*(-?[\d.]+),\s*lng:\s*(-?[\d.]+)\s*\}/);
        if (coordMatch && currentHotel) {
            currentHotel.originalLat = parseFloat(coordMatch[1]);
            currentHotel.originalLng = parseFloat(coordMatch[2]);
            currentHotel.coordLine = lineNumber;

            hotels.push(currentHotel);
            currentHotel = null;
        }
    }

    return { hotels, lines };
}

function updateCoordinatesInFile(filePath, updates) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    // 라인 번호 기반으로 직접 수정
    updates.forEach(update => {
        const { coordLine, originalLat, originalLng, newLat, newLng } = update;

        if (coordLine && coordLine > 0 && coordLine <= lines.length) {
            const line = lines[coordLine - 1];

            // 좌표 라인인지 확인
            if (line.includes('coordinates:')) {
                // 정확한 포맷으로 교체
                const updatedLine = line.replace(
                    /coordinates:\s*\{\s*lat:\s*-?[\d.]+,\s*lng:\s*-?[\d.]+\s*\}/,
                    `coordinates: { lat: ${newLat}, lng: ${newLng} }`
                );

                lines[coordLine - 1] = updatedLine;
            }
        }
    });

    return lines.join('\n');
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 메인 로직
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

async function main() {
    console.log('\n🗺️  GPS 좌표 자동 검증 및 업데이트 v2\n');

    // 1. 환경 변수 로드
    console.log('📋 1/5: 환경 설정 로딩...');
    const apiKey = loadEnv();
    console.log('✅ Google Maps API 키 확인 완료\n');

    // 2. 원본 파일 백업
    console.log('💾 2/5: 원본 파일 백업...');
    fs.copyFileSync(ACCOMMODATIONS_FILE, BACKUP_FILE);
    console.log(`✅ 백업 완료: ${BACKUP_FILE}\n`);

    // 3. 파일 파싱
    console.log('📖 3/5: 숙소 데이터 파싱...');
    const { hotels, lines: originalLines } = parseAccommodationsFile(ACCOMMODATIONS_FILE);
    console.log(`✅ ${hotels.length}개 숙소 발견\n`);

    // 4. 좌표 검증
    console.log('🔍 4/5: GPS 좌표 검증 중...\n');

    const report = {
        timestamp: new Date().toISOString(),
        totalProcessed: 0,
        updated: [],
        failed: [],
        skipped: []
    };

    const updates = [];
    let processedCount = 0;

    const citiesProcessed = new Set();

    for (const hotel of hotels) {
        processedCount++;

        // 도시별로 헤더 출력
        if (!citiesProcessed.has(hotel.city)) {
            const cityHotels = hotels.filter(h => h.city === hotel.city);
            console.log(`\n📍 ${hotel.city} (${cityHotels.length}개 숙소)`);
            citiesProcessed.add(hotel.city);
        }

        process.stdout.write(`  [${processedCount}/${hotels.length}] ${hotel.name}... `);

        // API 호출
        const result = await geocodeAddress(hotel.name, hotel.city, apiKey);
        await sleep(RATE_LIMIT_MS);

        if (result.success) {
            const latDiff = Math.abs(result.lat - hotel.originalLat);
            const lngDiff = Math.abs(result.lng - hotel.originalLng);

            if (latDiff > 0.001 || lngDiff > 0.001) {
                console.log(`🔄 업데이트 (차이: ${(latDiff * 111).toFixed(1)}km)`);

                updates.push({
                    name: hotel.name,
                    city: hotel.city,
                    coordLine: hotel.coordLine,
                    originalLat: hotel.originalLat,
                    originalLng: hotel.originalLng,
                    newLat: result.lat,
                    newLng: result.lng
                });

                report.updated.push({
                    city: hotel.city,
                    name: hotel.name,
                    oldCoordinates: { lat: hotel.originalLat, lng: hotel.originalLng },
                    newCoordinates: { lat: result.lat, lng: result.lng },
                    formattedAddress: result.formattedAddress
                });
            } else {
                console.log('✅ 정확함');
                report.skipped.push({
                    city: hotel.city,
                    name: hotel.name,
                    reason: 'coordinates_match'
                });
            }
        } else {
            console.log(`❌ 실패 (${result.error})`);
            report.failed.push({
                city: hotel.city,
                name: hotel.name,
                query: result.query,
                error: result.error
            });
        }
    }

    report.totalProcessed = processedCount;

    // 5. 파일 업데이트
    console.log('\n\n💾 5/5: 파일 업데이트 중...');

    if (updates.length > 0) {
        const updatedContent = updateCoordinatesInFile(ACCOMMODATIONS_FILE, updates);
        fs.writeFileSync(ACCOMMODATIONS_FILE, updatedContent, 'utf-8');
        console.log(`✅ ${updates.length}개 좌표 업데이트 완료`);

        // 검증: 실제로 반영되었는지 확인
        const { hotels: updatedHotels } = parseAccommodationsFile(ACCOMMODATIONS_FILE);
        let verifiedCount = 0;

        for (const update of updates) {
            const updatedHotel = updatedHotels.find(h => h.name === update.name && h.city === update.city);
            if (updatedHotel &&
                Math.abs(updatedHotel.originalLat - update.newLat) < 0.0001 &&
                Math.abs(updatedHotel.originalLng - update.newLng) < 0.0001) {
                verifiedCount++;
            }
        }

        console.log(`✅ 검증: ${verifiedCount}/${updates.length}개 실제 반영 확인`);
    } else {
        console.log('✅ 업데이트 필요 없음');
    }

    // 리포트 저장
    fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2), 'utf-8');
    console.log(`✅ 리포트 저장: ${REPORT_FILE}`);

    // 최종 결과
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📊 최종 결과');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`✅ 총 처리: ${report.totalProcessed}개`);
    console.log(`🔄 업데이트: ${report.updated.length}개`);
    console.log(`✅ 정확함: ${report.skipped.length}개`);
    console.log(`❌ 실패: ${report.failed.length}개`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    if (report.failed.length > 0) {
        console.log('⚠️  실패한 항목:');
        report.failed.forEach(item => {
            console.log(`   - ${item.city}: ${item.name} (${item.error})`);
        });
        console.log('');
    }

    console.log('✨ 완료!\n');
}

main().catch(error => {
    console.error('\n❌ 오류 발생:', error.message);
    console.error(error.stack);
    process.exit(1);
});
