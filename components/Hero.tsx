import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-white/10 border border-white/20">
              <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center text-sm font-bold">
                ✓
              </div>
              <span className="text-sm font-semibold text-white">Certificación de Calidad Garantizada</span>
            </div>

            <div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Domina las Redes <span className="text-cyan-400">FTTH</span> en Colombia
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Cursos especializados en telecomunicaciones, certificaciones profesionales y formación práctica para el
                mercado colombiano.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/cursos"
                className="px-8 py-3 rounded-lg font-semibold bg-emerald-500 text-white hover:bg-emerald-600 transition-all duration-200 text-center shadow-lg hover:shadow-xl"
              >
                Ver todos los Cursos
              </Link>
              <button className="px-8 py-3 rounded-lg font-semibold bg-white/10 text-white hover:bg-white/20 transition-all duration-200 border border-white/20">
                Solicitar Información
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-300 text-sm">Instructores certificados con experiencia</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-300 text-sm">Certificación oficial al finalizar</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-300 text-sm">Prácticas con casos reales</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-300 text-sm">Contenido actualizado 2024</span>
              </div>
            </div>
          </div>

          {/* Right: Featured Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/modern-tech-learning-platform-classroom.jpg"
              alt="Plataforma de aprendizaje moderna"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
