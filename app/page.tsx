import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  Building2,
  ChevronDown,
  CircleDollarSign,
  Command,
  FileCheck2,
  Fingerprint,
  Gauge,
  Layers3,
  MapPin,
  MoreHorizontal,
  Radar,
  ScanLine,
  Search,
  ShieldCheck,
  Sparkles,
  Waves,
  Workflow,
} from 'lucide-react';

const assets = [
  { name: 'Wynyard Quarter', type: 'Mixed-use waterfront · Auckland', value: '$42.8M', change: '+8.4%', occupancy: '96.2%', tag: 'CORE+', tint: 'from-cyan-400/20' },
  { name: 'Lambton Quay', type: 'Premium office · Wellington', value: '$31.2M', change: '+5.7%', occupancy: '91.8%', tag: 'CORE', tint: 'from-violet-400/20' },
  { name: 'The Remarkables', type: 'Hospitality & alpine · Queenstown', value: '$18.6M', change: '+12.1%', occupancy: '88.4%', tag: 'VALUE ADD', tint: 'from-amber-400/20' },
];

const activity = [
  { title: 'Wynyard Quarter · valuation refreshed', detail: 'Independent appraisal · data room updated', time: '09:42', icon: Building2, color: 'text-cyan-300' },
  { title: 'Lambton Quay · diligence package ready', detail: '12 documents verified · 0 exceptions', time: '08:16', icon: FileCheck2, color: 'text-emerald-300' },
  { title: 'Allocator model · scenario saved', detail: 'Balanced mandate · 5-year horizon', time: 'Yesterday', icon: BarChart3, color: 'text-violet-300' },
];

const modules = ['Portfolio Intelligence', 'Deal Origination', 'Investor Relations', 'Capital Allocator', 'Underwriting Studio', 'Document Vault', 'Asset Operations', 'Risk & Compliance'];

function PanelTitle({ eyebrow, title, action }: { eyebrow?: string; title: string; action?: string }) {
  return (
    <div className="mb-5 flex items-center justify-between gap-3">
      <div>
        {eyebrow && <div className="mb-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500">{eyebrow}</div>}
        <h2 className="text-sm font-semibold tracking-wide text-slate-100">{title}</h2>
      </div>
      {action && <button className="shrink-0 text-[11px] text-cyan-300 transition hover:text-cyan-100">{action} <ArrowRight className="ml-1 inline" size={12} /></button>}
    </div>
  );
}

