import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PlanCard from "@/components/PlanCard"
import { plans } from "@/lib/plans"

export const metadata = {
  title: "Planes - Academy.binario",
  description: "Elige el plan perfecto para tu aprendizaje en Academy.binario",
}

export default function PlanesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-16 text-center">
            <h1 className="section-title text-4xl md:text-5xl mb-4">Elige tu Plan</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Todos los planes incluyen acceso a comunidad, soporte y certificados verificables.
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan) => (
              <PlanCard key={plan.id} {...plan} />
            ))}
          </div>

          {/* FAQ Section */}
          <div id="faq" className="max-w-3xl mx-auto">
            <h2 className="section-title text-2xl mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                {
                  q: "¿Puedo cambiar de plan?",
                  a: "Sí, puedes cambiar o cancelar tu plan en cualquier momento desde tu panel de control.",
                },
                {
                  q: "¿Se otorga certificado?",
                  a: "Sí, todos nuestros planes incluyen certificados digitales verificables al completar un curso.",
                },
                {
                  q: "¿Hay soporte técnico?",
                  a: "Sí, todos los planes incluyen soporte. El plan Pro tiene prioridad en tiempos de respuesta.",
                },
                {
                  q: "¿Cuánto tiempo tengo acceso?",
                  a: "El acceso es de por vida al material. Puedes acceder a tus cursos en cualquier momento.",
                },
              ].map((item, idx) => (
                <div key={idx} className="card p-6">
                  <h3 className="font-bold mb-2">{item.q}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
