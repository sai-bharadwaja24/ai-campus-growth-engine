import seedJson from './seed-data.json';
import {
  Student,
  Ambassador,
  College,
  Registration,
  Referral,
  MilestoneTier,
  Campaign,
  PlanningAssumptions,
  QualityScoreWeights,
  AmbassadorApplication,
  SuspiciousActivity,
  NotificationItem,
  ChannelMetrics,
  ReferralTreeNode,
} from '../types';
import {
  DEFAULT_PLANNING_ASSUMPTIONS,
  DEFAULT_QUALITY_WEIGHTS,
  calculateGrowthMetrics,
  calculateQualityScore,
  getGrowthFunnel,
} from '../growth-model';

interface DBStore {
  campaign: Campaign;
  colleges: College[];
  ambassadors: Ambassador[];
  students: Student[];
  registrations: Registration[];
  referrals: Referral[];
  channels: ChannelMetrics[];
  milestones: MilestoneTier[];
  applications: AmbassadorApplication[];
  suspicious: SuspiciousActivity[];
  notifications: NotificationItem[];
  assumptions: PlanningAssumptions;
  qualityWeights: QualityScoreWeights;
}

declare global {
  // eslint-disable-next-line no-var
  var __GROWTH_ENGINE_DB__: DBStore | undefined;
}

const defaultMilestones: MilestoneTier[] = [
  {
    id: 'm-bronze',
    name: 'Bronze',
    referrals_required: 1,
    reward_title: 'AI Resume Project Blueprint',
    reward_description: 'Modular GitHub repository template + ATS-optimized resume bullet points for placement drives.',
    reward_type: 'template',
    is_unlocked: true,
    growth_points: 50,
  },
  {
    id: 'm-silver',
    name: 'Silver',
    referrals_required: 3,
    reward_title: 'Google Colab Pro GPU Notebooks & API Key Pass',
    reward_description: 'Pre-configured cloud execution environment with zero-setup access keys for Gemini & Claude APIs.',
    reward_type: 'resource',
    is_unlocked: true,
    growth_points: 150,
  },
  {
    id: 'm-gold',
    name: 'Gold',
    referrals_required: 5,
    reward_title: '1:1 AI Project Architecture Review with Mentor',
    reward_description: 'Personalized 15-minute video critique on your capstone architecture and how to defend it to placement interviewers.',
    reward_type: 'review',
    is_unlocked: false,
    growth_points: 300,
  },
  {
    id: 'm-builder',
    name: 'AI Builder',
    referrals_required: 10,
    reward_title: 'VIP Front-Row Q&A + Verified Capstone Honor Certificate',
    reward_description: 'Priority live Q&A in the masterclass, spotlight on NxtWave LinkedIn alumni showcase, and verified digital credential.',
    reward_type: 'certificate',
    is_unlocked: false,
    growth_points: 600,
  },
  {
    id: 'm-champion',
    name: 'Campus Champion',
    referrals_required: 20,
    reward_title: 'Campus Leadership Trophy & Direct PPO Interview Fast-Track',
    reward_description: 'Featured on the national campus leaderboard, invitation to NxtWave AI Leadership Summit, and priority internship review.',
    reward_type: 'priority_pass',
    is_unlocked: false,
    growth_points: 1200,
  },
];

