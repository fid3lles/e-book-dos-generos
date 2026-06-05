import { useEffect, useRef, useState } from "react";
import PrimaryAddon from "../PrimaryAddon";
import heloisa from "../../assets/heloisa.webp";
import fantasia from "../../assets/ESCREVENDO FANTASIA.webp";
import terror from "../../assets/ESCREVENDO TERROR.webp";
import distopia from "../../assets/ESCREVENDO DISTOPIA.webp";
import romance from "../../assets/ESCREVENDO ROMANCE.webp";
import ficcaoCientifica from "../../assets/ESCREVENDO FICÇÃO CIENTÍFICA.webp";
import ficcaoHistorica from "../../assets/ESCREVENDO FICÇÃO HISTÓRICA.webp";
import ficcaoCura from "../../assets/ESCREVENDO FICÇÃO DE CURA.webp";
import romancePolicial from "../../assets/ESCREVENDO ROMANCE POLICIAL.webp";

const modules = [
  {
    title: "Escrevendo Fantasia",
    description:
      "Um e-book focado no gênero fantasia, criado para te ajudar a escrever uma história com mundo, regras, jornada e conflito da forma mais clara e direcionada possível. Ele foi pensado para cumprir exatamente o que promete no nome: um guia prático para quem deseja entender como construir uma fantasia que realmente funciona.",
    image: fantasia,
  },
  {
    title: "Escrevendo Terror",
    description:
      "Um e-book focado no gênero terror, criado para te ajudar a escrever uma história capaz de gerar tensão, desconforto e medo da forma mais clara e direcionada possível. Ele foi pensado para cumprir exatamente o que promete no nome: um guia prático para quem deseja entender como construir um terror que realmente funciona.",
    image: terror,
  },
  {
    title: "Escrevendo Distopia",
    description:
      "Um e-book focado no gênero distopia, criado para te ajudar a escrever uma história com crítica social, conflito e construção de mundo da forma mais clara e direcionada possível. Ele foi pensado para cumprir exatamente o que promete no nome: um guia prático para quem deseja entender como construir uma distopia que realmente funciona.",
    image: distopia,
  },
  {
    title: "Escrevendo Romance",
    description:
      "Um e-book focado no gênero romance, criado para te ajudar a escrever uma história emocionalmente envolvente, com personagens, conflitos e relacionamentos construídos da forma mais clara e direcionada possível. Ele foi pensado para cumprir exatamente o que promete no nome: um guia prático para quem deseja entender como construir um romance que realmente funciona.",
    image: romance,
  },
  {
    title: "Escrevendo Ficção Científica",
    description:
      "Um e-book focado no gênero ficção científica, criado para te ajudar a escrever uma história com tecnologia, especulação e construção de ideias da forma mais clara e direcionada possível. Ele foi pensado para cumprir exatamente o que promete no nome: um guia prático para quem deseja entender como construir uma ficção científica que realmente funciona.",
    image: ficcaoCientifica,
  },
  {
    title: "Escrevendo Ficção Histórica",
    description:
      "Um e-book focado no gênero ficção histórica, criado para te ajudar a escrever uma história que misture narrativa e contexto histórico da forma mais clara e direcionada possível. Ele foi pensado para cumprir exatamente o que promete no nome: um guia prático para quem deseja entender como construir uma ficção histórica que realmente funciona.",
    image: ficcaoHistorica,
  },
  {
    title: "Escrevendo Ficção de Cura",
    description:
      "Um e-book focado no gênero ficção de cura, criado para te ajudar a escrever uma história emocional, acolhedora e transformadora da forma mais clara e direcionada possível. Ele foi pensado para cumprir exatamente o que promete no nome: um guia prático para quem deseja entender como construir uma ficção de cura que realmente funciona.",
    image: ficcaoCura,
  },
  {
    title: "Escrevendo Romance Policial",
    description:
      "Um e-book focado no gênero romance policial, criado para te ajudar a escrever uma história com investigação, mistério, tensão e revelações da forma mais clara e direcionada possível. Ele foi pensado para cumprir exatamente o que promete no nome: um guia prático para quem deseja entender como construir um romance policial que realmente funciona.",
    image: romancePolicial,
  },
];

