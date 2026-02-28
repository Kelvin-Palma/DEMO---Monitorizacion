import { KpiCard } from "@/components/dashboard/kpi-card"
import { ActivityChart } from "@/components/dashboard/activity-chart"
import { ModuleUsageChart } from "@/components/dashboard/module-usage-chart"
import { EventLog } from "@/components/dashboard/event-log"
import { kpiCards } from "@/lib/mock-data"

export default function DashboardPage() {
  return (
    <>
      <section aria-label="Metricas principales">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {kpiCards.map((card) => (
            <KpiCard key={card.title} data={card} />
          ))}
        </div>
      </section>

      <section aria-label="Graficas" className="mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ActivityChart />
          <ModuleUsageChart />
        </div>
      </section>

      <section aria-label="Eventos recientes" className="mt-6">
        <EventLog />
      </section>
    </>
  )
}
