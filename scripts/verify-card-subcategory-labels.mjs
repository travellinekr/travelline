// 카드 상단 서브카테고리가 조회조건 그룹명과 같은지 검증합니다.
import fs from 'node:fs';

const expected = {
  food: {
    korean: '한식', japanese: '일식', western: '양식', italian: '양식', french: '양식',
    seafood: '해산물', cafe: '카페', local: '로컬·길거리', 'street-food': '로컬·길거리',
    chinese: '기타', fusion: '기타',
  },
  accommodation: {
    hotel: '호텔', resort: '리조트', airbnb: '에어비앤비', hostel: '호스텔·게스트하우스', guesthouse: '호스텔·게스트하우스',
  },
  shopping: {
    'department-store': '백화점·쇼핑몰', mall: '백화점·쇼핑몰', market: '전통시장',
    supermarket: '마트·편의점', convenience: '마트·편의점', outlet: '아울렛',
    'duty-free': '면세점', souvenir: '기념품·특산품', specialty: '기념품·특산품', boutique: '기념품·특산품',
  },
  tourSpa: {
    'city-tour': '관광지', cultural: '관광지', 'island-hopping': '투어', adventure: '투어', cruise: '투어',
    spa: '스파·마사지', massage: '스파·마사지', 'theme-park': '테마파크',
    'water-sports': '액티비티', show: '공연·체험', workshop: '공연·체험',
  },
};

const path = 'src/utils/cardSubcategoryLabels.ts';
if (!fs.existsSync(path)) throw new Error(`${path} missing`);
const source = fs.readFileSync(path, 'utf8');
for (const [category, mapping] of Object.entries(expected)) {
  for (const [type, label] of Object.entries(mapping)) {
    const token = `${JSON.stringify(type)}: ${JSON.stringify(label)}`;
    if (!source.includes(token)) throw new Error(`${category}/${type} expected ${label}`);
  }
}
console.log('card_subcategory_labels=PASS');
