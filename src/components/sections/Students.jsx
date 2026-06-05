import { useState } from "react";
import PrimaryAddon from "../PrimaryAddon";

const testimonials = [
  {
    name: "Lucas Miliani",
    role: "aluno da Jornada do Escritor",
    text: "Eu acho que a Jornada do Escritor me ajudou a entender o escritor que eu quero ser. As aulas são valiosas, didáticas e muito organizadas, o conhecimento tem finalidade dão um ótimo direcionamento para uma carreira ou para quem quer aprender como hobby. Quanto a melhor parte da Jornada, com certeza são as mentorias, os encontros online são esclarecedores, a Heloísa e o Gerson dão muito espaço para nossas dúvidas e compartilham muitas experiências enriquecedoras. Recomendo o curso de olhos fechados!",
  },
  {
    name: "Talita Ranquini",
    role: "aluna da Jornada do Escritor",
    text: "Eu estou amaaando! Pela primeira vez sinto que alguém está me pegando pela mão e me mostrando detalhes que eu não via antes, mesmo sendo escritora há muitos anos. Eu sempre escrevi à base de sentimento e emoção, e agora sinto que posso escrever de forma mais racional, mas ainda assim com o coração. Dessa forma, sinto que não dependo unicamente da criatividade e da sensação pulsante e posso desbloquear aquele sentimento que muitas vezes nos trava na hora de contar uma boa história. As aulas são aquele tipo de conversa que temos com nossos amigos mais experientes, com aquela pitada de humor que faz a gente descontrair, mas ainda assim focar no que é realmente necessário. E, por serem editadas, nos dão aquele sentimento real de objetividade.",
  },
  {
    name: "André Miguel",
    role: "aluno da Jornada do Escritor",
    text: "A Jornada do Escritor tem sido mais que um simples curso escrita. Primeiro pela excelência das aulas e a riqueza de conteúdo, que são muito bem consolidados pelos exemplos práticos e as análises literárias. Mas para mim, o que torna a Jornada algo único são os encontros semanais e o atenção dos professores. Em cada encontro eu aprendo muito, mesmo quando não tenho dúvidas, e isso faz gerar um senso de comunidade muito bom. E caso eu não consiga participar, as respostas dos e-mails são muito completas, e demonstram todo o cuidado e carinho que a Helô e o Gerson tem!",
  },
  {
    name: "Paulo Humaitá",
    role: "aluno da Jornada do Escritor",
    text: "Fazer a Jornada do Escritor era tudo o que eu precisava para começar a escrever meu primeiro livro. De: não saber nada -> Para: publicar um livro de maneira independente. Terminei o curso com quase cem páginas de anotações, ideias e plano de ação para colocar em prática. É um curso vivo, daqueles que você volta para consultar conforme vai avançando na sua própria jornada como escritor.",
  },
  {
    name: "Raquel Bretzke",
    role: "aluna da Jornada do Escritor",
    text: "A Jornada do Escritor é, sem exagero, um dos cursos mais completos que alguém da área pode encontrar. E isso porque ele vai muito além das aulas de português ou técnicas narrativas. Ele acompanha o escritor em todas as etapas: desde a construção da ideia inicial até a publicação, passando pela escrita, pela presença em eventos e até pela sobrevivência no mundo das redes sociais. Recomendo tanto para quem está começando agora quanto para escritores que já têm uma trajetória consolidada e querem se aprofundar ainda mais.",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const active = testimonials[index];

  const change = (next) => {
    const target = (next + testimonials.length) % testimonials.length;
    if (target === index) return;
    setFading(true);
    setTimeout(() => {
      setIndex(target);
      setFading(false);
    }, 220);
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="w-full max-w-md md:max-w-lg">
        <div
          className="rounded-3xl bg-lightblue-section px-7 py-9 shadow-2xl transition-all duration-300 ease-out md:px-10 md:py-11"
          style={{
            opacity: fading ? 0 : 1,
            transform: fading
              ? "translateY(12px) scale(0.98)"
              : "translateY(0) scale(1)",
          }}
        >
          <h3 className="text-2xl font-bold uppercase tracking-wide text-cream text-center drop-shadow-md">
            {active.name}
          </h3>
          <p className="mt-1 text-sm text-white/50 text-center">
            {active.role}
          </p>

          <div className="relative mt-6 px-2">
            <span
              aria-hidden="true"
              className="absolute -top-4 left-0 font-serif text-5xl leading-none select-none text-white/30"
            >
              &ldquo;
            </span>
            <p className="text-base leading-relaxed text-white/85 text-center">
              {active.text}
            </p>
            <span
              aria-hidden="true"
              className="absolute -bottom-8 right-0 font-serif text-5xl leading-none select-none text-white/30"
            >
              &rdquo;
            </span>
          </div>
        </div>
      </div>

      {/* Controles de troca */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => change(index - 1)}
          aria-label="Depoimento anterior"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-lightblue-section/30 bg-lightblue-section/5 text-lightblue-section transition-colors hover:bg-lightblue-section/15"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="flex gap-2">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => change(i)}
              aria-label={`Ver depoimento de ${item.name}`}
              aria-current={i === index}
              className="h-2.5 rounded-full transition-all duration-300"
              style={{
                width: i === index ? "1.5rem" : "0.625rem",
                backgroundColor:
                  i === index
                    ? "var(--color-lightblue-section)"
                    : "color-mix(in srgb, var(--color-lightblue-section) 30%, transparent)",
              }}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => change(index + 1)}
          aria-label="Próximo depoimento"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-lightblue-section/30 bg-lightblue-section/5 text-lightblue-section transition-colors hover:bg-lightblue-section/15"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function Students() {
  return (
    <section className="relative z-30 -mt-8 bg-cream px-6 py-20 flex flex-col items-center gap-8 rounded-t-3xl overflow-hidden md:px-12 md:py-28">
      <h2 className="text-3xl font-bold text-lightblue-section text-center drop-shadow-md">
        Depoimentos
      </h2>

      <PrimaryAddon
        className="text-lightblue-section"
        bgColor="var(--color-cream)"
      />

      <Testimonials />

      <Guarantees />
    </section>
  );
}

function Guarantees() {
  return (
    <div className="w-full max-w-md md:max-w-lg">
      <div className="flex items-center justify-center gap-4 rounded-2xl border border-lightblue-section/40 bg-cream px-5 py-4 text-lightblue-section md:gap-8 md:px-8">
        <div className="flex items-center gap-2.5">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
            <path d="m12 5 .9 1.8 2 .3-1.45 1.4.34 1.99L12 9.55l-1.79.94.34-1.99L9.1 7.1l2-.3z" />
          </svg>
          <span className="text-sm font-semibold md:text-base">
            7 dias de garantia
          </span>
        </div>

        <div className="h-8 w-px bg-lightblue-section/30" />

        <div className="flex items-center gap-2.5">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
          <span className="text-sm font-semibold md:text-base">
            1 ano de acesso
          </span>
        </div>
      </div>
    </div>
  );
}
