'use client';

import React from 'react';
import Link from 'next/link';
import { useRole } from '@/context/RoleContext';
import {
  Sparkles,
  ArrowRight,
  Users,
  Zap,
  CheckCircle2,
  GraduationCap,
  Target,
  Building2,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Progress } from '@/components/ui/Progress';
import { Badge } from '@/components/ui/Badge';
import { TheGrowthLoop } from '@/components/TheGrowthLoop';

export default function HomePage() {
  const { setRole } = useRole();
  const [activePersona, setActivePersona] = React.useState<'student' | 'ambassador' | 'campus' | 'admin'>('student');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 border-b border-slate-800/80 bg-gradient-to-b from-indigo-950/20 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Top High-Visibility SIMULATED SPRINT Banner */}
            <div className="w-full bg-amber-500/15 border border-amber-500/40 rounded-xl px-4 py-2.5 mb-6 flex flex-wrap items-center justify-center gap-2 text-xs font-mono shadow-md">
              <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider">
                SIMULATED
              </span>
              <span className="text-amber-200 font-semibold">
                Sprint Day 4/7: <strong className="text-white">342 / 500 Actual (68.4%)</strong> vs <strong className="text-slate-300">286 Benchmark (57.1%)</strong> <span className="text-emerald-400 font-bold">[+56 Ahead (+11.3%)]</span>
              </span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-slate-300">
                Spend to Date: <strong className="text-white font-mono">₹2,000 committed</strong> (₹1,150 deployed)
              </span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-rose-300 font-bold">Realized CAC: ₹5.85</span>
              <span className="text-slate-400 text-[11px]">(₹2,000 ÷ 342)</span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-emerald-400 font-bold">Target CAC: ₹4.00</span>
              <span className="text-slate-400 text-[11px]">(at 500)</span>
            </div>

            <Badge variant="purple" className="mb-4 py-1.5 px-3.5 text-xs border border-indigo-700/60 shadow-md">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-indigo-400" />
              Independent Candidate Submission • NxtWave Growth Challenge
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Build Your First AI Project in 60 Minutes
            </h1>

            <p className="mt-3 text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-emerald-300 to-sky-300">
              Ship a Live Project, Unlock ATS Resume Credentials & Boost Placement Readiness
            </p>

            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Powered by the <strong className="text-white">AI Campus Growth Engine</strong>: an organic multi-role operating system engineered to acquire 500 final-year engineering students across 12 tech campuses on a strict ₹2,000 budget without commercial paid ad spend.
            </p>

            <div className="mt-3 text-xs text-slate-400 font-mono">
              Designed for final-year engineering students across 12 tech campuses • Strict ₹2,000 Fiscal Cap
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/register">
                <Button size="lg" className="shadow-lg shadow-indigo-600/30">
                  Register for Free Workshop
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/workshop">
                <Button variant="outline" size="lg">
                  Explore 60-Min Curriculum
                </Button>
              </Link>
              <Link href="/submission">
                <Button variant="accent" size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/30">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Challenge Submission & AI Notes
                </Button>
              </Link>
              <Link href="/deck">
                <Button variant="secondary" size="lg" className="border-indigo-800/60 text-indigo-300">
                  <Zap className="w-4 h-4 mr-2 text-indigo-400" />
                  5-Slide Executive Deck
                </Button>
              </Link>
            </div>

            {/* Campaign Live Run-Rate Bar (Prominently Tagged as Simulation) */}
            <div className="mt-10 w-full max-w-2xl bg-slate-900/90 border border-amber-500/30 rounded-xl p-4 shadow-xl text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs mb-2 font-mono">
                <div className="flex items-center space-x-2">
                  <span className="px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider">
                    SIMULATED
                  </span>
                  <span className="font-semibold text-slate-200 flex items-center">
                    <Target className="w-4 h-4 text-emerald-400 mr-1.5" />
                    Day 4 Pacing vs Benchmark
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-emerald-400 font-bold">342 Actual (68.4%)</span>
                  <span className="text-slate-400 ml-1.5 text-[11px]">vs 286 Benchmark (57.1%)</span>
                  <span className="text-emerald-300 ml-1 font-bold">[+56 Ahead]</span>
                </div>
              </div>
              <Progress value={68.4} color="emerald" size="md" />
              <div className="mt-2 flex justify-between text-[10px] text-slate-400 font-mono">
                <span>Day 0 Kickoff</span>
                <span className="text-amber-300/90 font-semibold">Day 4 Benchmark: 286 / 500 (57.1%)</span>
                <span>Day 7 Target: 500 (100%)</span>
              </div>
              <div className="mt-2.5 pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-300 font-mono">
                <span>Spend to Date: <strong className="text-white">₹2,000 committed</strong> (₹1,150 cash deployed)</span>
                <span className="text-rose-300 font-semibold">Realized CAC: <strong>₹5.85</strong> (₹2k ÷ 342)</span>
                <span className="text-emerald-300 font-semibold">Target CAC: <strong>₹4.00</strong> (at 500)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All 4 Ecosystem Roles Gateways */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <Badge variant="purple" className="mb-2 text-[10px] uppercase font-mono tracking-wider">
            Unified Product Architecture
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Explore the Growth Engine Across All 4 Ecosystem Roles
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl mx-auto">
            Each role powers a key phase of the viral loop—from student intake and campus tribal rivalry to ambassador distribution and war room telemetry.
          </p>
        </div>

        {/* Interactive 4-Persona Tabbed Interface */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap justify-center p-1.5 rounded-xl bg-slate-900 border border-slate-800 gap-1.5 sm:gap-2 shadow-xl" role="tablist" aria-label="Ecosystem Personas">
            <button
              type="button"
              role="tab"
              aria-selected={activePersona === 'student'}
              onClick={() => {
                setActivePersona('student');
                setRole('student');
              }}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs font-mono transition-all flex items-center space-x-2 ${
                activePersona === 'student'
                  ? 'bg-emerald-600 text-white font-bold shadow-md shadow-emerald-600/30 ring-1 ring-emerald-400'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Persona 1: Student</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activePersona === 'ambassador'}
              onClick={() => {
                setActivePersona('ambassador');
                setRole('ambassador');
              }}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs font-mono transition-all flex items-center space-x-2 ${
                activePersona === 'ambassador'
                  ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-600/30 ring-1 ring-sky-400'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Persona 2: Ambassador</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activePersona === 'campus'}
              onClick={() => {
                setActivePersona('campus');
              }}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs font-mono transition-all flex items-center space-x-2 ${
                activePersona === 'campus'
                  ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-600/30 ring-1 ring-amber-400'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Persona 3: Campus</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activePersona === 'admin'}
              onClick={() => {
                setActivePersona('admin');
                setRole('admin');
              }}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs font-mono transition-all flex items-center space-x-2 ${
                activePersona === 'admin'
                  ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/30 ring-1 ring-indigo-400'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Persona 4: Admin War Room</span>
            </button>
          </div>
        </div>

        {/* Featured Showcase for Selected Tab */}
        <div className="mb-8">
          {activePersona === 'student' && (
            <Card className="border-emerald-500/60 bg-gradient-to-br from-slate-900 via-emerald-950/20 to-slate-900 shadow-xl p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-4 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-950/70 border border-emerald-600/60 text-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-900/30">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-xl font-bold text-white">Student Hub & Viral Referral Pass</h3>
                      <Badge variant="success" className="text-[10px]">Active Persona: Student</Badge>
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Targeting final-year engineering students facing placement resume rejections.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link href="/student/dashboard" onClick={() => setRole('student')}>
                    <Button variant="accent" size="sm" className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs">
                      Launch Student Hub
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                  </Link>
                  <Link href="/register?ref=AI60-SAI88">
                    <Button variant="outline" size="sm" className="text-xs">
                      Test Referral Ingestion
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-emerald-300 block">1. 30-Second Ingestion</span>
                  <p>Students sign up with zero environment friction; instantly receive custom referral link with attribution tracking.</p>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-emerald-300 block">2. AI Share Copilot</span>
                  <p>Generates branch-tailored WhatsApp pitches (CSE capstone vs ECE tech transition) with 1-click sharing.</p>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-emerald-300 block">3. Career Milestone Perks</span>
                  <p>Non-monetary unlocks (₹0 marginal cost): Bronze ATS Blueprint (1 ref), Colab GPU pass (3 refs), 1:1 mentor critique (5 refs).</p>
                </div>
              </div>
            </Card>
          )}

          {activePersona === 'ambassador' && (
            <Card className="border-sky-500/60 bg-gradient-to-br from-slate-900 via-sky-950/20 to-slate-900 shadow-xl p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-4 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-sky-950/70 border border-sky-600/60 text-sky-400 flex items-center justify-center shadow-lg shadow-sky-900/30">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-xl font-bold text-white">Campus Ambassador Portal & Distribution</h3>
                      <Badge variant="info" className="text-[10px]">Active Persona: Ambassador</Badge>
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5">
                      12 student placement reps across 12 tech hubs distributing via batch chats and classroom announcements.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link href="/ambassador/dashboard" onClick={() => setRole('ambassador')}>
                    <Button variant="secondary" size="sm" className="bg-sky-600 hover:bg-sky-500 text-white text-xs">
                      Launch Ambassador Portal
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                  </Link>
                  <Link href="/ambassador/assets">
                    <Button variant="outline" size="sm" className="text-xs">
                      Get WhatsApp Broadcast Copy
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-sky-300 block">1. 24-Hour Day-1 Roadmap</span>
                  <p>Hour 0-4 Scout &gt; Hour 4-8 Recruit &gt; Hour 8-12 Activate &gt; Hour 12-24 Calibrate delivers 216 Day-1 seed registrants.</p>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-sky-300 block">2. 1-Click Broadcast Pitches</span>
                  <p>Curated 10-second classroom speech, WhatsApp batch announcements, tech club blurbs, and 1:1 direct messages.</p>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-sky-300 block">3. Audited Micro-Bounties</span>
                  <p>Fixed ₹50 milestone stipend per verified 10-student cohort: 12 leads × ₹50 = exactly ₹600 total capital allocation.</p>
                </div>
              </div>
            </Card>
          )}

          {activePersona === 'campus' && (
            <Card className="border-amber-500/60 bg-gradient-to-br from-slate-900 via-amber-950/20 to-slate-900 shadow-xl p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-4 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-950/70 border border-amber-600/60 text-amber-400 flex items-center justify-center shadow-lg shadow-amber-900/30">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-xl font-bold text-white">Campus Battle Mode & Tribal Leaderboards</h3>
                      <Badge variant="warning" className="text-[10px]">Active Persona: Campus</Badge>
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Inter-college rivalry pitting Amrita, RVCE, CBIT, VIT, and PES against each other.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link href="/student/leaderboard">
                    <Button variant="secondary" size="sm" className="bg-amber-600 hover:bg-amber-500 text-white text-xs">
                      View Campus Battle Mode
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-amber-300 block">1. Live Takeover Calculator</span>
                  <p>Displays tribal urgency in real time: "12 more registrations needed to overtake RV College of Engineering for Rank #1!"</p>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-amber-300 block">2. Evening Hostel Study Blitz</span>
                  <p>Capitalizes on natural 8:30 PM - 10:30 PM post-dinner hostel hours when peer invite velocity spikes by 3.2x.</p>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-amber-300 block">3. Institutional Spotlight</span>
                  <p>Top 3 campuses unlock dedicated placement masterclass certificates and NxtWave campus leadership badges.</p>
                </div>
              </div>
            </Card>
          )}

          {activePersona === 'admin' && (
            <Card className="border-indigo-500/60 bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-900 shadow-xl p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-4 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-indigo-950/70 border border-indigo-600/60 text-indigo-400 flex items-center justify-center shadow-lg shadow-indigo-900/30">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-xl font-bold text-white">Admin War Room & Real-Time Telemetry</h3>
                      <Badge variant="purple" className="text-[10px]">Active Persona: Admin</Badge>
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Command center monitoring fiscal spend, sub-viral compounding attribution, and live attendance retention.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link href="/admin/dashboard" onClick={() => setRole('admin')}>
                    <Button variant="primary" size="sm" className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs">
                      Launch Admin War Room
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                  </Link>
                  <Link href="/admin/simulator">
                    <Button variant="outline" size="sm" className="text-xs">
                      Open Budget Simulator
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs text-slate-300">
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1 font-mono">
                  <span className="text-[10px] text-slate-400 uppercase block">Capital Committed</span>
                  <span className="text-base font-bold text-white">₹2,000 Total</span>
                  <p className="text-[11px] text-emerald-400">₹1,150 deployed • ₹850 buffer</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1 font-mono">
                  <span className="text-[10px] text-slate-400 uppercase block">Realized CAC (Day 4)</span>
                  <span className="text-base font-bold text-rose-300">₹5.85 / student</span>
                  <p className="text-[11px] text-slate-400">₹2,000 committed ÷ 342 actual</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1 font-mono">
                  <span className="text-[10px] text-slate-400 uppercase block">Target CAC (Day 7)</span>
                  <span className="text-base font-bold text-emerald-400">₹4.00 / student</span>
                  <p className="text-[11px] text-slate-400">₹2,000 budget ÷ 500 target</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1 font-mono">
                  <span className="text-[10px] text-slate-400 uppercase block">Sub-Viral Multiplier</span>
                  <span className="text-base font-bold text-amber-300">K = 0.62 (2.63x)</span>
                  <p className="text-[11px] text-slate-400">Finite geometric compounding</p>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* 4 Interactive Persona Cards Overview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Student Hub */}
          <button
            type="button"
            onClick={() => {
              setActivePersona('student');
              setRole('student');
            }}
            className={`text-left rounded-xl transition-all ${
              activePersona === 'student' ? 'ring-2 ring-emerald-400 shadow-lg shadow-emerald-950/50' : 'hover:border-emerald-500/50'
            }`}
          >
            <Card className="h-full border-slate-800 bg-slate-900/40 flex flex-col justify-between p-4">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="font-bold text-sm text-emerald-300">1. Student Hub</div>
                <p className="text-xs text-slate-400">
                  Final-year student seeking placement-ready AI credentials & ATS blueprints.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
                <span className="font-mono text-emerald-400">Select Tab</span>
                <span className="text-slate-400">→</span>
              </div>
            </Card>
          </button>

          {/* Card 2: Campus Ambassador */}
          <button
            type="button"
            onClick={() => {
              setActivePersona('ambassador');
              setRole('ambassador');
            }}
            className={`text-left rounded-xl transition-all ${
              activePersona === 'ambassador' ? 'ring-2 ring-sky-400 shadow-lg shadow-sky-950/50' : 'hover:border-sky-500/50'
            }`}
          >
            <Card className="h-full border-slate-800 bg-slate-900/40 flex flex-col justify-between p-4">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-lg bg-sky-950/60 border border-sky-800/60 text-sky-400 flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <div className="font-bold text-sm text-sky-300">2. Campus Ambassador</div>
                <p className="text-xs text-slate-400">
                  12 campus leads distributing curated WhatsApp pitches across batches.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
                <span className="font-mono text-sky-400">Select Tab</span>
                <span className="text-slate-400">→</span>
              </div>
            </Card>
          </button>

          {/* Card 3: College Campus */}
          <button
            type="button"
            onClick={() => {
              setActivePersona('campus');
            }}
            className={`text-left rounded-xl transition-all ${
              activePersona === 'campus' ? 'ring-2 ring-amber-400 shadow-lg shadow-amber-950/50' : 'hover:border-amber-500/50'
            }`}
          >
            <Card className="h-full border-slate-800 bg-slate-900/40 flex flex-col justify-between p-4">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-lg bg-amber-950/60 border border-amber-800/60 text-amber-400 flex items-center justify-center">
                  <Building2 className="w-4 h-4" />
                </div>
                <div className="font-bold text-sm text-amber-300">3. College Campus</div>
                <p className="text-xs text-slate-400">
                  Inter-college rivalry & live Rank Takeover Calculator across 12 institutions.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
                <span className="font-mono text-amber-400">Select Tab</span>
                <span className="text-slate-400">→</span>
              </div>
            </Card>
          </button>

          {/* Card 4: Admin War Room */}
          <button
            type="button"
            onClick={() => {
              setActivePersona('admin');
              setRole('admin');
            }}
            className={`text-left rounded-xl transition-all ${
              activePersona === 'admin' ? 'ring-2 ring-indigo-400 shadow-lg shadow-indigo-950/50' : 'hover:border-indigo-500/50'
            }`}
          >
            <Card className="h-full border-slate-800 bg-slate-900/40 flex flex-col justify-between p-4">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-lg bg-indigo-950/60 border border-indigo-800/60 text-indigo-400 flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="font-bold text-sm text-indigo-300">4. Admin War Room</div>
                <p className="text-xs text-slate-400">
                  Growth lead command center tracking pacing, fiscal CAC, and attendance defense.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
                <span className="font-mono text-indigo-400">Select Tab</span>
                <span className="text-slate-400">→</span>
              </div>
            </Card>
          </button>
        </div>
      </section>

      {/* 30-Second Insight: The Core Growth Loop Architecture */}
      <section className="py-12 border-t border-slate-900 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TheGrowthLoop />
        </div>
      </section>
    </div>
  );
}
