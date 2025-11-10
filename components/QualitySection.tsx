export default function QualitySection() {
  const features = [
    {
      icon: "🏆",
      title: "Certificación Oficial",
      description: "Recibe tu certificado de calidad al completar cada curso",
    },
    {
      icon: "👨‍🏫",
      title: "Instructores Expertos",
      description: "Aprende de profesionales con años de experiencia en el sector",
    },
    {
      icon: "📚",
      title: "Contenido Actualizado",
      description: "Material de estudio constantemente renovado según las últimas tendencias",
    },
    {
      icon: "✅",
      title: "Garantía de Calidad",
      description: "Todos nuestros cursos están respaldados por nuestro sello de calidad",
    },
  ]

  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-3xl">
              🏅
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 text-balance">
            Nuestro Compromiso con la Excelencia
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto text-balance">
            Cada curso está diseñado con los más altos estándares de calidad, garantizando tu éxito profesional en el
            sector de telecomunicaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-md transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
