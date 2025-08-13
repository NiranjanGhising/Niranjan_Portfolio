import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { ProofStrip } from "@/components/proof-strip"
import { SkillsSection } from "@/components/skills-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { MiniDashboard } from "@/components/mini-dashboard"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      <main id="main" className="bg-background">
        <Hero />
        <ProofStrip />
        <SkillsSection />
        <FeaturedProjects />
        <MiniDashboard />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
