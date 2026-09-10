"use client";

/**
 * /dev/home-preview — 홈 리디자인 라이브 프로토타입 (개발 전용).
 *
 * 컨셉: 피그마 파일 브라우저처럼
 *   - 좌측 GNB(사이드바) : 메뉴 + "내 폴더" 목록
 *   - 우측 본문          : 선택한 폴더 안의 여행 카드 그리드
 *   - 여행 카드를 사이드바 폴더로 드래그해서 정리
 *
 * 저장: localStorage (이 브라우저에만 저장 · 새로고침해도 유지 · 팀원과 공유 안 됨).
 * 여행 목록 자체는 목업(고정). 폴더/분류만 프로토타입으로 동작.
 * 프로덕션에서는 404. 네비게이션 어디에도 링크 없음.
 *
 * 열기:  npm run dev  →  http://localhost:3000/dev/home-preview
 */

import { notFound } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Plus, Home, MessageSquareText, BookOpen, Folder, FolderPlus,
  MoreHorizontal, Pencil, Trash2, Users, MousePointer2, Menu, X, GripVertical, Search,
} from "lucide-react";

// ────────────────────────────────────────────────────────────
// 목업 여행 목록 (개념상 "서버 데이터" — 프로토타입에서 고정)
// ────────────────────────────────────────────────────────────
// img: 실제 서비스의 여행지 사진과 같은 소스(src/data/destinations.ts FALLBACK_IMAGES, Wikimedia).
// 프로토타입이라 API 없이 정적 URL 을 그대로 사용.
type Trip = { id: string; title: string; city: string; date: string; img: string; shared?: boolean };
const IMG = (file: string) => `https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=640`;
const TRIPS: Trip[] = [
  { id: "t-osaka", title: "2026 오사카 우정여행", city: "오사카", date: "2026. 8. 12.", img: IMG("Osaka_Castle_02bs3200.jpg") },
  { id: "t-sapporo", title: "삿포로 설경 가족여행", city: "삿포로", date: "2026. 7. 30.", img: IMG("Sapporo_clock_tower.JPG") },
  { id: "t-danang", title: "다낭 신혼여행 계획", city: "다낭", date: "2026. 9. 1.", img: IMG("2020_Da_Nang_Dragon_Bridge_IMG_3897.jpg"), shared: true },
  { id: "t-tokyo", title: "도쿄 벚꽃 시즌 나들이", city: "도쿄", date: "2026. 3. 20.", img: IMG("Tokyo_Tower_M4854.jpg") },
  { id: "t-bangkok", title: "방콕 미식 투어", city: "방콕", date: "2026. 6. 5.", img: IMG("Wat_arun_bangkok.jpg"), shared: true },
  { id: "t-bali", title: "발리 워케이션", city: "발리", date: "2026. 10. 2.", img: IMG("Bali_Pura_Lempuyang_Luhur.jpg") },
  { id: "t-fukuoka", title: "후쿠오카 온천 주말", city: "후쿠오카", date: "2026. 11. 15.", img: IMG("Canalcity.jpg") },
  { id: "t-taipei", title: "타이베이 야시장 투어", city: "타이베이", date: "2026. 12. 24.", img: IMG("Taipei_101_from_Xiangshan_20240729.jpg") },
];

// 폴더 색상 (리터럴로 나열 — Tailwind JIT 스캔용)
const FOLDER_COLORS: Record<string, { dot: string; soft: string; ring: string }> = {
  rose: { dot: "bg-rose-400", soft: "bg-rose-50 text-rose-600", ring: "ring-rose-300" },
  sky: { dot: "bg-sky-400", soft: "bg-sky-50 text-sky-600", ring: "ring-sky-300" },
  emerald: { dot: "bg-emerald-400", soft: "bg-emerald-50 text-emerald-600", ring: "ring-emerald-300" },
  amber: { dot: "bg-amber-400", soft: "bg-amber-50 text-amber-600", ring: "ring-amber-300" },
  violet: { dot: "bg-violet-400", soft: "bg-violet-50 text-violet-600", ring: "ring-violet-300" },
  slate: { dot: "bg-slate-400", soft: "bg-slate-100 text-slate-600", ring: "ring-slate-300" },
};
const COLOR_CYCLE = ["rose", "sky", "emerald", "amber", "violet"];

