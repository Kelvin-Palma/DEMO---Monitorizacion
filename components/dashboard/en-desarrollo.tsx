import { Construction } from "lucide-react"

interface EnDesarrolloProps {
  titulo?: string
}

export function EnDesarrollo({ titulo = "Esta sección" }: EnDesarrolloProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <div className="rounded-full bg-muted p-6 mb-4">
        <Construction className="h-16 w-16 text-muted-foreground" />
      </div>
      <h2 className="text-2xl font-semibold text-foreground mb-2">
        En desarrollo
      </h2>
      <p className="text-muted-foreground max-w-sm">
        {titulo} en desarrollo. Pronto estará disponible.
      </p>
    </div>
  )
}
