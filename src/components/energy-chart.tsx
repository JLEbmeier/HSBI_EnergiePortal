"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Sample data - replace with dynamic data later
const chartData = [
  { time: "00:00", production: 0 },
  { time: "01:00", production: 0 },
  { time: "02:00", production: 0 },
  { time: "03:00", production: 0 },
  { time: "04:00", production: 0 },
  { time: "05:00", production: 0.5 },
  { time: "06:00", production: 5.2 },
  { time: "07:00", production: 15.8 },
  { time: "08:00", production: 30.1 },
  { time: "09:00", production: 55.6 },
  { time: "10:00", production: 70.3 },
  { time: "11:00", production: 85.9 },
  { time: "12:00", production: 92.1 },
  { time: "13:00", production: 88.5 },
  { time: "14:00", production: 75.3 },
  { time: "15:00", production: 60.7 },
  { time: "16:00", production: 45.2 },
  { time: "17:00", production: 25.9 },
  { time: "18:00", production: 10.1 },
  { time: "19:00", production: 2.5 },
  { time: "20:00", production: 0.1 },
  { time: "21:00", production: 0 },
  { time: "22:00", production: 0 },
  { time: "23:00", production: 0 },
]

const chartConfig = {
  production: {
    label: "Produktion (kW)",
    color: "hsl(var(--chart-1))",
  },
} satisfies import("@/components/ui/chart").ChartConfig

export function EnergyChart() {
  return (
     <ChartContainer config={chartConfig} className="w-full h-full min-h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
            data={chartData}
            margin={{
            top: 5,
            right: 10,
            left: -20, // Adjust left margin to make Y-axis labels visible
            bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
            dataKey="time"
            stroke="hsl(var(--muted-foreground))"
            fontSize={10}
            tickLine={false}
            axisLine={false}
            // Show fewer ticks on smaller screens if needed
            // interval="preserveStartEnd"
            />
            <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={10}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value} kW`}
                width={40} // Ensure space for labels
            />
             <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
            />
            <Bar dataKey="production" fill="var(--color-production)" radius={4} />
        </BarChart>
       </ResponsiveContainer>
    </ChartContainer>
  )
}
