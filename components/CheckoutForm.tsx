"use client"

import { useEffect } from "react"
import { formatCOP } from "@/lib/currency"

interface CheckoutFormProps {
  planId: string
  planName: string
  planPrice: number
  description: string
  features: string[]
  paymentPublicKey: string
  appUrl: string
}

export default function CheckoutForm({
  planId,
  planName,
  planPrice,
  description,
  features,
  paymentPublicKey,
  appUrl,
}: CheckoutFormProps) {
  useEffect(() => {
    // Load Wompi widget script
    if (planId !== "empresas") {
      const script = document.createElement("script")
      script.src = "https://checkout.wompi.co/widget.js"
      script.async = true
      document.body.appendChild(script)
    }
  }, [planId])

  return (
    <div className="card p-8">
      <h2 className="text-2xl font-bold mb-6">Resumen del Pedido</h2>

      {/* Plan Details */}
      <div className="border-b border-neutral-200 dark:border-neutral-800 pb-6 mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-lg">{planName}</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">{description}</p>
          </div>
          {planPrice > 0 && <p className="text-2xl font-bold text-indigo-600">{formatCOP(planPrice)}</p>}
        </div>

        <ul className="space-y-2">
          {features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="text-sm text-neutral-600 dark:text-neutral-400">
              ✓ {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Payment Section */}
      {planId === "empresas" ? (
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
          <h3 className="font-bold mb-2 text-amber-900 dark:text-amber-200">Plan Empresarial</h3>
          <p className="text-sm text-amber-800 dark:text-amber-300 mb-6">
            Para planes empresariales personalizados, por favor solicita una demo directa con nuestro equipo.
          </p>
          <a
            href="mailto:empresas@academy.binario.net.co"
            className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition"
          >
            Solicitar Demo
          </a>
        </div>
      ) : (
        <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-6">
          <p className="text-sm text-indigo-900 dark:text-indigo-200 mb-4">
            Paga de forma segura con tarjeta de crédito o débito
          </p>
          <div
            className="wompi-payment"
            data-amount={planPrice * 100}
            data-currency="COP"
            data-reference={`ORDER-${Date.now()}`}
            data-public-key={paymentPublicKey}
            data-redirect-url={`${appUrl}/gracias`}
          />
        </div>
      )}
    </div>
  )
}
