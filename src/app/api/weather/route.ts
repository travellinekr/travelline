import { NextResponse } from 'next/server';

// Open-Meteo 날씨 코드 → 이모지 + 한글 라벨
function getWeatherInfo(code: number): { emoji: string; label: string } {
  if (code === 0) return { emoji: '☀️', label: '맑음' };
  if (code <= 2) return { emoji: '🌤', label: '구름 조금' };
  if (code === 3) return { emoji: '☁️', label: '흐림' };
  if (code <= 49) return { emoji: '⛅', label: '안개/구름' };
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
    let url = '';

    // 한국 범위 판단 (위도 33~38°N, 경도 124~132°E) → KMA 모델
    // 해외: 7일 이내 → icon_seamless (고정밀), 8일 이상 → gfs_seamless (16일 커버)
    const latNum = parseFloat(lat);
    const lngNum = parseFloat(lng);
    const isKorea = latNum >= 33 && latNum <= 38 && lngNum >= 124 && lngNum <= 132;

    if (dateStr) {
      // 예보: 16일 이내 날짜 조회
      const targetDate = new Date(dateStr);
      const today = new Date();
      const diffDays = Math.ceil((targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

      if (diffDays > 16 || diffDays < 0) {
        // 예보 범위 밖 → 데이터 없음 반환 (204 No Content)
        return NextResponse.json({ noData: true });
      }

      // 모델 선택: 한국 → kma_seamless, 해외 → icon_seamless 시도 후 noData면 gfs_seamless로 폴백
      const primaryModel = isKorea ? 'kma_seamless' : 'icon_seamless';
      const fallbackModel = isKorea ? null : 'gfs_seamless';

      // 일별 예보 조회. 실패(non-ok) 시 null 반환해서 호출 측에서 폴백 결정.
      const fetchDaily = async (model: string) => {
        const u = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto&models=${model}&start_date=${dateStr}&end_date=${dateStr}`;
        try {
          const r = await fetch(u, { next: { revalidate: 3600 } });
          if (!r.ok) return null;
          return await r.json();
        } catch {
          return null;
        }
      };

      // primary 시도 → 실패(non-ok/throw) 또는 null 데이터면 fallback 시도
      let data = await fetchDaily(primaryModel);
      let daily = data?.daily;

      if ((!data || daily?.weathercode?.[0] == null) && fallbackModel) {
        data = await fetchDaily(fallbackModel);
        daily = data?.daily;
      }

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
      // 현재 날씨 (항상 단기 모델 사용)
      const model = isKorea ? 'kma_seamless' : 'icon_seamless';
      url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,weathercode,precipitation_probability&timezone=auto&models=${model}`;
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
