# City Images Directory

## 📁 Folder Structure

각 도시별로 월별 이미지를 저장하는 폴더 구조입니다.

```
public/images/cities/
├─ osaka/
│  ├─ jan/  (1월 ~ 10.jpg)
│  ├─ feb/  (2월 ~ 10.jpg)
│  ├─ mar/  (3월 ~ 10.jpg)
│  └─ ...
├─ tokyo/
├─ fukuoka/
└─ ...
```

## 🎨 Image Specifications

- **Size**: 256 x 256 px
- **Resolution**: 512 x 512 px
- **Format**: JPG or PNG
- **Naming**: 1.jpg ~ 10.jpg (도시별 월별 10개 이미지)

## 🏙️ Cities List (26 cities)

### 일본 (5)
- osaka (오사카)
- tokyo (도쿄)
- fukuoka (후쿠오카)
- sapporo (삿포로)
- okinawa (오키나와)

### 중국 / 대만 (3)
- taipei (타이베이)
- shanghai (상하이)
- dalian (다롄)

### 동남아시아 (7)
- da-nang (다낭)
- bangkok (방콕)
- nha-trang (나트랑)
- bali (발리)
- cebu (세부)
- chiang-mai (치앙마이)
- da-lat (달랏)

### 이색 / 장거리 (4)
- guam (괌)
- ulaanbaatar (울란바토르)
- paris (파리)
- mallorca (마요르카)

## 📝 Naver Cloud AI (CLOVA) Image Generation Prompts

나노바나나 API에 요청할 프롬프트 예시:

### 오사카 (Osaka)
```
3월: "오사카 벚꽃 3월 봄 랜드마크 512x512 고화질"
7월: "오사카 여름 축제 야경 512x512 고화질"
11월: "오사카 단풍 가을 풍경 512x512 고화질"
```

### 도쿄 (Tokyo)
```
3월: "도쿄 벚꽃 봄 타워 512x512 고화질"
12월: "도쿄 겨울 일루미네이션 야경 512x512 고화질"
```

### 발리 (Bali)
```
6월: "발리 사원 건기 여름 512x512 고화질"
12월: "발리 해변 우기 구름 512x512 고화질"
```

## 🔧 Usage

이미지 로드 유틸리티:

```typescript
export function getCityImage(cityEngName: string, month: number): string {
  const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  const monthFolder = monthNames[month - 1];
  const randomIndex = Math.floor(Math.random() * 10) + 1;
  
  return `/images/cities/${cityEngName}/${monthFolder}/${randomIndex}.jpg`;
}
```

## ⚠️ Next Steps

1. 나노바나나에 각 도시별/월별 이미지 생성 요청
2. 생성된 이미지를 해당 폴더에 저장
3. getCityImage() 함수를 사용하여 카드에 이미지 적용
