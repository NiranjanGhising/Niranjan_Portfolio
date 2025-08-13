import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="bg-muted/30 border-t border-border">
			<div className="container mx-auto max-w-7xl px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Brand */}
					<div className="space-y-4">
						<div>
							<h3 className="font-bold text-foreground text-lg">
								Niranjan Ghising
							</h3>
							<p className="text-sm text-muted-foreground">
								Data Analyst Student
							</p>
						</div>
						<p className="text-sm text-muted-foreground leading-relaxed">
							Disciplined and detail-oriented, skilled in Python programming and
							data handling. Transforming complex information into clear,
							actionable results.
						</p>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<h4 className="font-semibold text-foreground">Quick Links</h4>
						<nav className="flex flex-col space-y-2">
							<Link
								href="/projects"
								className="text-sm text-muted-foreground hover:text-accent transition-colors"
							>
								Projects
							</Link>
							<Link
								href="/#skills"
								className="text-sm text-muted-foreground hover:text-accent transition-colors"
							>
								Skills
							</Link>
							<Link
								href="/resume"
								className="text-sm text-muted-foreground hover:text-accent transition-colors"
							>
								Resume
							</Link>
							<Link
								href="/blog"
								className="text-sm text-muted-foreground hover:text-accent transition-colors"
							>
								Blog
							</Link>
						</nav>
					</div>

					{/* Resources */}
					<div className="space-y-4">
						<h4 className="font-semibold text-foreground">Resources</h4>
						<nav className="flex flex-col space-y-2">
							<Link
								href="/contact"
								className="text-sm text-muted-foreground hover:text-accent transition-colors"
							>
								Contact
							</Link>
							<Link
								href="/resume"
								className="text-sm text-muted-foreground hover:text-accent transition-colors"
							>
								Download Resume
							</Link>
						</nav>
					</div>

					{/* Social & Contact */}
					<div className="space-y-4">
						<h4 className="font-semibold text-foreground">Connect</h4>
						<div className="flex flex-col space-y-3">
							<a
								href="https://github.com/NiranjanGhising"
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-2"
							>
								<Github className="h-4 w-4" />
								GitHub
							</a>
							<a
								href="https://www.linkedin.com/in/niranjan-ghising-04500424a/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-2"
							>
								<Linkedin className="h-4 w-4" />
								LinkedIn
							</a>
							<a
								href="mailto:ghisingniranjan@gmail.com?subject=Inquiry%20from%20portfolio"
								className="text-sm text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-2"
							>
								<Mail className="h-4 w-4" />
								Email
							</a>
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
					<p className="text-sm text-muted-foreground">
						© {currentYear} Niranjan Ghising.
					</p>
					<div className="flex items-center gap-4 text-xs text-muted-foreground">
						<span>Open to opportunities</span>
						<div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
					</div>
				</div>
			</div>
		</footer>
	)
}
