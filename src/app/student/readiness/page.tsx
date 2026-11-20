'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  Circle,
  ArrowRight,
  Terminal,
  Key,
  Laptop,
  Users,
  MessageCircle,
  FileCode,
  Download,
  Calendar,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';

interface ReadinessStep {
  id: number;
  title: string;
  desc: string;
  category: string;
  link?: string;
  actionText?: string;
  done: boolean;
}

const INITIAL_STEPS: ReadinessStep[] = [
  {
    id: 1,
    title: '1. Registration Confirmed',
    desc: 'Student ID and unique referral tracking link generated. Your profile is officially locked into the 500-seat cohort.',
    category: 'Onboarding',
    done: true,
  },
  {
    id: 2,
    title: '2. Joined Batch WhatsApp Community',
    desc: 'Access the dedicated B.Tech 2026 discussion group for real-time mentor updates, peer networking, and live link drops.',
    category: 'Community',
    actionText: 'Join WhatsApp Group',
    link: 'https://chat.whatsapp.com/demo-nxtwave-ai60',
    done: true,
  },
  {
    id: 3,
    title: '3. Completed AI Project Pre-Task',
    desc: 'Formulated a practical engineering problem and target persona to prototype during the 60-minute build sprint.',
    category: 'Project Prep',
    actionText: 'View / Edit Pre-Task',
    link: '/student/project',
    done: true,
  },
  {
    id: 4,
    title: '4. Invited 3 Friends / Project Partners',
    desc: 'Study groups that attend together have a 3.4x higher project deployment completion rate. Unlocks Silver Tier.',
    category: 'Growth Loop',
    actionText: 'Open AI Share Copilot',
    link: '/student/referrals',
    done: true,
  },
  {
    id: 5,
    title: '5. Downloaded 60-Minute Starter Kit & API Pass',
    desc: 'Contains Google Colab notebook templates, requirements.txt, and free Gemini API developer key instructions.',
    category: 'Setup',
    actionText: 'Download Starter Boilerplate (.zip)',
    done: false,
  },
  {
    id: 6,
    title: '6. Submitted Project Idea to AI Evaluator',
    desc: 'Scored your capstone across 5 dimensions (Problem Clarity, AI Relevance, Feasibility, Originality, Demo Potential).',
    category: 'Evaluation',
    actionText: 'Evaluate Project Idea',
    link: '/student/project',
    done: false,
  },
  {
    id: 7,
    title: '7. Workshop Calendar Invite Synced',
    desc: 'Confirmed attendance for Sunday 6:00 PM IST live stream. Colab environment pre-tested and ready to deploy.',
    category: 'Attendance',
    actionText: 'Add to Google Calendar',
    done: false,
  },
];

export default function StudentReadinessPage() {
  const [steps, setSteps] = useState<ReadinessStep[]>(INITIAL_STEPS);
  const [downloadNotice, setDownloadNotice] = useState(false);

  const toggleStep = (id: number) => {
    setSteps(steps.map((s) => (s.id === id ? { ...s, done: !s.done } : s)));
  };

  const doneCount = steps.filter((s) => s.done).length;
  const progressPct = Math.round((doneCount / steps.length) * 100);

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDownloadNotice(true);
    setSteps(steps.map((s) => (s.id === 5 ? { ...s, done: true } : s)));
    setTimeout(() => setDownloadNotice(false), 4000);
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">Expanded Workshop Readiness</h1>
            <Badge variant="purple">7-Step Checklist</Badge>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Complete all 7 preparation milestones so you can spend 100% of the 60 minutes building & deploying your AI capstone.
          </p>
        </div>

        <div className="flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-xl p-2 px-3 text-xs">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span className="text-slate-300">Readiness Score:</span>
          <span className="font-mono font-bold text-emerald-400">{progressPct}%</span>
        </div>
      </div>

      {downloadNotice && (
        <div className="p-3.5 rounded-lg bg-emerald-950/70 border border-emerald-800 text-emerald-300 text-xs flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Starter Kit downloaded! Google Colab notebook template & API credentials guide saved.</span>
          </div>
          <button onClick={() => setDownloadNotice(false)} className="text-slate-400 hover:text-white text-xs">Dismiss</button>
        </div>
      )}

      {/* Readiness Progress Master Card */}
      <Card className="border-indigo-900/60 bg-gradient-to-r from-slate-900 via-indigo-950/20 to-slate-900">
        <CardContent className="p-5 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div>
              <span className="font-bold text-white text-sm">
                {doneCount} of {steps.length} Steps Completed
              </span>
              <p className="text-slate-400 text-xs">
                {progressPct === 100
                  ? '🎉 100% Ready! You have priority mentor code-review access during the live session.'
                  : `Complete the remaining ${steps.length - doneCount} steps to ensure seamless zero-lag deployment during the workshop.`}
              </p>
            </div>
            <span className="font-mono font-bold text-lg text-emerald-400">{progressPct}%</span>
          </div>
          <Progress value={progressPct} color="emerald" size="lg" />
        </CardContent>
      </Card>

      {/* 7-Step List */}
      <div className="space-y-3">
        {steps.map((step) => {
          return (
            <Card
              key={step.id}
              onClick={() => toggleStep(step.id)}
              className={`cursor-pointer transition-all border ${
                step.done
                  ? 'bg-slate-900/80 border-slate-700/80 shadow-sm'
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start space-x-3.5">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleStep(step.id);
                    }}
                    className="mt-0.5"
                  >
                    {step.done ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-600 hover:text-slate-400" />
                    )}
                  </button>

                  <div className="space-y-0.5">
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm font-semibold ${step.done ? 'text-white' : 'text-slate-300'}`}>
                        {step.title}
                      </span>
                      <Badge variant="purple" className="text-[9px] py-0 px-1.5">
                        {step.category}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-400 max-w-2xl">{step.desc}</p>
                  </div>
                </div>

                {/* Optional Right Action Button */}
                <div className="sm:self-center shrink-0 pl-8 sm:pl-0">
                  {step.id === 5 ? (
                    <Button
                      size="sm"
                      variant={step.done ? 'secondary' : 'primary'}
                      onClick={handleDownload}
                      className="text-xs"
                    >
                      <Download className="w-3.5 h-3.5 mr-1" />
                      {step.done ? 'Re-Download Kit' : 'Download Starter (.zip)'}
                    </Button>
                  ) : step.link ? (
                    <Link
                      href={step.link}
                      onClick={(e) => e.stopPropagation()}
                      target={step.link.startsWith('http') ? '_blank' : '_self'}
                    >
                      <Button size="sm" variant="secondary" className="text-xs">
                        {step.actionText}
                        {step.link.startsWith('http') ? (
                          <ExternalLink className="w-3 h-3 ml-1" />
                        ) : (
                          <ArrowRight className="w-3 h-3 ml-1" />
                        )}
                      </Button>
                    </Link>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-500">
                      {step.done ? 'Verified' : 'Click to Toggle'}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
