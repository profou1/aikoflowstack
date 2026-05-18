import { commercialConfig } from "@/data/site-data"

type NewsletterPayload = {
  email: string
}

type ContactPayload = {
  nombre: string
  telefono: string
  email: string
  ciudad: string
  mensaje: string
}

async function persistLocal(key: string, payload: object) {
  if (typeof window === "undefined") {
    return
  }

  const existing = JSON.parse(window.localStorage.getItem(key) ?? "[]")
  existing.push({
    ...payload,
    createdAt: new Date().toISOString()
  })
  window.localStorage.setItem(key, JSON.stringify(existing))
}

export async function submitNewsletterLead(payload: NewsletterPayload) {
  await new Promise((resolve) => setTimeout(resolve, 550))

  if (commercialConfig.leadProvider === "local") {
    await persistLocal(commercialConfig.airtableTables.newsletter, payload)
    return { ok: true }
  }

  throw new Error("Lead provider not configured.")
}

export async function submitContactLead(payload: ContactPayload) {
  await new Promise((resolve) => setTimeout(resolve, 650))

  if (commercialConfig.leadProvider === "local") {
    await persistLocal(commercialConfig.airtableTables.contactRequests, payload)
    return { ok: true }
  }

  throw new Error("Lead provider not configured.")
}
