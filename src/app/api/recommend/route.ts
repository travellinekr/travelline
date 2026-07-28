import { NextResponse } from "next/server";
import { callModel } from "@/lib/ai/callModel";

// 언어별 프롬프트 설정 (확장성을 위해 객체로 관리)
const PROMPT_CONFIG: any = {
  ko: {
    role: "You are a professional travel consultant for Korean tourists.",
    outputLang: "Korean",
    condition: "Popular among Koreans.",
  },
  en: {
    role: "You are a global travel expert.",
    outputLang: "English",
    condition: "Popular among international travelers.",
  },
  ja: {
    role: "You are a professional travel consultant for Japanese tourists.",
    outputLang: "Japanese",
    condition: "Popular among Japanese travelers (clean, safe, scenic).",
  },
};

export async function POST(req: Request) {
  const body = await req.json();
  const { month, locale = "ko" } = body; // locale이 없으면 기본값 'ko'
  
  const apiKey = process.env.GEMINI_API_KEY;

  // 선택된 언어 설정 가져오기 (없으면 영어로 폴백)
  const config = PROMPT_CONFIG[locale] || PROMPT_CONFIG["en"];

  // 가짜 데이터 (에러 시 방어용 - 여기서는 편의상 한글로 둡니다. 나중엔 이것도 다국어 처리 필요)
  const getMockData = () => ({
    recommendations: [
      {
        city: "Chiang Mai",
        country: "Thailand",
        weather_summary: "Perfect dry season",
        temperature: "25°C",
        reason: "Best time to visit with cool breeze."
      }
    ]
  });

  try {
    if (!apiKey) throw new Error("키가 없습니다");

    // 💥 [핵심] 언어 설정에 따라 프롬프트가 동적으로 바뀝니다.
    const promptText = `
      ${config.role}
      Recommend 3 best travel destinations in Asia for "${month} month".
      
      Conditions:
      1. Best weather (Dry season).
      2. ${config.condition}
      3. **MUST OUTPUT IN ${config.outputLang.toUpperCase()} LANGUAGE.**
      
      Output Format:
      Return ONLY a raw JSON object. No markdown.
      
      JSON Structure:
      {
        "recommendations": [
          {
            "city": "City Name (${config.outputLang})",
            "country": "Country Name (${config.outputLang})",
            "weather_summary": "Weather description (${config.outputLang})",
            "temperature": "Avg Temp",
            "reason": "Recommendation reason (${config.outputLang})"
          }
        ]
      }
    `;

    // 공용 callModel 사용 → 모델 폴백 체인 + 방어적 파싱 + JSON 강제 를 그대로 상속
    const text = await callModel({
      messages: [{ role: "user", content: promptText }],
      json: true,
      thinkingBudget: 0,
    });

    return NextResponse.json(JSON.parse(text));

  } catch (error) {
    console.error("🚨 에러 발생:", error);
    return NextResponse.json(getMockData());
  }
}