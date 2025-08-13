"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Github, ExternalLink, Download, Share2, Mail, Check } from "lucide-react"
import type { Project } from "@/lib/types"

interface ProjectSidebarProps {
  project: Project
}

export function ProjectSidebar({ project }: ProjectSidebarProps) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const handleShare = async () => {
    const url = window.location.href
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      toast({
        title: "Link copied!",
        description: "Project link has been copied to clipboard.",
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the URL manually.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-6">
      {/* Project links */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Project Links</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {project.githubUrl && (
            <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Link>
            </Button>
          )}

          {project.liveUrl && (
            <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}

          <Button variant="outline" className="w-full justify-start bg-transparent" disabled>
            <Download className="mr-2 h-4 w-4" />
            Download Dataset
          </Button>

          <Separator />

          <Button variant="outline" className="w-full justify-start bg-transparent" onClick={handleShare}>
            {copied ? <Check className="mr-2 h-4 w-4" /> : <Share2 className="mr-2 h-4 w-4" />}
            {copied ? "Copied!" : "Share Project"}
          </Button>
        </CardContent>
      </Card>

      {/* Contact about project */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Interested in This Work?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Have questions about this project or want to discuss similar challenges?
          </p>
          <Button variant="accent" className="w-full" asChild>
            <Link aria-label={`Contact about project ${project.title}`} href={`/contact?subject=Question about ${project.title}`}>
              <Mail className="mr-2 h-4 w-4" />
              Contact About This Project
            </Link>
          </Button>
        </CardContent>
      </Card>

      {/* Project tags */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Related projects */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">More Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <Button variant="outline" className="w-full bg-transparent" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
