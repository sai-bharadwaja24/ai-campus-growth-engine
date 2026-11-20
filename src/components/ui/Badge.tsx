import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'info' | 'purple' | 'outline' | 'danger';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variants = {
    default: 'bg-slate-800 text-slate-300 border-slate-700',
    success: 'bg-emerald-950/70 text-emerald-300 border-emerald-800/60',
    warning: 'bg-amber-950/70 text-amber-300 border-amber-800/60',
    info: 'bg-sky-950/70 text-sky-300 border-sky-800/60',
    purple: 'bg-indigo-950/70 text-indigo-300 border-indigo-800/60',
    danger: 'bg-rose-950/70 text-rose-300 border-rose-800/60',
    outline: 'border-slate-700 text-slate-300 bg-transparent',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide transition-colors',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
