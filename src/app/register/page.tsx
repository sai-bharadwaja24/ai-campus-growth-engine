'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle, Gift } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useRole } from '@/context/RoleContext';

interface ReferrerInfo {
  name: string;
  college: string;
  role: string;
  referral_code: string;
}

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const refCodeParam = searchParams.get('ref') || '';
  const { incrementRegistrationCount, addRecentRegistration } = useRole();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: 'Amrita Vishwa Vidyapeetham',
    city: 'Coimbatore',
    branch: 'Computer Science & Engineering',
    graduation_year: '2026',
    ai_experience: 'beginner',
    goal: 'Build my first AI project',
    referred_by: refCodeParam,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [duplicateWarning, setDuplicateWarning] = useState('');
  const [referrer, setReferrer] = useState<ReferrerInfo | null>(null);

  useEffect(() => {
    if (!refCodeParam) return;
    fetch(`/api/referral/resolve?code=${encodeURIComponent(refCodeParam)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.valid && data.referrer) {
          setReferrer(data.referrer);
          setFormData((prev) => ({ ...prev, referred_by: data.referrer.referral_code }));
        } else {
          setReferrer(null);
        }
      })
      .catch(() => {
        setReferrer(null);
      });
  }, [refCodeParam]);

  const collegeOptions = [
    'Amrita Vishwa Vidyapeetham',
    'RV College of Engineering',
    'Chaitanya Bharathi Institute of Technology (CBIT)',
    'Vellore Institute of Technology (VIT)',
    'PES University',
    'SRM Institute of Science and Technology',
    'BITS Pilani Hyderabad Campus',
    'Osmania University College of Engineering',
    'VNR Vignana Jyothi Institute',
    'BMS College of Engineering',
    'MIT Manipal',
    'PSG College of Technology',
    'COEP Technological University',
    'Thapar Institute of Engg & Tech',
    'Delhi Technological University (DTU)',
    'Other Engineering College',
  ];

  const goals = [
    'Build my first AI project',
    'Improve placement profile',
    'Learn GenAI',
    'Build a resume project',
    'Explore AI careers',
    'Prepare for interviews',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setDuplicateWarning('');

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.status === 409) {
        setDuplicateWarning(data.error);
        setIsLoading(false);
        return;
      }

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to complete registration.');
      }

      // Sync state live across admin war room and recent feeds
      incrementRegistrationCount(1);
      addRecentRegistration({
        name: data.student.name,
        college: data.student.college,
        code: data.student.referral_code,
      });

      router.push(`/success?code=${data.student.referral_code}&name=${encodeURIComponent(data.student.name)}`);
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* INBOUND REFERRAL SOCIAL PROOF BANNER */}
      {referrer && (
        <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-950/90 via-purple-950/80 to-slate-900 border border-indigo-500/50 shadow-xl shadow-indigo-950/60 animate-in fade-in duration-300">
          <div className="flex items-start sm:items-center space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-xl shrink-0">
              👋
            </div>
            <div className="space-y-0.5">
              <div className="text-sm sm:text-base font-bold text-white">
                You've been invited by <span className="text-indigo-300 font-extrabold">{referrer.name}</span> from <span className="text-purple-300 font-semibold">{referrer.college}</span>
              </div>
              <p className="text-xs text-slate-300">
                Register to unlock the <strong className="text-emerald-400">AI Project Blueprint</strong> together.
              </p>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-indigo-900/60 flex flex-wrap items-center justify-between gap-2 text-xs text-indigo-200">
            <div className="flex items-center space-x-2">
              <Badge variant="purple" className="font-mono text-[10px]">Invite Code: {referrer.referral_code}</Badge>
              <span className="text-[11px] text-slate-300">Verified Campus Invitation</span>
            </div>
            <div className="flex items-center space-x-1.5 text-emerald-400 font-medium text-[11px]">
              <Gift className="w-3.5 h-3.5" />
              <span>Both unlock +25 growth points instantly</span>
            </div>
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <Badge variant="purple" className="mb-2">Free 60-Minute Masterclass</Badge>
        <h1 className="text-3xl font-extrabold text-white">Student Registration Pass</h1>
        <p className="text-sm text-slate-400 mt-1 max-w-lg mx-auto">
          Reserve your seat for <strong className="text-slate-200">"Build Your First AI Project in 60 Minutes"</strong> and instantly unlock your exclusive AI Resume Kit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="border-slate-800 bg-slate-900/60">
            <CardHeader>
              <CardTitle className="text-base text-white">Engineering Student Profile</CardTitle>
              <CardDescription>
                We tailor the starter templates to your branch and career placement goal.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <div className="mb-4 p-3 rounded-lg bg-rose-950/60 border border-rose-800 text-rose-300 text-xs">
                  {error}
                </div>
              )}

              {duplicateWarning && (
                <div className="mb-4 p-3 rounded-lg bg-amber-950/60 border border-amber-800 text-amber-300 text-xs flex items-start space-x-2">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <strong>Duplicate Registration:</strong> {duplicateWarning}
                    <div className="mt-1">
                      <button
                        type="button"
                        onClick={() => router.push('/student/dashboard')}
                        className="underline font-bold text-amber-200 hover:text-white"
                      >
                        Proceed to Your Student Dashboard →
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sai Bharadwaja"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rahul@rvce.edu.in"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Engineering College *</label>
                    <select
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                    >
                      {collegeOptions.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Branch / Department</label>
                    <input
                      type="text"
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      placeholder="e.g. Computer Science, IT, ECE"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Graduation Year</label>
                    <select
                      value={formData.graduation_year}
                      onChange={(e) => setFormData({ ...formData, graduation_year: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                    >
                      <option value="2025">2025 (Final Year)</option>
                      <option value="2026">2026 (Pre-Final / Final Year)</option>
                      <option value="2027">2027</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Current AI Experience</label>
                    <select
                      value={formData.ai_experience}
                      onChange={(e) => setFormData({ ...formData, ai_experience: e.target.value as any })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                    >
                      <option value="beginner">Beginner (Basic Python, no AI)</option>
                      <option value="intermediate">Intermediate (Used ChatGPT/APIs)</option>
                      <option value="advanced">Advanced (Built basic ML models)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Primary Learning Goal *</label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                  >
                    {goals.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Referral / Invite Code (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.referred_by}
                    onChange={(e) => setFormData({ ...formData, referred_by: e.target.value })}
                    placeholder="e.g. AI60-RAHUL42 or ANANYA-CBIT"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 uppercase font-mono"
                  />
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    Supported format: AI60-NAME42. Unlocks +25 growth points for both of you.
                  </span>
                </div>

                <div className="pt-2">
                  <Button type="submit" size="lg" className="w-full" isLoading={isLoading}>
                    Claim Free Workshop Pass & Instant Referral Code
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="border-indigo-900/50 bg-indigo-950/20">
            <CardHeader className="p-4">
              <CardTitle className="text-sm text-indigo-300">What You Get in 60 Mins</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-3 text-xs text-slate-300">
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Live Deployed Project:</strong> Add an interactive LLM tool with GitHub link directly to your placement resume.
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Zero Local Installation:</strong> 100% runs on Google Colab in browser.
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Placement Interview Defense Guide:</strong> Answers to top 10 questions interviewers ask.
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-800 bg-slate-900/50">
            <CardContent className="p-4 text-xs text-slate-400 space-y-2">
              <div className="flex items-center space-x-2 text-slate-200 font-semibold">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                <span>Anti-Duplicate Attribution</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Unique student IDs and verification checks safeguard against duplicate emails and phone numbers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen py-16 text-center text-slate-400">
          Loading registration form...
        </div>
      }
    >
      <RegisterForm />
    </Suspense>
  );
}
