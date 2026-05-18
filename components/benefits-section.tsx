import { benefits } from "@/data/site-data"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

export function BenefitsSection() {
  return (
    <section id="beneficios" className="section-block">
      <div className="mx-auto max-w-7xl space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Beneficios"
            title="Una forma más simple de comprar mayorista"
            description="La landing busca bajar fricción: menos vueltas, mejor lectura de la propuesta y una conversación comercial más ordenada."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Reveal
              key={benefit.title}
              delay={index % 3 === 0 ? "short" : index % 3 === 1 ? "medium" : "long"}
            >
              <article className="surface-card hover-card relative overflow-hidden p-7">
              <div className="absolute right-4 top-4 h-16 w-16 rounded-full bg-amber-100/70 blur-2xl" />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-stone-950 to-stone-700 text-sm font-semibold text-stone-50 shadow-[0_10px_25px_rgba(34,22,17,0.18)]">
                {benefit.title.slice(0, 1)}
              </div>
              <h3 className="relative mt-5 text-2xl text-stone-950">{benefit.title}</h3>
              <p className="relative mt-3 text-base leading-7 text-stone-600">{benefit.description}</p>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
