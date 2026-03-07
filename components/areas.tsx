"use client"

import { Home, ShieldCheck, Laptop, HeartPulse, FileText, Building2, ChevronRight, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const areas = [
  {
    icon: Home,
    title: "Direito Imobiliário",
    description: "Contratos, regularização, usucapião e disputas imobiliárias.",
    items: [
      "Elaboração, análise e revisão de contratos de compra e venda, promessa de compra e venda, locação e permuta",
      "Distratos imobiliários e rescisões contratuais",
      "Ações de despejo, cobrança de aluguéis, revisionais e reintegração de posse",
      "Regularização de imóveis e due diligence imobiliária",
      "Usucapião judicial e extrajudicial",
      "Adjudicação compulsória judicial e extrajudicial",
      "Ações envolvendo vícios construtivos e atraso na entrega de imóvel",
      "Restituição de ITBI"
    ],
  },
  {
    icon: ShieldCheck,
    title: "Direito do Consumidor",
    description: "Defesa dos seus direitos nas relações de consumo.",
    items: [
      "Negativação indevida",
      "Demandas contra instituições financeiras",
      "Vícios de produto e falha na prestação de serviço",
      "Atrasos, cancelamentos de voo e bagagem extraviada",
      "Corte indevido"
    ],
  },
  {
    icon: Laptop,
    title: "Direito Digital",
    description: "Proteção no ambiente virtual e crimes cibernéticos.",
    items: [
      "Fraudes eletrônicas e golpes virtuais",
      "Remoção de conteúdos indevidos da internet",
      "Invasão de dispositivos e vazamento de dados",
      "Bloqueio de acesso em redes sociais e plataformas de transporte"
    ],
  },
  {
    icon: HeartPulse,
    title: "Direito da Saúde",
    description: "Defesa contra abusos de planos de saúde.",
    items: [
      "Negativa de Cobertura pelo plano de saúde",
      "Cancelamento indevido",
      "Cobrança/Reajuste abusivo"
    ],
  },
  {
    icon: FileText,
    title: "Atuação Extrajudicial",
    description: "Soluções sem necessidade de processo judicial.",
    items: [
      "Notificações extrajudiciais",
      "Negociação de acordos",
      "Participação em reuniões estratégicas",
      "Elaboração de pareceres jurídicos",
      "Atuação em cartórios e regularizações administrativas",
      "Inventário Extrajudicial"
    ],
  },
  {
    icon: Building2,
    title: "Assessoria Empresarial",
    description: "Consultoria jurídica preventiva para empresas.",
    items: [
      "Estratégias preventivas para empresas com foco em redução de passivo consumerista",
      "Gestão de passivo judicial e administrativo",
      "Elaboração de termos de uso e políticas de privacidade",
      "Consultoria preventiva",
      "Recuperação de crédito",
      "Elaboração e revisão de contratos empresariais"
    ],
  },
]

function AreaCard({ area, index, isVisible, onOpenModal }: { 
  area: typeof areas[0], 
  index: number, 
  isVisible: boolean,
  onOpenModal: () => void 
}) {
  return (
    <div
      className={`bg-white rounded-xl p-5 border border-border/30 hover:shadow-elegant-lg transition-all duration-500 group hover:-translate-y-1 cursor-pointer ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 80}ms` }}
      onClick={onOpenModal}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-cream to-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-gold/20 group-hover:to-gold/5 transition-all duration-500 shadow-sm group-hover:shadow-gold/20">
          <area.icon className="w-5 h-5 text-gold" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-lg text-navy mb-1 group-hover:text-gold transition-colors duration-300">{area.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{area.description}</p>
        </div>
      </div>
      <button
        className="mt-4 flex items-center gap-1 text-gold text-sm font-medium hover:gap-2 transition-all duration-300"
      >
        Saber mais <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  )
}

function Modal({ area, isOpen, onClose }: { area: typeof areas[0] | null, isOpen: boolean, onClose: () => void }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !area) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in-up"
      style={{ animationDuration: '0.3s' }}
    >
      <div 
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-hidden animate-scale-in">
        <div className="bg-gradient-to-r from-navy to-navy/90 p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
              <area.icon className="w-7 h-7 text-gold" />
            </div>
            <h3 className="font-serif text-2xl">{area.title}</h3>
          </div>
        </div>
        <div className="p-6 overflow-y-auto max-h-[50vh]">
          <p className="text-muted-foreground mb-4">{area.description}</p>
          <h4 className="font-semibold text-navy mb-3">Serviços oferecidos:</h4>
          <ul className="space-y-3">
            {area.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-muted-foreground text-sm">
                <span className="w-2 h-2 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 pt-0">
          <a
            href="https://wa.me/5521981000527?text=Olá! Gostaria de saber mais sobre os serviços de advocacia."
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gold text-navy font-semibold py-3 rounded-lg text-center hover:bg-gold/90 transition-colors"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </div>
  )
}

export function Areas() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedArea, setSelectedArea] = useState<typeof areas[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const openModal = (area: typeof areas[0]) => {
    setSelectedArea(area)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedArea(null), 300)
  }

  return (
    <section ref={sectionRef} id="areas" className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="w-12 h-1 bg-navy mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mb-4">
            Áreas de <span className="text-gold italic">Atuação</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Atendimento especializado em diversas áreas do direito, sempre com foco
            no melhor resultado para o cliente.
          </p>
        </div>

        {/* Areas Grid - Compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.map((area, index) => (
            <AreaCard 
              key={index} 
              area={area} 
              index={index} 
              isVisible={isVisible}
              onOpenModal={() => openModal(area)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal area={selectedArea} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
