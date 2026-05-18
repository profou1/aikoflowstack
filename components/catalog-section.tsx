import Image from "next/image"

import { catalogs } from "@/data/site-data"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

export function CatalogSection() {
  return (
    <section id="catalogos" className="section-block">
      <div className="mx-auto max-w-7xl space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Catálogos"
            title="Catálogos"
            description="Dos PDFs claros y listos para compartir, con estructura preparada para sumar nuevas líneas sin rediseñar la sección."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {catalogs.map((catalog, index) => (
            <Reveal key={catalog.id} delay={index === 0 ? "short" : "medium"}>
              <article className="surface-card hover-card group overflow-hidden">
                <div className="relative overflow-hidden border-b border-stone-950/10 bg-[#efe6d9]">
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(32,22,18,0.16)] via-transparent to-transparent opacity-60" />
                  <Image
                    src={catalog.coverImage}
                    alt={catalog.titulo}
                    width={1200}
                    height={860}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute left-6 top-6 rounded-full border border-white/60 bg-[rgba(255,248,241,0.85)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-700 backdrop-blur">
                    PDF curado
                  </div>
                </div>
                <div className="space-y-5 p-7 sm:p-8">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                      Yohaku PDF
                    </p>
                    <h3 className="text-3xl text-stone-950">{catalog.titulo}</h3>
                    <p className="text-base leading-7 text-stone-600">{catalog.descripcion}</p>
                  </div>
                  <a
                    href={catalog.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary"
                  >
                    {catalog.ctaLabel}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
