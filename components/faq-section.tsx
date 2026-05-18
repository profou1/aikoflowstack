"use client"

import { useState } from "react"

import { faqs } from "@/data/site-data"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section-block">
      <div className="mx-auto max-w-5xl space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Preguntas frecuentes"
            description="Una base rápida para responder dudas habituales antes de pasar a la conversación comercial."
            align="center"
          />
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex

            return (
              <Reveal
                key={faq.question}
                delay={index === 0 ? "short" : index % 2 === 0 ? "medium" : "long"}
              >
                <article className="surface-card hover-card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition sm:px-8"
                >
                  <span className="text-xl text-stone-950 sm:text-2xl">{faq.question}</span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/70 bg-white/78 text-xl text-stone-700 shadow-[0_10px_24px_rgba(33,24,18,0.05)]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <div className="border-t border-stone-950/10 px-6 py-5 sm:px-8">
                    <p className="text-base leading-7 text-stone-600">{faq.answer}</p>
                  </div>
                ) : null}
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
