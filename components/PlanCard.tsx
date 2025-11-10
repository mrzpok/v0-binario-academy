"use client"

import Link from "next/link"
import { formatCOP } from "@/lib/currency"

interface PlanCardProps {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  recommended?: boolean
  buttonText: string
}

export default function PlanCard({ id, name, price, description, features, recommended, buttonText }: PlanCardProps) {
  return (
    <div
      className={`card p-8 relative transition-all duration-300 hover:shadow-xl ${
        recommended ? "border-indigo-500 border-2 md:scale-105" : "border-neutral-200 dark:border-neutral-800"
      }`}
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Recomendado
        </div>
      )}

      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-neutral-600 dark:text-neutral-400 mb-6">{description}</p>

      {/* Price */}
      <div className="mb-6">
        {price > 0 ? (
          <p className="text-4xl font-bold text-indigo-600">
            {formatCOP(price)}
            <span className="text-lg text-neutral-600 dark:text-neutral-400">/mes</span>
          </p>
        ) : (
          <p className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300">A Medida</p>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm">
            <span className="text-cyan-600 font-bold mt-1">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <Link
        href={id === "empresas" ? "#" : `/checkout?plan=${id}`}
        className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
          id === "empresas"
            ? "bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 cursor-not-allowed opacity-50"
            : "btn-primary"
        }`}
        onClick={(e) => {
          if (id === "empresas") {
            e.preventDefault()
            // Show contact form or modal
          }
        }}
      >
        {buttonText}
      </Link>
    </div>
  )
}
