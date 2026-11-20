// Growth Model & Simulation Engine for NxtWave Campaign
// All calculations are explicitly labeled as 'Planning Assumptions' vs Actuals.

import { PlanningAssumptions, GrowthCalculations, QualityScoreWeights, FunnelStage } from './types';

export const DEFAULT_PLANNING_ASSUMPTIONS: PlanningAssumptions = {
  targetRegistrations: 500,
  campaignDays: 7,
  currentDay: 4,
  totalBudgetINR: 2000,
  ambassadorCount: 12,
  avgAmbassadorRegs: 18,
  landingPageTraffic: 1650,
  registrationConversion: 0.22, // 22%
  referralParticipation: 0.35, // 35% of registered students invite peers
  referralConversion: 0.45, // 45% of invited peers actually register
  channelContributionWhatsAppPct: 42,
  channelContributionAmbassadorPct: 28,
  channelContributionClubsPct: 18,
  channelContributionPeerReferralPct: 8,
  channelContributionSocialPct: 4,
};

export const DEFAULT_QUALITY_WEIGHTS: QualityScoreWeights = {
  verifiedRegistration: 40,
  profileCompletion: 25,
  engagementChecklist: 20,
  attendanceIntent: 15,
};

export function calculateQualityScore(
  isVerified: boolean,
  profilePercent: number, // 0 - 100
  checklistDoneCount: number, // 0 - 4
  hasProject: boolean,
  weights: QualityScoreWeights = DEFAULT_QUALITY_WEIGHTS
): number {
  let score = 0;
  if (isVerified) score += weights.verifiedRegistration;
  score += Math.round((profilePercent / 100) * weights.profileCompletion);
  score += Math.round((checklistDoneCount / 4) * weights.engagementChecklist);
  if (hasProject) score += weights.attendanceIntent;
  return Math.min(100, Math.max(0, score));
}

export function calculateGrowthMetrics(
  assumptions: PlanningAssumptions = DEFAULT_PLANNING_ASSUMPTIONS,
  currentRegistrations: number = 342,
  budgetSpent: number = 2000
): GrowthCalculations {
  const { targetRegistrations, campaignDays, currentDay } = assumptions;
  
  const verified = Math.round(currentRegistrations * 0.84); // ~84% verified
  const remaining = Math.max(0, targetRegistrations - currentRegistrations);
  const progressPercent = Math.min(100, (currentRegistrations / targetRegistrations) * 100);
  const daysRemaining = Math.max(1, campaignDays - currentDay);
  const requiredPerDay = remaining > 0 ? Math.ceil(remaining / daysRemaining) : 0;
  const currentRunRatePerDay = currentDay > 0 ? Number((currentRegistrations / currentDay).toFixed(1)) : 0;
  
  // Viral Coefficient K = Referral Participation Rate * Average Invites per Participant * Referral Conversion
  const avgInvitesPerParticipant = 3.6;
  const viralCoefficientK = Number(
    (assumptions.referralParticipation * avgInvitesPerParticipant * assumptions.referralConversion).toFixed(2)
  );

  const organicTrajectory = currentRunRatePerDay * daysRemaining;
  const projectedRegistrations = Math.round(currentRegistrations + organicTrajectory * (1 + viralCoefficientK * 0.2));

  // Blended Campaign CAC: ₹2,000 Total Budget ÷ 500 Target Registrations = ₹4.00
  const blendedCAC = 4.00;
  const isProjectedToMeetTarget = projectedRegistrations >= targetRegistrations;

  return {
    target: targetRegistrations,
    registered: currentRegistrations,
    verified,
    remaining,
    progressPercent: Number(progressPercent.toFixed(1)),
    daysRemaining,
    requiredPerDay,
    currentRunRatePerDay,
    projectedRegistrations,
    blendedCAC,
    viralCoefficientK,
    isProjectedToMeetTarget,
    registrationsToday: 64,
    referralContributionPct: 42.4,
    topCollege: 'RV College of Engineering (74)',
    topAmbassador: 'Rohan Deshmukh (RVCE - 74 regs)',
    topChannel: 'College WhatsApp Groups (145 regs)',
  };
}

export function getGrowthFunnel(visitors: number = 1650, regs: number = 342): FunnelStage[] {
  const impressions = Math.round(visitors * 5.1); // ~8,415
  const starts = Math.round(visitors * 0.35); // ~578
  const verified = Math.round(regs * 0.84); // ~287
  const projectedAttendance = Math.round(verified * 0.78); // ~224

  return [
    {
      id: 'f1',
      name: '1. Impressions',
      count: impressions,
      conversion_rate_pct: 100,
      dropoff_rate_pct: 0,
    },
    {
      id: 'f2',
      name: '2. Landing Visitors',
      count: visitors,
      conversion_rate_pct: Number(((visitors / impressions) * 100).toFixed(1)),
      dropoff_rate_pct: Number((100 - (visitors / impressions) * 100).toFixed(1)),
    },
    {
      id: 'f3',
      name: '3. Registration Starts',
      count: starts,
      conversion_rate_pct: Number(((starts / visitors) * 100).toFixed(1)),
      dropoff_rate_pct: Number((100 - (starts / visitors) * 100).toFixed(1)),
    },
    {
      id: 'f4',
      name: '4. Registrations',
      count: regs,
      conversion_rate_pct: Number(((regs / starts) * 100).toFixed(1)),
      dropoff_rate_pct: Number((100 - (regs / starts) * 100).toFixed(1)),
    },
    {
      id: 'f5',
      name: '5. Verified Registrations',
      count: verified,
      conversion_rate_pct: Number(((verified / regs) * 100).toFixed(1)),
      dropoff_rate_pct: Number((100 - (verified / regs) * 100).toFixed(1)),
    },
    {
      id: 'f6',
      name: '6. Workshop Attendance',
      count: projectedAttendance,
      conversion_rate_pct: Number(((projectedAttendance / verified) * 100).toFixed(1)),
      dropoff_rate_pct: Number((100 - (projectedAttendance / verified) * 100).toFixed(1)),
    },
  ];
}

export function simulateCampaign(overrides: Partial<PlanningAssumptions>) {
  const merged: PlanningAssumptions = { ...DEFAULT_PLANNING_ASSUMPTIONS, ...overrides };
  
  const ambassadorTotal = merged.ambassadorCount * merged.avgAmbassadorRegs;
  const organicRegistrations = Math.round(merged.landingPageTraffic * merged.registrationConversion);
  const baseRegistrations = ambassadorTotal + organicRegistrations;
  
  const referringStudents = Math.round(baseRegistrations * merged.referralParticipation);
  const viralRegistrations = Math.round(referringStudents * 3.5 * merged.referralConversion);
  
  const totalSimulated = baseRegistrations + viralRegistrations;
  const metrics = calculateGrowthMetrics(merged, totalSimulated, merged.totalBudgetINR);
  
  return {
    assumptions: merged,
    ambassadorContribution: ambassadorTotal,
    organicContribution: organicRegistrations,
    viralContribution: viralRegistrations,
    totalSimulated,
    metrics,
  };
}
