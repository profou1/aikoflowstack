import Image from "next/image"

import { aboutContent } from "@/data/site-data"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

export function AboutSection() {
  return (
    <section id="quienes-somos" className="section-block">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal className="surface-card hover-card overflow-hidden p-3 sm:p-4">
          <div className="overflow-hidden rounded-[2rem] border border-stone-950/10 bg-[#f4eadf]">
            <Image
              src={aboutContent.image}
              alt={aboutContent.imageAlt}
              width={900}
              height={980}
              className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
            />
          </div>
        </Reveal>

        <Reveal className="surface-card hover-card p-8 sm:p-10 lg:p-12" delay="short">
          <SectionHeading eyebrow="Quiénes somos" title={aboutContent.title} />
          <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-stone-600 sm:text-lg">
            {aboutContent.description}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/70 bg-white/78 p-5 shadow-[0_14px_38px_rgba(34,23,17,0.05)]">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Enfoque</p>
              <p className="mt-2 text-sm leading-7 text-stone-700">
                Venta mayorista y minorista con condiciones claras y consulta directa.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/70 bg-white/78 p-5 shadow-[0_14px_38px_rgba(34,23,17,0.05)]">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Uso ideal</p>
              <p className="mt-2 text-sm leading-7 text-stone-700">
                Revendedores, comercios, profesionales, proyectos y consumidor final.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
