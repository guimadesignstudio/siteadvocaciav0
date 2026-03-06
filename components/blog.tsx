"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const articles = [
  {
    title: "Direitos do Consumidor: O Que Fazer em Caso de Cobrança Indevida",
    excerpt: "Entenda quais são seus direitos quando você é cobrado por um serviço que não contratou ou por valores incorretos. Saiba como agir e quais medidas legais tomar.",
    date: "15 de Fevereiro, 2026",
    category: "Direito do Consumidor",
    slug: "#",
  },
  {
    title: "Usucapião: Como Regularizar a Propriedade do Seu Imóvel",
    excerpt: "A usucapião é uma forma legal de adquirir a propriedade de um imóvel através da posse prolongada. Conheça os tipos e requisitos para cada modalidade.",
    date: "08 de Fevereiro, 2026",
    category: "Direito Imobiliário",
    slug: "#",
  },
  {
    title: "LGPD: O Que Sua Empresa Precisa Saber Sobre Proteção de Dados",
    excerpt: "A Lei Geral de Proteção de Dados trouxe novas obrigações para empresas. Descubra como se adequar e evitar multas e sanções administrativas.",
    date: "01 de Fevereiro, 2026",
    category: "Direito Digital",
    slug: "#",
  },
]

export function Blog() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section ref={sectionRef} id="blog" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cream/50 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="w-12 h-1 bg-navy mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mb-4">
            Blog <span className="text-gold italic">Jurídico</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Artigos e informações sobre direito para manter você atualizado
            sobre seus direitos e deveres.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card
              key={index}
              className={`border border-border/50 bg-white hover:shadow-elegant-lg transition-all duration-500 group overflow-hidden hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Category Badge */}
              <div className="bg-navy px-4 py-3 transition-all duration-300 group-hover:bg-navy/90">
                <span className="text-gold text-xs font-medium tracking-wider uppercase">
                  {article.category}
                </span>
              </div>
              
              <CardContent className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl text-navy mb-3 group-hover:text-gold transition-colors duration-300 leading-tight">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  href={article.slug}
                  className="inline-flex items-center gap-2 text-gold font-medium text-sm transition-all duration-300 hover:gap-3 group-hover:underline"
                >
                  Ler mais
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
