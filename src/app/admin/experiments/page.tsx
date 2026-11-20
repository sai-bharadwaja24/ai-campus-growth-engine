'use client';

import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  Sparkles,
  FlaskConical,
  Plus,
  Play,
  Pause,
  CheckCircle2,
  TrendingUp,
  Percent,
  Layers,
  X,
} from 'lucide-react';

interface Experiment {
  id: string;
  title: string;
  hypothesis: string;
  category: string;
  varAName: string;
  varAStats: { impressions: number; conversions: number };
  varBName: string;
  varBStats: { impressions: number; conversions: number };
  status: 'Running' | 'Concluded' | 'Paused';
  winnerDeclared?: 'A' | 'B';
  keyInsight: string;
}

const INITIAL_EXPERIMENTS: Experiment[] = [
  {
    id: 'exp-1',
    title: 'EXP-101: 1-Click WhatsApp Deep Link vs. Generic Copy-Link',
    hypothesis: 'Pre-filling the student invite message and opening WhatsApp directly removes 3 copy-paste friction steps, dramatically increasing referral share velocity.',
    category: 'Viral Loop Friction',
    varAName: 'Variant A (Control): Standard "Copy Referral Link" text button',
    varAStats: { impressions: 420, conversions: 52 }, // 12.4%
    varBName: 'Variant B (Challenger): Green 1-Click "Share Directly to Class WhatsApp"',
    varBStats: { impressions: 450, conversions: 188 }, // 41.8%
    status: 'Concluded',
    winnerDeclared: 'B',
    keyInsight: 'Variant B yielded a massive +237% lift in referral shares. Mobile students almost never open other apps to paste links; 1-click deep links are essential on campus.',
  },
  {
    id: 'exp-102',
    title: 'EXP-102: "ATS Placement Capstone Project" vs. "Free AI Certificate" Hook',
    hypothesis: 'Final-year engineering students are under intense placement pressure; positioning the workshop as a tangible resume-differentiator converts far higher than generic attendance certificates.',
    category: 'Landing Page Value Prop',
    varAName: 'Variant A (Control): "Get Certified in AI by NxtWave in 60 Minutes"',
    varAStats: { impressions: 680, conversions: 96 }, // 14.1%
    varBName: 'Variant B (Challenger): "Deploy a Placement-Ready AI Project to Your Resume in 60 Mins"',
    varBStats: { impressions: 720, conversions: 193 }, // 26.8%
    status: 'Concluded',
    winnerDeclared: 'B',
    keyInsight: 'Variant B drove a +90% higher registration conversion. Final-year students perceive certificates as low-value commoditized paper; working GitHub code builds trust.',
  },
  {
    id: 'exp-103',
    title: 'EXP-103: Ambassador Micro-Bounty (₹200/Milestone) vs. Title Recognition',
    hypothesis: 'Direct financial micro-bounties from the ₹2,000 budget incentivize ambassadors to post repeatedly in batch WhatsApp channels compared to vanity "Campus Lead" titles.',
    category: 'Incentive Architecture',
    varAName: 'Variant A: "Official Campus Ambassador Certificate + LinkedIn Title"',
    varAStats: { impressions: 6, conversions: 43 }, // 7.1 regs/lead
    varBName: 'Variant B: "₹200 Cash Micro-Bounty for Every 25 Verified Campus Registrations"',
    varBStats: { impressions: 6, conversions: 118 }, // 19.6 regs/lead
    status: 'Concluded',
    winnerDeclared: 'B',
    keyInsight: 'Variant B produced a 2.7x higher referral output per ambassador. Micro-milestones create urgency; ambassadors treat outreach like a competitive sprint.',
  },
  {
    id: 'exp-104',
    title: 'EXP-104: 8:30 PM Prime Broadcast vs. 1:00 PM Lunchtime Drop',
    hypothesis: 'Hostel discussions and peer placement preparation peak after dinner (8:30 PM), yielding higher WhatsApp open rates than midday lecture intervals.',
    category: 'Distribution Timing',
    varAName: 'Variant A: Broadcast at 1:15 PM (Lunch Break)',
    varAStats: { impressions: 310, conversions: 38 }, // 12.3%
    varBName: 'Variant B: Broadcast at 8:30 PM (Post-Dinner Hostel Prime)',
    varBStats: { impressions: 340, conversions: 89 }, // 26.2%
    status: 'Running',
    winnerDeclared: 'B',
    keyInsight: 'Variant B shows a +113% conversion lift. Campus WhatsApp engagement is heavily concentrated between 8 PM and 11 PM.',
  },
];

