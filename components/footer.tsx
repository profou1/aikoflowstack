import { brandName, catalogs, commercialConfig, navItems, whatsappUrl } from "@/data/site-data"
import { Reveal } from "@/components/reveal"

export function Footer() {
  return (
    <footer className="border-t border-stone-950/10 px-4 py-10 sm:px-6 lg:px-8">
      <Reveal className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-3">
          <p className="text-xl text-stone-950">{brandName}</p>
          <p className="max-w-md text-sm leading-7 text-stone-600">
            Muebles mayoristas y minoristas con catálogo claro, atención por WhatsApp y condiciones comerciales simples.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-500">
              Navegación
            </p>
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-stone-600 transition hover:text-stone-950"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-500">
              Catálogos
            </p>
            <div className="space-y-2 text-sm text-stone-600">
              {catalogs.map((catalog) => (
                <a
                  key={catalog.id}
                  href={catalog.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block transition hover:text-stone-950"
                >
                  {catalog.titulo}
                </a>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-stone-950"
              >
                Consulta por WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-500">
              Condiciones
            </p>
            <p className="text-sm text-stone-600">Precios sin IVA</p>
            <p className="text-sm text-stone-600">Garantía 30 días</p>
            <p className="text-sm text-stone-600">Despacho 24 a 72 hs hábiles</p>
          </div>
        </div>
        <div className="lg:col-span-2 mt-2 rounded-[1.5rem] border border-white/70 bg-white/70 p-5 text-sm leading-7 text-stone-600">
          <p>{commercialConfig.pricingNote}</p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-stone-950"
            >
              WhatsApp
            </a>
            <a href="#contacto" className="transition hover:text-stone-950">
              Formulario
            </a>
            <span>{commercialConfig.warrantyNote}</span>
            <span>{commercialConfig.shippingNote}</span>
            <span>{commercialConfig.invoiceNote}</span>
          </div>
        </div>
      </Reveal>
    </footer>
  )
}