type FolderT = { id: string; name: string; color: string };
type Store = { version: number; folders: FolderT[]; assign: Record<string, string> };

const LS_KEY = "travelline_home_prototype_v1";
const DEFAULT_STORE: Store = {
  version: 1,
  folders: [
    { id: "f-japan", name: "일본 여행", color: "rose" },
    { id: "f-family", name: "가족 여행", color: "sky" },
  ],
  assign: { "t-osaka": "f-japan", "t-tokyo": "f-japan", "t-fukuoka": "f-japan", "t-sapporo": "f-family" },
};

function loadStore(): Store {
  if (typeof window === "undefined") return DEFAULT_STORE;
  try {
    const raw = window.localStorage.getItem(LS_KEY);
    if (!raw) return DEFAULT_STORE;
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.version !== 1) return DEFAULT_STORE;
    return { version: 1, folders: parsed.folders ?? [], assign: parsed.assign ?? {} };
  } catch {
    return DEFAULT_STORE;
  }
}
function saveStore(s: Store) {
  try {
    window.localStorage.setItem(LS_KEY, JSON.stringify(s));
  } catch {
    /* 사생활 모드 등 — 무시 */
  }
}

const uid = () => "f-" + Math.random().toString(36).slice(2, 8);

// ────────────────────────────────────────────────────────────
export default function HomePreviewPage() {
  if (process.env.NODE_ENV === "production") notFound();
  return <HomePreview />;
}

const ALL = "__all__";
const UNFILED = "__unfiled__";

