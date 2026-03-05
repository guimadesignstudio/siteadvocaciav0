import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(44, 62, 80, 0.85), rgba(44, 62, 80, 0.9)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 text-center">
        {/* Decorative Line */}
        <div className="w-16 h-1 bg-gold mx-auto mb-8" />

        {/* Heading */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4 text-balance">
          Advocacia com
          <br />
          <span className="text-gold italic">excelência e dedicação</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Atendimento jurídico personalizado, com comprometimento e
          transparência para proteger seus direitos.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-gold text-navy hover:bg-gold/90 px-8 py-6 text-sm font-semibold tracking-wider"
          >
            <Link href="#contato" className="flex items-center gap-2">
              AGENDE UMA CONSULTA
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-sm font-semibold tracking-wider bg-transparent"
          >
            <Link href="#areas">ÁREAS DE ATUAÇÃO</Link>
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
