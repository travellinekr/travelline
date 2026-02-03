import { useOthersConnectionIds } from "@liveblocks/react/suspense";
import { Cursor } from "./Cursor";

export function LiveCursors() {
  // 현재 접속 중인 다른 사람들의 ID 목록 가져오기
  const ids = useOthersConnectionIds();

  return (
    <>
      {ids.map((connectionId) => (
        <Cursor key={connectionId} connectionId={connectionId} />
      ))}
    </>
  );
}