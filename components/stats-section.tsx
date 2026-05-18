import { stats } from "@/data/site-data"
import { Reveal } from "@/components/reveal"

export function StatsSection() {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="surface-card grid gap-5 overflow-hidden px-6 py-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="hover-card rounded-[1.75rem] border border-white/70 bg-white/78 p-5 shadow-[0_16px_42px_rgba(34,23,17,0.06)]"
            >
              <p className="text-4xl text-stone-950 sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-stone-500">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
