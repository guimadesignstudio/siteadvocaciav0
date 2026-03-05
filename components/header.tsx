"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#inicio", label: "INÍCIO" },
    { href: "#sobre", label: "SOBRE" },
    { href: "#areas", label: "ÁREAS DE ATUAÇÃO" },
    { href: "#contato", label: "CONTATO" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy border-b-4 border-gold">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl lg:text-2xl font-serif text-white">
              Esttela Guimarães{" "}
              <span className="text-gold">Advocacia</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/90 hover:text-gold transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-navy transition-all"
            >
              <Link href="#contato" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Fale Conosco
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/90 hover:text-gold transition-colors tracking-wide py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-navy transition-all w-fit"
            >
              <Link href="#contato" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Fale Conosco
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
