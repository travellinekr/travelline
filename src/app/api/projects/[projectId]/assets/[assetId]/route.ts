import { NextRequest, NextResponse } from 'next/server';
import { verifyProjectAccess, isAccessError } from '@/lib/server/projectAuth';

// DELETE /api/projects/[projectId]/assets/[assetId] — 자산 삭제
//
// eq('project_id') 를 함께 걸어 다른 프로젝트의 자산은 건드릴 수 없게 한다.

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ projectId: string; assetId: string }> },
) {
    const { projectId, assetId } = await params;
    const access = await verifyProjectAccess(request, projectId, 'write');
    if (isAccessError(access)) return access;

    const { error } = await access.admin
        .from('trip_assets')
        .delete()
        .eq('id', assetId)
        .eq('project_id', projectId);

    if (error) {
        console.error('[assets] DELETE 실패:', error.message);
        return NextResponse.json({ error: '자산을 삭제하지 못했어요.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
}
