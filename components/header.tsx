import { brandName, navItems, whatsappUrl } from "@/data/site-data"
import { Reveal } from "@/components/reveal"

export function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-white/60 bg-[rgba(250,248,244,0.78)] px-4 py-4 shadow-[0_18px_50px_rgba(28,24,21,0.08)] backdrop-blur-xl sm:px-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center justify-between gap-4">
              <a href="#top" className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-stone-950 via-stone-800 to-amber-800 text-sm font-semibold tracking-[0.24em] text-stone-50 shadow-[0_10px_24px_rgba(44,27,18,0.28)]">
                  YH
                </span>
                <span>
                  <span className="block text-sm font-semibold text-stone-950">{brandName}</span>
                  <span className="block text-xs uppercase tracking-[0.22em] text-stone-500">
                    muebles mayorista y minorista
                  </span>
                </span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-stone-50 transition hover:-translate-y-0.5 hover:bg-stone-800 sm:inline-flex"
              >
                Consultar por WhatsApp
              </a>
            </div>

            <nav className="flex gap-2 overflow-x-auto pb-1 lg:justify-center lg:pb-0">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-medium text-stone-600 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-stone-950"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-stone-50 transition hover:-translate-y-0.5 hover:bg-stone-800 sm:hidden"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </header>
  )
}
