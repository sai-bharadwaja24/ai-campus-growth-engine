'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Target,
  Users,
  TrendingUp,
  BarChart3,
  Zap,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  RefreshCw,
  RotateCcw,
  Award,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Clock,
  Send,
  PieChart,
  Presentation,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { StatCard } from '@/components/ui/StatCard';
import { Progress } from '@/components/ui/Progress';
import { TheGrowthLoop } from '@/components/TheGrowthLoop';
import { GrowthLoopVisualizer } from '@/components/GrowthLoopVisualizer';
import { ReferralVelocityChart } from '@/components/ReferralVelocityChart';
import { BudgetLedger } from '@/components/BudgetLedger';
import { AttendanceDefenseCard } from '@/components/AttendanceDefenseCard';
import { GrowthRetentionTimeline } from '@/components/GrowthRetentionTimeline';
import { getGrowthCopilotAdvice } from '@/lib/ai-intelligence';
import { useRole } from '@/context/RoleContext';

export default function AdminDashboardPage() {
  const { registrationCount, recentRegistrations } = useRole();

  const [stats, setStats] = useState({
    totalRegistrations: 342,
    verifiedRegistrations: 287,
    registrationsToday: 64,
    requiredPerDay: 52.7,
    referralContributionPct: 42.4,
    topCollege: 'Amrita Vishwa Vidyapeetham (78)',
    topAmbassador: 'Sai Bharadwaja (Amrita - 78 regs)',
    topChannel: 'College WhatsApp Groups (145 regs)',
    conversionRate: 20.7,
    cac: '₹4.00',
    progressPct: 68.4,
  });

  // Sync live state from role context when new students register
  useEffect(() => {
    if (registrationCount && registrationCount > stats.totalRegistrations) {
      setStats((prev) => {
        const delta = registrationCount - prev.totalRegistrations;
        const newTotal = registrationCount;
        return {
          ...prev,
          totalRegistrations: newTotal,
          verifiedRegistrations: Math.round(newTotal * 0.839),
          registrationsToday: prev.registrationsToday + delta,
          progressPct: Number(((newTotal / 500) * 100).toFixed(1)),
          requiredPerDay: Number(((500 - newTotal) / 3).toFixed(1)),
          cac: '₹4.00',
        };
      });
    }
  }, [registrationCount]);

  const [isGenerating, setIsGenerating] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [surgeAlert, setSurgeAlert] = useState('');
  const [actionTriggered, setActionTriggered] = useState(false);

  const copilotAdvice = getGrowthCopilotAdvice(stats.totalRegistrations, 500, 3);

  const handleGenerateDemo = async () => {
    setIsGenerating(true);
    setSurgeAlert('');

    try {
      const res = await fetch('/api/demo/generate', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setStats({
          totalRegistrations: 412,
          verifiedRegistrations: 356,
          registrationsToday: 134,
          requiredPerDay: 29.3,
          referralContributionPct: 48.2,
          topCollege: 'Amrita Vishwa Vidyapeetham (98)',
          topAmbassador: 'Sai Bharadwaja (Amrita - 98 regs)',
          topChannel: 'College WhatsApp Groups (198 regs)',
          conversionRate: 24.8,
          cac: '₹4.00',
          progressPct: 82.4,
        });
        setSurgeAlert('Surge Generated! +70 realistic simulated student registrations and referral chains injected across 12 engineering colleges.');
      }
    } catch (e: any) {
      alert('Error generating demo data: ' + e.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleResetDemo = async () => {
    setIsResetting(true);
    setSurgeAlert('');
    try {
      const res = await fetch('/api/demo/reset', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setStats({
          totalRegistrations: 342,
          verifiedRegistrations: 287,
          registrationsToday: 64,
          requiredPerDay: 52.7,
          referralContributionPct: 42.4,
          topCollege: 'Amrita Vishwa Vidyapeetham (78)',
          topAmbassador: 'Sai Bharadwaja (Amrita - 78 regs)',
          topChannel: 'College WhatsApp Groups (145 regs)',
          conversionRate: 20.7,
          cac: '₹4.00',
          progressPct: 68.4,
        });
        setSurgeAlert('Simulation reset to baseline state: 342 / 500 registrations (68.4% target pacing, Day 4).');
      }
    } catch (e: any) {
      alert('Error resetting demo: ' + e.message);
    } finally {
      setIsResetting(false);
    }
  };

  const handleNextAction = () => {
    setActionTriggered(true);
    setTimeout(() => {
      setStats((prev) => ({
        ...prev,
        totalRegistrations: prev.totalRegistrations + 24,
        registrationsToday: prev.registrationsToday + 24,
        referralContributionPct: Number((prev.referralContributionPct + 1.8).toFixed(1)),
        progressPct: Number((((prev.totalRegistrations + 24) / 500) * 100).toFixed(1)),
        cac: '₹4.00',
      }));
      setSurgeAlert('Tactical Trigger Fired! Evening WhatsApp blitz sent to 45 college groups. +24 registrations acquired in 15 minutes.');
      setActionTriggered(false);
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Simulation Banner & Demo Controls */}
      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-indigo-900/50 text-slate-300 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center space-x-2.5">
          <Badge variant="purple">Simulated Campaign</Badge>
          <span className="text-slate-300">
            Interactive growth telemetry modeling 500 B.Tech student registrations on ₹2,000 budget in 7 days.
          </span>
        </div>
        <div className="flex items-center space-x-2 shrink-0">
          <Button
            size="sm"
            variant="outline"
            onClick={handleResetDemo}
            isLoading={isResetting}
            className="text-xs"
            title="Reset to baseline 342 registrations"
          >
            <RotateCcw className="w-3.5 h-3.5 mr-1 text-slate-400" />
            RESET DEMO
          </Button>
          <Button
            size="sm"
            variant="primary"
            onClick={handleGenerateDemo}
            isLoading={isGenerating}
            className="shadow-sm shadow-indigo-600/30 whitespace-nowrap text-xs"
          >
            <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
            GENERATE DEMO CAMPAIGN
          </Button>
        </div>
      </div>

      {surgeAlert && (
        <div className="p-3.5 rounded-lg bg-emerald-950/70 border border-emerald-800 text-emerald-300 text-xs flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{surgeAlert}</span>
          </div>
          <button onClick={() => setSurgeAlert('')} className="text-slate-400 hover:text-white text-xs">Dismiss</button>
        </div>
      )}

      {/* War Room Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">Growth War Room Command</h1>
            <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider shadow-sm">
              SIMULATED SPRINT DAY 4 / 7
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Real-time acquisition telemetry for 500 final-year engineering students across 12 tech campuses.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Link href="/deck">
            <Button size="sm" variant="secondary" className="border-amber-500/40 text-amber-300 hover:text-white hover:bg-amber-950/40">
              <Presentation className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              5-Slide Pitch Deck
            </Button>
          </Link>
          <Link href="/admin/simulator">
            <Button size="sm" variant="accent">
              <Zap className="w-3.5 h-3.5 mr-1.5" />
              ₹2,000 Budget & 7-Day Simulator
            </Button>
          </Link>
          <Link href="/admin/funnel">
            <Button size="sm" variant="secondary">
              Funnel & Attribution
            </Button>
          </Link>
          <Link href="/admin/ai-decision-log">
            <Button size="sm" variant="outline">
              AI Decision Log
            </Button>
          </Link>
        </div>
      </div>

      {/* Admin Next-Action Card (High Priority Callout at top) */}
      <Card className="border-amber-500/50 bg-gradient-to-r from-amber-950/30 via-slate-900 to-indigo-950/30 shadow-md">
        <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start space-x-3.5">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 mt-0.5 shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400">
                  ADMIN NEXT BEST ACTION — PRIORITY: CRITICAL
                </span>
                <Badge variant="warning" className="text-[9px]">Pacing Trigger</Badge>
              </div>
              <h3 className="text-sm font-bold text-white">
                Launch 8:30 PM WhatsApp Batch Blitz ("Placement Capstone Panic" Hook)
              </h3>
              <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
                Referral velocity drops 40% during daytime lectures but spikes 2.1x between 8:00 PM – 11:00 PM in hostels. Triggering pre-configured broadcast copy across 45 college channels now will capture an estimated +35 to +50 students before midnight.
              </p>
            </div>
          </div>

          <Button
            size="md"
            variant="warning"
            onClick={handleNextAction}
            isLoading={actionTriggered}
            className="shrink-0 shadow-lg shadow-amber-500/20"
          >
            <Send className="w-4 h-4 mr-2" />
            Trigger WhatsApp Broadcast Now
          </Button>
        </CardContent>
      </Card>

      {/* 30-SECOND WOW MOMENT: THE GROWTH LOOP */}
      <TheGrowthLoop />

      {/* LIVE ₹2,000 BUDGET & UNIT ECONOMICS LEDGER */}
      <BudgetLedger totalRegistrations={stats.totalRegistrations} />

      {/* 500 Target Master Progress Bar */}
      <Card className="border-indigo-900/60 bg-slate-900/80">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base text-white flex items-center">
              <Target className="w-5 h-5 mr-2 text-emerald-400" />
              500-Student Target Pacing & Unit Economics
            </CardTitle>
            <span className="text-xs font-mono font-bold text-emerald-400">
              {stats.totalRegistrations} / 500 Registered ({stats.progressPct}%) vs 286 Benchmark (57.1%) [+56 Ahead]
            </span>
          </div>
          <CardDescription>
            Target: 500 registrations. Day 4 Benchmark: <strong>286 students (57.1%)</strong>. Actual: <strong>{stats.totalRegistrations} students ({stats.progressPct}%)</strong>. Ahead of benchmark by <strong>+56 students (+11.3%)</strong>. Sub-Viral Multiplier (K = 0.62 &lt; 1.0, 2.63x amplification) projects finish of <strong>530+ students</strong>.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={stats.progressPct} color="emerald" size="lg" />
          <div className="mt-2 flex justify-between text-[10px] text-slate-400 font-mono">
            <span>Day 0 Kickoff</span>
            <span className="text-amber-300/90 font-semibold">Day 4 Benchmark: 286 / 500 (57.1%)</span>
            <span>Day 7 Target: 500 (100%)</span>
          </div>
          <div className="mt-3.5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase font-mono">Registrations Today</span>
              <span className="text-white font-bold font-mono text-base">{stats.registrationsToday} students</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase font-mono">Required / Day</span>
              <span className="text-amber-400 font-bold font-mono text-base">{stats.requiredPerDay} regs/day</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase font-mono">Referral Contribution</span>
              <span className="text-emerald-400 font-bold font-mono text-base">{stats.referralContributionPct}%</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase font-mono">Realized vs Target CAC</span>
              <span className="text-rose-300 font-bold font-mono text-base">₹5.85 <span className="text-emerald-400 text-xs">/ ₹4.00</span></span>
              <span className="text-[10px] text-slate-500 block font-mono">₹2k ÷ 342 vs ₹2k ÷ 500</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ATTENDANCE DEFENSE ENGINE CARD */}
      <AttendanceDefenseCard totalRegistrations={stats.totalRegistrations} />

      {/* D0 -> D7 GROWTH + RETENTION LOOP COMPONENT */}
      <GrowthRetentionTimeline />

      {/* Growth Copilot Diagnostic Card */}
      <Card className="border-indigo-900/60 bg-gradient-to-br from-slate-900 via-indigo-950/25 to-slate-900">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base text-white flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-indigo-400" />
              Growth Copilot: What Should We Do Next?
            </CardTitle>
            <Badge variant="purple">AI Situation & Diagnostic Engine</Badge>
          </div>
          <CardDescription>
            Continuous automated telemetry diagnosis comparing pacing, ambassador velocity, and channel saturation.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="text-[10px] uppercase font-mono text-slate-400 font-bold block">Current Situation Analysis</span>
              <p className="text-slate-200 leading-relaxed">{copilotAdvice.currentSituation}</p>
            </div>
            <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="text-[10px] uppercase font-mono text-amber-400 font-bold block">Detected Friction / Bottleneck</span>
              <p className="text-slate-200 leading-relaxed">{copilotAdvice.detectedIssue}</p>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-indigo-950/50 border border-indigo-800/60 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-mono text-indigo-300 font-bold">Recommended Growth Intervention</span>
              <Badge variant="success">Expected Lift: +18% Velocity</Badge>
            </div>
            <p className="text-white font-medium text-xs">{copilotAdvice.recommendedAction}</p>
            <p className="text-indigo-200 text-[11px] leading-relaxed italic">
              Strategic Rationale: {copilotAdvice.strategicReason}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Referral Velocity Graph Component */}
      <ReferralVelocityChart />

      {/* Interactive Growth Loop Visualizer Component */}
      <GrowthLoopVisualizer />

      {/* Leadership & Attribution Intelligence Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Top College"
          value={stats.topCollege}
          subtitle="Inter-college leaderboard leader"
          icon={<Users className="w-5 h-5 text-sky-400" />}
          tag="Campus Battle #1"
        />
        <StatCard
          title="Top Ambassador"
          value={stats.topAmbassador}
          subtitle="Highest conversion campus lead"
          icon={<Award className="w-5 h-5 text-amber-400" />}
          tag="₹200 Bounty Cleared"
        />
        <StatCard
          title="Top Channel"
          value={stats.topChannel}
          subtitle="48.2% of all registrations at ₹0 CAC"
          icon={<Sparkles className="w-5 h-5 text-emerald-400" />}
          tag="Organic Viral"
        />
        <StatCard
          title="Conversion Rate"
          value={`${stats.conversionRate}%`}
          subtitle="1,650 Unique Landing Visitors"
          icon={<TrendingUp className="w-5 h-5 text-indigo-400" />}
          delta="ATS Hook: +90% Lift"
        />
      </div>

      {/* Quick Navigation Footer Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        <Link href="/deck">
          <Card className="border-amber-500/40 bg-slate-900/90 hover:border-amber-400 transition-colors p-4">
            <span className="text-xs font-semibold text-amber-300 block flex items-center gap-1.5">
              <Presentation className="w-3.5 h-3.5 text-amber-400" />
              5-Slide Pitch Deck
            </span>
            <span className="text-[11px] text-slate-400">Executive Presentation Mode</span>
          </Card>
        </Link>
        <Link href="/admin/simulator">
          <Card className="hover:border-slate-700 transition-colors p-4">
            <span className="text-xs font-semibold text-white block">₹2,000 Budget Simulator</span>
            <span className="text-[11px] text-slate-400">7-Day Pacing Stepper</span>
          </Card>
        </Link>
        <Link href="/admin/funnel">
          <Card className="hover:border-slate-700 transition-colors p-4">
            <span className="text-xs font-semibold text-white block">Funnel & Attribution</span>
            <span className="text-[11px] text-slate-400">Channel Attribution Matrix</span>
          </Card>
        </Link>
        <Link href="/admin/ai-decision-log">
          <Card className="hover:border-slate-700 transition-colors p-4">
            <span className="text-xs font-semibold text-white block">AI Decision Log</span>
            <span className="text-[11px] text-slate-400">5-Part Strategic Judgments</span>
          </Card>
        </Link>
        <Link href="/admin/colleges">
          <Card className="hover:border-slate-700 transition-colors p-4">
            <span className="text-xs font-semibold text-white block">Campus Battle Mode</span>
            <span className="text-[11px] text-slate-400">Inter-College Leaderboards</span>
          </Card>
        </Link>
      </div>
    </div>
  );
}
