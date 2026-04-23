import { NextRequest, NextResponse } from 'next/server';
import { Liveblocks } from '@liveblocks/node';
import { createClient } from '@supabase/supabase-js';

// 빌드 타임 환경변수 오류 방지 → 런타임에 생성
function getLiveblocks() {
    const secret = process.env.LIVEBLOCKS_SECRET_KEY;
    if (!secret) throw new Error('LIVEBLOCKS_SECRET_KEY 환경변수가 없습니다.');
    return new Liveblocks({ secret });
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function POST(request: NextRequest) {
    if (!supabaseUrl || !supabaseServiceRoleKey) {
        return NextResponse.json({ error: '환경 변수가 설정되지 않았습니다.' }, { status: 500 });
    }
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);
    const liveblocks = getLiveblocks();
    try {
        // 인증 확인
        const authHeader = request.headers.get('Authorization');
        const token = authHeader?.replace('Bearer ', '');
        if (!token) {
            return NextResponse.json({ error: '인증이 필요합니다.' }, { status: 401 });
        }

        const { data: { user }, error: userError } = await supabaseAdmin.auth.getUser(token);
        if (userError || !user) {
            return NextResponse.json({ error: '유효하지 않은 토큰입니다.' }, { status: 401 });
        }

        const body = await request.json();
        const { city, projectIds } = body as { city: string; projectIds: string[] };

        if (!city || !Array.isArray(projectIds) || projectIds.length === 0) {
            return NextResponse.json({ matchingIds: [] });
        }

        const normalizedCity = city.toLowerCase().trim();

        // 각 프로젝트의 Liveblocks storage에서 destination 카드의 도시 확인
        const results = await Promise.allSettled(
            projectIds.map(async (projectId) => {
                try {
                    const storage = await liveblocks.getStorageDocument(projectId, 'json') as any;
                    const cards = storage?.cards || {};

                    // destination 카드 찾기
                    const destinationCard = Object.values(cards).find((card: any) =>
                        card.category === 'destination' && card.city
                    ) as any;

                    if (!destinationCard) {
                        // destination 카드가 없으면 (아직 목적지 미설정) → 허용
                        return { projectId, match: true, city: null };
                    }

                    const projectCity = (destinationCard.city || '').toLowerCase().trim();
                    const match = projectCity.includes(normalizedCity) || normalizedCity.includes(projectCity);

                    return { projectId, match, city: destinationCard.city };
                } catch {
                    // room이 없거나 오류 → 허용
                    return { projectId, match: true, city: null };
                }
            })
        );

        const matchingIds = results
            .filter((r) => r.status === 'fulfilled' && r.value.match)
            .map((r) => (r as PromiseFulfilledResult<any>).value.projectId);

        const cityMap: Record<string, string | null> = {};
        results.forEach((r) => {
            if (r.status === 'fulfilled') {
                cityMap[r.value.projectId] = r.value.city;
            }
        });

        return NextResponse.json({ matchingIds, cityMap });

    } catch (err) {
        console.error('[match-city] 오류:', err);
        return NextResponse.json({ matchingIds: [] }, { status: 500 });
    }
}
