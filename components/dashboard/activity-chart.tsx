"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { activityData } from "@/lib/mock-data"

export function ActivityChart() {
  return (
    <Card className="border-border bg-card py-0">
      <CardHeader className="pb-2 pt-5 px-5">
        <CardTitle className="text-sm font-semibold text-card-foreground">
          Actividad del Sistema
        </CardTitle>
        <p className="text-xs text-muted-foreground">Usuarios y solicitudes en las ultimas 24h</p>
      </CardHeader>
      <CardContent className="px-2 pb-5">
        <div className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={activityData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="oklch(0.25 0.005 260)"
                vertical={false}
              />
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "oklch(0.6 0 0)", fontSize: 11 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "oklch(0.6 0 0)", fontSize: 11 }}
                width={45}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "oklch(0.18 0.005 260)",
                  border: "1px solid oklch(0.25 0.005 260)",
                  borderRadius: "8px",
                  color: "oklch(0.95 0 0)",
                  fontSize: "12px",
                }}
                labelStyle={{ color: "oklch(0.6 0 0)" }}
              />
              <Legend
                wrapperStyle={{ fontSize: "12px", color: "oklch(0.6 0 0)" }}
              />
              <Line
                type="monotone"
                dataKey="usuarios"
                name="Usuarios"
                stroke="oklch(0.65 0.19 250)"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: "oklch(0.65 0.19 250)" }}
              />
              <Line
                type="monotone"
                dataKey="solicitudes"
                name="Solicitudes"
                stroke="oklch(0.7 0.17 165)"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: "oklch(0.7 0.17 165)" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
