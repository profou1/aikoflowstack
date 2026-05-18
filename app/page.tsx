import { AboutSection } from "@/components/about-section"
import { CatalogSection } from "@/components/catalog-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { NewsletterSection } from "@/components/newsletter-section"
import { ProductsShowcase } from "@/components/products-showcase"

export default function HomePage() {
  return (
    <div className="page-chrome min-h-screen bg-[var(--background)] text-stone-950">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />
      <Header />
      <main>
        <Hero />
        <ProductsShowcase />
        <CatalogSection />
        <AboutSection />
        <NewsletterSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
