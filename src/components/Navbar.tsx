'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useRole } from '@/context/RoleContext';
import { RoleType } from '@/lib/types';
import {
  Sparkles,
  Users,
  BarChart3,
  BookOpen,
  Bell,
  Check,
  ChevronDown,
  Layers,
  Award,
  Zap,
  Target,
  FileCode,
  ShieldCheck,
  FlaskConical,
  Scale,
  Presentation,
  FileText,
} from 'lucide-react';

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { role, setRole, registrationCount } = useRole();
  const [showNotifications, setShowNotifications] = useState(false);
  const [unreadCount, setUnreadCount] = useState(2);

  const notifications = [
    {
      id: '1',
      title: 'Milestone Progress',
      text: 'You are 2 verified referrals away from unlocking Gold (1:1 Mentor Review).',
      time: '15m ago',
      unread: true,
    },
    {
      id: '2',
      title: 'Campus Battle Surge',
      text: 'Your college (RVCE) added 14 new registrations in the last 3 hours!',
      time: '1h ago',
      unread: true,
    },
    {
      id: '3',
      title: 'Classmate Joined',
      text: 'Abhishek Gowda registered using your link. +25 Growth Points awarded.',
      time: '3h ago',
      unread: false,
    },
    {
      id: '4',
      title: 'Workshop Broadcast',
      text: 'Sprint Day 4: 72 hours remaining until workshop live broadcast.',
      time: '5h ago',
      unread: false,
    },
  ];

  const rolePills: { role: RoleType; label: string; icon: React.ReactNode; color: string }[] = [
    {
      role: 'student',
      label: 'Student View',
      icon: <BookOpen className="w-3.5 h-3.5" />,
      color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    },
    {
      role: 'ambassador',
      label: 'Ambassador View',
      icon: <Users className="w-3.5 h-3.5" />,
      color: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
    },
    {
      role: 'admin',
      label: 'Growth Lead (Admin)',
      icon: <BarChart3 className="w-3.5 h-3.5" />,
      color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">
      {/* Global Top Banner: Explicitly Marked as SIMULATED with Realized vs Target CAC and Benchmark */}
      <div className="w-full bg-amber-500/15 border-b border-amber-500/30 py-1.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
          <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider shadow-sm">
            SIMULATED
          </span>
          <span className="text-amber-200 font-semibold">
            Sprint Day 4/7: <strong className="text-white">342 / 500 Actual (68.4%)</strong> vs <strong className="text-slate-300">286 Benchmark (57.1%)</strong> <span className="text-emerald-400 font-bold">[+56 Ahead (+11.3%)]</span>
          </span>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <span className="text-slate-300">
            Spend to Date: <strong className="text-white font-mono">₹2,000 committed</strong> (₹1,150 deployed)
          </span>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <span className="text-rose-300 font-semibold font-mono">
            Realized CAC: ₹5.85 <span className="text-slate-400 text-[10px]">(₹2,000 ÷ 342)</span>
          </span>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <span className="text-emerald-400 font-semibold font-mono">
            Target CAC: ₹4.00 <span className="text-slate-400 text-[10px]">(₹2,000 ÷ 500)</span>
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* Left: Brand / Logo */}
        <div className="flex items-center space-x-3 shrink-0">
          <Link href="/" className="flex items-center space-x-2.5 group shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform shrink-0">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-bold text-white text-xs sm:text-sm tracking-tight whitespace-nowrap">AI Campus Growth Engine</span>
                <span className="text-[9px] sm:text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/60 shrink-0">
                  Simulation OS
                </span>
              </div>
              <p className="text-[9px] sm:text-[10px] text-slate-400 font-mono hidden sm:block whitespace-nowrap">Independent Submission • NxtWave Growth Challenge</p>
            </div>
          </Link>

          {/* Compact Target Tracker Pill (Visible on large screens) */}
          <div className="hidden 2xl:flex items-center space-x-2 bg-slate-900/90 border border-slate-800 rounded-full px-3 py-1 text-xs font-mono shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 text-[11px]">Day 4:</span>
            <span className="text-white font-bold">{registrationCount || 342} / 500 (68.4%)</span>
            <span className="text-emerald-400 text-[11px] font-semibold">+56 Ahead</span>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-1 text-xs font-medium">
          <Link
            href="/"
            className={`px-2.5 py-1.5 rounded-md transition-colors ${
              pathname === '/' ? 'text-white bg-slate-800' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Overview
          </Link>
          <Link
            href="/workshop"
            className={`px-2.5 py-1.5 rounded-md transition-colors ${
              pathname === '/workshop' ? 'text-white bg-slate-800' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Workshop
          </Link>
          <Link
            href="/register"
            className={`px-2.5 py-1.5 rounded-md transition-colors ${
              pathname === '/register' ? 'text-white bg-slate-800' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Register Student
          </Link>
          <span className="text-slate-700">|</span>
          <Link
            href="/deck"
            className={`px-2.5 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
              pathname === '/deck'
                ? 'text-amber-300 bg-amber-950/50 font-bold ring-1 ring-amber-500/40'
                : 'text-amber-400/90 hover:text-amber-300 hover:bg-slate-900'
            }`}
          >
            <Presentation className="w-3.5 h-3.5 text-amber-400" />
            <span>Growth Deck</span>
          </Link>
          <Link
            href="/submission"
            className={`px-2.5 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
              pathname === '/submission'
                ? 'text-emerald-300 bg-emerald-950/60 font-bold ring-1 ring-emerald-500/50'
                : 'text-emerald-400 hover:text-emerald-300 hover:bg-slate-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>AI Notes & Review</span>
          </Link>
        </nav>

        {/* Right: Notifications & ALWAYS VISIBLE 3-Role Switcher (STUDENT, AMBASSADOR, ADMIN) */}
        <div className="flex items-center space-x-2 shrink-0 z-20">
          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                if (unreadCount > 0) setUnreadCount(0);
              }}
              className="p-1.5 sm:p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white relative shrink-0"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-3 z-50 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 font-semibold text-white">
                  <span>Growth Notifications</span>
                  <span className="text-[10px] text-slate-400">Live Telemetry</span>
                </div>
                <div className="divide-y divide-slate-800/60 max-h-72 overflow-y-auto">
                  {notifications.map((n) => (
                    <div key={n.id} className="py-2.5">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-indigo-300">{n.title}</span>
                        <span className="text-[10px] text-slate-500">{n.time}</span>
                      </div>
                      <p className="text-[11px] text-slate-300 mt-1">{n.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Role Switcher: Guaranteed All 3 Buttons (STUDENT, AMBASSADOR, ADMIN) Always Visible */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 shrink-0 shadow-sm" role="navigation" aria-label="Role Switcher">
            {rolePills.map((pill) => {
              const isSelected = role === pill.role;
              return (
                <button
                  key={pill.role}
                  onClick={() => {
                    setRole(pill.role);
                    if (pill.role === 'student') {
                      router.push('/student/dashboard');
                    } else if (pill.role === 'ambassador') {
                      router.push('/ambassador/dashboard');
                    } else if (pill.role === 'admin') {
                      router.push('/admin/dashboard');
                    }
                  }}
                  className={`flex items-center space-x-1 sm:space-x-1.5 px-2 sm:px-3 py-1.5 rounded-md text-xs font-semibold transition-all shrink-0 ${
                    isSelected
                      ? `${pill.color} border shadow-sm`
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                  title={`Switch to ${pill.label}`}
                >
                  {pill.icon}
                  <span className="text-[11px] font-mono tracking-tight font-bold">{pill.role.toUpperCase()}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contextual Sub-Navigation Bar based on active route */}
      {/* Contextual Sub-Navigation Bar based on active route */}
      {pathname.startsWith('/admin') && (
        <div className="border-t border-slate-800/60 bg-slate-950/70 px-4 py-1.5 overflow-x-auto">
          <div className="max-w-7xl mx-auto flex items-center space-x-1.5 text-[11px]">
            <span className="text-indigo-400 font-bold uppercase tracking-wider text-[10px] mr-1 flex items-center shrink-0">
              <BarChart3 className="w-3 h-3 mr-1" />
              Demo Core:
            </span>
            {/* 4 PRIMARY DEMO DESTINATIONS */}
            <Link
              href="/admin/dashboard"
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap font-medium ${
                pathname === '/admin/dashboard'
                  ? 'bg-indigo-600 text-white font-bold shadow-sm shadow-indigo-600/40'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              🎯 Command War Room
            </Link>
            <Link
              href="/admin/funnel"
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap font-medium ${
                pathname === '/admin/funnel'
                  ? 'bg-indigo-600 text-white font-bold shadow-sm shadow-indigo-600/40'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              📊 Funnel & Attribution
            </Link>
            <Link
              href="/admin/simulator"
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap font-medium ${
                pathname === '/admin/simulator'
                  ? 'bg-indigo-600 text-white font-bold shadow-sm shadow-indigo-600/40'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              ⚡ ₹2,000 Budget Simulator
            </Link>
            <Link
              href="/admin/ai-decision-log"
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap font-medium ${
                pathname === '/admin/ai-decision-log'
                  ? 'bg-indigo-600 text-white font-bold shadow-sm shadow-indigo-600/40'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              🧠 AI Decision Log
            </Link>
            <Link
              href="/deck"
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap font-medium flex items-center gap-1 ${
                pathname === '/deck'
                  ? 'bg-amber-600 text-white font-bold shadow-sm shadow-amber-600/40'
                  : 'text-amber-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Presentation className="w-3 h-3 text-amber-400" />
              <span>✨ Executive Pitch Deck</span>
            </Link>

            <span className="text-slate-700 mx-1 shrink-0">|</span>
            <span className="text-slate-500 text-[10px] uppercase font-mono tracking-wider shrink-0">Deep Dives:</span>

            {/* SECONDARY DEEP DIVES */}
            <Link
              href="/admin/colleges"
              className={`px-2 py-0.5 rounded transition-colors whitespace-nowrap ${
                pathname === '/admin/colleges' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Campus Battles
            </Link>
            <Link
              href="/admin/channels"
              className={`px-2 py-0.5 rounded transition-colors whitespace-nowrap ${
                pathname === '/admin/channels' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Channels
            </Link>
            <Link
              href="/admin/ambassadors"
              className={`px-2 py-0.5 rounded transition-colors whitespace-nowrap ${
                pathname === '/admin/ambassadors' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Ambassadors
            </Link>
            <Link
              href="/admin/experiments"
              className={`px-2 py-0.5 rounded transition-colors whitespace-nowrap ${
                pathname === '/admin/experiments' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Experiments Lab
            </Link>
            <Link
              href="/admin/insights"
              className={`px-2 py-0.5 rounded transition-colors whitespace-nowrap ${
                pathname === '/admin/insights' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Anti-Spam
            </Link>
          </div>
        </div>
      )}

      {pathname.startsWith('/student') && (
        <div className="border-t border-slate-800/60 bg-slate-950/70 px-4 py-1.5 overflow-x-auto">
          <div className="max-w-7xl mx-auto flex items-center space-x-1 text-[11px]">
            <span className="text-emerald-400 font-bold uppercase tracking-wider text-[10px] mr-2 flex items-center">
              <BookOpen className="w-3 h-3 mr-1" />
              Student Hub:
            </span>
            <Link
              href="/student/dashboard"
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                pathname === '/student/dashboard' ? 'bg-emerald-900/50 text-emerald-200 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/student/referrals"
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                pathname === '/student/referrals' ? 'bg-emerald-900/50 text-emerald-200 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              AI Share Copilot & Referrals
            </Link>
            <Link
              href="/student/readiness"
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                pathname === '/student/readiness' ? 'bg-emerald-900/50 text-emerald-200 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              7-Step Readiness Checklist
            </Link>
            <Link
              href="/student/project"
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                pathname === '/student/project' ? 'bg-emerald-900/50 text-emerald-200 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              AI Project Pre-Task & Evaluator
            </Link>
            <Link
              href="/student/leaderboard"
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                pathname === '/student/leaderboard' ? 'bg-emerald-900/50 text-emerald-200 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Campus Battle Leaderboard
            </Link>
            <Link
              href="/student/rewards"
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                pathname === '/student/rewards' ? 'bg-emerald-900/50 text-emerald-200 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Milestone Rewards
            </Link>
          </div>
        </div>
      )}

      {pathname.startsWith('/ambassador') && (
        <div className="border-t border-slate-800/60 bg-slate-950/70 px-4 py-1.5 overflow-x-auto">
          <div className="max-w-7xl mx-auto flex items-center space-x-1 text-[11px]">
            <span className="text-sky-400 font-bold uppercase tracking-wider text-[10px] mr-2 flex items-center">
              <Users className="w-3 h-3 mr-1" />
              Ambassador:
            </span>
            <Link
              href="/ambassador/dashboard"
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                pathname === '/ambassador/dashboard' ? 'bg-sky-900/50 text-sky-200 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Cockpit & Bounties
            </Link>
            <Link
              href="/ambassador/referrals"
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                pathname === '/ambassador/referrals' ? 'bg-sky-900/50 text-sky-200 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Referral Attribution
            </Link>
            <Link
              href="/ambassador/campaign"
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                pathname === '/ambassador/campaign' ? 'bg-sky-900/50 text-sky-200 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Campaign Stepper
            </Link>
            <Link
              href="/ambassador/assets"
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                pathname === '/ambassador/assets' ? 'bg-sky-900/50 text-sky-200 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              WhatsApp Copy & Assets
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
