"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react"

export default function ResumePage() {
  const handleDownloadPDF = () => {
    // In a real implementation, this would generate or link to a PDF
    window.print()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur print:hidden">
        <div className="container mx-auto max-w-4xl px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Resume</h1>
                <p className="text-muted-foreground">ATS-friendly format</p>
              </div>
            </div>
            <Button onClick={handleDownloadPDF}>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </header>

      {/* Resume content */}
      <main className="container mx-auto max-w-4xl px-4 py-12 print:p-8">
        <div className="bg-background space-y-8 print:space-y-6">
          {/* Header section */}
          <div className="text-center space-y-4 print:space-y-2">
            <h1 className="text-4xl font-bold text-foreground print:text-3xl">NIRANJAN GHISING</h1>
            <p className="text-xl text-accent font-medium">Data Analyst Student</p>

            {/* Contact info */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground print:gap-2">
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                ghisingniranjan@gmail.com
              </div>
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                +977 9817042947
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Kathmandu, Nepal
              </div>
              <div className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                www.niranjanghising.com.np
              </div>
            </div>

            <div className="flex justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Github className="h-4 w-4" />
                github.com/NiranjanGhising
              </div>
              <div className="flex items-center gap-1">
                <Linkedin className="h-4 w-4" />
                linkedin.com/in/niranjan-ghising
              </div>
            </div>
          </div>

          <Separator className="print:border-gray-300" />

          {/* Professional Summary */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground print:text-xl">SUMMARY</h2>
            <p className="text-muted-foreground leading-relaxed">
              Disciplined and detail-oriented, skilled in Python programming and data handling through practical project
              work. Adept at transforming complex information into clear, actionable results and creating resources to
              support others. Collaborative problem-solver with hands-on experience using NumPy, Pandas, and Matplotlib;
              eager to contribute and develop further through an internship.
            </p>
          </section>

          <Separator className="print:border-gray-300" />

          {/* Education */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground print:text-xl">EDUCATION</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">B.Sc. (Hons.) Information Technology</h3>
                    <p className="text-muted-foreground">Asia Pacific University of Technology & Innovation</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p>Sep 2024</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">+2 in Science</h3>
                    <p className="text-muted-foreground">Trinity International College</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p>Mar 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Separator className="print:border-gray-300" />

          {/* Experience */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground print:text-xl">RELEVANT EXPERIENCE</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">Computer Tutor</h3>
                    <p className="text-muted-foreground">HopeNepal</p>
                  </div>
                  <p className="text-sm text-muted-foreground">December 2024 to April 2025</p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Assisted in developing learning resources and delivered tutorial sessions</li>
                  <li>Fostered collaborative learning and technical understanding among students</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator className="print:border-gray-300" />

          {/* Projects */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground print:text-xl">PROJECTS</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-foreground">Students Data Analysis</h3>
                  <p className="text-sm text-muted-foreground">2024</p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Analyzed educational datasets using NumPy and Matplotlib</li>
                  <li>Visualized data trends and generated insights to support academic planning</li>
                </ul>
                <div className="mt-2">
                  <span className="text-xs text-accent font-medium">Tools: Python, NumPy, Matplotlib</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-foreground">Netflix 1990s Movie Analysis</h3>
                  <p className="text-sm text-muted-foreground">2024</p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Analyzed Netflix movie dataset in Python, exploring trends in durations and release years</li>
                  <li>Created visualizations (histograms) to summarize movie duration distribution using matplotlib</li>
                </ul>
                <div className="mt-2">
                  <span className="text-xs text-accent font-medium">Tools: Python, Matplotlib, Pandas</span>
                </div>
              </div>
            </div>
          </section>

          <Separator className="print:border-gray-300" />

          {/* Technical Skills */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground print:text-xl">ADDITIONAL INFORMATION</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Programming Skills</h3>
                <div className="flex flex-wrap gap-2 print:gap-1">
                  {["Python", "SQL"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs print:bg-gray-100 print:text-gray-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Tools</h3>
                <div className="flex flex-wrap gap-2 print:gap-1">
                  {["NumPy", "Matplotlib", "Pandas", "Excel"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs print:bg-gray-100 print:text-gray-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2 print:gap-1">
                  {["English", "Nepali"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs print:bg-gray-100 print:text-gray-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Soft Skills</h3>
                <div className="flex flex-wrap gap-2 print:gap-1">
                  {["Analytical Thinking", "Fast Learner", "Problem-Solving", "Adaptable"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs print:bg-gray-100 print:text-gray-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <Separator className="print:border-gray-300" />

          {/* Certifications */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground print:text-xl">CERTIFICATIONS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-1">
              <div>
                <h3 className="font-semibold text-foreground">Python Programming</h3>
                <p className="text-sm text-muted-foreground">Programiz</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">SQL</h3>
                <p className="text-sm text-muted-foreground">Programiz</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">NumPy for Data Science</h3>
                <p className="text-sm text-muted-foreground">Programiz</p>
              </div>
            </div>
          </section>

          <Separator className="print:border-gray-300" />

          {/* Volunteer Experience */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground print:text-xl">VOLUNTEER EXPERIENCE</h2>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-foreground">InnovateEXPO</h3>
                <p className="text-sm text-muted-foreground">July 2024</p>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-foreground">Career Conclave 2024</h3>
                <p className="text-sm text-muted-foreground">August 2024</p>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-foreground">9th Management & IT Education Fair 2024</h3>
                <p className="text-sm text-muted-foreground">August 2024</p>
              </div>
            </div>
          </section>

          <Separator className="print:border-gray-300" />

          {/* Reference */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground print:text-xl">REFERENCE</h2>
            <div>
              <h3 className="font-semibold text-foreground">Diwas Rathod</h3>
              <p className="text-muted-foreground">Program Director at Hope Nepal</p>
              <p className="text-sm text-muted-foreground">Phone: +977 9823619287</p>
              <p className="text-sm text-muted-foreground mt-2">
                Diwas was my mentor during a computer training program after my 10th class. Under his guidance, I built
                a strong foundation in computer science, which led to his hiring me as a part- time Computer Tutor at
                Shree Balbodh Secondary School. His mentorship and leadership have been pivotal in my professional
                growth and development.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
