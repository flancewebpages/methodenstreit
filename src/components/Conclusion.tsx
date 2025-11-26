export default function Conclusion() {
  return (
    <section
      id="conclusion"
      className="mt-28 space-y-6 animate-fade-in-up"
    >
      <p className="text-xs uppercase tracking-[0.22em] text-fuchsia-300">
        Conclusión · Tensión fundacional de la economía
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
        Entre leyes universales y construcción histórica
      </h2>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">

        {/* Texto */}
        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-200">
          <p>
            En conjunto, los argumentos muestran que el <strong>Methodenstreit </strong>
            no fue solo una discusión técnica entre inducción e individualismo
            metodológico, sino una disputa sobre qué es lo que la economía debe
            explicar y <strong>para qué</strong> debe hacerlo.
          </p>

          <p>
            Menger defendía una ciencia económica orientada a descubrir leyes
            universales de la acción humana —abstrayendo del contexto histórico—
            mientras Schmoller sostenía que la economía debía estudiar la
            evolución concreta de las instituciones y asumir una función ética y
            social.
          </p>

          <p>
            Esta divergencia, que atraviesa tanto su concepción del propósito de
            la disciplina como su definición del fenómeno económico y del método
            adecuado para estudiarlo, revela una tensión más profunda entre dos
            formas de entender la vida social: como resultado espontáneo de acciones
            individuales o como construcción histórica colectiva.
          </p>

          <p className="text-slate-300">
            Por ello, el Methodenstreit no solo explica la separación entre la
            economía teórica y la economía histórica, sino que inaugura una pregunta
            que sigue abierta: si la ciencia económica debe aspirar a la neutralidad
            científica o reconocer su dimensión normativa y su vínculo con la vida
            social real.
          </p>
        </div>

        {/* Imagen lateral */}
        <div className="animate-fade-in-up lg:animate-fade-in-up-delayed">
          <div className="relative rounded-3xl border border-slate-700/70 bg-slate-900/90 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur">
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/70">
              <img
                src="imagenes/Chess.png"
                alt="Ajedrez representando tensión estratégica"
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 hover:scale-[1.03] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-[0.7rem] text-slate-200">
                La disputa metodológica como juego estratégico intelectual:
                racionalismo vs historicismo.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tarjetas finales */}
      <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm">
        <div className="rounded-xl bg-slate-950/70 border border-sky-500/40 p-3">
          <p className="font-medium text-sky-200 mb-1">
            Economía teórica
          </p>
          <p>
            Leyes universales de la acción humana: el orden emerge desde los
            individuos.
          </p>
        </div>
        <div className="rounded-xl bg-slate-950/70 border border-emerald-500/40 p-3">
          <p className="font-medium text-emerald-200 mb-1">
            Economía histórica
          </p>
          <p>
            Instituciones y valores colectivos como origen de la vida económica:
            el orden es construido.
          </p>
        </div>
      </div>
    </section>
  );
}
