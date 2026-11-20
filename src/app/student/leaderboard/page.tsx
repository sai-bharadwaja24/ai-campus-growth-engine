'use client';

import React from 'react';
import { Flame } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { CampusBattleCard } from '@/components/CampusBattleCard';

export default function StudentLeaderboardPage() {
  const colleges = [
    { rank: 1, name: 'Amrita Vishwa Vidyapeetham', city: 'Coimbatore', registrations: 78, verified: 69, referrals: 52, contribution: '66.7%' },
    { rank: 2, name: 'RV College of Engineering', city: 'Bengaluru', registrations: 74, verified: 65, referrals: 48, contribution: '64.8%' },
    { rank: 3, name: 'Chaitanya Bharathi Institute of Tech (CBIT)', city: 'Hyderabad', registrations: 62, verified: 54, referrals: 39, contribution: '62.9%' },
    { rank: 4, name: 'Vellore Institute of Technology (VIT)', city: 'Vellore', registrations: 51, verified: 45, referrals: 32, contribution: '62.7%' },
    { rank: 5, name: 'PES University', city: 'Bengaluru', registrations: 38, verified: 33, referrals: 21, contribution: '55.2%' },
    { rank: 6, name: 'SRM Institute of Science and Tech', city: 'Chennai', registrations: 29, verified: 25, referrals: 14, contribution: '48.2%' },
    { rank: 7, name: 'BITS Pilani Hyderabad Campus', city: 'Hyderabad', registrations: 24, verified: 21, referrals: 11, contribution: '45.8%' },
    { rank: 8, name: 'Osmania University College of Engg', city: 'Hyderabad', registrations: 18, verified: 15, referrals: 8, contribution: '44.4%' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center space-x-2">
          <Flame className="w-6 h-6 text-amber-400" />
          <h1 className="text-2xl font-bold text-white tracking-tight">Campus Battle: College Leaderboard</h1>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          Students compete by college. Invite your classmates to propel your college to #1 on the national leaderboard.
        </p>
      </div>

      <CampusBattleCard userCollege="Amrita" />

      <Card>
        <CardHeader>
          <CardTitle className="text-base text-white">National Campus Rankings</CardTitle>
          <CardDescription>
            The psychological growth loop: Student refers friends → college moves upward → student sees progress → shares more.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 uppercase font-mono text-[10px]">
                <tr>
                  <th className="py-3 px-4">Rank</th>
                  <th className="py-3 px-4">College Name</th>
                  <th className="py-3 px-4">City</th>
                  <th className="py-3 px-4 text-right">Total Registrations</th>
                  <th className="py-3 px-4 text-right">Verified Registrations</th>
                  <th className="py-3 px-4 text-right">Referral Contribution</th>
                  <th className="py-3 px-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {colleges.map((col) => (
                  <tr key={col.rank} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-3 px-4 font-bold text-indigo-400">#{col.rank}</td>
                    <td className="py-3 px-4 font-semibold text-white">{col.name}</td>
                    <td className="py-3 px-4 text-slate-400">{col.city}</td>
                    <td className="py-3 px-4 text-right font-mono font-bold text-white">{col.registrations}</td>
                    <td className="py-3 px-4 text-right font-mono text-emerald-400 font-bold">{col.verified}</td>
                    <td className="py-3 px-4 text-right font-mono text-indigo-300">{col.contribution}</td>
                    <td className="py-3 px-4 text-center">
                      <Badge variant={col.rank <= 3 ? 'success' : 'outline'}>
                        {col.rank <= 3 ? '🏆 Podium Leader' : 'Active Contender'}
                      </Badge>
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
