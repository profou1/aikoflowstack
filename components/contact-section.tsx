"use client"

import { FormEvent, useState } from "react"

import { contactContent, whatsappUrl } from "@/data/site-data"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { submitContactLead } from "@/services/lead-service"

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError("")

    const formData = new FormData(event.currentTarget)
    const nombre = String(formData.get("nombre") ?? "").trim()
    const telefono = String(formData.get("telefono") ?? "").trim()
    const email = String(formData.get("email") ?? "").trim()
    const ciudad = String(formData.get("ciudad") ?? "").trim()
    const mensaje = String(formData.get("mensaje") ?? "").trim()

    if (!nombre || !telefono || !email) {
      setStatus("error")
      setError("Nombre, teléfono y email son obligatorios.")
      return
    }

    if (!email.includes("@")) {
      setStatus("error")
      setError("Ingresá un email válido.")
      return
    }

    try {
      setStatus("loading")
      await submitContactLead({
        nombre,
        telefono,
        email,
        ciudad,
        mensaje
      })
      event.currentTarget.reset()
      setStatus("success")
    } catch {
      setStatus("error")
      setError(contactContent.errorMessage)
    }
  }

  return (
    <section id="contacto" className="section-block pb-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal className="surface-card hover-card p-8 sm:p-10 lg:p-12">
          <SectionHeading eyebrow="Contacto" title={contactContent.title} />
          <p className="mt-6 max-w-xl text-pretty text-base leading-8 text-stone-600 sm:text-lg">
            {contactContent.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="button-primary"
            >
              {contactContent.whatsappLabel}
            </a>
            <span className="inline-flex items-center rounded-full border border-stone-950/10 bg-white/70 px-4 py-3 text-sm text-stone-600">
              Respuesta comercial con disponibilidad y próximos pasos
            </span>
          </div>
        </Reveal>

        <Reveal className="surface-card hover-card p-6 sm:p-8" delay="short">
          <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
            <Field label="Nombre" name="nombre" placeholder="Tu nombre" />
            <Field
              label="Teléfono"
              name="telefono"
              placeholder="11 1234 5678"
              type="tel"
            />
            <Field label="Email" name="email" placeholder="tuemail@ejemplo.com" type="email" />
            <Field label="Ciudad / localidad" name="ciudad" placeholder="Tu ciudad o localidad" />
            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-medium text-stone-800">Mensaje</span>
              <textarea
                name="mensaje"
                rows={5}
                className="form-control resize-y"
                placeholder="Contanos qué productos, categorías o tipo de proyecto estás buscando."
              />
            </label>

            <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button type="submit" className="button-primary" disabled={status === "loading"}>
                {status === "loading" ? "Enviando..." : contactContent.submitLabel}
              </button>
              {status === "success" ? (
                <p className="text-sm text-stone-600">
                  {contactContent.successMessage}
                </p>
              ) : status === "error" ? (
                <p className="text-sm text-rose-700">{error}</p>
              ) : (
                <p className="text-sm text-stone-500">
                  También podés escribirnos por WhatsApp para resolverlo más rápido.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

type FieldProps = {
  label: string
  placeholder: string
  name: string
  type?: string
}

function Field({ label, placeholder, name, type = "text" }: FieldProps) {
  return (
    <label className="space-y-2">
      <span className="text-sm font-medium text-stone-800">{label}</span>
      <input
        type={type}
        name={name}
        className="form-control"
        placeholder={placeholder}
      />
    </label>
  )
}
