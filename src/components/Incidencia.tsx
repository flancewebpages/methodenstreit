export default function Incidencia() {
  return (
    <section
      id="incidencia"
      className="mt-32 animate-fade-in-up space-y-12"
    >
      {/* TÍTULO */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50 text-center">
        Incidencia de la disputa en el desarrollo posterior de la economía
      </h2>

      {/* IMAGEN AMPLIA ARRIBA — DISEÑO DIFERENTE */}
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-slate-700/70 shadow-[0_30px_60px_rgba(0,0,0,0.8)] bg-slate-900">
          <img
            src="imagenes/Imagen2.png"
            alt="Influencia del Methodenstreit"
            className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>

      {/* CONTENIDO EN DOS COLUMNAS */}
      <div className="grid gap-10 lg:grid-cols-2 leading-relaxed text-slate-200 text-sm sm:text-base">

        {/* COLUMNA 1 */}
        <div className="space-y-4">
          <p>
            El <strong>Methodenstreit</strong> tuvo una influencia decisiva en la configuración
            de corrientes económicas posteriores, especialmente en torno al papel de las
            instituciones y del análisis histórico. La insistencia de Schmoller en estudiar
            normas, valores y estructuras sociales abrió el camino para la
            <strong> Economía Institucional </strong> en Estados Unidos con Veblen, Commons y Mitchell.
          </p>

          <p>
            Estos autores tomaron la idea de que el comportamiento económico está incrustado
            en un entramado <strong>institucional y evolutivo</strong>, integrando sociología,
            derecho e historia. La tradición historicista alemana inspiró metodologías empíricas
            que hoy son centrales en la economía del desarrollo y la historia económica.
          </p>
        </div>

        {/* COLUMNA 2 */}
        <div className="space-y-4">
          <p>
            En contraste, el legado de <strong>Menger</strong> fortaleció la teoría económica formal
            y el método deductivo, contribuyendo a la formación de la economía neoclásica y de
            la Escuela Austriaca. Su énfasis en leyes universales de la acción humana alimentó
            debates contemporáneos sobre racionalidad, precios y órdenes espontáneos.
          </p>

          <p className="text-slate-300">
            Así, la disputa no quedó circunscrita al siglo XIX: se proyectó en enfoques teóricos,
            metodológicos e institucionales que aún estructuran el pensamiento económico
            contemporáneo.
          </p>
        </div>
      </div>

      {/* CARDS FINALES — MINIMALISTAS, DE ESTILO DIFERENTE */}
      <div className="grid gap-5 sm:grid-cols-2">

        <div className="p-5 rounded-xl bg-slate-950/60 border border-emerald-500/30 shadow-inner">
          <h3 className="font-semibold text-emerald-300 mb-1 text-sm">Legado historicista</h3>
          <p className="text-slate-300 text-xs leading-relaxed">
            Base de la Economía Institucional, metodologías comparativas y análisis evolutivo
            de las instituciones.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-slate-950/60 border border-sky-500/30 shadow-inner">
          <h3 className="font-semibold text-sky-300 mb-1 text-sm">Legado mengeriano</h3>
          <p className="text-slate-300 text-xs leading-relaxed">
            Consolidación del método deductivo, economía formal y desarrollo de la Escuela Austriaca.
          </p>
        </div>

      </div>
    </section>
  );
}
