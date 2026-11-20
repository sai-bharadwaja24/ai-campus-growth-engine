'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Users, ChevronRight, ChevronDown, Award, Zap, GitFork } from 'lucide-react';

interface TreeNodeProps {
  name: string;
  role: string;
  college: string;
  code: string;
  verifiedCount: number;
  qualityScore: number;
  children?: any[];
}

function TreeNode({ node }: { node: TreeNodeProps }) {
  const [expanded, setExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="ml-4 border-l border-slate-800 pl-4 py-2 text-xs">
      <div className="flex items-center space-x-2">
        {hasChildren ? (
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-5 h-5 rounded bg-slate-800 text-slate-300 flex items-center justify-center hover:bg-slate-700"
          >
            {expanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
          </button>
        ) : (
          <span className="w-5 h-5 flex items-center justify-center text-slate-600">•</span>
        )}

        <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center space-x-3">
          <div>
            <span className="font-semibold text-white">{node.name}</span>
            <span className="text-[11px] text-slate-400 ml-2">({node.college})</span>
          </div>
          <Badge variant={node.role === 'Ambassador' ? 'purple' : 'success'}>{node.role}</Badge>
          <span className="font-mono text-indigo-400 font-bold">{node.code}</span>
          <span className="text-[11px] text-emerald-400">Quality: {node.qualityScore}/100</span>
          {node.verifiedCount > 0 && (
            <span className="text-[11px] text-slate-400">({node.verifiedCount} Downline Referrals)</span>
          )}
        </div>
      </div>

      {hasChildren && expanded && (
        <div className="mt-1 space-y-1">
          {node.children!.map((child, idx) => (
            <TreeNode key={idx} node={child} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function AdminReferralsPage() {
  const referralTreeData: TreeNodeProps[] = [
    {
      name: 'Sai Bharadwaja',
      role: 'Ambassador',
      college: 'Amrita Vishwa Vidyapeetham',
      code: 'SAI-AMRITA',
      verifiedCount: 78,
      qualityScore: 98,
      children: [
        {
          name: 'Sai Bharadwaja',
          role: 'Student',
          college: 'Amrita Vishwa Vidyapeetham',
          code: 'AI60-SAI88',
          verifiedCount: 4,
          qualityScore: 96,
          children: [
            {
              name: 'Abhishek Gowda',
              role: 'Student',
              college: 'Amrita CSE',
              code: 'AI60-ABHI19',
              verifiedCount: 0,
              qualityScore: 95,
            },
            {
              name: 'Divya Murthy',
              role: 'Student',
              college: 'Amrita AI',
              code: 'AI60-DIVYA88',
              verifiedCount: 0,
              qualityScore: 90,
            },
            {
              name: 'Naveen Kumar',
              role: 'Student',
              college: 'Amrita ECE',
              code: 'AI60-NAV33',
              verifiedCount: 0,
              qualityScore: 85,
            },
          ],
        },
        {
          name: 'Pooja Hegde',
          role: 'Student',
          college: 'RV College of Engineering',
          code: 'AI60-POOJA04',
          verifiedCount: 1,
          qualityScore: 88,
          children: [
            {
              name: 'Suresh Patil',
              role: 'Student',
              college: 'RVCE Mech',
              code: 'AI60-SUR51',
              verifiedCount: 0,
              qualityScore: 82,
            },
          ],
        },
      ],
    },
    {
      name: 'Ananya Reddy',
      role: 'Ambassador',
      college: 'CBIT Hyderabad',
      code: 'ANANYA-CBIT',
      verifiedCount: 62,
      qualityScore: 95,
      children: [
        {
          name: 'Priya Nair',
          role: 'Student',
          college: 'CBIT Hyderabad',
          code: 'AI60-PRIYA14',
          verifiedCount: 2,
          qualityScore: 91,
          children: [
            {
              name: 'Sanjay Teja',
              role: 'Student',
              college: 'CBIT IT',
              code: 'AI60-SANJAY72',
              verifiedCount: 0,
              qualityScore: 92,
            },
            {
              name: 'Kavya Madhavan',
              role: 'Student',
              college: 'CBIT CSE',
              code: 'AI60-KAVYA60',
              verifiedCount: 0,
              qualityScore: 88,
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center space-x-2">
          <GitFork className="w-6 h-6 text-indigo-400" />
          <h1 className="text-2xl font-bold text-white tracking-tight">Referral Network Hierarchy & Quality Graph</h1>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          Interactive multi-level tree displaying how Ambassador broadcasts cascade into secondary peer-to-peer student loops.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4 border-slate-800 bg-slate-900/60">
          <span className="text-xs text-slate-400 block uppercase font-mono">Viral Coefficient (K)</span>
          <span className="text-3xl font-bold text-white font-mono mt-1 block">0.62</span>
          <p className="text-[11px] text-slate-400 mt-2">
            Every 100 students bring in 62 secondary peers organically without additional marketing spend.
          </p>
        </Card>

        <Card className="p-4 border-slate-800 bg-slate-900/60">
          <span className="text-xs text-slate-400 block uppercase font-mono">Referral Participation</span>
          <span className="text-3xl font-bold text-emerald-400 font-mono mt-1 block">41.5%</span>
          <p className="text-[11px] text-slate-400 mt-2">
            142 out of 342 registered students actively invited at least one classmate.
          </p>
        </Card>

        <Card className="p-4 border-slate-800 bg-slate-900/60">
          <span className="text-xs text-slate-400 block uppercase font-mono">Avg Quality Score</span>
          <span className="text-3xl font-bold text-sky-400 font-mono mt-1 block">89.4 / 100</span>
          <p className="text-[11px] text-slate-400 mt-2">
            Weighted by email domain verification, profile completion, and pre-workshop readiness.
          </p>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base text-white">Campus Ambassador & Peer Referral Tree</CardTitle>
          <CardDescription>
            Click +/- on any node to expand or collapse downline attribution branches.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {referralTreeData.map((node, i) => (
            <TreeNode key={i} node={node} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
