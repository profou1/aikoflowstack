import Image from "next/image"

import { categories } from "@/data/site-data"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

export function CategoriesSection() {
  return (
    <section id="categorias" className="section-block">
      <div className="mx-auto max-w-7xl space-y-10">
        <Reveal>
          <SectionHeading eyebrow="Categorías" title="Categorías que trabajamos" />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, index) => (
            <Reveal
              key={category.title}
              delay={
                index === 0
                  ? "short"
                  : index === 1
                    ? "medium"
                    : index === 2
                      ? "long"
                      : "medium"
              }
            >
              <article className="surface-card hover-card group overflow-hidden">
              <div className="border-b border-stone-950/10 bg-[#f2e9dc]">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={900}
                  height={760}
                  className="h-56 w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                />
              </div>
              <div className="space-y-3 p-6">
                <h3 className="text-2xl text-stone-950">{category.title}</h3>
                <p className="text-sm leading-7 text-stone-600">{category.description}</p>
              </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
