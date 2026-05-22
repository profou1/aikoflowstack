import { NextResponse } from "next/server"

const AIRTABLE_API_ROOT = "https://api.airtable.com/v0"
const PLACEHOLDER_PREFIX = "REPLACE_"

type NewsletterPayload = {
  email: string
}

type ContactPayload = {
  nombre: string
  telefono: string
  email: string
  ciudad?: string
  mensaje?: string
}

type LeadRequestBody =
  | {
      kind: "newsletter"
      payload: NewsletterPayload
    }
  | {
      kind: "contact"
      payload: ContactPayload
    }

function hasValue(value: string | undefined) {
  return Boolean(value && !value.startsWith(PLACEHOLDER_PREFIX))
}

function isValidEmail(email: string) {
  return email.includes("@")
}

function getAirtableConfig(kind: LeadRequestBody["kind"]) {
  const apiKey = process.env.AIRTABLE_PAT
  const baseId = process.env.AIRTABLE_BASE_ID
  const tableName =
    kind === "newsletter"
      ? process.env.AIRTABLE_NEWSLETTER_TABLE || "newsletter"
      : process.env.AIRTABLE_CONTACT_TABLE || "contact_requests"

  return {
    apiKey,
    baseId,
    tableName,
    isReady: hasValue(apiKey) && hasValue(baseId) && hasValue(tableName)
  }
}

async function createAirtableRecord(
  config: ReturnType<typeof getAirtableConfig>,
  fields: Record<string, string>
) {
  const response = await fetch(
    `${AIRTABLE_API_ROOT}/${config.baseId}/${encodeURIComponent(config.tableName)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ fields })
    }
  )

  if (!response.ok) {
    const details = await response.text()
    throw new Error(details || "Airtable rejected the record.")
  }
}

function parseRequestBody(body: unknown): LeadRequestBody | null {
  if (!body || typeof body !== "object") {
    return null
  }

  const kind = "kind" in body ? body.kind : null
  const payload = "payload" in body ? body.payload : null

  if (kind !== "newsletter" && kind !== "contact") {
    return null
  }

  if (!payload || typeof payload !== "object") {
    return null
  }

  return { kind, payload } as LeadRequestBody
}

export async function POST(request: Request) {
  const body = parseRequestBody(await request.json().catch(() => null))

  if (!body) {
    return NextResponse.json({ error: "Payload inválido." }, { status: 400 })
  }

  const createdAt = new Date().toISOString()
  const config = getAirtableConfig(body.kind)

  if (!config.isReady) {
    return NextResponse.json(
      { error: "Airtable no está configurado en el servidor." },
      { status: 503 }
    )
  }

  try {
    if (body.kind === "newsletter") {
      const email = body.payload.email?.trim()

      if (!email || !isValidEmail(email)) {
        return NextResponse.json({ error: "Email inválido." }, { status: 400 })
      }

      await createAirtableRecord(config, {
        Email: email,
        Origen: "landing-newsletter",
        "Fecha alta": createdAt
      })
    } else {
      const nombre = body.payload.nombre?.trim()
      const telefono = body.payload.telefono?.trim()
      const email = body.payload.email?.trim()

      if (!nombre || !telefono || !email || !isValidEmail(email)) {
        return NextResponse.json(
          { error: "Nombre, teléfono y email válidos son obligatorios." },
          { status: 400 }
        )
      }

      await createAirtableRecord(config, {
        Nombre: nombre,
        Telefono: telefono,
        Email: email,
        Ciudad: body.payload.ciudad?.trim() || "",
        Mensaje: body.payload.mensaje?.trim() || "",
        Origen: "landing-contacto",
        "Fecha alta": createdAt
      })
    }

    return NextResponse.json({ ok: true, mode: "airtable" })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "No se pudo guardar el lead en Airtable."

    return NextResponse.json({ error: message }, { status: 502 })
  }
}
