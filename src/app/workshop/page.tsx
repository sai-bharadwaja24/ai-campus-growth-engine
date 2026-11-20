'use client';

import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Clock,
  Code,
  Share2,
  Layers,
  FileText,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function WorkshopPage() {
  const agenda = [
    {
      time: '00 - 10 min',
      title: 'LLM Foundations & Cloud API Key Provisioning',
      desc: 'Understand Gemini/Claude tokenization, streaming responses, and obtaining instant zero-cost keys for student development.',
      badge: 'Core Concept',
    },
    {
      time: '10 - 25 min',
      title: 'Prompt Engineering & Retrieval-Augmented Generation (RAG)',
      desc: 'Connect the AI model to custom data (PDFs/Placement questions) so the model answers branch-specific queries with citations.',
      badge: 'Architecture',
    },
    {
      time: '25 - 45 min',
      title: 'Building the Interactive Web Application UI',
      desc: 'Hook the model to a reactive frontend with live streaming text, file upload, and export buttons using Next.js / Streamlit.',
      badge: 'Hands-on Code',
    },
    {
      time: '45 - 60 min',
      title: 'Deployment & ATS-Optimized Placement Resume Bullets',
      desc: 'Deploy live to Vercel/Render and formulate 3 quantified bullet points explaining your project architecture to technical interviewers.',
      badge: 'Placement Deliverable',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="purple" className="mb-3">
          <Clock className="w-3.5 h-3.5 mr-1 text-indigo-400" />
          Interactive 60-Minute Masterclass
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          "Build Your First AI Project in 60 Minutes"
        </h1>
        <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
          Engineered specifically for final-year engineering students who need a genuine, deployable AI project on their GitHub and resume before placement drives.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/register">
            <Button size="lg">
              Register for Free Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center">
          <Layers className="w-5 h-5 mr-2 text-indigo-400" />
          60-Minute Minute-by-Minute Action Plan
        </h2>
        <div className="space-y-3">
          {agenda.map((item, idx) => (
            <Card key={idx} className="border-slate-800 bg-slate-900/60 hover:border-slate-700">
              <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start space-x-3">
                  <div className="px-2.5 py-1 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/60 font-mono text-xs font-bold shrink-0">
                    {item.time}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
                <Badge variant="outline" className="self-start sm:self-center shrink-0">
                  {item.badge}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-slate-800 bg-slate-900/40">
          <CardHeader className="p-5">
            <Code className="w-6 h-6 text-emerald-400 mb-2" />
            <CardTitle className="text-base text-white">Live GitHub Repo</CardTitle>
            <CardDescription>
              Clean, modular repository with README, architecture diagrams, and MIT license.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-slate-800 bg-slate-900/40">
          <CardHeader className="p-5">
            <FileText className="w-6 h-6 text-indigo-400 mb-2" />
            <CardTitle className="text-base text-white">ATS-Verified Bullets</CardTitle>
            <CardDescription>
              Formatted metrics and tech stack tags ready to copy-paste into Overleaf/Word resumes.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-slate-800 bg-slate-900/40">
          <CardHeader className="p-5">
            <Share2 className="w-6 h-6 text-sky-400 mb-2" />
            <CardTitle className="text-base text-white">Interview Defense</CardTitle>
            <CardDescription>
              Architectural decision trade-offs (e.g. why RAG instead of fine-tuning) for interview rounds.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
