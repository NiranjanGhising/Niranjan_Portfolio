import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { posts } from "@/data/posts"
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = posts.find((p) => p.id === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto max-w-4xl px-4 py-6">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="container mx-auto max-w-4xl px-4 py-12">
        <div className="space-y-8">
          {/* Article header */}
          <header className="space-y-6">
            <h1 className="text-4xl font-bold text-foreground leading-tight">{post.title}</h1>

            {/* Meta info */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime} min read
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <Separator />
          </header>

          {/* Article content */}
          <div className="prose prose-gray max-w-none">
            <div
              className="text-muted-foreground leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br />") }}
            />
          </div>

          <Separator />

          {/* Article footer */}
          <footer className="space-y-6">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Enjoyed this post? Have questions or want to discuss data analysis topics?
              </p>
              <Button asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>

            {/* Navigation to other posts */}
            <div className="flex justify-between items-center pt-6 border-t">
              <Button variant="outline" asChild>
                <Link href="/blog">← All Posts</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/projects">View Projects →</Link>
              </Button>
            </div>
          </footer>
        </div>
      </article>
    </div>
  )
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.id,
  }))
}
