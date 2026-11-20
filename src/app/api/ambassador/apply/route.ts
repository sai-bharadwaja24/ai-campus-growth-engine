import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, college, branch, graduation_year, community_reach, clubs, social_presence, expected_reach } = body;

    if (!name || !email || !college) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and college are required.' },
        { status: 400 }
      );
    }

    const application = db.applyAmbassador({
      name,
      email,
      phone: phone || '+91 98000 00000',
      college,
      branch: branch || 'Computer Science',
      graduation_year: Number(graduation_year) || 2026,
      community_reach: Number(community_reach) || 300,
      clubs: clubs || 'Coding Club / IEEE',
      social_presence: social_presence || 'LinkedIn / WhatsApp Lead',
      expected_reach: Number(expected_reach) || 400,
    });

    return NextResponse.json({
      success: true,
      message: 'Ambassador application approved! Your Campus Lead Cockpit is ready.',
      application,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
