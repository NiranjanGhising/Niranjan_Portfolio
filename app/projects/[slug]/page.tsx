import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { projects } from "@/data/projects"
import { ProjectSidebar } from "@/components/project-sidebar"
import { ArrowLeft, CheckCircle } from "lucide-react"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto max-w-7xl px-4 py-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{project.title}</h1>
              <p className="text-muted-foreground">{project.summary}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Impact highlight */}
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-6">
                <div className="text-center space-y-2">
                  <div className="text-sm font-medium text-accent uppercase tracking-wider">Key Impact</div>
                  <div className="text-2xl font-bold text-foreground">{project.impact}</div>
                </div>
              </CardContent>
            </Card>

            {/* Problem section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Problem</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
              </div>
            </section>

            <Separator />

            {/* Approach section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Approach</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-muted-foreground leading-relaxed">{project.approach}</p>
              </div>
            </section>

            <Separator />

            {/* Tools section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Tools & Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool) => (
                  <Badge key={tool} variant="secondary" className="px-3 py-1">
                    {tool}
                  </Badge>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">Domain:</span> {project.domain}
              </div>
            </section>

            <Separator />

            {/* Process section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Process</h2>
              <div className="space-y-4">
                {project.process.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-accent">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-muted-foreground leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <Separator />

            {/* Results section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Results & Impact</h2>

              {/* Before/After */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-destructive/20 bg-destructive/5">
                  <CardHeader>
                    <CardTitle className="text-lg text-destructive">Before</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{project.results.before}</p>
                  </CardContent>
                </Card>

                <Card className="border-accent/20 bg-accent/5">
                  <CardHeader>
                    <CardTitle className="text-lg text-accent flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      After
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{project.results.after}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Key metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.results.metrics.map((metric, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-accent">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Image gallery placeholder */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Visualizations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="aspect-video bg-muted/50 border-2 border-dashed border-border">
                  <CardContent className="flex items-center justify-center h-full">
                    <div className="text-center space-y-2">
                      <div className="text-muted-foreground">Chart Visualization</div>
                      <div className="text-sm text-muted-foreground">{project.title} - Key Metrics Dashboard</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="aspect-video bg-muted/50 border-2 border-dashed border-border">
                  <CardContent className="flex items-center justify-center h-full">
                    <div className="text-center space-y-2">
                      <div className="text-muted-foreground">Process Flow</div>
                      <div className="text-sm text-muted-foreground">{project.title} - Analysis Workflow</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ProjectSidebar project={project} />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }))
}
