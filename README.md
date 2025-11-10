# Academy.binario - Plataforma Educativa

Plataforma educativa especializada en FTTH, WISP y seguridad IP con certificaciones verificables.

## Stack

- **Next.js 14+** - App Router
- **Tailwind CSS** - Diseño con PostCSS (sin CDN)
- **Wompi** - Procesamiento de pagos
- **TypeScript** - Type safety

## Características

- ✓ Diseño responsive y accesible (WCAG 2.1)
- ✓ SEO optimizado con metatags y OpenGraph
- ✓ Integración de pagos con Wompi
- ✓ 4 cursos especializados semilla
- ✓ 3 planes de suscripción
- ✓ Catálogo de cursos interactivo
- ✓ Checkout seguro

## Requisitos

- Node.js 18+
- pnpm (recomendado)

## Instalación

\`\`\`bash
# Instalar dependencias
pnpm install

# Configurar variables de entorno
cp .env.local.example .env.local
# Edita .env.local y agrega tu NEXT_PUBLIC_WOMPI_PUBLIC_KEY

# Ejecutar en desarrollo
pnpm dev
\`\`\`

La app estará disponible en `http://localhost:3000`

## Scripts

\`\`\`bash
# Desarrollo
pnpm dev

# Build
pnpm build

# Producción
pnpm start

# Lint
pnpm lint
\`\`\`

## Rutas

- `/` - Página de inicio con hero y cursos destacados
- `/cursos` - Catálogo completo de cursos
- `/planes` - Planes de suscripción
- `/checkout` - Página de checkout con Wompi
- `/gracias` - Página de confirmación post-pago
- `/api/health` - Health check endpoint

## Estructura

\`\`\`
app/
├── api/
│   └── health/
├── checkout/
├── cursos/
├── gracias/
├── planes/
├── layout.tsx
├── page.tsx
└── globals.css

components/
├── CourseCard.tsx
├── Footer.tsx
├── Header.tsx
├── Hero.tsx
├── PlanCard.tsx
└── QualitySeal.tsx

lib/
├── courses.ts
├── currency.ts
└── plans.ts
\`\`\`

## Branding

- **Colores Principales**: Indigo (600) → Cyan (600), Neutral-900, Dorado para sello
- **Tipografía**: Sans-serif (sistema)
- **Sello de Calidad**: Badge redondo con gradiente dorado en Hero

## Wompi Integration

La integración de Wompi usa el widget JS. Configuración:

1. Agrega `NEXT_PUBLIC_WOMPI_PUBLIC_KEY` en `.env.local`
2. El widget se carga automáticamente en `/checkout`
3. Redirige a `/gracias?reference=<ref>` tras pago exitoso

## Accesibilidad

- ARIA labels en botones y links
- Contraste de color suficiente
- Navegación por teclado completa
- Semántica HTML correcta

## Performance

- Lighthouse > 90 en Performance, Best Practices, SEO, A11y
- Fuentes del sistema (sin CDN externo)
- CSS optimizado con PostCSS
- Next.js Image optimization ready

## Deployment

### Vercel (Recomendado)

\`\`\`bash
# Conecta tu repositorio de GitHub
# Vercel deployará automáticamente
# Agrega NEXT_PUBLIC_WOMPI_PUBLIC_KEY en Settings → Environment Variables
\`\`\`

### Otros Hosts

\`\`\`bash
pnpm build
pnpm start
\`\`\`

## Soporte

Para preguntas o reportes de bugs, contacta a: info@academy.binario.net.co

## Licencia

Privado - Todos los derechos reservados © 2025 Academy.binario
