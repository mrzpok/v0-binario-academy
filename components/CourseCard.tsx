import Image from "next/image"
import Link from "next/link"

interface CourseCardProps {
  id: string
  title: string
  description: string
  level: string
  duration: string
  tags: string[]
  image?: string
}

const gradients = [
  "from-indigo-500 to-cyan-500",
  "from-blue-500 to-fuchsia-500",
  "from-amber-500 to-rose-500",
  "from-teal-500 to-lime-500",
]

export default function CourseCard({ id, title, description, level, duration, tags, image }: CourseCardProps) {
  const gradientIndex = Math.abs(id.charCodeAt(0)) % gradients.length
  const gradient = gradients[gradientIndex]

  const imagePath = image ? `/courses/${image}.jpg` : `/placeholder.svg?height=250&width=400`

  return (
    <div className="card overflow-hidden hover-lift group">
      <div className={`relative h-48 bg-gradient-to-br ${gradient} overflow-hidden`}>
        <Image
          src={imagePath || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300 group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">{title}</h3>

        <div className="flex items-center gap-2 mb-4 text-sm text-neutral-600 dark:text-neutral-400">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500" />
          <span>{level}</span>
          <span>·</span>
          <span>⏱️ {duration}</span>
        </div>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-cyan-100 dark:from-indigo-900/30 dark:to-cyan-900/30 text-xs rounded-full font-medium text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link href={`/checkout?plan=pro&course=${id}`} className="block w-full text-center btn-primary">
          Inscribirme
        </Link>
      </div>
    </div>
  )
}
