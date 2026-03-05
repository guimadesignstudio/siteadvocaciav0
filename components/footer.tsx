import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div>
            <span className="text-lg font-serif text-white">
              Esttela Guimarães{" "}
              <span className="text-gold">Advocacia</span>
            </span>
            <p className="text-white/50 text-sm mt-1">
              © 2026 — Todos os direitos reservados
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white/70 hover:text-gold hover:border-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white/70 hover:text-gold hover:border-gold transition-colors"
              aria-label="Instagram secundário"
            >
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
