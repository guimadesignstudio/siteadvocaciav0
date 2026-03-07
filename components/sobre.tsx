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
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* AJUSTE 1: gap reduzido de 16 para 8 e centralização vertical (items-center) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* Content */}
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="w-12 h-1 bg-navy mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mb-8">
              Sobre <span className="text-gold italic">Dra. Esttela Guimarães</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Advogada com 20 anos de experiência, especialista em Direito Imobiliário e
              Consumidor. Pós-graduada em Direito Empresarial e dos Negócios pelo Instituto
              A Vez do Mestre / Universidade Cândido Mendes, possui pós-graduação em LGPD
              e Gestão pela Faculdade Legale Educacional. Complementa sua formação com
              curso de extensão em Direito Imobiliário pela EMERJ, além de especialização em
              DPO, LGPD e Direito Digital pela ESA/RJ.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Prática orientada por análise estratégica, avaliação de riscos e busca de soluções
              jurídicas seguras, eficientes e alinhadas aos objetivos de cada cliente.
            </p>
            <p className="text-navy/40 text-xs mb-10">
              OAB/RJ 139.141 | OAB/SP 355.634
            </p>

            {/* Features */}
            <div className={`flex flex-wrap gap-8 lg:gap-12 ${isVisible ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex-1 min-w-[120px] group text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center transition-all duration-500 group-hover:scale-110 drop-shadow-lg">
                    <feature.icon className="w-10 h-10 text-gold drop-shadow-md transition-all duration-500 group-hover:drop-shadow-xl" strokeWidth={1.5} />
                  </div>
                  <p className="font-serif text-gold text-sm italic mb-1">{feature.title}</p>
                  <p className="text-navy text-xs font-medium leading-tight">{feature.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image and Quote */}
          <div className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* AJUSTE 2: max-w aumentado para 'md' e removido 'lg:ml-auto' para aproximar do texto */}
              <div className="relative rounded-2xl overflow-hidden shadow-elegant-lg w-full max-w-md mx-auto lg:mx-0">
                <Image
                  src="/images/dra-esttela.png"
                  alt="Dra. Esttela Guimarães - Advogada"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                
                {/* Quote Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/50 to-transparent flex flex-col justify-end p-6 lg:p-8">
                  <blockquote className="text-center">
                    <p className="font-serif text-base md:text-lg text-white/95 italic leading-relaxed mb-3">
                      {'"A verdadeira justiça começa com a escuta atenta e o compromisso com quem confia em nós."'}
                    </p>
                    <cite className="text-gold text-sm font-medium not-italic tracking-wide">
                      Dra. Esttela Guimarães
                    </cite>
                  </blockquote>
                </div>
              </div>
              
              {/* AJUSTE 3: Molduras douradas aumentadas para acompanhar a foto maior */}
              <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-gold/30 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-gold/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
