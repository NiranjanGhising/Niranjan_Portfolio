import type { Project } from "@/lib/types"

export const projects: Project[] = [
  {
    id: "students-data-analysis",
    title: "Students Data Analysis",
    summary:
      "Analyzed educational datasets using NumPy and Matplotlib to visualize data trends and generate insights for academic planning.",
    impact: "Generated actionable insights for academic planning",
    tags: ["Data Analysis", "Educational Analytics", "Data Visualization"],
    tools: ["Python", "NumPy", "Matplotlib"],
    domain: "Education",
    githubUrl: "https://github.com/NiranjanGhising/Student_Data_Analysis", // updated to actual GitHub URL
    featured: true,
    problem:
      "Educational institutions needed clear insights from complex student data to support academic planning and decision-making.",
    approach:
      "Utilized NumPy for efficient data handling and Matplotlib for creating comprehensive visualizations to identify trends and patterns in educational datasets.",
    process: [
      "Data collection and preprocessing of educational datasets",
      "Exploratory data analysis using NumPy arrays",
      "Statistical analysis to identify key trends",
      "Data visualization creation with Matplotlib",
      "Insight generation and reporting for academic planning",
    ],
    results: {
      before: "Raw educational data with no clear insights",
      after: "Comprehensive analysis with actionable academic insights",
      metrics: [
        { label: "Data Points Analyzed", value: "1000+" },
        { label: "Key Insights Generated", value: "8" },
        { label: "Visualization Charts", value: "12" },
      ],
    },
  },
  {
    id: "netflix-movie-analysis",
    title: "Netflix 1990s Movie Analysis",
    summary:
      "Analyzed Netflix movie dataset in Python, exploring trends in durations and release years with histogram visualizations.",
    impact: "Revealed key trends in 1990s movie duration patterns",
    tags: ["Data Analysis", "Entertainment Analytics", "Python"],
    tools: ["Python", "Matplotlib", "Pandas"],
    domain: "Entertainment",
    githubUrl: "https://github.com/NiranjanGhising/Netflix_1900sMovie_Analysis", // updated to actual GitHub URL
    featured: true,
    problem:
      "Understanding movie duration trends and patterns in Netflix's 1990s catalog required systematic analysis and visualization.",
    approach:
      "Conducted comprehensive analysis of Netflix movie dataset focusing on 1990s content, using Python for data manipulation and Matplotlib for visualization.",
    process: [
      "Dataset acquisition and initial exploration",
      "Data filtering for 1990s movies",
      "Duration trend analysis across release years",
      "Histogram creation for duration distribution",
      "Pattern identification and insight documentation",
    ],
    results: {
      before: "Unstructured movie dataset with no trend analysis",
      after: "Clear visualization of movie duration patterns and trends",
      metrics: [
        { label: "Movies Analyzed", value: "500+" },
        { label: "Years Covered", value: "1990-1999" },
        { label: "Visualizations Created", value: "5" },
      ],
    },
  },
]
