"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Student = { name: string; email: string };
type AuthValue = { student: Student | null; login: (student: Student) => void; logout: () => void };
const AuthContext = createContext<AuthValue | undefined>(undefined);

export function StudentAuthProvider({ children }: { children: React.ReactNode }) {
  const [student, setStudent] = useState<Student | null>(null);
  useEffect(() => { const saved = window.localStorage.getItem("gyq-student"); if (saved) setStudent(JSON.parse(saved) as Student); }, []);
  const login = (nextStudent: Student) => { window.localStorage.setItem("gyq-student", JSON.stringify(nextStudent)); setStudent(nextStudent); };
  const logout = () => { window.localStorage.removeItem("gyq-student"); setStudent(null); };
  return <AuthContext.Provider value={{ student, login, logout }}>{children}</AuthContext.Provider>;
}
export function useStudentAuth() { const value = useContext(AuthContext); if (!value) throw new Error("useStudentAuth must be used within StudentAuthProvider"); return value; }
