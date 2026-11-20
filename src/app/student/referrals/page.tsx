'use client';

import React, { useState } from 'react';
import { useRole } from '@/context/RoleContext';
import { Share2, Copy, Check, MessageCircle, Users, Sparkles, ShieldCheck, Award, Zap, ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { AIShareCopilot } from '@/components/AIShareCopilot';
import { CampusBattleCard } from '@/components/CampusBattleCard';
import { getStudentPersonalization } from '@/lib/ai-intelligence';

export default function StudentReferralsPage() {
  const { activeStudent } = useRole();
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/register?ref=${activeStudent.referralCode}`
    : `https://campusgrowth.nxtwave.in/register?ref=${activeStudent.referralCode}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const personalization = getStudentPersonalization(
    activeStudent.branch || 'Computer Science',
    activeStudent.aiExperience || 'Beginner',
    activeStudent.goal || 'Build my first AI project',
    activeStudent.college || 'RVCE'
  );

  // Growth Score Calculation
  const referralScore = Math.min(50, (activeStudent.referralCount || 3) * 16.6); // 50 pts max
  const readinessScore = 20; // 20 pts max
  const pretaskScore = 15; // 15 pts max
  const collegeBonusScore = 10; // 10 pts max
  const totalGrowthScore = Math.round(referralScore + readinessScore + pretaskScore + collegeBonusScore);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">Referral Command Center</h1>
            <Badge variant="purple">Viral Growth Engine</Badge>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Invite final-year engineering classmates to unlock exclusive placement blueprints, Colab GPU passes, and 1:1 mentor reviews.
          </p>
        </div>

        <div className="flex items-center space-x-3 bg-slate-900 border border-slate-800 rounded-xl p-2.5 px-4 text-xs">
          <Award className="w-5 h-5 text-amber-400" />
          <div>
            <span className="text-[10px] uppercase font-mono text-slate-400 block">Your Growth Score</span>
            <span className="text-base font-bold font-mono text-white">{totalGrowthScore} / 100 Pts</span>
          </div>
          <Badge variant="success">Tier: Silver</Badge>
        </div>
      </div>

      {/* Main Grid: Left Column Copilot + Link, Right Column Personalization & Score */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Copy Link Bar */}
          <Card className="border-indigo-900/60 bg-slate-900/60">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-white flex items-center">
                <Share2 className="w-4 h-4 mr-2 text-indigo-400" />
                Your Unique Invite Link
              </CardTitle>
              <CardDescription>
                Attributed automatically. Every verified friend gives you +25 Growth Points and unlocks milestone tiers.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 bg-slate-950 border border-slate-800 rounded-lg p-3">
                <span className="font-mono text-xs text-indigo-300 flex-1 truncate">
                  {shareUrl}
                </span>
                <Button size="sm" variant="secondary" onClick={handleCopy}>
                  {copied ? <Check className="w-3.5 h-3.5 mr-1 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
                  {copied ? 'Copied' : 'Copy'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* AI Share Copilot */}
          <AIShareCopilot
            student={{
              name: activeStudent.name,
              branch: activeStudent.branch,
              aiExperience: activeStudent.aiExperience || 'Beginner',
              goal: activeStudent.goal || 'Build my first AI project',
              college: activeStudent.college,
              referralCode: activeStudent.referralCode,
            }}
          />

          {/* Referred Classmates List */}
          <Card className="border-slate-800 bg-slate-900/60">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm text-white flex items-center">
                  <Users className="w-4 h-4 mr-2 text-sky-400" />
                  Referred Classmates (3 Active)
                </CardTitle>
                <Badge variant="success">100% Verified Quality</Badge>
              </div>
              <CardDescription>Peers who registered with your code {activeStudent.referralCode}.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                <div>
                  <span className="font-semibold text-white">Abhishek Gowda</span>
                  <div className="text-[11px] text-slate-400">Amrita CSE • Ready Score: 95/100</div>
                </div>
                <Badge variant="success">Registered & Ready</Badge>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                <div>
                  <span className="font-semibold text-white">Divya Murthy</span>
                  <div className="text-[11px] text-slate-400">Amrita AI • Ready Score: 90/100</div>
                </div>
                <Badge variant="success">Registered & Ready</Badge>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                <div>
                  <span className="font-semibold text-white">Karthik Reddy</span>
                  <div className="text-[11px] text-slate-400">Amrita ECE • Ready Score: 85/100</div>
                </div>
                <Badge variant="success">Registered & Ready</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Campus Battle Widget */}
          <CampusBattleCard userCollege="Amrita" />
        </div>

        {/* Right Sidebar: Growth Score Breakdown + Personalization Engine Card */}
        <div className="space-y-6">
          {/* AI Recommendation Engine Card */}
          <Card className="border-indigo-900/60 bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-900">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm text-white flex items-center">
                  <Sparkles className="w-4 h-4 mr-2 text-indigo-400" />
                  AI Referral Personalization
                </CardTitle>
                <Badge variant="purple" className="text-[10px]">Auto-Tuned</Badge>
              </div>
              <CardDescription>
                Tailored based on branch ({activeStudent.branch}) and experience.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-[10px] uppercase font-mono text-indigo-300 block mb-0.5">Recommended Channel</span>
                <span className="text-white font-medium">{personalization.recommendedChannel}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-[10px] uppercase font-mono text-indigo-300 block mb-0.5">High-Converting Pitch Angle</span>
                <span className="text-white font-medium">{personalization.recommendedAngle}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-[10px] uppercase font-mono text-indigo-300 block mb-0.5">Target Peers</span>
                <span className="text-white font-medium">{personalization.recommendedTarget}</span>
              </div>
              <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-800/60 text-slate-300">
                <span className="text-[10px] uppercase font-mono text-indigo-400 block font-bold mb-1">AI Growth Rationale</span>
                <p className="text-[11px] leading-relaxed text-indigo-200">{personalization.aiRationale}</p>
              </div>
            </CardContent>
          </Card>

          {/* Growth Score Engine Breakdown */}
          <Card className="border-slate-800 bg-slate-900/60">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm text-white flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-amber-400" />
                  Growth Score Breakdown
                </CardTitle>
                <span className="text-xs font-mono font-bold text-amber-400">{totalGrowthScore} Pts</span>
              </div>
              <CardDescription>
                Real-time multi-factor engagement calculation based on 4 vectors.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-xs">
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>Verified Classmate Referrals (3/3)</span>
                  <span className="font-mono text-emerald-400 font-bold">{referralScore}/50 pts</span>
                </div>
                <Progress value={(referralScore / 50) * 100} color="emerald" size="sm" />
              </div>

              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>Workshop Readiness Checklist</span>
                  <span className="font-mono text-sky-400 font-bold">{readinessScore}/20 pts</span>
                </div>
                <Progress value={(readinessScore / 20) * 100} color="sky" size="sm" />
              </div>

              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>AI Capstone Pre-Task Submitted</span>
                  <span className="font-mono text-indigo-400 font-bold">{pretaskScore}/15 pts</span>
                </div>
                <Progress value={(pretaskScore / 15) * 100} color="indigo" size="sm" />
              </div>

              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>RVCE Campus Battle Rank Bonus (#1)</span>
                  <span className="font-mono text-amber-400 font-bold">{collegeBonusScore}/10 pts</span>
                </div>
                <Progress value={(collegeBonusScore / 10) * 100} color="amber" size="sm" />
              </div>

              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                Unlock <strong>Gold Tier (1:1 Mentor Review)</strong> with 2 more verified classmate referrals.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
