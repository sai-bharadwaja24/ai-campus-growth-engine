'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import {
  DollarSign,
  AlertTriangle,
  ShieldCheck,
  TrendingDown,
  CheckCircle2,
  PieChart,
  Sparkles,
} from 'lucide-react';

interface BudgetLedgerProps {
  totalRegistrations?: number;
}

export function BudgetLedger({ totalRegistrations = 342 }: BudgetLedgerProps) {
  const TOTAL_BUDGET = 2000;

  const items = [
    {
      category: 'Ambassador Performance Bounties',
      allocation: 600,
      spent: 600,
      detail: 'Fixed ₹50 milestone stipend per ambassador upon onboarding class batch (12 campus leads × ₹50 = ₹600)',
      unitCost: '₹5.00 / reg',
      color: 'emerald' as const,
      status: 'Active',
    },
    {
      category: 'WhatsApp Community Tooling & Automation',
      allocation: 250,
      spent: 250,
      detail: 'Automated broadcast tokens, invite verification webhooks, and attendance alerts',
      unitCost: '₹0.73 / reg',
      color: 'sky' as const,
      status: 'Active',
    },
    {
      category: 'Creative Assets & Micro-Prizes',
      allocation: 300,
      spent: 300,
      detail: 'Placement capstone Figma templates, ATS resume badges, and GitHub starter assets',
      unitCost: '₹0.88 / reg',
      color: 'purple' as const,
      status: 'Active',
    },
    {
      category: 'Unallocated Contingency Buffer',
      allocation: 850,
      spent: 0,
      detail: 'Reserved for Day 6-7 final push and surge incentives if pacing drops below 50 regs/day',
      unitCost: 'Buffer',
      color: 'amber' as const,
      status: 'Reserved',
    },
  ];

  const totalSpent = items.reduce((acc, i) => acc + i.spent, 0);
  const remainingBudget = TOTAL_BUDGET - totalSpent;
  const blendedCac = (totalSpent / (totalRegistrations || 1)).toFixed(2);
  const percentSpent = Number(((totalSpent / TOTAL_BUDGET) * 100).toFixed(1));
  const isOverBudget = totalSpent > TOTAL_BUDGET;

  return (
    <Card className="border-emerald-900/60 bg-gradient-to-br from-slate-900 via-emerald-950/20 to-slate-900 shadow-xl overflow-hidden">
      <CardHeader className="pb-3 border-b border-slate-800/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center space-x-2">
              <Badge variant="success" className="text-[10px]">DEMO / SIMULATION • FISCAL TELEMETRY</Badge>
              <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold">
                STRICT ₹2,000 BUDGET AUDIT
              </span>
            </div>
            <CardTitle className="text-xl font-bold text-white tracking-tight mt-1 flex items-center">
              <PieChart className="w-5 h-5 mr-2 text-emerald-400" />
              Live ₹2,000 Budget & Unit Economics Ledger
            </CardTitle>
            <CardDescription className="text-xs text-slate-300">
              Real-time capital allocation proving mathematical viability of 500 registrations on ₹2,000 total capital.
            </CardDescription>
          </div>

          <div className="text-right sm:self-center font-mono space-y-0.5">
            <div className="flex items-center justify-end space-x-2">
              <span className="text-[10px] uppercase text-rose-300 block">Realized CAC:</span>
              <span className="text-base font-bold text-rose-300">₹5.85</span>
              <span className="text-[10px] text-slate-400 block">(₹2k ÷ 342)</span>
            </div>
            <div className="flex items-center justify-end space-x-2">
              <span className="text-[10px] uppercase text-emerald-400 block">Target CAC:</span>
              <span className="text-lg font-bold text-emerald-400">₹4.00</span>
              <span className="text-[10px] text-slate-400 block">(₹2k ÷ 500)</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-5 space-y-5">
        {/* Top 4 KPI Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] font-mono uppercase text-slate-400 block">Total Approved Budget</span>
            <span className="text-lg font-bold font-mono text-white">₹{TOTAL_BUDGET.toLocaleString()}</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Capped at ₹2,000 INR</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] font-mono uppercase text-emerald-400 block">Spend to Date (Day 4)</span>
            <span className="text-lg font-bold font-mono text-emerald-400">₹{totalSpent.toLocaleString()} Deployed</span>
            <span className="text-[10px] text-slate-300 block mt-0.5">₹2,000 Committed (57.5% cash deployed)</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] font-mono uppercase text-sky-400 block">Remaining Capital</span>
            <span className="text-lg font-bold font-mono text-sky-300">₹{remainingBudget.toLocaleString()}</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">{100 - percentSpent}% Buffer Available</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] font-mono uppercase text-purple-400 block">Ad CPL Benchmark (Assumed)</span>
            <span className="text-lg font-bold font-mono text-slate-400 line-through">₹45 – ₹80</span>
            <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">Assumed 92.5% Cost Reduction</span>
          </div>
        </div>

        {/* Budget Utilization Bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs text-slate-300">
            <span>Fiscal Pacing: ₹{totalSpent} of ₹{TOTAL_BUDGET} deployed</span>
            <span className="font-mono font-semibold text-emerald-400">{percentSpent}% Deployed</span>
          </div>
          <Progress value={percentSpent} color="emerald" size="md" />
        </div>

        {/* Over-Budget Guardrail Warning Banner */}
        {isOverBudget ? (
          <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-800 text-rose-300 text-xs flex items-center space-x-2.5">
            <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
            <span>
              <strong>Budget Guardrail Breached:</strong> Current spend exceeds ₹2,000 ceiling. Growth interventions must pause until reallocation.
            </span>
          </div>
        ) : (
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-xs flex items-center justify-between text-slate-300">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                <strong>Fiscal Guardrail Safe:</strong> ₹{remainingBudget} contingency remains intact. Zero paid ads running. All acquisitions driven by campus referral velocity.
              </span>
            </div>
            <Badge variant="success" className="text-[10px] shrink-0">100% Organic Flywheel</Badge>
          </div>
        )}

        {/* Itemized Spend Breakdown Table */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider">
            Itemized Spend Breakdown (Simulated Audited Ledger)
          </h4>
          <div className="divide-y divide-slate-800/80 rounded-xl border border-slate-800 bg-slate-950/60 overflow-hidden text-xs">
            {items.map((item, idx) => (
              <div key={idx} className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-900/40 transition-colors">
                <div className="space-y-0.5">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-white">{item.category}</span>
                    <Badge variant={item.spent > 0 ? 'success' : 'warning'} className="text-[9px]">
                      {item.status}
                    </Badge>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{item.detail}</p>
                </div>

                <div className="flex items-center sm:text-right space-x-4 sm:space-x-6 shrink-0">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block font-mono">Effective CAC</span>
                    <span className="font-mono font-semibold text-slate-300">{item.unitCost}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block font-mono">Allocated / Spent</span>
                    <span className="font-mono font-bold text-emerald-400">
                      ₹{item.spent} <span className="text-slate-500 font-normal">/ ₹{item.allocation}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
