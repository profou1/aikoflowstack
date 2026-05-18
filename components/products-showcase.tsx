import Image from "next/image"

import { featuredProducts } from "@/data/site-data"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const marqueeProducts = [...featuredProducts, ...featuredProducts]

export function ProductsShowcase() {
  return (
    <section id="productos" className="section-block pt-4 sm:pt-6">
      <div className="mx-auto max-w-7xl space-y-8">
        <Reveal>
          <SectionHeading
            eyebrow="Productos referenciales"
            title="Una selección visual para mostrar estilo, rango y precio"
            description="Estas piezas funcionan como referencia comercial: muestran variedad sin llevar a ficha de producto ni compra online."
          />
        </Reveal>

        <Reveal className="marquee-shell" delay="short">
          <div className="marquee-fade marquee">
            <div className="marquee-track">
              {marqueeProducts.map((product, index) => (
                <article key={`${product.id}-${index}`} className="product-mini-card">
                  <div className="product-mini-media">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      width={600}
                      height={600}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2 p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                      Precio referencial
                    </p>
                    <h3 className="text-2xl text-stone-950">{product.nombre}</h3>
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-lg font-semibold text-stone-900">{product.precio}</p>
                      <span className="rounded-full border border-stone-950/10 bg-white/70 px-3 py-1 text-xs text-stone-600">
                        Precio sin IVA
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
