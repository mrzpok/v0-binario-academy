export interface Plan {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  recommended?: boolean
  buttonText: string
}

export const plans: Plan[] = [
  {
    id: "solo",
    name: "Solo",
    price: 39000,
    description: "Acceso a 1 curso a la vez",
    features: ["Acceso a 1 curso", "Certificado digital", "Comunidad privada", "Soporte por email"],
    buttonText: "Comenzar",
  },
  {
    id: "pro",
    name: "Pro",
    price: 119000,
    description: "Acceso ilimitado a todos los cursos",
    features: [
      "Acceso a todos los cursos",
      "Certificados digitales",
      "Comunidad privada",
      "Soporte prioritario",
      "Recursos exclusivos",
      "Proyectos en vivo",
    ],
    recommended: true,
    buttonText: "Subir a PRO",
  },
  {
    id: "empresas",
    name: "Empresas",
    price: 0,
    description: "Solución personalizada para equipos",
    features: [
      "Acceso para equipo completo",
      "Plan personalizado",
      "Soporte dedicado",
      "Reportes de progreso",
      "Capacitación in-house",
    ],
    buttonText: "Solicitar demo",
  },
]
