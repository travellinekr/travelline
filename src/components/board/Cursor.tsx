import { useOther } from "@liveblocks/react/suspense";
import { CURSOR_COLORS } from "@/data/colors";

type Props = {
  connectionId: number;
};

export function Cursor({ connectionId }: Props) {
  // 🔴 수정됨: (user: any) 라고 타입을 지정해서 에러를 무시하게 만듭니다.
  const cursor = useOther(connectionId, (user: any) => user.presence.cursor) as { x: number; y: number } | null;

  if (!cursor) {
    return null;
  }

  const { x, y } = cursor;
  const color = CURSOR_COLORS[connectionId % CURSOR_COLORS.length];

  return (
    <div
      className="pointer-events-none absolute top-0 left-0 z-50 transition-transform duration-100 ease-linear"
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`,
      }}
    >
      {/* 마우스 커서 아이콘 (SVG) */}
      <svg
        width="24"
        height="36"
        viewBox="0 0 24 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md"
      >
        <path
          d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19709L15.9118 16.6089L12.3117 16.8923L12.1637 16.9039L12.0799 17.0272L9.58572 20.7029L5.65376 12.3673Z"
          fill={color}
          stroke="white"
          strokeWidth="1"
        />
      </svg>

      {/* 사용자 ID (익명) 태그 */}
      <div
        className="absolute left-4 top-3 rounded-full px-2 py-0.5 text-xs font-bold text-white shadow-sm whitespace-nowrap"
        style={{ backgroundColor: color }}
      >
        User {connectionId}
      </div>
    </div>
  );
}