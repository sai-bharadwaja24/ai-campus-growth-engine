'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { TrendingUp, Users, ArrowUpRight, Calendar, Zap, Sparkles } from 'lucide-react';

interface DayVelocity {
  day: string;
  shortLabel: string;
  direct: number;
  referral: number;
  total: number;
  highlight: string;
}

const VELOCITY_DATA: DayVelocity[] = [
  { day: 'Day 1 (Mon)', shortLabel: 'Day 1', direct: 18, referral: 4, total: 22, highlight: 'Ambassador Kickoff (12 Leads)' },
  { day: 'Day 2 (Tue)', shortLabel: 'Day 2', direct: 32, referral: 14, total: 46, highlight: 'AI Share Copilot WhatsApp Rollout' },
  { day: 'Day 3 (Wed)', shortLabel: 'Day 3', direct: 45, referral: 36, total: 81, highlight: 'Pre-Task Concept Blueprint Unlock' },
  { day: 'Day 4 (Today)', shortLabel: 'Day 4', direct: 56, referral: 64, total: 120, highlight: 'Campus Battle 8:30 PM Hostel Surge' },
  { day: 'Day 5 (Fri)', shortLabel: 'Day 5', direct: 48, referral: 55, total: 103, highlight: 'Milestone Scarcity Push (Final 60 Seats)' },
  { day: 'Day 6 (Sat)', shortLabel: 'Day 6', direct: 35, referral: 48, total: 83, highlight: 'Google Colab Pre-Flight & .ics Sync' },
  { day: 'Day 7 (Sun)', shortLabel: 'Day 7', direct: 22, referral: 28, total: 50, highlight: 'Live Workshop & Capstone Issuance' },
];