const defaultChannels: ChannelMetrics[] = [
  {
    id: 'ch-whatsapp',
    name: 'WhatsApp',
    channel_key: 'whatsapp',
    budget_spent_inr: 0,
    impressions: 4200,
    visitors: 780,
    registrations: 145,
    verified_registrations: 128,
    conversion_rate_pct: 18.6,
    cac_inr: 0.0,
  },
  {
    id: 'ch-ambassador',
    name: 'Campus Ambassador',
    channel_key: 'ambassador',
    budget_spent_inr: 1000,
    impressions: 2100,
    visitors: 480,
    registrations: 98,
    verified_registrations: 84,
    conversion_rate_pct: 20.4,
    cac_inr: 10.2,
  },
  {
    id: 'ch-clubs',
    name: 'College Club',
    channel_key: 'college_club',
    budget_spent_inr: 400,
    impressions: 1200,
    visitors: 320,
    registrations: 62,
    verified_registrations: 52,
    conversion_rate_pct: 19.4,
    cac_inr: 6.45,
  },
  {
    id: 'ch-referral',
    name: 'Referral',
    channel_key: 'referral',
    budget_spent_inr: 0,
    impressions: 540,
    visitors: 110,
    registrations: 27,
    verified_registrations: 25,
    conversion_rate_pct: 24.5,
    cac_inr: 0.0,
  },
  {
    id: 'ch-linkedin',
    name: 'LinkedIn',
    channel_key: 'linkedin',
    budget_spent_inr: 200,
    impressions: 850,
    visitors: 95,
    registrations: 6,
    verified_registrations: 5,
    conversion_rate_pct: 6.3,
    cac_inr: 33.33,
  },
  {
    id: 'ch-instagram',
    name: 'Instagram',
    channel_key: 'instagram',
    budget_spent_inr: 200,
    impressions: 920,
    visitors: 65,
    registrations: 3,
    verified_registrations: 2,
    conversion_rate_pct: 4.6,
    cac_inr: 66.67,
  },
  {
    id: 'ch-email',
    name: 'Email',
    channel_key: 'email',
    budget_spent_inr: 100,
    impressions: 400,
    visitors: 35,
    registrations: 1,
    verified_registrations: 1,
    conversion_rate_pct: 2.8,
    cac_inr: 100.0,
  },
  {
    id: 'ch-direct',
    name: 'Direct',
    channel_key: 'direct',
    budget_spent_inr: 100,
    impressions: 150,
    visitors: 22,
    registrations: 0,
    verified_registrations: 0,
    conversion_rate_pct: 0.0,
    cac_inr: 0.0,
  },
];

const defaultSuspicious: SuspiciousActivity[] = [
  {
    id: 'sus-1',
    student_id: 'std-sus-1',
    student_name: 'Simulated Bot Probe',
    email: 'temp.user492@mailinator.com',
    reason: 'velocity_spike',
    severity: 'medium',
    details: '6 referral link clicks detected in 45 seconds from identical browser fingerprint.',
    timestamp: '2 hours ago',
    reviewed: false,
  },
  {
    id: 'sus-2',
    student_id: 'std-sus-2',
    student_name: 'Karan Malhotra',
    email: 'karan.m@gmail.com',
    reason: 'self_referral',
    severity: 'low',
    details: 'Student attempted to use their own referral code during duplicate form submit.',
    timestamp: '5 hours ago',
    reviewed: true,
  },
];

const defaultNotifications: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Milestone Alert',
    message: 'You are 2 referrals away from unlocking Gold Milestone (1:1 Mentor Review).',
    type: 'milestone',
    timestamp: '15 mins ago',
    read: false,
  },
  {
    id: 'notif-2',
    title: 'Campus Battle Update',
    message: 'Your college (RV College of Engineering) is holding #1 with 74 registrations!',
    type: 'rank_change',
    timestamp: '1 hour ago',
    read: false,
  },
  {
    id: 'notif-3',
    title: 'New Peer Joined',
    message: 'Abhishek Gowda registered using your link. +25 Growth Points awarded.',
    type: 'referral_joined',
    timestamp: '3 hours ago',
    read: true,
  },
  {
    id: 'notif-4',
    title: 'Campaign Countdown',
    message: 'Sprint Day 4: 72 hours remaining until workshop live broadcast.',
    type: 'timer',
    timestamp: '5 hours ago',
    read: true,
  },
];

