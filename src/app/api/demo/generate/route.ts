import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST() {
  try {
    db.generateDemoCampaign();
    const updatedStats = db.getSummaryStats();
    return NextResponse.json({
      success: true,
      message: 'Demo campaign surge generated with realistic simulated engineering students and referral loops!',
      data: updatedStats,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
