"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function GraciasPage() {
  const searchParams = useSearchParams()
  const reference = searchParams.get("reference") || "N/A"
  const status = searchParams.get("status") || "success"

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-neutral-950 dark:to-emerald-950 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <div className="inline-block p-4 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="text-4xl font-bold mb-2">¡Gracias!</h1>
            <p className="text-neutral-600 dark:text-neutral-400 mb-2">Tu pago ha sido procesado correctamente.</p>
            <p className="text-sm text-neutral-500 dark:text-neutral-500">
              Referencia: <span className="font-mono font-semibold">{reference}</span>
            </p>
          </div>

          {/* Next Steps */}
          <div className="card p-6 mb-8">
            <h2 className="font-bold mb-4">Próximos Pasos</h2>
            <ul className="text-left space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold mt-1">1</span>
                <div>
                  <p className="font-semibold">Revisa tu email</p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-xs">
                    Te hemos enviado la confirmación y las credenciales
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold mt-1">2</span>
                <div>
                  <p className="font-semibold">Accede a tu cuenta</p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-xs">Ingresa con tu email y contraseña</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold mt-1">3</span>
                <div>
                  <p className="font-semibold">Comienza a aprender</p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-xs">
                    Acceso inmediato a todos los materiales
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="btn-primary">
              Volver al Inicio
            </Link>
            <Link href="/cursos" className="btn-secondary">
              Explorar Más Cursos
            </Link>
          </div>

          {/* Support */}
          <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800">
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">¿Tienes dudas?</p>
            <a
              href="mailto:soporte@academy.binario.net.co"
              className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 font-semibold"
            >
              Contactar Soporte
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
