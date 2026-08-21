import { NextRequest, NextResponse } from 'next/server';
import { verifyProjectAccess, isAccessError } from '@/lib/server/projectAuth';
import { PAYMENT_TYPES, CURRENCIES } from '@/data/expenseCodes';
import { convertToKrw } from '@/lib/server/fxRate';

// PATCH  /api/projects/[projectId]/expenses/[expenseId]  — 지출 수정
// DELETE /api/projects/[projectId]/expenses/[expenseId]  — 지출 삭제
//
// 두 경로 모두 owner/editor 권한 필요. eq('project_id') 를 함께 걸어
// 다른 프로젝트의 지출 id 를 넣어도 건드릴 수 없게 한다.

const PAYMENT_CODES = new Set(PAYMENT_TYPES.map((t) => t.code as string));
const CURRENCY_CODES = new Set(CURRENCIES.map((c) => c.code as string));

export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ projectId: string; expenseId: string }> },
) {
    const { projectId, expenseId } = await params;
    const access = await verifyProjectAccess(request, projectId, 'write');
    if (isAccessError(access)) return access;
    const { admin } = access;

    let body: any;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: '잘못된 요청이에요.' }, { status: 400 });
    }

    const patch: Record<string, unknown> = {};

    if (body.amount !== undefined) {
        const amount = Number(body.amount);
        if (!Number.isFinite(amount) || amount < 0) {
            return NextResponse.json({ error: '금액을 확인해주세요.' }, { status: 400 });
        }
        patch.amount = amount;
    }
    if (body.currency !== undefined) {
        if (!CURRENCY_CODES.has(String(body.currency))) {
            return NextResponse.json({ error: '지원하지 않는 통화예요.' }, { status: 400 });
        }
        patch.currency = body.currency;
    }
    if (body.payment_type !== undefined) {
        if (!PAYMENT_CODES.has(String(body.payment_type))) {
            return NextResponse.json({ error: '지불수단을 확인해주세요.' }, { status: 400 });
        }
        patch.payment_type = body.payment_type;
    }
    for (const k of ['title', 'payer_id', 'card_id', 'card_name', 'card_category'] as const) {
        if (body[k] !== undefined) patch[k] = body[k];
    }

    if (Object.keys(patch).length === 0) {
        return NextResponse.json({ error: '변경할 내용이 없어요.' }, { status: 400 });
    }

    // 금액·통화·지불수단 중 하나라도 바뀌면 원화 환산액을 다시 계산한다.
    // 바뀌지 않은 항목은 기존 값을 써야 하므로 현재 행을 먼저 읽어 합친다.
    if (patch.amount !== undefined || patch.currency !== undefined || patch.payment_type !== undefined) {
        const { data: current } = await admin
            .from('trip_expenses')
            .select('amount, currency, payment_type')
            .eq('id', expenseId)
            .eq('project_id', projectId)
            .maybeSingle();

        if (current) {
            const nextAmount = patch.amount !== undefined ? Number(patch.amount) : Number(current.amount);
            const nextCurrency = String(patch.currency ?? current.currency);
            const nextPayment = String(patch.payment_type ?? current.payment_type);
            patch.krw_amount =
                nextPayment === 'credit_card' && nextCurrency !== 'KRW'
                    ? await convertToKrw(nextAmount, nextCurrency as any)
                    : null;
        }
    }

    const { data, error } = await admin
        .from('trip_expenses')
        .update(patch)
        .eq('id', expenseId)
        .eq('project_id', projectId)
        .select('id, card_id, card_name, card_category, currency, payment_type, amount, krw_amount, source_asset_id, title, payer_id, created_by, created_at')
        .maybeSingle();

    if (error) {
        console.error('[expenses] PATCH 실패:', error.message);
        return NextResponse.json({ error: '지출을 수정하지 못했어요.' }, { status: 500 });
    }
    if (!data) {
        return NextResponse.json({ error: '지출을 찾을 수 없어요.' }, { status: 404 });
    }

    return NextResponse.json({
        expense: {
            ...data,
            amount: Number(data.amount),
            krw_amount: data.krw_amount === null ? null : Number(data.krw_amount),
        },
    });
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ projectId: string; expenseId: string }> },
) {
    const { projectId, expenseId } = await params;
    const access = await verifyProjectAccess(request, projectId, 'write');
    if (isAccessError(access)) return access;

    const { error } = await access.admin
        .from('trip_expenses')
        .delete()
        .eq('id', expenseId)
        .eq('project_id', projectId);

    if (error) {
        console.error('[expenses] DELETE 실패:', error.message);
        return NextResponse.json({ error: '지출을 삭제하지 못했어요.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
}
