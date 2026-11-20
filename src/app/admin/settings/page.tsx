'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function AdminSettingsPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="border-b border-slate-800 pb-5">
        <h1 className="text-2xl font-bold text-white tracking-tight">Campaign Parameters & Controls</h1>
        <p className="text-xs text-slate-400 mt-1">
          Core settings for the NxtWave 500-Student AI Workshop Growth Sprint.
        </p>
      </div>

      <Card className="border-slate-800 bg-slate-900/60">
        <CardHeader>
          <CardTitle className="text-base text-white">Official Challenge Constraints</CardTitle>
          <CardDescription>Verified simulation parameters set by the challenge brief.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-xs text-slate-300">
          <div className="flex justify-between py-2 border-b border-slate-800">
            <span>Target Registrations</span>
            <span className="font-mono text-white font-bold">500 Students</span>
          </div>
          <div className="flex justify-between py-2 border-b border-slate-800">
            <span>Total Campaign Budget</span>
            <span className="font-mono text-emerald-400 font-bold">₹2,000 INR</span>
          </div>
          <div className="flex justify-between py-2 border-b border-slate-800">
            <span>Campaign Duration</span>
            <span className="font-mono text-white font-bold">7 Days</span>
          </div>
          <div className="flex justify-between py-2 border-b border-slate-800">
            <span>Workshop Title</span>
            <span className="text-white font-medium">Build Your First AI Project in 60 Minutes</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Target Persona</span>
            <span className="text-white font-medium">Final-Year B.Tech/B.E. Engineering Students</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
