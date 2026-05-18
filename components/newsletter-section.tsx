"use client"

import { FormEvent, useState } from "react"

import { newsletterContent } from "@/data/site-data"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { submitNewsletterLead } from "@/services/lead-service"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError("")

    if (!email.trim() || !email.includes("@")) {
      setStatus("error")
      setError("Ingresá un email válido.")
      return
    }

    try {
      setStatus("loading")
      await submitNewsletterLead({ email: email.trim() })
      setStatus("success")
      setEmail("")
    } catch {
      setStatus("error")
      setError(newsletterContent.errorMessage)
    }
  }

  return (
    <section id="newsletter" className="section-block">
      <div className="mx-auto max-w-7xl">
        <Reveal className="surface-card hover-card grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_0.92fr] lg:p-12">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Newsletter"
              title={newsletterContent.title}
              description={newsletterContent.description}
            />
            <div className="rounded-[1.75rem] border border-white/70 bg-white/72 p-5 shadow-[0_14px_40px_rgba(33,24,18,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                Qué vas a recibir
              </p>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                Nuevos ingresos, catálogos actualizados y oportunidades comerciales para mayoristas y clientes finales.
              </p>
            </div>
          </div>

          <form className="grid gap-4 self-center" onSubmit={handleSubmit}>
            <label className="space-y-2">
              <span className="text-sm font-medium text-stone-800">Email</span>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="tuemail@ejemplo.com"
              />
            </label>
            <button
              type="submit"
              className="button-primary"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Enviando..." : newsletterContent.buttonLabel}
            </button>

            {status === "success" ? (
              <p className="text-sm text-emerald-700">{newsletterContent.successMessage}</p>
            ) : null}
            {status === "error" ? (
              <p className="text-sm text-rose-700">{error || newsletterContent.errorMessage}</p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
