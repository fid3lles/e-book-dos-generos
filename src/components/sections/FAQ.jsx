import { useState } from "react";
import PrimaryAddon from "../PrimaryAddon";

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`;

const faqs = [
  {
    question: "Como funciona o pagamento? É seguro?",
    answer:
      "A empresa responsável por processar o pagamento é a Hotmart, 100% segura e confiável. Você pode comprar com cartão de crédito parcelado em até 12 vezes, pix ou boleto! O pagamento com cartão ou pix é aprovado na hora e você receberá um e-mail de confirmação no mesmo instante. A compensação do pagamento via boleto bancário pode demorar até 78h úteis após o pagamento do mesmo.",
  },
  {
    question: "Como vou acessar os e-books?",
    answer:
      "Após a confirmação da compra, você receberá um e-mail da Hotmart com todas as instruções de acesso. Basta criar (ou entrar na) sua conta na plataforma e, em poucos cliques, a coleção estará disponível na sua área de membros. Lá, você poderá acessar todo conteúdo forma prática e segura, pelo computador ou celular.",
  },
  {
    question: "Pra quem são os e-books?",
    answer:
      "A 'Coleção E-books dos Gêneros' foi criada para quem deseja escrever histórias com mais confiança. Organizada de forma clara e objetiva, cada e-book reúne tudo o que você precisa para construir uma narrativa sólida, abordando os elementos que diferenciam cada gênero dos demais, seu DNA narrativo, ou seja, tudo o que o torna único, os erros mais comuns que podem comprometer a história, a fórmula para desenvolver ideias e os principais subgêneros. Com diversos exemplos para que toda teoria seja confirmada na prática, a coleção oferece a base que o escritor precisa para escrever sem medo.",
  },
];

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AccordionItem({ question, answer, open, onToggle }) {
  return (
    <div
      className="bg-cream overflow-hidden"
      style={{
        borderRadius: open ? "1.25rem" : "9999px",
        transition: "border-radius ease-out",
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left cursor-pointer"
      >
        <span className="flex-1 text-center font-medium text-lightblue-section text-sm leading-snug">
          {question}
        </span>
        <div
          className="w-8 h-8 rounded-full bg-lightblue-section flex items-center justify-center shrink-0 text-cream transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <ChevronIcon />
        </div>
      </button>

      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-lightblue-section/70">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="relative overflow-hidden bg-lightblue-section px-6 py-16 text-white flex flex-col items-center gap-6">
      <div
        className="pointer-events-none absolute inset-0 mix-blend-overlay"
        style={{
          opacity: 0.06,
          backgroundImage: GRAIN_SVG,
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-sm md:max-w-xl">
        <h2 className="text-3xl font-bold text-center text-slate-200 drop-shadow-md">
          Perguntas Frequentes
        </h2>

        <PrimaryAddon
          className="text-white"
          bgColor="var(--color-lightblue-section)"
        />

        <div className="flex flex-col gap-3 w-full">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              {...faq}
              open={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
