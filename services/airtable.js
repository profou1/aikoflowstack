const AIRTABLE_API_ROOT = "https://api.airtable.com/v0";

function getConfig(config) {
  return config?.leads?.airtable ?? {};
}

function isAirtableReady(config) {
  const airtable = getConfig(config);
  return Boolean(
    config?.leads?.provider === "airtable" &&
      airtable.apiKey &&
      airtable.baseId &&
      airtable.newsletterTable &&
      airtable.contactTable &&
      !airtable.apiKey.startsWith("REPLACE_") &&
      !airtable.baseId.startsWith("REPLACE_")
  );
}

async function postRecord(config, tableName, fields) {
  const airtable = getConfig(config);
  const response = await fetch(
    `${AIRTABLE_API_ROOT}/${airtable.baseId}/${encodeURIComponent(tableName)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${airtable.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields }),
    }
  );

  if (!response.ok) {
    const details = await response.text();
    throw new Error(
      `No se pudo enviar el lead a Airtable. ${details || "Revisa la configuracion."}`
    );
  }

  return response.json();
}

function persistLocalRecord(key, value) {
  const records = JSON.parse(window.localStorage.getItem(key) ?? "[]");
  records.push(value);
  window.localStorage.setItem(key, JSON.stringify(records));
}

export async function submitNewsletter(config, email) {
  const payload = {
    email,
    origen: "landing-newsletter",
    createdAt: new Date().toISOString(),
  };

  if (isAirtableReady(config)) {
    return postRecord(config, config.leads.airtable.newsletterTable, payload);
  }

  persistLocalRecord("newsletter_leads", payload);
  return { ok: true, mode: "local" };
}

export async function submitContact(config, formData) {
  const payload = {
    nombre: formData.nombre,
    telefono: formData.telefono,
    email: formData.email,
    ciudad: formData.ciudad,
    mensaje: formData.mensaje,
    origen: "landing-contacto",
    createdAt: new Date().toISOString(),
  };

  if (isAirtableReady(config)) {
    return postRecord(config, config.leads.airtable.contactTable, payload);
  }

  persistLocalRecord("contact_requests", payload);
  return { ok: true, mode: "local" };
}
