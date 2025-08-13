export interface Project {
  id: string
  title: string
  summary: string
  impact: string
  tags: string[]
  tools: string[]
  domain: string
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  featured: boolean
  problem: string
  approach: string
  process: string[]
  results: {
    before: string
    after: string
    metrics: { label: string; value: string }[]
  }
}

export interface Skill {
  name: string
  category: "programming" | "tools" | "analysis" | "visualization"
  proficiency: number // 1-100
  icon?: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  publishedAt: string
  tags: string[]
  readTime: number
}

export interface Testimonial {
  name: string
  role: string
  company?: string
  content: string
  avatar?: string
}

export interface SampleData {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    region?: string
  }[]
}
