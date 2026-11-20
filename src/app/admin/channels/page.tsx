'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function AdminChannelsPage() {
  const channels = [
    { name: 'WhatsApp (Batch & Placement Groups)', spend: '₹0.00', impressions: 4200, visitors: 780, regs: 145, verified: 128, conv: '18.6%', cac: '₹0.00', status: 'Organic Viral' },
    { name: 'Campus Ambassador Network', spend: '₹1,000.00', impressions: 2100, visitors: 480, regs: 98, verified: 84, conv: '20.4%', cac: '₹10.20', status: 'Micro-Incentive' },
    { name: 'College Club Outreach (IEEE/CSI)', spend: '₹400.00', impressions: 1200, visitors: 320, regs: 62, verified: 52, conv: '19.4%', cac: '₹6.45', status: 'Club Micro-Bounty' },
    { name: 'Peer-to-Peer Direct Referrals', spend: '₹0.00', impressions: 540, visitors: 110, regs: 27, verified: 25, conv: '24.5%', cac: '₹0.00', status: 'Student Loops' },
    { name: 'LinkedIn Posts & Articles', spend: '₹200.00', impressions: 850, visitors: 95, regs: 6, verified: 5, conv: '6.3%', cac: '₹33.33', status: 'Guerrilla Content' },
    { name: 'Instagram Stories & Reels', spend: '₹200.00', impressions: 920, visitors: 65, regs: 3, verified: 2, conv: '4.6%', cac: '₹66.67', status: 'Micro-Boost' },
    { name: 'Email Campus Newsletters', spend: '₹100.00', impressions: 400, visitors: 35, regs: 1, verified: 1, conv: '2.8%', cac: '₹100.00', status: 'Direct Outreach' },
    { name: 'Direct URL Visits', spend: '₹100.00', impressions: 150, visitors: 22, regs: 0, verified: 0, conv: '0.0%', cac: '₹0.00', status: 'Direct Web' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="border-b border-slate-800 pb-5">
        <h1 className="text-2xl font-bold text-white tracking-tight">Multi-Channel Attribution & Unit Economics</h1>
        <p className="text-xs text-slate-400 mt-1">
          Tracking registrations, conversion rates, and exact CAC across all 8 marketing channels under the ₹2,000 budget cap.
        </p>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 uppercase font-mono text-[10px]">
                <tr>
                  <th className="py-3 px-4">Channel</th>
                  <th className="py-3 px-4 text-right">Spend</th>
                  <th className="py-3 px-4 text-right">Visitors</th>
                  <th className="py-3 px-4 text-right">Registrations</th>
                  <th className="py-3 px-4 text-right">Verified</th>
                  <th className="py-3 px-4 text-right">Conversion</th>
                  <th className="py-3 px-4 text-right">Channel CAC</th>
                  <th className="py-3 px-4 text-center">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {channels.map((ch, i) => (
                  <tr key={i} className="hover:bg-slate-800/30">
                    <td className="py-3 px-4 font-semibold text-white">{ch.name}</td>
                    <td className="py-3 px-4 text-right font-mono text-indigo-400">{ch.spend}</td>
                    <td className="py-3 px-4 text-right font-mono text-slate-400">{ch.visitors}</td>
                    <td className="py-3 px-4 text-right font-mono font-bold text-white">{ch.regs}</td>
                    <td className="py-3 px-4 text-right font-mono text-emerald-400 font-bold">{ch.verified}</td>
                    <td className="py-3 px-4 text-right font-mono text-slate-300">{ch.conv}</td>
                    <td className="py-3 px-4 text-right font-mono font-semibold text-amber-400">{ch.cac}</td>
                    <td className="py-3 px-4 text-center">
                      <Badge variant="outline">{ch.status}</Badge>
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
