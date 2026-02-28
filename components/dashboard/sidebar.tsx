"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Monitor,
  BarChart3,
  ShieldAlert,
  Settings,
  Users,
  Database,
  GraduationCap,
} from "lucide-react"
import { navItems } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

const iconMap = {
  "layout-dashboard": LayoutDashboard,
  monitor: Monitor,
  "bar-chart-3": BarChart3,
  "shield-alert": ShieldAlert,
  settings: Settings,
  users: Users,
  database: Database,
} as const

export function DashboardSidebar() {
  const pathname = usePathname()
  return (
    <aside className="hidden lg:flex flex-col w-64 bg-sidebar border-r border-sidebar-border">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-sidebar-border">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary">
          <GraduationCap className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-sm font-semibold text-sidebar-foreground">UniMonitor</h1>
          <p className="text-xs text-muted-foreground">Plataforma Universitaria</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4">
        <p className="px-3 mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Principal
        </p>
        <ul className="flex flex-col gap-1" role="list">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon]
            const isActive = pathname === item.href
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-primary"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-foreground text-xs font-semibold">
            AD
          </div>
          <div>
            <p className="text-sm font-medium text-sidebar-foreground">Admin</p>
            <p className="text-xs text-muted-foreground">admin@uni.edu.mx</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