function getInitialStore(): DBStore {
  // Format students with referral_url and stats
  const students: Student[] = seedJson.students.map((s, idx) => ({
    ...s,
    referral_url: `https://campusgrowth.nxtwave.in/register?ref=${s.referral_code}`,
    quality_score: 88,
    verified_referrals_count: idx === 0 ? 3 : idx === 1 ? 2 : 1,
    total_referrals_count: idx === 0 ? 4 : idx === 1 ? 2 : 1,
    college_rank: idx + 1,
    overall_rank: idx + 1,
    readiness_percent: idx === 0 ? 75 : 50,
    is_flagged: false,
  })) as Student[];

  // Format ambassadors with new fields
  const ambassadors: Ambassador[] = seedJson.ambassadors.map((a, idx) => ({
    ...a,
    verified_registrations_count: Math.round(a.registrations_count * 0.88),
    overall_rank: idx + 1,
    bounty_earned_inr: a.registrations_count >= 50 ? 200 : 0,
  })) as Ambassador[];

  // Format colleges with referral contribution %
  const colleges: College[] = seedJson.colleges.map((c, idx) => ({
    ...c,
    verified_registration_count: Math.round(c.registration_count * 0.88),
    referral_contribution_pct: Number(((c.referral_count / (c.registration_count || 1)) * 100).toFixed(1)),
    rank: idx + 1,
  })) as College[];

  const registrations: Registration[] = [];
  for (let i = 0; i < 342; i++) {
    registrations.push({
      id: `reg-${i + 1}`,
      student_id: `std-${(i % 12) + 1}`,
      student_name: `Student ${i + 1}`,
      email: `student${i + 1}@campus.edu.in`,
      phone: `+91 98000 ${String(i).padStart(5, '0')}`,
      college: colleges[i % colleges.length].name,
      source: i % 2 === 0 ? 'whatsapp' : 'ambassador',
      campaign: 'Campus AI 500 Sprint',
      day_of_campaign: (i % 4) + 1,
      status: i % 10 === 0 ? 'pending' : 'verified',
      timestamp: new Date(Date.now() - (342 - i) * 15 * 60 * 1000).toISOString(),
    });
  }

  return {
    campaign: { ...seedJson.campaign } as Campaign,
    colleges,
    ambassadors,
    students,
    registrations,
    referrals: [...seedJson.referrals].map((r) => ({
      ...r,
      referrer_code: r.referrer_name.split(' ')[0].toUpperCase() + '-AI',
      click_count: 8,
    })) as Referral[],
    channels: [...defaultChannels],
    milestones: [...defaultMilestones],
    applications: [],
    suspicious: [...defaultSuspicious],
    notifications: [...defaultNotifications],
    assumptions: { ...DEFAULT_PLANNING_ASSUMPTIONS },
    qualityWeights: { ...DEFAULT_QUALITY_WEIGHTS },
  };
}

if (!global.__GROWTH_ENGINE_DB__) {
  global.__GROWTH_ENGINE_DB__ = getInitialStore();
}

const store = global.__GROWTH_ENGINE_DB__!;

