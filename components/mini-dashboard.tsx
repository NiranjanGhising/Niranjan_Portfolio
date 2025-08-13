"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import sampleData from "@/data/sample.json"
import type { SampleData } from "@/lib/types"

const timeframes = [
  { key: "monthly", label: "Monthly" },
  { key: "quarterly", label: "Quarterly" },
]

const regions = ["North", "South", "East", "West"]

const colors = {
  North: "#5A7F71", // Moss
  South: "#5A7F71", // Moss with opacity
  East: "#5A7F71", // Moss with opacity
  West: "#5A7F71", // Moss with opacity
}

export function MiniDashboard() {
  const [activeTimeframe, setActiveTimeframe] = useState<"monthly" | "quarterly">("monthly")
  const [selectedRegions, setSelectedRegions] = useState<string[]>(["North", "South"])
  const [chartType, setChartType] = useState<"line" | "bar">("line")

  const data = sampleData as { monthly: SampleData; quarterly: SampleData }

  // Process data based on filters
  const chartData = useMemo(() => {
    const timeframeData = data[activeTimeframe]
    const filteredDatasets = timeframeData.datasets.filter((dataset) =>
      selectedRegions.includes(dataset.region || dataset.label),
    )

    return timeframeData.labels.map((label, index) => {
      const dataPoint: any = { name: label }
      filteredDatasets.forEach((dataset) => {
        dataPoint[dataset.label] = dataset.data[index]
      })
      return dataPoint
    })
  }, [activeTimeframe, selectedRegions, data])

  const handleRegionToggle = (region: string) => {
    setSelectedRegions((prev) => (prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]))
  }

  return (
    <section id="dashboard" className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Interactive Analysis Demo</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience my data analysis workflow: clean → explore → visualize → decide. Filter the sample sales data
              below to see insights emerge.
            </p>
          </div>

          <Card className="border-border">
            <CardHeader className="space-y-4">
              <div>
                <CardTitle className="text-xl">Regional Sales Performance</CardTitle>
                <CardDescription>Sample dataset showing sales trends across regions and time periods</CardDescription>
              </div>

              {/* Controls */}
              <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
                {/* Timeframe selector */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Time Period</label>
                  <div className="flex gap-2">
                    {timeframes.map((timeframe) => (
                      <Button
                        key={timeframe.key}
                        variant={activeTimeframe === timeframe.key ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveTimeframe(timeframe.key as "monthly" | "quarterly")}
                      >
                        {timeframe.label}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Region selector */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Regions</label>
                  <div className="flex flex-wrap gap-3">
                    {regions.map((region) => (
                      <div key={region} className="flex items-center space-x-2">
                        <Checkbox
                          id={region}
                          checked={selectedRegions.includes(region)}
                          onCheckedChange={() => handleRegionToggle(region)}
                        />
                        <label htmlFor={region} className="text-sm font-medium cursor-pointer">
                          {region}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chart type selector */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Chart Type</label>
                  <div className="flex gap-2">
                    <Button
                      variant={chartType === "line" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setChartType("line")}
                    >
                      Line
                    </Button>
                    <Button
                      variant={chartType === "bar" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setChartType("bar")}
                    >
                      Bar
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Chart */}
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  {chartType === "line" ? (
                    <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--background))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "6px",
                        }}
                        labelStyle={{ color: "hsl(var(--foreground))" }}
                      />
                      <Legend />
                      {selectedRegions.map((region, index) => (
                        <Line
                          key={region}
                          type="monotone"
                          dataKey={region}
                          stroke={`hsl(var(--accent))`}
                          strokeWidth={2}
                          strokeOpacity={1 - index * 0.2}
                          dot={{ fill: `hsl(var(--accent))`, strokeWidth: 2, r: 4 }}
                        />
                      ))}
                    </LineChart>
                  ) : (
                    <BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--background))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "6px",
                        }}
                        labelStyle={{ color: "hsl(var(--foreground))" }}
                      />
                      <Legend />
                      {selectedRegions.map((region, index) => (
                        <Bar key={region} dataKey={region} fill={`hsl(var(--accent))`} fillOpacity={1 - index * 0.2} />
                      ))}
                    </BarChart>
                  )}
                </ResponsiveContainer>
              </div>

              {/* Insights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-accent/5 border-accent/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-accent">
                      {selectedRegions.length > 0
                        ? Math.max(
                            ...selectedRegions.map((region) => Math.max(...(chartData.map((d) => d[region]) || [0]))),
                          ).toLocaleString()
                        : "0"}
                    </div>
                    <div className="text-sm text-muted-foreground">Peak Performance</div>
                  </CardContent>
                </Card>

                <Card className="bg-accent/5 border-accent/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-accent">
                      {selectedRegions.length > 0
                        ? (
                            selectedRegions.reduce(
                              (sum, region) => sum + (chartData.reduce((total, d) => total + (d[region] || 0), 0) || 0),
                              0,
                            ) / selectedRegions.length
                          ).toLocaleString(undefined, { maximumFractionDigits: 0 })
                        : "0"}
                    </div>
                    <div className="text-sm text-muted-foreground">Average Sales</div>
                  </CardContent>
                </Card>

                <Card className="bg-accent/5 border-accent/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-accent">{selectedRegions.length}</div>
                    <div className="text-sm text-muted-foreground">Regions Selected</div>
                  </CardContent>
                </Card>
              </div>

              {/* Analysis workflow explanation */}
              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-foreground">My Analysis Approach</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center space-y-2">
                    <Badge variant="secondary" className="w-full justify-center">
                      1. Clean
                    </Badge>
                    <p className="text-sm text-muted-foreground">Validate data quality and handle missing values</p>
                  </div>
                  <div className="text-center space-y-2">
                    <Badge variant="secondary" className="w-full justify-center">
                      2. Explore
                    </Badge>
                    <p className="text-sm text-muted-foreground">Identify patterns and relationships in the data</p>
                  </div>
                  <div className="text-center space-y-2">
                    <Badge variant="secondary" className="w-full justify-center">
                      3. Visualize
                    </Badge>
                    <p className="text-sm text-muted-foreground">Create clear, interactive charts and dashboards</p>
                  </div>
                  <div className="text-center space-y-2">
                    <Badge variant="secondary" className="w-full justify-center">
                      4. Decide
                    </Badge>
                    <p className="text-sm text-muted-foreground">Translate insights into actionable recommendations</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
