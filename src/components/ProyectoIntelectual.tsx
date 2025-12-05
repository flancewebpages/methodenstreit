export default function ProyectoIntelectual() {
  return (
    <section
      id="proyecto-intelectual"
      className="mt-24 space-y-10 animate-fade-in-up"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50 leading-snug">
        Proyecto intelectual de Menger y proyecto político de Schmoller
      </h2>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">

        <div className="space-y-5 text-sm sm:text-base leading-relaxed text-slate-200">

          <p className="hover:bg-slate-900/30 transition rounded-lg p-1">
            En el caso de Menger, su <em>intellectual agenda</em> respondía a un
            proyecto estrictamente científico: fundar una teoría económica
            universal basada en principios lógicos de la acción humana. Como
            muestran Streissler (1972) y el propio Menger en sus{" "}
            <em>Principles of Economics</em> (1871), su objetivo era aislar leyes
            generales mediante un método deductivo y <em>a priori</em>,
            desligando la economía de la historia, la política y las instituciones.
          </p>

          <p className="pl-4 border-l-2 border-sky-400/50 text-slate-300">
            Esta motivación era esencialmente epistemológica: consolidar la
            economía como una ciencia teórica autónoma, más cercana a las
            ciencias formales que a los estudios de Estado. En consecuencia,
            Menger operaba dentro de una maquinaria intelectual, no dentro de un
            programa de reforma social ni de una red institucional activa.
          </p>

          <p className="hover:bg-slate-900/30 transition rounded-lg p-1">
            En contraste, la agenda de Schmoller estaba directamente vinculada
            con el aparato estatal alemán y con el movimiento reformista
            articulado por el <em>Verein für Sozialpolitik</em>. Según explican
            Tribe (1988) y Grimmer-Solem (2003), la Escuela Historicista operaba
            como un engranaje intelectual del Estado prusiano: producía
            estadísticas, asesoraba legislación laboral, influía en la política
            educativa y orientaba intervenciones destinadas a gestionar los
            efectos sociales de la industrialización.
          </p>

          <p className="pl-4 border-l-2 border-emerald-400/50 text-slate-300">
            De ahí que Schmoller defendiera un método inductivo y contextual,
            concebido para diagnosticar problemas reales y proponer reformas
            institucionales. Mientras Menger buscaba neutralidad científica,
            Schmoller entendía la economía como una herramienta moral y
            gubernamental, cuyo propósito central era fortalecer la cohesión
            social y mejorar las condiciones de vida mediante acción pública.
          </p>

        </div>

        {/* IMAGEN Y CARDS */}
        <div className="animate-fade-in-up lg:animate-fade-in-up-delayed space-y-4">

        {/* IMAGEN */}
        <div className="relative rounded-3xl border border-slate-700/70 bg-slate-900/90 p-5 shadow-[0_25px_55px_rgba(0,0,0,0.9)] backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/70">
                <img
                src="imagenes/Imagen1.jpeg"
                alt="Relación entre ciencia económica y política en el Methodenstreit"
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 hover:scale-[1.04] transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />

                {/* NUEVO PIE DE FOTO */}
                <div className="absolute bottom-2 left-3 right-3 text-[0.65rem] text-slate-400 italic">
                Escuela Austriaca de economía
                </div>
            </div>
        </div>


          {/* MINI CARDS DEBAJO DE LA IMAGEN */}
          <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm">

            <div className="rounded-xl bg-slate-950/60 border border-sky-400/40 p-3">
              <p className="font-medium text-sky-300 mb-1">Menger</p>
              <p>
                Agenda científica orientada a leyes universales y principios
                lógicos de la acción humana.
              </p>
            </div>

            <div className="rounded-xl bg-slate-950/60 border border-emerald-400/40 p-3">
              <p className="font-medium text-emerald-300 mb-1">Schmoller</p>
              <p>
                Agenda estatal vinculada al <em>Verein für Sozialpolitik</em> y al
                diagnóstico de problemas sociales reales.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
