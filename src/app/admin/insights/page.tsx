'use client';

import React, { useState } from 'react';
import { ShieldAlert, AlertTriangle, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export default function AdminInsightsPage() {
  const [flags, setFlags] = useState([
    {
      id: 'sus-1',
      name: 'Simulated Bot Probe',
      email: 'temp.user492@mailinator.com',
      reason: 'velocity_spike',
      severity: 'medium',
      details: '6 referral link clicks detected in 45 seconds from identical browser fingerprint.',
      timestamp: '2 hours ago',
      reviewed: false,
    },
    {
      id: 'sus-2',
      name: 'Karan Malhotra',
      email: 'karan.m@gmail.com',
      reason: 'self_referral',
      severity: 'low',
      details: 'Student attempted to use their own referral code during duplicate form submit.',
      timestamp: '5 hours ago',
      reviewed: true,
    },
  ]);

  const handleReview = (id: string) => {
    setFlags(flags.map(f => f.id === id ? { ...f, reviewed: true } : f));
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center space-x-2">
          <ShieldAlert className="w-6 h-6 text-amber-400" />
          <h1 className="text-2xl font-bold text-white tracking-tight">Anti-Spam Safeguards & Suspicious Activity</h1>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          Automated heuristic surveillance flagging suspicious referral velocities, duplicate emails, and self-referrals without auto-banning.
        </p>
      </div>

      <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-800/60 text-amber-300 text-xs flex items-center space-x-2">
        <AlertTriangle className="w-4 h-4 shrink-0" />
        <span>
          <strong>Anti-Spam Principle:</strong> The engine flags anomalous behavior for admin review rather than punishing students with false-positive auto-bans.
        </span>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base text-white">Flagged Surveillance Queue</CardTitle>
          <CardDescription>
            Incidents flagged for review: duplicate emails, duplicate phones, self-referral attempts, or velocity bursts.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {flags.map((item) => (
            <div
              key={item.id}
              className={`p-4 rounded-lg border text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                item.reviewed ? 'bg-slate-950/40 border-slate-800 opacity-60' : 'bg-amber-950/20 border-amber-900/60'
              }`}
            >
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-white">{item.name}</span>
                  <span className="text-slate-400 font-mono">({item.email})</span>
                  <Badge variant={item.severity === 'medium' ? 'warning' : 'outline'}>
                    {item.reason.replace('_', ' ').toUpperCase()}
                  </Badge>
                </div>
                <p className="text-[11px] text-slate-300 mt-1">{item.details}</p>
                <span className="text-[10px] text-slate-500 block mt-0.5">{item.timestamp}</span>
              </div>

              <div>
                {item.reviewed ? (
                  <Badge variant="success">Reviewed & Cleared</Badge>
                ) : (
                  <Button size="sm" variant="secondary" onClick={() => handleReview(item.id)}>
                    Mark as Reviewed
                  </Button>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
