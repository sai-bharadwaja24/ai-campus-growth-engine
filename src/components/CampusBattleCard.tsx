'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Trophy, Swords, Zap, Users, ArrowUp, Sparkles } from 'lucide-react';

interface CollegeStanding {
  rank: number;
  name: string;
  shortName: string;
  registrations: number;
  city: string;
  isUserCollege?: boolean;
}

const INITIAL_STANDINGS: CollegeStanding[] = [
  { rank: 1, name: 'Amrita Vishwa Vidyapeetham', shortName: 'Amrita', registrations: 78, city: 'Coimbatore', isUserCollege: true },
  { rank: 2, name: 'RV College of Engineering', shortName: 'RVCE', registrations: 74, city: 'Bengaluru' },
  { rank: 3, name: 'Chaitanya Bharathi Institute of Technology', shortName: 'CBIT', registrations: 62, city: 'Hyderabad' },
  { rank: 4, name: 'Vellore Institute of Technology', shortName: 'VIT', registrations: 55, city: 'Vellore' },
  { rank: 5, name: 'PSG College of Technology', shortName: 'PSG', registrations: 48, city: 'Coimbatore' },
];

export function CampusBattleCard({ userCollege = 'Amrita' }: { userCollege?: string }) {
  const [extraInvites, setExtraInvites] = useState(20);

  const userStanding = INITIAL_STANDINGS.find((c) => c.shortName === userCollege || c.isUserCollege) || INITIAL_STANDINGS[2];
  const leaderStanding = INITIAL_STANDINGS[0];

  const simulatedUserTotal = userStanding.registrations + extraInvites;
  const gapToLeader = leaderStanding.registrations - userStanding.registrations;
  const neededToTakeover = gapToLeader + 1;

  let simulatedRank = userStanding.rank;
  if (simulatedUserTotal > leaderStanding.registrations) {
    simulatedRank = 1;
  } else if (simulatedUserTotal > INITIAL_STANDINGS[1].registrations) {
    simulatedRank = 2;
  }

  return (
    <Card className="border-indigo-900/60 bg-gradient-to-br from-slate-900 via-indigo-950/30 to-slate-900">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <CardTitle className="text-base text-white flex items-center">
              <Swords className="w-4 h-4 mr-2 text-amber-400" />
              Inter-College Campus Battle & Rank Takeover Calculator
            </CardTitle>
            <CardDescription>
              Compete against other engineering campuses. The #1 college wins an offline AI Hackathon + Placement Drive sponsorship.
            </CardDescription>
          </div>
          <Badge variant="warning" className="self-start sm:self-auto flex items-center">
            <Trophy className="w-3 h-3 mr-1 text-amber-300" />
            Prize Pool: ₹10,000 Hackathon
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Current Leaderboard Mini-Strip */}
        <div className="space-y-2">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Live Top 5 Campus Rankings
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
            {INITIAL_STANDINGS.map((col) => {
              const isUser = col.shortName === userCollege || col.isUserCollege;
              return (
                <div
                  key={col.shortName}
                  className={`p-2.5 rounded-lg border text-xs transition-all ${
                    isUser
                      ? 'bg-indigo-950/80 border-indigo-500 shadow-md shadow-indigo-500/20'
                      : 'bg-slate-950 border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-slate-400 text-[10px]">#{col.rank}</span>
                    {col.rank === 1 && <Trophy className="w-3 h-3 text-amber-400" />}
                  </div>
                  <div className="font-bold text-white truncate mt-1">{col.shortName}</div>
                  <div className="text-[10px] text-emerald-400 font-mono">{col.registrations} regs</div>
                  {isUser && (
                    <span className="text-[9px] font-semibold text-indigo-300 block mt-1 uppercase">Your Campus</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Takeover Calculator */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-semibold text-white flex items-center">
                <Zap className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                Rank Takeover Simulator for {userStanding.shortName}
              </span>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Current Rank: <strong className="text-white">#{userStanding.rank}</strong> ({userStanding.registrations} regs) • 
                Needs <strong className="text-amber-300">{neededToTakeover} more registrations</strong> to dethrone {leaderStanding.shortName} for #1!
              </p>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase font-mono text-slate-400 block">Projected Rank</span>
              <span className="text-lg font-bold font-mono text-emerald-400">
                #{simulatedRank} {simulatedRank < userStanding.rank ? '(+ ' + (userStanding.rank - simulatedRank) + ' Ranks)' : ''}
              </span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1.5">
              <span>Classmates you & campus peers invite today:</span>
              <span className="font-mono font-bold text-indigo-300">+{extraInvites} registrations</span>
            </div>
            <input
              type="range"
              min="0"
              max="40"
              value={extraInvites}
              onChange={(e) => setExtraInvites(Number(e.target.value))}
              className="w-full accent-indigo-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            />
          </div>

          {/* Dynamic Takeover Status Banner */}
          <div
            className={`p-3 rounded-lg text-xs flex items-center justify-between border ${
              simulatedRank === 1
                ? 'bg-emerald-950/40 border-emerald-800/80 text-emerald-300'
                : 'bg-indigo-950/40 border-indigo-900/60 text-indigo-200'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 shrink-0 text-amber-400" />
              <span>
                {simulatedRank === 1 ? (
                  <>
                    <strong>BOOM! Rank #1 Unlocked!</strong> With +{extraInvites} registrations, {userStanding.shortName} reaches {simulatedUserTotal} registrations and takes the #1 Trophy!
                  </>
                ) : (
                  <>
                    With +{extraInvites} registrations, {userStanding.shortName} reaches {simulatedUserTotal} registrations. Add {leaderStanding.registrations - simulatedUserTotal + 1} more to capture #1!
                  </>
                )}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
