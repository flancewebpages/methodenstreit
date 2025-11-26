export default function ArgumentoCuatro() {
  return (
    <section
      id="argumento-4"
      className="mt-24 space-y-6 animate-fade-in-up"
    >
      <p className="text-xs uppercase tracking-[0.22em] text-orange-300">
        Argumento 4 · Schmoller y la historicidad del fenómeno económico
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
        Economía como disciplina histórica y normativa
      </h2>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
        {/* Texto */}
        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-200">
          <p>
            Frente a la abstracción mengeriana, Gustav Schmoller reivindica el
            carácter histórico y moral de la economía. En su obra
            <em> On the Essence of the Social Sciences and Their Method</em> (1883),
            afirma:
          </p>

          <p className="border-l-2 border-emerald-400/70 pl-4 italic text-slate-100
                        bg-slate-900/60 rounded-r-xl py-3">
            “We must direct our attention to the phenomena of economic life as
            they present themselves in their empirical reality, in order to gain
            insight into their laws of development.”
            <span className="not-italic text-slate-400"> (Schmoller, 1883, p. 325)</span>
          </p>

          <p>
            Según Schmoller, la economía no puede desligarse de los valores,
            costumbres e instituciones que modelan el comportamiento colectivo,
            pues estos son el verdadero objeto de la ciencia social.
          </p>

          <p>
            Comprender la economía implica rastrear cómo las instituciones
            —familia, Estado, derecho, moral— moldean las formas de producción,
            intercambio y consumo en cada época. De ahí su rechazo a la pretensión
            de leyes universales y su apuesta por un método inductivo que revele
            el proceso histórico de desarrollo económico.
          </p>

          <p className="text-slate-300">
            Así, la economía no es una ciencia formal de relaciones abstractas,
            sino una disciplina empírica y normativa que estudia la evolución de
            la vida social. En últimas, esta concepción revela una diferencia
            fundamental con Menger: mientras el primero parte de la lógica
            individual, Schmoller parte del entramado institucional que constituye
            la realidad económica.
          </p>
        </div>

        {/* Imagen lateral */}
        <div className="animate-fade-in-up lg:animate-fade-in-up-delayed">
          <div className="relative rounded-3xl border border-slate-700/70 bg-slate-900/90 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur">
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/70">
              <img
                src="/imagenes/schomoller.jpg"
                alt="Retrato conceptual de Gustav Schmoller"
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 hover:scale-[1.03] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-[0.7rem] text-slate-200">
                Schmoller: la economía nace de las instituciones y su evolución histórica.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tarjetas */}
      <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm">
        <div className="rounded-xl bg-slate-950/70 border border-emerald-500/40 p-3">
          <p className="font-medium text-emerald-200 mb-1">Instituciones</p>
          <p>
            La economía surge de valores, costumbres y estructuras históricas.
          </p>
        </div>
        <div className="rounded-xl bg-slate-950/70 border border-orange-500/40 p-3">
          <p className="font-medium text-orange-200 mb-1">Método inductivo</p>
          <p>
            La teoría se deriva del estudio empírico de la vida económica
            real.
          </p>
        </div>
      </div>
    </section>
  );
}
