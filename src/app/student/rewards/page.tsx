'use client';

import React, { useState } from 'react';
import { Award, CheckCircle2, Lock, Gift, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function StudentRewardsPage() {
  const verifiedCount = 3;
  const [claimedReward, setClaimedReward] = useState<string | null>(null);

  const milestones = [
    {
      tier: 'Bronze',
      req: 1,
      title: 'AI Resume Project Blueprint',
      desc: 'Modular GitHub repository template + exact bullet points designed to pass placement ATS filters.',
      rewardType: 'Non-Monetary: Project Template',
      unlocked: verifiedCount >= 1,
    },
    {
      tier: 'Silver',
      req: 3,
      title: 'Google Colab Pro GPU Notebooks & Free API Pass',
      desc: 'Pre-configured cloud notebook environment with free access tokens for Gemini & Claude APIs.',
      rewardType: 'Non-Monetary: Exclusive Resource',
      unlocked: verifiedCount >= 3,
    },
    {
      tier: 'Gold',
      req: 5,
      title: '1:1 AI Project Architecture Review with Mentor',
      desc: 'Personalized 15-minute video critique on your capstone architecture and how to defend it to placement interviewers.',
      rewardType: 'Non-Monetary: 1:1 Project Review',
      unlocked: verifiedCount >= 5,
    },
    {
      tier: 'AI Builder',
      req: 10,
      title: 'VIP Front-Row Q&A + Verified Capstone Honor Certificate',
      desc: 'Priority live Q&A in the workshop, spotlight on NxtWave LinkedIn alumni showcase, and verified digital credential.',
      rewardType: 'Non-Monetary: Workshop Priority & Certificate',
      unlocked: verifiedCount >= 10,
    },
    {
      tier: 'Campus Champion',
      req: 20,
      title: 'Campus Leadership Trophy & Direct PPO Interview Fast-Track',
      desc: 'Featured on the national campus leaderboard, invitation to NxtWave AI Leadership Summit, and priority internship review.',
      rewardType: 'Non-Monetary: Career Recognition',
      unlocked: verifiedCount >= 20,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-white tracking-tight">Milestone Rewards Program</h1>
          <Badge variant="purple">{verifiedCount} Verified Referrals</Badge>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          Non-monetary career accelerators engineered to reward active peer advocates who bring their classmates into the workshop.
        </p>
      </div>

      {claimedReward && (
        <div className="p-3.5 rounded-lg bg-emerald-950/70 border border-emerald-800 text-emerald-300 text-xs flex items-center justify-between shadow-lg">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Resource Unlocked:</strong> "{claimedReward}" is ready! Download package & token instructions saved.
            </span>
          </div>
          <button onClick={() => setClaimedReward(null)} className="text-slate-400 hover:text-white text-xs">Dismiss</button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {milestones.map((m) => (
          <Card
            key={m.tier}
            className={`transition-all ${
              m.unlocked
                ? 'border-emerald-800/60 bg-slate-900/80 shadow-lg shadow-emerald-950/20'
                : 'border-slate-800 bg-slate-900/30 opacity-80'
            }`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant={m.unlocked ? 'success' : 'outline'}>
                  {m.tier} ({m.req} {m.req === 1 ? 'Referral' : 'Referrals'})
                </Badge>
                <span className="text-[10px] font-mono text-slate-400">
                  {m.unlocked ? 'Unlocked' : `${m.req - verifiedCount} more needed`}
                </span>
              </div>
              <CardTitle className="text-base text-white mt-2 flex items-center">
                {m.unlocked ? (
                  <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-400 shrink-0" />
                ) : (
                  <Lock className="w-4 h-4 mr-2 text-slate-500 shrink-0" />
                )}
                {m.title}
              </CardTitle>
              <CardDescription>{m.desc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 pt-0">
              <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[11px] text-indigo-300">
                {m.rewardType}
              </div>
              <Button
                size="sm"
                variant={m.unlocked ? 'accent' : 'outline'}
                disabled={!m.unlocked}
                onClick={() => m.unlocked && setClaimedReward(m.title)}
                className="w-full text-xs"
              >
                {m.unlocked ? 'Access Resource Now' : `Locked • Invite ${m.req - verifiedCount} More Peers`}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
