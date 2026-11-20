import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST() {
  try {
    db.resetDatabase();
    return NextResponse.json({
      success: true,
      message: 'Simulation reset to baseline campaign state (Day 4: 342 registrations, 68.4% target pacing).',
      baseline: {
        totalRegistrations: 342,
        verifiedRegistrations: 287,
        registrationsToday: 64,
        requiredPerDay: 52.7,
        referralContributionPct: 42.4,
        progressPct: 68.4,
        cac: '₹4.00',
      }
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
