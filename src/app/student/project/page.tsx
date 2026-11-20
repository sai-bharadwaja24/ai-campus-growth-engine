'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileCode,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Zap,
  Award,
  HelpCircle,
  Lightbulb,
  Check,
  Code2,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { evaluateAIProjectPreTask, ProjectPreTaskResult } from '@/lib/ai-intelligence';

export default function StudentProjectPage() {
  const [projectTitle, setProjectTitle] = useState('Campus Placement ATS Resume-JD Matcher');
  const [problemStatement, setProblemStatement] = useState(
    'Final-year engineering students frequently fail automated ATS resume screenings because resumes lack specific keyword alignment with target software company job descriptions.'
  );
  const [targetUsers, setTargetUsers] = useState(
    'Final-year B.Tech students applying for software developer, data engineer, and AI roles.'
  );

  const [evaluation, setEvaluation] = useState<ProjectPreTaskResult>(() =>
    evaluateAIProjectPreTask(
      'Campus Placement ATS Resume-JD Matcher',
      'Final-year engineering students frequently fail automated ATS resume screenings because resumes lack specific keyword alignment with target software company job descriptions.',
      'Final-year B.Tech students applying for software developer, data engineer, and AI roles.'
    )
  );

  const [isEvaluating, setIsEvaluating] = useState(false);
  const [savedNotice, setSavedNotice] = useState(false);

  const handleEvaluate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEvaluating(true);
    setTimeout(() => {
      const result = evaluateAIProjectPreTask(projectTitle, problemStatement, targetUsers);
      setEvaluation(result);
      setIsEvaluating(false);
      setSavedNotice(true);
      setTimeout(() => setSavedNotice(false), 3000);
    }, 300);
  };

  const loadSample = (type: 'ats' | 'lab' | 'email') => {
    if (type === 'ats') {
      setProjectTitle('Campus Placement ATS Resume-JD Matcher');
      setProblemStatement('Final-year engineering students fail automated ATS screenings due to missing technical keywords. This tool matches resume text against company JDs.');
      setTargetUsers('Final-year B.Tech students applying for campus software drives.');
      setEvaluation(evaluateAIProjectPreTask(
        'Campus Placement ATS Resume-JD Matcher',
        'Final-year engineering students fail automated ATS screenings due to missing technical keywords.',
        'Final-year B.Tech students applying for campus software drives.'
      ));
    } else if (type === 'lab') {
      setProjectTitle('Automated Engineering Lab Report Assistant');
      setProblemStatement('Engineering students spend 15+ hours weekly formatting raw sensor readings and circuit data into formatted IEEE lab reports.');
      setTargetUsers('Mechanical, ECE, and CSE students doing experimental lab courses.');
      setEvaluation(evaluateAIProjectPreTask(
        'Automated Engineering Lab Report Assistant',
        'Engineering students spend 15+ hours weekly formatting raw sensor readings and circuit data into formatted IEEE lab reports.',
        'Mechanical, ECE, and CSE students doing experimental lab courses.'
      ));
    } else {
      setProjectTitle('AI Smart Email & Cover Letter Tailor for Campus Drives');
      setProblemStatement('Students send generic application emails to campus recruiters, resulting in low interview callback rates.');
      setTargetUsers('All engineering branches attending campus placement drives.');
      setEvaluation(evaluateAIProjectPreTask(
        'AI Smart Email & Cover Letter Tailor for Campus Drives',
        'Students send generic application emails to campus recruiters, resulting in low interview callback rates.',
        'All engineering branches attending campus placement drives.'
      ));
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Page Header with LOW FRICTION callout */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">Optional AI Project Idea</h1>
            <Badge variant="success">OPTIONAL — NOT REQUIRED TO ATTEND</Badge>
          </div>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            <strong className="text-indigo-300">LOW FRICTION → HIGH ENGAGEMENT:</strong> Submitting an idea is 100% optional. If you don't submit an idea, you will build directly alongside the instructor using the pre-configured starter capstone during the live 60-minute session.
          </p>
        </div>

        {/* Quick Sample Templates */}
        <div className="flex items-center space-x-2 text-xs">
          <span className="text-slate-400 text-[11px] hidden sm:inline">Try Sample:</span>
          <Button size="sm" variant="secondary" onClick={() => loadSample('ats')}>
            ATS Matcher
          </Button>
          <Button size="sm" variant="secondary" onClick={() => loadSample('lab')}>
            Lab Assistant
          </Button>
          <Button size="sm" variant="secondary" onClick={() => loadSample('email')}>
            Email Tailor
          </Button>
        </div>
      </div>

      {/* Reassurance Banner */}
      <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-800/60 text-xs text-indigo-200 flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
          <span>
            <strong>Zero Pressure Guarantee:</strong> Every registered student receives pre-built Google Colab starter code and free API keys on Day 7.
          </span>
        </div>
        <Link href="/student/readiness" className="text-indigo-300 hover:text-white underline text-[11px] whitespace-nowrap ml-2">
          View 2-Min Setup Checklist →
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Form: 3 Simple Inputs */}
        <div className="lg:col-span-6 space-y-4">
          <Card className="border-slate-800 bg-slate-900/60">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-bold text-white flex items-center">
                <FileCode className="w-4 h-4 mr-2 text-indigo-400" />
                Your Project Concept (3 Simple Inputs)
              </CardTitle>
              <CardDescription>
                Share what you'd like to build for instant mentor diagnosis.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleEvaluate} className="space-y-4 text-xs">
                {/* Input 1: Project Idea / Title */}
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    1. Project Idea / Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    placeholder="e.g. Campus Placement ATS Resume-JD Matcher"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                  <span className="text-[10px] text-slate-500 mt-0.5 block">What do you want to call this tool?</span>
                </div>

                {/* Input 2: Problem Statement */}
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    2. Problem Statement *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={problemStatement}
                    onChange={(e) => setProblemStatement(e.target.value)}
                    placeholder="e.g. Final-year students fail automated ATS screenings because resumes lack target keywords."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                  <span className="text-[10px] text-slate-500 mt-0.5 block">What specific friction does it solve?</span>
                </div>

                {/* Input 3: Target User */}
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    3. Target User *
                  </label>
                  <input
                    type="text"
                    required
                    value={targetUsers}
                    onChange={(e) => setTargetUsers(e.target.value)}
                    placeholder="e.g. Final-year engineering students applying for software jobs"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                  <span className="text-[10px] text-slate-500 mt-0.5 block">Who will actually use this project?</span>
                </div>

                <div className="pt-2 flex items-center space-x-3">
                  <Button type="submit" size="md" variant="primary" isLoading={isEvaluating} className="w-full">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Diagnose My Project Idea
                  </Button>
                </div>

                {savedNotice && (
                  <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Project concept diagnosed & saved to your workshop profile!</span>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Evaluator Output: Structured Blueprint */}
        <div className="lg:col-span-6 space-y-4">
          <Card className="border-indigo-900/60 bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-900">
            <CardHeader className="pb-3 border-b border-slate-800">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-bold text-white flex items-center">
                  <Award className="w-4 h-4 mr-2 text-emerald-400" />
                  Instant AI Blueprint Diagnostic
                </CardTitle>
                <Badge variant="purple">Placement Evaluator</Badge>
              </div>
              <CardDescription className="text-xs">
                Evaluator feedback based on recruiter expectations for final-year engineering projects.
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-4 space-y-4 text-xs">
              {/* Output 1: Project Category */}
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-[10px] uppercase font-mono text-slate-400 font-bold block">
                  Project Category
                </span>
                <span className="text-white font-semibold text-sm mt-0.5 block">
                  {evaluation.category}
                </span>
              </div>

              {/* Output 2: Difficulty Level */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-[10px] uppercase font-mono text-slate-400 font-bold block">
                    Difficulty Level
                  </span>
                  <div className="mt-1 flex items-center space-x-2">
                    <Badge variant={evaluation.complexity === 'Beginner' ? 'success' : evaluation.complexity === 'Intermediate' ? 'info' : 'warning'}>
                      {evaluation.complexity}
                    </Badge>
                    <span className="text-[11px] text-slate-400">60-Min Feasible</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-[10px] uppercase font-mono text-slate-400 font-bold block">
                    Estimated Build Time
                  </span>
                  <span className="text-emerald-400 font-bold font-mono text-sm mt-1 block">
                    45–55 Minutes
                  </span>
                </div>
              </div>

              {/* Output 3: Suggested AI Approach */}
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] uppercase font-mono text-indigo-400 font-bold block">
                  Suggested AI Architecture & Approach
                </span>
                <p className="text-white font-medium text-xs">
                  {evaluation.recommendedTech}
                </p>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Utilizes structured prompt engineering and zero-setup cloud execution to deploy a live shareable endpoint.
                </p>
              </div>

              {/* Output 4: Next Step in Live Workshop */}
              <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/50 space-y-1">
                <span className="text-[10px] uppercase font-mono text-emerald-400 font-bold block">
                  Next Step in Live Workshop
                </span>
                <p className="text-slate-200 text-xs">
                  {evaluation.nextStep}
                </p>
                <p className="text-[11px] text-emerald-300/80 italic mt-1">
                  💡 Tip: {evaluation.improvementSuggestion}
                </p>
              </div>

              <div className="pt-2 flex justify-between items-center text-xs">
                <Link href="/student/dashboard" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center">
                  ← Back to Student Hub
                </Link>
                <Link href="/student/readiness" className="text-slate-400 hover:text-white flex items-center">
                  Review 7-Step Checklist →
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
