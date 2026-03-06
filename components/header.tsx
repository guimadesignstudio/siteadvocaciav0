"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_LINK = "https://wa.me/5521990147026?text=Olá! Gostaria de agendar uma consulta."

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#inicio", label: "INÍCIO" },
    { href: "#sobre", label: "SOBRE" },
    { href: "#areas", label: "ÁREAS DE ATUAÇÃO" },
    { href: "#blog", label: "BLOG" },
    { href: "#contato", label: "CONTATO" },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-navy shadow-elegant-lg' : 'bg-navy/95'} border-b-4 border-gold`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24 lg:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo.png"
              alt="Esttela Guimarães Advocacia"
              width={100}
              height={100}
              className="w-20 h-20 lg:w-24 lg:h-24 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm text-white/90 hover:text-gold transition-all duration-300 tracking-wide relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-navy transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
            >
              <Link 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Fale Conosco
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm text-white/90 hover:text-gold transition-colors tracking-wide py-2"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-navy transition-all w-fit"
            >
              <Link 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Fale Conosco
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
