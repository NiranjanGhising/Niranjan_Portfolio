"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, Mail, Copy, Check, Send } from "lucide-react"
import { useSearchParams } from "next/navigation"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwpqygrq"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "", // Anti-spam field
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const { toast } = useToast()
  const searchParams = useSearchParams()

  useEffect(() => {
    const subject = searchParams.get("subject")
    if (subject) {
      setFormData((prev) => ({ ...prev, message: `Subject: ${subject}\n\n` }))
    }
  }, [searchParams])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Honeypot check
    if (formData.honeypot) {
      return // Likely spam
    }

    setIsSubmitting(true)

    try {
      const formEl = e.currentTarget
      const data = new FormData(formEl)

      // Enrich submission
      data.append("page_url", window.location.href)
      const subjectFromQuery = searchParams.get("subject")
      if (subjectFromQuery) {
        data.set("_subject", `Portfolio inquiry: ${subjectFromQuery}`)
      }

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for your submission. I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", message: "", honeypot: "" })
        formEl.reset()
      } else {
        const result = await response.json().catch(() => null)
        const errorMsg = result?.errors?.map((e: any) => e?.message).join(", ") ||
          "Oops! There was a problem submitting your form."
        throw new Error(errorMsg)
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error?.message || "Failed to send message. Please try again or email me directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const copyEmail = async () => {
    const email = "ghisingniranjan@gmail.com"
    try {
      await navigator.clipboard.writeText(email)
      setEmailCopied(true)
      toast({
        title: "Email copied!",
        description: `${email} has been copied to your clipboard.`,
      })
      setTimeout(() => setEmailCopied(false), 3000)
    } catch (err) {
      const textArea = document.createElement("textarea")
      textArea.value = email
      document.body.appendChild(textArea)
      textArea.select()
      try {
        document.execCommand("copy")
        setEmailCopied(true)
        toast({
          title: "Email copied!",
          description: `${email} has been copied to your clipboard.`,
        })
        setTimeout(() => setEmailCopied(false), 3000)
      } catch (fallbackErr) {
        toast({
          title: "Copy failed",
          description: `Please copy manually: ${email}`,
          variant: "destructive",
        })
      }
      document.body.removeChild(textArea)
    }
  }

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
              <h1 className="text-3xl font-bold text-foreground">Contact</h1>
              <p className="text-muted-foreground">Let's discuss data analysis opportunities</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Send a Message</h2>
              <p className="text-muted-foreground">
                Have a project in mind or want to discuss data analysis opportunities? I'd love to hear from you.
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} action={FORMSPREE_ENDPOINT} method="POST" className="space-y-4">
                  {/* Honeypot field - hidden from users (local check) */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleInputChange}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  {/* Formspree honeypot and subject */}
                  <input type="hidden" name="_gotcha" value={formData.honeypot} />
                  <input type="hidden" name="_subject" value="New message from portfolio" />

                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ghisingniranjan@gmail.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            {/* Direct contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Direct Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Email me directly:</p>
                  <div className="flex items-center gap-2">
                    <code className="bg-muted px-2 py-1 rounded text-sm">ghisingniranjan@gmail.com</code>
                    <Button variant="ghost" size="sm" onClick={copyEmail}>
                      {emailCopied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                      <span className="sr-only">Copy email</span>
                    </Button>
                  </div>
                  <a
                    href="mailto:ghisingniranjan@gmail.com?subject=Inquiry%20from%20portfolio"
                    className="text-sm text-accent hover:underline mt-2 inline-block"
                  >
                    Or click here to open in your email app
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">
                  I typically respond within 24 hours during business days.
                </p>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Current Status</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Open to internships and part-time roles</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Available for projects starting January 2025</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