function Metric({ label, value, note, icon: Icon, accent }: { label: string; value: string; note: string; icon: typeof Activity; accent: string }) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#0e1319]/90 p-4 sm:p-5">
      <div className="flex items-center justify-between text-[11px] text-slate-400"><span>{label}</span><Icon size={15} className={accent} /></div>
      <div className="mt-3 flex items-end justify-between gap-2"><div className="text-2xl font-semibold tracking-tight text-white sm:text-[28px]">{value}</div><div className="mb-1 flex items-center gap-1 text-[10px] text-emerald-300"><ArrowUpRight size={12} />{note}</div></div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_55%_-18%,rgba(14,116,144,0.18),transparent_48%)]">
      <div className="mx-auto flex min-h-screen max-w-[1680px]">
        <aside className="hidden w-[244px] shrink-0 flex-col border-r border-white/[0.07] bg-[#090d12]/85 px-4 py-6 xl:flex">
          <a href="#home" className="mb-9 flex items-center gap-3 px-2">
            <div className="grid size-9 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-200"><Command size={17} /></div>
            <div><div className="text-[12px] font-bold tracking-[0.18em] text-white">SOVEREIGN<span className="text-cyan-300">.OS</span></div><div className="mt-1 text-[8px] tracking-[0.24em] text-slate-500">APEX EDITION · V12.0</div></div>
          </a>
          <div className="mb-2 px-3 text-[9px] font-semibold tracking-[0.2em] text-slate-600">COMMAND</div>
          <nav className="space-y-1 text-[12px]">
            <a href="#overview" className="flex items-center gap-3 rounded-lg border border-cyan-300/10 bg-cyan-300/[0.08] px-3 py-2.5 text-cyan-100"><Gauge size={15} /> Executive Overview</a>
            <a href="#portfolio" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-400 transition hover:bg-white/[0.04] hover:text-white"><Building2 size={15} /> Portfolio</a>
            <a href="#allocator" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-400 transition hover:bg-white/[0.04] hover:text-white"><CircleDollarSign size={15} /> Equity Allocator</a>
            <a href="#deals" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-400 transition hover:bg-white/[0.04] hover:text-white"><Layers3 size={15} /> Sovereign Deal Room</a>
            <a href="#zoning" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-400 transition hover:bg-white/[0.04] hover:text-white"><Radar size={15} /> Zoning Radar HUD</a>
          </nav>
          <div className="mb-2 mt-8 px-3 text-[9px] font-semibold tracking-[0.2em] text-slate-600">APEX OMNI-SUITE <span className="ml-1 text-cyan-400">200+</span></div>
          <nav className="space-y-1 text-[12px]">
            {modules.slice(0, 5).map((module) => <a key={module} href="#suite" className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 transition hover:bg-white/[0.04] hover:text-slate-200"><Workflow size={14} />{module}</a>)}
            <a href="#suite" className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 transition hover:bg-white/[0.04] hover:text-slate-200"><MoreHorizontal size={14} />Explore all modules</a>
          </nav>
          <div className="mt-auto rounded-xl border border-white/[0.08] bg-white/[0.025] p-3.5">
            <div className="mb-3 flex items-center gap-2"><div className="grid size-7 place-items-center rounded-full border border-cyan-200/20 bg-cyan-300/10 text-cyan-100"><Fingerprint size={13} /></div><div><div className="text-[10px] font-semibold text-slate-200">Mason Fau</div><div className="mt-0.5 text-[8px] tracking-[0.12em] text-cyan-300">ROOT ADMINISTRATIVE OWNER</div></div></div>
            <div className="flex items-center gap-1.5 border-t border-white/[0.07] pt-3 text-[9px] text-emerald-300"><ShieldCheck size={12} /> Sovereign access verified</div>
          </div>
        </aside>

        <section className="min-w-0 flex-1">
          <header className="flex h-[64px] items-center justify-between border-b border-white/[0.07] px-4 sm:px-7">
            <div className="flex items-center gap-3"><button aria-label="Open navigation" className="text-slate-400 xl:hidden"><Command size={17} /></button><div className="text-[11px] text-slate-500">Apex Terminal <span className="mx-2 text-slate-700">/</span><span className="text-slate-200">Overview</span></div></div>
            <div className="flex items-center gap-3 sm:gap-5">
              <div className="hidden items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-[10px] text-slate-500 md:flex"><Search size={13} /> Search assets, deals, investors <kbd className="ml-4 rounded border border-white/10 px-1.5 py-0.5 text-[9px]">⌘ K</kbd></div>
              <button aria-label="Notifications" className="relative text-slate-400 hover:text-white"><Bell size={16} /><span className="absolute -right-0.5 -top-0.5 size-1.5 rounded-full bg-cyan-300" /></button>
              <div className="grid size-7 place-items-center rounded-full border border-cyan-200/20 bg-cyan-300/10 text-[10px] font-semibold text-cyan-100">MF</div>
            </div>
          </header>

          <div className="mx-auto max-w-[1420px] px-4 py-7 sm:px-7 sm:py-9">
            <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
              <div><div className="mb-2 flex items-center gap-2 text-[9px] font-semibold tracking-[0.22em] text-cyan-300"><span className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#67e8f9]" /> PRIVATE CAPITAL · NEW ZEALAND</div><h1 className="text-2xl font-semibold tracking-tight text-white sm:text-[34px]">Apex command center<span className="text-cyan-300">.</span></h1><p className="mt-2 text-xs text-slate-400">Institutional real estate intelligence, allocation and syndication in one sovereign workspace.</p></div>
              <div className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-[#0e1319] px-3 py-2 text-[10px] text-slate-400"><span className="size-1.5 rounded-full bg-emerald-300" /> LIVE SNAPSHOT <ChevronDown size={12} /></div>
            </div>

            <div className="mb-6 grid gap-3 sm:grid-cols-2 2xl:grid-cols-4">
              <Metric label="Portfolio gross asset value" value="$92.6M" note="7.8% YoY" icon={Building2} accent="text-cyan-300" />
              <Metric label="Committed investor capital" value="$64.2M" note="+ $4.8M QTD" icon={CircleDollarSign} accent="text-emerald-300" />
              <Metric label="Weighted occupancy" value="93.7%" note="+1.6 pts" icon={Activity} accent="text-violet-300" />
              <Metric label="Indicative 5-year IRR" value="14.2%" note="Base scenario" icon={BarChart3} accent="text-amber-300" />
            </div>
            <p className="-mt-3 mb-6 text-[9px] text-slate-600">Illustrative dashboard figures only; not an offer, forecast, or investment advice.</p>

            <div className="grid gap-5 2xl:grid-cols-[1.55fr_1fr]">
              <section id="portfolio" className="rounded-xl border border-white/[0.08] bg-[#0e1319]/85 p-4 sm:p-5">
                <PanelTitle eyebrow="Institutional portfolio" title="Featured assets" action="Open portfolio" />
                <div className="grid gap-3 lg:grid-cols-3">{assets.map((asset) => <article key={asset.name} className={`relative overflow-hidden rounded-lg border border-white/[0.07] bg-gradient-to-br ${asset.tint} via-[#111820] to-[#0b1015] p-4`}>
                  <div className="absolute -right-8 -top-8 size-28 rounded-full border border-white/[0.05]" /><div className="relative flex items-start justify-between"><div><div className="text-[12px] font-semibold text-white">{asset.name}</div><div className="mt-1 text-[9px] text-slate-500">{asset.type}</div></div><span className="rounded border border-white/10 bg-black/20 px-1.5 py-1 text-[8px] tracking-wide text-slate-300">{asset.tag}</span></div>
                  <div className="relative mt-7 flex items-end justify-between"><div><div className="text-[8px] uppercase tracking-[0.15em] text-slate-500">Est. asset value</div><div className="mt-1 text-xl font-semibold text-white">{asset.value}</div></div><div className="text-right"><div className="flex items-center justify-end gap-1 text-[10px] text-emerald-300"><ArrowUpRight size={11} />{asset.change}</div><div className="mt-1 text-[9px] text-slate-500">{asset.occupancy} occupied</div></div></div>
                  <div className="relative mt-4 flex items-center justify-between border-t border-white/[0.07] pt-3 text-[9px] text-slate-500"><span className="flex items-center gap-1"><MapPin size={11} /> New Zealand</span><button aria-label={`Open ${asset.name}`} className="text-slate-400 hover:text-cyan-200"><ArrowRight size={13} /></button></div>
                </article>)}</div>
              </section>

              <section id="allocator" className="rounded-xl border border-cyan-300/10 bg-[linear-gradient(145deg,rgba(8,47,73,0.22),rgba(14,19,25,0.92)_52%)] p-4 sm:p-5">
                <PanelTitle eyebrow="Capital strategy" title="Fractional Equity Allocator" action="Launch model" />
                <p className="-mt-2 mb-4 text-[10px] leading-relaxed text-slate-400">Explore illustrative ownership allocations across the active portfolio. Adjustments require authorized review.</p>
                <div className="space-y-3">{[{ name: 'Wynyard Quarter', value: '45%', width: '45%', color: 'bg-cyan-300' }, { name: 'Lambton Quay', value: '35%', width: '35%', color: 'bg-violet-300' }, { name: 'The Remarkables', value: '20%', width: '20%', color: 'bg-amber-300' }].map((row) => <div key={row.name}><div className="mb-1.5 flex justify-between text-[10px]"><span className="text-slate-300">{row.name}</span><span className="font-medium text-slate-100">{row.value}</span></div><div className="h-1.5 overflow-hidden rounded-full bg-white/[0.07]"><div className={`h-full rounded-full ${row.color}`} style={{ width: row.width }} /></div></div>)}</div>
                <div className="mt-5 grid grid-cols-2 gap-3"><div className="rounded-lg border border-white/[0.07] bg-black/15 p-3"><div className="text-[8px] uppercase tracking-wider text-slate-500">Allocation model</div><div className="mt-1 text-[11px] font-medium text-slate-200">Balanced mandate</div></div><div className="rounded-lg border border-white/[0.07] bg-black/15 p-3"><div className="text-[8px] uppercase tracking-wider text-slate-500">Review status</div><div className="mt-1 flex items-center gap-1.5 text-[11px] font-medium text-emerald-300"><ShieldCheck size={12} /> Ready to review</div></div></div>
              </section>
            </div>

            <div className="mt-5 grid gap-5 xl:grid-cols-3">
              <section className="rounded-xl border border-white/[0.08] bg-[#0e1319]/85 p-4 sm:p-5 xl:col-span-1">
                <PanelTitle eyebrow="Scenario analysis" title="5-Year IRR Engine" action="View assumptions" />
                <div className="mb-4 flex items-end justify-between"><div><div className="text-[9px] text-slate-500">Illustrative base case</div><div className="mt-1 text-3xl font-semibold text-white">14.2<span className="text-lg text-slate-400">%</span></div></div><div className="mb-1 flex items-center gap-1 text-[9px] text-emerald-300"><ArrowUpRight size={12} /> 1.3 pts vs. prior scenario</div></div>
                <div className="flex h-[92px] items-end gap-2 border-b border-white/[0.08] px-1">{[35, 44, 49, 62, 70, 76, 84, 89, 100, 94, 100, 100].map((height, index) => <div key={index} className="group relative flex-1 rounded-t-sm bg-gradient-to-t from-cyan-500/20 to-cyan-300/80" style={{ height: `${height}%` }} />)}</div>
                <div className="mt-2 flex justify-between text-[8px] text-slate-600"><span>Y0</span><span>Y1</span><span>Y2</span><span>Y3</span><span>Y4</span><span>Y5</span></div>
                <div className="mt-4 flex items-center justify-between rounded-lg border border-white/[0.06] bg-black/15 px-3 py-2 text-[9px]"><span className="text-slate-500">Scenario inputs</span><span className="text-slate-300">Rent · cap rate · exit · leverage</span></div>
              </section>

              <section id="deals" className="rounded-xl border border-white/[0.08] bg-[#0e1319]/85 p-4 sm:p-5 xl:col-span-1">
                <PanelTitle eyebrow="Private syndication" title="Sovereign Deal Room" action="Enter deal room" />
                <div className="space-y-2.5">{[{ name: 'Harbour Exchange', type: 'Wynyard Quarter · Mixed-use', stage: 'DUE DILIGENCE', progress: '72%', color: 'text-cyan-300' }, { name: 'Alpine Residences', type: 'Remarkables · Hospitality', stage: 'INVESTOR REVIEW', progress: '48%', color: 'text-amber-300' }, { name: 'Quay House', type: 'Lambton Quay · Office', stage: 'CLOSED', progress: '100%', color: 'text-emerald-300' }].map((deal) => <div key={deal.name} className="rounded-lg border border-white/[0.06] bg-black/10 p-3"><div className="flex items-start justify-between gap-2"><div><div className="text-[11px] font-medium text-slate-200">{deal.name}</div><div className="mt-1 text-[9px] text-slate-500">{deal.type}</div></div><span className={`text-[8px] font-semibold tracking-wide ${deal.color}`}>{deal.stage}</span></div><div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.07]"><div className="h-full rounded-full bg-cyan-400/70" style={{ width: deal.progress }} /></div></div>)}</div>
              </section>

              <section id="zoning" className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0e1319]/85 p-4 sm:p-5 xl:col-span-1">
                <PanelTitle eyebrow="Planning intelligence" title="Zoning Radar HUD" action="Open map" />
                <div className="relative flex h-[183px] items-center justify-center overflow-hidden rounded-lg border border-cyan-300/[0.12] bg-[#071018]" style={{ backgroundImage: 'linear-gradient(rgba(34,211,238,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.055) 1px, transparent 1px)', backgroundSize: '22px 22px' }}>
                  <div className="absolute size-40 rounded-full border border-cyan-300/10" /><div className="absolute size-28 rounded-full border border-cyan-300/15" /><div className="absolute size-16 rounded-full border border-cyan-300/20" /><div className="absolute h-px w-full bg-cyan-300/10" /><div className="absolute h-full w-px bg-cyan-300/10" />
                  <div className="absolute h-36 w-36 origin-center rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(34,211,238,0.16)_48deg,transparent_70deg)]" />
                  <span className="absolute left-[27%] top-[32%] size-2 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" /><span className="absolute right-[28%] top-[46%] size-1.5 rounded-full bg-amber-300 shadow-[0_0_10px_#fcd34d]" /><span className="absolute bottom-[25%] left-[48%] size-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_#6ee7b7]" />
                  <div className="absolute left-3 top-3 flex items-center gap-1 text-[8px] tracking-[0.16em] text-cyan-200"><ScanLine size={11} /> PLANNING LAYERS · AUCKLAND</div><div className="absolute bottom-3 right-3 flex items-center gap-1 text-[8px] text-slate-500"><Waves size={10} /> RADAR ONLINE</div>
                </div>
                <div className="mt-3 flex items-center justify-between text-[9px]"><span className="flex items-center gap-1.5 text-slate-400"><span className="size-1.5 rounded-full bg-cyan-300" /> 3 opportunity zones</span><span className="text-slate-500">Indicative planning overlay</span></div>
              </section>
            </div>

            <div id="suite" className="mt-5 grid gap-5 lg:grid-cols-[1.2fr_1fr]">
              <section className="rounded-xl border border-white/[0.08] bg-[#0e1319]/85 p-4 sm:p-5">
                <PanelTitle eyebrow="Unified operating layer" title="200-in-1 Omni-Suite" action="Browse all 200+" />
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">{modules.map((module, index) => <div key={module} className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3"><div className="mb-2 flex items-center justify-between"><Workflow size={14} className={index % 2 ? 'text-violet-300' : 'text-cyan-300'} /><span className="text-[8px] text-emerald-300">READY</span></div><div className="text-[9px] font-medium text-slate-300">{module}</div></div>)}</div>
                <div className="mt-3 flex items-center gap-2 text-[9px] text-slate-500"><Layers3 size={12} className="text-cyan-300" /> Connected workflows · one permission-aware workspace</div>
              </section>
              <section className="rounded-xl border border-white/[0.08] bg-[#0e1319]/85 p-4 sm:p-5">
                <PanelTitle eyebrow="Autonomous insight layer" title="Neural Core v12" action="Open insights" />
                <div className="flex gap-3 rounded-lg border border-cyan-300/10 bg-cyan-300/[0.035] p-3.5"><div className="grid size-8 shrink-0 place-items-center rounded-lg border border-cyan-300/15 bg-cyan-300/[0.08] text-cyan-200"><Sparkles size={15} /></div><div><div className="text-[10px] font-medium text-slate-200">Portfolio signal detected</div><p className="mt-1 text-[9px] leading-relaxed text-slate-400">Occupancy at Wynyard Quarter is trending above the modeled base case. Review current assumptions before updating the underwriting scenario.</p></div></div>
                <div className="mt-3 flex items-center justify-between text-[9px] text-slate-500"><span className="flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-emerald-300" /> PRIVATE MODEL · HUMAN REVIEW REQUIRED</span><button className="text-cyan-300 hover:text-cyan-100">Inspect signal <ArrowRight className="ml-1 inline" size={11} /></button></div>
              </section>
            </div>

            <section className="mt-5 rounded-xl border border-white/[0.08] bg-[#0e1319]/85 p-4 sm:p-5">
              <PanelTitle eyebrow="Immutable workspace activity" title="Recent activity" action="View audit log" />
              <div className="grid gap-3 md:grid-cols-3">{activity.map(({ title, detail, time, icon: Icon, color }) => <div key={title} className="flex gap-3 rounded-lg border border-white/[0.05] bg-black/10 p-3"><div className={`grid size-8 shrink-0 place-items-center rounded-lg bg-white/[0.04] ${color}`}><Icon size={14} /></div><div className="min-w-0 flex-1"><div className="flex items-start justify-between gap-2"><div className="text-[10px] font-medium text-slate-200">{title}</div><time className="shrink-0 text-[8px] text-slate-600">{time}</time></div><div className="mt-1 text-[9px] text-slate-500">{detail}</div></div></div>)}</div>
            </section>

            <footer className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] pt-4 text-[8px] tracking-[0.12em] text-slate-600"><span>SOVEREIGN OS V12.0 · APEX EDITION</span><span className="flex items-center gap-2"><ShieldCheck size={11} className="text-emerald-400" /> ROOT ADMINISTRATIVE OWNER: MASON FAU <span className="text-slate-800">·</span> <span className="flex items-center gap-1"><ArrowDownRight size={10} /> NZT WORKSPACE</span></span></footer>
          </div>
        </section>
      </div>
    </main>
  );
}
