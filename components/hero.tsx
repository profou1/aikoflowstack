import Image from "next/image"

import { commercialConfig, heroContent } from "@/data/site-data"
import { Reveal } from "@/components/reveal"

export function Hero() {
  return (
    <section id="top" className="px-4 pb-16 pt-8 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal className="surface-card hover-card relative overflow-hidden p-8 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -left-8 top-10 h-40 w-40 rounded-full bg-amber-200/50 blur-3xl" />
          <div className="pointer-events-none absolute bottom-4 right-8 h-28 w-28 rounded-full bg-stone-200/60 blur-2xl" />
          <div className="max-w-2xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
              propuesta mayorista para hogar y deco
            </p>
            <h1 className="text-balance text-5xl leading-[0.92] text-stone-950 sm:text-6xl lg:text-7xl">
              {heroContent.title}
            </h1>
            <p className="max-w-xl text-pretty text-base leading-7 text-stone-600 sm:text-lg">
              {heroContent.subtitle}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={heroContent.primaryCta.href}
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                {heroContent.primaryCta.label}
              </a>
              <a
                href={heroContent.secondaryCta.href}
                className="button-secondary"
              >
                {heroContent.secondaryCta.label}
              </a>
            </div>
            <div className="grid gap-3 pt-4 sm:grid-cols-3">
              {commercialConfig.heroClaims.slice(0, 3).map((claim) => (
                <div
                  key={claim}
                  className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-[0_14px_40px_rgba(41,29,21,0.06)]"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Condición</p>
                  <p className="mt-2 text-sm font-medium text-stone-800">{claim}</p>
                </div>
              ))}
            </div>
            <div className="rounded-[1.8rem] border border-white/70 bg-white/70 p-5 shadow-[0_14px_40px_rgba(41,29,21,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                Información comercial
              </p>
              <div className="mt-3 grid gap-2 text-sm text-stone-700 sm:grid-cols-2">
                {commercialConfig.heroClaims.slice(3).map((claim) => (
                  <p key={claim}>{claim}</p>
                ))}
                <p>{commercialConfig.invoiceNote}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="surface-card hover-card floating-card relative overflow-hidden p-3 sm:p-4" delay="short">
          <div className="absolute inset-x-10 top-8 h-28 rounded-full bg-amber-200/40 blur-3xl" />
          <div className="absolute inset-y-12 right-8 w-24 rounded-full bg-white/40 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-stone-950/10 bg-[#f3ece3]">
            <Image
              src={heroContent.image}
              alt={heroContent.imageAlt}
              width={900}
              height={980}
              className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
              priority
            />
          </div>
          <div className="absolute bottom-7 left-7 max-w-[17rem] rounded-[1.5rem] border border-white/70 bg-[rgba(255,250,245,0.88)] p-4 shadow-[0_18px_45px_rgba(35,29,24,0.12)] backdrop-blur">
            <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Yohaku</p>
            <p className="mt-2 text-sm leading-6 text-stone-700">
              Venta mayorista y minorista con atención simple, catálogo claro y consulta directa por WhatsApp.
            </p>
          </div>
          <div className="absolute right-7 top-7 rounded-full border border-white/70 bg-[rgba(255,250,245,0.84)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-600 shadow-[0_10px_28px_rgba(35,29,24,0.08)]">
            Precios sin IVA
          </div>
        </Reveal>
      </div>
    </section>
  )
}