export default function AdminExperimentsPage() {
  const [experiments, setExperiments] = useState<Experiment[]>(INITIAL_EXPERIMENTS);
  const [showModal, setShowModal] = useState(false);

  // New Experiment Form State
  const [title, setTitle] = useState('');
  const [hypothesis, setHypothesis] = useState('');
  const [category, setCategory] = useState('Conversion Rate');
  const [varAName, setVarAName] = useState('');
  const [varBName, setVarBName] = useState('');

  const toggleStatus = (id: string) => {
    setExperiments(
      experiments.map((e) => {
        if (e.id === id) {
          const nextStatus = e.status === 'Running' ? 'Paused' : 'Running';
          return { ...e, status: nextStatus };
        }
        return e;
      })
    );
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const newExp: Experiment = {
      id: `exp-${Date.now()}`,
      title,
      hypothesis,
      category,
      varAName: `Variant A: ${varAName}`,
      varAStats: { impressions: 50, conversions: 6 },
      varBName: `Variant B: ${varBName}`,
      varBStats: { impressions: 50, conversions: 12 },
      status: 'Running',
      keyInsight: 'Experiment launched. Gathering live telemetry across campus cohorts.',
    };
    setExperiments([newExp, ...experiments]);
    setShowModal(false);
    setTitle('');
    setHypothesis('');
    setVarAName('');
    setVarBName('');
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">Growth Experiments Lab</h1>
            <Badge variant="purple">A/B Testing Telemetry</Badge>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Empirical validation of viral mechanics, copy value propositions, and channel distribution timing.
          </p>
        </div>

        <Button size="sm" variant="primary" onClick={() => setShowModal(true)}>
          <Plus className="w-4 h-4 mr-1.5" />
          Deploy New Experiment
        </Button>
      </div>

      {/* Modal for New Experiment */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <Card className="w-full max-w-xl border-indigo-800 bg-slate-900 shadow-2xl">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="text-base text-white flex items-center">
                <FlaskConical className="w-4 h-4 mr-2 text-indigo-400" />
                Launch A/B Growth Experiment
              </CardTitle>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreate} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Experiment Title & Code</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. EXP-105: Urgency Countdown Banner"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Strategic Hypothesis (What & Why)</label>
                  <textarea
                    rows={2}
                    required
                    placeholder="e.g. Adding a live seat counter creates scarcity that lifts checkout intent by 20%."
                    value={hypothesis}
                    onChange={(e) => setHypothesis(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Variant A (Control)</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Standard static registration button"
                      value={varAName}
                      onChange={(e) => setVarAName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Variant B (Challenger)</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Animated '45 seats left' badge"
                      value={varBName}
                      onChange={(e) => setVarBName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-2 pt-2">
                  <Button type="button" variant="secondary" onClick={() => setShowModal(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary">
                    Launch Experiment
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Experiments List */}
      <div className="space-y-4">
        {experiments.map((exp) => {
          const rateA = exp.varAStats.impressions > 0 ? (exp.varAStats.conversions / exp.varAStats.impressions) * 100 : 0;
          const rateB = exp.varBStats.impressions > 0 ? (exp.varBStats.conversions / exp.varBStats.impressions) * 100 : 0;
          const lift = rateA > 0 ? Math.round(((rateB - rateA) / rateA) * 100) : 0;

          return (
            <Card key={exp.id} className="border-slate-800 bg-slate-900/70">
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center space-x-2">
                      <CardTitle className="text-sm text-white">{exp.title}</CardTitle>
                      <Badge variant={exp.status === 'Concluded' ? 'success' : exp.status === 'Running' ? 'purple' : 'outline'}>
                        {exp.status}
                      </Badge>
                    </div>
                    <CardDescription className="mt-1">{exp.hypothesis}</CardDescription>
                  </div>

                  <div className="flex items-center space-x-2 shrink-0">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => toggleStatus(exp.id)}
                      className="text-xs"
                    >
                      {exp.status === 'Running' ? (
                        <>
                          <Pause className="w-3 h-3 mr-1" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="w-3 h-3 mr-1" />
                          Resume
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-xs">
                {/* Side-by-Side Variant Comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Variant A */}
                  <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">Control</span>
                      <span className="font-mono text-xs text-slate-300 font-bold">{rateA.toFixed(1)}% Conversion</span>
                    </div>
                    <p className="text-slate-300 font-medium text-xs">{exp.varAName}</p>
                    <div className="flex justify-between text-[11px] text-slate-500 font-mono pt-1 border-t border-slate-800/80">
                      <span>{exp.varAStats.impressions} Impressions</span>
                      <span>{exp.varAStats.conversions} Conversions</span>
                    </div>
                  </div>

                  {/* Variant B */}
                  <div
                    className={`p-3.5 rounded-lg border space-y-2 ${
                      exp.winnerDeclared === 'B'
                        ? 'bg-emerald-950/30 border-emerald-800/80'
                        : 'bg-slate-950 border-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1.5">
                        <span className="text-[10px] uppercase font-mono text-emerald-400 font-bold">Challenger</span>
                        {exp.winnerDeclared === 'B' && (
                          <Badge variant="success" className="text-[9px] py-0 px-1">
                            WINNER (+{lift}% LIFT)
                          </Badge>
                        )}
                      </div>
                      <span className="font-mono text-xs text-emerald-400 font-bold">{rateB.toFixed(1)}% Conversion</span>
                    </div>
                    <p className="text-white font-medium text-xs">{exp.varBName}</p>
                    <div className="flex justify-between text-[11px] text-slate-400 font-mono pt-1 border-t border-slate-800/80">
                      <span>{exp.varBStats.impressions} Impressions</span>
                      <span>{exp.varBStats.conversions} Conversions</span>
                    </div>
                  </div>
                </div>

                {/* Growth Insight Takeaway */}
                <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-900/60 text-slate-300 flex items-start space-x-2.5">
                  <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-mono text-indigo-300 font-bold block">
                      Growth Engineering Insight
                    </span>
                    <p className="text-[11px] text-indigo-100 leading-relaxed mt-0.5">{exp.keyInsight}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
