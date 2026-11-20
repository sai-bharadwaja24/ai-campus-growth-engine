// Core Data Models for AI Campus Growth Engine
// Supporting 500-registration campaign simulation for NxtWave Growth Intern

export type RoleType = 'student' | 'ambassador' | 'admin';

export type StudentGoal =
  | 'Build my first AI project'
  | 'Improve placement profile'
  | 'Learn GenAI'
  | 'Build a resume project'
  | 'Explore AI careers'
  | 'Prepare for interviews';

export interface User {
  id: string;
  name: string;
  email: string;
  role: RoleType;
  avatarUrl?: string;
  createdAt: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  college: string;
  city: string;
  branch: string;
  graduation_year: number;
  goal: StudentGoal | string;
  ai_experience: 'beginner' | 'intermediate' | 'advanced';
  referral_code: string;
  referred_by: string | null;
  referral_url: string;
  growth_score: number;
  quality_score: number;
  verified_referrals_count: number;
  total_referrals_count: number;
  college_rank: number;
  overall_rank: number;
  readiness_status: 'pending' | 'in_progress' | 'completed';
  readiness_percent: number;
  project_submitted: boolean;
  project_title?: string;
  is_flagged: boolean;
  created_at: string;
}

export interface AmbassadorApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  college: string;
  branch: string;
  graduation_year: number;
  community_reach: number;
  clubs: string;
  social_presence: string;
  expected_reach: number;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
}

export interface Ambassador {
  id: string;
  name: string;
  email: string;
  phone: string;
  college: string;
  city: string;
  branch: string;
  referral_code: string;
  target_quota: number;
  total_reach: number;
  registrations_count: number;
  verified_registrations_count: number;
  conversion_rate: number;
  campus_rank: number;
  overall_rank: number;
  bounty_earned_inr: number;
  status: 'active' | 'pending' | 'completed';
  created_at: string;
}

export interface College {
  id: string;
  name: string;
  city: string;
  state: string;
  tier: 'Tier-1' | 'Tier-2' | 'Tier-3';
  registration_count: number;
  verified_registration_count: number;
  referral_count: number;
  referral_contribution_pct: number;
  ambassador_name: string;
  rank: number;
}

export interface Registration {
  id: string;
  student_id: string;
  student_name: string;
  email: string;
  phone: string;
  college: string;
  source: string;
  campaign: string;
  referral_code_used?: string | null;
  day_of_campaign: number;
  status: 'verified' | 'pending' | 'flagged';
  timestamp: string;
}

export interface Campaign {
  id: string;
  name: string;
  workshop_title: string;
  target_registrations: number;
  campaign_duration_days: number;
  current_day: number;
  total_budget_inr: number;
  spent_budget_inr: number;
  status: 'active' | 'paused' | 'completed';
  start_date: string;
  workshop_date: string;
}


export interface Referral {
  id: string;
  referrer_id: string;
  referrer_name: string;
  referrer_code: string;
  referred_student_id: string;
  referred_student_name: string;
  source: string;
  status: 'pending' | 'verified' | 'completed';
  quality_score: number; // 0 to 100
  click_count: number;
  created_at: string;
}

export interface QualityScoreWeights {
  verifiedRegistration: number; // e.g. 40
  profileCompletion: number; // e.g. 25
  engagementChecklist: number; // e.g. 20
  attendanceIntent: number; // e.g. 15
}

export interface MilestoneTier {
  id: string;
  name: string; // 'Bronze' | 'Silver' | 'Gold' | 'AI Builder' | 'Campus Champion'
  referrals_required: number;
  reward_title: string;
  reward_description: string;
  reward_type: 'template' | 'certificate' | 'resource' | 'review' | 'priority_pass';
  is_unlocked: boolean;
  unlocked_at?: string;
  growth_points: number;
}

export interface FunnelStage {
  id: string;
  name: string;
  count: number;
  conversion_rate_pct: number;
  dropoff_rate_pct: number;
}

export interface ChannelMetrics {
  id: string;
  name: string; // WhatsApp, College Club, Instagram, LinkedIn, Email, Referral, Campus Ambassador, Direct
  channel_key: string;
  budget_spent_inr: number;
  impressions: number;
  visitors: number;
  registrations: number;
  verified_registrations: number;
  conversion_rate_pct: number;
  cac_inr: number;
}

export interface SuspiciousActivity {
  id: string;
  student_id?: string;
  student_name: string;
  email: string;
  reason: 'duplicate_email' | 'duplicate_phone' | 'self_referral' | 'velocity_spike' | 'ip_cluster';
  severity: 'high' | 'medium' | 'low';
  details: string;
  timestamp: string;
  reviewed: boolean;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type: 'milestone' | 'rank_change' | 'referral_joined' | 'alert' | 'timer';
  timestamp: string;
  read: boolean;
}

export interface ReferralTreeNode {
  id: string;
  name: string;
  role: 'ambassador' | 'student';
  college: string;
  code: string;
  verified_count: number;
  quality_score: number;
  children?: ReferralTreeNode[];
}

export interface PlanningAssumptions {
  targetRegistrations: number;
  campaignDays: number;
  currentDay: number;
  totalBudgetINR: number;
  ambassadorCount: number;
  avgAmbassadorRegs: number;
  landingPageTraffic: number;
  registrationConversion: number;
  referralParticipation: number;
  referralConversion: number;
  channelContributionWhatsAppPct: number;
  channelContributionAmbassadorPct: number;
  channelContributionClubsPct: number;
  channelContributionPeerReferralPct: number;
  channelContributionSocialPct: number;
}

export interface GrowthCalculations {
  target: number;
  registered: number;
  verified: number;
  remaining: number;
  progressPercent: number;
  daysRemaining: number;
  requiredPerDay: number;
  currentRunRatePerDay: number;
  projectedRegistrations: number;
  blendedCAC: number;
  viralCoefficientK: number;
  isProjectedToMeetTarget: boolean;
  registrationsToday: number;
  referralContributionPct: number;
  topCollege: string;
  topAmbassador: string;
  topChannel: string;
}
