import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, college, city, branch, graduation_year, goal, ai_experience, referred_by } = body;

    if (!name || !email || !college || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name, email, phone number, and college are mandatory.' },
        { status: 400 }
      );
    }

    const result = db.registerStudent({
      name,
      email,
      phone,
      college,
      city,
      branch,
      graduation_year,
      goal,
      ai_experience,
      referred_by,
    });

    if (result.error) {
      return NextResponse.json(
        { success: false, error: result.error, student: result.student },
        { status: 409 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Registration successful! Instant referral pass activated.',
      student: result.student,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
