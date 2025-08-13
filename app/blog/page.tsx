import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { posts } from "@/data/posts"
import { ArrowLeft, Clock, Calendar } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto max-w-4xl px-4 py-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Blog</h1>
              <p className="text-muted-foreground">Insights on data analysis, tools, and best practices</p>
            </div>
          </div>
        </div>
      </header>

      {/* Blog posts */}
      <main className="container mx-auto max-w-4xl px-4 py-12">
        <div className="space-y-8">
          {posts.map((post) => (
            <Card key={post.id} className="group hover:shadow-md transition-shadow">
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">{post.excerpt}</CardDescription>
                  </div>
                </div>

                {/* Meta info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent>
                <Button variant="outline" asChild>
                  <Link href={`/blog/${post.id}`}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty state if no posts */}
        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
          </div>
        )}
      </main>
    </div>
  )
}
