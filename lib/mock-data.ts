// ============================================
// Mock data for the university monitoring dashboard
// ============================================

export interface KpiData {
  title: string
  value: string
  change: number
  changeLabel: string
  icon: "users" | "activity" | "alert-triangle" | "clock"
}

export const kpiCards: KpiData[] = [
  {
    title: "Usuarios Activos",
    value: "2,847",
    change: 12.5,
    changeLabel: "vs. semana pasada",
    icon: "users",
  },
  {
    title: "Uso del Sistema",
    value: "87.3%",
    change: 3.2,
    changeLabel: "vs. semana pasada",
    icon: "activity",
  },
  {
    title: "Errores Detectados",
    value: "23",
    change: -8.1,
    changeLabel: "vs. semana pasada",
    icon: "alert-triangle",
  },
  {
    title: "Tiempo de Respuesta",
    value: "142ms",
    change: -5.4,
    changeLabel: "vs. semana pasada",
    icon: "clock",
  },
]

// Activity over time (line chart data)
export interface ActivityPoint {
  time: string
  usuarios: number
  solicitudes: number
}

export const activityData: ActivityPoint[] = [
  { time: "00:00", usuarios: 120, solicitudes: 340 },
  { time: "02:00", usuarios: 45, solicitudes: 120 },
  { time: "04:00", usuarios: 22, solicitudes: 65 },
  { time: "06:00", usuarios: 78, solicitudes: 210 },
  { time: "08:00", usuarios: 890, solicitudes: 2100 },
  { time: "09:00", usuarios: 1420, solicitudes: 3800 },
  { time: "10:00", usuarios: 1890, solicitudes: 4200 },
  { time: "11:00", usuarios: 2100, solicitudes: 4800 },
  { time: "12:00", usuarios: 1750, solicitudes: 4100 },
  { time: "13:00", usuarios: 1200, solicitudes: 3200 },
  { time: "14:00", usuarios: 1650, solicitudes: 3900 },
  { time: "15:00", usuarios: 1980, solicitudes: 4500 },
  { time: "16:00", usuarios: 2200, solicitudes: 5100 },
  { time: "17:00", usuarios: 1800, solicitudes: 4300 },
  { time: "18:00", usuarios: 1400, solicitudes: 3600 },
  { time: "19:00", usuarios: 980, solicitudes: 2400 },
  { time: "20:00", usuarios: 650, solicitudes: 1700 },
  { time: "22:00", usuarios: 320, solicitudes: 850 },
]

// Usage by module (bar chart data)
export interface ModuleUsage {
  module: string
  uso: number
  errores: number
}

export const moduleUsageData: ModuleUsage[] = [
  { module: "Inscripciones", uso: 4200, errores: 8 },
  { module: "Calificaciones", uso: 3800, errores: 3 },
  { module: "Biblioteca", uso: 2900, errores: 5 },
  { module: "Horarios", uso: 2400, errores: 2 },
  { module: "Pagos", uso: 1800, errores: 12 },
  { module: "Foros", uso: 1200, errores: 1 },
]

// Recent events / logs
export interface SystemEvent {
  id: string
  type: "error" | "warning" | "info"
  message: string
  module: string
  timestamp: string
}

export const recentEvents: SystemEvent[] = [
  {
    id: "evt-001",
    type: "error",
    message: "Timeout en consulta de calificaciones",
    module: "Calificaciones",
    timestamp: "Hace 2 min",
  },
  {
    id: "evt-002",
    type: "warning",
    message: "Alta latencia en modulo de pagos",
    module: "Pagos",
    timestamp: "Hace 5 min",
  },
  {
    id: "evt-003",
    type: "info",
    message: "Despliegue exitoso v2.4.1",
    module: "Sistema",
    timestamp: "Hace 12 min",
  },
  {
    id: "evt-004",
    type: "error",
    message: "Error de conexion a base de datos",
    module: "Inscripciones",
    timestamp: "Hace 18 min",
  },
  {
    id: "evt-005",
    type: "info",
    message: "Cache limpiado correctamente",
    module: "Sistema",
    timestamp: "Hace 25 min",
  },
  {
    id: "evt-006",
    type: "warning",
    message: "Uso de CPU al 85%",
    module: "Servidor",
    timestamp: "Hace 30 min",
  },
]

// Sidebar navigation items
export interface NavItem {
  label: string
  href: string
  icon: "layout-dashboard" | "monitor" | "bar-chart-3" | "shield-alert" | "settings" | "users" | "database"
  active?: boolean
}

export const navItems: NavItem[] = [
  { label: "Dashboard", href: "/", icon: "layout-dashboard", active: true },
  { label: "Monitoreo", href: "/monitoreo", icon: "monitor" },
  { label: "Analiticas", href: "/analiticas", icon: "bar-chart-3" },
  { label: "Usuarios", href: "/usuarios", icon: "users" },
  { label: "Base de Datos", href: "/base-de-datos", icon: "database" },
  { label: "Alertas", href: "/alertas", icon: "shield-alert" },
  { label: "Configuracion", href: "/configuracion", icon: "settings" },
]
