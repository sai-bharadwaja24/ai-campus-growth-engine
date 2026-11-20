'use client';

import React from 'react';
import { Calendar, CheckCircle2, Clock, Users, Zap, Target, Award, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';

export default function AmbassadorCampaignPage() {
  const recruitmentPhases = [
    {
      hours: 'Hour 0 – 4',
      title: 'Scout & Campus Lead Identification',
      action: 'Map Class Representatives (CRs), IEEE/CSI club heads, placement coordinators, and active hostel leads across top 12 target tech campuses.',
      target: '20 Shortlisted Candidates',
      status: 'Completed',
    },
    {
      hours: 'Hour 4 – 8',
      title: '1-on-1 Recruitment & Stipend Briefing',
      action: 'Send personalized WhatsApp pitches detailing the fixed ₹50 milestone stipend per ambassador, NxtWave placement credentials, and cohort benchmarks.',
      target: '12 Ambassadors Recruited',
      status: 'Completed',
    },
    {
      hours: 'Hour 8 – 12',
      title: 'Link Activation & Initial Distribution',
      action: 'Issue unique referral codes (e.g., ROHAN-RVCE) and provide tailored 1-liner copy for placement groups, class groups, and club channels.',
      target: '12 Ambassadors Activated',
      status: 'Completed',
    },
    {
      hours: 'Hour 12 – 24',
      title: 'First-Day Velocity & Cohort Calibration',
      action: 'Track live registration intake via Admin War Room; trigger evening 8:30 PM hostel WhatsApp blitz across top converting campuses.',
      target: '216 Regs (18 / Lead)',
      status: 'Completed',
    },
  ];

  const days = [
    { day: 'Day 1', task: 'Announce in official placement & CR WhatsApp groups (Hour 0-24 Recruitment Engine)', status: 'Completed', detail: 'Recruited 12 ambassadors; 216 registrations captured in first 24h.' },
    { day: 'Day 2', task: 'Reach out to IEEE/CSI club heads for collaborative shoutouts', status: 'Completed', detail: 'Cross-posted in 14 tech society Discord and WhatsApp servers.' },
    { day: 'Day 3', task: 'Post 60-second screen recording demo on college LinkedIn circles', status: 'Completed', detail: 'Demonstrated zero-setup Google Colab run with live response output.' },
    { day: 'Day 4 (Today)', task: 'Hostel evening blast: Share Project Blueprint unlock hook', status: 'In Progress', detail: 'Triggered 8:30 PM push; +24 signups in first 15 minutes.' },
    { day: 'Day 5', task: 'Share inter-college leaderboard rank (#2 CBIT) to drive batch pride', status: 'Upcoming', detail: 'Mobilize regional rivalry (RVCE vs. CBIT vs. VIT).' },
    { day: 'Day 6', task: 'Final 24-hour seat scarcity countdown broadcast', status: 'Upcoming', detail: 'Scarcity hook: Only 45 seats remaining under 500-student cap.' },
    { day: 'Day 7', task: 'Live masterclass kickoff link broadcast 30 mins before start', status: 'Upcoming', detail: 'Deliver live room link and Google Colab starter notebook.' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-white tracking-tight">Ambassador Campaign & Day 1 Playbook</h1>
          <Badge variant="purple">Sprint Telemetry</Badge>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          Tactical distribution roadmap engineered to acquire 500 registrations on ₹2,000 budget in 7 days.
        </p>
      </div>

      {/* DAY 1 AMBASSADOR RECRUITMENT PLAN */}
      <Card className="border-indigo-900/60 bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-900 shadow-xl">
        <CardHeader className="pb-3 border-b border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-bold">
                  FOUNDATIONAL DISTRIBUTION ENGINE
                </span>
                <Badge variant="success" className="text-[10px]">CAMPAIGN PLAN / SIMULATION</Badge>
              </div>
              <CardTitle className="text-lg font-bold text-white tracking-tight mt-1 flex items-center">
                <Users className="w-5 h-5 mr-2 text-indigo-400" />
                DAY 1 AMBASSADOR RECRUITMENT & ACTIVATION
              </CardTitle>
              <CardDescription className="text-xs text-slate-300">
                How we onboard 12 high-leverage campus ambassadors within the first 24 hours to spark viral distribution.
              </CardDescription>
            </div>
            <div className="text-right sm:self-center">
              <span className="text-[10px] font-mono uppercase text-slate-400 block">Day 1 Activation Yield</span>
              <span className="text-lg font-mono font-bold text-emerald-400">216 Registrations</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-4 space-y-4 text-xs">
          {/* 4 Metric Callout Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-[10px] uppercase font-mono text-slate-400 block">Target Ambassadors</span>
              <span className="text-base font-bold font-mono text-white">12 Leads</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Top 12 tech campuses</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-[10px] uppercase font-mono text-emerald-400 block">Activated Day 1</span>
              <span className="text-base font-bold font-mono text-emerald-400">12 Leads (100%)</span>
              <span className="text-[10px] text-emerald-500/80 block mt-0.5">Active referral links</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-[10px] uppercase font-mono text-sky-400 block">Regs / Ambassador</span>
              <span className="text-base font-bold font-mono text-sky-300">18 Avg Regs</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Via WhatsApp batch groups</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-[10px] uppercase font-mono text-purple-400 block">Ambassador Stipend</span>
              <span className="text-base font-bold font-mono text-purple-300">Fixed ₹50 / Lead</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">12 × ₹50 = ₹600 spent</span>
            </div>
          </div>

          {/* 4 Hourly Phases */}
          <div className="space-y-2.5 pt-2">
            <h4 className="text-[11px] font-mono font-bold uppercase text-slate-400 tracking-wider">
              24-Hour Recruitment Execution Timeline
            </h4>
            <div className="divide-y divide-slate-800 rounded-xl border border-slate-800 bg-slate-950/60 overflow-hidden">
              {recruitmentPhases.map((phase, idx) => (
                <div key={idx} className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-indigo-400 font-bold px-2 py-0.5 rounded bg-indigo-950/80 border border-indigo-800/60 text-[10px]">
                        {phase.hours}
                      </span>
                      <span className="font-semibold text-white text-xs">{phase.title}</span>
                      <Badge variant="success" className="text-[9px]">Verified</Badge>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed">{phase.action}</p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">Benchmark Goal</span>
                    <span className="font-mono text-emerald-400 font-bold">{phase.target}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 7-DAY AMBASSADOR SPRINT CADENCE */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-indigo-400" />
            7-Day Ambassador Playbook Cadence
          </h3>
          <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-mono font-bold text-[10px] uppercase tracking-wider shadow-sm">
            SIMULATED DAY 4 / 7
          </span>
        </div>

        {days.map((d, idx) => (
          <Card key={idx} className="border-slate-800 bg-slate-900/50 hover:border-slate-700 transition-colors">
            <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div className="space-y-1">
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-indigo-400 font-bold px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800/50">
                    {d.day}
                  </span>
                  <span className="text-white font-medium">{d.task}</span>
                </div>
                <p className="text-[11px] text-slate-400 sm:ml-16">{d.detail}</p>
              </div>
              <Badge variant={d.status === 'Completed' ? 'success' : d.status === 'In Progress' ? 'warning' : 'outline'} className="self-start sm:self-center shrink-0">
                {d.status}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
