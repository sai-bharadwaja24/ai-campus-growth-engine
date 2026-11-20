'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import {
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Share2,
  FileCode,
  Swords,
  Users,
  Video,
  ShieldCheck,
} from 'lucide-react';

interface TimelineStep {
  day: string;
  name: string;
  hook: string;
  retentionMetric: string;
  description: string;
  channel: string;
  icon: any;
  color: string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
}

export function GrowthRetentionTimeline() {
  const steps: TimelineStep[] = [
    {
      day: 'D0',
      name: 'Register & Unique Code Issuance',
      hook: 'Zero-Friction Ingestion (<30s)',
      retentionMetric: '100% Ingestion',
      description: 'Student signs up, receives custom referral link (?ref=AI60-XXX) and instant confirmation pass.',
      channel: 'Web Form & WhatsApp API',
      icon: CheckCircle2,
      color: 'text-indigo-400',
      status: 'Completed',
    },
    {
      day: 'D1',
      name: 'Community Onboarding & Starter Kit',
      hook: 'Placement Anxiety Reliever',
      retentionMetric: '71.6% Community Joins',
      description: 'Delivers "Zero-Setup AI Cheat Sheet" and invites student into the campus WhatsApp/Discord cohort.',
      channel: 'WhatsApp Cohort Channel',
      icon: MessageCircle,
      color: 'text-emerald-400',
      status: 'Completed',
    },
    {
      day: 'D2',
      name: 'Referral Prompt & Bronze Unlock',
      hook: 'Reciprocal Teammate Incentive',
      retentionMetric: '42.4% Referral Rate',
      description: 'Prompt: Invite 1 classmate to unlock the "AI Resume Project Blueprint" with ATS bullet points.',
      channel: 'AI Share Copilot',
      icon: Share2,
      color: 'text-purple-400',
      status: 'Completed',
    },
    {
      day: 'D3',
      name: 'Optional Project Idea Submission',
      hook: 'Low-Friction Pre-Task',
      retentionMetric: '57.9% Pre-Task Intake',
      description: 'Student submits optional 3-field project idea and receives instant AI architectural diagnosis.',
      channel: 'Student Hub Evaluator',
      icon: FileCode,
      color: 'text-sky-400',
      status: 'Completed',
    },
    {
      day: 'D4',
      name: 'Campus Battle Mobilization (Today)',
      hook: 'Tribal Pride & Regional Rivalry',
      retentionMetric: '12 Campuses Ranked',
      description: 'Inter-college leaderboard update triggers 8:30 PM hostel blitz (RVCE leads CBIT by 12 signups).',
      channel: 'Inter-College Leaderboard',
      icon: Swords,
      color: 'text-amber-400',
      status: 'In Progress',
    },
    {
      day: 'D5',
      name: 'Scarcity Countdown & Social Proof',
      hook: 'Milestone Proximity Urgency',
      retentionMetric: 'Projected 440+ Regs',
      description: 'Broadcast: "440 / 500 seats claimed! Final 60 seats reserved for verified engineering email holders."',
      channel: 'Batch WhatsApp Groups',
      icon: Users,
      color: 'text-rose-400',
      status: 'Upcoming',
    },
    {
      day: 'D6',
      name: 'Technical Readiness Check & .ics Sync',
      hook: 'Zero-Friction Day-Before Prep',
      retentionMetric: '83.9% Prep Rate',
      description: 'Student verifies browser Google Colab access; downloads starter notebook and syncs calendar invite.',
      channel: 'Calendar .ics & Email',
      icon: ShieldCheck,
      color: 'text-indigo-400',
      status: 'Upcoming',
    },
    {
      day: 'D7',
      name: 'Live 60-Min Build & Defense',
      hook: 'Instant Deployed Capstone',
      retentionMetric: 'Target 220+ Live (64%)',
      description: 'Live hands-on build: Deploy LLM endpoint + receive verified certificate upon running final code cell.',
      channel: 'Live Broadcast Room',
      icon: Video,
      color: 'text-emerald-400',
      status: 'Upcoming',
    },
  ];

  const [activeStep, setActiveStep] = useState<TimelineStep>(steps[4]);

  return (
    <Card className="border-indigo-900/60 bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-900 shadow-xl overflow-hidden">
      <CardHeader className="pb-3 border-b border-slate-800/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-bold">
                END-TO-END LEARNER LIFECYCLE
              </span>
              <Badge variant="purple" className="text-[10px]">Retention Telemetry</Badge>
            </div>
            <CardTitle className="text-lg font-bold text-white tracking-tight mt-1 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-indigo-400" />
              # D0 → D7 GROWTH + RETENTION LOOP
            </CardTitle>
            <CardDescription className="text-xs text-slate-300">
              Systematic daily cadence preventing post-registration drop-off and guaranteeing high live workshop attendance.
            </CardDescription>
          </div>
          <div className="text-right sm:self-center">
            <span className="text-[10px] font-mono uppercase text-slate-400 block">Current Pacing Stage</span>
            <span className="text-sm font-mono font-bold text-amber-400">SIMULATED Day 4 Blitz</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-5 space-y-5">
        {/* Horizontal Timeline Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {steps.map((step) => {
            const Icon = step.icon;
            const isSelected = activeStep.day === step.day;

            return (
              <button
                key={step.day}
                type="button"
                onClick={() => setActiveStep(step)}
                className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-indigo-950/70 border-indigo-500 shadow-md shadow-indigo-950 ring-1 ring-indigo-500/50'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-indigo-400">{step.day}</span>
                    <Icon className={`w-3.5 h-3.5 ${step.color}`} />
                  </div>
                  <span className="text-[11px] font-semibold text-white block truncate">{step.name.split(' ')[0]}</span>
                </div>
                <div className="mt-2 pt-1 border-t border-slate-800/60 flex items-center justify-between">
                  <Badge
                    variant={step.status === 'Completed' ? 'success' : step.status === 'In Progress' ? 'warning' : 'outline'}
                    className="text-[8px] px-1 py-0"
                  >
                    {step.status}
                  </Badge>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Expanded Inspector */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center space-x-2">
              <span className="font-mono font-bold text-indigo-400 text-xs px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800">
                {activeStep.day}
              </span>
              <span className="font-bold text-white text-sm">{activeStep.name}</span>
              <Badge variant={activeStep.status === 'Completed' ? 'success' : activeStep.status === 'In Progress' ? 'warning' : 'outline'}>
                {activeStep.status}
              </Badge>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
              {activeStep.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-slate-400">
              <span>Channel: <strong className="text-slate-200">{activeStep.channel}</strong></span>
              <span>→</span>
              <span>Hook: <strong className="text-indigo-300">{activeStep.hook}</strong></span>
            </div>
          </div>

          <div className="sm:text-right shrink-0 p-3 rounded-lg bg-slate-900 border border-slate-800">
            <span className="text-[10px] uppercase font-mono text-slate-400 block">Retention Benchmark</span>
            <span className="text-sm font-mono font-bold text-emerald-400">{activeStep.retentionMetric}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
