import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
          ¿Listo para Impulsar tu Carrera?
        </h2>
        <p className="text-lg text-gray-300 mb-10 text-balance max-w-2xl mx-auto">
          Únete a cientos de profesionales que ya han transformado su futuro con nuestros cursos certificados
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/cursos"
            className="px-8 py-4 rounded-lg font-semibold bg-emerald-500 text-white hover:bg-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Explorar todos los Cursos
          </Link>
          <button className="px-8 py-4 rounded-lg font-semibold bg-white/10 text-white hover:bg-white/20 transition-all duration-200 border border-white/20">
            Contactar Asesor
          </button>
        </div>
      </div>
    </section>
  )
}
