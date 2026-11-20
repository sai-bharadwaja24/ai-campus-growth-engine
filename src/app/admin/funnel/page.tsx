'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { Layers, ArrowDown } from 'lucide-react';

export default function AdminFunnelPage() {
  const funnel = [
    { stage: '1. Impressions', count: 8415, conv: '100%', drop: '0%', notes: 'WhatsApp group previews, ambassador broadcast forwards, LinkedIn impressions' },
    { stage: '2. Landing Visitors', count: 1650, conv: '19.6%', drop: '80.4%', notes: 'Unique engineering student sessions on the registration landing page' },
    { stage: '3. Registration Starts', count: 578, conv: '35.0%', drop: '65.0%', notes: 'Students who focused on form fields and branch selector' },
    { stage: '4. Registrations', count: 342, conv: '59.2%', drop: '40.8%', notes: 'Completed submissions issued instant referral codes' },
    { stage: '5. Verified Registrations', count: 287, conv: '83.9%', drop: '16.1%', notes: 'Passed student email domain & unique WhatsApp validation checks' },
    { stage: '6. Workshop Attendance (Projected)', count: 224, conv: '78.0%', drop: '22.0%', notes: 'Completed pre-workshop Colab readiness checklist' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="border-b border-slate-800 pb-5">
        <h1 className="text-2xl font-bold text-white tracking-tight">Acquisition & Activation Growth Funnel</h1>
        <p className="text-xs text-slate-400 mt-1">
          Full-funnel telemetry from initial impressions through live workshop attendance.
        </p>
      </div>

      <div className="space-y-4">
        {funnel.map((item, idx) => (
          <React.Fragment key={idx}>
            <Card className="border-slate-800 bg-slate-900/60">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-white text-sm">{item.stage}</span>
                    <Badge variant={idx >= 4 ? 'success' : 'purple'}>{item.conv} Stage Conversion</Badge>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-slate-400">Drop-off: <strong className="text-rose-400">{item.drop}</strong></span>
                    <span className="font-mono text-emerald-400 font-bold text-base">{item.count.toLocaleString()} Students</span>
                  </div>
                </div>
                <Progress value={Math.round((item.count / 8415) * 100)} color={idx >= 4 ? 'emerald' : 'indigo'} size="sm" />
                <p className="text-[11px] text-slate-400 mt-2">{item.notes}</p>
              </CardContent>
            </Card>
            {idx < funnel.length - 1 && (
              <div className="flex justify-center -my-2">
                <div className="w-6 h-6 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
