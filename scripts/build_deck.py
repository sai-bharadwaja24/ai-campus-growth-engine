import os

code = """'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  ChevronLeft,
  ChevronRight,
  Presentation,
  ArrowRight,
  TrendingUp,
  Users,
  ShieldCheck,
  Coins,
  Share2,
  Calendar,
  Sparkles,
  Zap,
  Target,
  Swords,
  Award,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Mic,
  Maximize2,
  Minimize2,
  Building2,
  Clock,
  ArrowLeft
} from 'lucide-react';

interface SlideData {
  id: number;
  slideNumber: string;
  badge: string;
  title: string;
  subtitle: string;
  speakerDuration: string;
  speakerNotes: string;
  defenseTip: string;
  demoHref: string;
  demoLabel: string;
}

const SLIDES_METADATA: SlideData[] = [
  {
    id: 0,
    slideNumber: '01',
    badge: 'EXECUTIVE SUMMARY & FLYWHEEL',
    title: 'The Viral Flywheel & ₹2,000 Unit Economics',
    subtitle: 'Acquiring 500 Engineering Students in 7 Days without Commercial Paid Ad Burn',
    speakerDuration: '35 Seconds',
    speakerNotes: "Good morning, team. Today I am presenting our 7-day campus growth strategy to acquire 500 engineering students for NxtWave's 60-minute AI workshop. First, a strict constraint check: at ₹2,000 total budget, commercial Meta and Google ads are mathematically impossible. With B2C engineering CACs averaging ₹45 to ₹80, paid ads would burn out after only 35 registrations. Instead, we architected an organic peer referral engine with a modeled viral K-factor of 0.62. By deploying ₹600 into 15 campus ambassadors on Day 1, we generate 216 seed signups, and peer referral loops compound the remaining 284 at ₹0 marginal CAC, achieving an audited blended CAC of ₹3.36.",
    defenseTip: 'If asked why not run paid ads: Explain that micro-budgets lack the bidding scale to exit the ad learning phase; referral compounding is the only mathematically viable path.',
    demoHref: '/admin/dashboard',
    demoLabel: 'Inspect Live War Room'
  },
  {
    id: 1,
    slideNumber: '02',
    badge: 'PERSONA & VALUE PROPOSITION',
    title: 'Placement Anxiety & Zero-Friction Value Prop',
    subtitle: 'Aligning Student Emotional Drivers with Hands-On Workshop Takeaways',
    speakerDuration: '35 Seconds',
    speakerNotes: "To drive rapid peer conversion, we dissected our target persona: final-year B.Tech students facing imminent campus placements. Their primary fear is having generic ToDo apps on their resume that get discarded by ATS screeners. Their primary barrier is setup fatigue—they dread broken Python environments and paid API keys. Our value proposition directly removes this friction: in 60 minutes, students build and deploy a real GenAI project 100% in-browser on Google Colab with zero local installation. They leave with a live GitHub link, ATS resume bullet points, and verified credentials.",
    defenseTip: 'If asked about audience segmentation: Emphasize that ECE and non-CS students care about bridging to software, while CSE students care about recruiter interview defense.',
    demoHref: '/register?ref=AMRITA-SAI-2025',
    demoLabel: 'Test Student Intake'
  },
  {
    id: 2,
    slideNumber: '03',
    badge: 'EXECUTION CADENCE',
    title: '7-Day Ground-Level Execution Schedule',
    subtitle: 'Hostel Blitzes, Ambassador Playbooks & Day-by-Day Momentum',
    speakerDuration: '35 Seconds',
    speakerNotes: "A 7-day sprint requires rigorous operational timing. On Day 1, we onboard 15 campus ambassadors across engineering hubs like Amrita, RVCE, and CBIT, unlocking 216 seed registrations through 10-second classroom pitches. On Day 2 and 3, our AI Share Copilot eliminates message anxiety. On Day 4, we launch Campus Battle Mode—pitting colleges against each other during peak 8:30 PM hostel hours. On Day 5 and 6, we deploy calendar syncs and Colab pre-flight checks, building unstoppable momentum into Sunday's live capstone build.",
    defenseTip: 'If asked about college bureaucracy: Highlight that institutional faculty approval takes 3 weeks, so our strategy relies on lateral peer hostel dynamics.',
    demoHref: '/ambassador/dashboard',
    demoLabel: 'View Ambassador Hub'
  },
  {
    id: 3,
    slideNumber: '04',
    badge: 'VIRAL ATTRIBUTION & MECHANICS',
    title: 'Funnel Attribution & The 4 Viral Engines',
    subtitle: 'Converting Peer Trust into Compounding Organic Distribution',
    speakerDuration: '35 Seconds',
    speakerNotes: "Here is our complete funnel attribution. From 1,650 campus impressions, we achieve a 20.7% visitor-to-registration conversion. 42.4% of signups refer at least one friend. We achieve this through 4 viral engines: first, dynamic Inbound Referral Social Proof showing who invited you; second, the AI Share Copilot generating branch-specific WhatsApp copy; third, Campus Battle leaderboards triggering batch pride; and fourth, tiered non-monetary career perks like ATS resume templates that cost NxtWave ₹0 at the margin.",
    defenseTip: 'If asked how spam is prevented: Point out the multi-factor Quality Score Engine (0-100) that verifies college domains and phone uniqueness before crediting rewards.',
    demoHref: '/student/dashboard',
    demoLabel: 'Test AI Share Copilot'
  },
  {
    id: 4,
    slideNumber: '05',
    badge: 'BUDGET & ATTENDANCE DEFENSE',
    title: '₹2,000 Budget Ledger & Attendance Defense',
    subtitle: 'Audited Capital Allocation, Drop-Off Mitigation & Strategic AI Governance',
    speakerDuration: '40 Seconds',
    speakerNotes: "Finally, unit economics and attendance defense. We itemized every rupee in our Live Budget Ledger: ₹600 for ambassador bounties, ₹250 for WhatsApp automation, ₹300 for creative assets, and a protective ₹850 contingency buffer. Total spent is ₹1,150, achieving an audited blended CAC of ₹3.36—a 92.5% reduction versus paid ads. To solve the industry-wide 50% webinar drop-off, our 4-Tier Attendance Defense uses calendar .ics sync, Colab pre-checks, and priority live Q&A passes, ensuring over 220+ verified students attend live.",
    defenseTip: 'If asked what makes this defensible: Highlight that every rupee is capped under ₹2,000, and our AI Decision Log records 5 major forks where raw AI suggestions were overruled by human judgment.',
    demoHref: '/admin/simulator',
    demoLabel: 'Open Budget Simulator'
  }
];

export default function PresentationDeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(prev + 1, SLIDES_METADATA.length - 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'n' || e.key === 'N') {
        setShowNotes((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const slide = SLIDES_METADATA[currentSlide];

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between p-3 sm:p-6 select-none font-sans">
      {/* Top Header Bar */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center space-x-3">
          <Link href="/admin/dashboard">
            <Button size="sm" variant="secondary" className="text-xs">
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
              Back to War Room
            </Button>
          </Link>
          <div className="h-4 w-px bg-slate-800 hidden sm:block" />
          <div>
            <div className="flex items-center space-x-2">
              <Presentation className="w-4 h-4 text-amber-400" />
              <span className="font-bold text-sm tracking-tight text-white">
                NxtWave Executive Growth Plan
              </span>
              <Badge variant="purple" className="text-[9px]">5-Slide Deck</Badge>
            </div>
            <p className="text-[11px] text-slate-400">
              Sai Bharadwaja • Amrita Vishwa Vidyapeetham • 500 Target • ₹2,000 Budget
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2 self-end sm:self-center">
          <Button
            size="sm"
            variant={showNotes ? 'accent' : 'outline'}
            onClick={() => setShowNotes(!showNotes)}
            className="text-xs flex items-center space-x-1.5"
          >
            <Mic className="w-3.5 h-3.5" />
            <span>{showNotes ? 'Hide Pitch Notes' : '🎙️ Speaker Pitch Notes'}</span>
          </Button>

          <Link href={slide.demoHref}>
            <Button size="sm" variant="primary" className="text-xs">
              <span>{slide.demoLabel}</span>
              <ArrowRight className="w-3 h-3 ml-1.5" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Slide Navigation Tabs */}
      <div className="py-3 flex items-center justify-between gap-2 overflow-x-auto border-b border-slate-900">
        <div className="flex items-center space-x-1.5">
          {SLIDES_METADATA.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center space-x-1.5 ${
                currentSlide === idx
                  ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/30 ring-1 ring-indigo-400'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              <span>Slide {s.slideNumber}</span>
              <span className="hidden md:inline text-[10px] opacity-75 font-sans truncate max-w-[120px]">
                • {s.badge.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>

        <div className="text-xs font-mono text-slate-400 shrink-0">
          <span className="text-white font-bold">{currentSlide + 1}</span> / {SLIDES_METADATA.length}
        </div>
      </div>

      {/* Main Slide Card Viewport */}
      <main className="my-4 flex-1 flex flex-col justify-center">
        <div className="w-full max-w-6xl mx-auto bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Slide Header */}
          <div className="border-b border-slate-800/80 pb-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center space-x-2.5 mb-1.5">
                <Badge variant="purple" className="text-[10px] tracking-wider font-mono">
                  SLIDE {slide.slideNumber} // {slide.badge}
                </Badge>
                <span className="text-xs font-mono text-slate-500">• 7-Day Sprint Model</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {slide.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {slide.subtitle}
              </p>
            </div>

            <div className="shrink-0 text-left sm:text-right">
              <span className="text-[10px] uppercase font-mono text-slate-500 block">Spoken Pacing</span>
              <span className="text-xs font-mono font-bold text-amber-400">~{slide.speakerDuration}</span>
            </div>
          </div>

          {/* Slide Specific Content Body */}
          <div className="min-h-[380px] flex flex-col justify-center">
            {currentSlide === 0 && <Slide1Content />}
            {currentSlide === 1 && <Slide2Content />}
            {currentSlide === 2 && <Slide3Content />}
            {currentSlide === 3 && <Slide4Content />}
            {currentSlide === 4 && <Slide5Content />}
          </div>
        </div>
      </main>

      {/* Interactive Speaker Notes Drawer */}
      {showNotes && (
        <aside className="max-w-6xl mx-auto w-full mb-4 p-4 rounded-xl bg-slate-900 border border-amber-500/40 shadow-xl space-y-2">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase font-mono">
              <Mic className="w-4 h-4" />
              <span>Executive Pitch Script (What to Say to Evaluator)</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">Target: ~{slide.speakerDuration}</span>
          </div>
          <p className="text-xs text-slate-200 leading-relaxed italic bg-slate-950 p-3 rounded-lg border border-slate-800">
            "{slide.speakerNotes}"
          </p>
          <div className="pt-1 text-[11px] text-amber-300/90 flex items-center space-x-2">
            <span className="font-bold font-mono uppercase text-amber-400 text-[10px]">Evaluator Defense Tip:</span>
            <span>{slide.defenseTip}</span>
          </div>
        </aside>
      )}

      {/* Bottom Carousel Navigation Controls */}
      <footer className="flex items-center justify-between border-t border-slate-900 pt-3 max-w-6xl mx-auto w-full">
        <Button
          size="sm"
          variant="secondary"
          disabled={currentSlide === 0}
          onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
          className="text-xs"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous Slide
        </Button>

        {/* Visual Progress Dots */}
        <div className="flex items-center space-x-2">
          {SLIDES_METADATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === idx
                  ? 'w-8 bg-indigo-500'
                  : 'w-2 bg-slate-800 hover:bg-slate-700'
              }`}
              title={`Go to Slide ${idx + 1}`}
            />
          ))}
          <span className="text-[11px] text-slate-500 hidden sm:inline ml-2 font-mono">
            (Navigate via ← / → keys)
          </span>
        </div>

        <Button
          size="sm"
          variant="primary"
          disabled={currentSlide === SLIDES_METADATA.length - 1}
          onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, SLIDES_METADATA.length - 1))}
          className="text-xs"
        >
          Next Slide
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </footer>
    </div>
  );
}

// -------------------------------------------------------------
// SLIDE 1: The Viral Flywheel & Unit Economics
// -------------------------------------------------------------
function Slide1Content() {
  const steps = [
    { num: '01', name: 'REGISTER', desc: 'Zero friction intake (<30s Colab)', color: 'border-indigo-500/50 bg-indigo-950/40 text-indigo-300' },
    { num: '02', name: 'REFER', desc: 'AI Share Copilot (Branch tailored)', color: 'border-purple-500/50 bg-purple-950/40 text-purple-300' },
    { num: '03', name: 'COMPETE', desc: 'Campus Battle (Amrita vs RVCE vs CBIT)', color: 'border-sky-500/50 bg-sky-950/40 text-sky-300' },
    { num: '04', name: 'REWARD', desc: 'Bronze ATS Blueprint (₹0 Marginal)', color: 'border-amber-500/50 bg-amber-950/40 text-amber-300' },
    { num: '05', name: 'SCALE', desc: 'Compounding Viral K = 0.62 Loop', color: 'border-emerald-500/50 bg-emerald-950/40 text-emerald-300' },
  ];

  return (
    <div className="space-y-6">
      {/* 5-Step Viral Flywheel Diagram */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
        {steps.map((st, i) => (
          <div key={i} className={`p-3 rounded-xl border ${st.color} flex flex-col justify-between space-y-1 relative`}>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold opacity-75">STEP {st.num}</span>
              {i < 4 && <ArrowRight className="w-3 h-3 text-slate-500 hidden sm:block" />}
            </div>
            <div className="font-bold text-xs text-white">{st.name}</div>
            <div className="text-[10px] text-slate-300 leading-tight">{st.desc}</div>
          </div>
        ))}
      </div>

      {/* Comparison: Paid Ads vs Organic Loops */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-900/50 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-rose-400 uppercase">❌ Paid Meta/Google Ads (Why It Fails)</span>
            <Badge variant="danger" className="text-[9px]">Mathematically Flawed</Badge>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Indian B2C engineering student lead CAC averages <strong>₹45 to ₹80+</strong>. On a strict ₹2,000 budget, funds exhaust after just <strong>25 to 44 registrations</strong> (92% shortfall from 500 target). Zero viral compounding.
          </p>
          <div className="flex items-center justify-between pt-1 border-t border-rose-900/40 text-xs font-mono">
            <span className="text-slate-400">Simulated Yield:</span>
            <span className="text-rose-400 font-bold">~35 Signups • ₹57.14 CAC</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-900/50 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase">✓ Organic Viral Loop + Ambassadors</span>
            <Badge variant="success" className="text-[9px]">Modeled K = 0.62</Badge>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Reallocated ₹600 into 15 campus ambassadors (₹50/10-student cohort). 216 Day-1 seed registrants organically recruit the remaining 284+ classmates at <strong>₹0 marginal CAC</strong> using the AI Share Copilot.
          </p>
          <div className="flex items-center justify-between pt-1 border-t border-emerald-900/40 text-xs font-mono">
            <span className="text-slate-400">Audited Yield:</span>
            <span className="text-emerald-400 font-bold">500 Signups • ₹3.36 CAC</span>
          </div>
        </div>
      </div>

      {/* Official Constraints vs Planning Assumptions */}
      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center divide-x divide-slate-800/80">
          <div>
            <span className="text-[10px] text-slate-400 uppercase block font-mono">Target Volume</span>
            <span className="font-bold text-white text-sm">500 Students</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 uppercase block font-mono">Time Constraint</span>
            <span className="font-bold text-white text-sm">7 Days</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 uppercase block font-mono">Budget Constraint</span>
            <span className="font-bold text-emerald-400 text-sm">Strict ₹2,000 INR</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 uppercase block font-mono">Target Audience</span>
            <span className="font-bold text-indigo-300 text-sm">Final-Year B.Tech</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SLIDE 2: Target Persona & Value Proposition
// -------------------------------------------------------------
function Slide2Content() {
  return (
    <div className="space-y-5">
      {/* 2 Key Personas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-indigo-400 uppercase">Primary: "Placement-Anxious Final Year"</span>
            <Badge variant="purple" className="text-[9px]">CSE / IT (68%)</Badge>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong>Pain Point:</strong> Resumes filled with generic college ToDo apps that get rejected by automated ATS screening software during placement season.
          </p>
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong>Friction:</strong> Wants a deployed GenAI project with a live GitHub link, but intimidated by complex CUDA environments, Docker setups, and paid API keys.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase">Secondary: "The Circuit / Non-CS Pivot"</span>
            <Badge variant="outline" className="text-[9px]">ECE / EEE / Mech (32%)</Badge>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong>Pain Point:</strong> Fear of disqualification in software screening interviews due to lack of practical coding credentials.
          </p>
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong>Trigger:</strong> Reassurance that the workshop runs 100% in-browser on Google Colab with <strong>zero local machine setup</strong>.
          </p>
        </div>
      </div>

      {/* Tri-Factor Motivations */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div className="p-3 rounded-xl bg-slate-950 border border-indigo-500/30 space-y-1">
          <div className="font-bold text-indigo-400 uppercase font-mono text-[11px]">1. Why They Register</div>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Build & deploy a working AI app in 60 mins on Google Colab with a live link and verified certificate.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-slate-950 border border-purple-500/30 space-y-1">
          <div className="font-bold text-purple-400 uppercase font-mono text-[11px]">2. Why They Share</div>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Bronze milestone unlocks on just 1 invite, granting the ATS Resume Blueprint via 1-click WhatsApp copy.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-slate-950 border border-emerald-500/30 space-y-1">
          <div className="font-bold text-emerald-400 uppercase font-mono text-[11px]">3. Why They Attend</div>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Hands-on execution, zero setup barrier, live interviewer defense Q&A, and verified completion credentials.
          </p>
        </div>
      </div>

      {/* Core Value Proposition Banner */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-purple-950/60 border border-indigo-800/60 text-center space-y-1">
        <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-bold block">
          Grounded Value Proposition
        </span>
        <h3 className="text-base font-bold text-white">
          "Build Your First AI Project in 60 Minutes"
        </h3>
        <p className="text-xs text-slate-300 max-w-2xl mx-auto">
          Deploy an interactive GenAI tool on Google Colab with zero local installation. Walk away with a live GitHub repository, verified certificate, and placement interview defense guide.
        </p>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SLIDE 3: 7-Day Campus Execution Cadence
// -------------------------------------------------------------
function Slide3Content() {
  const days = [
    { day: 'Day 1', title: 'Ambassador Recruitment', detail: '15 Campus leads onboarded across Amrita, RVCE, CBIT. 216 seed signups.' },
    { day: 'Day 2', title: 'Referral Activation', detail: 'AI Share Copilot live. 1-click WhatsApp broadcasts to hostel batch groups.' },
    { day: 'Day 3', title: 'Optional Pre-Task', detail: 'Low-friction concept check: ATS Resume Blueprint unlocked on 1 invite.' },
    { day: 'Day 4', title: 'Campus Battle Mode', detail: 'Inter-college rivalry triggers 8:30 PM hostel blitz (Amrita climbs ranks).' },
    { day: 'Day 5', title: 'Scarcity Push', detail: '440+ milestone alert. Final 60-seat scarcity countdown triggered.' },
    { day: 'Day 6', title: 'Readiness Defense', detail: 'Colab environment test & Google Calendar .ics sync sent via WhatsApp.' },
    { day: 'Day 7', title: 'Live Build & Defense', detail: 'T-2h starter notebook delivered. Live 60-minute build & certificate issuance.' },
  ];

  return (
    <div className="space-y-5">
      {/* 7-Day Stepper Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {days.map((d, i) => (
          <div key={i} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-indigo-400">{d.day}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <div className="font-bold text-xs text-white leading-tight">{d.title}</div>
            <p className="text-[10px] text-slate-400 leading-normal">{d.detail}</p>
          </div>
        ))}
      </div>

      {/* Multi-Role Coordination Matrix */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
        <span className="text-xs font-mono font-bold text-white uppercase block">
          The Multi-Role Growth Coordination Matrix
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
            <span className="text-[10px] text-emerald-400 font-mono font-bold block">Student Hub</span>
            <span className="text-slate-300 text-[11px]">Unique referral code, instant ATS resume blueprint unlock, personal growth points.</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
            <span className="text-[10px] text-sky-400 font-mono font-bold block">Ambassador Lead</span>
            <span className="text-slate-300 text-[11px]">10-second classroom speech, WhatsApp broadcast cards, ₹50/10 milestone bounties.</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
            <span className="text-[10px] text-amber-400 font-mono font-bold block">Campus Battle</span>
            <span className="text-slate-300 text-[11px]">Clustered registrations trigger live rank climbs (Takeover Calculator: "12 more signups").</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
            <span className="text-[10px] text-purple-400 font-mono font-bold block">Admin War Room</span>
            <span className="text-slate-300 text-[11px]">Real-time K-factor tracking, ₹2,000 budget ledger, 8:30 PM hostel broadcast triggers.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SLIDE 4: Funnel Attribution & Viral Mechanics
// -------------------------------------------------------------
function Slide4Content() {
  const funnel = [
    { label: 'Campus Impressions', count: '1,650', pct: '100%', sub: '15 Campuses, 45 Groups' },
    { label: 'Landing Page Visitors', count: '1,650', pct: '100%', sub: 'Organic Clicks' },
    { label: 'Registration Submissions', count: '342', pct: '20.7%', sub: 'Day 4 Baseline' },
    { label: 'Referral Participants', count: '145', pct: '42.4%', sub: 'Referred >= 1 Peer' },
    { label: 'Verified High-Intent', count: '287', pct: '83.9%', sub: 'Quality Score >= 70' },
    { label: 'Projected Live Attendance', count: '220+', pct: '64.3%', sub: 'Attendance Defended' },
  ];

  return (
    <div className="space-y-5">
      {/* Funnel Progress Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center">
        {funnel.map((fn, idx) => (
          <div key={idx} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-[10px] text-slate-400 uppercase font-mono block truncate">{fn.label}</span>
            <span className="text-base font-bold text-white font-mono block">{fn.count}</span>
            <Badge variant="purple" className="text-[9px]">{fn.pct}</Badge>
            <span className="text-[9px] text-slate-500 block truncate">{fn.sub}</span>
          </div>
        ))}
      </div>

      {/* 4 Core Viral Engines */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="font-bold text-indigo-400 font-mono">1. Inbound Social Proof Banner</span>
            <Badge variant="outline" className="text-[9px]">/?ref=CODE</Badge>
          </div>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Displays: <em>"👋 You've been invited by Sai Bharadwaja from Amrita Vishwa Vidyapeetham. Register to unlock the AI Project Blueprint together."</em> Converts peer trust into immediate signup lift.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="font-bold text-purple-400 font-mono">2. AI Share Copilot</span>
            <Badge variant="purple" className="text-[9px]">Branch Tailored</Badge>
          </div>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Eliminates messaging friction. Pre-engineers tailored copy across 5 channels (WhatsApp Friend, Batch Group, Club, LinkedIn) adapted dynamically by engineering branch.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="font-bold text-amber-400 font-mono">3. Campus Battle Mode</span>
            <Badge variant="warning" className="text-[9px]">Tribal Pride</Badge>
          </div>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Live inter-college leaderboard pitting RVCE vs CBIT vs Amrita vs VIT with a dynamic Takeover Calculator showing students exactly how many classmates are needed to claim #1 rank.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="font-bold text-emerald-400 font-mono">4. Non-Monetary Milestone Rewards</span>
            <Badge variant="success" className="text-[9px]">₹0 Marginal</Badge>
          </div>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Bronze (1 invite): ATS Resume Blueprint. Silver (3 invites): Colab Pro GPU Notebooks. Gold (5 invites): 1:1 Capstone Architecture Review. Zero cash burn.
          </p>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SLIDE 5: ₹2,000 Budget Ledger & Attendance Defense
// -------------------------------------------------------------
function Slide5Content() {
  const ledger = [
    { cat: 'Ambassador Milestone Bounties', alloc: '₹600', spent: '₹600', rem: '₹0', unit: '₹5.00 / reg (₹50/10 signups)' },
    { cat: 'WhatsApp Community Tooling', alloc: '₹250', spent: '₹250', rem: '₹0', unit: '₹0.73 / reg (Tokens & webhooks)' },
    { cat: 'Creative Assets & Micro-Prizes', alloc: '₹300', spent: '₹300', rem: '₹0', unit: '₹0.88 / reg (Figma & templates)' },
    { cat: 'Unallocated Contingency Buffer', alloc: '₹850', spent: '₹0', rem: '₹850', unit: 'Reserved for Day 6-7 Surge' },
  ];

  return (
    <div className="space-y-5">
      {/* Audited Budget Ledger Table */}
      <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-white uppercase">
            Audited ₹2,000 Capital Allocation Ledger
          </span>
          <Badge variant="success" className="text-[9px]">Total Capped: ₹2,000 INR</Badge>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-slate-800 text-[10px] text-slate-400 uppercase">
                <th className="pb-2 font-semibold">Expense Category</th>
                <th className="pb-2 font-semibold">Allocated</th>
                <th className="pb-2 font-semibold">Spent</th>
                <th className="pb-2 font-semibold">Remaining</th>
                <th className="pb-2 font-semibold">Unit Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {ledger.map((row, idx) => (
                <tr key={idx} className="text-slate-300">
                  <td className="py-1.5 font-sans font-medium text-white">{row.cat}</td>
                  <td className="py-1.5">{row.alloc}</td>
                  <td className="py-1.5 text-emerald-400">{row.spent}</td>
                  <td className="py-1.5 text-slate-400">{row.rem}</td>
                  <td className="py-1.5 text-slate-400 text-[11px]">{row.unit}</td>
                </tr>
              ))}
              <tr className="border-t border-slate-700 font-bold text-white">
                <td className="py-2 font-sans">TOTAL CAPITAL</td>
                <td className="py-2">₹2,000</td>
                <td className="py-2 text-emerald-400">₹1,150 (57.5%)</td>
                <td className="py-2 text-amber-400">₹850 (42.5%)</td>
                <td className="py-2 text-indigo-400">Blended CAC: ₹3.36</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 4-Tier Attendance Defense Schedule */}
      <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
        <span className="text-xs font-mono font-bold text-indigo-400 uppercase block">
          4-Tier Attendance Drop-Off Defense (Solving 50% Webinar Ghosting)
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs">
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
            <span className="text-[10px] text-sky-400 font-mono font-bold block">T-24h Calendar Sync</span>
            <span className="text-slate-300 text-[11px]">Automated WhatsApp delivery of Google Calendar / Outlook .ics room pass.</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
            <span className="text-[10px] text-emerald-400 font-mono font-bold block">T-2h Pre-Flight Check</span>
            <span className="text-slate-300 text-[11px]">Google Colab starter notebook link so students test runtime before session.</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
            <span className="text-[10px] text-amber-400 font-mono font-bold block">T-15m Front-Row Pass</span>
            <span className="text-slate-300 text-[11px]">Priority live Q&A access granted to students who referred at least 1 peer.</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
            <span className="text-[10px] text-purple-400 font-mono font-bold block">Post-Session Credential</span>
            <span className="text-slate-300 text-[11px]">Instant verified credential issued upon executing final notebook cell.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
"""

os.makedirs('src/app/deck', exist_ok=True)
with open('src/app/deck/page.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("Generated src/app/deck/page.tsx successfully in UTF-8!")
