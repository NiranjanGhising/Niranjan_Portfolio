import type { BlogPost } from "@/lib/types"

export const posts: BlogPost[] = [
  {
    id: "sql-window-functions",
    title: "Mastering SQL Window Functions for Data Analysis",
    excerpt: "A comprehensive guide to using window functions for advanced analytics and reporting.",
    content: `# Mastering SQL Window Functions

Window functions are one of the most powerful features in SQL for data analysis...

## Common Use Cases

1. **Running Totals**
2. **Ranking and Percentiles** 
3. **Moving Averages**

## Examples

\`\`\`sql
SELECT 
  date,
  revenue,
  SUM(revenue) OVER (ORDER BY date) as running_total
FROM sales;
\`\`\``,
    publishedAt: "2024-01-15",
    tags: ["SQL", "Data Analysis", "Tutorial"],
    readTime: 8,
  },
  {
    id: "data-cleaning-pipeline",
    title: "Building Robust Data Cleaning Pipelines",
    excerpt: "Best practices for creating maintainable and scalable data cleaning workflows.",
    content: `# Building Robust Data Cleaning Pipelines

Data cleaning is often 80% of the work in any data project...`,
    publishedAt: "2024-01-08",
    tags: ["Python", "Data Cleaning", "Best Practices"],
    readTime: 12,
  },
  {
    id: "visualization-best-practices",
    title: "Data Visualization Best Practices",
    excerpt: "How to create clear, compelling visualizations that drive decision-making.",
    content: `# Data Visualization Best Practices

Great visualizations tell a story and drive action...`,
    publishedAt: "2024-01-01",
    tags: ["Visualization", "Design", "Communication"],
    readTime: 6,
  },
]
