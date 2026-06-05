import { useEffect, useRef, useState } from "react";
import PrimaryAddon from "../PrimaryAddon";
import payments from "../../assets/payments.svg";

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`;

function useCountDown(from, to, duration, trigger) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(from - (from - to) * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [trigger, from, to, duration]);

  return value;
}

export default function Pricing() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const unitaryPrice = 12;
  const price = useCountDown(103, 36, 1500, visible);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Carrega o widget da Hotmart DEPOIS que o botão já está no DOM,
  // para que o jQuery('.hotmart-fb').fancybox() encontre o link e
  // abra o checkout em modal (e não em uma nova janela).
  useEffect(() => {
    if (document.querySelector('script[src*="checkout/widget.min.js"]')) return;
    const script = document.createElement("script");
    script.src = "https://static.hotmart.com/checkout/widget.min.js";
    document.head.appendChild(script);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-30 -mt-8 overflow-hidden bg-lightblue-section px-6 py-16 md:py-24 text-white flex flex-col items-center gap-6 rounded-t-3xl shadow-[0_-28px_48px_-24px_rgba(0,0,0,0.45)]"
    >
      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-overlay"
        style={{
          opacity: 0.06,
          backgroundImage: GRAIN_SVG,
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-xs md:max-w-md">
        <h2 className="text-3xl font-bold text-center text-slate-200 drop-shadow-md">
          Investimento
        </h2>

        <PrimaryAddon
          className="text-white"
          bgColor="var(--color-lightblue-section)"
        />

        {/* Price */}
        <div className="flex flex-col items-center gap-1">
          <span className="mb-1 px-2 text-center text-lg font-semibold uppercase text-white">
            Separadamente cada e-book custa:
          </span>
          <span
            className="text-8xl font-black tracking-tight text-white"
            style={{ lineHeight: 0.8 }}
          >
            <span className="text-5xl align-top">R$</span> {unitaryPrice}
            <span className="text-3xl">, 90</span>
          </span>
        </div>

        {/* Price */}
        <div className="mt-2.5 flex flex-col items-center gap-4">
          <span className="mb-1 px-2 text-center text-lg font-semibold uppercase text-white">
            Mas aqui você garante a coleção completa por:
          </span>
          <span
            className="relative inline-block text-5xl md:text-8xl font-black tracking-tight text-white/70"
            style={{ lineHeight: 0.8 }}
          >
            <span className="text-3xl md:text-5xl align-top">R$</span> 103
            <span className="text-xl md:text-3xl">, 20</span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-white/80"
            />
          </span>
          <span
            className="md:mt-6 text-9xl font-black tracking-tight text-[#22c55e] drop-shadow-[0_0_14px_rgba(34,197,94,0.5)]"
            style={{ lineHeight: 0.8 }}
          >
            <span className="text-6xl align-top">R$</span> {price}
            <span className="text-4xl">, 12</span>
          </span>
          <span className="text-lg font-bold tracking-widest text-white/60">
            5x 8,00
          </span>
        </div>

        {/* Payments marquee */}
        <div className="w-4/5 overflow-hidden opacity-70 my-5">
          <div className="flex w-max animate-marquee">
            <img src={payments} alt="" className="h-6 shrink-0" />
            <img
              src={payments}
              alt=""
              className="h-6 shrink-0"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* CTA button */}
        <a
          href="https://pay.hotmart.com/L106009699F?checkoutMode=2"
          className="buy hotmart-fb hotmart__button-checkout mt-4 block w-full rounded-full py-5 text-center text-sm font-black tracking-widest uppercase text-white animate-breathe active:scale-95 cursor-pointer"
          style={{
            backgroundColor: "rgb(34,197,94)",
            boxShadow:
              "0 0 18px rgba(34,197,94,0.55), 0 0 40px rgba(34,197,94,0.30), 0 0 70px rgba(34,197,94,0.15)",
          }}
        >
          Colecione os guias
        </a>
      </div>
    </section>
  );
}
