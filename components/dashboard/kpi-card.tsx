import {
  Users,
  Activity,
  AlertTriangle,
  Clock,
  TrendingUp,
  TrendingDown,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { KpiData } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

const iconMap = {
  users: Users,
  activity: Activity,
  "alert-triangle": AlertTriangle,
  clock: Clock,
} as const

const iconColorMap = {
  users: "bg-primary/15 text-primary",
  activity: "bg-success/15 text-success",
  "alert-triangle": "bg-destructive/15 text-destructive",
  clock: "bg-warning/15 text-warning",
} as const

interface KpiCardProps {
  data: KpiData
}

export function KpiCard({ data }: KpiCardProps) {
  const Icon = iconMap[data.icon]
  const iconColor = iconColorMap[data.icon]
  const isPositive = data.change >= 0
  // For errors, a negative change is good
  const isGood = data.icon === "alert-triangle" ? !isPositive : isPositive

  return (
    <Card className="border-border bg-card py-0">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium text-muted-foreground">{data.title}</p>
            <p className="text-2xl font-bold tracking-tight text-card-foreground">{data.value}</p>
          </div>
          <div className={cn("flex items-center justify-center w-10 h-10 rounded-lg", iconColor)}>
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <div className="flex items-center gap-1.5 mt-3">
          {isGood ? (
            <TrendingUp className="h-3.5 w-3.5 text-success" />
          ) : (
            <TrendingDown className="h-3.5 w-3.5 text-destructive" />
          )}
          <span
            className={cn(
              "text-xs font-semibold",
              isGood ? "text-success" : "text-destructive"
            )}
          >
            {isPositive ? "+" : ""}
            {data.change}%
          </span>
          <span className="text-xs text-muted-foreground">{data.changeLabel}</span>
        </div>
      </CardContent>
    </Card>
  )
}
