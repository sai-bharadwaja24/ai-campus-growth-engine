'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Copy, Check, Megaphone, MessageSquare, Users, UserCheck, Sparkles } from 'lucide-react';
import { useRole } from '@/context/RoleContext';

export function AmbassadorPitchCard() {
  const { activeAmbassador } = useRole();
  const [activeTab, setActiveTab] = useState<'classroom' | 'whatsapp' | 'club' | 'dm'>('classroom');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const referralCode = activeAmbassador.referralCode || 'SAI-AMRITA';
  const shareUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/register?ref=${referralCode}`
    : `https://campusgrowth.nxtwave.in/register?ref=${referralCode}`;

  const pitches = {
    classroom: {
      title: 'Classroom Announcement',
      subtitle: '10-Second Speech Before Lecture or Lab',
      tag: 'High Conversion (40%+)',
      icon: Megaphone,
      color: 'text-amber-400',
      text: `Hey guys, quick 10 seconds before the lecture starts: NxtWave is hosting a free 60-minute live workshop this Sunday where we build and deploy a real working AI project on Google Colab with zero local setup. You can add it directly to your placement resume with a live GitHub link and recruiter defense guide. Seats are capped at 500 across campuses — the invite link is pinned in our class WhatsApp group right now!`,
    },
    whatsapp: {
      title: 'WhatsApp Batch Broadcast',
      subtitle: 'For Official & Unofficial Batch WhatsApp Groups',
      tag: '8:30 PM Prime Time',
      icon: MessageSquare,
      color: 'text-emerald-400',
      text: `📢 *Attention Final-Year Engineers (${activeAmbassador.college}):*\n\nFacing upcoming placement drives without a deployed AI project on your resume?\n\nThis Sunday, NxtWave is hosting a free 60-minute live sprint: *"Build Your First AI Project in 60 Minutes"* with zero setup on Google Colab.\n\nKey takeaways:\n• Live deployable GenAI project + GitHub repository\n• ATS-optimized resume bullet points\n• Top 10 placement interview defense answers\n\nRegister with my campus invite link to unlock the free AI Resume Toolkit:\n👉 ${shareUrl}`,
    },
    club: {
      title: 'College Tech Club Pitch',
      subtitle: 'For IEEE, CSI, ACM, or GDSC Tech Chapters',
      tag: 'Peer Tech Reps',
      icon: Users,
      color: 'text-sky-400',
      text: `⚡ *Special Workshop Partnership for Club Members* ⚡\n\nHey devs! If you want an end-to-end practical AI project on your resume, NxtWave's live 60-minute build session is open for free registration this Sunday.\n\nWe build an end-to-end LLM application with API integrations, vector embeddings, and web deployment. Zero local machine requirements.\n\nGrab priority member access using our campus code:\n👉 ${shareUrl}`,
    },
    dm: {
      title: 'Personal 1-on-1 DM',
      subtitle: 'Direct Message to Friends & Project Teammates',
      tag: 'High Trust (85%+)',
      icon: UserCheck,
      color: 'text-purple-400',
      text: `Hey bro, if you need a strong deployed AI project for upcoming placement interviews, check out this free 60-minute live workshop by NxtWave this Sunday. We build a real project with zero setup, get a GitHub repo, and ATS resume bullets. Use my pass link so we both unlock the AI Resume Blueprint:\n${shareUrl}`,
    },
  };

  const currentPitch = pitches[activeTab];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <Card className="border-indigo-900/60 bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-900 shadow-xl">
      <CardHeader className="pb-3 border-b border-slate-800/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-bold">
                CAMPUS OUTREACH TOOLKIT
              </span>
              <Badge variant="purple" className="text-[10px]">Instant Copy</Badge>
            </div>
            <CardTitle className="text-lg font-bold text-white tracking-tight mt-1 flex items-center">
              <Megaphone className="w-4 h-4 mr-2 text-indigo-400" />
              # COPY ONE-LINER PITCH
            </CardTitle>
            <CardDescription className="text-xs text-slate-300">
              High-converting, tested message copy tailored for campus announcements and batch distribution.
            </CardDescription>
          </div>
          <div className="text-xs text-slate-400 font-mono">
            Tracking Code: <strong className="text-sky-300">{referralCode}</strong>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-4 space-y-4">
        {/* Tab Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {(Object.keys(pitches) as Array<keyof typeof pitches>).map((key) => {
            const p = pitches[key];
            const Icon = p.icon;
            const isSelected = activeTab === key;

            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-indigo-950/60 border-indigo-500 shadow-md shadow-indigo-950 text-white'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <Icon className={`w-3.5 h-3.5 ${p.color}`} />
                  <span className="text-[9px] font-mono text-slate-500">{p.tag}</span>
                </div>
                <span className="text-xs font-bold truncate block">{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Pitch Display Card */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-white">{currentPitch.title}</span>
              <span className="text-[11px] text-slate-400">? {currentPitch.subtitle}</span>
            </div>
            <Badge variant="success" className="text-[9px]">{currentPitch.tag}</Badge>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800/80 font-mono text-xs text-slate-200 leading-relaxed whitespace-pre-wrap selection:bg-indigo-500 selection:text-white">
            {currentPitch.text}
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-slate-400">
              Personalized with your campus (<strong className="text-slate-200">{activeAmbassador.college}</strong>) & tracking URL
            </span>

            <Button
              size="sm"
              variant={copiedKey === activeTab ? 'secondary' : 'primary'}
              onClick={() => handleCopy(currentPitch.text, activeTab)}
              className="text-xs font-semibold shrink-0"
            >
              {copiedKey === activeTab ? (
                <>
                  <Check className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                  Copied to Clipboard!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 mr-1.5" />
                  Copy Pitch Copy
                </>
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
