import type { Skill } from "@/lib/types"

export const skills: Skill[] = [
  // Programming
  { name: "Python", category: "programming", proficiency: 75 }, // intermediate level
  { name: "SQL", category: "programming", proficiency: 75 }, // intermediate level

  // Analysis Libraries
  { name: "Pandas", category: "analysis", proficiency: 50 }, // beginner level
  { name: "NumPy", category: "analysis", proficiency: 75 }, // intermediate level
  { name: "Data Analysis", category: "analysis", proficiency: 75 }, // intermediate level
  { name: "EDA", category: "analysis", proficiency: 50 }, // beginner level

  // Visualization Tools
  { name: "Matplotlib", category: "visualization", proficiency: 75 }, // intermediate level
  { name: "Data Visualization", category: "visualization", proficiency: 75 }, // intermediate level

  // Tools
  { name: "Excel", category: "tools", proficiency: 75 }, // intermediate level
  { name: "Jupyter", category: "tools", proficiency: 50 }, // beginner level
]
