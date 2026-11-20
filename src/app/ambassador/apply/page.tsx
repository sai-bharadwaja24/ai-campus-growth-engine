'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Award, ArrowRight, CheckCircle2, Users, School } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function AmbassadorApplyPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    college: 'Chaitanya Bharathi Institute of Technology (CBIT)',
    branch: 'Computer Science & Engineering',
    graduation_year: '2026',
    community_reach: '350',
    clubs: 'Coding Club / IEEE Student Branch',
    social_presence: 'LinkedIn campus influencer, WhatsApp CR',
    expected_reach: '400',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/ambassador/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit application.');
      }

      setSuccess(true);
      setTimeout(() => {
        router.push('/ambassador/dashboard');
      }, 2000);
    } catch (err: any) {
      alert(err.message || 'Error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <Badge variant="purple" className="mb-2">Campus Leadership Program</Badge>
        <h1 className="text-3xl font-extrabold text-white">Campus Ambassador Application</h1>
        <p className="text-sm text-slate-400 mt-1 max-w-lg mx-auto">
          Lead the 500-student AI sprint on your campus, earn performance bounties from the ₹1,000 pool, and receive direct PPO interview recommendations.
        </p>
      </div>

      {success ? (
        <Card className="border-emerald-800/60 bg-emerald-950/20 p-8 text-center">
          <CheckCircle2 className="w-12 h-12 mx-auto text-emerald-400 mb-3" />
          <h2 className="text-xl font-bold text-white">Application Approved!</h2>
          <p className="text-xs text-slate-300 mt-2">
            Welcome to the NxtWave Campus Lead network. Redirecting to your Ambassador Cockpit...
          </p>
        </Card>
      ) : (
        <Card className="border-slate-800 bg-slate-900/60">
          <CardHeader>
            <CardTitle className="text-base text-white">Ambassador Profile & Community Reach</CardTitle>
            <CardDescription>Tell us about your campus networks, clubs, and batch reach.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Ananya Reddy"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">College Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="e.g. ananya@cbit.ac.in"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">WhatsApp Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98490 12345"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">College Name *</label>
                  <input
                    type="text"
                    required
                    value={form.college}
                    onChange={(e) => setForm({ ...form, college: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Branch & Year</label>
                  <input
                    type="text"
                    value={form.branch}
                    onChange={(e) => setForm({ ...form, branch: e.target.value })}
                    placeholder="e.g. Computer Science, 2026"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Clubs / Student Societies</label>
                  <input
                    type="text"
                    value={form.clubs}
                    onChange={(e) => setForm({ ...form, clubs: e.target.value })}
                    placeholder="e.g. IEEE, CSI, GDG Lead, CR"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Estimated Campus WhatsApp Reach</label>
                  <input
                    type="number"
                    value={form.community_reach}
                    onChange={(e) => setForm({ ...form, community_reach: e.target.value })}
                    placeholder="e.g. 350 students"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Expected Registrations (Quota 50)</label>
                  <input
                    type="number"
                    value={form.expected_reach}
                    onChange={(e) => setForm({ ...form, expected_reach: e.target.value })}
                    placeholder="e.g. 50+"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Social Presence / Campus Rep Experience</label>
                <textarea
                  rows={2}
                  value={form.social_presence}
                  onChange={(e) => setForm({ ...form, social_presence: e.target.value })}
                  placeholder="Describe your student network and WhatsApp group access..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
                />
              </div>

              <div className="pt-2">
                <Button type="submit" size="lg" className="w-full" isLoading={isLoading}>
                  Submit Application & Activate Ambassador Cockpit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
