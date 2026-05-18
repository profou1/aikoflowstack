import { catalogs, products, siteConfig } from "./content.js";
import { submitContact, submitNewsletter } from "./services/airtable.js";

const { createElement: h, useEffect, useMemo, useState } = window.React;

function cn(...values) {
  return values.filter(Boolean).join(" ");
}

function getWhatsAppUrl(messageOverride) {
  const message = encodeURIComponent(messageOverride ?? siteConfig.whatsapp.message);
  return `https://wa.me/${siteConfig.whatsapp.phone}?text=${message}`;
}

function App() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("idle");
  const [newsletterError, setNewsletterError] = useState("");
  const [contactStatus, setContactStatus] = useState("idle");
  const [contactError, setContactError] = useState("");
  const [contactForm, setContactForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    ciudad: "",
    mensaje: "",
  });

  const repeatedProducts = useMemo(() => [...products, ...products], []);
  const whatsappUrl = useMemo(() => getWhatsAppUrl(), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    const elements = document.querySelectorAll("[data-reveal]");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  async function handleNewsletterSubmit(event) {
    event.preventDefault();
    setNewsletterError("");

    if (!newsletterEmail.trim() || !newsletterEmail.includes("@")) {
      setNewsletterStatus("error");
      setNewsletterError("Ingresa un email valido.");
      return;
    }

    setNewsletterStatus("loading");

    try {
      await submitNewsletter(siteConfig, newsletterEmail.trim());
      setNewsletterStatus("success");
      setNewsletterEmail("");
    } catch (error) {
      setNewsletterStatus("error");
      setNewsletterError(error.message);
    }
  }

  async function handleContactSubmit(event) {
    event.preventDefault();
    setContactError("");

    if (!contactForm.nombre.trim() || !contactForm.telefono.trim() || !contactForm.email.trim()) {
      setContactStatus("error");
      setContactError("Nombre, telefono y email son obligatorios.");
      return;
    }

    if (!contactForm.email.includes("@")) {
      setContactStatus("error");
      setContactError("Ingresa un email valido.");
      return;
    }

    setContactStatus("loading");

    try {
      await submitContact(siteConfig, contactForm);
      setContactStatus("success");
      setContactForm({
        nombre: "",
        telefono: "",
        email: "",
        ciudad: "",
        mensaje: "",
      });
    } catch (error) {
      setContactStatus("error");
      setContactError(error.message);
    }
  }

  function updateField(field, value) {
    setContactForm((current) => ({ ...current, [field]: value }));
  }

  return h(
    "div",
    { className: "page-shell" },
    h(Header, { whatsappUrl }),
    h(
      "main",
      null,
      h(HeroSection, { whatsappUrl }),
      h(ProductsSection, { repeatedProducts }),
      h(CatalogSection, { whatsappUrl }),
      h(AboutSection),
      h(NewsletterSection, {
        newsletterEmail,
        newsletterStatus,
        newsletterError,
        onSubmit: handleNewsletterSubmit,
        onChange: setNewsletterEmail,
      }),
      h(ContactSection, {
        whatsappUrl,
        contactForm,
        contactStatus,
        contactError,
        onSubmit: handleContactSubmit,
        onChange: updateField,
      })
    ),
    h(Footer, { whatsappUrl })
  );
}

function Header({ whatsappUrl }) {
  return h(
    "header",
    { className: "topbar" },
    h(
      "a",
      { className: "brand-lockup", href: "#hero", "aria-label": siteConfig.brand.name },
      h("span", { className: "brand-mark" }, "LM"),
      h(
        "span",
        { className: "brand-copy" },
        h("strong", null, siteConfig.brand.name),
        h("small", null, "venta mayorista curada")
      )
    ),
    h(
      "nav",
      { className: "topnav", "aria-label": "Navegacion principal" },
      h("a", { href: "#productos" }, "Productos"),
      h("a", { href: "#catalogos" }, "Catalogos"),
      h("a", { href: "#quienes-somos" }, "Quienes somos"),
      h("a", { href: "#contacto" }, "Contacto")
    ),
    h(
      "a",
      { className: "button button-dark button-compact", href: whatsappUrl, target: "_blank", rel: "noreferrer" },
      "WhatsApp"
    )
  );
}

