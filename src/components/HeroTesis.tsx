export default function HeroTesis() {
  return (
    <section
      id="tesis"
      className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center space-y-10 animate-fade-in-up mt-14 sm:mt-16 lg:mt-20"
    >
      <div>
        <p className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-slate-900/60 px-3 py-1 text-xs font-medium text-sky-200 mb-4 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
          Entre leyes universales e historia viva
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50 leading-tight">
          Entre leyes universales e historia viva: el Methodenstreit como
          disputa sobre la naturaleza y el propósito de la ciencia económica
        </h1>

        <div className="mt-6 rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5 sm:p-6 lg:p-7 shadow-[0_18px_45px_rgba(15,23,42,0.8)] backdrop-blur-md">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300 mb-2">
            Tesis definitiva
          </h2>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            El Methodenstreit no fue solo un debate metodológico, sino el origen
            de una tensión fundacional sobre la economía: si la disciplina debe
            aspirar a la objetividad científica o asumir una función moral y
            social, un dilema que aún define la identidad y el poder del saber
            económico.
          </p>
        </div>
      </div>

      <div className="animate-fade-in-up lg:animate-fade-in-up-delayed">
        <div className="relative group">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-sky-400/40 via-emerald-400/30 to-orange-400/40 opacity-60 blur-xl group-hover:opacity-90 transition-opacity" />
          <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-900/90 shadow-[0_18px_45px_rgba(0,0,0,0.9)]">
            <img
              src="imagenes/Disputation.jpg"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1 text-xs text-slate-200">
              <p className="font-medium">
                El Methodenstreit como disputa sobre el sentido de la ciencia
                económica
              </p>
              <p className="text-slate-400">
                Entre “leyes puras” del valor y la historia viva de las
                instituciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
