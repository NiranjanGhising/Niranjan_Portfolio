import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/data/testimonials"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground !text-foreground">What Others Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Feedback from professors, colleagues, and collaborators
            </p>
          </div>

          {/* Testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6 space-y-4">
                  {/* Quote */}
                  <blockquote className="text-muted-foreground leading-relaxed">"{testimonial.content}"</blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    {/* Avatar placeholder */}
                    <div className="w-10 h-10 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-accent">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                        {testimonial.company && ` • ${testimonial.company}`}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
