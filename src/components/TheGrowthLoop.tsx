'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import {
  UserPlus,
  Share2,
  Swords,
  Award,
  TrendingUp,
  ArrowRight,
  ArrowDown,
  Sparkles,
  Layers,
  GraduationCap,
  Building2,
  Medal,
  BarChart3,
} from 'lucide-react';

interface LoopPhase {
  id: string;
  stepNumber: string;
  name: string;
  tagline: string;
  metric: string;
  detail: string;
  icon: any;
  color: string;
  borderColor: string;
  bgColor: string;
  studentRole: string;
  collegeRole: string;
  ambassadorRole: string;
  adminRole: string;
}

const PHASES: LoopPhase[] = [
  {
    id: 'register',
    stepNumber: '01',
    name: 'REGISTER',
    tagline: 'Zero-Friction Ingestion',
    metric: '342 Signed Up (Simulated)',
    detail: 'Student signs up in <30s; receives immediate Student ID + custom referral URL with query attribution (?ref=AI60-XXX).',
    icon: UserPlus,
    color: 'text-indigo-400',
    borderColor: 'border-indigo-500/50',
    bgColor: 'bg-indigo-950/40',
    studentRole: 'Enters name, college, branch, and goal; receives unique tracking link instantly.',
    collegeRole: 'Ingests new cohort member into campus headcount.',
    ambassadorRole: 'Monitors direct attribution link clicks and intake pacing.',
    adminRole: 'Validates duplicate heuristics and updates live intake pacing.',
  },
  {
    id: 'refer',
    stepNumber: '02',
    name: 'REFER',
    tagline: 'AI Share Copilot',
    metric: '1-Click WhatsApp',
    detail: 'AI Share Copilot tailors message pitch by branch (CSE/ECE) and sends directly into hostel and batch WhatsApp groups.',
    icon: Share2,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/50',
    bgColor: 'bg-emerald-950/40',
    studentRole: 'Selects WhatsApp group or friend; generates branch-tailored pitch with 1 click.',
    collegeRole: 'Deepens campus density as classmate invites circulate in batch chats.',
    ambassadorRole: 'Distributes high-converting 1-liner copy across campus circles.',
    adminRole: 'Measures channel conversion velocity across WhatsApp vs. Telegram vs. LinkedIn.',
  },
  {
    id: 'compete',
    stepNumber: '03',
    name: 'COMPETE',
    tagline: 'Campus Battle Mode',
    metric: '12 Colleges Live',
    detail: 'Inter-college leaderboard (RVCE vs. CBIT vs. VIT) activates tribal pride; Takeover Calculator prompts batch invite sprints.',
    icon: Swords,
    color: 'text-amber-400',
    borderColor: 'border-amber-500/50',
    bgColor: 'bg-amber-950/40',
    studentRole: 'Checks college rank; sees "12 more signups needed to overtake RVCE".',
    collegeRole: 'Ascends national leaderboard; ignites competitive inter-college pride.',
    ambassadorRole: 'Rallies batch peers in evening hostel blitzes to maintain top standing.',
    adminRole: 'Monitors inter-college leaderboards and triggers tactical surge broadcasts.',
  },
  {
    id: 'reward',
    stepNumber: '04',
    name: 'REWARD',
    tagline: 'Career Accelerators',
    metric: '₹0 Marginal Cost',
    detail: 'Milestone tiers unlock high-perceived-value non-monetary perks: ATS Resume Blueprints, Colab GPU Pass, and 1:1 Mentor Reviews.',
    icon: Award,
    color: 'text-sky-400',
    borderColor: 'border-sky-500/50',
    bgColor: 'bg-sky-950/40',
    studentRole: 'Unlocks Bronze Blueprint (1 ref) and GPU API pass (3 refs) at ₹0 cost.',
    collegeRole: 'Celebrates batch members clearing technical placement milestones.',
    ambassadorRole: 'Clears batch milestone to earn fixed ₹50 stipend.',
    adminRole: 'Maintains ₹0 marginal reward cost, tracking Realized CAC at ₹5.85 and Target CAC at ₹4.00 on strict ₹2,000 budget.',
  },
  {
    id: 'more',
    stepNumber: '05',
    name: 'MORE REGISTRATIONS',
    tagline: 'Sub-Viral 2.63x Multiplier Inflow',
    metric: '500+ Target Met',
    detail: 'Each referred peer registers to unlock their own placement blueprint, re-entering Phase 1 and compounding distribution through a finite 2.63x geometric multiplier loop.',
    icon: TrendingUp,
    color: 'text-purple-400',
    borderColor: 'border-purple-500/50',
    bgColor: 'bg-purple-950/40',
    studentRole: 'Invited peers join to unlock their own blueprint, becoming new advocates.',
    collegeRole: 'Crosses 50+ quota, locking in national institutional spotlight.',
    ambassadorRole: 'Achieves national Top 3 ranking and unlocks direct PPO fast-track.',
    adminRole: 'Compounds acquisition curve past 500 registrations with zero paid ads.',
  },
];

