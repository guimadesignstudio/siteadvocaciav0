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
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="w-12 h-1 bg-gold mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Entre em <span className="text-gold italic">Contato</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto leading-relaxed">
            Estamos prontos para atendê-lo. Agende uma consulta ou tire suas
            dúvidas.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div 
              key={index} 
              className={`text-center group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 border-2 border-white/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:border-gold group-hover:bg-gold/10 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gold/20">
                <info.icon className="w-7 h-7 text-white/80 transition-colors duration-300 group-hover:text-gold" />
              </div>
              <h3 className="text-white font-semibold mb-1 transition-colors duration-300 group-hover:text-gold">{info.title}</h3>
              <p className="text-white/60 text-sm">{info.value}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={`text-center ${isVisible ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
          <Button
            asChild
            className="bg-gold text-navy hover:bg-gold/90 px-10 py-6 text-sm font-semibold tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-1"
          >
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              AGENDE SUA CONSULTA VIA WHATSAPP
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
