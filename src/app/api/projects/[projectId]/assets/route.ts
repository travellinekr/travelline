import { NextRequest, NextResponse } from 'next/server';
import { verifyProjectAccess, isAccessError } from '@/lib/server/projectAuth';
import { ASSET_TYPES, CURRENCIES } from '@/data/expenseCodes';

// POST /api/projects/[projectId]/assets — 자산(환전·트래블카드 충전) 1건 등록
//
// 조회는 GET /expenses 가 함께 내려주므로 여기엔 GET 이 없다.
// krw_cost = 이 자산을 마련하려고 실제로 낸 원화. 총사용한경비의 기준이 되는 값이라
// 환율 계산 없이 "원화가 나간 시점"을 정확히 잡을 수 있다.

const ASSET_CODES = new Set(ASSET_TYPES.map((t) => t.code as string));
const CURRENCY_CODES = new Set(CURRENCIES.map((c) => c.code as string));

export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ projectId: string }> },
) {
    const { projectId } = await params;
    const access = await verifyProjectAccess(request, projectId, 'write');
    if (isAccessError(access)) return access;
    const { admin, userId } = access;

    let body: any;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: '잘못된 요청이에요.' }, { status: 400 });
    }

    const amount = Number(body?.amount);
    const currency = String(body?.currency ?? '');
    const assetType = String(body?.asset_type ?? '');
    const krwCostRaw = body?.krw_cost;

    if (!Number.isFinite(amount) || amount < 0) {
        return NextResponse.json({ error: '금액을 확인해주세요.' }, { status: 400 });
    }
    if (!CURRENCY_CODES.has(currency)) {
        return NextResponse.json({ error: '지원하지 않는 통화예요.' }, { status: 400 });
    }
    if (!ASSET_CODES.has(assetType)) {
        return NextResponse.json({ error: '자산 구분을 확인해주세요.' }, { status: 400 });
    }

    let krwCost: number | null = null;
    if (krwCostRaw !== undefined && krwCostRaw !== null && krwCostRaw !== '') {
        krwCost = Number(krwCostRaw);
        if (!Number.isFinite(krwCost) || krwCost < 0) {
            return NextResponse.json({ error: '원화 금액을 확인해주세요.' }, { status: 400 });
        }
    } else if (currency === 'KRW') {
        // 원화 자산은 낸 돈이 곧 금액 → 사용자가 따로 입력하지 않아도 자동 보정
        krwCost = amount;
    }

    const { data, error } = await admin
        .from('trip_assets')
        .insert({
            project_id: projectId,
            currency,
            asset_type: assetType,
            amount,
            krw_cost: krwCost,
            created_by: userId,
        })
        .select('id, currency, asset_type, amount, krw_cost, created_by, created_at')
        .single();

    if (error) {
        console.error('[assets] POST 실패:', error.message);
        return NextResponse.json({ error: '자산을 저장하지 못했어요.' }, { status: 500 });
    }

    return NextResponse.json({
        asset: { ...data, amount: Number(data.amount), krw_cost: data.krw_cost === null ? null : Number(data.krw_cost) },
    }, { status: 201 });
}
