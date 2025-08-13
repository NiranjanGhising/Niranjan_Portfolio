"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { usePathname } from "next/navigation"

const navItems = [
	{ href: "/", label: "Home" },
	{ href: "/projects", label: "Projects" },
	{ href: "/resume", label: "Resume" },
	{ href: "/blog", label: "Blog" },
	{ href: "/contact", label: "Contact" },
]

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const pathname = usePathname()

	const isActive = (href: string) => {
		if (href === "/") return pathname === "/"
		return pathname === href || pathname.startsWith(`${href}/`)
	}

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20)
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<header
			className={`fixed top-0 z-50 w-full transition-all duration-200 ${
				scrolled
					? "bg-background/80 backdrop-blur-md border-b border-border"
					: "bg-background"
			}`}
		>
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex h-16 items-center justify-between">
					<Link
						href="/"
						className="text-xl font-bold text-foreground hover:text-accent transition-colors"
						aria-current={pathname === "/" ? "page" : undefined}
					>
						Niranjan Ghising
					</Link>

					<nav className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => {
							const active = isActive(item.href)
							return (
								<Link
									key={item.href}
									href={item.href}
									aria-current={active ? "page" : undefined}
									className={`font-medium transition-colors ${
										active
											? "text-foreground"
											: "text-muted-foreground hover:text-foreground"
									}`}
								>
									{item.label}
								</Link>
							)
						})}
					</nav>

					<div className="hidden md:flex items-center space-x-4">
						<ThemeToggle />
						<Button
							className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-6 rounded-full"
							asChild
						>
							<Link href="/contact" className="text-white">Get in touch</Link>
						</Button>
					</div>

					<div className="flex md:hidden items-center space-x-2">
						<ThemeToggle />
						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger asChild>
								<Button variant="ghost" size="sm">
									<Menu className="h-5 w-5" />
								</Button>
							</SheetTrigger>
							<SheetContent side="right" className="w-80 bg-background">
								<div className="flex flex-col space-y-6 mt-8">
									<div className="flex items-center justify-between">
										<span className="text-lg font-bold text-foreground">
											Menu
										</span>
										<Button
											variant="ghost"
											size="sm"
											onClick={() => setIsOpen(false)}
										>
											<X className="h-5 w-5" />
										</Button>
									</div>
									<nav className="flex flex-col space-y-4">
										{navItems.map((item) => {
											const active = isActive(item.href)
											return (
												<Link
													key={item.href}
													href={item.href}
													aria-current={active ? "page" : undefined}
													className={`text-lg transition-colors ${
														active
															? "text-foreground"
															: "text-muted-foreground hover:text-foreground"
													}`}
													onClick={() => setIsOpen(false)}
												>
													{item.label}
												</Link>
											)
										})}
									</nav>
									<Button
										className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded-full"
										asChild
									>
										<Link href="/contact" onClick={() => setIsOpen(false)} className="text-white">
											Get in touch
										</Link>
									</Button>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	)
}