export function TheGrowthLoop() {
  const [activePhase, setActivePhase] = useState<LoopPhase>(PHASES[0]);

  return (
    <Card className="border-indigo-900/60 bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-900 shadow-xl overflow-hidden">
      <CardHeader className="pb-3 border-b border-slate-800/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-bold">
                CORE VIRAL ARCHITECTURE
              </span>
              <Badge variant="purple" className="text-[10px]">30-Second Insight</Badge>
            </div>
            <CardTitle className="text-xl sm:text-2xl font-black text-white tracking-tight mt-1 flex items-center">
              # THE GROWTH LOOP
            </CardTitle>
            <CardDescription className="text-xs text-slate-300">
              How an organic sub-viral flywheel replaces paid advertising to acquire 500 engineering students on ₹2,000 budget.
            </CardDescription>
          </div>
          <div className="text-right sm:self-center">
            <span className="text-[10px] font-mono uppercase text-amber-300 font-semibold block">Sub-Viral Loop (K &lt; 1.0)</span>
            <span className="text-lg font-mono font-bold text-emerald-400">
              K = 0.62 <span className="text-xs text-slate-300 font-normal font-mono">(M = 2.63x)</span>
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-6 space-y-6">
        {/* Prominent Phase Navigator Bar */}
        <div className="p-3 rounded-xl bg-slate-950 border border-indigo-900/40 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-md">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 flex items-center">
              <Layers className="w-3.5 h-3.5 mr-1.5" />
              Phase Navigator:
            </span>
            <span className="text-[11px] text-slate-400 hidden sm:inline">
              Click any phase to inspect its viral compounding mechanics
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Phase Navigator">
            {PHASES.map((p) => {
              const isSelected = activePhase.id === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActivePhase(p)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center space-x-1.5 ${
                    isSelected
                      ? 'bg-indigo-600 text-white font-bold ring-1 ring-indigo-400 shadow-md shadow-indigo-600/30'
                      : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  Phase {p.stepNumber}: {p.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Visual Stepper Strip: Horizontal on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {PHASES.map((phase, idx) => {
            const Icon = phase.icon;
            const isSelected = activePhase.id === phase.id;

            return (
              <div key={phase.id} className="relative flex flex-col">
                <button
                  type="button"
                  onClick={() => setActivePhase(phase)}
                  className={`p-3.5 rounded-xl border text-left transition-all h-full flex flex-col justify-between ${
                    isSelected
                      ? `${phase.bgColor} ${phase.borderColor} shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500/50`
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold text-slate-400">
                        {phase.stepNumber}
                      </span>
                      <Icon className={`w-4 h-4 ${phase.color}`} />
                    </div>
                    <div className="text-xs font-bold text-white tracking-tight">{phase.name}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{phase.tagline}</div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold">{phase.metric}</span>
                    <span className="text-[9px] uppercase font-mono text-indigo-300">Inspect</span>
                  </div>
                </button>

                {/* Arrow connector between steps */}
                {idx < PHASES.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-600 pointer-events-none">
                    <ArrowRight className="w-3.5 h-3.5 text-indigo-400/70" />
                  </div>
                )}
                {idx < PHASES.length - 1 && (
                  <div className="flex md:hidden justify-center py-1 text-slate-600">
                    <ArrowDown className="w-3.5 h-3.5 text-indigo-400/70" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Phase Detail Focus Box with Stepper Controls */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/60 pb-3">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono font-bold text-indigo-400">
                PHASE {activePhase.stepNumber} of 05: {activePhase.name}
              </span>
              <span className="text-xs text-slate-500">→</span>
              <span className="text-xs font-semibold text-white">{activePhase.tagline}</span>
            </div>

            {/* Stepper Navigation: Prev, 01-05 pills, Next */}
            <div className="flex items-center space-x-1.5">
              <button
                type="button"
                onClick={() => {
                  const currIdx = PHASES.findIndex((p) => p.id === activePhase.id);
                  if (currIdx > 0) setActivePhase(PHASES[currIdx - 1]);
                }}
                disabled={activePhase.id === PHASES[0].id}
                className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                ← Prev
              </button>
              <div className="flex space-x-1">
                {PHASES.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActivePhase(p)}
                    className={`w-5 h-5 rounded text-[10px] font-mono font-bold flex items-center justify-center transition-all ${
                      p.id === activePhase.id
                        ? 'bg-indigo-600 text-white shadow-sm ring-1 ring-indigo-400'
                        : 'bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    {p.stepNumber}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  const currIdx = PHASES.findIndex((p) => p.id === activePhase.id);
                  if (currIdx < PHASES.length - 1) setActivePhase(PHASES[currIdx + 1]);
                }}
                disabled={activePhase.id === PHASES[PHASES.length - 1].id}
                className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                Next →
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
            <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
              {activePhase.detail}
            </p>
            <div className="sm:self-center shrink-0 p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-right">
              <span className="text-[10px] uppercase font-mono text-slate-400 block">Phase Benchmark</span>
              <span className="text-sm font-mono font-bold text-emerald-400">{activePhase.metric}</span>
            </div>
          </div>
        </div>

        {/* MULTI-ROLE ECOSYSTEM CROSS-ALIGNMENT MATRIX */}
        <div className="space-y-2.5 pt-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <h4 className="text-xs font-mono font-bold uppercase text-slate-300 tracking-wider">
                Ecosystem Cross-Alignment: How Phase {activePhase.stepNumber} Activates All 4 Roles
              </h4>
            </div>
            <span className="text-[10px] text-slate-500 font-mono">Unified Product Architecture</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            {/* Role 1: Student */}
            <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-900/40 space-y-1.5">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold">
                <GraduationCap className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-wider">Student Hub</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {activePhase.studentRole}
              </p>
            </div>

            {/* Role 2: College */}
            <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-900/40 space-y-1.5">
              <div className="flex items-center space-x-2 text-amber-400 font-bold">
                <Building2 className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-wider">College Campus</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {activePhase.collegeRole}
              </p>
            </div>

            {/* Role 3: Ambassador */}
            <div className="p-3 rounded-xl bg-sky-950/20 border border-sky-900/40 space-y-1.5">
              <div className="flex items-center space-x-2 text-sky-400 font-bold">
                <Medal className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-wider">Ambassador Lead</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {activePhase.ambassadorRole}
              </p>
            </div>

            {/* Role 4: Admin */}
            <div className="p-3 rounded-xl bg-indigo-950/20 border border-indigo-900/40 space-y-1.5">
              <div className="flex items-center space-x-2 text-indigo-400 font-bold">
                <BarChart3 className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-wider">Admin War Room</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {activePhase.adminRole}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