function HeroSection({ whatsappUrl }) {
  return h(
    "section",
    { className: "hero section-frame", id: "hero" },
    h(
      "div",
      { className: "hero-copy reveal", "data-reveal": true },
      h("p", { className: "eyebrow" }, siteConfig.brand.eyebrow),
      h("h1", null, siteConfig.hero.title),
      h("p", { className: "hero-description" }, siteConfig.hero.description),
      h(
        "div",
        { className: "hero-actions" },
        h(
          "a",
          { className: "button button-dark", href: whatsappUrl, target: "_blank", rel: "noreferrer" },
          siteConfig.hero.primaryCta
        ),
        h("a", { className: "button button-light", href: "#catalogos" }, siteConfig.hero.secondaryCta)
      ),
      h(
        "ul",
        { className: "hero-badges" },
        siteConfig.hero.badges.map((badge) => h("li", { key: badge }, badge))
      )
    ),
    h(
      "div",
      { className: "hero-panel reveal", "data-reveal": true },
      h("p", { className: "panel-title" }, siteConfig.brand.tagline),
      h(
        "div",
        { className: "hero-grid", id: "condiciones" },
        h(InfoTile, { label: "Condicion comercial", value: siteConfig.commercial.paymentNote }),
        h(InfoTile, { label: "Factura / transferencia", value: siteConfig.commercial.invoiceNote }),
        h(InfoTile, { label: "Logistica", value: siteConfig.commercial.shippingNote }),
        h(InfoTile, { label: "Garantia", value: siteConfig.commercial.warrantyNote })
      ),
      h(
        "a",
        {
          className: "inline-link",
          href: getWhatsAppUrl("Hola, quiero consultar por compra mayorista, plazos y condiciones de pago."),
          target: "_blank",
          rel: "noreferrer",
        },
        "Consultar condiciones de compra"
      )
    )
  );
}

function ProductsSection({ repeatedProducts }) {
  return h(
    "section",
    { className: "section-stack", id: "productos" },
    h(SectionHeading, {
      eyebrow: "Productos referenciales",
      title: "Una cinta visual tipo ecommerce, pero pensada para orientar la compra.",
      description:
        "Las piezas que ves aca muestran rango de precio y estilo. No llevan a un producto individual ni funcionan como carrito: son referencia para ayudar a leer el catalogo.",
    }),
    h(
      "div",
      { className: "product-marquee reveal", "data-reveal": true },
      h(
        "div",
        { className: "product-track" },
        repeatedProducts.map((product, index) =>
          h(ProductCard, {
            key: `${product.id}-${index}`,
            product,
          })
        )
      )
    )
  );
}

function ProductCard({ product }) {
  return h(
    "article",
    { className: "product-card" },
    h("img", { src: product.imagen, alt: product.alt, className: "product-image" }),
    h(
      "div",
      { className: "product-meta" },
      h("span", { className: "product-kicker" }, "referencial"),
      h("h3", null, product.nombre),
      h("p", { className: "product-price" }, product.precio),
      h("p", { className: "product-note" }, "Precio contado sin IVA")
    )
  );
}

