export default function Home() {
  return (
    <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 text-center max-w-2xl w-full transform hover:scale-[1.02] transition-all duration-300">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-purple-300 mb-6 drop-shadow-lg">
          Neem Ka Patta Kadwa Hai
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide">
          Aage ka soch lo... ✨
        </p>
        
        <div className="mt-10 flex justify-center gap-4">
          <button className="px-8 py-3 bg-white text-purple-900 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
            Soch Liya
          </button>

        </div>
      </div>
    </main>
  );
}
