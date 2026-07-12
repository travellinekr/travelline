'use client';

import { useAdminData } from '@/hooks/useAdminData';
import { StatCard } from '@/components/admin/StatCard';
import { LastUpdated } from '@/components/admin/LastUpdated';

interface CodexUsageWindow {
    input_tokens: number;
    cached_input_tokens: number;
    output_tokens: number;
    reasoning_output_tokens: number;
    total_tokens: number;
    sessions: number;
    events: number;
}

interface CodexUsageGroup {
    today: CodexUsageWindow;
    last7Days: CodexUsageWindow;
    month: CodexUsageWindow;
    allTime: CodexUsageWindow;
    lastUsedAt: string | null;
}

interface CodexLimitWindow {
    limitTokens: number | null;
    usedTokens: number;
    remainingTokens: number | null;
    usagePct: number | null;
}

interface CodexAdminData {
    stats: {
        authMode: string | null;
        hasCodexCliAuth: boolean;
        hasHermesCodexCredential: boolean;
        hermesCredentialCount: number;
        lastRefresh: string | null;
        usageAvailable: boolean;
        usageUnavailableReason: string;
        checkedAt: number;
        usage: CodexUsageGroup & { sessionFilesScanned: number };
        hermesUsage: CodexUsageGroup & { sessionRowsScanned: number };
        limits: {
            daily: CodexLimitWindow;
            weekly: CodexLimitWindow;
            monthly: CodexLimitWindow;
            source: 'env' | 'unset';
            configuredKeys: string[];
            note: string;
        };
    };
    links: {
        chatgptPlan: string;
        openaiUsage: string;
        codexDocs: string;
    };
}

function formatNumber(value: number): string {
    return new Intl.NumberFormat('ko-KR').format(value);
}

function formatLimit(value: number | null): string {
    return value === null ? '미설정' : formatNumber(value);
}

function usageColor(pct: number | null): string {
    if (pct === null) return 'bg-slate-300';
    if (pct >= 95) return 'bg-red-500';
    if (pct >= 80) return 'bg-amber-500';
    return 'bg-zinc-900';
}

function UsageBreakdown({ title, usage }: { title: string; usage: CodexUsageWindow }) {
    return (
        <div className="border border-slate-200 bg-white rounded-xl p-4 text-sm">
            <div className="font-medium text-slate-900">{title}</div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-slate-600">
                <div>Input</div>
                <div className="text-right tabular-nums">{formatNumber(usage.input_tokens)}</div>
                <div>Cached input</div>
                <div className="text-right tabular-nums">{formatNumber(usage.cached_input_tokens)}</div>
                <div>Output</div>
                <div className="text-right tabular-nums">{formatNumber(usage.output_tokens)}</div>
                <div>Reasoning</div>
                <div className="text-right tabular-nums">{formatNumber(usage.reasoning_output_tokens)}</div>
                <div className="pt-2 border-t border-slate-100 font-medium text-slate-900">Total</div>
                <div className="pt-2 border-t border-slate-100 text-right font-medium text-slate-900 tabular-nums">
                    {formatNumber(usage.total_tokens)}
                </div>
            </div>
            <div className="mt-3 text-xs text-slate-400">
                세션 {formatNumber(usage.sessions)}개 · 이벤트 {formatNumber(usage.events)}개
            </div>
        </div>
    );
}

