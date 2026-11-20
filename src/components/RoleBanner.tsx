'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRole } from '@/context/RoleContext';
import { UserCheck, Award, Zap, ShieldAlert, ArrowRight, RefreshCw } from 'lucide-react';

export function RoleBanner() {
  const pathname = usePathname();
  const { role, activeStudent, activeAmbassador, setRole } = useRole();

  // Clean up the home page header: do not display role banners on the overview page
  if (pathname === '/') {
    return null;
  }

  if (role === 'student') {
    return (
      <div className="bg-emerald-950/40 border-b border-emerald-900/40 py-2.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2 text-emerald-300">
            <span className="px-1.5 py-0.5 rounded bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 text-[10px] font-mono font-semibold">
              Student View
            </span>
            <UserCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Persona: <strong>{activeStudent.name}</strong> ({activeStudent.college}) • Growth Score:{' '}
              <strong className="text-white font-mono">{activeStudent.growthScore} pts</strong> • Referral Code:{' '}
              <strong className="text-white font-mono bg-emerald-900/50 px-1.5 py-0.5 rounded border border-emerald-800/50">
                {activeStudent.referralCode}
              </strong>
            </span>
          </div>
          <div className="flex items-center space-x-3 text-slate-300">
            <Link
              href="/student/referrals"
              className="inline-flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 font-medium underline underline-offset-2"
            >
              <span>View Your Referral Hub</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
            <span className="text-slate-600">|</span>
            <button
              onClick={() => setRole('admin')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Switch to Admin View
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (role === 'ambassador') {
    return (
      <div className="bg-sky-950/40 border-b border-sky-900/40 py-2.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2 text-sky-300">
            <span className="px-1.5 py-0.5 rounded bg-sky-900/60 text-sky-300 border border-sky-700/50 text-[10px] font-mono font-semibold">
              Ambassador View
            </span>
            <Award className="w-4 h-4 text-sky-400 shrink-0" />
            <span>
              Persona: Campus Lead <strong>{activeAmbassador.name}</strong> ({activeAmbassador.college}) • Campus
              Rank: <strong className="text-white">#{activeAmbassador.rank}</strong> • Attributed Registrations:{' '}
              <strong className="text-white font-mono">{activeAmbassador.registrations}</strong>
            </span>
          </div>
          <div className="flex items-center space-x-3 text-slate-300">
            <Link
              href="/ambassador/assets"
              className="inline-flex items-center space-x-1 text-sky-400 hover:text-sky-300 font-medium underline underline-offset-2"
            >
              <span>Get WhatsApp Broadcast Copy</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
            <span className="text-slate-600">|</span>
            <button
              onClick={() => setRole('admin')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Switch to Admin View
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-indigo-950/30 border-b border-indigo-900/40 py-2.5 px-4 text-xs">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2 text-indigo-300">
          <span className="px-1.5 py-0.5 rounded bg-indigo-900/60 text-indigo-300 border border-indigo-700/50 text-[10px] font-mono font-semibold">
            Admin War Room
          </span>
          <Zap className="w-4 h-4 text-indigo-400 shrink-0" />
          <span>
            <strong>Growth Lead Command:</strong> Spend to Date: <strong className="text-white">₹2,000 committed</strong> (₹1,150 deployed) • Realized CAC: <strong className="text-rose-300">₹5.85</strong> (₹2k ÷ 342) • Target CAC: <strong className="text-emerald-400">₹4.00</strong> (at 500).
          </span>
        </div>
        <div className="flex items-center space-x-3 text-slate-300">
          <Link
            href="/admin/simulator"
            className="inline-flex items-center space-x-1 text-indigo-400 hover:text-indigo-300 font-medium underline underline-offset-2"
          >
            <span>Open 500-Target Growth Simulator</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
          <span className="text-slate-600">|</span>
          <button
            onClick={() => setRole('student')}
            className="text-slate-400 hover:text-emerald-400 transition-colors"
          >
            Test as Student
          </button>
        </div>
      </div>
    </div>
  );
}
