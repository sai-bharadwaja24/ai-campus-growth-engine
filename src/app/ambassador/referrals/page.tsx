'use client';

import React from 'react';
import { useRole } from '@/context/RoleContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function AmbassadorReferralsPage() {
  const { activeAmbassador } = useRole();

  const branchBreakdown = [
    { branch: 'Computer Science & Engineering', count: 34, conversion: '18.2%' },
    { branch: 'Information Technology', count: 16, conversion: '15.1%' },
    { branch: 'Electronics & Communication', count: 9, conversion: '11.4%' },
    { branch: 'Mechanical / Civil', count: 3, conversion: '6.8%' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="border-b border-slate-800 pb-5">
        <h1 className="text-2xl font-bold text-white tracking-tight">Ambassador Referral Analytics</h1>
        <p className="text-xs text-slate-400 mt-1">
          Detailed attribution data for registrations coming through {activeAmbassador.referralCode}.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base text-white">Registrations by Department (CBIT Hyderabad)</CardTitle>
          <CardDescription>CSE and IT departments account for 80% of all sign-ups.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {branchBreakdown.map((b) => (
              <div key={b.branch} className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                <div>
                  <span className="font-semibold text-white">{b.branch}</span>
                  <div className="text-[11px] text-slate-400">Conversion Rate: {b.conversion}</div>
                </div>
                <Badge variant="purple">{b.count} Registrations</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
