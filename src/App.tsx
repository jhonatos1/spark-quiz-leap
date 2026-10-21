import { getCheckoutUrl } from "@/lib/checkout";
import { useState } from "react";
import { steps, type QuizStep } from "@/lib/quiz";
import offerAntes from "@/assets/offer-antes.jpg";
import offerDepois from "@/assets/offer-depois.jpg";
import logo from "@/assets/logo.png";

export default function QuizPage() {
  const [stepIndex, setStepIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  const step: QuizStep | undefined = steps[stepIndex];
  const isOffer = stepIndex >= steps.length;

  const advance = () => {
    setSelected(null);
    setStepIndex((i) => i + 1);
    window.scrollTo({ top: 0 });
  };

  const choose = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    window.setTimeout(advance, 350);
  };

  return (
    <div className="min-h-screen bg-background font-body text-ink">
      <div className="mx-auto w-full max-w-md px-4">
        <header className="flex justify-center pt-3 pb-2">
          <img
            src={logo}
            alt="Segredos Curativos da Natureza"
            width={965}
            height={628}
            className="h-auto w-[260px] max-w-full object-contain"
            fetchPriority="high"
            decoding="async"
          />
        </header>

        {!isOffer && step?.kind === "question" && (
          <div className="mb-8">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-xs font-bold text-cocoa">{step.progressLabel}</span>
              <span className="text-xs font-semibold text-cocoa/70">{step.progressPercent}%</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-peach/70">
              <div
                className="progress-fill h-full rounded-full bg-brand"
                style={{ width: `${step.progressPercent}%` }}
              />
            </div>
          </div>
        )}

        {!isOffer && step?.kind === "intro" && (
          <section key={stepIndex} className="pt-6">
            <h1 className="step-anim font-display text-3xl font-bold leading-tight text-balance">
              {step.title}
            </h1>
            {step.subtitle && (
              <p className="step-anim mt-3 text-base text-cocoa/85 text-pretty" style={{ animationDelay: "60ms" }}>
                {step.subtitle}
              </p>
            )}
            <div className="step-anim mt-6 overflow-hidden rounded-3xl outline-1 -outline-offset-1 outline-black/5" style={{ animationDelay: "120ms" }}>
              <img src={step.image} alt={step.imageAlt} width={1024} height={768} className="w-full object-cover" />
            </div>
            <button
              onClick={advance}
              className="step-anim mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand py-4 font-display text-lg font-bold text-cream ring-1 ring-brand-dark/30 transition-transform duration-150 active:scale-[.98]"
              style={{ animationDelay: "180ms" }}
            >
              {step.buttonLabel}
              <span className="shrink-0">→</span>
            </button>
            <div className="h-10" />
          </section>
        )}

        {!isOffer && step?.kind === "question" && (
          <section key={stepIndex}>
            <h1 className="step-anim font-display text-3xl font-bold leading-tight text-balance">
              {step.title}
            </h1>
            {step.subtitle && (
              <p className="step-anim mt-2 text-base text-cocoa/85 text-pretty" style={{ animationDelay: "60ms" }}>
                {step.subtitle}
              </p>
            )}
            {step.image && (
              <div className="step-anim mt-5 overflow-hidden rounded-3xl outline-1 -outline-offset-1 outline-black/5" style={{ animationDelay: "100ms" }}>
                <img src={step.image} alt={step.imageAlt ?? ""} width={1024} height={1024} loading="lazy" className="w-full object-cover" />
              </div>
            )}
            <div className="mt-6 space-y-3.5">
              {step.options.map((opt, i) => {
                const isSelected = selected === i;
                return (
                  <button
                    key={i}
                    onClick={() => choose(i)}
                    className={`step-anim relative flex w-full items-center gap-4 rounded-3xl p-4 text-left transition-transform duration-150 active:scale-[.98] ${
                      isSelected
                        ? "bg-peach ring-2 ring-brand"
                        : "bg-white/70 ring-1 ring-cocoa/10"
                    }`}
                    style={{ animationDelay: `${140 + i * 80}ms` }}
                  >
                    <span
                      aria-hidden="true"
                      data-option-emoji
                      className={`grid size-12 shrink-0 place-items-center rounded-2xl text-2xl ${
                        isSelected ? "bg-brand text-cream" : "bg-mint text-ink/70"
                      }`}
                    >
                      {opt.emoji}
                    </span>
                    <span>
                      <span className="block font-display text-base font-semibold text-ink">
                        {opt.label}
                      </span>
                      {opt.subtitle && (
                        <span className="mt-1 block text-xs font-medium leading-snug text-cocoa/75">
                          {opt.subtitle}
                        </span>
                      )}
                    </span>
                    {isSelected && (
                      <span className="absolute right-4 top-4 grid size-6 place-items-center rounded-full bg-brand text-xs font-bold text-cream">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            {step.footerNote && (
              <p className="step-anim mt-6 text-center text-xs text-cocoa/60" style={{ animationDelay: "500ms" }}>
                {step.footerNote}
              </p>
            )}
            <div className="h-10" />
          </section>
        )}

        {!isOffer && step?.kind === "benefits" && (
          <section key={stepIndex}>
            <div className="step-anim overflow-hidden rounded-3xl outline-1 -outline-offset-1 outline-black/5">
              <img src={step.image} alt={step.imageAlt} width={1024} height={768} loading="lazy" className="w-full object-cover" />
            </div>
            <h1 className="step-anim mt-6 font-display text-3xl font-bold leading-tight text-balance" style={{ animationDelay: "60ms" }}>
              {step.title}
            </h1>
            {step.subtitle && (
              <p className="step-anim mt-2 text-base text-cocoa/85 text-pretty" style={{ animationDelay: "120ms" }}>
                {step.subtitle}
              </p>
            )}
            <ul className="mt-5 space-y-2.5">
              {step.items.map((item, i) => (
                <li key={i} className="step-anim flex items-start gap-3" style={{ animationDelay: `${180 + i * 70}ms` }}>
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-mint text-xs font-bold text-ink/70">
                    ✓
                  </span>
                  <span className="text-base text-cocoa">{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={advance}
              className="step-anim mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand py-4 font-display text-lg font-bold text-cream ring-1 ring-brand-dark/30 transition-transform duration-150 active:scale-[.98]"
              style={{ animationDelay: `${200 + step.items.length * 70}ms` }}
            >
              {step.buttonLabel}
              <span className="shrink-0">→</span>
            </button>
            <div className="h-10" />
          </section>
        )}

        {isOffer && <OfferScreen />}
      </div>
    </div>
  );
}

const OFFER_BENEFITS = [
  "Ansiedade",
  "Diabetes",
  "Pressão Alta e Coração",
  "Dores no Corpo",
  "Estresse e Sono",
  "Aumentar a Imunidade",
  "Retenção de líquido e inchaço",
  "Digestão e Azia",
  "Cólica e muito mais...",
];

function OfferScreen() {
  return (
    <section key="offer" className="pt-4">
      <div className="mb-8">
        <div className="h-3 w-full overflow-hidden rounded-full bg-peach/70">
          <div className="h-full w-full rounded-full bg-brand" />
        </div>
      </div>

      <div className="step-anim w-full overflow-hidden rounded-3xl bg-mint/60 outline-1 -outline-offset-1 outline-black/5">
        <div className="grid grid-cols-2 gap-1.5 p-1.5">
          <figure className="relative overflow-hidden rounded-2xl">
            <img src={offerAntes} alt="Antes: pessoa com dores e desconforto" width={768} height={1024} loading="lazy" className="aspect-[3/4] w-full object-cover" />
            <figcaption className="absolute left-2 top-2 rounded-full bg-ink/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-cream">
              Antes
            </figcaption>
          </figure>
          <figure className="relative overflow-hidden rounded-2xl">
            <img src={offerDepois} alt="Depois: pessoa saudável e cheia de energia" width={768} height={1024} loading="lazy" className="aspect-[3/4] w-full object-cover" />
            <figcaption className="absolute left-2 top-2 rounded-full bg-brand px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-cream">
              Depois
            </figcaption>
          </figure>
        </div>
        <div className="grid grid-cols-2 gap-1.5 px-3 pb-3 text-center">
          <p className="text-xs font-medium text-cocoa/80">Você antes das receitas do livro</p>
          <p className="text-xs font-medium text-cocoa/80">Você depois de "Segredos Curativos da Natureza"</p>
        </div>
      </div>

      <h1 className="step-anim mt-8 font-display text-2xl font-bold leading-tight text-balance" style={{ animationDelay: "60ms" }}>
        O que você vai receber?
      </h1>
      <p className="step-anim mt-2 text-base text-cocoa/85 text-pretty" style={{ animationDelay: "120ms" }}>
        Mais de <strong>200 receitas de remédios naturais</strong> que irão potencializar sua saúde como um todo:
      </p>
      <ul className="mt-4 space-y-2.5">
        {OFFER_BENEFITS.map((item, i) => (
          <li key={i} className="step-anim flex items-start gap-3" style={{ animationDelay: `${180 + i * 60}ms` }}>
            <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-mint text-xs font-bold text-ink/70">
              ✓
            </span>
            <span className="text-base text-cocoa">{item}</span>
          </li>
        ))}
      </ul>

      <div className="step-anim mt-6 rounded-3xl bg-white/80 p-5 ring-1 ring-cocoa/10" style={{ animationDelay: "200ms" }}>
        <div className="flex items-center justify-center">
          <span className="rounded-full bg-mint px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-ink/70">
            Seu risco é zero!
          </span>
        </div>
        <p className="mt-3 text-center text-sm text-cocoa">
          Você tem <strong>7 dias</strong> para fazer todos os chás sem risco nenhum. Caso não goste, devolvo seu dinheiro investido.
        </p>
      </div>

      <div className="step-anim mt-6 rounded-3xl bg-peach/60 p-5 ring-1 ring-brand/20" style={{ animationDelay: "260ms" }}>
        <h2 className="font-display text-xl font-bold text-ink">Valor Promocional</h2>
        <p className="mt-1 text-sm text-cocoa">
          Esse valor promocional de <strong>R$ 19,99</strong> vai subir para <strong>R$ 39,99</strong> nas próximas 24 horas. Então aproveita!
        </p>
      </div>

      <div className="step-anim mt-6" style={{ animationDelay: "320ms" }}>
        <h2 className="font-display text-xl font-bold text-ink">Como Acessar o eBook?</h2>
        <p className="mt-1 text-sm text-cocoa">
          Assim que o pagamento for aprovado, o eBook será disponibilizado para download. E qualquer dúvida que tiver pode mandar uma mensagem no meu WhatsApp que será disponibilizado após a compra.
        </p>
      </div>

      <div className="step-anim mt-6 rounded-3xl bg-white/80 p-5 ring-1 ring-cocoa/10" style={{ animationDelay: "380ms" }}>
        <div className="text-center">
          <span className="text-sm text-cocoa/60 line-through">De R$ 39,99 por apenas</span>
          <div className="font-display text-5xl font-extrabold leading-none text-ink text-balance">R$ 19,99</div>
          <span className="text-xs font-medium text-cocoa/70">pagamento único · acesso vitalício</span>
        </div>
        <p className="mt-4 text-center font-display text-base font-semibold text-ink">
          Aperte no botão abaixo para garantir seu eBook
        </p>
        <a
          href={getCheckoutUrl(window.location.search)}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-brand py-4 font-display text-lg font-bold text-cream ring-1 ring-brand-dark/30 transition-transform duration-150 active:scale-[.98]"
        >
          Eu quero!
          <span className="shrink-0">→</span>
        </a>
        <p className="mt-3 text-center text-xs text-cocoa/60">Acesso imediato · Compra segura</p>
      </div>

      <div className="h-10" />
    </section>
  );
}
