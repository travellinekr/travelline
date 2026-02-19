import { Room } from "../../Room";
import { CollaborativeApp } from "../../CollaborativeApp";
import { supabase } from "@/lib/supabaseClient";
import { redirect } from "next/navigation";

export default async function RoomPage({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) {
  const { roomId } = await params;

  // DB에서 프로젝트 존재 여부 확인
  const { data } = await supabase
    .from('projects')
    .select('title')
    .eq('id', roomId)
    .single();

  // 삭제된 프로젝트 or 잘못된 URL → 메인 페이지로 리다이렉트
  if (!data) {
    redirect('/');
  }

  const projectTitle = data.title || "내 프로젝트";

  return (
    <Room roomId={roomId}>
      <CollaborativeApp roomId={roomId} initialTitle={projectTitle} />
    </Room>
  );
}