function HomePreview() {
  const [store, setStore] = useState<Store>(DEFAULT_STORE);
  const [hydrated, setHydrated] = useState(false);
  const [selected, setSelected] = useState<string>(ALL);
  const [sidebarOpen, setSidebarOpen] = useState(false); // 모바일 드로어
  const [dragTrip, setDragTrip] = useState<string | null>(null);
  const [dropTarget, setDropTarget] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const q = query.trim().toLowerCase();
  const searching = q.length > 0;

  useEffect(() => {
    setStore(loadStore());
    setHydrated(true);
  }, []);
  useEffect(() => {
    if (hydrated) saveStore(store);
  }, [store, hydrated]);

  const update = useCallback((fn: (s: Store) => Store) => setStore((prev) => fn(structuredCloneSafe(prev))), []);

  const countFor = useCallback(
    (folderId: string) => {
      if (folderId === ALL) return TRIPS.length;
      if (folderId === UNFILED) return TRIPS.filter((t) => !store.assign[t.id]).length;
      return TRIPS.filter((t) => store.assign[t.id] === folderId).length;
    },
    [store.assign],
  );

  const visibleTrips = useMemo(() => {
    // 검색 중이면 폴더 필터 무시하고 전체 여행에서 이름/도시로 찾는다.
    if (q) return TRIPS.filter((t) => t.title.toLowerCase().includes(q) || t.city.toLowerCase().includes(q));
    if (selected === ALL) return TRIPS;
    if (selected === UNFILED) return TRIPS.filter((t) => !store.assign[t.id]);
    return TRIPS.filter((t) => store.assign[t.id] === selected);
  }, [q, selected, store.assign]);

  // 폴더 커버 사진 = 그 폴더에 담긴 첫 여행의 여행지 사진
  const coverFor = useCallback(
    (folderId: string): string | null => {
      const first = TRIPS.find((t) => store.assign[t.id] === folderId);
      return first?.img ?? null;
    },
    [store.assign],
  );

  const selectedFolder = store.folders.find((f) => f.id === selected);
  const selectedCover = !searching && selectedFolder ? coverFor(selectedFolder.id) : null;
  const headerTitle = searching
    ? `‘${query.trim()}’ 검색 결과`
    : selected === ALL
      ? "모든 여행"
      : selected === UNFILED
        ? "미분류"
        : selectedFolder?.name ?? "모든 여행";

  // ── 폴더 조작 ──
  const addFolder = () => {
    const name = window.prompt("새 폴더 이름", "새 폴더");
    if (name == null) return;
    const trimmed = name.trim();
    if (!trimmed) return;
    const color = COLOR_CYCLE[store.folders.length % COLOR_CYCLE.length];
    const id = uid();
    update((s) => ({ ...s, folders: [...s.folders, { id, name: trimmed, color }] }));
    setSelected(id);
  };
  const renameFolder = (id: string) => {
    const cur = store.folders.find((f) => f.id === id);
    const name = window.prompt("폴더 이름 변경", cur?.name ?? "");
    if (name == null) return;
    const trimmed = name.trim();
    if (!trimmed) return;
    update((s) => ({ ...s, folders: s.folders.map((f) => (f.id === id ? { ...f, name: trimmed } : f)) }));
  };
  const deleteFolder = (id: string) => {
    if (!window.confirm("이 폴더를 삭제할까요? 안에 있던 여행은 '미분류'로 이동해요.")) return;
    update((s) => {
      const assign = { ...s.assign };
      Object.keys(assign).forEach((tid) => {
        if (assign[tid] === id) delete assign[tid];
      });
      return { ...s, folders: s.folders.filter((f) => f.id !== id), assign };
    });
    if (selected === id) setSelected(ALL);
  };
  const moveTrip = (tripId: string, folderId: string | null) => {
    update((s) => {
      const assign = { ...s.assign };
      if (folderId) assign[tripId] = folderId;
      else delete assign[tripId];
      return { ...s, assign };
    });
  };

  // ── 드래그앤드롭 (네이티브) ──
  const onFolderDrop = (folderId: string | null) => {
    if (dragTrip) moveTrip(dragTrip, folderId);
    setDragTrip(null);
    setDropTarget(null);
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-700">
      {/* 개발 프리뷰 표시 바 */}
      <div className="shrink-0 bg-amber-100 border-b border-amber-200 px-4 py-1.5 text-center text-[11px] font-semibold text-amber-800">
        개발 프로토타입 · 폴더/분류는 이 브라우저에만 저장돼요 (새로고침해도 유지)
      </div>

      <div className="flex min-h-0 flex-1 items-stretch">
        {/* ── 좌측 GNB ─────────────────────────────────────── */}
        {/* 모바일 드로어 배경 */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 shrink-0 border-r border-slate-200 bg-white transition-transform md:static md:z-0 md:translate-x-0 md:self-stretch ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col">
            {/* 계정 (상단) */}
            <div className="flex items-center gap-2.5 border-b border-slate-100 px-4 py-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-500 text-sm font-bold text-white">나</div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-700">여행하는 재용</p>
                <p className="truncate text-[11px] text-slate-400">iamjyh99@gmail.com</p>
              </div>
              <button className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 md:hidden" onClick={() => setSidebarOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* 메뉴 */}
            <nav className="px-2">
              <NavItem icon={<Home className="h-4 w-4" />} label="홈" active />
              <NavItem icon={<MessageSquareText className="h-4 w-4" />} label="커뮤니티" />
              <NavItem icon={<BookOpen className="h-4 w-4" />} label="여행 가이드" />
            </nav>

            {/* 폴더 */}
            <div className="mt-5 flex items-center justify-between px-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">내 폴더</span>
              <button
                onClick={addFolder}
                className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                title="폴더 추가"
              >
                <FolderPlus className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-1 flex-1 overflow-y-auto px-2 pb-4">
              <FolderRow
                label="모든 여행"
                count={countFor(ALL)}
                active={selected === ALL}
                onClick={() => { setSelected(ALL); setSidebarOpen(false); }}
                dropActive={dropTarget === ALL}
                onDragOver={(e) => { e.preventDefault(); setDropTarget(ALL); }}
                onDragLeave={() => setDropTarget((t) => (t === ALL ? null : t))}
                onDrop={() => onFolderDrop(null)}
                icon={<Folder className="h-4 w-4 text-slate-400" />}
              />

              {store.folders.map((f) => {
                const c = FOLDER_COLORS[f.color] ?? FOLDER_COLORS.slate;
                const cover = coverFor(f.id);
                return (
                  <FolderRow
                    key={f.id}
                    label={f.name}
                    count={countFor(f.id)}
                    active={selected === f.id}
                    onClick={() => { setSelected(f.id); setSidebarOpen(false); }}
                    dropActive={dropTarget === f.id}
                    onDragOver={(e) => { e.preventDefault(); setDropTarget(f.id); }}
                    onDragLeave={() => setDropTarget((t) => (t === f.id ? null : t))}
                    onDrop={() => onFolderDrop(f.id)}
                    icon={
                      cover ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={cover} alt="" className={`h-5 w-5 shrink-0 rounded-[6px] object-cover ring-1 ${c.ring}`} />
                      ) : (
                        <span className={`h-2.5 w-2.5 rounded-full ${c.dot}`} />
                      )
                    }
                    onRename={() => renameFolder(f.id)}
                    onDelete={() => deleteFolder(f.id)}
                  />
                );
              })}

              {countFor(UNFILED) > 0 && (
                <FolderRow
                  label="미분류"
                  count={countFor(UNFILED)}
                  active={selected === UNFILED}
                  onClick={() => { setSelected(UNFILED); setSidebarOpen(false); }}
                  dropActive={dropTarget === UNFILED}
                  onDragOver={(e) => { e.preventDefault(); setDropTarget(UNFILED); }}
                  onDragLeave={() => setDropTarget((t) => (t === UNFILED ? null : t))}
                  onDrop={() => onFolderDrop(null)}
                  icon={<Folder className="h-4 w-4 text-slate-300" />}
                  muted
                />
              )}
            </div>
          </div>
        </aside>

        {/* ── 우측 본문 ────────────────────────────────────── */}
        <main className="min-w-0 flex-1">
          {/* 상단 바 */}
          <div className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
            <div className="flex items-center gap-2 px-4 py-3 md:gap-3 md:px-6">
              <button className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 md:hidden" onClick={() => setSidebarOpen(true)}>
                <Menu className="h-5 w-5" />
              </button>
              <div className="min-w-0 flex-1">
                <h1 className="flex items-center gap-2 truncate text-lg font-bold text-slate-800 md:text-xl">
                  {headerTitle}
                  <span className="text-sm font-semibold text-slate-400">{visibleTrips.length}</span>
                </h1>
              </div>

              {/* 검색 — 데스크톱: 인라인 입력 */}
              <div className="relative hidden shrink-0 md:block md:w-56 lg:w-72">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="여행 검색"
                  className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-8 text-sm text-slate-700 placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400/20"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-0.5 text-slate-400 hover:bg-slate-200 hover:text-slate-600"
                    aria-label="검색어 지우기"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* 검색 — 모바일: 아이콘 토글 */}
              <button
                onClick={() => setMobileSearchOpen((v) => !v)}
                className={`rounded-lg p-1.5 md:hidden ${mobileSearchOpen || searching ? "bg-emerald-50 text-emerald-600" : "text-slate-500 hover:bg-slate-100"}`}
                aria-label="여행 검색"
              >
                <Search className="h-5 w-5" />
              </button>

              <button className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-lg bg-emerald-500 px-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600 md:px-4">
                <Plus className="h-4 w-4" /> <span className="hidden sm:inline">새 여행</span>
              </button>
            </div>

            {/* 검색 — 모바일: 펼쳐지는 입력 줄 */}
            {mobileSearchOpen && (
              <div className="px-4 pb-3 md:hidden">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    autoFocus
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="여행 이름 · 도시로 검색"
                    className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-8 text-sm text-slate-700 placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white focus:outline-none"
                  />
                  {query && (
                    <button
                      onClick={() => setQuery("")}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-0.5 text-slate-400 hover:bg-slate-200"
                      aria-label="검색어 지우기"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* 폴더 커버 (실제 폴더 선택 시) */}
          {selectedCover && (
            <div className="relative m-4 h-28 overflow-hidden rounded-2xl md:mx-6 md:h-32">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selectedCover} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-lg font-bold text-white drop-shadow md:text-xl">{headerTitle}</p>
                <p className="text-xs font-medium text-white/80">여행 {visibleTrips.length}개</p>
              </div>
            </div>
          )}

          {/* 안내 */}
          <p className="px-4 pt-4 text-xs text-slate-400 md:px-6">
            {searching ? (
              <>전체 여행에서 이름·도시로 검색 중이에요.</>
            ) : (
              <>카드를 왼쪽 폴더로 <span className="font-semibold text-slate-500">드래그</span>하면 정리돼요.</>
            )}
          </p>

          {/* 카드 그리드 */}
          <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3 lg:grid-cols-4 md:px-6">
            {visibleTrips.map((t, i) => (
              <PreviewTripCard
                key={t.id}
                trip={t}
                colorIdx={i}
                folder={store.folders.find((f) => f.id === store.assign[t.id]) ?? null}
                folders={store.folders}
                dragging={dragTrip === t.id}
                onDragStart={() => setDragTrip(t.id)}
                onDragEnd={() => { setDragTrip(null); setDropTarget(null); }}
                onPick={(fid) => moveTrip(t.id, fid)}
              />
            ))}

            {!searching && (
              <button className="flex min-h-[168px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 text-slate-400 transition-colors hover:border-emerald-400 hover:text-emerald-500 hover:bg-emerald-50/30">
                <Plus className="mb-1 h-5 w-5" />
                <span className="text-xs font-bold">새 여행 만들기</span>
              </button>
            )}
          </div>

          {visibleTrips.length === 0 && (
            <p className="px-6 pb-10 pt-2 text-center text-sm text-slate-400">
              {searching ? <>‘{query.trim()}’ 와(과) 일치하는 여행이 없어요.</> : <>이 폴더에 담긴 여행이 없어요. 카드를 드래그해서 넣어보세요.</>}
            </p>
          )}
        </main>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────
function NavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button
      className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        active ? "bg-emerald-50 text-emerald-700" : "text-slate-600 hover:bg-slate-100"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function FolderRow({
  label, count, active, onClick, icon, onRename, onDelete, dropActive, onDragOver, onDragLeave, onDrop, muted,
}: {
  label: string; count: number; active: boolean; onClick: () => void; icon: React.ReactNode;
  onRename?: () => void; onDelete?: () => void; dropActive?: boolean;
  onDragOver?: (e: React.DragEvent) => void; onDragLeave?: () => void; onDrop?: () => void; muted?: boolean;
}) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`group flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
        active ? "bg-slate-100 font-semibold text-slate-800" : "text-slate-600 hover:bg-slate-50"
      } ${dropActive ? "ring-2 ring-emerald-400 ring-inset bg-emerald-50" : ""}`}
    >
      <button onClick={onClick} className="flex min-w-0 flex-1 items-center gap-2">
        {icon}
        <span className={`truncate ${muted ? "text-slate-400" : ""}`}>{label}</span>
      </button>
      {(onRename || onDelete) && hover ? (
        <span className="flex items-center gap-0.5">
          <button onClick={onRename} className="rounded p-1 text-slate-400 hover:bg-slate-200 hover:text-slate-600" title="이름 변경">
            <Pencil className="h-3.5 w-3.5" />
          </button>
          <button onClick={onDelete} className="rounded p-1 text-slate-400 hover:bg-rose-100 hover:text-rose-500" title="삭제">
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </span>
      ) : (
        <span className="text-[11px] tabular-nums text-slate-400">{count}</span>
      )}
    </div>
  );
}

