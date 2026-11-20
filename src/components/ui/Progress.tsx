import React from 'react';
import { cn } from '@/lib/utils';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0 to 100
  color?: 'indigo' | 'emerald' | 'amber' | 'sky' | 'purple' | 'rose';
  size?: 'sm' | 'md' | 'lg';
}

export function Progress({ value, color = 'indigo', size = 'md', className, ...props }: ProgressProps) {
  const clamped = Math.min(100, Math.max(0, value));

  const colors = {
    indigo: 'bg-indigo-500 shadow-sm shadow-indigo-500/50',
    emerald: 'bg-emerald-500 shadow-sm shadow-emerald-500/50',
    amber: 'bg-amber-500 shadow-sm shadow-amber-500/50',
    sky: 'bg-sky-500 shadow-sm shadow-sky-500/50',
    purple: 'bg-purple-500 shadow-sm shadow-purple-500/50',
    rose: 'bg-rose-500 shadow-sm shadow-rose-500/50',
  };

  const sizes = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  };

  return (
    <div className={cn('w-full bg-slate-800 rounded-full overflow-hidden', sizes[size], className)} {...props}>
      <div
        className={cn('h-full transition-all duration-500 ease-out rounded-full', colors[color])}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
