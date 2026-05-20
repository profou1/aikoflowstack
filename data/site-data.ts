export const brandName = "Yohaku"

export const commercialConfig = {
  seoTitle: "Yohaku | Muebles a precio mayorista",
  seoDescription:
    "Yohaku ofrece muebles a precio mayorista y minorista, catálogos actualizados, atención por WhatsApp, despacho rápido y garantía de 30 días.",
  whatsappPhone: "5491125187224",
  whatsappMessage:
    "Hola, quiero consultar por los muebles y catálogos mayoristas de Yohaku.",
  heroClaims: [
    "Precios de catálogo sin IVA",
    "Contado / efectivo",
    "Transferencia o factura + IVA",
    "Despacho en 24 a 72 hs hábiles",
    "Garantía de 30 días"
  ],
  pricingNote:
    "Los precios publicados son referenciales, de contado y sin IVA. Transferencia o factura pueden sumar IVA según corresponda. Consultar disponibilidad y condiciones finales por WhatsApp.",
  shippingNote: "Despacho o entrega coordinada en 24 a 72 hs hábiles.",
  warrantyNote: "Garantía de 30 días por fallas de fabricación.",
  invoiceNote: "Transferencia o factura: consultar IVA según operación.",
  leadProvider: "local",
  airtableTables: {
    newsletter: "newsletter",
    contactRequests: "contact_requests"
  }
} as const

export const whatsappUrl = `https://api.whatsapp.com/send?phone=${commercialConfig.whatsappPhone}&text=${encodeURIComponent(
  commercialConfig.whatsappMessage
)}`

export const navItems = [
  { label: "Productos", href: "#productos" },
  { label: "Catálogos", href: "#catalogos" },
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Newsletter", href: "#newsletter" },
  { label: "Contacto", href: "#contacto" }
] as const

export const heroContent = {
  title: "Muebles a precio mayorista para tu casa, local o proyecto",
  subtitle:
    "Accedé a muebles seleccionados con precios de catálogo sin IVA, condiciones mayoristas y atención personalizada por WhatsApp. Vendemos tanto a revendedores, comercios y proyectos como a consumidores finales.",
  primaryCta: {
    label: "Consultar por WhatsApp",
    href: whatsappUrl
  },
  secondaryCta: {
    label: "Ver catálogos",
    href: "#catalogos"
  },
  image: "/images/hero-showroom.jpg",
  imageAlt: "Ambientación de muebles Yohaku para living y comedor"
}

export const featuredProducts = [
  {
    id: "silla-comedor-tapizada",
    nombre: "Malta",
    precio: "$49.990",
    image: "/images/products/silla-comedor-tapizada.jpg",
    alt: "Silla tapizada para comedor en tono neutro"
  },
  {
    id: "mesa-comedor-madera",
    nombre: "Mesa Aragon",
    precio: "$549.990",
    image: "/images/products/mesa-comedor-madera.jpg",
    alt: "Mesa de comedor en madera clara"
  },
  {
    id: "sillon-individual",
    nombre: "Silloncito Caneda",
    precio: "$119.990",
    image: "/images/products/sillon-individual.jpg",
    alt: "Sillón individual de líneas suaves"
  },
  {
    id: "banqueta-alta",
    nombre: "Banqueta Hay - Plástico",
    precio: "$81.990",
    image: "/images/products/banqueta-alta.jpg",
    alt: "Banqueta alta para barra o cocina"
  },
  {
    id: "escritorio-compacto",
    nombre: "Escritorio compacto",
    precio: "$176.000",
    image: "/images/products/escritorio-compacto.jpg",
    alt: "Escritorio compacto para home office"
  },
  {
    id: "decoracion",
    nombre: "Alfombra Nordic",
    precio: "$29.690",
    image: "/images/products/decoracion.jpg",
    alt: "Objeto decorativo para ambientar living o dormitorio"
  },
  {
    id: "mesa-ratona",
    nombre: "Mesa Ratona Elliot",
    precio: "$149.990",
    image: "/images/products/mesa-ratona.jpg",
    alt: "Mesa ratona de diseño sobrio"
  },
  {
    id: "silla-oficina",
    nombre: "Silla Selb",
    precio: "$59.990",
    image: "/images/products/silla-oficina.jpg",
    alt: "Silla de oficina ergonómica"
  }
] as const

export const categories = [
  {
    title: "Sillas",
    description:
      "Modelos para comedor, cocina, escritorio y espacios comerciales con terminaciones sobrias y versátiles.",
    image: "/images/categories/sillas.svg"
  },
  {
    title: "Mesas",
    description:
      "Opciones para comedor, reuniones, trabajo y proyectos de equipamiento con lectura comercial clara.",
    image: "/images/categories/mesas.svg"
  },
  {
    title: "Oficina",
    description:
      "Piezas pensadas para home office, estudios y espacios profesionales con foco en funcionalidad y estética.",
    image: "/images/categories/oficina.svg"
  },
  {
    title: "Deco",
    description:
      "Complementos que terminan de vestir cada ambiente y amplían la propuesta para consumidor final y reventa.",
    image: "/images/categories/deco.svg"
  }
] as const

