import { NextRequest, NextResponse } from 'next/server';
import {
    verifyProjectAccess, isAccessError,
    authenticateRequest, resolveProjectRole,
} from '@/lib/server/projectAuth';
import { PAYMENT_TYPES, CURRENCIES } from '@/data/expenseCodes';
import { convertToKrw } from '@/lib/server/fxRate';

// GET  /api/projects/[projectId]/expenses  — 경비 창에 필요한 3종을 한 번에 반환
//      { budget, assets, expenses }  (라운드트립 3회 → 1회)
// POST /api/projects/[projectId]/expenses  — 지출 1건 등록
//
// 인증: Bearer <Supabase 세션 토큰>. 읽기는 멤버 전원, 쓰기는 owner/editor.

const PAYMENT_CODES = new Set(PAYMENT_TYPES.map((t) => t.code as string));
const CURRENCY_CODES = new Set(CURRENCIES.map((c) => c.code as string));

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ projectId: string }> },
) {
    const { projectId } = await params;

    // 권한 조회와 데이터 조회를 한 번에 병렬로 던진다.
    // 순차로 하면 (getUser → 권한 → 데이터) 3단계가 그대로 지연으로 쌓인다(각 250ms 대).
    // 데이터는 권한 판정 전에 읽지만 서버 안에서만 돌고, 권한이 없으면 버리고 403 을 낸다.
    const auth = await authenticateRequest(request);
    if (auth instanceof NextResponse) return auth;
    const { admin, userId } = auth;

    const [projectRes, memberRes, budgetRes, assetsRes, expensesRes] = await Promise.all([
        admin.from('projects').select('user_id').eq('id', projectId).maybeSingle(),
        admin.from('project_members').select('role').eq('project_id', projectId).eq('user_id', userId).maybeSingle(),

        admin.from('trip_budget').select('amount_krw, updated_at').eq('project_id', projectId).maybeSingle(),
        admin.from('trip_assets')
            .select('id, currency, asset_type, amount, krw_cost, created_by, created_at')
            .eq('project_id', projectId)
            .order('created_at', { ascending: true }),
        admin.from('trip_expenses')
            .select('id, card_id, card_name, card_category, currency, payment_type, amount, krw_amount, title, payer_id, created_by, created_at')
            .eq('project_id', projectId)
            .order('created_at', { ascending: true }),
    ]);

    const role = resolveProjectRole(projectRes.data?.user_id, memberRes.data?.role, userId);
    if (!role) {
        // 멤버가 아님 = 손님. 경비는 금전 정보라 존재 여부도 알리지 않고 403.
        return NextResponse.json({ error: '여행 참여자만 이용할 수 있어요.' }, { status: 403 });
    }

    const err = budgetRes.error || assetsRes.error || expensesRes.error;
    if (err) {
        console.error('[expenses] GET 실패:', err.message);
        return NextResponse.json({ error: '경비 정보를 불러오지 못했어요.' }, { status: 500 });
    }

    return NextResponse.json({
        budget: budgetRes.data ? Number(budgetRes.data.amount_krw) : null,
        assets: (assetsRes.data ?? []).map((a) => ({ ...a, amount: Number(a.amount), krw_cost: a.krw_cost === null ? null : Number(a.krw_cost) })),
        expenses: (expensesRes.data ?? []).map((e) => ({
            ...e,
            amount: Number(e.amount),
            krw_amount: e.krw_amount === null ? null : Number(e.krw_amount),
        })),
        role,
    });
}

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
    const paymentType = String(body?.payment_type ?? '');

    if (!Number.isFinite(amount) || amount < 0) {
        return NextResponse.json({ error: '금액을 확인해주세요.' }, { status: 400 });
    }
    if (!CURRENCY_CODES.has(currency)) {
        return NextResponse.json({ error: '지원하지 않는 통화예요.' }, { status: 400 });
    }
    if (!PAYMENT_CODES.has(paymentType)) {
        return NextResponse.json({ error: '지불수단을 확인해주세요.' }, { status: 400 });
    }

    // 신용카드 해외결제만 원화로 환산해 박제한다.
    //   현금·트래블카드는 환전 시점에 이미 원화가 나간 것으로 셌으므로 환산하면 이중 계산이 된다.
    //   원화 결제는 amount 가 곧 원화라 따로 둘 필요가 없다.
    // 환율 조회에 실패하면 null 로 두고 저장은 그대로 진행한다(기록이 사라지는 쪽이 더 나쁘다).
    const krwAmount =
        paymentType === 'credit_card' && currency !== 'KRW'
            ? await convertToKrw(amount, currency as any)
            : null;

    // card_id 는 Liveblocks Card.id — DB 에 카드 테이블이 없어 FK 검증 불가.
    // card_name/card_category 는 카드가 삭제된 뒤에도 내역이 읽히도록 등록 시점 스냅샷으로 저장.
    // (일차는 저장하지 않는다. 카드가 일차를 옮기면 틀어지므로 화면에서 Liveblocks 로 계산)
    const { data, error } = await admin
        .from('trip_expenses')
        .insert({
            project_id: projectId,
            card_id: body?.card_id ?? null,
            card_name: body?.card_name ?? null,
            card_category: body?.card_category ?? null,
            currency,
            payment_type: paymentType,
            amount,
            krw_amount: krwAmount,
            title: body?.title ?? null,
            payer_id: body?.payer_id ?? null,
            created_by: userId,
        })
        .select('id, card_id, card_name, card_category, currency, payment_type, amount, krw_amount, title, payer_id, created_by, created_at')
        .single();

    if (error) {
        console.error('[expenses] POST 실패:', error.message);
        return NextResponse.json({ error: '지출을 저장하지 못했어요.' }, { status: 500 });
    }

    return NextResponse.json({
        expense: {
            ...data,
            amount: Number(data.amount),
            krw_amount: data.krw_amount === null ? null : Number(data.krw_amount),
        },
    }, { status: 201 });
}
