import { Room } from "../../Room";
import { CollaborativeApp } from "../../CollaborativeApp";
import { supabase } from "@/lib/supabaseClient";
import { redirect } from "next/navigation";
import { isPaidPlanActive } from "@/lib/planEntitlement";
import { PlanProvider } from "@/contexts/PlanContext";

export default async function RoomPage({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) {
  const { roomId } = await params;

  // DB에서 프로젝트 존재 여부 확인
  // paid_until 은 마이그레이션 020 에서 추가된 컬럼이다.
  // 아직 적용되지 않은 환경에서 이 select 가 실패하면 data 가 null 이 되어
  // 아래 redirect 가 걸리고 "모든 보드가 메인으로 튕기는" 사고가 난다.
  // → 실패 시 기존 쿼리로 한 번 더 시도해 무료 프로젝트로 취급한다.
  //   (020 이 모든 환경에 적용된 뒤에는 이 폴백을 지워도 된다)
  let data: { name?: string | null; paid_until?: string | null } | null = null;
  const primary = await supabase
    .from('projects')
    .select('name, paid_until')
    .eq('id', roomId)
    .single();

  if (primary.error) {
    const fallback = await supabase
      .from('projects')
      .select('name')
      .eq('id', roomId)
      .single();
    data = fallback.data;
  } else {
    data = primary.data;
  }

  // 삭제된 프로젝트 or 잘못된 URL → 메인 페이지로 리다이렉트
  if (!data) {
    redirect('/');
  }

  const projectTitle = data.name || "내 프로젝트";

  // 유료 여부는 서버에서 판정한다. 클라이언트 시계로 비교하면 기기 시간을 바꿔 광고를 없앨 수 있다.
  // 3년이 지나면 이 값이 저절로 false 가 되어 광고가 다시 노출된다.
  const isPaidPlan = isPaidPlanActive(data.paid_until);

  return (
    <PlanProvider isPaidPlan={isPaidPlan}>
      <Room roomId={roomId}>
        <CollaborativeApp roomId={roomId} initialTitle={projectTitle} />
      </Room>
    </PlanProvider>
  );
}