-- ====================================================================
-- AI CAMPUS GROWTH ENGINE DATABASE SCHEMA
-- Target: 500 Engineering Students Acquisition Engine
-- Simulation Schema for NxtWave Growth Intern Challenge
-- Compatible with PostgreSQL and SQLite
-- ====================================================================

-- 1. Users table (Admins, Ambassadors, Student logins)
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(32) NOT NULL CHECK (role IN ('student', 'ambassador', 'admin')),
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Students table
CREATE TABLE IF NOT EXISTS students (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(32) NOT NULL,
    college VARCHAR(255) NOT NULL,
    city VARCHAR(128) NOT NULL,
    branch VARCHAR(128) NOT NULL,
    graduation_year INT NOT NULL,
    goal TEXT,
    ai_experience VARCHAR(32) DEFAULT 'beginner',
    referral_code VARCHAR(32) UNIQUE NOT NULL,
    referred_by VARCHAR(32),
    growth_score INT DEFAULT 10,
    readiness_status VARCHAR(32) DEFAULT 'pending',
    project_submitted BOOLEAN DEFAULT FALSE,
    project_title TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Campus Ambassadors table
CREATE TABLE IF NOT EXISTS ambassadors (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(32) NOT NULL,
    college VARCHAR(255) NOT NULL,
    city VARCHAR(128) NOT NULL,
    branch VARCHAR(128) NOT NULL,
    referral_code VARCHAR(32) UNIQUE NOT NULL,
    target_quota INT DEFAULT 50,
    total_reach INT DEFAULT 0,
    registrations_count INT DEFAULT 0,
    conversion_rate DECIMAL(5,2) DEFAULT 0.0,
    campus_rank INT DEFAULT 1,
    status VARCHAR(32) DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Colleges table
CREATE TABLE IF NOT EXISTS colleges (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    city VARCHAR(128) NOT NULL,
    state VARCHAR(128) NOT NULL,
    tier VARCHAR(16) DEFAULT 'Tier-2',
    registration_count INT DEFAULT 0,
    referral_count INT DEFAULT 0,
    ambassador_name VARCHAR(255)
);

-- 5. Registrations table
CREATE TABLE IF NOT EXISTS registrations (
    id VARCHAR(64) PRIMARY KEY,
    student_id VARCHAR(64) REFERENCES students(id) ON DELETE CASCADE,
    student_name VARCHAR(255) NOT NULL,
    college VARCHAR(255) NOT NULL,
    source VARCHAR(64) NOT NULL,
    campaign VARCHAR(128) NOT NULL,
    referral_code_used VARCHAR(32),
    day_of_campaign INT NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. Referrals table
CREATE TABLE IF NOT EXISTS referrals (
    id VARCHAR(64) PRIMARY KEY,
    referrer_id VARCHAR(64) NOT NULL,
    referrer_name VARCHAR(255) NOT NULL,
    referred_student_id VARCHAR(64) REFERENCES students(id) ON DELETE CASCADE,
    referred_student_name VARCHAR(255) NOT NULL,
    source VARCHAR(64) DEFAULT 'whatsapp',
    status VARCHAR(32) DEFAULT 'pending',
    quality_score INT DEFAULT 85,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. Referral Events table (funnel tracking)
CREATE TABLE IF NOT EXISTS referral_events (
    id VARCHAR(64) PRIMARY KEY,
    referral_id VARCHAR(64) REFERENCES referrals(id) ON DELETE CASCADE,
    event_type VARCHAR(64) NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    ip_hash VARCHAR(64)
);

-- 8. Campaigns table
CREATE TABLE IF NOT EXISTS campaigns (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    workshop_title VARCHAR(255) NOT NULL,
    target_registrations INT DEFAULT 500,
    campaign_duration_days INT DEFAULT 7,
    current_day INT DEFAULT 4,
    total_budget_inr DECIMAL(10,2) DEFAULT 2000.00,
    spent_budget_inr DECIMAL(10,2) DEFAULT 2000.00,
    status VARCHAR(32) DEFAULT 'active',
    start_date DATE NOT NULL,
    workshop_date DATE NOT NULL
);

-- 9. Channels table
CREATE TABLE IF NOT EXISTS channels (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    channel_key VARCHAR(64) NOT NULL,
    budget_allocated_inr DECIMAL(10,2) DEFAULT 0.00,
    budget_spent_inr DECIMAL(10,2) DEFAULT 0.00,
    registrations INT DEFAULT 0,
    target_contribution INT DEFAULT 0,
    conversion_rate DECIMAL(5,2) DEFAULT 0.0,
    cac_inr DECIMAL(10,2) DEFAULT 0.00,
    description TEXT
);

-- 10. Rewards table
CREATE TABLE IF NOT EXISTS rewards (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    referrals_required INT NOT NULL,
    reward_type VARCHAR(64) NOT NULL,
    is_unlocked BOOLEAN DEFAULT FALSE,
    unlocked_count INT DEFAULT 0
);

-- 11. Milestones table
CREATE TABLE IF NOT EXISTS milestones (
    id VARCHAR(64) PRIMARY KEY,
    level INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    referrals_threshold INT NOT NULL,
    reward_description TEXT NOT NULL,
    growth_points INT DEFAULT 100
);

-- 12. Engagement Events table
CREATE TABLE IF NOT EXISTS engagement_events (
    id VARCHAR(64) PRIMARY KEY,
    student_id VARCHAR(64) REFERENCES students(id) ON DELETE CASCADE,
    event_type VARCHAR(64) NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    metadata JSONB
);

-- 13. Project Submissions table
CREATE TABLE IF NOT EXISTS project_submissions (
    id VARCHAR(64) PRIMARY KEY,
    student_id VARCHAR(64) REFERENCES students(id) ON DELETE CASCADE,
    student_name VARCHAR(255) NOT NULL,
    college VARCHAR(255) NOT NULL,
    project_title VARCHAR(255) NOT NULL,
    project_category VARCHAR(128) NOT NULL,
    problem_statement TEXT NOT NULL,
    ai_tools_planned TEXT[],
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    mentor_rating INT
);

-- 14. Experiments table
CREATE TABLE IF NOT EXISTS experiments (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    hypothesis TEXT NOT NULL,
    variant_a VARCHAR(255) NOT NULL,
    variant_b VARCHAR(255) NOT NULL,
    metric VARCHAR(128) NOT NULL,
    variant_a_rate DECIMAL(5,2) DEFAULT 0.0,
    variant_b_rate DECIMAL(5,2) DEFAULT 0.0,
    winner VARCHAR(64) DEFAULT 'inconclusive',
    sample_size INT DEFAULT 0,
    status VARCHAR(32) DEFAULT 'running'
);

-- 15. Notifications table
CREATE TABLE IF NOT EXISTS notifications (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    type VARCHAR(32) NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    read BOOLEAN DEFAULT FALSE
);

-- 16. Growth Insights table
CREATE TABLE IF NOT EXISTS growth_insights (
    id VARCHAR(64) PRIMARY KEY,
    category VARCHAR(32) NOT NULL,
    headline VARCHAR(255) NOT NULL,
    detail TEXT NOT NULL,
    suggested_action TEXT NOT NULL,
    impact_score VARCHAR(16) DEFAULT 'medium'
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_students_referral_code ON students(referral_code);
CREATE INDEX IF NOT EXISTS idx_registrations_source ON registrations(source);
CREATE INDEX IF NOT EXISTS idx_referrals_referrer_id ON referrals(referrer_id);
CREATE INDEX IF NOT EXISTS idx_colleges_registration_count ON colleges(registration_count DESC);
