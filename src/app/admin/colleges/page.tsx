'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function AdminCollegesPage() {
  const colleges = [
    { name: 'Amrita Vishwa Vidyapeetham', city: 'Coimbatore', regs: 78, refs: 52, lead: 'Sai Bharadwaja' },
    { name: 'RV College of Engineering', city: 'Bengaluru', regs: 74, refs: 48, lead: 'Rohan Deshmukh' },
    { name: 'Chaitanya Bharathi Institute of Technology (CBIT)', city: 'Hyderabad', regs: 62, refs: 39, lead: 'Ananya Reddy' },
    { name: 'Vellore Institute of Technology (VIT)', city: 'Vellore', regs: 51, refs: 32, lead: 'Tanvi Shah' },
    { name: 'PES University', city: 'Bengaluru', regs: 38, refs: 21, lead: 'Vikramaditya Rao' },
    { name: 'SRM Institute of Science and Technology', city: 'Chennai', regs: 29, refs: 14, lead: 'Meera Krishnan' },
    { name: 'BITS Pilani Hyderabad Campus', city: 'Hyderabad', regs: 24, refs: 11, lead: 'Campus Tech Lead' },
    { name: 'Osmania University College of Engg', city: 'Hyderabad', regs: 18, refs: 8, lead: 'IEEE Student Chair' },
    { name: 'VNR Vignana Jyothi Institute', city: 'Hyderabad', regs: 14, refs: 5, lead: 'CSI Coordinator' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="border-b border-slate-800 pb-5">
        <h1 className="text-2xl font-bold text-white tracking-tight">College Campus Distribution</h1>
        <p className="text-xs text-slate-400 mt-1">
          Breakdown of registrations and organic referral loops across participating colleges.
        </p>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 uppercase font-mono text-[10px]">
                <tr>
                  <th className="py-3 px-4">Campus Name</th>
                  <th className="py-3 px-4">City</th>
                  <th className="py-3 px-4">Campus Lead</th>
                  <th className="py-3 px-4 text-right">Registrations</th>
                  <th className="py-3 px-4 text-right">Referral Loops</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {colleges.map((c, i) => (
                  <tr key={i} className="hover:bg-slate-800/30">
                    <td className="py-3 px-4 font-semibold text-white">{c.name}</td>
                    <td className="py-3 px-4 text-slate-400">{c.city}</td>
                    <td className="py-3 px-4 text-indigo-400">{c.lead}</td>
                    <td className="py-3 px-4 text-right font-mono font-bold text-emerald-400">{c.regs}</td>
                    <td className="py-3 px-4 text-right font-mono text-slate-300">{c.refs}</td>
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
