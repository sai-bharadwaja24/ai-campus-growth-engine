'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import {
  ShieldAlert,
  CheckCircle2,
  Clock,
  Video,
  Users,
  MessageSquare,
  Award,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface AttendanceDefenseCardProps {
  totalRegistrations?: number;
}

export function AttendanceDefenseCard({ totalRegistrations = 342 }: AttendanceDefenseCardProps) {
  const confirmedAttendees = Math.round(totalRegistrations * 0.839);
  const communityJoins = Math.round(totalRegistrations * 0.716);
  const readinessCompleted = Math.round(totalRegistrations * 0.579);
  const estimatedLiveAttendance = Math.round(totalRegistrations * 0.643);

  const defenseTiers = [
    {
      timing: 'T - 24 Hours',
      title: 'Calendar .ics Lock & Placement Syllabus Brief',
      action: 'Automated WhatsApp sync delivering a 1-click Google Calendar / Outlook .ics invite with direct Google Meet / YouTube Live room link.',
      impact: '+22% Show-Up Lift',
      status: 'Ready',
    },
    {
      timing: 'T - 2 Hours',
      title: 'Zero-Setup Colab Starter Notebook Delivery',
      action: 'Pre-flight Colab link shared so students can verify execution environment and free API tokens without waiting for lecture start.',
      impact: 'Eliminates Tech Friction',
      status: 'Automated',
    },
    {
      timing: 'T - 15 Minutes',
      title: 'VIP Front-Row Q&A Room Opening',
      action: 'Direct broadcast room opening notification with priority live Q&A access granted to students who referred >=1 peer.',
      impact: 'Creates Scarcity & Rush',
      status: 'Scheduled',
    },
    {
      timing: 'Post-Workshop',
      title: 'Instant Capstone Verification Certificate',
      action: 'Automated credential issued immediately upon students executing the final notebook cell and submitting their GitHub project link.',
      impact: 'Drives Completion to 85%+',
      status: 'Active Engine',
    },
  ];

  return (
    <Card className="border-indigo-900/60 bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-900 shadow-xl overflow-hidden">
      <CardHeader className="pb-3 border-b border-slate-800/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-bold">
                ATTENDANCE DEFENSE ENGINE
              </span>
              <Badge variant="purple" className="text-[10px]">Show-Up Guardrail</Badge>
            </div>
            <CardTitle className="text-xl font-bold text-white tracking-tight mt-1 flex items-center">
              <ShieldAlert className="w-5 h-5 mr-2 text-indigo-400" />
              Attendance Defense & Show-Up Telemetry
            </CardTitle>
            <CardDescription className="text-xs text-slate-300">
              Guarding against the 70% webinar drop-off trap through a 4-tier pre-session commitment loop.
            </CardDescription>
          </div>
          <div className="text-right sm:self-center">
            <span className="text-[10px] font-mono uppercase text-slate-400 block">Projected Live Show-Up</span>
            <span className="text-xl font-mono font-bold text-emerald-400">
              {estimatedLiveAttendance}+ Students
            </span>
            <span className="text-[10px] text-slate-400 block">64.3% Rate (vs 35% Industry)</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-5 space-y-5">
        {/* Core Thesis Highlight Banner */}
        <div className="p-4 rounded-xl bg-indigo-950/50 border border-indigo-500/40 shadow-inner">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold text-indigo-300 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Core Growth Philosophy</span>
          </div>
          <p className="text-sm font-bold text-white mt-1">
            "Registration is not the final metric. Attendance is the final outcome."
          </p>
          <p className="text-xs text-indigo-200/90 mt-1 leading-relaxed">
            Acquiring 500 registrants on ₹2,000 capital is only half the battle. If 70% ghost on Day 7, CAC is wasted. We defend live attendance with pre-workshop readiness touchpoints that commit the student days before the stream goes live.
          </p>
        </div>

        {/* 4 Attendance Commitment Funnel Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[10px] font-mono uppercase text-slate-400 block">Total Registrations</span>
            <span className="text-lg font-bold font-mono text-white">{totalRegistrations}</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Top of Funnel</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[10px] font-mono uppercase text-sky-400 block">WhatsApp Community</span>
            <span className="text-lg font-bold font-mono text-sky-300">{communityJoins}</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">71.6% Retention</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[10px] font-mono uppercase text-amber-400 block">Readiness Completed</span>
            <span className="text-lg font-bold font-mono text-amber-300">{readinessCompleted}</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">57.9% Pre-Task Active</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[10px] font-mono uppercase text-emerald-400 block">Confirmed Attendees</span>
            <span className="text-lg font-bold font-mono text-emerald-400">{confirmedAttendees}</span>
            <span className="text-[10px] text-emerald-500/80 block mt-0.5">83.9% Show-Up Intent</span>
          </div>
        </div>

        {/* 4-Tier Defense Execution Table */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider">
            4-Tier Pre-Session Commitment Defense Schedule
          </h4>
          <div className="divide-y divide-slate-800 rounded-xl border border-slate-800 bg-slate-950/60 overflow-hidden text-xs">
            {defenseTiers.map((tier, idx) => (
              <div key={idx} className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-900/40 transition-colors">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-indigo-400 font-bold px-2 py-0.5 rounded bg-indigo-950/80 border border-indigo-800/60 text-[10px]">
                      {tier.timing}
                    </span>
                    <span className="font-semibold text-white">{tier.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">{tier.action}</p>
                </div>

                <div className="sm:text-right shrink-0">
                  <span className="text-[10px] uppercase font-mono text-emerald-400 font-bold block">{tier.impact}</span>
                  <Badge variant="success" className="text-[9px] mt-0.5">{tier.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
