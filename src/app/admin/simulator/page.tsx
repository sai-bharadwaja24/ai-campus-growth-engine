'use client';

import React, { useState } from 'react';
import {
  Zap,
  Target,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  Calendar,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { StatCard } from '@/components/ui/StatCard';
import { Progress } from '@/components/ui/Progress';

interface DayProgression {
  day: number;
  dayName: string;
  cumulativeRegs: number;
  dailyNew: number;
  ambassadorsActive: number;
  viralK: number;
  tacticalMilestone: string;
  operationalAction: string;
}

const CAMPAIGN_DAYS: DayProgression[] = [
  {
    day: 1,
    dayName: 'Day 1 (Monday)',
    cumulativeRegs: 22,
    dailyNew: 22,
    ambassadorsActive: 12,
    viralK: 0.22,
    tacticalMilestone: 'Ambassador Cohort Kickoff',
    operationalAction: 'Onboard 12 student ambassadors across Bangalore, Hyderabad, and Chennai campuses. Distribute customized referral links and WhatsApp message packs.',
  },
  {
    day: 2,
    dayName: 'Day 2 (Tuesday)',
    cumulativeRegs: 68,
    dailyNew: 46,
    ambassadorsActive: 12,
    viralK: 0.38,
    tacticalMilestone: 'Campus Battle Mode Announced',
    operationalAction: 'Launch Inter-College Campus Battle. RVCE and CBIT take the early lead with placement rep broadcasts in 3rd & 4th year class groups.',
  },
  {
    day: 3,
    dayName: 'Day 3 (Wednesday)',
    cumulativeRegs: 149,
    dailyNew: 81,
    ambassadorsActive: 12,
    viralK: 0.52,
    tacticalMilestone: 'First 100 Registrations Cross-Check',
    operationalAction: 'Ambassadors achieve their ₹50 Milestone Stipends (12 × ₹50 = ₹600). Organic peer-to-peer referral links begin circulating in hostel study circles.',
  },
  {
    day: 4,
    dayName: 'Day 4 (Thursday)',
    cumulativeRegs: 269,
    dailyNew: 120,
    ambassadorsActive: 12,
    viralK: 0.62,
    tacticalMilestone: '8:30 PM Peak Prime Blitz',
    operationalAction: 'Execute evening WhatsApp broadcast drop across 36 college channels focusing on "Placement Project Panic" and zero setup Colab access.',
  },
  {
    day: 5,
    dayName: 'Day 5 (Friday)',
    cumulativeRegs: 372,
    dailyNew: 103,
    ambassadorsActive: 12,
    viralK: 0.65,
    tacticalMilestone: 'College Rivalry Takeover Surge',
    operationalAction: 'VIT Vellore activates batch groups to overtake RVCE for Rank #1 on the Campus Battle leaderboard. Pre-task submissions cross 200.',
  },
  {
    day: 6,
    dayName: 'Day 6 (Saturday)',
    cumulativeRegs: 455,
    dailyNew: 83,
    ambassadorsActive: 12,
    viralK: 0.58,
    tacticalMilestone: 'Final 24-Hour Scarcity Blitz',
    operationalAction: 'Broadcast "Final 45 Seats Remaining" alert across all channels. Auto-check workshop readiness checklist for all registered students.',
  },
  {
    day: 7,
    dayName: 'Day 7 (Sunday)',
    cumulativeRegs: 505,
    dailyNew: 50,
    ambassadorsActive: 12,
    viralK: 0.45,
    tacticalMilestone: '500-Student Target Surpassed & Workshop Live',
    operationalAction: 'Final intake reaches 505 verified students. Live 60-minute build sprint streams at 6:00 PM IST; students deploy projects to GitHub.',
  },
];

export default function AdminSimulatorPage() {
  // Budget Allocation State (Strict ₹2,000 Cap)
  const [bountyBudget, setBountyBudget] = useState(600); // ₹600 for 12 ambassador stipends (12 x ₹50)
  const [toolingBudget, setToolingBudget] = useState(250); // ₹250 for WhatsApp API / Automation
  const [creativeBudget, setCreativeBudget] = useState(300); // ₹300 for collateral & micro-prizes
  const [reserveBudget, setReserveBudget] = useState(850); // ₹850 contingency reserve

  // Funnel & Loop Assumptions
  const [ambassadorCount, setAmbassadorCount] = useState(12);
  const [avgAmbassadorRegs, setAvgAmbassadorRegs] = useState(18);
  const [landingTraffic, setLandingTraffic] = useState(1650);
  const [convRate, setConvRate] = useState(22);
  const [referralParticipation, setReferralParticipation] = useState(35);
  const [referralConversion, setReferralConversion] = useState(45);

  // Stepper State
  const [selectedDay, setSelectedDay] = useState<number>(4);

  // Math Calculations
  const totalAllocated = bountyBudget + toolingBudget + creativeBudget + reserveBudget;
  const isBudgetValid = totalAllocated === 2000;

  const ambassadorRegs = ambassadorCount * avgAmbassadorRegs;
  const organicRegs = Math.round(landingTraffic * (convRate / 100));
  const baseRegs = ambassadorRegs + organicRegs;
  const referringStudents = Math.round(baseRegs * (referralParticipation / 100));
  const viralRegs = Math.round(referringStudents * 3.5 * (referralConversion / 100));
  const totalProjected = baseRegs + viralRegs;
  const target = 500;
  const progressPct = Number(((totalProjected / target) * 100).toFixed(1));
  const projectedCAC = totalProjected > 0 ? (2000 / totalProjected).toFixed(2) : '0';
  const viralK = ((referralParticipation / 100) * 3.5 * (referralConversion / 100)).toFixed(2);
  const isTargetMet = totalProjected >= target;

  const activeDayData = CAMPAIGN_DAYS.find((d) => d.day === selectedDay) || CAMPAIGN_DAYS[3];

  const [activeScenario, setActiveScenario] = useState<'base' | 'downside' | 'optimistic'>('base');
  const [fallbackActivated, setFallbackActivated] = useState<boolean>(false);

  const applyDownsideCase = () => {
    setActiveScenario('downside');
    setFallbackActivated(false);
    setBountyBudget(600);
    setToolingBudget(250);
    setCreativeBudget(300);
    setReserveBudget(850);
    setAmbassadorCount(12);
    setAvgAmbassadorRegs(18); // 216 Day-1 seed registrants
    setLandingTraffic(800);
    setConvRate(11.6); // 93 direct organic signups -> 309 total base + viral
    setReferralParticipation(25);
    setReferralConversion(34.3); // K = 0.25 * 3.5 * 0.343 = 0.30
  };

  const applyBaseCase = () => {
    setActiveScenario('base');
    setFallbackActivated(false);
    setBountyBudget(600);
    setToolingBudget(250);
    setCreativeBudget(300);
    setReserveBudget(850);
    setAmbassadorCount(12);
    setAvgAmbassadorRegs(18);
    setLandingTraffic(1650);
    setConvRate(22);
    setReferralParticipation(35);
    setReferralConversion(45); // K = 0.55 - 0.62
  };

  const applyOptimisticCase = () => {
    setActiveScenario('optimistic');
    setFallbackActivated(false);
    setReferralParticipation(48);
    setReferralConversion(55);
    setConvRate(26);
  };

  const resetDefaults = () => {
    applyBaseCase();
  };

  const recoveredFallbackSignups = fallbackActivated ? 195 : 0;
  const effectiveTotalProjected = totalProjected + recoveredFallbackSignups;
  const effectiveProjectedCAC = effectiveTotalProjected > 0 ? (2000 / effectiveTotalProjected).toFixed(2) : '0';
  const effectiveIsTargetMet = effectiveTotalProjected >= target;

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">Campaign Growth & Budget Simulator</h1>
            <Badge variant="purple">₹2,000 Budget Cap</Badge>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Simulate campaign pacing, viral coefficient K, and strictly bounded ₹2,000 budget unit economics to hit 500 registrations.
          </p>
        </div>

        <Button size="sm" variant="outline" onClick={resetDefaults}>
          <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
          Reset Baseline Assumptions
        </Button>
      </div>

      {/* Scenario Sensitivity Analysis & Reality Check */}
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-mono font-bold text-white uppercase flex items-center">
              <Sparkles className="w-4 h-4 mr-1.5 text-indigo-400" />
              Scenario Sensitivity Analysis (Sub-Viral K-Factor Reality Check)
            </span>
            <p className="text-xs text-slate-400 mt-0.5">
              K = 0.62 is technically <strong className="text-amber-300">sub-viral (K &lt; 1.0)</strong>, acting as a finite geometric multiplier (M = 1 / (1 - 0.62) = 2.63x). True virality (K = 1.0) requires 50% participation × 4.0 invites × 50% conversion. Test the Downside Scenario (K = 0.30) below.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button
              size="sm"
              variant={activeScenario === 'downside' ? 'secondary' : 'outline'}
              onClick={applyDownsideCase}
              className={`text-xs ${activeScenario === 'downside' ? 'bg-amber-600 text-white font-bold ring-1 ring-amber-400' : ''}`}
            >
              ⚠️ Downside Stress Test (K = 0.30)
            </Button>
            <Button
              size="sm"
              variant={activeScenario === 'base' ? 'primary' : 'outline'}
              onClick={applyBaseCase}
              className="text-xs"
            >
              🎯 Base Plan (K = 0.62 Sub-Viral)
            </Button>
            <Button
              size="sm"
              variant={activeScenario === 'optimistic' ? 'secondary' : 'outline'}
              onClick={applyOptimisticCase}
              className={`text-xs ${activeScenario === 'optimistic' ? 'bg-emerald-600 text-white font-bold' : ''}`}
            >
              🚀 Viral Surge (K = 0.92)
            </Button>
          </div>
        </div>

        {activeScenario === 'downside' && (
          <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 text-xs text-amber-200 space-y-3 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-500/20 pb-2.5">
              <div className="font-bold font-mono uppercase text-amber-300 flex items-center text-sm">
                <AlertTriangle className="w-4 h-4 mr-1.5 shrink-0 text-amber-400" />
                Downside Sensitivity Scenario (K = 0.30 Stress Test)
              </div>
              <Button
                size="sm"
                variant={fallbackActivated ? 'accent' : 'secondary'}
                onClick={() => {
                  const nextState = !fallbackActivated;
                  setFallbackActivated(nextState);
                  if (nextState) {
                    setBountyBudget(1450); // ₹600 baseline + ₹850 reserve
                    setReserveBudget(0);
                  } else {
                    setBountyBudget(600);
                    setReserveBudget(850);
                  }
                }}
                className={`text-xs font-mono font-bold transition-all ${
                  fallbackActivated
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/40 ring-1 ring-emerald-400'
                    : 'bg-amber-600 hover:bg-amber-500 text-white'
                }`}
              >
                {fallbackActivated ? '✓ Fallback Plan Deployed (+195 Regs)' : '⚡ Deploy ₹850 Fallback Plan'}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300 text-xs">
              <div className="space-y-1.5 bg-slate-950/60 p-3 rounded-lg border border-amber-500/20">
                <span className="font-mono text-amber-400 font-semibold block">1. The Downside Reality Check (K = 0.30):</span>
                <p>
                  If peer referral compounding drops to <strong>K = 0.30</strong> (each student brings only 0.3 peers instead of 0.62), the 216 Day-1 seed registrants compound to only <strong>309 total registrations</strong>. This leaves a severe <strong>191-student shortfall (38.2% deficit)</strong>.
                </p>
              </div>

              <div className="space-y-1.5 bg-slate-950/60 p-3 rounded-lg border border-emerald-500/20">
                <span className="font-mono text-emerald-400 font-semibold block">2. The ₹850 Fallback Execution Plan:</span>
                <p>
                  On <strong>Day 3 at 8:00 PM</strong>, our automated pacing guardrail triggers: the <strong>₹850 Contingency Reserve</strong> is immediately reallocated to deploy <strong>17 Emergency Campus Sub-Ambassador Bounties (₹50 each)</strong> across high-density hostel blocks at RVCE, CBIT, VIT, BMSCE, and Amrita.
                </p>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-950/90 border border-amber-500/30 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div>
                <span className="text-slate-400">Baseline (K = 0.30): </span>
                <strong className="text-white">309 Signups</strong>
              </div>
              <div>
                <span className="text-slate-400">+ Fallback Bounties (17 × ~11.5): </span>
                <strong className={fallbackActivated ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                  {fallbackActivated ? '+195 Signups' : '(Inactive: Click Deploy)'}
                </strong>
              </div>
              <div>
                <span className="text-slate-400">= Total Projected Yield: </span>
                <strong className={fallbackActivated ? 'text-emerald-300 font-bold' : 'text-rose-400 font-bold'}>
                  {effectiveTotalProjected} / 500 Students ({((effectiveTotalProjected / 500) * 100).toFixed(1)}%)
                </strong>
              </div>
              <div>
                <span className="text-slate-400">Total Spent: </span>
                <strong className="text-white">₹{totalAllocated} (CAC: ₹{effectiveProjectedCAC})</strong>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Top Telemetry Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Projected Registrations"
          value={`${effectiveTotalProjected} / 500`}
          subtitle={effectiveIsTargetMet ? `Target Surpassed by ${effectiveTotalProjected - 500} students` : `${500 - effectiveTotalProjected} students deficit`}
          icon={<Target className="w-5 h-5 text-emerald-400" />}
          tag={effectiveIsTargetMet ? 'Goal Achieved' : 'Below Target'}
        />
        <StatCard
          title="Acquisition CAC"
          value={`₹${effectiveProjectedCAC}`}
          subtitle="Realized (Day 4): ₹5.85 (₹2k ÷ 342)"
          icon={<DollarSign className="w-5 h-5 text-indigo-400" />}
          delta="Target CAC: ₹4.00 (at 500)"
        />
        <StatCard
          title="Modeled Viral K-Factor"
          value={viralK}
          subtitle="Sub-viral multiplier: M = 2.63x"
          tag="Sub-Viral (K < 1.0)"
          icon={<Zap className="w-5 h-5 text-amber-400" />}
        />
        <StatCard
          title="Target Feasibility"
          value={`${((effectiveTotalProjected / target) * 100).toFixed(1)}%`}
          subtitle={effectiveIsTargetMet ? 'Campaign Pacing Validated' : 'Deficit: Activate Fallback'}
          icon={<TrendingUp className="w-5 h-5 text-emerald-400" />}
        />
      </div>

      {/* SECTION 1: ₹2,000 STRICT BUDGET SIMULATOR */}
      <Card className="border-indigo-900/60 bg-slate-900/80">
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <CardTitle className="text-base text-white flex items-center">
                <DollarSign className="w-4 h-4 mr-2 text-emerald-400" />
                ₹2,000 Strict Budget Allocation Simulator
              </CardTitle>
              <CardDescription>
                The challenge imposes a non-negotiable ₹2,000 limit. Move sliders to simulate allocation efficiency.
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-slate-400">Total Allocated:</span>
              <span
                className={`font-mono font-bold text-sm ${
                  isBudgetValid ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                ₹{totalAllocated} / ₹2,000
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 text-xs">
          {!isBudgetValid && (
            <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-800 text-rose-300 flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>
                <strong>Budget Limit Violation!</strong> Total allocated is ₹{totalAllocated}. You must adjust sliders so the total equals exactly ₹2,000.
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {/* Slider 1: Ambassador Bounties */}
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex justify-between">
                  <span className="text-white font-semibold">1. Ambassador Micro-Bounties Pool</span>
                  <span className="font-mono text-emerald-400 font-bold">₹{bountyBudget}</span>
                </div>
                <input
                  type="range"
                  min="400"
                  max="1400"
                  step="50"
                  value={bountyBudget}
                  onChange={(e) => setBountyBudget(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
                <p className="text-[11px] text-slate-400">
                  Enables 12 campus ambassador leads across 12 colleges (scalable to {Math.floor(bountyBudget / 50)}) to receive a fixed ₹50 milestone stipend upon onboarding their batch.
                </p>
              </div>

              {/* Slider 2: WhatsApp Automation */}
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex justify-between">
                  <span className="text-white font-semibold">2. WhatsApp Broadcast Tooling & API</span>
                  <span className="font-mono text-sky-400 font-bold">₹{toolingBudget}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="800"
                  step="50"
                  value={toolingBudget}
                  onChange={(e) => setToolingBudget(Number(e.target.value))}
                  className="w-full accent-sky-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
                <p className="text-[11px] text-slate-400">
                  Bulk notification credits for evening 8:30 PM reminder drops and Google Colab starter links.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Slider 3: Design Collateral */}
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex justify-between">
                  <span className="text-white font-semibold">3. Design Assets & Campus Hackathon Badges</span>
                  <span className="font-mono text-indigo-400 font-bold">₹{creativeBudget}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="600"
                  step="50"
                  value={creativeBudget}
                  onChange={(e) => setCreativeBudget(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
                <p className="text-[11px] text-slate-400">
                  High-converting Canva templates, verified digital certificate generation, and LinkedIn badges.
                </p>
              </div>

              {/* Slider 4: Contingency Reserve */}
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex justify-between">
                  <span className="text-white font-semibold">4. Emergency Buffer & Server Capacity</span>
                  <span className="font-mono text-amber-400 font-bold">₹{reserveBudget}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="500"
                  step="50"
                  value={reserveBudget}
                  onChange={(e) => setReserveBudget(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
                <p className="text-[11px] text-slate-400">
                  Reserved for unexpected day-7 server surge, extra API quota, or surprise tiebreaker bounties.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SECTION 2: 7-DAY CAMPAIGN PROGRESSION SIMULATOR */}
      <Card className="border-indigo-900/60 bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-900">
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <CardTitle className="text-base text-white flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-indigo-400" />
                7-Day Campaign Progression Simulator (Day-by-Day Stepper)
              </CardTitle>
              <CardDescription>
                Step through Day 1 to Day 7 to review operational triggers, viral multiplier progression, and cumulative registrations.
              </CardDescription>
            </div>
            <Badge variant="purple">Day {selectedDay} Active</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Day Stepper Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {CAMPAIGN_DAYS.map((cd) => {
              const isSelected = cd.day === selectedDay;
              return (
                <button
                  key={cd.day}
                  onClick={() => setSelectedDay(cd.day)}
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    isSelected
                      ? 'bg-indigo-950 border-indigo-500 shadow-md shadow-indigo-500/20 text-white'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-slate-400">DAY {cd.day}</span>
                    {cd.day === 7 && <Target className="w-3 h-3 text-emerald-400" />}
                  </div>
                  <div className="text-xs font-bold truncate mt-1 text-white">{cd.dayName.split(' ')[0]}</div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-0.5">{cd.cumulativeRegs} Regs</div>
                </button>
              );
            })}
          </div>

          {/* Active Day Detail Box */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center">
                  <Sparkles className="w-4 h-4 mr-2 text-indigo-400" />
                  {activeDayData.dayName} — {activeDayData.tacticalMilestone}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">{activeDayData.operationalAction}</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-mono text-slate-400 block">Cumulative Pacing</span>
                <span className="text-lg font-bold font-mono text-emerald-400">
                  {activeDayData.cumulativeRegs} / 500 ({((activeDayData.cumulativeRegs / 500) * 100).toFixed(1)}%)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] uppercase font-mono text-slate-400 block">New Signups (24h)</span>
                <span className="text-base font-bold font-mono text-white">+{activeDayData.dailyNew}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] uppercase font-mono text-slate-400 block">Active Ambassadors</span>
                <span className="text-base font-bold font-mono text-sky-400">{activeDayData.ambassadorsActive} leads</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] uppercase font-mono text-slate-400 block">Viral K Multiplier</span>
                <span className="text-base font-bold font-mono text-amber-400">K = {activeDayData.viralK}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] uppercase font-mono text-slate-400 block">Days Left to Sprint</span>
                <span className="text-base font-bold font-mono text-indigo-400">{7 - activeDayData.day} Days</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SECTION 3: VIRAL GROWTH & CONVERSION ASSUMPTIONS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-slate-800 bg-slate-900/60">
          <CardHeader>
            <CardTitle className="text-base text-white">Direct Acquisition Levers</CardTitle>
            <CardDescription>Adjust ambassador network size and direct landing page conversion.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-xs">
            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Active Student Ambassadors:</span>
                <span className="font-mono font-bold text-sky-400">{ambassadorCount} leads</span>
              </div>
              <input
                type="range"
                min="5"
                max="25"
                value={ambassadorCount}
                onChange={(e) => setAmbassadorCount(Number(e.target.value))}
                className="w-full accent-sky-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Avg Registrations / Ambassador:</span>
                <span className="font-mono font-bold text-sky-400">{avgAmbassadorRegs} students</span>
              </div>
              <input
                type="range"
                min="5"
                max="35"
                value={avgAmbassadorRegs}
                onChange={(e) => setAvgAmbassadorRegs(Number(e.target.value))}
                className="w-full accent-sky-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Organic Landing Page Traffic (7 Days):</span>
                <span className="font-mono font-bold text-emerald-400">{landingTraffic} visitors</span>
              </div>
              <input
                type="range"
                min="500"
                max="3000"
                step="50"
                value={landingTraffic}
                onChange={(e) => setLandingTraffic(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Visitor-to-Registration Rate:</span>
                <span className="font-mono font-bold text-emerald-400">{convRate}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="40"
                value={convRate}
                onChange={(e) => setConvRate(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900/60">
          <CardHeader>
            <CardTitle className="text-base text-white">Viral Loop & Secondary Referral Levers</CardTitle>
            <CardDescription>Model student-to-student sharing mechanics and referral conversion.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-xs">
            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Student Referral Participation (% Who Share Link):</span>
                <span className="font-mono font-bold text-amber-400">{referralParticipation}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="60"
                value={referralParticipation}
                onChange={(e) => setReferralParticipation(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Referred Peer Conversion Rate:</span>
                <span className="font-mono font-bold text-amber-400">{referralConversion}%</span>
              </div>
              <input
                type="range"
                min="20"
                max="70"
                value={referralConversion}
                onChange={(e) => setReferralConversion(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
            </div>

            <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-2 mt-2">
              <span className="text-[10px] uppercase font-mono text-slate-400 font-bold block">
                Simulator Math Breakdown
              </span>
              <div className="space-y-1 text-slate-300">
                <div className="flex justify-between">
                  <span>Direct Base Intake (Ambassadors + Organic):</span>
                  <span className="font-mono font-bold text-white">{baseRegs} students</span>
                </div>
                <div className="flex justify-between">
                  <span>Viral Referral Secondary Intake:</span>
                  <span className="font-mono font-bold text-emerald-400">+{viralRegs} students</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-slate-800">
                  <span className="font-bold text-white">Total Projected Registrations:</span>
                  <span className="font-mono font-bold text-indigo-400">{totalProjected} students</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
