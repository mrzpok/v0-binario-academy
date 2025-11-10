import Link from "next/link"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16 pb-16 border-b border-white/10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">¿Listo para Impulsar tu Carrera?</h2>
          <p className="text-gray-300 mb-8 text-balance max-w-2xl mx-auto">
            Únete a cientos de profesionales que ya han transformado su futuro con nuestros cursos certificados
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cursos"
              className="px-8 py-3 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors font-semibold"
            >
              Explorar todos los Cursos
            </Link>
            <button className="px-8 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20 font-semibold">
              Contactar Asesor
            </button>
          </div>
        </div>

        {/* Footer content grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-600 flex items-center justify-center text-white font-bold text-sm">
                C
              </div>
              <span className="font-bold text-lg">Cademy</span>
            </div>
            <p className="text-sm text-gray-400">
              Academia especializada en telecomunicaciones y redes FTTH para el mercado colombiano.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Cursos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Redes FTTH
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Equipos Ubiquiti
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Seguridad en Redes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Marco Legal WISP
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Compañía</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Instructores
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Certificaciones
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span>✉️</span>
                <a href="mailto:info@academy.binario.net.co" className="hover:text-white transition">
                  info@cademy.binario.net.co
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📞</span>
                <a href="tel:+573124567890" className="hover:text-white transition">
                  +57 (1) 234 5678
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Bogotá, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">&copy; {year} Cademy. Todos los derechos reservados.</p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition">
                Términos y Condiciones
              </Link>
              <Link href="#" className="hover:text-white transition">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