function CatalogSection({ whatsappUrl }) {
  return h(
    "section",
    { className: "section-stack catalogs-wrap", id: "catalogos" },
    h(SectionHeading, {
      eyebrow: "Catalogos",
      title: "Dos lineas activas hoy, con estructura lista para sumar mas.",
      description: siteConfig.catalogsIntro,
    }),
    h(
      "div",
      { className: "catalog-grid" },
      catalogs.map((catalog) =>
        h(
          "article",
          { className: "catalog-card reveal", key: catalog.id, "data-reveal": true },
          h("img", { src: catalog.coverImage, alt: `${catalog.titulo} portada`, className: "catalog-cover" }),
          h(
            "div",
            { className: "catalog-body" },
            h("h3", null, catalog.titulo),
            h("p", null, catalog.descripcion),
            h(
              "div",
              { className: "catalog-actions" },
              h(
                "a",
                {
                  className: "button button-dark",
                  href: catalog.pdfUrl,
                  target: "_blank",
                  rel: "noreferrer",
                },
                catalog.ctaLabel
              ),
              h(
                "a",
                {
                  className: "button button-light",
                  href: getWhatsAppUrl(`Hola, quiero recibir mas informacion sobre el ${catalog.titulo}.`),
                  target: "_blank",
                  rel: "noreferrer",
                },
                "Consultar"
              )
            )
          )
        )
      )
    ),
    h(
      "div",
      { className: "catalog-footer-callout reveal", "data-reveal": true },
      h("p", null, "Si necesitas una linea puntual, te ayudamos a definir el catalogo correcto segun margen, rotacion y tipo de local."),
      h(
        "a",
        { className: "inline-link", href: whatsappUrl, target: "_blank", rel: "noreferrer" },
        "Hablar con asesor comercial"
      )
    )
  );
}

function AboutSection() {
  return h(
    "section",
    { className: "section-stack about-grid", id: "quienes-somos" },
    h(
      "div",
      { className: "about-copy reveal", "data-reveal": true },
      h("p", { className: "eyebrow" }, "Quienes somos"),
      h("h2", null, siteConfig.about.title),
      ...siteConfig.about.paragraphs.map((paragraph, index) => h("p", { key: index }, paragraph))
    ),
    h(
      "div",
      { className: "about-stats reveal", "data-reveal": true },
      siteConfig.about.stats.map((stat) =>
        h(
          "article",
          { className: "stat-card", key: stat.label },
          h("strong", null, stat.value),
          h("span", null, stat.label)
        )
      ),
      h("p", { className: "support-pill" }, siteConfig.commercial.supportLabel)
    )
  );
}

function NewsletterSection({
  newsletterEmail,
  newsletterStatus,
  newsletterError,
  onSubmit,
  onChange,
}) {
  return h(
    "section",
    { className: "section-stack promo-panel", id: "newsletter" },
    h(
      "div",
      { className: "promo-copy reveal", "data-reveal": true },
      h("p", { className: "eyebrow" }, "Newsletter"),
      h("h2", null, siteConfig.newsletter.title),
      h("p", null, siteConfig.newsletter.description)
    ),
    h(
      "form",
      { className: "newsletter-form reveal", onSubmit, "data-reveal": true },
      h("label", { className: "sr-only", htmlFor: "newsletter-email" }, "Email"),
      h("input", {
        id: "newsletter-email",
        type: "email",
        value: newsletterEmail,
        onChange: (event) => onChange(event.target.value),
        placeholder: "tuemail@negocio.com",
        autoComplete: "email",
      }),
      h(
        "button",
        { className: "button button-dark", type: "submit", disabled: newsletterStatus === "loading" },
        newsletterStatus === "loading" ? "Enviando..." : siteConfig.newsletter.buttonLabel
      ),
      h(StatusMessage, {
        status: newsletterStatus,
        errorMessage: newsletterError,
        successMessage: siteConfig.newsletter.successMessage,
      })
    )
  );
}