function LimitCard({ title, envName, limit }: { title: string; envName: string; limit: CodexLimitWindow }) {
    const pct = limit.usagePct ?? 0;
    return (
        <div className="border border-slate-200 bg-white rounded-xl p-4 text-sm text-slate-600 space-y-3">
            <div className="flex items-center justify-between">
                <div className="font-medium text-slate-900">{title}</div>
                <div className="text-xs text-slate-400">{envName}</div>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div>사용</div>
                <div className="text-right tabular-nums">{formatNumber(limit.usedTokens)}</div>
                <div>한도</div>
                <div className="text-right tabular-nums">{formatLimit(limit.limitTokens)}</div>
                <div>잔여</div>
                <div className="text-right tabular-nums">{limit.remainingTokens === null ? '-' : formatNumber(limit.remainingTokens)}</div>
                <div>사용률</div>
                <div className="text-right tabular-nums">{limit.usagePct === null ? '-' : `${limit.usagePct}%`}</div>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full transition-all ${usageColor(limit.usagePct)}`} style={{ width: `${Math.min(100, Math.max(0, pct))}%` }} />
            </div>
        </div>
    );
}

export default function CodexPage() {
    const { data, error, loading } = useAdminData<CodexAdminData>('codex');

    if (loading) return <div className="text-sm text-slate-500">불러오는 중...</div>;
    if (error || !data) {
        return (
            <div className="border border-red-200 bg-red-50 rounded-xl p-4 text-sm text-red-800">
                조회 실패: {error || '데이터 없음'}
            </div>
        );
    }

    const s = data.stats;
    const authLabel = s.hasCodexCliAuth || s.hasHermesCodexCredential ? '연결됨' : '미확인';
    const hermes = s.hermesUsage;
    const cli = s.usage;
    const limits = s.limits;

    return (
        <div className="space-y-6 max-w-6xl">
            <header className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-zinc-900" />
                    <h1 className="text-xl font-semibold text-slate-900">Codex</h1>
                </div>
                <LastUpdated timestamp={s.checkedAt} />
            </header>

            <section className="space-y-3">
                <h2 className="text-sm font-medium text-slate-500">Hermes Codex 토큰 사용량</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <StatCard label="오늘" value={formatNumber(hermes.today.total_tokens)} sublabel={`tokens · 세션 ${formatNumber(hermes.today.sessions)}개`} />
                    <StatCard label="최근 7일" value={formatNumber(hermes.last7Days.total_tokens)} sublabel={`tokens · 세션 ${formatNumber(hermes.last7Days.sessions)}개`} />
                    <StatCard label="이번 달" value={formatNumber(hermes.month.total_tokens)} sublabel={`tokens · 세션 ${formatNumber(hermes.month.sessions)}개`} />
                </div>
            </section>

            <section className="space-y-3">
                <h2 className="text-sm font-medium text-slate-500">일/주/월 한도</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <LimitCard title="일일 한도" envName="CODEX_DAILY_TOKEN_LIMIT" limit={limits.daily} />
                    <LimitCard title="주간 한도" envName="CODEX_WEEKLY_TOKEN_LIMIT" limit={limits.weekly} />
                    <LimitCard title="월간 한도" envName="CODEX_MONTHLY_TOKEN_LIMIT" limit={limits.monthly} />
                </div>
                <div className="border border-slate-200 bg-white rounded-xl p-4 text-sm text-slate-600 space-y-1">
                    <div className="font-medium text-slate-900">한도 기준</div>
                    <div>· {limits.note}</div>
                    <div>· 설정된 키: {limits.configuredKeys.length ? limits.configuredKeys.join(', ') : '없음'}</div>
                    <div>· Codex 실제 제한은 계정 UI 기준일 수 있으며, 여기서는 Hermes 로그 토큰 기준으로 위험도를 추정합니다.</div>
                </div>
            </section>

            <section className="space-y-3">
                <h2 className="text-sm font-medium text-slate-500">Hermes 사용량 상세</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <UsageBreakdown title="오늘" usage={hermes.today} />
                    <UsageBreakdown title="최근 7일" usage={hermes.last7Days} />
                    <UsageBreakdown title="이번 달" usage={hermes.month} />
                </div>
            </section>

            <section className="space-y-3">
                <h2 className="text-sm font-medium text-slate-500">Codex CLI 로그 참고</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <StatCard label="CLI 오늘" value={formatNumber(cli.today.total_tokens)} sublabel={`~/.codex · 세션 ${formatNumber(cli.today.sessions)}개`} />
                    <StatCard label="CLI 최근 7일" value={formatNumber(cli.last7Days.total_tokens)} sublabel={`~/.codex · 세션 ${formatNumber(cli.last7Days.sessions)}개`} />
                    <StatCard label="CLI 전체" value={formatNumber(cli.allTime.total_tokens)} sublabel={`~/.codex · 세션 ${formatNumber(cli.allTime.sessions)}개`} />
                </div>
            </section>

            <section className="space-y-3">
                <h2 className="text-sm font-medium text-slate-500">로컬 인증 상태</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <StatCard label="Codex CLI" value={s.hasCodexCliAuth ? '인증됨' : '미확인'} sublabel={s.authMode ? `auth_mode: ${s.authMode}` : '~/.codex/auth.json 기준'} />
                    <StatCard label="Hermes Codex" value={s.hasHermesCodexCredential ? '등록됨' : '미등록'} sublabel={`credential ${s.hermesCredentialCount}개`} />
                    <StatCard label="사용량 API" value={s.usageAvailable ? '지원' : '미지원'} sublabel="남은 한도 실시간 조회 불가" />
                </div>
            </section>

            <div className="border border-slate-200 bg-white rounded-xl p-4 text-sm text-slate-600 space-y-1">
                <div className="font-medium text-slate-900">현재 상태</div>
                <div>· 인증 상태: {authLabel}</div>
                {s.lastRefresh && <div>· 마지막 Codex 토큰 갱신: {new Date(s.lastRefresh).toLocaleString('ko-KR')}</div>}
                {hermes.lastUsedAt && <div>· 마지막 Hermes Codex 사용: {new Date(hermes.lastUsedAt).toLocaleString('ko-KR')}</div>}
                {cli.lastUsedAt && <div>· 마지막 Codex CLI 사용: {new Date(cli.lastUsedAt).toLocaleString('ko-KR')}</div>}
                <div>· 스캔한 Hermes 세션: {formatNumber(hermes.sessionRowsScanned)}개</div>
                <div>· 스캔한 Codex CLI 세션 파일: {formatNumber(cli.sessionFilesScanned)}개</div>
                <div>· {s.usageUnavailableReason}</div>
            </div>

            <div className="border border-slate-200 bg-white rounded-xl p-4 text-sm text-slate-600 space-y-1">
                <div className="font-medium text-slate-900">한도 확인 방법</div>
                <div>· ChatGPT Plus/Pro/Team 계정 기반 Codex 한도는 계정/플랜 UI에서 확인해야 합니다.</div>
                <div>· OpenAI API 키 사용량은 Platform Usage에서 확인합니다. Codex CLI OAuth 사용량과는 별도일 수 있습니다.</div>
                <div>· <a href={data.links.chatgptPlan} target="_blank" rel="noreferrer" className="text-slate-900 hover:underline">ChatGPT 플랜 설정 ↗</a></div>
                <div>· <a href={data.links.openaiUsage} target="_blank" rel="noreferrer" className="text-slate-900 hover:underline">OpenAI Platform Usage ↗</a></div>
                <div>· <a href={data.links.codexDocs} target="_blank" rel="noreferrer" className="text-slate-900 hover:underline">Codex 문서 ↗</a></div>
            </div>
        </div>
    );
}
