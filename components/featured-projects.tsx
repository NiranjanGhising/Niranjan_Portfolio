"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { projects } from "@/data/projects"
import { ExternalLink, Github, Eye, TrendingUp, Target, Zap } from "lucide-react"

export function FeaturedProjects() {
  const [mounted, setMounted] = useState(false)
  const featuredProjects = projects.filter((project) => project.featured)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4">
        <div className="space-y-16">
          {/* Enhanced section header */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent font-medium text-sm">
              <Target className="w-4 h-4" />
              Featured Work
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Impact-Driven <span className="text-accent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real-world data analysis projects that demonstrate problem-solving skills and deliver measurable business
              value
            </p>
          </div>

          {/* Enhanced projects grid */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Enhanced CTA */}
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-accent/30 hover:border-accent hover:bg-accent/5 px-8 py-4 h-auto rounded-full font-semibold transition-all duration-300 group bg-transparent"
              asChild
            >
              <Link href="/projects">
                <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View All Projects
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <Card
      className={`group relative overflow-hidden bg-background/80 backdrop-blur-sm border-2 border-accent/20 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-3 rounded-2xl ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <CardHeader className="space-y-6 relative z-10">
        <div className="flex items-start justify-between">
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 font-medium">
                {project.domain}
              </Badge>
            </div>
            <CardTitle className="text-2xl font-bold group-hover:text-accent transition-colors duration-300 leading-tight">
              {project.title}
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground leading-relaxed">
              {project.summary}
            </CardDescription>
          </div>
        </div>

        {/* Enhanced impact metric */}
        <div className="relative bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-6 group-hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="text-sm font-medium text-accent mb-1">Key Impact</div>
              <div className="text-xl font-bold text-foreground">{project.impact}</div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 relative z-10">
        {/* Enhanced tools and tags */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tools.slice(0, 4).map((tool) => (
              <Badge
                key={tool}
                variant="outline"
                className="border-accent/30 text-accent/80 hover:bg-accent/5 transition-colors text-xs font-medium px-3 py-1"
              >
                {tool}
              </Badge>
            ))}
            {project.tools.length > 4 && (
              <Badge variant="outline" className="border-accent/20 text-accent/60 text-xs">
                +{project.tools.length - 4} more
              </Badge>
            )}
          </div>
        </div>

        {/* Enhanced action buttons */}
        <div className="flex items-center gap-3 pt-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-accent/30 hover:border-accent hover:bg-accent/5 transition-all duration-300 bg-transparent"
              >
                <Eye className="mr-2 h-4 w-4" />
                Quick Preview
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                <DialogDescription className="text-base">{project.summary}</DialogDescription>
              </DialogHeader>
              <ProjectPreview project={project} />
            </DialogContent>
          </Dialog>

          {project.githubUrl && (
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-accent/10 hover:text-accent transition-all duration-300"
              asChild
            >
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">View on GitHub</span>
              </Link>
            </Button>
          )}

          {project.liveUrl && (
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-accent/10 hover:text-accent transition-all duration-300"
              asChild
            >
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">View live demo</span>
              </Link>
            </Button>
          )}

          <Button
            size="sm"
            className="bg-accent hover:bg-accent/90 text-background font-semibold px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href={`/projects/${project.id}`}>
              <Zap className="mr-2 h-4 w-4" />
              Case Study
            </Link>
          </Button>
        </div>

        {/* Enhanced hover reveal metrics */}
        {isHovered && (
          <div className="border-t border-accent/20 pt-6 animate-in slide-in-from-bottom-3 duration-300">
            <div className="grid grid-cols-3 gap-4">
              {project.results.metrics.slice(0, 3).map((metric, index) => (
                <div key={index} className="text-center space-y-2 p-3 bg-accent/5 rounded-lg border border-accent/10">
                  <div className="text-lg font-bold text-accent">{metric.value}</div>
                  <div className="text-xs text-muted-foreground font-medium">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function ProjectPreview({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="space-y-8">
      {/* Problem & Approach */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h4 className="font-bold text-foreground text-lg flex items-center gap-2">
            <Target className="w-5 h-5 text-accent" />
            Problem
          </h4>
          <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-bold text-foreground text-lg flex items-center gap-2">
            <Zap className="w-5 h-5 text-accent" />
            Approach
          </h4>
          <p className="text-muted-foreground leading-relaxed">{project.approach}</p>
        </div>
      </div>

      {/* Key metrics */}
      <div>
        <h4 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-accent" />
          Key Results
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.results.metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20"
            >
              <div className="text-2xl font-bold text-accent mb-2">{metric.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools used */}
      <div>
        <h4 className="font-bold text-foreground text-lg mb-3">Tools & Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <Badge
              key={tool}
              variant="secondary"
              className="bg-accent/10 text-accent border-accent/20 font-medium px-3 py-1"
            >
              {tool}
            </Badge>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-4 pt-6 border-t border-accent/20">
        <Button className="flex-1 bg-accent hover:bg-accent/90 text-background font-semibold rounded-full" asChild>
          <Link href={`/projects/${project.id}`}>
            <Eye className="mr-2 h-4 w-4" />
            View Full Case Study
          </Link>
        </Button>
        {project.githubUrl && (
          <Button
            variant="outline"
            className="border-accent/30 hover:border-accent hover:bg-accent/5 bg-transparent"
            asChild
          >
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}