export function ReferralVelocityChart() {
  const [hoveredDay, setHoveredDay] = useState<DayVelocity | null>(VELOCITY_DATA[3]);

  const maxTotal = 130;
  const maxBarHeight = 150; // pixels
  const todayTotal = VELOCITY_DATA[3].total;
  const yesterdayTotal = VELOCITY_DATA[2].total;
  const velocityDiff = todayTotal - yesterdayTotal;
  const velocityPct = Math.round((velocityDiff / yesterdayTotal) * 100);

  return (
    <Card className="border-indigo-900/60 bg-slate-900/90 shadow-xl overflow-hidden">
      <CardHeader className="pb-3 border-b border-slate-800/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                TELEMETRY VELOCITY
              </span>
              <Badge variant="success" className="text-[10px]">Real-time Inflow</Badge>
            </div>
            <CardTitle className="text-base font-bold text-white tracking-tight mt-0.5 flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-emerald-400" />
              Referral Velocity & Daily Inflow Graph
            </CardTitle>
            <CardDescription className="text-xs text-slate-300">
              Comparing Today vs Yesterday, and tracking the viral compounding transition across the 7-day sprint.
            </CardDescription>
          </div>

          <div className="flex items-center space-x-3 text-xs bg-slate-950 p-2 rounded-lg border border-slate-800">
            <span className="flex items-center text-slate-300 font-medium">
              <span className="w-3 h-3 rounded-sm bg-sky-500 mr-1.5 shadow-sm" />
              Ambassador Direct
            </span>
            <span className="flex items-center text-slate-300 font-medium">
              <span className="w-3 h-3 rounded-sm bg-emerald-400 mr-1.5 shadow-sm" />
              Viral Student Referrals
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-4 space-y-5">
        {/* Metric Comparison Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-950 border border-emerald-900/50 shadow-sm">
            <span className="text-[10px] uppercase font-mono text-slate-400 block">Today's Inflow</span>
            <div className="flex items-baseline space-x-2 mt-0.5">
              <span className="text-2xl font-bold font-mono text-white">{todayTotal}</span>
              <span className="text-[11px] font-bold text-emerald-400 flex items-center">
                <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" />
                +{velocityPct}%
              </span>
            </div>
            <span className="text-[10px] text-slate-500 mt-0.5 block font-mono">Day 4 vs Day 3</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 shadow-sm">
            <span className="text-[10px] uppercase font-mono text-slate-400 block">Yesterday's Inflow</span>
            <span className="text-2xl font-bold font-mono text-slate-300 mt-0.5 block">{yesterdayTotal}</span>
            <span className="text-[10px] text-slate-500 mt-0.5 block font-mono">45 Direct + 36 Viral</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 shadow-sm">
            <span className="text-[10px] uppercase font-mono text-slate-400 block">Viral Inflow Share</span>
            <span className="text-2xl font-bold font-mono text-emerald-400 mt-0.5 block">53.3%</span>
            <span className="text-[10px] text-slate-500 mt-0.5 block font-mono">64 of 120 signups today</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 shadow-sm">
            <span className="text-[10px] uppercase font-mono text-slate-400 block">Peak Inflow Window</span>
            <span className="text-2xl font-bold font-mono text-indigo-300 mt-0.5 block">8:30 – 10:30 PM</span>
            <span className="text-[10px] text-slate-500 mt-0.5 block font-mono">Post-Dinner Hostel Blitz</span>
          </div>
        </div>

        {/* Bar Chart Container */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 relative">
          {/* Background Reference Lines */}
          <div className="absolute inset-x-4 top-6 bottom-16 pointer-events-none flex flex-col justify-between opacity-15">
            <div className="border-b border-dashed border-slate-600 w-full" />
            <div className="border-b border-dashed border-slate-600 w-full" />
            <div className="border-b border-dashed border-slate-600 w-full" />
            <div className="border-b border-dashed border-slate-600 w-full" />
          </div>

          {/* Bars Flexbox */}
          <div className="h-56 flex items-end justify-between gap-2 sm:gap-6 px-2 sm:px-6 relative z-10">
            {VELOCITY_DATA.map((item, idx) => {
              const isToday = idx === 3;
              const isProjected = idx > 3;

              // Explicit pixel calculation guarantees rendering across all browsers
              const directHeightPx = Math.max(8, Math.round((item.direct / maxTotal) * maxBarHeight));
              const referralHeightPx = Math.max(8, Math.round((item.referral / maxTotal) * maxBarHeight));
              const totalHeightPx = directHeightPx + referralHeightPx;

              const isHovered = hoveredDay?.day === item.day;

              return (
                <div
                  key={item.day}
                  onMouseEnter={() => setHoveredDay(item)}
                  onClick={() => setHoveredDay(item)}
                  className="flex-1 flex flex-col items-center group cursor-pointer h-full justify-end select-none"
                >
                  {/* Total Count Badge on Top of Bar */}
                  <div className={`mb-2 font-mono font-bold transition-all text-center ${
                    isToday
                      ? 'text-xs text-emerald-300 scale-110'
                      : isHovered
                      ? 'text-xs text-white scale-105'
                      : 'text-[11px] text-slate-300'
                  }`}>
                    {item.total}
                  </div>

                  {/* Stacked Vertical Bar */}
                  <div
                    style={{ height: `${totalHeightPx}px` }}
                    className={`w-full max-w-[48px] min-w-[28px] flex flex-col justify-end rounded-t-lg overflow-hidden transition-all duration-200 shadow-md ${
                      isToday
                        ? 'ring-2 ring-emerald-400 ring-offset-2 ring-offset-slate-950 shadow-emerald-500/30'
                        : isHovered
                        ? 'ring-1 ring-indigo-400 ring-offset-1 ring-offset-slate-950'
                        : ''
                    } ${isProjected ? 'opacity-50 hover:opacity-80' : 'opacity-100'}`}
                  >
                    {/* Top Segment: Viral Student Referrals (Green) */}
                    <div
                      style={{ height: `${referralHeightPx}px` }}
                      className={`w-full transition-colors flex items-center justify-center ${
                        isToday
                          ? 'bg-gradient-to-t from-emerald-500 to-emerald-400'
                          : 'bg-emerald-500 hover:bg-emerald-400'
                      }`}
                      title={`${item.referral} Viral Referrals`}
                    >
                      {referralHeightPx > 22 && (
                        <span className="text-[10px] font-mono font-bold text-slate-950">
                          {item.referral}
                        </span>
                      )}
                    </div>

                    {/* Bottom Segment: Direct Ambassador (Sky Blue) */}
                    <div
                      style={{ height: `${directHeightPx}px` }}
                      className={`w-full transition-colors flex items-center justify-center border-t border-slate-900/40 ${
                        isToday
                          ? 'bg-gradient-to-t from-sky-600 to-sky-400'
                          : 'bg-sky-500 hover:bg-sky-400'
                      }`}
                      title={`${item.direct} Ambassador Direct`}
                    >
                      {directHeightPx > 22 && (
                        <span className="text-[10px] font-mono font-bold text-slate-950">
                          {item.direct}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* X-Axis Label */}
                  <div className="mt-3 text-center w-full">
                    <span
                      className={`text-xs font-mono block transition-colors ${
                        isToday
                          ? 'text-emerald-300 font-extrabold'
                          : isHovered
                          ? 'text-white font-bold'
                          : isProjected
                          ? 'text-slate-500'
                          : 'text-slate-400 font-medium'
                      }`}
                    >
                      {item.shortLabel}
                    </span>
                    {isToday && (
                      <span className="text-[9px] font-mono text-emerald-400 block font-bold mt-0.5">
                        (Today)
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Day Inspect Footer Card */}
        {hoveredDay && (
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center space-x-2.5">
              <Calendar className="w-4 h-4 text-indigo-400 shrink-0" />
              <div>
                <span className="font-bold text-white font-mono">{hoveredDay.day}:</span>{' '}
                <span className="text-slate-300">
                  Total <strong className="text-white">{hoveredDay.total}</strong> registrations (
                  <span className="text-sky-400 font-semibold">{hoveredDay.direct} direct ambassador</span> +{' '}
                  <span className="text-emerald-400 font-semibold">{hoveredDay.referral} viral peer invites</span>)
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <Badge variant="purple" className="text-[10px] font-mono">
                {hoveredDay.highlight}
              </Badge>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
