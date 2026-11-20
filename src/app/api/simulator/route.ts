import { NextResponse } from 'next/server';
import { simulateCampaign } from '@/lib/growth-model';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const simulationResult = simulateCampaign(body || {});
    return NextResponse.json({ success: true, data: simulationResult });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
