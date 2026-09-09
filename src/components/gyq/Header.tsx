"use client";

import { Bell, LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Brand from "./Brand";
import { useStudentAuth } from "./StudentAuth";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { student, logout } = useStudentAuth();
  const initials = student?.name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase() || "GY";
  return <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl"><div className="mx-auto flex h-[64px] max-w-7xl items-center justify-between px-4 sm:px-7"><Brand/><nav className="hidden items-center gap-7 text-sm font-bold text-slate-500 lg:flex"><Link className="text-slate-950" href="/dashboard">Dashboard</Link><a href="#subjects">Subjects</a><a href="#crammer">Crammer Pass</a></nav><div className="hidden items-center gap-2 sm:flex">{student ? <><button aria-label="Notifications" className="relative grid size-9 place-items-center rounded-full bg-slate-100 text-slate-600"><Bell size={16}/><i className="absolute right-2 top-2 size-1.5 rounded-full bg-red-500" /></button><div className="grid size-9 place-items-center rounded-full bg-violet-100 text-xs font-black text-violet-700">{initials}</div><button onClick={logout} title="Log out" className="grid size-9 place-items-center rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-600"><LogOut size={17}/></button></> : <Link href="/login" className="rounded-xl bg-slate-950 px-4 py-2 text-xs font-black text-white">Login</Link>}</div><button onClick={() => setOpen(!open)} className="grid size-9 place-items-center rounded-xl bg-slate-100 lg:hidden" aria-label="Open menu">{open ? <X size={20}/> : <Menu size={20}/>}</button></div>{open && <nav className="border-t border-slate-100 bg-white px-5 py-4 text-sm font-bold text-slate-600 lg:hidden"><div className="flex flex-col gap-4"><Link onClick={() => setOpen(false)} href="/dashboard">Dashboard</Link><a href="#subjects">Subjects</a><a href="#crammer">Crammer Pass</a>{student ? <button onClick={() => { logout(); setOpen(false); }} className="flex items-center gap-2 text-left text-red-600"><LogOut size={16}/> Logout</button> : <Link onClick={() => setOpen(false)} href="/login">Login / Create account</Link>}</div></nav>}</header>;
}
