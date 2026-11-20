import type { Metadata } from 'next';
import './globals.css';
import { RoleProvider } from '@/context/RoleContext';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'AI Campus Growth Engine | 500-Student Acquisition System (NxtWave Growth Challenge)',
  description:
    'Simulated growth operating system engineered to acquire 500 final-year engineering students for Build Your First AI Project in 60 Minutes within 7 days on a ₹2,000 budget.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen flex flex-col selection:bg-indigo-500 selection:text-white">
        <RoleProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <footer className="border-t border-slate-900 bg-slate-950/80 py-8 px-4 text-center text-xs text-slate-500">
            <div className="max-w-7xl mx-auto space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-slate-300">NxtWave Growth Intern Challenge</span>
                  <span>•</span>
                  <span>Candidate: Sai Bharadwaja (Amrita Vishwa Vidyapeetham)</span>
                </div>
                <div className="text-slate-400 font-mono text-[11px] flex flex-wrap items-center justify-center gap-2">
                  <span>Day 4/7: <strong className="text-emerald-400">342 / 500</strong> (68.4%) vs <strong className="text-slate-300">286 Benchmark</strong> [+56 Ahead]</span>
                  <span>•</span>
                  <span>Spend: <strong className="text-white">₹2,000 committed</strong> (₹1,150 deployed)</span>
                  <span>•</span>
                  <span className="text-rose-300 font-semibold">Realized CAC: ₹5.85</span>
                  <span>•</span>
                  <span className="text-emerald-400 font-semibold">Target CAC: ₹4.00</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 border-t border-slate-900/60 pt-2 text-center">
                <strong>Relationship Disclosure:</strong> This application is an independent growth challenge submission developed solely for evaluation in the NxtWave Growth Intern Assessment. It is not affiliated with, sponsored by, or an official product of NxtWave.
              </p>
            </div>
          </footer>
        </RoleProvider>
      </body>
    </html>
  );
}