const professor = {
  name: "Heloísa Karin",
  photo: heloisa,
  bio: "Escritora da Thomas Nelson Brasil, professora de escrita, licenciada em História e pós-graduada em Teologia e Literatura.",
};

function Professors() {
  return (
    <div className="flex flex-col items-center gap-6 w-full mt-8">
      <h2 className="text-3xl font-bold text-center text-[#6b4423] drop-shadow-md">
        Criados por
      </h2>

      <PrimaryAddon className="text-[#6b4423]" bgColor="var(--color-cream)" />

      <div className="w-full max-w-sm md:max-w-md">
        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <div className="h-105 w-full">
            <img
              src={professor.photo}
              alt={professor.name}
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div
            className="-mt-6 relative rounded-t-3xl px-6 pt-6 pb-12 border-t border-white/10"
            style={{ backgroundColor: "#4c758e" }}
          >
            <h3 className="text-3xl font-black leading-tight tracking-tight text-slate-200 text-center drop-shadow-md">
              {professor.name}
            </h3>

            <div className="relative mt-5 pt-3 pb-5 pl-7 pr-5">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 font-serif text-5xl leading-none select-none text-white/70"
              >
                &ldquo;
              </span>
              <p className="text-base leading-relaxed text-white/70 italic">
                {professor.bio}
              </p>
              <span
                aria-hidden="true"
                className="absolute bottom-0 right-1 font-serif text-5xl leading-none select-none text-white/70"
              >
                &rdquo;
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModuleCard({ title, description, image, index, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative z-10 flex w-full flex-col items-center gap-5 overflow-hidden rounded-2xl border border-white/10 px-6 py-8 shadow-[0_8px_28px_rgba(0,0,0,0.25)] text-center transition-all duration-700 ease-out lg:w-[31%] ${className}`}
      style={{
        backgroundColor: "#4c758e",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: visible ? `${index * 80}ms` : "0ms",
      }}
    >
      <h3 className="relative z-10 text-2xl font-bold text-slate-200 drop-shadow-md">
        {title}
      </h3>
      <img
        src={image}
        alt={title}
        className="relative z-10 w-44 rounded-xl object-cover shadow-xl md:w-52"
        loading="lazy"
      />
      <p className="relative z-10 text-center text-sm leading-relaxed text-white">
        {description}
      </p>
    </div>
  );
}

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`;

export default function Modules() {
  return (
    <section className="relative z-20 overflow-hidden bg-cream px-6 md:px-10 pt-15 md:pt-20 pb-20 md:pb-28 text-white rounded-t-3xl shadow-[0_-24px_48px_rgba(0,0,0,0.45)]">
      {/* Grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-overlay"
        style={{
          opacity: 0.07,
          backgroundImage: GRAIN_SVG,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center gap-8 md:max-w-4xl md:gap-12 lg:max-w-6xl">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-3xl font-bold text-center text-[#6b4423] drop-shadow-md">
            Os e-books
          </h2>
          <PrimaryAddon
            className="text-[#6b4423]"
            bgColor="var(--color-cream)"
          />
        </div>

        {/* Cards + dotted connecting line */}
        <div className="relative grid w-full grid-cols-1 gap-7 md:grid-cols-2 md:gap-8 lg:flex lg:flex-wrap lg:justify-center lg:gap-8">
          <div
            className="absolute left-1/2 top-0 bottom-0 z-0 -translate-x-1/2 md:hidden"
            style={{
              width: "2px",
              backgroundImage:
                "repeating-linear-gradient(to bottom, #486e86 0, #486e86 3px, transparent 3px, transparent 10px)",
            }}
          />
          {modules.map((mod, i) => {
            const isLastOdd =
              i === modules.length - 1 && modules.length % 2 === 1;
            return (
              <ModuleCard
                key={i}
                {...mod}
                index={i}
                className={
                  isLastOdd
                    ? "md:col-span-2 md:justify-self-center md:w-1/2"
                    : ""
                }
              />
            );
          })}
        </div>

        {/* Professores */}
        <Professors />
      </div>
    </section>
  );
}
