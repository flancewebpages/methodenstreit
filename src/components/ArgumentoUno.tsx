export default function ArgumentoUno() {
  return (
    <section
      id="argumento-1"
      className="mt-20 animate-fade-in-up"
    >
      <p className="text-xs uppercase tracking-[0.22em] text-orange-300 mb-3">
        Argumento 1 · Propósito de la economía
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50 mb-6">
        ¿Ciencia “pura” o herramienta de reforma social?
      </h2>

      <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-200">
        <p>
          La divergencia entre Menger y Schmoller se extiende a la pregunta
          sobre el propósito de la ciencia económica. Por un lado, Menger
          defendía una economía “pura”, orientada a descubrir leyes universales
          del valor y la eficiencia. Schmoller sostenía que la economía debía
          servir al Estado y contribuir a la reforma social.
        </p>

        <p className="border-l-2 border-sky-400/70 pl-4 italic text-slate-100 bg-slate-900/60 rounded-r-xl py-3">
          “Those who, as Menger seems to do, limit theoretical political
          economy mainly to the doctrine of the formation of value and price […]
          do not offer a theory of the general nature of the economy.”
          <span className="not-italic text-slate-400"> (Schmoller, 1883)</span>
        </p>

        <p>
          Siguiendo a Schmoller, el conocimiento económico no podía desligarse
          de la responsabilidad ética y política de mejorar las condiciones
          de vida. Mientras el método de Menger buscaba neutralidad científica,
          el de Schmoller afirmaba la dimensión moral del saber económico.
        </p>

        <p className="text-slate-300">
          Este contraste anticipa una tensión persistente en la disciplina:
          entre el ideal de objetividad y la función normativa de la economía
          en la sociedad.
        </p>
      </div>

      {/* Pequeña tarjeta comparativa */}
      <div className="mt-8 grid gap-3 sm:grid-cols-2 text-xs sm:text-sm">
        <div className="rounded-xl border border-slate-700/70 bg-slate-900/70 p-3 sm:p-4">
          <p className="text-slate-400 uppercase text-[0.65rem] tracking-[0.22em] mb-1">
            Menger
          </p>
          <p className="text-slate-100">
            Economía “pura”: descubrir leyes universales del valor y la eficiencia.
          </p>
        </div>
        <div className="rounded-xl border border-slate-700/70 bg-slate-900/70 p-3 sm:p-4">
          <p className="text-slate-400 uppercase text-[0.65rem] tracking-[0.22em] mb-1">
            Schmoller
          </p>
          <p className="text-slate-100">
            Economía histórica: responsabilidad moral y reforma social.
          </p>
        </div>
      </div>
    </section>
  );
}