function PreviewTripCard({
  trip, colorIdx, folder, folders, dragging, onDragStart, onDragEnd, onPick,
}: {
  trip: Trip; colorIdx: number; folder: FolderT | null; folders: FolderT[];
  dragging: boolean; onDragStart: () => void; onDragEnd: () => void; onPick: (fid: string | null) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const bar = ["bg-emerald-400", "bg-rose-400", "bg-sky-400", "bg-amber-400", "bg-violet-400"][colorIdx % 5];
  const fc = folder ? FOLDER_COLORS[folder.color] ?? FOLDER_COLORS.slate : null;

  return (
    <div
      draggable
      onDragStart={(e) => {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", trip.id);
        onDragStart();
      }}
      onDragEnd={onDragEnd}
      className={`group relative rounded-2xl border border-slate-200 bg-white transition-all hover:border-slate-300 hover:shadow-md ${
        dragging ? "opacity-40" : ""
      }`}
    >
      {/* 여행지 사진 커버 */}
      <div className="relative h-24 overflow-hidden rounded-t-2xl bg-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={trip.img} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
        <span className="absolute bottom-1.5 left-2.5 text-xs font-bold text-white drop-shadow">{trip.city}</span>
        <MousePointer2 className="absolute right-2.5 top-2.5 h-4 w-4 fill-white text-slate-700 drop-shadow" aria-hidden="true" />
      </div>

      <div className="flex items-start gap-1.5 px-2.5 py-2.5 sm:gap-2 sm:px-3">
        <GripVertical className="mt-0.5 hidden h-4 w-4 shrink-0 cursor-grab text-slate-300 group-hover:text-slate-400 sm:block" />
        <span className={`mt-1 h-3 w-3 shrink-0 rounded-[4px] ${bar}`} />
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-bold text-slate-800">{trip.title}</h3>
          <div className="mt-1 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-400">
            {folder && fc ? (
              <span className={`inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 font-semibold ${fc.soft}`}>
                <Folder className="h-3 w-3" /> {folder.name}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-1.5 py-0.5 font-semibold text-slate-400">미분류</span>
            )}
            {trip.shared && (
              <span className="inline-flex items-center gap-1"><Users className="h-3 w-3" /> 공유됨</span>
            )}
            <span>· {trip.date}</span>
          </div>
        </div>

        {/* ... 메뉴: 폴더 선택 */}
        <div className="relative shrink-0" onMouseLeave={() => setMenuOpen(false)}>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-lg p-1 text-slate-300 transition-colors hover:bg-slate-50 hover:text-slate-600"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-8 z-30 w-44 rounded-xl border border-slate-100 bg-white py-1 shadow-lg">
              <p className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">폴더로 이동</p>
              <button
                onClick={() => { onPick(null); setMenuOpen(false); }}
                className="flex w-full items-center gap-2 px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50"
              >
                <Folder className="h-3.5 w-3.5 text-slate-300" /> 미분류
              </button>
              {folders.map((f) => {
                const c = FOLDER_COLORS[f.color] ?? FOLDER_COLORS.slate;
                return (
                  <button
                    key={f.id}
                    onClick={() => { onPick(f.id); setMenuOpen(false); }}
                    className="flex w-full items-center gap-2 px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50"
                  >
                    <span className={`h-2.5 w-2.5 rounded-full ${c.dot}`} /> {f.name}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// structuredClone 이 없는 환경 대비
function structuredCloneSafe<T>(v: T): T {
  try {
    return structuredClone(v);
  } catch {
    return JSON.parse(JSON.stringify(v));
  }
}
