import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CheckoutForm from "@/components/CheckoutForm"
import { formatCOP } from "@/lib/currency"
import { plans } from "@/lib/plans"
import { Suspense } from "react"

interface CheckoutPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

async function CheckoutContent({ searchParams }: CheckoutPageProps) {
  const params = await searchParams
  const planId = (params.plan as string) || "pro"
  const plan = plans.find((p) => p.id === planId)

  const paymentPublicKey = process.env.NEXT_PUBLIC_PAYMENT_PUBLIC_KEY || ""
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"

  if (!plan) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-lg text-neutral-600">Plan no encontrado</p>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-12">
            <h1 className="section-title text-4xl mb-2">Checkout</h1>
            <p className="text-neutral-600 dark:text-neutral-400">
              Completa tu compra y accede inmediatamente al curso
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="md:col-span-2">
              <CheckoutForm
                planId={plan.id}
                planName={plan.name}
                planPrice={plan.price}
                description={plan.description}
                features={plan.features}
                paymentPublicKey={paymentPublicKey}
                appUrl={appUrl}
              />
            </div>

            {/* Order Total */}
            <div>
              <div className="card p-6 sticky top-20">
                <h3 className="font-bold mb-4">Total</h3>

                <div className="space-y-3 mb-6 pb-6 border-b border-neutral-200 dark:border-neutral-800">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600 dark:text-neutral-400">Subtotal</span>
                    <span className="font-semibold">{plan.price > 0 ? formatCOP(plan.price) : "Consultar"}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600 dark:text-neutral-400">IVA (19%)</span>
                    <span className="font-semibold">
                      {plan.price > 0 ? formatCOP(Math.round(plan.price * 0.19)) : "-"}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between mb-6">
                  <span className="font-bold">Total</span>
                  <span className="text-2xl font-bold text-indigo-600">
                    {plan.price > 0 ? formatCOP(Math.round(plan.price * 1.19)) : "Consultar"}
                  </span>
                </div>

                {/* Info */}
                <div className="space-y-3 text-xs text-neutral-500 dark:text-neutral-400">
                  <p>✓ Factura electrónica incluida</p>
                  <p>✓ Acceso inmediato tras el pago</p>
                  <p>✓ Certificado digital verificable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export const metadata = {
  title: "Checkout - Academy.binario",
  description: "Completa tu compra de forma segura en Academy.binario",
}

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <CheckoutContent searchParams={searchParams} />
    </Suspense>
  )
}
