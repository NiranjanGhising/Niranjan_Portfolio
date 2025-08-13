import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "@/data/projects"
import { ArrowLeft, Github, ExternalLink, Eye } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto max-w-7xl px-4 py-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">All Projects</h1>
              <p className="text-muted-foreground">Data analysis case studies and implementations</p>
            </div>
          </div>
        </div>
      </header>

      {/* Projects grid */}
      <main className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-lg group-hover:text-accent transition-colors">{project.title}</CardTitle>
                    <CardDescription>{project.summary}</CardDescription>
                  </div>
                  {project.featured && (
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Impact metric */}
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-3">
                  <div className="text-sm font-medium text-accent">Key Impact</div>
                  <div className="text-base font-bold text-foreground">{project.impact}</div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tools and domain */}
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Domain:</span> {project.domain}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="flex-1 text-foreground hover:text-foreground hover:bg-accent/10"
                  >
                    <Link href={`/projects/${project.id}`}>
                      <Eye className="mr-2 h-4 w-4" />
                      View Case Study
                    </Link>
                  </Button>

                  {project.githubUrl && (
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">View on GitHub</span>
                      </Link>
                    </Button>
                  )}

                  {project.liveUrl && (
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">View live demo</span>
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