export const benefits = [
  {
    title: "Precio mayorista",
    description:
      "Condiciones pensadas para compras por volumen, reventa, comercios y proyectos."
  },
  {
    title: "Venta minorista",
    description:
      "También atendemos consumidores finales que buscan muebles bien resueltos y atención directa."
  },
  {
    title: "Atención personalizada",
    description:
      "Cada consulta se acompaña por WhatsApp para resolver disponibilidad, tiempos y opciones."
  },
  {
    title: "Catálogos claros",
    description:
      "La propuesta se consulta rápido, con PDFs simples de compartir y fáciles de actualizar."
  },
  {
    title: "Logística ágil",
    description:
      "Coordinamos despacho o entrega en 24 a 72 hs hábiles según producto y pago confirmado."
  },
  {
    title: "Garantía",
    description:
      "Trabajamos con garantía de 30 días para comprar con mayor tranquilidad."
  }
] as const

export const stats = [
  { label: "Clientes activos", value: "73" },
  { label: "Productos", value: "+500" },
  { label: "Proyectos acompañados", value: "26" },
  { label: "Estilos", value: "5" }
] as const

export const faqs = [
  {
    question: "¿Cómo accedo a los catálogos?",
    answer:
      "Podés abrir los catálogos desde esta página y escribirnos por WhatsApp para consultar disponibilidad, condiciones y próximos pasos."
  },
  {
    question: "¿Los precios publicados son mayoristas?",
    answer:
      "Sí. Los precios publicados son referenciales, de contado y sin IVA. Si la operación es por transferencia o factura, puede sumarse el IVA correspondiente."
  },
  {
    question: "¿También venden a consumidor final?",
    answer:
      "Sí. Yohaku trabaja tanto con mayoristas, comercios y proyectos como con clientes finales."
  },
  {
    question: "¿Cómo coordinan la compra?",
    answer:
      "Nos escribís por WhatsApp o dejás tu consulta y te respondemos con disponibilidad, condiciones y coordinación."
  },
  {
    question: "¿Hacen envíos o despacho?",
    answer:
      "Sí. Coordinamos despacho o entrega en 24 a 72 hs hábiles desde el pago completo del pedido."
  }
] as const

export const catalogs = [
  {
    id: "catalogo-principal",
    titulo: "Catálogo principal",
    descripcion:
      "Selección de muebles para comedor, living, oficina y espacios comerciales.",
    coverImage: "/images/catalogs/catalogo-living-cover.jpg",
    pdfUrl: "https://drive.google.com/file/d/1x-REFZnBEELcvq2neeqt-CHHp4VCWCxt/view?usp=sharing",
    ctaLabel: "Abrir PDF"
  },
  {
    id: "catalogo-complementario",
    titulo: "Catálogo complementario",
    descripcion:
      "Más opciones de sillas, mesas, deco y productos para equipar distintos ambientes.",
    coverImage: "/images/catalogs/catalogo-comedor-cover.jpg",
    pdfUrl: "https://drive.google.com/file/d/1i5jaFKKoWh6vl7-9gAmpTOQp_hvmqTjC/view?usp=drive_link",
    ctaLabel: "Descargar PDF"
  }
] as const

export const aboutContent = {
  title: "Quiénes somos",
  description:
    "Yohaku nace para acercar muebles con estética cuidada, precios competitivos y una forma de compra simple. Trabajamos con clientes mayoristas, comercios, profesionales y consumidores finales que buscan resolver su compra sin vueltas: catálogos claros, atención por WhatsApp y coordinación rápida.",
  image: "/images/about-atelier.jpg",
  imageAlt: "Visual editorial de la marca Yohaku y su propuesta de muebles"
}

export const newsletterContent = {
  title: "Recibí novedades y oportunidades",
  description:
    "Dejanos tu email y te avisamos cuando haya nuevos ingresos, catálogos o condiciones especiales.",
  buttonLabel: "Quiero recibir novedades",
  successMessage:
    "Tu email quedó registrado. Pronto vas a poder recibir novedades, catálogos e ingresos destacados.",
  errorMessage: "No pudimos registrar tu email. Probá nuevamente."
}

export const contactContent = {
  title: "¿Querés que te contactemos?",
  description:
    "Contanos qué estás buscando y te respondemos con disponibilidad, condiciones y próximos pasos.",
  whatsappLabel: "Consultar por WhatsApp",
  submitLabel: "Enviar consulta",
  successMessage:
    "Recibimos tu consulta. Te vamos a responder con disponibilidad y próximos pasos.",
  errorMessage: "No pudimos enviar tu consulta. Probá nuevamente."
}
