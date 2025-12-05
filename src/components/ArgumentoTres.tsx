export default function ArgumentoTres() {
  return (
    <section
      id="argumento-3"
      className="mt-24 space-y-6 animate-fade-in-up"
    >

      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
        La economía como ciencia teórica y racional
      </h2>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
        {/* Texto */}
        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-200">
          <p>
            Por un lado, Carl Menger aspiraba a fundar una ciencia económica
            teórica que explicara las regularidades universales del comportamiento
            humano. Así, en <em>Principles of Economics</em> (1871), sostiene que
            las leyes económicas son “exactas” y derivan de la estructura racional
            de la acción, no de la observación empírica contingente.
          </p>

          <p>
            Siguiendo al autor, el conocimiento económico debía construirse
            <span className="italic"> a priori</span>, del mismo modo que las matemáticas
            derivan principios universales a partir de axiomas sobre el espacio.
          </p>

          <p
            className="border-l-2 border-sky-400/70 pl-4 italic text-slate-100
                       bg-slate-900/60 rounded-r-xl py-3"
          >
            “To want to test the pure theory of economy by experience in its full
            reality is a process analogous to that of the mathematician who wants
            to correct the principles of geometry by measuring real objects.”
            <span className="not-italic text-slate-400"> (Menger, 1883, p. 70)</span>
          </p>

          <p>
            En consecuencia, Menger concibe los fenómenos económicos como
            relaciones necesarias y regulares, independientemente del contexto
            histórico o institucional. La tarea científica consiste en descubrir
            las leyes causales que gobiernan la satisfacción de necesidades y la
            asignación de recursos, abstrayendo de las particularidades empíricas.
          </p>

          <p className="text-slate-300">
            Esta visión racionalista y deductiva expresa su convicción de que el
            fenómeno social —la economía— puede ser comprendido mediante leyes
            universales de la acción humana.
          </p>
        </div>

        {/* Imagen lateral */}
        <div className="animate-fade-in-up lg:animate-fade-in-up-delayed">
          <div className="relative rounded-3xl border border-slate-700/70 bg-slate-900/90 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur">
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/70">
              <img
                src="imagenes/mengerbyn.jpg"
                alt="Retrato conceptual de Carl Menger"
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 hover:scale-[1.03] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-[0.7rem] text-slate-200">
                Menger: leyes económicas universales derivadas del comportamiento humano racional.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tarjetas */}
      <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm">
        <div className="rounded-xl bg-slate-950/70 border border-sky-500/40 p-3">
          <p className="font-medium text-sky-200 mb-1">Universalidad</p>
          <p>
            Las leyes económicas no dependen del contexto histórico:
            son expresiones de la acción humana.
          </p>
        </div>
        <div className="rounded-xl bg-slate-950/70 border border-purple-500/40 p-3">
          <p className="font-medium text-purple-200 mb-1">Deductivismo</p>
          <p>
            El conocimiento económico debe derivarse a priori a
            partir de principios generales, no de observación empírica.
          </p>
        </div>
      </div>
    </section>
  );
}
