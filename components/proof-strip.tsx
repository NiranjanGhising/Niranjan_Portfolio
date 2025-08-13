import { Badge } from "@/components/ui/badge"

const tools = ["Python", "SQL", "Excel", "Tableau", "Power BI", "Pandas", "NumPy", "scikit-learn"]

export function ProofStrip() {
  return (
    <section className="py-12 border-b border-border">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center space-y-8">
          {/* Section title */}
          <div className="space-y-2">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Tools & Technologies</h2>
            <p className="text-base text-muted-foreground">Experienced with industry-standard data analysis tools</p>
          </div>

          {/* Tools grid */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {tools.map((tool) => (
              <Badge
                key={tool}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium bg-muted/50 text-foreground border border-border hover:bg-accent/10 hover:border-accent/20 transition-colors"
              >
                {tool}
              </Badge>
            ))}
          </div>

          {/* Quick stats preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto pt-8">
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-accent">10+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-accent">5</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-accent">20+</div>
              <div className="text-sm text-muted-foreground">Datasets Analyzed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
