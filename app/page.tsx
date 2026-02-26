"use client"

import { useState } from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"
import { MobileSidebar } from "@/components/dashboard/mobile-sidebar"
import { KpiCard } from "@/components/dashboard/kpi-card"
import { ActivityChart } from "@/components/dashboard/activity-chart"
import { ModuleUsageChart } from "@/components/dashboard/module-usage-chart"
import { EventLog } from "@/components/dashboard/event-log"
import { kpiCards } from "@/lib/mock-data"

export default function DashboardPage() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Desktop Sidebar */}
      <DashboardSidebar />

      {/* Mobile Sidebar */}
      <MobileSidebar open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader onToggleMobile={() => setMobileOpen(true)} />

        <main className="flex-1 overflow-y-auto p-6">
          {/* KPI Cards */}
          <section aria-label="Metricas principales">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {kpiCards.map((card) => (
                <KpiCard key={card.title} data={card} />
              ))}
            </div>
          </section>

          {/* Charts */}
          <section aria-label="Graficas" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ActivityChart />
              <ModuleUsageChart />
            </div>
          </section>

          {/* Event Log */}
          <section aria-label="Eventos recientes" className="mt-6">
            <EventLog />
          </section>
        </main>
      </div>
    </div>
  )
}
