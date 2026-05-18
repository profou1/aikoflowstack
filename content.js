export const siteConfig = {
  brand: {
    name: "Yohaku",
    eyebrow: "MUEBLES MAYORISTA Y MINORISTA",
    tagline: "Muebles sobrios, catálogo claro y atención comercial directa.",
  },
  hero: {
    title: "Muebles a precio mayorista para tu casa, local o proyecto.",
    description:
      "Accede a muebles seleccionados con precios de catalogo sin IVA, condiciones mayoristas y atencion personalizada por WhatsApp. Vendemos tanto a revendedores, comercios y proyectos como a consumidores finales.",
    primaryCta: "Consultar por WhatsApp",
    secondaryCta: "Ver catalogos",
    badges: [
      "Precios de catalogo sin IVA",
      "Garantia de 30 dias",
      "Despacho de 24 a 72 hs habiles",
    ],
  },
  commercial: {
    paymentNote:
      "Los precios de catalogo son de contado o efectivo y no incluyen IVA.",
    invoiceNote:
      "Si la compra se realiza por transferencia o con factura, se suma el IVA.",
    shippingNote:
      "Envio o despacho disponible de 24 a 72 hs habiles desde el pago completo.",
    warrantyNote: "Garantia de 30 dias sobre fallas de fabrica.",
    supportLabel: "Atencion mayorista asistida",
  },
  whatsapp: {
    phone: "5491123456789",
    message:
      "Hola, quiero consultar por los muebles y catalogos mayoristas de Yohaku.",
  },
  catalogsIntro:
    "Elegimos PDF porque funcionan muy bien para consultas comerciales: se comparten facil, mantienen orden visual y permiten sumar nuevas lineas sin redisenar la landing.",
  about: {
    title: "Quienes somos",
    paragraphs: [
      "Yohaku nace para acercar muebles con estetica cuidada, precios competitivos y una forma de compra simple.",
      "Trabajamos con clientes mayoristas, comercios, profesionales y consumidores finales que buscan resolver su compra sin vueltas: catalogos claros, atencion por WhatsApp y coordinacion rapida.",
    ],
    stats: [
      { label: "Catalogos activos", value: "2" },
      { label: "Garantia", value: "30 dias" },
      { label: "Despacho", value: "24-72 hs" },
    ],
  },
  newsletter: {
    title: "Recibi novedades y oportunidades",
    description:
      "Dejanos tu email y te avisamos cuando haya nuevos ingresos, catalogos o condiciones especiales.",
    buttonLabel: "Suscribirme",
    successMessage:
      "Tu email ya quedo registrado.",
  },
  contact: {
    title: "Queremos ayudarte con tu consulta",
    description:
      "Dejanos tus datos y te contactamos para ayudarte con catalogos, cantidades, medios de pago y tiempos de despacho.",
    buttonLabel: "Quiero que me contacten",
    successMessage:
      "Recibimos tu consulta y la vamos a responder a la brevedad.",
  },
  footer: {
    columns: [
      {
        title: "Navegacion",
        links: [
          { label: "Hero", href: "#hero" },
          { label: "Productos", href: "#productos" },
          { label: "Catalogos", href: "#catalogos" },
          { label: "Contacto", href: "#contacto" },
        ],
      },
      {
        title: "Condiciones",
        links: [
          { label: "Precios sin IVA", href: "#condiciones" },
          { label: "Garantia de 30 dias", href: "#condiciones" },
          { label: "Despacho 24-72 hs", href: "#condiciones" },
        ],
      },
      {
        title: "Canales",
        links: [
          { label: "WhatsApp comercial", href: null, kind: "whatsapp" },
          { label: "Newsletter", href: "#newsletter" },
          { label: "Formulario", href: "#contacto" },
        ],
      },
    ],
    note:
      "Los precios visibles son referenciales y no implican stock online ni compra automatica.",
  },
  leads: {
    provider: "local",
    airtable: {
      apiKey: "REPLACE_WITH_AIRTABLE_TOKEN",
      baseId: "REPLACE_WITH_BASE_ID",
      newsletterTable: "newsletter",
      contactTable: "contact_requests",
    },
  },
};

export const products = [
  {
    id: "mesa-nordica",
    nombre: "Mesa nordica roble",
    precio: "$189.000",
    imagen: "./assets/products/mesa-nordica.svg",
    alt: "Mesa de comedor nordica en madera clara",
  },
  {
    id: "sillon-linea",
    nombre: "Sillon linea lino",
    precio: "$264.000",
    imagen: "./assets/products/sillon-linea.svg",
    alt: "Sillon de dos cuerpos tapizado en lino",
  },
  {
    id: "aparador-bajo",
    nombre: "Aparador bajo nogal",
    precio: "$228.000",
    imagen: "./assets/products/aparador-bajo.svg",
    alt: "Aparador bajo con puertas corredizas",
  },
  {
    id: "rack-modular",
    nombre: "Rack modular living",
    precio: "$171.000",
    imagen: "./assets/products/rack-modular.svg",
    alt: "Rack bajo para television y guardado",
  },
  {
    id: "set-comedor",
    nombre: "Set comedor x4",
    precio: "$312.000",
    imagen: "./assets/products/set-comedor.svg",
    alt: "Mesa rectangular con cuatro sillas",
  },
];

export const catalogs = [
  {
    id: "living",
    titulo: "Catalogo Living",
    descripcion:
      "Sillones, racks, mesas bajas y apoyos pensados para exhibicion y rotacion agil.",
    coverImage: "./assets/catalogs/catalogo-living-cover.svg",
    pdfUrl: "./assets/catalogs/catalogo-living.pdf",
    ctaLabel: "Abrir PDF",
  },
  {
    id: "comedor",
    titulo: "Catalogo Comedor",
    descripcion:
      "Mesas, sillas y conjuntos con lectura mayorista simple para compras por volumen.",
    coverImage: "./assets/catalogs/catalogo-comedor-cover.svg",
    pdfUrl: "./assets/catalogs/catalogo-comedor.pdf",
    ctaLabel: "Ver catalogo",
  },
];
