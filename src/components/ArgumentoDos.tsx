export default function ArgumentoDos() {
  return (
    <section
      id="argumento-2"
      className="mt-24 space-y-6 animate-fade-in-up"
    >
      <p className="text-xs uppercase tracking-[0.22em] text-emerald-300">
        Argumento 2 · Naturaleza de lo social
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
        Instituciones: ¿resultado de individuos o estructuras históricas?
      </h2>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-200">
          <p>
            La disputa central del Methodenstreit reside en cómo cada
            autor concibe el fenómeno social que la economía debe
            explicar. Para Menger, la sociedad surge de la interacción
            intencionada de individuos racionales; las instituciones
            —mercado, dinero o propiedad— son el resultado no planificado
            de la acción humana (“unintended results of human action”,
            Menger, 1883, p. 146).
          </p>

          <p>
            Por tanto, el análisis debe partir de los elementos fundamentales
            del comportamiento individual (individualismo metodológico) y
            deducir de ellos las regularidades económicas.
          </p>

          <p className="border-l-2 border-emerald-400/70 pl-4 italic text-slate-100 bg-slate-900/60 rounded-r-xl py-3">
            “Only the historical method can reveal how economic life
            develops from the moral, legal, and political institutions
            of a people.”
            <span className="not-italic text-slate-400"> (Schmoller, 1883)</span>
          </p>

          <p>
            Schmoller ve a las instituciones no como un subproducto del
            individualismo, sino como resultado de configuraciones
            históricas y normativas que representan valores colectivos
            y estructuras de poder.
          </p>

          <p className="text-slate-300">
            Esta diferencia no es meramente técnica, sino que expresa
            dos concepciones opuestas de lo social. Para Menger, las
            instituciones son consecuencias; para Schmoller, son causas.
            La controversia revela una tensión epistemológica sobre el origen
            y la naturaleza de la vida económica: entre la espontaneidad
            individual y la construcción histórica colectiva.
          </p>
        </div>

        {/* Imagen lateral con mismo estilo del diseño */}
        <div className="animate-fade-in-up lg:animate-fade-in-up-delayed">
          <div className="relative rounded-3xl border border-slate-700/70 bg-slate-900/90 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur">
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/70">
              <img
                src="/imagenes/Methodenstreit1.webp"
                alt="Representación conceptual del Methodenstreit"
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 hover:scale-[1.03] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-[0.7rem] text-slate-200">
                El conflicto entre individuos y estructuras: ¿efecto o causa?
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tarjetas comparativas */}
      <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm">
        <div className="rounded-xl bg-slate-950/70 border border-sky-500/40 p-3">
          <p className="font-medium text-sky-200 mb-1">Menger</p>
          <p>
            Instituciones como efectos no intencionados de acciones individuales.
          </p>
        </div>
        <div className="rounded-xl bg-slate-950/70 border border-emerald-500/40 p-3">
          <p className="font-medium text-emerald-200 mb-1">Schmoller</p>
          <p>
            Instituciones históricas y morales como causa de la vida económica.
          </p>
        </div>
      </div>
    </section>
  );
}
