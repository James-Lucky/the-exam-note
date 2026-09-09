"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function StartupLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => { const timer = window.setTimeout(() => setLoading(false), 700); return () => window.clearTimeout(timer); }, []);
  return <>{loading && <div className="fixed inset-0 z-[100] grid place-items-center bg-[#f5f7fc]"><div className="text-center"><Image src="/gyq-logo-transparent.png" alt="GYQ" width={120} height={52} className="mx-auto h-12 w-[120px] object-contain" priority/><div className="mx-auto mt-7 size-9 animate-spin rounded-full border-[3px] border-slate-200 border-t-blue-600"/><p className="mt-4 text-xs font-black tracking-wide text-slate-500">LOADING YOUR CRAM PLAN</p></div></div>}{children}</>;
}
