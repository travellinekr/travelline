#!/usr/bin/env bash
# 개발 서버 라우트 예열.
#
# 왜 필요한가:
#   next dev 는 라우트를 처음 요청받는 순간 컴파일한다(온디맨드).
#   /api/liveblocks-auth 는 이 컴파일이 8초쯤 걸리는데, 거기에 실제 인증 작업이 얹히면
#   Liveblocks 클라이언트의 10초 제한을 넘겨 "Authentication failed: Timed out during auth" 가 뜬다.
#   서버 재시작 직후 여행보드에 처음 들어갈 때만 나는 개발 전용 증상이다.
#
#   미리 한 번씩 때려두면 사용자가 열 때는 이미 컴파일이 끝나 있다.
#
# 사용:  ./scripts/dev-warmup.sh          (기본 localhost:3000)
#        BASE=http://localhost:3001 ./scripts/dev-warmup.sh

set -u
BASE="${BASE:-http://localhost:3000}"

echo "예열 대상: $BASE"

warm() {
    local label="$1"; shift
    printf "  %-22s " "$label"
    curl -s -o /dev/null -w "%{time_total}s\n" --max-time 180 "$@" || echo "실패"
}

# 서버가 뜰 때까지 대기
until curl -s -o /dev/null --max-time 5 "$BASE/" 2>/dev/null; do sleep 2; done

warm "/"                "$BASE/"
warm "/community"       "$BASE/community?type=info"
warm "/api/community"   "$BASE/api/community?type=info&limit=1"
# 인증 라우트 — room 값은 아무거나. 컴파일만 시키면 된다.
warm "liveblocks-auth"  -X POST "$BASE/api/liveblocks-auth" \
                        -H "Content-Type: application/json" -d '{"room":"warmup"}'
# 여행보드는 프로젝트 id 가 필요하다. 없으면 목록 라우트만 데워진다.
if [ -n "${ROOM_ID:-}" ]; then
    warm "/room/$ROOM_ID" "$BASE/room/$ROOM_ID"
fi

echo "완료 — 이제 여행보드에 들어가도 auth 타임아웃이 나지 않습니다."
