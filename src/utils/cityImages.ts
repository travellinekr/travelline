// 도시 이미지 유틸리티
// public/images/cities/ 폴더에서 이미지를 가져옵니다

const MONTH_NAMES = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

/**
 * 로컬 폴더에서 도시 이미지를 랜덤으로 가져옵니다
 * @param cityEngName - 도시 영문명 (소문자, 하이픈 사용)
 * @param month - 월 (1-12)
 * @returns 이미지 경로 또는 null
 */
export function getCityImage(cityEngName: string, month: number): string | null {
    // 현재는 오사카 1월만 지원
    if (cityEngName.toLowerCase() !== 'osaka' || month !== 1) {
        return null;
    }

    const monthFolder = MONTH_NAMES[month - 1];
    const randomIndex = Math.floor(Math.random() * 10) + 1;

    return `/images/cities/${cityEngName.toLowerCase()}/${monthFolder}/${randomIndex}.jpg`;
}
