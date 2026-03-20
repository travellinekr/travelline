import { NextResponse } from 'next/server';

// Open-Meteo 날씨 코드 → 이모지 + 한글 라벨
function getWeatherInfo(code: number): { emoji: string; label: string } {
  if (code === 0) return { emoji: '☀️', label: '맑음' };
  if (code <= 2) return { emoji: '🌤', label: '구름 조금' };
  if (code === 3) return { emoji: '☁️', label: '흐림' };
  if (code <= 49) return { emoji: '🌫', label: '안개' };
  if (code <= 59) return { emoji: '🌦', label: '이슬비' };
  if (code <= 69) return { emoji: '🌧', label: '비' };
  if (code <= 79) return { emoji: '❄️', label: '눈' };
  if (code <= 84) return { emoji: '🌨', label: '소나기' };
  if (code <= 99) return { emoji: '⛈', label: '뇌우' };
  return { emoji: '🌡', label: '' };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  const dateStr = searchParams.get('date'); // YYYY-MM-DD (옵션: 예보 날짜)

  if (!lat || !lng) {
    return NextResponse.json({ error: '좌표 필요' }, { status: 400 });
  }

  try {
    let url: string;

    if (dateStr) {
      // 예보: 16일 이내 날짜 조회
      const targetDate = new Date(dateStr);
      const today = new Date();
      const diffDays = Math.ceil((targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

      if (diffDays > 16 || diffDays < 0) {
        // 예보 범위 밖 → 데이터 없음 반환 (204 No Content)
        return NextResponse.json({ noData: true });
      }

      // 일별 예보 조회
      url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto&start_date=${dateStr}&end_date=${dateStr}`;
      const res = await fetch(url, { next: { revalidate: 3600 } });
      if (!res.ok) throw new Error('API 오류');

      const data = await res.json();
      const daily = data.daily;

      if (daily?.weathercode?.[0] == null) return NextResponse.json({ noData: true });

      const weatherInfo = getWeatherInfo(daily.weathercode[0]);
      const maxTemp = Math.round(daily.temperature_2m_max[0]);
      const minTemp = Math.round(daily.temperature_2m_min[0]);
      const precipProb = daily.precipitation_probability_max[0] ?? 0;

      return NextResponse.json({
        emoji: weatherInfo.emoji,
        label: weatherInfo.label,
        temp: maxTemp,        // 최고기온
        tempMin: minTemp,     // 최저기온
        precipProb,           // 강수확률 %
        isForecast: true,
      });

    } else {
      // 현재 날씨
      url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,weathercode,precipitation_probability&timezone=auto`;
      const res = await fetch(url, { next: { revalidate: 1800 } }); // 30분 캐시
      if (!res.ok) throw new Error('API 오류');

      const data = await res.json();
      const current = data.current;

      if (!current) return NextResponse.json({ noData: true });

      const weatherInfo = getWeatherInfo(current.weathercode);

      return NextResponse.json({
        emoji: weatherInfo.emoji,
        label: weatherInfo.label,
        temp: Math.round(current.temperature_2m),
        precipProb: current.precipitation_probability ?? 0,
        isForecast: false,
      });
    }

  } catch (error) {
    console.error('[/api/weather]', error);
    return NextResponse.json({ error: '날씨 조회 실패' }, { status: 500 });
  }
}
