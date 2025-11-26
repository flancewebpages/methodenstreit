import { useState } from "react";
import useSectionObserver from "../hooks/useSectionObserver";

export default function TopBar() {
  const [open, setOpen] = useState(false);

  const sections = [
    "tesis",
    "argumento-1",
    "argumento-2",
    "argumento-3",
    "argumento-4",
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
      className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800/70
      flex items-center justify-between py-3 px-4 sm:px-6"
    >
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-xl bg-sky-400/20 border border-sky-400/40 flex items-center justify-center">
          <span className="text-sky-300 text-lg font-semibold">H</span>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Historia del pensamiento económico
          </p>
          <p className="text-sm text-slate-300">
            El debate Menger–Schmoller
          </p>
        </div>
      </div>

      {/* NAV DESKTOP */}
      <nav className="hidden sm:flex gap-6 text-sm">
        <a href="#tesis" className={linkClass("tesis")}>Tesis</a>
        <a href="#argumento-1" className={linkClass("argumento-1")}>Propósito</a>
        <a href="#argumento-2" className={linkClass("argumento-2")}>Naturaleza</a>
        <a href="#argumento-3" className={linkClass("argumento-3")}>Universalidad</a>
        <a href="#argumento-4" className={linkClass("argumento-4")}>Historia</a>
        <a href="#conclusion" className={linkClass("conclusion")}>Conclusión</a>
      </nav>

      {/* BOTÓN MOVIL */}
      <button
        className="sm:hidden text-slate-200 hover:text-sky-300 transition"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* MENU MOVIL */}
      {open && (
        <div
          className="absolute left-0 right-0 top-full mt-2 bg-slate-900/95 border border-slate-800/70 rounded-xl
          flex flex-col p-4 gap-1 sm:hidden backdrop-blur-md shadow-lg"
        >
          <a href="#tesis" className={linkClass("tesis")} onClick={() => setOpen(false)}>Tesis</a>
          <a href="#argumento-1" className={linkClass("argumento-1")} onClick={() => setOpen(false)}>Propósito</a>
          <a href="#argumento-2" className={linkClass("argumento-2")} onClick={() => setOpen(false)}>Naturaleza</a>
          <a href="#argumento-3" className={linkClass("argumento-3")} onClick={() => setOpen(false)}>Universalidad</a>
          <a href="#argumento-4" className={linkClass("argumento-4")} onClick={() => setOpen(false)}>Historia</a>
          <a href="#conclusion" className={linkClass("conclusion")} onClick={() => setOpen(false)}>Conclusión</a>
        </div>
      )}
    </header>
  );
}
