import { useState } from "react";
import useSectionObserver from "../hooks/useSectionObserver";

export default function TopBar() {
  const [open, setOpen] = useState(false);

  const sections = [
    "tesis",
    "proyecto-intelectual",
    "argumento-1",
    "argumento-2",
    "argumento-3",
    "argumento-4",
    "incidencia",
    "conclusion",
  ];

  const active = useSectionObserver(sections);

  const linkClass = (id: string) =>
    `block px-3 py-2 rounded-md transition-colors ${
      active === id
        ? "text-sky-300 font-semibold"
        : "text-slate-300 hover:text-sky-300"
    }`;

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800/70"
    >
      {/* CONTENEDOR INTERNO MÁS ANCHO QUE EL CONTENIDO PRINCIPAL */}
      <div
        className="max-w-screen-2xl mx-auto px-6 sm:px-10
                   flex items-center justify-between py-3"
      >
        {/* LOGO */}
        <div className="flex items-center gap-3 -ml-6">
          <div className="h-12 w-12 rounded-xl bg-sky-400/20 border border-sky-400/40 
                          flex items-center justify-center pl-[1px] ">
            <span className="text-sky-300 text-lg font-semibold leading-none">H</span>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400 leading-tight">
              Historia del pensamiento económico
            </p>
          </div>
        </div>


        {/* NAV DESKTOP */}
        <nav className="hidden sm:flex gap-6 text-sm">
          <a href="#tesis" className={linkClass("tesis")}>Tesis</a>
          <a href="#proyecto-intelectual" className={linkClass("proyecto-intelectual")}>Proyecto</a>
          <a href="#argumento-1" className={linkClass("argumento-1")}>Propósito</a>
          <a href="#argumento-2" className={linkClass("argumento-2")}>Naturaleza</a>
          <a href="#argumento-3" className={linkClass("argumento-3")}>Universalidad</a>
          <a href="#argumento-4" className={linkClass("argumento-4")}>Historia</a>
          <a href="#incidencia" className={linkClass("incidencia")}>Incidencia</a>
          <a href="#conclusion" className={linkClass("conclusion")}>Conclusión</a>
        </nav>

        {/* BOTÓN MÓVIL */}
        <button
          className="sm:hidden text-slate-200 hover:text-sky-300 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      {open && (
        <div
          className="sm:hidden bg-slate-900/95 border-t border-slate-800/50
                     flex flex-col p-4 gap-1 backdrop-blur-md"
        >
          <a href="#tesis" className={linkClass("tesis")} onClick={() => setOpen(false)}>Tesis</a>
          <a href="#proyecto-intelectual" className={linkClass("proyecto-intelectual")} onClick={() => setOpen(false)}>Proyecto intelectual</a>
          <a href="#argumento-1" className={linkClass("argumento-1")} onClick={() => setOpen(false)}>Propósito</a>
          <a href="#argumento-2" className={linkClass("argumento-2")} onClick={() => setOpen(false)}>Naturaleza</a>
          <a href="#argumento-3" className={linkClass("argumento-3")} onClick={() => setOpen(false)}>Universalidad</a>
          <a href="#argumento-4" className={linkClass("argumento-4")} onClick={() => setOpen(false)}>Historia</a>
          <a href="#incidencia" className={linkClass("incidencia")} onClick={() => setOpen(false)}>Incidencia</a>
          <a href="#conclusion" className={linkClass("conclusion")} onClick={() => setOpen(false)}>Conclusión</a>
        </div>
      )}
    </header>
  );
}
