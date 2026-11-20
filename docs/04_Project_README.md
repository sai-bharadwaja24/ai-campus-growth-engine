# 04. NxtWave Growth Challenge: Project README & System Guide
**Candidate:** Sai Bharadwaja (Amrita Vishwa Vidyapeetham)  
**Project:** AI Campus Growth Engine  
**Challenge:** Acquire 500 final-year B.Tech students in 7 days on a strict ₹2,000 budget  
**Asset:** Multi-Role Growth Operating System  
**Classification:** Technical Documentation & Evaluator Run Guide  

---

## 📌 Executive Summary
The **AI Campus Growth Engine** was engineered to solve the NxtWave Growth Challenge: acquiring 500 final-year B.Tech students for the masterclass **"Build Your First AI Project in 60 Minutes"** within 7 days, constrained to an unbending **₹2,000 INR budget**.

At commercial Indian B2C tech lead CACs (₹45 to ₹80+ via Meta/Google ads), spending ₹2,000 on paid acquisition exhausts the entire budget after just 25–40 registrations. 

Instead of building a passive landing page, this project architects a **multi-role growth operating system** powered by a self-sustaining viral loop:

$$\text{REGISTER} \longrightarrow \text{REFER} \longrightarrow \text{COMPETE} \longrightarrow \text{REWARD} \longrightarrow \text{MORE REGISTRATIONS}$$

With a modeled sub-viral multiplier loop of **$K = 0.62 < 1.0$** ($M = \frac{1}{1-0.62} = 2.63\times$ geometric amplification), an initial seed cohort of 216 Day-1 students across 12 engineering campuses compounds into **500+ registrations** at an audited target CAC of **₹4.00 / registration** (₹2,000 total budget ÷ 500 target), with a realized Day 4 CAC of **₹5.85** on committed capital (₹2,000 ÷ 342) and **₹3.36** on cash deployed (₹1,150 ÷ 342). Pacing tracking shows Day 4 actual at **342 / 500 (68.4%)** against a linear pacing benchmark of **286 / 500 (57.1%)**, putting the sprint **+56 students (+11.3%) ahead of schedule**.

---

## 📂 Submission Deliverables Index
All official challenge deliverables are stored in the `/docs` directory:
1. 📄 **[01_NxtWave_Growth_Plan.md](docs/01_NxtWave_Growth_Plan.md)**: Executive strategy, personas, 7-day cadence, funnel mechanics, ₹2,000 budget ledger, and risk mitigation.
2. 🎬 **[02_3_Minute_Demo_Script.md](docs/02_3_Minute_Demo_Script.md)**: Word-for-word, second-by-second transcript synchronized with the running product.
3. 🧠 **[03_AI_and_Learning_Notes.md](docs/03_AI_and_Learning_Notes.md)**: 12-section reflective retrospective detailing tools used, initial AI recommendations, human judgment rejections, and strategic synthesis.
4. 📘 **[04_Project_README.md](docs/04_Project_README.md)**: Master project documentation and local run instructions.

---

## 🚀 Key Product Features

### 🎓 1. Student Hub (`/student/dashboard`)
- **Inbound Referral Social Proof (`/register?ref=CODE`):** Dynamically resolves referring peers without exposing sensitive data:  
  *`"👋 You've been invited by Sai Bharadwaja from Amrita Vishwa Vidyapeetham. Register to unlock the AI Project Blueprint together."`*
- **3-Step Retention Onboarding (`/success`):** Step 1 (Seat Locked) $\rightarrow$ Step 2 (Join Demo Workshop WhatsApp Community with 245 peers) $\rightarrow$ Step 3 (Share Referral Pass).
- **# AI Share Copilot (`/student/referrals`):** Eliminates sharing friction by generating branch-tailored messages across 5 channels (WhatsApp Friend, Batch Group, Club, LinkedIn, Telegram) adapted by major (CSE GitHub capstone vs. ECE tech transition).
- **Optional AI Project Idea (`/student/project`):** Low-friction pre-task with 3 simple inputs (Title, Problem, Target User) and instant AI architectural feedback. Reassures students that pre-work is 100% optional and ready-to-run templates are provided on Day 7.
- **Workshop Readiness Checklist (`/student/readiness`):** 7-step pre-workshop checklist ensuring Google Colab compatibility and calendar sync.

