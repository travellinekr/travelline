import { Room } from "../../Room";
import { CollaborativeApp } from "../../CollaborativeApp";
import { supabase } from "@/lib/supabaseClient";

export default async function RoomPage({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) {
  const { roomId } = await params;

  // DB에서 미리 제목 가져오기 (Server-side Fetching)
  const { data } = await supabase
    .from('projects')
    .select('title')
    .eq('id', roomId)
    .single();

  const projectTitle = data?.title || "내 프로젝트";

  return (
    <Room roomId={roomId}>
      <CollaborativeApp roomId={roomId} initialTitle={projectTitle} />
    </Room>
  );
}