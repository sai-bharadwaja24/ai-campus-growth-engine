'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, Sparkles, CheckCircle2, Users, Send, Target, Award, PlayCircle } from 'lucide-react';

interface LoopStep {
  id: number;
  title: string;
  shortDesc: string;
  metric: string;
  conversion: string;
  growthLever: string;
  tactic: string;
  icon: any;
}

const LOOP_STEPS: LoopStep[] = [
  {
    id: 1,
    title: '1. Targeted Campus Seed',
    shortDesc: 'Top 12 engineering college groups & 12 trained student ambassadors',
    metric: '1,650 Reach',
    conversion: '100% Top of Funnel',
    growthLever: 'High-trust distribution via student CRs and placement coordinators',
    tactic: 'Pre-written WhatsApp broadcasts sent at 8:30 PM peak hostel discussion hours.',
    icon: Send,
  },
  {
    id: 2,
    title: '2. Zero-Friction Landing',
    shortDesc: 'Mobile-first <30s registration with branch & placement goal selector',
    metric: '342 Registrations (Simulated)',
    conversion: '20.7% Visitor-to-Reg',
    growthLever: 'Career urgency ("Deploy an ATS Resume Project in 60 Mins")',
    tactic: 'Eliminate all password fields; generate instant one-click referral link on submit.',
    icon: Target,
  },
  {
    id: 3,
    title: '3. Instant Link Generation',
    shortDesc: 'Unique Student ID + referral link with query attribution (?ref=AI60-XXX)',
    metric: '100% Coverage',
    conversion: 'Zero drop-off',
    growthLever: 'Immediate dopamine reward & personalized referral identity',
    tactic: 'Auto-copy to clipboard + dynamic QR code for instant phone-to-phone scanning.',
    icon: CheckCircle2,
  },
  {
    id: 4,
    title: '4. AI Share Copilot',
    shortDesc: 'Context-aware message personalization across 5 communication channels',
    metric: '68% Copilot Usage',
    conversion: '3.2x higher share rate',
    growthLever: 'Eliminating student messaging anxiety with pre-engineered pitch angles',
    tactic: 'CSE students get GitHub RAG angle; ECE get circuit AI angle; beginners get zero-coding angle.',
    icon: Sparkles,
  },
  {
    id: 5,
    title: '5. Viral Peer Invitation',
    shortDesc: 'Each active referring student invites 3.5 classmates on WhatsApp',
    metric: 'K = 0.62 Viral Coeff',
    conversion: '42.4% Referral Share',
    growthLever: 'Group project bonding & shared placement preparation',
    tactic: '1-click WhatsApp deep link pre-filling student name and workshop date.',
    icon: Users,
  },
  {
    id: 6,
    title: '6. Non-Monetary Milestones',
    shortDesc: 'Tiered career unlocks: Bronze (Resume Blueprint) → Silver (GPU Pass) → Gold (1:1 Review)',
    metric: '₹0 Marginal Cost',
    conversion: '84% Milestone Claim',
    growthLever: 'High perceived career value without depleting the ₹2,000 campaign budget',
    tactic: 'Automated digital reward unlocking as soon as referred friends verify their email.',
    icon: Award,
  },
  {
    id: 7,
    title: '7. Live 60-Min Workshop',
    shortDesc: 'Interactive build sprint producing a live deployed AI project on GitHub',
    metric: '500+ Capstone Builds',
    conversion: '80% Live Completion',
    growthLever: 'Proof of skill & word-of-mouth student showcase on LinkedIn',
    tactic: 'Live certificate issuance + LinkedIn project badge prompting new student signups.',
    icon: PlayCircle,
  },
];

export function GrowthLoopVisualizer() {
  const [activeStepId, setActiveStepId] = useState(4);
  const activeStep = LOOP_STEPS.find((s) => s.id === activeStepId) || LOOP_STEPS[0];

  return (
    <Card className="border-indigo-900/60 bg-slate-900/80">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <CardTitle className="text-base text-white flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-indigo-400" />
              Interactive 7-Step Viral Growth Loop Visualizer
            </CardTitle>
            <CardDescription>
              Click any node in the growth loop to inspect its conversion telemetry and growth mechanics.
            </CardDescription>
          </div>
          <Badge variant="purple" className="self-start sm:self-auto">
            Modeled Viral K = 0.62
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Horizontal Node Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {LOOP_STEPS.map((step) => {
            const Icon = step.icon;
            const isSelected = step.id === activeStepId;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStepId(step.id)}
                className={`p-2.5 rounded-lg border text-left transition-all relative ${
                  isSelected
                    ? 'bg-indigo-950/70 border-indigo-500 shadow-md shadow-indigo-500/20'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      isSelected ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {step.id}
                  </span>
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-indigo-400' : 'text-slate-500'}`} />
                </div>
                <div className="text-[11px] font-semibold text-white truncate">{step.title.split('. ')[1]}</div>
                <div className="text-[10px] text-emerald-400 font-mono mt-0.5">{step.conversion}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Panel */}
        <div className="p-4 rounded-xl bg-slate-950 border border-indigo-900/40 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold text-indigo-400">STAGE {activeStep.id} OF 7</span>
                <span className="text-sm font-bold text-white">{activeStep.title}</span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">{activeStep.shortDesc}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-slate-400">Current Metric:</span>
              <Badge variant="success">{activeStep.metric}</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] uppercase font-mono text-indigo-300 font-bold block mb-1">
                Core Growth Lever
              </span>
              <p className="text-slate-200">{activeStep.growthLever}</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] uppercase font-mono text-emerald-400 font-bold block mb-1">
                Tactical Execution Detail
              </span>
              <p className="text-slate-200">{activeStep.tactic}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