function ContactSection({
  whatsappUrl,
  contactForm,
  contactStatus,
  contactError,
  onSubmit,
  onChange,
}) {
  return h(
    "section",
    { className: "section-stack contact-layout", id: "contacto" },
    h(
      "div",
      { className: "contact-copy reveal", "data-reveal": true },
      h("p", { className: "eyebrow" }, "Contacto"),
      h("h2", null, siteConfig.contact.title),
      h("p", null, siteConfig.contact.description),
      h(
        "a",
        { className: "button button-light", href: whatsappUrl, target: "_blank", rel: "noreferrer" },
        "Prefiero escribir por WhatsApp"
      )
    ),
    h(
      "form",
      { className: "contact-form reveal", onSubmit, "data-reveal": true },
      h(FormField, {
        label: "Nombre",
        value: contactForm.nombre,
        onChange: (value) => onChange("nombre", value),
        required: true,
      }),
      h(FormField, {
        label: "Telefono",
        type: "tel",
        value: contactForm.telefono,
        onChange: (value) => onChange("telefono", value),
        required: true,
      }),
      h(FormField, {
        label: "Email",
        type: "email",
        value: contactForm.email,
        onChange: (value) => onChange("email", value),
        required: true,
      }),
      h(FormField, {
        label: "Ciudad o localidad",
        value: contactForm.ciudad,
        onChange: (value) => onChange("ciudad", value),
      }),
      h(FormField, {
        label: "Mensaje",
        value: contactForm.mensaje,
        onChange: (value) => onChange("mensaje", value),
        multiline: true,
      }),
      h(
        "button",
        { className: "button button-dark", type: "submit", disabled: contactStatus === "loading" },
        contactStatus === "loading" ? "Enviando..." : siteConfig.contact.buttonLabel
      ),
      h(StatusMessage, {
        status: contactStatus,
        errorMessage: contactError,
        successMessage: siteConfig.contact.successMessage,
      })
    )
  );
}

function Footer({ whatsappUrl }) {
  return h(
    "footer",
    { className: "footer" },
    h(
      "div",
      { className: "footer-top" },
      h(
        "div",
        { className: "footer-brand" },
        h("span", { className: "brand-mark" }, "LM"),
        h("p", null, siteConfig.footer.note)
      ),
      h(
        "div",
        { className: "footer-columns" },
        siteConfig.footer.columns.map((column) =>
          h(
            "div",
            { className: "footer-column", key: column.title },
            h("h3", null, column.title),
            ...column.links.map((link) =>
              h(
                "a",
                {
                  key: link.label,
                  href: link.kind === "whatsapp" ? whatsappUrl : link.href,
                  target: link.kind === "whatsapp" ? "_blank" : undefined,
                  rel: link.kind === "whatsapp" ? "noreferrer" : undefined,
                },
                link.label
              )
            )
          )
        )
      )
    ),
    h(
      "div",
      { className: "footer-bottom" },
      h("span", null, siteConfig.commercial.paymentNote),
      h("span", null, siteConfig.commercial.shippingNote)
    )
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return h(
    "div",
    { className: "section-heading reveal", "data-reveal": true },
    h("p", { className: "eyebrow" }, eyebrow),
    h("h2", null, title),
    h("p", null, description)
  );
}

function InfoTile({ label, value }) {
  return h(
    "article",
    { className: "info-tile" },
    h("span", null, label),
    h("strong", null, value)
  );
}

function FormField({ label, value, onChange, required, multiline, type = "text" }) {
  const inputProps = {
    value,
    required,
    onChange: (event) => onChange(event.target.value),
    placeholder: label,
  };

  return h(
    "label",
    { className: cn("form-field", multiline && "field-full") },
    h("span", null, label),
    multiline
      ? h("textarea", { ...inputProps, rows: 5 })
      : h("input", { ...inputProps, type, autoComplete: "off" })
  );
}

function StatusMessage({ status, errorMessage, successMessage }) {
  if (status === "idle" || status === "loading") {
    return null;
  }

  return h(
    "p",
    { className: cn("status-message", status === "success" ? "status-success" : "status-error") },
    status === "success" ? successMessage : errorMessage
  );
}

window.ReactDOM.createRoot(document.getElementById("root")).render(h(App));
