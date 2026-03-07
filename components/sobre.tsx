"use client"

import { Award, Globe, Scale } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: Award,
    title: "20 Anos de",
    subtitle: "Experiência",
  },
  {
    icon: Globe,
    title: "Atendimento",
    subtitle: "online para todo Brasil",
  },
  {
    icon: Scale,
    title: "Especialista em",
    subtitle: "Direito Imobiliário e Consumidor",
  },
]

export function Sobre() {
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
    <section ref={sectionRef} id="sobre" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Elementos de sombreamento removidos para limpeza visual */}
      
      <div className="container mx-auto px-4 lg:px-8 relative max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Lado Esquerdo: Conteúdo de Texto */}
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="w-12 h-1 bg-navy mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mb-8">
              Sobre <span className="text-gold italic">Dra. Esttela Guimarães</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed mb-10 text-justify lg:text-left">
              <p>
                Advogada com 20 anos de experiência, especialista em Direito Imobiliário e
                Consumidor. Pós-graduada em Direito Empresarial e dos Negócios pelo Instituto
                A Vez do Mestre / Universidade Cândido Mendes, possui pós-graduação em LGPD
                e Gestão pela Faculdade Legale Educacional.
              </p>
              <p>
                Complementa sua formação com curso de extensão em Direito Imobiliário pela EMERJ, 
                além de especialização em DPO, LGPD e Direito Digital pela ESA/RJ. Prática orientada 
                por análise estratégica e busca de soluções eficientes.
              </p>
              <p className="text-navy/40 text-xs mt-4">
                OAB/RJ 139.141 | OAB/SP 355.634
              </p>
            </div>

            {/* Diferenciais - Espaçamento reduzido entre ícone e texto */}
            <div className={`flex flex-wrap gap-6 lg:gap-8 ${isVisible ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
              {features.map((feature, index) => (
                <div key={index} className="flex-1 min-w-[140px] group text-center lg:text-left">
                  <div className="w-12 h-12 mx-auto lg:mx-0 mb-2 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                    <feature.icon className="w-8 h-8 text-gold drop-shadow-md" strokeWidth={1.5} />
                  </div>
                  <p className="font-serif text-gold text-sm italic mb-0 leading-tight">{feature.title}</p>
                  <p className="text-navy text-xs font-medium leading-tight">{feature.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Imagem e Frase */}
          <div className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant-lg w-full max-w-md mx-auto lg:mx-0">
                <Image
                  src="/images/dra-esttela-nova 2.png"
                  alt="Dra. Esttela Guimarães - Advogada"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                
                {/* Overlay da Frase - Centralização e quebra corrigida */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent flex flex-col justify-end items-center text-center p-8 pb-12">
                  <div className="max-w-[280px]">
                    <p className="font-serif text-base md:text-lg text-white italic leading-snug mb-4">
                      "A verdadeira justiça começa com a escuta atenta e o compromisso com quem confia em nós."
                    </p>
                    <cite className="text-gold text-xs font-medium not-italic tracking-widest uppercase block">
                      Dra. Esttela Guimarães
                    </cite>
                  </div>
                </div>
              </div>
              
              {/* Molduras Decorativas (Sem blur) */}
              <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-gold/30 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-gold/10 rounded-2xl -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