### 🎖️ 2. Campus Ambassador Portal (`/ambassador/dashboard`)
- **Campus Quota Tracking:** Real-time progress toward the 50-student campus target quota.
- **# COPY ONE-LINER PITCH (`/ambassador/dashboard`):** Instant 1-click clipboard copy for Classroom Announcements (10s speech), WhatsApp Batch Broadcasts, Tech Club Pitches, and Personal DMs.
- **Day 1 Ambassador Recruitment Plan (`/ambassador/campaign`):** 24-hour execution roadmap (Hour 0–4 Scout $\rightarrow$ Hour 4–8 Recruit $\rightarrow$ Hour 8–12 Activate $\rightarrow$ Hour 12–24 Calibrate) delivering 216 Day-1 registrations across 12 campus leads (12 × ₹50 fixed milestone stipend = ₹600).
- **7-Day Distribution Playbook:** Step-by-step daily distribution cadence engineered for campus leads.

### 🏛️ 3. Campus Battle Mode (`/student/leaderboard`)
- **Inter-College Leaderboards:** Pits 12 regional engineering powerhouses against each other (RVCE Bengaluru vs. CBIT Hyderabad vs. VIT Vellore vs. PES University).
- **Live Rank Takeover Calculator:** Shows students real-time tribal urgency:  
  *`"13 more registrations needed to overtake RV College of Engineering for National Rank #1!"`*

### 📈 4. Admin Growth War Room (`/admin/dashboard`)
- **# The Growth Loop:** Visual 30-second wow moment mapping the 5 viral phases directly to the 4 ecosystem roles (`Student Hub ↓ College ↓ Ambassador ↓ Admin War Room`).
- **Live ₹2,000 Budget Ledger:** Real-time fiscal audit showing ₹2,000 committed capital (₹1,150 deployed cash Day 1–4, ₹850 contingency buffer), **Realized CAC ₹5.85** (₹2,000 ÷ 342) vs. **Target CAC ₹4.00** (₹2,000 ÷ 500), and an automated guardrail warning if spend exceeds ₹2,000.
- **Attendance Defense Engine:** Highlights that *"Registration is not the final metric. Attendance is the final outcome."* Uses a 4-tier pre-session commitment schedule (T-24h to Post-Session) to guarantee **220+ live attendees (64.3% attendance)**.
- **D0 $\rightarrow$ D7 Growth & Retention Timeline:** Interactive 8-step visual timeline tracking the learner journey from ingestion to live certificate issuance.
- **Growth Copilot Diagnostic Engine:** Automated telemetry diagnosis identifying conversion bottlenecks and recommending high-leverage growth interventions.
- **7-Day Simulator (`/admin/simulator`):** Interactive stepping sandbox allowing growth leads to model viral coefficients, channel conversions, and budget pacing.
- **AI Decision Log (`/admin/ai-decision-log`):** 5-part strategic audit documenting why raw AI recommendations (paid ads, generic landing pages, raw counts) were overridden by human judgment.

---

## 🛠️ Technology Stack
- **Framework:** Next.js 14.2.15 (App Router, React Server Components, Suspense Streaming)
- **Language:** TypeScript 5.0 (Strict mode, end-to-end typed data models)
- **Styling:** Tailwind CSS 3.4 (Modern dark-mode glassmorphic theme, responsive mobile-first)
- **Icons:** Lucide React
- **Data Engine:** Deterministic In-Memory Simulation Store with localStorage cross-tab synchronization and seed fallbacks
- **Deployment Target:** Node.js 18+ / 20+ / 24+ compatible (Cross-platform Windows/macOS/Linux)

---

