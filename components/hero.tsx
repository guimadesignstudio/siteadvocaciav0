"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_LINK = "https://wa.me/5521981000527?text=Olá! Gostaria de agendar uma consulta."

export function Hero() {
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
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(26, 42, 58, 0.5), rgba(26, 42, 58, 0.7)), url('/images/hero-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 text-center">
        {/* Decorative Line */}
        <div className="w-16 h-1 bg-gold mx-auto mb-8 animate-fade-in-up" />

        {/* Heading */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4 text-balance animate-fade-in-up animation-delay-200">
          Advocacia com
          <br />
          <span className="text-gold italic">excelência e dedicação</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-400">
          Atendimento jurídico personalizado, com comprometimento e
          transparência para proteger seus direitos.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
          <Button
            asChild
            className="bg-gold text-navy hover:bg-gold/90 px-8 py-6 text-sm font-semibold tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-1"
          >
            <Link 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              AGENDE UMA CONSULTA
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-sm font-semibold tracking-wider bg-transparent transition-all duration-300 hover:border-gold hover:text-gold"
          >
            <a href="#areas" onClick={(e) => scrollToSection(e, "#areas")}>
              ÁREAS DE ATUAÇÃO
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
