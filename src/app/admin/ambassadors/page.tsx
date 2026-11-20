'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function AdminAmbassadorsPage() {
  const leads = [
    { name: 'Sai Bharadwaja', college: 'Amrita Vishwa Vidyapeetham', code: 'SAI-AMRITA', reach: 520, regs: 78, conv: '15.6%', bonus: '₹200' },
    { name: 'Ananya Reddy', college: 'CBIT Hyderabad', code: 'ANANYA-CBIT', reach: 420, regs: 62, conv: '14.8%', bonus: '₹200' },
    { name: 'Rohan Deshmukh', college: 'RVCE Bengaluru', code: 'ROHAN-RVCE', reach: 480, regs: 74, conv: '15.4%', bonus: '₹200' },
    { name: 'Tanvi Shah', college: 'VIT Vellore', code: 'TANVI-VIT', reach: 360, regs: 51, conv: '14.2%', bonus: '₹200' },
    { name: 'Vikramaditya Rao', college: 'PES University', code: 'VIKRAM-PES', reach: 290, regs: 38, conv: '13.1%', bonus: '₹0' },
    { name: 'Meera Krishnan', college: 'SRM Chennai', code: 'MEERA-SRM', reach: 240, regs: 29, conv: '12.1%', bonus: '₹0' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="border-b border-slate-800 pb-5">
        <h1 className="text-2xl font-bold text-white tracking-tight">Campus Ambassador Performance & Bounties</h1>
        <p className="text-xs text-slate-400 mt-1">
          Tracking the 5 campus leads and the ₹1,000 micro-bounty allocation pool.
        </p>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 uppercase font-mono text-[10px]">
                <tr>
                  <th className="py-3 px-4">Ambassador</th>
                  <th className="py-3 px-4">College</th>
                  <th className="py-3 px-4">Tracking Code</th>
                  <th className="py-3 px-4 text-right">Reach</th>
                  <th className="py-3 px-4 text-right">Registrations</th>
                  <th className="py-3 px-4 text-right">Conversion</th>
                  <th className="py-3 px-4 text-center">Bonus Earned</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {leads.map((l, i) => (
                  <tr key={i} className="hover:bg-slate-800/30">
                    <td className="py-3 px-4 font-semibold text-white">{l.name}</td>
                    <td className="py-3 px-4 text-slate-400">{l.college}</td>
                    <td className="py-3 px-4 font-mono text-indigo-400">{l.code}</td>
                    <td className="py-3 px-4 text-right font-mono text-slate-400">{l.reach}</td>
                    <td className="py-3 px-4 text-right font-mono font-bold text-emerald-400">{l.regs}</td>
                    <td className="py-3 px-4 text-right font-mono text-slate-300">{l.conv}</td>
                    <td className="py-3 px-4 text-center">
                      <Badge variant={l.bonus !== '₹0' ? 'success' : 'outline'}>{l.bonus}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
