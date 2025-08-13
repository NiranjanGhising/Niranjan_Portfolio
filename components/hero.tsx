"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Niranjan Ghising — Data Analyst Student
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              I turn messy data into clear decisions with Python and SQL.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              size="lg"
              variant="accent"
              className="rounded-full transition-colors"
              asChild
            >
              <Link href="/contact" className="text-white">
                Contact me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-3 transition-colors"
              asChild
            >
              <Link href="/resume">
                <Download className="mr-2 h-4 w-4" />
                View Resume
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-12 border-t border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">2+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">Python</div>
              <div className="text-sm text-muted-foreground">Primary tool</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">2024</div>
              <div className="text-sm text-muted-foreground">Graduate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
