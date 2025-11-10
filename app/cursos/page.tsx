import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CourseCard from "@/components/CourseCard"
import { courses } from "@/lib/courses"

export const metadata = {
  title: "Cursos - Academy.binario",
  description: "Catálogo de cursos en FTTH, WISP y seguridad IP",
}

export default function CursosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-16">
            <h1 className="section-title text-4xl md:text-5xl mb-4">Nuestros Cursos</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
              Selecciona entre nuestros cursos especializados en redes ópticas, WISP e infraestructura IP para
              colombianos.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
            <p className="mb-6 text-lg opacity-90">
              Contáctanos para cursos personalizados o soluciones empresariales.
            </p>
            <a
              href="mailto:info@academy.binario.net.co"
              className="inline-block bg-white text-indigo-600 font-bold px-8 py-3 rounded-lg hover:bg-neutral-100 transition"
            >
              Contactar
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
