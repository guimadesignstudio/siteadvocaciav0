"use client"

import { useState, useEffect } from "react"
import { ArrowUp, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Link do WhatsApp baseado no seu CTA atual
  const WHATSAPP_LINK = "https://wa.me/5521990147026?text=Olá! Gostaria de agendar uma consulta."

  useEffect(() => {
    const handleScroll = () => {
      // Mostra o botão de topo após rolar 400px
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-6 right-6 z-[99] flex flex-col gap-4">
      {/* Botão Voltar ao Topo */}
      <button
        onClick={scrollToTop}
        className={cn(
          "p-3 rounded-full bg-navy border border-gold/30 text-gold shadow-2xl transition-all duration-300 hover:bg-gold hover:text-navy group",
          showScrollTop ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        )}
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
      </button>

      {/* Botão Flutuante WhatsApp */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.3)] transition-all duration-300 hover:scale-110 hover:rotate-[10deg] active:scale-95 group relative"
        aria-label="Falar no WhatsApp"
      >
        {/* Efeito de Ping/Onda para chamar atenção */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
        
        {/* Tooltip elegante */}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-navy text-gold text-xs font-bold py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gold/20 pointer-events-none">
          Fale Conosco
        </span>
      </a>
    </div>
  )
}
