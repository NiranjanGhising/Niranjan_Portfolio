"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { skills } from "@/data/skills"
import type { Skill } from "@/lib/types"
import { TrendingUp, Award, Code, BarChart3 } from "lucide-react"

const categories = [
	{ key: "all", label: "All Skills", icon: Award },
	{ key: "programming", label: "Programming", icon: Code },
	{ key: "tools", label: "Tools", icon: BarChart3 },
	{ key: "analysis", label: "Analysis", icon: TrendingUp },
	{ key: "visualization", label: "Visualization", icon: BarChart3 },
]

export function SkillsSection() {
	const [activeCategory, setActiveCategory] = useState("all")
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	const filteredSkills =
		activeCategory === "all"
			? skills
			: skills.filter((skill) => skill.category === activeCategory)

	return (
		<section
			id="skills"
			className="py-24 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden"
		>
			{/* Background decoration */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>
			</div>

			<div className="container mx-auto max-w-7xl px-4">
				<div className="space-y-16">
					{/* Enhanced section header */}
					<div className="text-center space-y-6">
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent font-medium text-sm">
							<Award className="w-4 h-4" />
							Technical Expertise
						</div>
						<h2 className="text-4xl md:text-5xl font-bold text-foreground">
							Skills &{" "}
							<span className="text-accent">Tools</span>
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							Proficient in modern data analysis tools and techniques with
							hands-on project experience across multiple domains
						</p>
					</div>

					{/* Enhanced filter chips */}
					<div className="w-full overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none]">
						<div className="flex flex-nowrap justify-start md:justify-center gap-3 min-w-max">
							{categories.map((category) => {
								const Icon = category.icon
								const active = activeCategory === category.key
								return (
									<button
										key={category.key}
										role="tab"
										aria-selected={active}
										onClick={() => setActiveCategory(category.key)}
										className={`group relative flex items-center gap-2 rounded-full px-6 h-14 text-sm font-medium transition-all duration-300 border focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/30 whitespace-nowrap ${
											active
												? "bg-[#87ceeb] text-[#0f1419] border-[#87ceeb] shadow-sm shadow-accent/30 hover:bg-[#6bb9dc]"
												: "bg-white dark:bg-background/60 border-accent/30 text-foreground hover:border-accent hover:bg-accent/5 hover:text-accent"
										}`}
									>
										<Icon
											className={`h-4 w-4 transition-colors ${
												active ? "text-white" : "text-accent group-hover:text-accent"
											}`}
										/>
										{category.label}
										{active && (
											<span className="absolute inset-0 rounded-full ring-2 ring-accent/30 animate-pulse pointer-events-none" />
										)}
									</button>
								)
							})}
						</div>
					</div>

					{/* Enhanced skills grid */}
					<div
						className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${
							mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
						}`}
					>
						{filteredSkills.map((skill, index) => (
							<SkillCard key={skill.name} skill={skill} index={index} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), index * 100)
		return () => clearTimeout(timer)
	}, [index])

	const markerLeft = `${skill.proficiency}%`

	return (
		<div
			className={`group relative cursor-pointer bg-background/80 backdrop-blur-sm border border-accent/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 hover:border-accent/50 hover:bg-accent/5 hover:scale-[1.02] ${
				isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
			}`}
		>
			<div className="space-y-6">
				{/* Skill name and category */}
				<div className="flex items-center justify-between">
					<h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
						{skill.name}
					</h3>
					<Badge
						variant="secondary"
						className="bg-accent/10 text-accent border-accent/20 font-medium px-3 py-1 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors"
					>
						{skill.category}
					</Badge>
				</div>

				{/* Enhanced proficiency visualization */}
				<div className="space-y-4">
					<div className="flex justify-between items-center">
						<span className="text-sm font-medium text-muted-foreground">
							Proficiency Level
						</span>
						<span className="text-lg font-bold text-accent">
							{skill.proficiency}%
						</span>
					</div>

					{/* Animated progress bar with marker */}
					<div className="relative w-full bg-accent/10 rounded-full h-3 overflow-visible">
						<div
							className="bg-gradient-to-r from-accent to-accent/80 h-3 rounded-full transition-all duration-1000 ease-out relative"
							style={{ width: isVisible ? `${skill.proficiency}%` : "0%" }}
						>
							<div className="absolute inset-0 bg-white/20 animate-pulse mix-blend-overlay"></div>
						</div>
						{/* Marker */}
						<div
							className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background shadow ring-2 ring-accent/30 transition-transform group-hover:scale-110"
							style={{
								left: markerLeft,
								transform: "translate(-50%, -50%)",
							}}
							aria-label={`${skill.name} proficiency marker at ${skill.proficiency} percent`}
						/>
					</div>

					{/* Proficiency level indicator */}
					<div className="flex justify-between text-xs text-accent font-medium">
						<span>Beginner</span>
						<span>Intermediate</span>
						<span>Advanced</span>
						<span>Expert</span>
					</div>
				</div>

				{/* Skill level description */}
				<div className="pt-2 border-t border-accent/10">
					<p className="text-sm text-muted-foreground group-hover:text-foreground/90">
						{skill.proficiency >= 90
							? "Expert level with extensive project experience"
							: skill.proficiency >= 75
							? "Advanced proficiency with real-world applications"
							: skill.proficiency >= 60
							? "Intermediate level with growing expertise"
							: "Foundational knowledge with hands-on practice"}
					</p>
				</div>
			</div>
		</div>
	)
}
