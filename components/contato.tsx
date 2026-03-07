"use client"

import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const WHATSAPP_NUMBER = "5521990147026"
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de agendar uma consulta.`

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone / WhatsApp",
    value: "(21) 99014-7026",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "mesguimaraes.adv@gmail.com",
  },
  {
    icon: MapPin,
    title: "Atendimento",
    value: "Online para todo o Brasil",
  },
  {
    icon: Clock,
    title: "Horário",
    value: "Seg a Sex, 9h às 18h",
  },
]

export function Contato() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="contato" className="py-20 lg:py-28 bg-navy relative overflow-hidden">
      {/* Linha Fina Dourada de Divisão (Substituindo o sombreamento feio) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gold/30 z-10" />

      {/* Elementos decorativos sutis de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        {/* Header da Seção */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="w-12 h-1 bg-gold mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Entre em <span className="text-gold italic">Contato</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto leading-relaxed">
            Estamos prontos para atendê-lo. Agende uma consulta ou tire suas
            dúvidas através de nossos canais oficiais.
          </p>
        </div>

        {/* Grid de Contato com Efeito de Destaque */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div 
              key={index} 
              className={`text-center group cursor-default transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Círculo do Ícone com Destaque no Hover */}
              <div className="w-20 h-20 border-2 border-white/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 
                group-hover:border-gold group-hover:bg-gold/10 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <info.icon className="w-7 h-7 text-white/60 transition-all duration-300 group-hover:text-gold group-hover:rotate-[10deg]" />
              </div>

              {/* Título com Destaque no Hover */}
              <h3 className="text-white font-serif text-lg mb-2 transition-colors duration-300 group-hover:text-gold">
                {info.title}
              </h3>

              {/* Valor/Texto */}
              <p className="text-white/50 text-sm transition-colors duration-300 group-hover:text-white/80">
                {info.value}
              </p>
            </div>
          ))}
        </div>

        {/* Botão de Ação */}
        <div className={`text-center ${isVisible ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
          <Button
            asChild
            className="bg-gold text-navy hover:bg-gold/90 px-10 py-7 text-xs font-bold tracking-[0.2em] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:-translate-y-1 rounded-full uppercase"
          >
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Phone className="w-4 h-4" />
              Agende sua consulta via WhatsApp
            </Link>
          </Button>
        </div>
      </div>

      {/* Linha Fina Dourada no Rodapé */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gold/20" />
    </section>
  )
}
