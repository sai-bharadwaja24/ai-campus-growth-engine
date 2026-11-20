'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Sparkles, Copy, Check, Share2, RefreshCw, MessageCircle, Send, Globe, Users } from 'lucide-react';
import { generateSmartShareMessage, ShareDestination } from '@/lib/ai-intelligence';

interface AIShareCopilotProps {
  student: {
    name: string;
    branch: string;
    aiExperience: string;
    goal: string;
    college: string;
    referralCode: string;
  };
}

const DESTINATIONS: { id: ShareDestination; label: string; icon: any; platform: string; color: string }[] = [
  { id: 'whatsapp_friend', label: 'WhatsApp Friend (1-on-1)', icon: MessageCircle, platform: 'WhatsApp', color: 'text-emerald-400' },
  { id: 'whatsapp_group', label: 'Batch WhatsApp Group', icon: Users, platform: 'WhatsApp', color: 'text-emerald-400' },
  { id: 'college_club', label: 'Technical Club Announcement', icon: Sparkles, platform: 'College Club', color: 'text-amber-400' },
  { id: 'linkedin', label: 'LinkedIn Post', icon: Globe, platform: 'LinkedIn', color: 'text-sky-400' },
  { id: 'telegram', label: 'Telegram Tech Channel', icon: Send, platform: 'Telegram', color: 'text-cyan-400' },
];

export function AIShareCopilot({ student }: AIShareCopilotProps) {
  const [destination, setDestination] = useState<ShareDestination>('whatsapp_friend');
  const [copied, setCopied] = useState(false);
  const [regenSeed, setRegenSeed] = useState(0);

  const referralUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/register?ref=${student.referralCode}`
    : `https://campusgrowth.nxtwave.in/register?ref=${student.referralCode}`;

  const messageData = generateSmartShareMessage({
    destination,
    branch: student.branch,
    aiExperience: student.aiExperience,
    goal: student.goal,
    college: student.college,
    referralCode: student.referralCode,
    referralUrl,
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(messageData.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (destination === 'whatsapp_friend' || destination === 'whatsapp_group') {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(messageData.text)}`, '_blank');
    } else if (destination === 'telegram') {
      window.open(`https://t.me/share/url?url=${encodeURIComponent(referralUrl)}&text=${encodeURIComponent(messageData.text)}`, '_blank');
    } else if (destination === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(referralUrl)}`, '_blank');
    } else {
      if (navigator.share) {
        navigator.share({
          title: messageData.subject,
          text: messageData.text,
          url: referralUrl,
        }).catch(() => {});
      } else {
        handleCopy();
      }
    }
  };

  return (
    <Card className="border-indigo-900/60 bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-900">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <CardTitle className="text-base text-white flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-indigo-400" />
              # AI Share Copilot
            </CardTitle>
            <CardDescription>
              Generates context-aware, high-converting messages tailored to your branch ({student.branch}) and target channel.
            </CardDescription>
          </div>
          <Badge variant="purple" className="self-start sm:self-auto text-[10px]">
            Personalized Angle Active
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Destination Tabs */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Select Audience / Destination
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {DESTINATIONS.map((dest) => {
              const Icon = dest.icon;
              const isSelected = dest.id === destination;
              return (
                <button
                  key={dest.id}
                  onClick={() => setDestination(dest.id)}
                  className={`p-2 rounded-lg border text-left text-xs transition-all flex items-center space-x-2 ${
                    isSelected
                      ? 'bg-indigo-950/80 border-indigo-500 shadow-sm shadow-indigo-500/30 font-semibold text-white'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${dest.color} shrink-0`} />
                  <span className="truncate text-[11px]">{dest.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Message Preview Box */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2">
              <span className="text-slate-400 text-[11px]">Tone:</span>
              <span className="text-indigo-300 font-semibold text-[11px]">{messageData.tone}</span>
            </div>
            <button
              onClick={() => setRegenSeed((prev) => prev + 1)}
              className="text-[11px] text-slate-400 hover:text-white flex items-center space-x-1"
            >
              <RefreshCw className="w-3 h-3 mr-1" />
              Regenerate
            </button>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-sans text-xs text-slate-200 whitespace-pre-wrap leading-relaxed">
            {messageData.text}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
          <Button
            size="md"
            variant="secondary"
            onClick={handleCopy}
            className="w-full sm:w-1/2"
          >
            {copied ? <Check className="w-4 h-4 mr-2 text-emerald-400" /> : <Copy className="w-4 h-4 mr-2" />}
            {copied ? 'Copied to Clipboard' : 'Copy Message'}
          </Button>

          <Button
            size="md"
            variant="primary"
            onClick={handleShare}
            className="w-full sm:w-1/2 shadow-lg shadow-indigo-600/25"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share to {destination.includes('whatsapp') ? 'WhatsApp' : destination === 'linkedin' ? 'LinkedIn' : 'Telegram'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
