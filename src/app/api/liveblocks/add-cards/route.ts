import { NextRequest, NextResponse } from 'next/server';
import { Liveblocks } from '@liveblocks/node';
import { createClient } from '@supabase/supabase-js';

const liveblocks = new Liveblocks({
    secret: process.env.LIVEBLOCKS_SECRET_KEY!,
});

const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
    try {
        // 1. 인증 확인
        const authHeader = request.headers.get('Authorization');
        const token = authHeader?.replace('Bearer ', '');
        if (!token) {
            return NextResponse.json({ error: '인증이 필요합니다.' }, { status: 401 });
        }

        const { data: { user }, error: userError } = await supabaseAdmin.auth.getUser(token);
        if (userError || !user) {
            return NextResponse.json({ error: '유효하지 않은 토큰입니다.' }, { status: 401 });
        }

        // 2. 요청 바디 파싱
        const body = await request.json();
        const { projectId, cards } = body;

        if (!projectId || !Array.isArray(cards) || cards.length === 0) {
            return NextResponse.json({ error: '잘못된 요청입니다.' }, { status: 400 });
        }

        // 3. 사용자가 해당 프로젝트 멤버인지 확인
        const { data: member } = await supabaseAdmin
            .from('project_members')
            .select('role')
            .eq('project_id', projectId)
            .eq('user_id', user.id)
            .single();

        if (!member || (member.role !== 'owner' && member.role !== 'editor')) {
            return NextResponse.json({ error: '권한이 없습니다.' }, { status: 403 });
        }

        // 4. Liveblocks room storage 가져오기
        const roomId = projectId;
        let storageData: any;
        try {
            storageData = await liveblocks.getStorageDocument(roomId, 'json');
        } catch (e) {
            // room이 아직 없으면 빈 storage로 시작
            storageData = { cards: {}, columns: {}, columnOrder: [] };
        }

        const existingCards = storageData.cards || {};
        const existingColumns = storageData.columns || {};

        // 5. inbox 컬럼 확인/생성
        if (!existingColumns['inbox']) {
            existingColumns['inbox'] = {
                id: 'inbox',
                title: '보관함',
                cardIds: [],
            };
        }

        // 6. 카드 추가
        const addedCardIds: string[] = [];
        for (const card of cards) {
            const randomSuffix = Math.random().toString(36).substring(2, 9);
            const newCardId = `card-${Date.now()}-${randomSuffix}`;

            existingCards[newCardId] = {
                id: newCardId,
                text: card.name,
                category: card.category, // 'food' | 'accommodation'
                city: card.city || '',
                coordinates: card.coordinates || null,
                description: card.description || '',
                icon: card.icon || '',
                priceRange: card.priceRange || '',
                openingHours: card.openingHours || '',
                michelin: card.michelin || '',
                specialty: card.specialty || '',
                features: card.features || [],
                reservation: card.reservation || false,
                restaurantType: card.restaurantType || '',
                cuisine: card.cuisine || '',
                accommodationType: card.accommodationType || '',
                checkInTime: card.checkInTime || '',
                checkOutTime: card.checkOutTime || '',
                tags: card.tags || [],
                isUserCreated: true,
                addedFromExplore: true,
            };

            // inbox 컬럼에 카드 추가
            if (!Array.isArray(existingColumns['inbox'].cardIds)) {
                existingColumns['inbox'].cardIds = [];
            }
            existingColumns['inbox'].cardIds.push(newCardId);
            addedCardIds.push(newCardId);
        }

        // 7. Liveblocks storage 업데이트
        await liveblocks.sendYjsBinaryUpdate(roomId, await buildStorageUpdate(existingCards, existingColumns, storageData));

        return NextResponse.json({
            success: true,
            addedCount: addedCardIds.length,
            message: `${addedCardIds.length}개의 카드가 추가됐습니다.`,
        });

    } catch (err) {
        console.error('[add-cards] 오류:', err);
        return NextResponse.json(
            { error: '카드 추가 중 오류가 발생했습니다.' },
            { status: 500 }
        );
    }
}

// Liveblocks JSON storage 직접 업데이트를 위한 헬퍼
async function buildStorageUpdate(cards: any, columns: any, originalStorage: any) {
    // JSON 방식으로 직접 스토리지 저장
    return Buffer.from(JSON.stringify({ cards, columns, columnOrder: originalStorage.columnOrder || [] }));
}
