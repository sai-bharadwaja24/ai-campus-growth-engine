'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  CheckCircle2,
  Copy,
  Check,
  ArrowRight,
  Lock,
  Unlock,
  MessageCircle,
  Users,
  Sparkles,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

function SuccessContent() {
  const searchParams = useSearchParams();
  const referralCode = searchParams.get('code') || 'AI60-SAI88';
  const studentName = searchParams.get('name') || 'Sai Bharadwaja';

  const [copied, setCopied] = useState(false);
  const [communityJoined, setCommunityJoined] = useState(false);

  const shareUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/register?ref=${referralCode}`
      : `https://campusgrowth.nxtwave.in/register?ref=${referralCode}`;

  const whatsappShareMessage = encodeURIComponent(
    `Hey! I just registered for NxtWave's free live workshop: *"Build Your First AI Project in 60 Minutes"*.\n\nWe build and deploy a working AI project for placement resumes with zero setup on Google Colab.\n\nUse my invite link to unlock the free AI Resume Blueprint & Colab GPU pass:\n${shareUrl}`
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleJoinCommunity = () => {
    setCommunityJoined(true);
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto space-y-6">
      <Card className="border-emerald-800/60 bg-gradient-to-b from-emerald-950/20 via-slate-900 to-slate-900 p-6 sm:p-8 shadow-2xl">
        <div className="text-center">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-900/50 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mb-4 shadow-lg shadow-emerald-950">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <Badge variant="success" className="mb-2">Registration Confirmed — Live Sprint</Badge>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            You're In, {studentName}!
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-lg mx-auto">
            Your seat for <strong className="text-white">"Build Your First AI Project in 60 Minutes"</strong> is officially locked. Follow the 3 onboarding steps below to maximize your placement advantage.
          </p>
        </div>

        {/* 3-STEP RETENTION & ONBOARDING SEQUENCE */}
        <div className="mt-8 space-y-5">
          {/* STEP 1: Registration Confirmed */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-800/50 flex items-start space-x-3.5">
            <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              1
            </div>
            <div className="space-y-1 flex-1">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Step 1: Seat & Pass Issued
                </span>
                <Badge variant="success" className="text-[9px]">Confirmed</Badge>
              </div>
              <p className="text-xs text-slate-300">
                Your unique Student ID is verified. You will build and deploy a working AI tool directly in browser on Day 7.
              </p>
              <div className="text-[11px] font-mono text-indigo-300 mt-1">
                Your Referral Pass: <strong>{referralCode}</strong>
              </div>
            </div>
          </div>

          {/* STEP 2: Community Retention */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-indigo-900/60 flex items-start space-x-3.5">
            <div className="w-7 h-7 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              2
            </div>
            <div className="space-y-2 flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Step 2: Join Demo Workshop Community
                  </span>
                  <Badge variant="purple" className="text-[9px]">Simulation Demo</Badge>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono">245 Peers Online</span>
              </div>
              <p className="text-xs text-slate-300">
                Pre-workshop Google Colab starter notebooks, API test keys, and campus hiring briefs are shared exclusively in the cohort channel.
              </p>
              
              <div className="pt-1">
                {communityJoined ? (
                  <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>✓ Successfully connected to Demo Workshop Community Channel!</span>
                  </div>
                ) : (
                  <Button
                    size="sm"
                    variant="primary"
                    onClick={handleJoinCommunity}
                    className="w-full sm:w-auto text-xs bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold border-none"
                  >
                    <MessageCircle className="w-4 h-4 mr-2 text-slate-950" />
                    Join Workshop WhatsApp Community (Demo)
                  </Button>
                )}
                <span className="text-[10px] text-slate-500 block mt-1">
                  * Simulated action: Connects your student ID to automated reminder broadcasts (T-24h, T-2h, T-15m).
                </span>
              </div>
            </div>
          </div>

          {/* STEP 3: Share Referral Link */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start space-x-3.5">
            <div className="w-7 h-7 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              3
            </div>
            <div className="space-y-3 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Step 3: Unlock Career Blueprint Toolkit
                </span>
                <span className="text-emerald-400 font-mono font-bold text-xs">+25 pts / classmate</span>
              </div>
              <p className="text-xs text-slate-300">
                Invite 1 project teammate to instantly unlock the <strong className="text-white">AI Resume Project Blueprint</strong> (GitHub repo + ATS bullet points).
              </p>

              <div className="flex items-center space-x-2 bg-slate-900 border border-slate-700/80 rounded-lg p-2.5">
                <span className="font-mono text-sm sm:text-base font-bold text-indigo-300 tracking-wider flex-1 truncate">
                  {referralCode}
                </span>
                <Button size="sm" variant="secondary" onClick={handleCopy}>
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 mr-1" />
                      Copy Link
                    </>
                  )}
                </Button>
              </div>

              <div>
                <a
                  href={`https://api.whatsapp.com/send?text=${whatsappShareMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button size="md" className="w-full bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold border-none shadow-md shadow-emerald-950/60">
                    <MessageCircle className="w-4 h-4 mr-2 text-slate-950" />
                    Share Pass to College WhatsApp Group
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Referral Milestones Preview */}
        <div className="mt-8 border-t border-slate-800/80 pt-6 text-left">
          <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">
            Milestone Rewards Ready to Unlock
          </h3>
          <div className="space-y-2.5">
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs">
              <div className="flex items-center space-x-2.5">
                <Unlock className="w-4 h-4 text-emerald-400" />
                <div>
                  <span className="font-medium text-white">AI Resume Project Blueprint</span>
                  <p className="text-[10px] text-slate-400">GitHub repo + ATS bullet points</p>
                </div>
              </div>
              <Badge variant="success">1 Referral Needed</Badge>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs">
              <div className="flex items-center space-x-2.5">
                <Lock className="w-4 h-4 text-slate-500" />
                <div>
                  <span className="font-medium text-slate-300">GPU Notebooks & Free API Pass</span>
                  <p className="text-[10px] text-slate-500">Pre-configured Google Colab environment</p>
                </div>
              </div>
              <Badge variant="outline">3 Referrals Needed</Badge>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Link href="/student/dashboard">
            <Button variant="secondary" size="md" className="w-full sm:w-auto">
              Open Student Hub Dashboard
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </Link>
          <Link href="/student/readiness">
            <Button variant="outline" size="md" className="w-full sm:w-auto">
              Workshop Prep Checklist
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen py-16 text-center text-slate-400">
          <div className="w-8 h-8 mx-auto border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mb-3" />
          Loading your viral referral pass...
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
