import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-accent/5 border-y border-accent/10">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center space-y-8">
          {/* Main message */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Open to Internships and Part-Time Roles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to bring data-driven insights to your team. Available for opportunities starting January 2025.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button size="lg" variant="accent" className="group text-white" asChild>
              <Link href="/contact">
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <Link href="mailto:ghisingniranjan@gmail.com?subject=Inquiry%20from%20portfolio">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Link>
            </Button>
          </div>

          {/* Additional info */}
          <div className="text-sm text-muted-foreground space-y-1">
            <p>Interested in data analysis, business intelligence, or machine learning roles</p>
            <p>Remote-friendly • Available 20+ hours/week during semester</p>
          </div>
        </div>
      </div>
    </section>
  )
}
