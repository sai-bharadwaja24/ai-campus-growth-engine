'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRole } from '@/context/RoleContext';
import {
  Sparkles,
  Users,
  Award,
  Zap,
  ArrowRight,
  CheckCircle2,
  Share2,
  Copy,
  Check,
  GraduationCap,
  Clock,
  MessageCircle,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { StatCard } from '@/components/ui/StatCard';

export default function StudentDashboard() {
  const { activeStudent } = useRole();
  const [copied, setCopied] = useState(false);

  // Live countdown to workshop (3 days 14 hours 22 mins)
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 14, mins: 22, secs: 40 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const referralCode = activeStudent.referralCode || 'AI60-SAI88';
  const shareUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/register?ref=${referralCode}`
    : `https://campusgrowth.nxtwave.in/register?ref=${referralCode}`;

  const whatsappMessage = encodeURIComponent(
    `Hey! Register for NxtWave's free online masterclass: *"Build Your First AI Project in 60 Minutes"*. \n\nWe build a real working AI project for placement resumes with zero setup.\n\nUse my invite link to get the free AI Resume Blueprint & Colab GPU pass:\n${shareUrl}`
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const verifiedReferrals = 3;
  const targetForNextMilestone = 5; // Gold
  const neededForGold = targetForNextMilestone - verifiedReferrals;

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Dashboard Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">AI Launch Dashboard</h1>
            <Badge variant="success">Registration Status: Verified</Badge>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {activeStudent.name} • {activeStudent.college} • {activeStudent.branch}
          </p>
        </div>

        {/* Live Workshop Countdown Timer */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 flex items-center space-x-3">
          <Clock className="w-4 h-4 text-indigo-400 animate-pulse" />
          <div className="text-xs">
            <span className="text-slate-400 block text-[10px] uppercase font-mono">Workshop Starts In</span>
            <span className="font-mono font-bold text-white text-sm">
              {timeLeft.days}d : {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.mins).padStart(2, '0')}m : {String(timeLeft.secs).padStart(2, '0')}s
            </span>
          </div>
        </div>
      </div>

      {/* Dynamic Milestones Notification Banner */}
      <div className="p-3.5 rounded-xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-slate-900 border border-indigo-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center space-x-2 text-indigo-300">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            You have invited <strong>4 students</strong> (<strong>3 verified</strong>). Only <strong>{neededForGold} more verified registrations</strong> to unlock <strong className="text-amber-400">Gold Milestone (1:1 Mentor Architecture Review)</strong>!
          </span>
        </div>
        <Link href="/student/rewards">
          <Button size="sm" variant="secondary" className="text-xs whitespace-nowrap">
            View All Milestones <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Button>
        </Link>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Growth Score"
          value={`${activeStudent.growthScore} pts`}
          subtitle="Top 5% in College"
          icon={<Zap className="w-5 h-5 text-amber-400" />}
          tag="Silver Tier"
        />
        <StatCard
          title="Verified Referrals"
          value={`${verifiedReferrals} / 4 Total`}
          subtitle="3 Verified Active Classmates"
          icon={<Users className="w-5 h-5 text-emerald-400" />}
          delta="+2 this sprint"
        />
        <StatCard
          title="College Rank"
          value="#1 at RVCE"
          subtitle="74 Total Batch Registrations"
          icon={<GraduationCap className="w-5 h-5 text-sky-400" />}
          tag="Leading Campus"
        />
        <StatCard
          title="Overall Rank"
          value="#14 Nationally"
          subtitle="Across 12 Engineering Colleges"
          icon={<Award className="w-5 h-5 text-indigo-400" />}
        />
      </div>

      {/* Main Grid: Referral Engine & Share Triggers */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Active Referral Engine Box */}
          <Card className="border-indigo-900/60 bg-slate-900/60">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base text-white flex items-center">
                  <Share2 className="w-4 h-4 mr-2 text-indigo-400" />
                  Your Personal Referral Link & Code
                </CardTitle>
                <Badge variant="purple" className="font-mono">{referralCode}</Badge>
              </div>
              <CardDescription>
                Share your personal link. When classmates register, your college climbs the Campus Battle leaderboard and you unlock higher reward tiers.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2 bg-slate-950 border border-slate-800 rounded-lg p-3">
                <span className="font-mono text-xs text-indigo-300 flex-1 truncate">
                  {shareUrl}
                </span>
                <Button size="sm" variant="secondary" onClick={handleCopy}>
                  {copied ? <Check className="w-3.5 h-3.5 mr-1 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
                  {copied ? 'Copied Link' : 'Copy'}
                </Button>
              </div>

              {/* 3 Share Buttons: WhatsApp, LinkedIn, Copy */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href={`https://api.whatsapp.com/send?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button size="md" className="w-full bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold border-none">
                    <MessageCircle className="w-4 h-4 mr-1.5 text-slate-950" />
                    Share on WhatsApp Group
                  </Button>
                </a>

                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button size="md" variant="outline" className="w-full border-slate-700 text-sky-400 hover:bg-slate-800">
                    <Share2 className="w-4 h-4 mr-1.5 text-sky-400" />
                    Share on LinkedIn
                  </Button>
                </a>
              </div>

              {/* Dynamic Milestone Progress */}
              <div className="mt-4 pt-4 border-t border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Current Milestone: <strong className="text-white">Silver (Unlocked)</strong></span>
                  <span>Next: <strong className="text-amber-400">Gold (5 Referrals)</strong></span>
                </div>
                <Progress value={60} color="emerald" size="md" />
                <p className="text-[11px] text-slate-400">
                  {verifiedReferrals} of 5 verified registrations completed. Invite 2 more peers to unlock 1:1 mentor critique.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Referral Quality & Activity Table */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base text-white">Your Referred Peers & Quality Scores</CardTitle>
                <span className="text-[11px] text-slate-400">Weighted by Profile + Readiness</span>
              </div>
              <CardDescription>
                We calculate a dynamic Quality Score (0–100) for every referral to prevent spam and reward genuine peer learning.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                <div>
                  <div className="font-semibold text-white">Abhishek Gowda</div>
                  <div className="text-[11px] text-slate-400">RVCE CSE • Joined 1 day ago via WhatsApp</div>
                </div>
                <div className="text-right">
                  <Badge variant="success">Verified (95/100 Quality)</Badge>
                  <span className="text-[10px] text-emerald-400 block mt-0.5">+25 Growth Pts</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                <div>
                  <div className="font-semibold text-white">Divya Murthy</div>
                  <div className="text-[11px] text-slate-400">RVCE ISE • Joined 1 day ago via WhatsApp</div>
                </div>
                <div className="text-right">
                  <Badge variant="success">Verified (90/100 Quality)</Badge>
                  <span className="text-[10px] text-emerald-400 block mt-0.5">+25 Growth Pts</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                <div>
                  <div className="font-semibold text-white">Naveen Kumar</div>
                  <div className="text-[11px] text-slate-400">RVCE ECE • Joined 4 hours ago via WhatsApp</div>
                </div>
                <div className="text-right">
                  <Badge variant="warning">Verification Pending (80/100)</Badge>
                  <span className="text-[10px] text-amber-400 block mt-0.5">Completing Colab Setup</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar: Readiness & Campus Battle */}
        <div className="space-y-4">
          <Card>
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm text-white flex items-center justify-between">
                <span>Workshop Readiness</span>
                <span className="text-emerald-400 font-mono text-xs">75% Done</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Google Colab Ready</span>
              </div>
              <div className="flex items-center space-x-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Free Cloud API Token Set</span>
              </div>
              <div className="flex items-center space-x-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>GitHub Starter Forked</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-500">
                <span className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center text-[10px]">4</span>
                <span>AI Project Idea Proposed</span>
              </div>

              <div className="pt-2">
                <Link href="/student/readiness" className="block w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Complete 100% Readiness
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm text-white">Campus Battle Standing</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 text-xs text-slate-300 space-y-2">
              <p className="text-[11px] text-slate-400">
                RVCE is currently <strong>#1</strong> with 74 registrations, leading CBIT Hyderabad (62 registrations) by 12 students.
              </p>
              <Link href="/student/leaderboard" className="block w-full">
                <Button variant="secondary" size="sm" className="w-full">
                  View Campus Battle Leaderboard
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
