import React from 'react';
import { Card, CardContent } from './Card';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  delta?: string;
  deltaType?: 'increase' | 'decrease' | 'neutral';
  icon?: React.ReactNode;
  tag?: string;
}

export function StatCard({ title, value, subtitle, delta, deltaType = 'increase', icon, tag }: StatCardProps) {
  return (
    <Card className="hover:border-slate-700 transition-colors">
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{title}</span>
          {icon && <div className="p-2 rounded-lg bg-slate-800/80 text-indigo-400">{icon}</div>}
        </div>
        <div className="mt-2 flex items-baseline justify-between">
          <div className="text-2xl font-bold tracking-tight text-white">{value}</div>
          {tag && (
            <span className="text-[11px] px-2 py-0.5 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-800/50">
              {tag}
            </span>
          )}
        </div>
        {(subtitle || delta) && (
          <div className="mt-2 flex items-center text-xs text-slate-400 space-x-1.5">
            {delta && (
              <span
                className={cn(
                  'font-semibold',
                  deltaType === 'increase' && 'text-emerald-400',
                  deltaType === 'decrease' && 'text-rose-400',
                  deltaType === 'neutral' && 'text-slate-400'
                )}
              >
                {delta}
              </span>
            )}
            {subtitle && <span className="text-slate-500 truncate">{subtitle}</span>}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
