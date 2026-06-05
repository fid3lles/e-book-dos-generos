import logo from "../../assets/logo.webp";
import BackgroundPattern from "../BackgroundPattern";
import PrimaryAddon from "../PrimaryAddon";

export default function Hero() {
  return (
    <section
      aria-label="Apresentação"
      className="relative h-screen overflow-hidden bg-lightblue-section flex flex-col items-center justify-between px-6 py-10 pb-20 md:py-16 md:pb-28 md:max-h-[80vh]"
    >
      <BackgroundPattern />

      {/* Topo — Logo */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <img
          src={logo}
          alt="Jornada do Escritor"
          className="w-45 max-w-full drop-shadow-md animate-breathe md:w-80"
        />
        <h1 className="font-serif text-3xl md:text-5xl text-center text-white-text drop-shadow-md">
          Coleção e-book dos gêneros
        </h1>
      </div>

      {/* Meio — Texto com aspas */}
      <div className="relative z-10 w-full max-w-sm text-center md:max-w-xl">
        <span
          aria-hidden="true"
          className="absolute -top-4 left-0 font-serif text-6xl leading-none select-none text-slate-200/25"
        >
          &ldquo;
        </span>
        <p
          className="font-medium text-slate-200/80 tracking-wide italic px-5"
          style={{ fontSize: "16pt", lineHeight: 1.4 }}
        >
          Uma coleção de guias{" "}
          <strong className="font-bold not-italic">
            para te ajudar a escrever com maestria.
          </strong>{" "}
          conteúdo prático para você escrever histórias com profundidade.
        </p>
        <span
          aria-hidden="true"
          className="absolute -bottom-6 right-0 font-serif text-6xl leading-none select-none text-slate-200/25"
        >
          &rdquo;
        </span>
      </div>

      <PrimaryAddon className="text-slate-200/80" />

      {/* Base — Título dividido pelo SVG + Vídeo */}
      <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-4 md:max-w-3xl">
        <h2 className="flex flex-col items-center gap-2 text-center text-xl font-semibold leading-snug text-white-text drop-shadow-md">
          Assista o vídeo abaixo de 37 segundos para conhecer todas as trilhas.
        </h2>
        <div className="w-full overflow-hidden rounded-xl shadow-xl aspect-video">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/XI4Qo9TOg_0?si=0ZbWYku_eHr1DMBU"
            title="Jornada do Escritor — Apresentação"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
