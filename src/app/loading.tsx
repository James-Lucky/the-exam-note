import Brand from "@/components/gyq/Brand";

export default function Loading() {
  return <main className="ambient grid min-h-screen place-items-center bg-[#f5f7fc] p-6"><div className="w-full max-w-sm text-center"><div className="flex justify-center"><Brand /></div><div className="mt-8 rounded-[28px] bg-white p-7 shadow-xl shadow-slate-200/60"><div className="mx-auto size-11 animate-spin rounded-full border-4 border-slate-100 border-t-blue-600"/><h1 className="mt-5 text-lg font-black">Getting your high-yield set ready</h1><p className="mt-2 text-sm text-slate-500">Reading CBSE patterns, so you don&apos;t have to.</p><div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-2/3 animate-pulse rounded-full bg-blue-600"/></div></div></div></main>;
}
