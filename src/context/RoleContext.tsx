'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { RoleType } from '@/lib/types';

export interface RecentRegistration {
  name: string;
  college: string;
  code: string;
  time: string;
}

interface RoleContextType {
  role: RoleType;
  setRole: (role: RoleType) => void;
  activeStudent: {
    id: string;
    name: string;
    college: string;
    referralCode: string;
    growthScore: number;
    email: string;
    branch: string;
    aiExperience?: string;
    goal?: string;
    referralCount?: number;
  };
  activeAmbassador: {
    id: string;
    name: string;
    college: string;
    referralCode: string;
    registrations: number;
    rank: number;
    reach: number;
  };
  switchStudent: (id: string) => void;
  switchAmbassador: (id: string) => void;
  registrationCount: number;
  incrementRegistrationCount: (increment?: number) => void;
  recentRegistrations: RecentRegistration[];
  addRecentRegistration: (reg: { name: string; college: string; code: string }) => void;
}

const defaultStudent = {
  id: 'std-1',
  name: 'Sai Bharadwaja',
  college: 'Amrita Vishwa Vidyapeetham',
  referralCode: 'AI60-SAI88',
  growthScore: 88,
  email: 'sai.bharadwaja@amrita.edu',
  branch: 'Computer Science & Engineering',
  aiExperience: 'Intermediate',
  goal: 'Build my first AI project',
  referralCount: 4,
};

const defaultAmbassador = {
  id: 'amb-1',
  name: 'Sai Bharadwaja',
  college: 'Amrita Vishwa Vidyapeetham',
  referralCode: 'SAI-AMRITA',
  registrations: 78,
  rank: 1,
  reach: 520,
};

const initialRecentRegistrations: RecentRegistration[] = [
  { name: 'Sai Bharadwaja', college: 'Amrita Vishwa Vidyapeetham', code: 'AI60-SAI88', time: 'Just now' },
  { name: 'Karthik Varma', college: 'BITS Pilani Hyderabad', code: 'KARTHIK-AI-108', time: '4m ago' },
  { name: 'Sneha Rao', college: 'PES University', code: 'SNEHA-AI-441', time: '12m ago' },
  { name: 'Priya Nair', college: 'CBIT Hyderabad', code: 'PRIYA-AI-314', time: '28m ago' },
];

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<RoleType>('admin');
  const [activeStudent, setActiveStudent] = useState(defaultStudent);
  const [activeAmbassador, setActiveAmbassador] = useState(defaultAmbassador);
  const [registrationCount, setRegistrationCount] = useState<number>(342);
  const [recentRegistrations, setRecentRegistrations] = useState<RecentRegistration[]>(initialRecentRegistrations);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedRole = localStorage.getItem('growth_engine_role');
      if (savedRole && (savedRole === 'student' || savedRole === 'ambassador' || savedRole === 'admin')) {
        setRoleState(savedRole as RoleType);
      }
      const savedCount = localStorage.getItem('growth_engine_reg_count');
      if (savedCount) {
        const parsed = parseInt(savedCount, 10);
        if (!isNaN(parsed) && parsed >= 342) {
          setRegistrationCount(parsed);
        }
      }
      const savedRecent = localStorage.getItem('growth_engine_recent_regs');
      if (savedRecent) {
        try {
          const parsedRecent = JSON.parse(savedRecent);
          if (Array.isArray(parsedRecent) && parsedRecent.length > 0) {
            setRecentRegistrations(parsedRecent);
          }
        } catch {
          // ignore corrupted local state
        }
      }
    }
  }, []);

  const setRole = (newRole: RoleType) => {
    setRoleState(newRole);
    if (typeof window !== 'undefined') {
      localStorage.setItem('growth_engine_role', newRole);
    }
  };

  const incrementRegistrationCount = (increment = 1) => {
    setRegistrationCount((prev) => {
      const nextVal = prev + increment;
      if (typeof window !== 'undefined') {
        localStorage.setItem('growth_engine_reg_count', String(nextVal));
      }
      return nextVal;
    });
  };

  const addRecentRegistration = (reg: { name: string; college: string; code: string }) => {
    const newItem: RecentRegistration = {
      ...reg,
      time: 'Just now',
    };
    setRecentRegistrations((prev) => {
      const updated = [newItem, ...prev.slice(0, 4)];
      if (typeof window !== 'undefined') {
        localStorage.setItem('growth_engine_recent_regs', JSON.stringify(updated));
      }
      return updated;
    });
  };

  const switchStudent = (id: string) => {
    if (id === 'std-2') {
      setActiveStudent({
        id: 'std-2',
        name: 'Priya Nair',
        college: 'CBIT Hyderabad',
        referralCode: 'PRIYA-AI-314',
        growthScore: 65,
        email: 'priya.nair@cbit.ac.in',
        branch: 'Information Technology',
        aiExperience: 'Intermediate',
        goal: 'Build a resume project',
        referralCount: 2,
      });
    } else {
      setActiveStudent(defaultStudent);
    }
  };

  const switchAmbassador = (id: string) => {
    if (id === 'amb-2') {
      setActiveAmbassador({
        id: 'amb-2',
        name: 'Rohan Deshmukh',
        college: 'RV College of Engineering',
        referralCode: 'ROHAN-RVCE',
        registrations: 74,
        rank: 2,
        reach: 480,
      });
    } else {
      setActiveAmbassador(defaultAmbassador);
    }
  };

  return (
    <RoleContext.Provider
      value={{
        role,
        setRole,
        activeStudent,
        activeAmbassador,
        switchStudent,
        switchAmbassador,
        registrationCount,
        incrementRegistrationCount,
        recentRegistrations,
        addRecentRegistration,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
}
