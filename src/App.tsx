import TopBar from "./components/TopBar";
import HeroTesis from "./components/HeroTesis";
import ArgumentoUno from "./components/ArgumentoUno";
import ArgumentoDos from "./components/ArgumentoDos";
import ArgumentoTres from "./components/ArgumentoTres";
import ArgumentoCuatro from "./components/ArgumentoCuatro";
import Conclusion from "./components/Conclusion";
import Footer from "./components/Footer";
import ProyectoIntelectual from "./components/ProyectoIntelectual";
import Incidencia from "./components/Incidencia";
import Bibliografia from "./components/Bibliografia";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      {/* Fondo con degradado suave */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#38bdf8_0,_transparent_55%),radial-gradient(circle_at_bottom,_#f97316_0,_transparent_55%)] opacity-50" />
      <div className="absolute inset-0 bg-slate-950/80" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        <TopBar />
        <HeroTesis />
        <ProyectoIntelectual />
        <ArgumentoUno />
        <ArgumentoDos />
        <ArgumentoTres />
        <ArgumentoCuatro />
        <Incidencia />
        <Conclusion />
        <Bibliografia />
        <Footer />
      </div>
    </div>
  );
}

export default App;
