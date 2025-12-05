export default function Bibliografia() {
  return (
    <section
      id="bibliografia"
      className="mt-28 space-y-8 animate-fade-in-up"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
        Bibliografía
      </h2>

      <div className="space-y-6">

        {/* ITEM */}
        <div className="group p-5 sm:p-6 rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur
                        shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition hover:border-sky-400/40">
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Menger, C. (1883/1985). <em>Investigations into the Method of the Social Sciences</em>.
            New York: New York University Press.
          </p>
        </div>

        {/* ITEM */}
        <div className="group p-5 sm:p-6 rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur
                        shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition hover:border-sky-400/40">
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Menger, C. (1871/1996). <em>Principios de economía política</em> (J. A. de Aguirre, Trad.).  
            Madrid: Unión Editorial.
          </p>
        </div>

        {/* ITEM CON ENLACE */}
        <div className="group p-5 sm:p-6 rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur
                        shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition hover:border-emerald-400/40">
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Schmoller, G. (1883/2021). <em>On the Methodology of the Social Sciences</em>.{" "}
            <span className="italic">Journal of Contextual Economics, Schmollers Jahrbuch</span>, 
            141(2), 139–160.
          </p>
          <a
            href="https://www.econstor.eu/bitstream/10419/292603/1/schm.141.4.323.pdf"
            target="_blank"
            className="inline-block mt-2 text-sky-300 hover:text-sky-200 text-xs underline underline-offset-4 transition"
          >
            Enlace al texto completo →
          </a>
        </div>

        {/* ITEM */}
        <div className="group p-5 sm:p-6 rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur
                        shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition hover:border-sky-400/40">
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Grimmer-Solem, E. (2003). <em>The rise of historical economics and social reform in Germany,
            1864–1894</em>. Oxford University Press.
          </p>
        </div>

        {/* ITEM */}
        <div className="group p-5 sm:p-6 rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur
                        shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition hover:border-purple-400/40">
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Menger, C. (1871). <em>Principles of Economics</em>. Ludwig von Mises Institute (edición moderna).
          </p>
        </div>

        {/* ITEM */}
        <div className="group p-5 sm:p-6 rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur
                        shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition hover:border-orange-400/40">
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Streissler, E. W. (1972). <em>To what extent was the Austrian School marginalist?</em>{" "}
            <span className="italic">History of Political Economy</span>, 4(2), 426–441.
          </p>
        </div>

      </div>
    </section>
  );
}
