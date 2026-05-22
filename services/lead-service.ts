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

type LeadKind = "newsletter" | "contact"

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

async function submitLead(kind: LeadKind, storageKey: string, payload: object) {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ kind, payload })
  })

  if (response.status === 503) {
    await persistLocal(storageKey, payload)
    return { ok: true, mode: "local" as const }
  }

  let data: { error?: string; ok?: boolean; mode?: string } | null = null

  try {
    data = await response.json()
  } catch {
    data = null
  }

  if (!response.ok) {
    throw new Error(data?.error || "No pudimos guardar el lead.")
  }

  return data
}

export async function submitNewsletterLead(payload: NewsletterPayload) {
  return submitLead("newsletter", commercialConfig.airtableTables.newsletter, payload)
}

export async function submitContactLead(payload: ContactPayload) {
  return submitLead("contact", commercialConfig.airtableTables.contactRequests, payload)
}