## 📦 How to Run Locally

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### 1. Clone & Navigate
```bash
git clone https://github.com/nxtwave-growth-challenge/ai-campus-growth-engine.git
cd ai-campus-growth-engine
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Production Build & Start (Recommended)
```bash
npm run build
npm start
```
*The application will launch on `http://localhost:3000`.*

### 4. Development Mode (Optional)
```bash
npm run dev
```

---

## 🎬 3-Minute Demo Walkthrough Path

For video recordings or live presentations, follow this exact sequence:

1. **[0:00 – 0:20] Landing Page (`/`):** Introduce the problem (500 students, 7 days, ₹2k budget). Point to the live target tracker pill.
2. **[0:20 – 0:45] Inbound Referral Registration (`/register?ref=AI60-SAI88`):** Show the dynamic social proof banner (*"Invited by Sai Bharadwaja from Amrita Vishwa Vidyapeetham"*). Submit the form and showcase the 3-step `/success` sequence.
3. **[0:45 – 1:10] Student Hub & AI Share Copilot (`/student/referrals`):** Switch branch to ECE to show instant message regeneration. Click `/student/rewards` to explain non-monetary career unlocks.
4. **[1:10 – 1:35] Campus Battle Mode (`/student/leaderboard`):** Highlight Amrita vs. RVCE rivalry and the Rank Takeover Calculator.
5. **[1:35 – 2:15] Admin War Room (`/admin/dashboard`):** Walk through **# The Growth Loop**, the Multi-Role Alignment Matrix, and the **Attendance Defense Engine** (4-tier commitment schedule).
6. **[2:15 – 2:40] Live ₹2k Budget Ledger & Simulator (`/admin/dashboard` & `/admin/simulator`):** Review the ₹1,150 spent, ₹850 buffer, ₹3.36 CAC, and step through the 7-day pacing simulation.
7. **[2:40 – 2:55] AI Decision Log (`/admin/ai-decision-log`):** Highlight the 5-part strategic audit where raw AI ideas were overridden.
8. **[2:55 – 3:00] Closing Statement:** Deliver the concluding thesis on building a growth operating system rather than a static landing page.

---

## 🧪 Simulation Assumptions & Honest Disclosures
To maintain absolute integrity, all simulated aspects are clearly demarcated:
- **`DEMO / SIMULATION`:** All registration volumes, referral trees, and telemetry feeds represent a realistic deterministic simulation model engineered to demonstrate pacing and attribution logic.
- **`PLANNING ASSUMPTION`:** Conversion benchmarks (20.7% visitor-to-registration, K = 0.62 viral multiplier, 64.3% live attendance) are planning assumptions based on educational webinar averages and campus dynamics, not historical real-world NxtWave campaign claims.
- **Zero Real-World Claims:** This application does not claim to have acquired real external students or claim official NxtWave institutional metrics. It is a fully working simulation prototype.

---

## 💡 Human Judgment vs. Raw AI
This project demonstrates that AI is a tool, not a strategist:
- **When AI suggested paid ads:** Evaluated against the ₹2,000 budget and rejected due to ₹60+ CAC. Replaced with organic ambassador bounties.
- **When AI suggested a static landing page:** Evaluated against challenge differentiation and expanded into a full Growth Operating System.
- **When AI suggested raw referral counts:** Evaluated against quality hygiene and replaced with multi-factor Quality Scoring to protect live attendance.
- **When AI suggested faculty cold emails:** Evaluated against 7-day sprint deadlines and replaced with student-led Campus Battle mode.

---

## 🔮 Future Roadmap
1. **Official WhatsApp Business Cloud API:** Integrate verified enterprise messaging for automated reminders.
2. **Automated GitHub Capstone Verifier Bot:** Auto-grade student Colab project PRs and issue verifiable digital credentials.
3. **College ERP Deep Linking:** Direct attendance synchronization with college placement cell portals.

---
*Built with passion, fiscal discipline, and growth engineering rigor for the NxtWave Growth Challenge.*
