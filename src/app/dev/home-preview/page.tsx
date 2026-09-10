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
  MoreHorizontal, Pencil, Trash2, Users, MousePointer2, Menu, X, GripVertical,
} from "lucide-react";

// ────────────────────────────────────────────────────────────
// 목업 여행 목록 (개념상 "서버 데이터" — 프로토타입에서 고정)
// ────────────────────────────────────────────────────────────
type Trip = { id: string; title: string; date: string; shared?: boolean };
const TRIPS: Trip[] = [
  { id: "t-osaka", title: "2026 오사카 우정여행", date: "2026. 8. 12." },
  { id: "t-jeju", title: "제주 3박4일 가족여행", date: "2026. 7. 30." },
  { id: "t-danang", title: "다낭 신혼여행 계획", date: "2026. 9. 1.", shared: true },
  { id: "t-tokyo", title: "도쿄 벚꽃 시즌 나들이", date: "2026. 3. 20." },
  { id: "t-bangkok", title: "방콕 미식 투어", date: "2026. 6. 5.", shared: true },
  { id: "t-bali", title: "발리 워케이션", date: "2026. 10. 2." },
  { id: "t-fukuoka", title: "후쿠오카 온천 주말", date: "2026. 11. 15." },
  { id: "t-taipei", title: "타이베이 야시장 투어", date: "2026. 12. 24." },
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
  assign: { "t-osaka": "f-japan", "t-tokyo": "f-japan", "t-fukuoka": "f-japan", "t-jeju": "f-family" },
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
    if (selected === ALL) return TRIPS;
    if (selected === UNFILED) return TRIPS.filter((t) => !store.assign[t.id]);
    return TRIPS.filter((t) => store.assign[t.id] === selected);
  }, [selected, store.assign]);

  const selectedFolder = store.folders.find((f) => f.id === selected);
  const headerTitle =
    selected === ALL ? "모든 여행" : selected === UNFILED ? "미분류" : selectedFolder?.name ?? "모든 여행";

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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700">
      {/* 개발 프리뷰 표시 바 */}
      <div className="bg-amber-100 border-b border-amber-200 px-4 py-1.5 text-center text-[11px] font-semibold text-amber-800">
        개발 프로토타입 · 폴더/분류는 이 브라우저에만 저장돼요 (새로고침해도 유지)
      </div>

      <div className="flex">
        {/* ── 좌측 GNB ─────────────────────────────────────── */}
        {/* 모바일 드로어 배경 */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 shrink-0 border-r border-slate-200 bg-white transition-transform md:static md:z-0 md:translate-x-0 ${
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
                    icon={<span className={`h-2.5 w-2.5 rounded-full ${c.dot}`} />}
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
          <div className="sticky top-0 z-20 flex items-center gap-3 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur md:px-6">
            <button className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 md:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-5 w-5" />
            </button>
            <div className="min-w-0 flex-1">
              <h1 className="flex items-center gap-2 truncate text-lg font-bold text-slate-800 md:text-xl">
                {headerTitle}
                <span className="text-sm font-semibold text-slate-400">{visibleTrips.length}</span>
              </h1>
            </div>
            <button className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-lg bg-emerald-500 px-4 text-sm font-semibold text-white transition-colors hover:bg-emerald-600">
              <Plus className="h-4 w-4" /> 새 여행
            </button>
          </div>

          {/* 안내 */}
          <p className="px-4 pt-4 text-xs text-slate-400 md:px-6">
            카드를 왼쪽 폴더로 <span className="font-semibold text-slate-500">드래그</span>하면 정리돼요.
          </p>

          {/* 카드 그리드 */}
          <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3 md:px-6">
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

            <button className="flex min-h-[104px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 text-slate-400 transition-colors hover:border-emerald-400 hover:text-emerald-500 hover:bg-emerald-50/30">
              <Plus className="mb-1 h-5 w-5" />
              <span className="text-xs font-bold">새 여행 만들기</span>
            </button>
          </div>

          {visibleTrips.length === 0 && (
            <p className="px-6 pb-10 pt-2 text-center text-sm text-slate-400">이 폴더에 담긴 여행이 없어요. 카드를 드래그해서 넣어보세요.</p>
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
      {/* 미니 캔버스 (얇게) */}
      <div
        className="relative h-14 overflow-hidden rounded-t-2xl border-b border-slate-100 bg-slate-50"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.35) 1px, transparent 1px)",
          backgroundSize: "13px 13px",
        }}
      >
        <span className="absolute left-3 top-3 h-3 w-24 rounded-full bg-emerald-200/70" />
        <span className="absolute left-10 top-7 h-3 w-16 rounded-full bg-sky-200/70" />
        <MousePointer2 className="absolute right-3 top-3 h-4 w-4 fill-rose-400 text-white" aria-hidden="true" />
      </div>

      <div className="flex items-start gap-2 px-3 py-2.5">
        <GripVertical className="mt-0.5 h-4 w-4 shrink-0 cursor-grab text-slate-300 group-hover:text-slate-400" />
        <span className={`mt-1 h-3.5 w-3.5 shrink-0 rounded-[4px] ${bar}`} />
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
