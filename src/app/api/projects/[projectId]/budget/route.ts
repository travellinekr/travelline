import { NextRequest, NextResponse } from 'next/server';
import { verifyProjectAccess, isAccessError } from '@/lib/server/projectAuth';

// PUT    /api/projects/[projectId]/budget — 총예상경비 설정(upsert)
// DELETE /api/projects/[projectId]/budget — 총예상경비 해제
//
// 조회는 GET /expenses 가 함께 내려주므로 여기엔 GET 이 없다.
// trip_budget 은 project_id 가 PK 인 1행짜리 테이블이라 upsert 로 처리한다.

export async function PUT(
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

    const amountKrw = Number(body?.amount_krw);
    if (!Number.isFinite(amountKrw) || amountKrw < 0) {
        return NextResponse.json({ error: '예상 경비를 확인해주세요.' }, { status: 400 });
    }

    const { data, error } = await admin
        .from('trip_budget')
        .upsert(
            { project_id: projectId, amount_krw: amountKrw, updated_by: userId },
            { onConflict: 'project_id' },
        )
        .select('amount_krw, updated_at')
        .single();

    if (error) {
        console.error('[budget] PUT 실패:', error.message);
        return NextResponse.json({ error: '예상 경비를 저장하지 못했어요.' }, { status: 500 });
    }

    return NextResponse.json({ budget: Number(data.amount_krw), updated_at: data.updated_at });
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ projectId: string }> },
) {
    const { projectId } = await params;
    const access = await verifyProjectAccess(request, projectId, 'write');
    if (isAccessError(access)) return access;

    const { error } = await access.admin.from('trip_budget').delete().eq('project_id', projectId);

    if (error) {
        console.error('[budget] DELETE 실패:', error.message);
        return NextResponse.json({ error: '예상 경비를 삭제하지 못했어요.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
}
