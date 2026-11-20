'use client';

import React, { useState } from 'react';
import { useRole } from '@/context/RoleContext';
import { Copy, Check, MessageCircle, FileText } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function AmbassadorAssetsPage() {
  const { activeAmbassador } = useRole();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const inviteLink = typeof window !== 'undefined'
    ? `${window.location.origin}/register?ref=${activeAmbassador.referralCode}`
    : `https://campusgrowth.nxtwave.in/register?ref=${activeAmbassador.referralCode}`;

  const copyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const shareWhatsApp = (text: string) => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const templates = [
    {
      id: 't1',
      title: 'WhatsApp Template 1: The Placement Resume Hook (Highest Converting)',
      desc: 'Use for batch groups, CR announcements, and department channels.',
      text: `Hey everyone! Most tech placement drives this semester are heavily prioritizing GenAI & full-stack projects. \n\nNxtWave is conducting a FREE online masterclass: *"Build Your First AI Project in 60 Minutes"*. \n\n- You build and deploy a real working AI project\n- Free starter code & Google Colab GPU environment (zero setup)\n- Quantified bullet points to add directly to your resume\n\nRegister here for free (exclusive pass for ${activeAmbassador.college}):\n${inviteLink}`,
    },
    {
      id: 't2',
      title: 'WhatsApp Template 2: Evening Project Submission Panic (8:30 PM)',
      desc: 'Use for hostel groups & casual coding chats when students discuss project deadlines.',
      text: `Stressing about your final year capstone or placement project? \n\nSpend 60 minutes this week building an end-to-end AI application you can actually explain in interviews. \n\nZero prerequisites — 100% in browser. \nGrab your free seat before the 500-student cap fills up:\n${inviteLink}`,
    },
    {
      id: 't3',
      title: 'LinkedIn / Social Post Copy',
      desc: 'Short post copy for student ambassadors on LinkedIn.',
      text: `Excited to partner with NxtWave as the Campus Lead for ${activeAmbassador.college}! \n\nWe are launching a free 60-minute hands-on sprint: "Build Your First AI Project in 60 Minutes" for final-year engineering students. \n\nIf you want a live deployed AI project on your GitHub before placements, check it out here: ${inviteLink} #AI #PlacementPrep #Engineering`,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="border-b border-slate-800 pb-5">
        <h1 className="text-2xl font-bold text-white tracking-tight">Marketing Assets & WhatsApp Broadcast Templates</h1>
        <p className="text-xs text-slate-400 mt-1">
          High-converting broadcast copies personalized with your tracking code <strong className="font-mono text-sky-400">{activeAmbassador.referralCode}</strong>.
        </p>
      </div>

      <div className="space-y-4">
        {templates.map((t) => (
          <Card key={t.id} className="border-slate-800 bg-slate-900/60">
            <CardHeader className="pb-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <CardTitle className="text-sm text-white">{t.title}</CardTitle>
                <div className="flex items-center space-x-2 shrink-0">
                  <Button size="sm" variant="secondary" onClick={() => copyText(t.id, t.text)}>
                    {copiedId === t.id ? <Check className="w-3.5 h-3.5 mr-1 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
                    {copiedId === t.id ? 'Copied' : 'Copy'}
                  </Button>
                  <Button size="sm" variant="accent" onClick={() => shareWhatsApp(t.text)}>
                    <MessageCircle className="w-3.5 h-3.5 mr-1" />
                    Share on WhatsApp
                  </Button>
                </div>
              </div>
              <CardDescription>{t.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300 whitespace-pre-wrap font-sans leading-relaxed">
                {t.text}
              </pre>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
