export interface Course {
  id: string
  title: string
  description: string
  level: string
  duration: string
  tags: string[]
  image?: string
}

export const courses: Course[] = [
  {
    id: "ftth-tendido",
    title: "Tendido de Redes FTTH",
    description: "Planificación, obra civil ligera, fusiones, medición y puesta en marcha alineado a normativa local.",
    level: "Intermedio",
    duration: "18h",
    tags: ["Redes ópticas", "Infraestructura", "RETIE"],
    image: "ftth-course",
  },
  {
    id: "ubiquiti-longshot",
    title: "Certificación: Configuración de enlaces de larga distancia con equipos Ubiquiti",
    description: "Diseño, alineación y optimización de backhauls de alta capacidad usando la suite Ubiquiti.",
    level: "Avanzado",
    duration: "12h",
    tags: ["AirFiber", "UISP", "RF"],
    image: "ubiquiti-course",
  },
  {
    id: "seguridad-ftth",
    title: "Certificacion en diseño de soluciones de seguridad basadas en fibra óptica",
    description: "Videovigilancia, control de acceso y sensorización sobre red óptica y enlaces inalámbricos.",
    level: "Intermedio",
    duration: "10h",
    tags: ["CCTV IP", "PoE", "Red óptica"],
    image: "security-course",
  },
  {
    id: "wisp-legal",
    title: "Taller: Desafíos de los WISP y marco legal colombiano",
    description: "Habilitación, títulos, espectro, obligaciones y buenas prácticas para WISP.",
    level: "Intro/Intermedio",
    duration: "8h",
    tags: ["CRC", "MinTIC", "Habilitación"],
    image: "wisp-course",
  },
]
