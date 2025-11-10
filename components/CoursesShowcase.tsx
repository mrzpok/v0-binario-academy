import Image from "next/image"
import { courses } from "@/lib/courses"

export default function CoursesShowcase() {
  return (
    <section className="py-20 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 text-balance">
            Nuestros Cursos Especializados
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto text-balance">
            Formación profesional diseñada por expertos para el sector de telecomunicaciones en Colombia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="rounded-xl overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-500 to-cyan-500">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="p-6">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 mb-3">
                  {course.level}
                </div>

                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">{course.description}</p>

                <div className="flex items-center gap-4 mb-4 text-sm text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-center gap-1">
                    <span>⏱️</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>👥</span>
                    <span>{course.students}+ estudiantes</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4 text-amber-600 dark:text-amber-400">
                  <span className="text-lg">🎓</span>
                  <span className="text-sm font-semibold">Certificado</span>
                </div>

                <button className="w-full px-4 py-2 rounded-lg font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-gray-100 transition-all duration-200">
                  Ver Detalles del Curso
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
