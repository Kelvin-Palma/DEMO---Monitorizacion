import { AlertTriangle, AlertCircle, Info } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { recentEvents } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

const typeConfig = {
  error: {
    icon: AlertCircle,
    color: "text-destructive",
    bg: "bg-destructive/10",
    label: "Error",
  },
  warning: {
    icon: AlertTriangle,
    color: "text-warning",
    bg: "bg-warning/10",
    label: "Alerta",
  },
  info: {
    icon: Info,
    color: "text-primary",
    bg: "bg-primary/10",
    label: "Info",
  },
} as const

export function EventLog() {
  return (
    <Card className="border-border bg-card py-0">
      <CardHeader className="pb-2 pt-5 px-5">
        <CardTitle className="text-sm font-semibold text-card-foreground">
          Eventos Recientes
        </CardTitle>
        <p className="text-xs text-muted-foreground">Ultimos eventos del sistema</p>
      </CardHeader>
      <CardContent className="px-5 pb-5">
        <ul className="flex flex-col gap-3" role="list">
          {recentEvents.map((event) => {
            const config = typeConfig[event.type]
            const Icon = config.icon
            return (
              <li
                key={event.id}
                className="flex items-start gap-3 rounded-lg p-3 bg-secondary/50 transition-colors hover:bg-secondary"
              >
                <div
                  className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-md shrink-0",
                    config.bg
                  )}
                >
                  <Icon className={cn("h-4 w-4", config.color)} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={cn("text-[10px] font-semibold uppercase tracking-wider", config.color)}>
                      {config.label}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {event.module}
                    </span>
                  </div>
                  <p className="text-sm text-card-foreground mt-0.5 truncate">
                    {event.message}
                  </p>
                </div>
                <span className="text-[10px] text-muted-foreground whitespace-nowrap shrink-0 mt-0.5">
                  {event.timestamp}
                </span>
              </li>
            )
          })}
        </ul>
      </CardContent>
    </Card>
  )
}