export const db = {
  getCampaign: (): Campaign => store.campaign,

  getColleges: (): College[] => {
    return [...store.colleges].sort((a, b) => b.registration_count - a.registration_count);
  },

  getCollegeById: (id: string): College | undefined => {
    return store.colleges.find((c) => c.id === id);
  },

  getStudents: (): Student[] => [...store.students],

  getStudentById: (id: string): Student | undefined => {
    return store.students.find((s) => s.id === id);
  },

  getStudentByReferralCode: (code: string): Student | undefined => {
    return store.students.find((s) => s.referral_code.toUpperCase() === code.trim().toUpperCase());
  },

  registerStudent: (newStudent: {
    name: string;
    email: string;
    phone: string;
    college: string;
    city?: string;
    branch?: string;
    graduation_year?: number;
    goal?: string;
    ai_experience?: 'beginner' | 'intermediate' | 'advanced';
    referred_by?: string | null;
  }): { student: Student; error?: string } => {
    // 1. Anti-spam duplicate check
    const normalizedEmail = newStudent.email.trim().toLowerCase();
    const normalizedPhone = newStudent.phone.trim();

    const existingEmail = store.students.find((s) => s.email.toLowerCase() === normalizedEmail);
    if (existingEmail) {
      return {
        student: existingEmail,
        error: 'DUPLICATE_EMAIL: A student has already registered with this email address.',
      };
    }

    const existingPhone = store.students.find((s) => s.phone.replace(/\D/g, '') === normalizedPhone.replace(/\D/g, ''));
    if (existingPhone && normalizedPhone.length > 8) {
      return {
        student: existingPhone,
        error: 'DUPLICATE_PHONE: A student has already registered with this phone number.',
      };
    }

    // 2. Generate clean standard referral code: AI60-NAME42
    const cleanFirstName = newStudent.name.trim().split(' ')[0].replace(/[^a-zA-Z]/g, '').toUpperCase() || 'STU';
    const randDigits = Math.floor(10 + Math.random() * 90);
    const referral_code = `AI60-${cleanFirstName}${randDigits}`;
    const referral_url = `https://campusgrowth.nxtwave.in/register?ref=${referral_code}`;

    // 3. Self-referral anti-spam check
    let validReferredBy = newStudent.referred_by ? newStudent.referred_by.trim().toUpperCase() : null;
    if (validReferredBy && validReferredBy === referral_code) {
      store.suspicious.unshift({
        id: `sus-${Date.now()}`,
        student_name: newStudent.name,
        email: normalizedEmail,
        reason: 'self_referral',
        severity: 'low',
        details: `Student attempted self-referral using code ${referral_code}.`,
        timestamp: 'Just now',
        reviewed: false,
      });
      validReferredBy = null;
    }

    const id = `std-${Date.now()}`;
    const student: Student = {
      id,
      name: newStudent.name.trim(),
      email: normalizedEmail,
      phone: normalizedPhone,
      college: newStudent.college,
      city: newStudent.city || 'Bengaluru',
      branch: newStudent.branch || 'Computer Science & Engineering',
      graduation_year: Number(newStudent.graduation_year) || 2026,
      goal: newStudent.goal || 'Build my first AI project',
      ai_experience: newStudent.ai_experience || 'beginner',
      referral_code,
      referred_by: validReferredBy,
      referral_url,
      growth_score: 25,
      quality_score: 85,
      verified_referrals_count: 0,
      total_referrals_count: 0,
      college_rank: 1,
      overall_rank: store.students.length + 1,
      readiness_status: 'in_progress',
      readiness_percent: 25,
      project_submitted: false,
      is_flagged: false,
      created_at: new Date().toISOString(),
    };

    store.students.unshift(student);

    // 4. Log Registration
    store.registrations.unshift({
      id: `reg-${Date.now()}`,
      student_id: student.id,
      student_name: student.name,
      email: student.email,
      phone: student.phone,
      college: student.college,
      source: validReferredBy ? 'referral' : 'whatsapp',
      campaign: 'Campus AI 500 Sprint',
      referral_code_used: validReferredBy,
      day_of_campaign: 4,
      status: 'verified',
      timestamp: new Date().toISOString(),
    });

    // 5. If referred, attribute and increment growth score
    if (validReferredBy) {
      const referrer = store.students.find(
        (s) => s.referral_code.toUpperCase() === validReferredBy || s.id === validReferredBy
      );

      if (referrer) {
        referrer.growth_score += 25;
        referrer.verified_referrals_count += 1;
        referrer.total_referrals_count += 1;

        store.referrals.unshift({
          id: `ref-${Date.now()}`,
          referrer_id: referrer.id,
          referrer_name: referrer.name,
          referrer_code: referrer.referral_code,
          referred_student_id: student.id,
          referred_student_name: student.name,
          source: 'whatsapp',
          status: 'verified',
          quality_score: 92,
          click_count: 1,
          created_at: new Date().toISOString(),
        });

        // Trigger notification
        store.notifications.unshift({
          id: `notif-${Date.now()}`,
          title: 'Referral Joined',
          message: `${student.name} (${student.college}) registered using your code! +25 pts awarded.`,
          type: 'referral_joined',
          timestamp: 'Just now',
          read: false,
        });

        // Check milestones
        store.milestones.forEach((m) => {
          if (referrer.verified_referrals_count >= m.referrals_required) {
            m.is_unlocked = true;
          }
        });
      }

      // Check if referred by ambassador
      const ambassador = store.ambassadors.find((a) => a.referral_code.toUpperCase() === validReferredBy);
      if (ambassador) {
        ambassador.registrations_count += 1;
        ambassador.verified_registrations_count += 1;
        ambassador.conversion_rate = Number(
          ((ambassador.registrations_count / ambassador.total_reach) * 100).toFixed(1)
        );
        if (ambassador.registrations_count >= 50) {
          ambassador.bounty_earned_inr = 200;
        }
      }
    }

    // 6. Update College registration & referral counts
    const college = store.colleges.find((c) =>
      c.name.toLowerCase().includes(student.college.toLowerCase()) || student.college.toLowerCase().includes(c.name.toLowerCase())
    );
    if (college) {
      college.registration_count += 1;
      college.verified_registration_count += 1;
      if (validReferredBy) {
        college.referral_count += 1;
      }
      college.referral_contribution_pct = Number(
        ((college.referral_count / college.registration_count) * 100).toFixed(1)
      );
    }

    // 7. Update Channel counters
    const channelKey = validReferredBy ? 'referral' : 'whatsapp';
    const channel = store.channels.find((ch) => ch.channel_key === channelKey);
    if (channel) {
      channel.registrations += 1;
      channel.verified_registrations += 1;
    }

    return { student };
  },

  getAmbassadors: (): Ambassador[] => {
    return [...store.ambassadors].sort((a, b) => b.registrations_count - a.registrations_count);
  },

  getAmbassadorById: (id: string): Ambassador | undefined => {
    return store.ambassadors.find((a) => a.id === id);
  },

  applyAmbassador: (app: Omit<AmbassadorApplication, 'id' | 'status' | 'created_at'>): AmbassadorApplication => {
    const application: AmbassadorApplication = {
      ...app,
      id: `app-${Date.now()}`,
      status: 'approved', // Auto-approved in simulation mode
      created_at: new Date().toISOString(),
    };
    store.applications.unshift(application);

    // Auto-create active ambassador
    const cleanCode = `${app.name.split(' ')[0].toUpperCase()}-${app.college.split(' ')[0].toUpperCase()}`;
    const newAmb: Ambassador = {
      id: `amb-${Date.now()}`,
      name: app.name,
      email: app.email,
      phone: app.phone,
      college: app.college,
      city: 'Campus Hub',
      branch: app.branch,
      referral_code: cleanCode,
      target_quota: 50,
      total_reach: app.expected_reach || 300,
      registrations_count: 0,
      verified_registrations_count: 0,
      conversion_rate: 0,
      campus_rank: store.ambassadors.length + 1,
      overall_rank: store.ambassadors.length + 1,
      bounty_earned_inr: 0,
      status: 'active',
      created_at: new Date().toISOString(),
    };
    store.ambassadors.push(newAmb);

    return application;
  },

  getReferrals: (): Referral[] => [...store.referrals],

  getReferralsByReferrerId: (referrerId: string): Referral[] => {
    return store.referrals.filter((r) => r.referrer_id === referrerId);
  },

  getChannels: (): ChannelMetrics[] => [...store.channels],

  getMilestones: (): MilestoneTier[] => [...store.milestones],

  getQualityWeights: (): QualityScoreWeights => store.qualityWeights,

  updateQualityWeights: (weights: Partial<QualityScoreWeights>): QualityScoreWeights => {
    store.qualityWeights = { ...store.qualityWeights, ...weights };
    return store.qualityWeights;
  },

  getSuspiciousActivities: (): SuspiciousActivity[] => [...store.suspicious],

  reviewSuspiciousActivity: (id: string, action: 'dismiss' | 'flag'): boolean => {
    const item = store.suspicious.find((s) => s.id === id);
    if (item) {
      item.reviewed = true;
      return true;
    }
    return false;
  },

  getNotifications: (): NotificationItem[] => [...store.notifications],

  markNotificationRead: (id: string): boolean => {
    const item = store.notifications.find((n) => n.id === id);
    if (item) {
      item.read = true;
      return true;
    }
    return false;
  },

  getGrowthFunnel: () => {
    const totalRegs = store.registrations.length;
    return getGrowthFunnel(1650, totalRegs);
  },

  getReferralTree: (): ReferralTreeNode[] => {
    // Generate tree rooted from top campus ambassadors down to students
    return store.ambassadors.slice(0, 3).map((amb) => {
      const collegeStudents = store.students.filter((s) => s.college === amb.college);
      return {
        id: amb.id,
        name: `${amb.name} (Ambassador)`,
        role: 'ambassador',
        college: amb.college,
        code: amb.referral_code,
        verified_count: amb.registrations_count,
        quality_score: 94,
        children: collegeStudents.slice(0, 3).map((stu) => {
          const peers = store.referrals.filter((r) => r.referrer_id === stu.id);
          return {
            id: stu.id,
            name: stu.name,
            role: 'student',
            college: stu.college,
            code: stu.referral_code,
            verified_count: stu.verified_referrals_count,
            quality_score: stu.quality_score,
            children: peers.map((p) => ({
              id: p.id,
              name: p.referred_student_name,
              role: 'student',
              college: stu.college,
              code: 'PEER-REF',
              verified_count: 0,
              quality_score: p.quality_score,
            })),
          };
        }),
      };
    });
  },

  getSummaryStats: () => {
    const totalRegistrations = store.registrations.length;
    const totalVerified = store.registrations.filter((r) => r.status === 'verified').length;
    const totalReferrals = store.referrals.length;
    const totalColleges = store.colleges.length;
    const totalAmbassadors = store.ambassadors.length;
    const metrics = calculateGrowthMetrics(store.assumptions, totalRegistrations, store.campaign.spent_budget_inr);

    return {
      campaign: store.campaign,
      totalRegistrations,
      totalVerified,
      totalReferrals,
      totalColleges,
      totalAmbassadors,
      metrics,
      channels: store.channels,
      milestones: store.milestones,
      qualityWeights: store.qualityWeights,
    };
  },

  generateDemoCampaign: () => {
    // Dynamically regenerate richer realistic simulation dataset
    const fresh = getInitialStore();

    // Add extra 58 registrations to simulate a fresh viral surge
    for (let i = 0; i < 58; i++) {
      const collegeIdx = i % fresh.colleges.length;
      fresh.registrations.push({
        id: `reg-surge-${i}`,
        student_id: `std-surge-${i}`,
        student_name: `Engg Peer ${i + 1}`,
        email: `peer${i + 1}@${fresh.colleges[collegeIdx].city.toLowerCase()}.edu.in`,
        phone: `+91 97000 ${String(i).padStart(5, '0')}`,
        college: fresh.colleges[collegeIdx].name,
        source: 'referral',
        campaign: 'Campus AI 500 Sprint',
        day_of_campaign: 4,
        status: 'verified',
        timestamp: new Date().toISOString(),
      });
      fresh.colleges[collegeIdx].registration_count += 1;
      fresh.colleges[collegeIdx].referral_count += 1;
    }

    fresh.notifications.unshift({
      id: `notif-surge-${Date.now()}`,
      title: 'Demo Campaign Surge Generated',
      message: 'Added 58 simulated registrations across 12 campuses. Current Total: 400 / 500.',
      type: 'milestone',
      timestamp: 'Just now',
      read: false,
    });

    Object.assign(store, fresh);
    return true;
  },

  resetDatabase: () => {
    const fresh = getInitialStore();
    Object.assign(store, fresh);
    return true;
  },
};
