"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, X, Scale, FileText, ShieldCheck, Quote } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const articles = [
  {
    id: 1,
    title: "Registro no RGI: o passo indispensável para ser proprietário",
    excerpt: "No Brasil, a aquisição da propriedade não se aperfeiçoa apenas com o contrato. Entenda por que o registro é o que garante sua segurança.",
    content: (
      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-gold first-letter:mr-3 first-letter:float-left">
          No Brasil, a aquisição da propriedade imobiliária não se aperfeiçoa apenas com a assinatura do contrato de compra e venda ou da escritura pública. Para que o comprador seja, de fato, reconhecido como proprietário, é indispensável o registro no RGI competente.
        </p>
        <div className="bg-navy/5 border-l-4 border-gold p-6 my-8">
          <Quote className="w-8 h-8 text-gold/30 mb-2" />
          <p className="italic text-navy font-serif text-lg">
            "Transfere-se entre vivos a propriedade mediante o registro do título translativo no Registro de Imóveis."
          </p>
          <cite className="text-xs mt-2 block text-gold font-sans not-italic">— Art. 1.245 do Código Civil</cite>
        </div>
        <p>Enquanto o título não é registrado, o vendedor continua sendo considerado o dono do imóvel perante terceiros. O comprador possui apenas um direito obrigacional, mas ainda não detém o direito real sobre o bem.</p>
        <h4 className="text-navy font-serif text-xl pt-4">Riscos da falta de registro:</h4>
        <ul className="grid grid-cols-1 gap-3">
          <li className="flex items-start gap-2 bg-white border border-slate-100 p-3 rounded-lg shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
            <span>Penhora por dívidas do antigo vendedor.</span>
          </li>
          <li className="flex items-start gap-2 bg-white border border-slate-100 p-3 rounded-lg shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
            <span>Dificuldades jurídicas para revenda imediata.</span>
          </li>
          <li className="flex items-start gap-2 bg-white border border-slate-100 p-3 rounded-lg shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
            <span>Riscos em caso de falecimento do vendedor (inventário).</span>
          </li>
        </ul>
      </div>
    ),
    date: "07 de Março, 2026",
    category: "Direito Imobiliário",
    icon: FileText
  },
  {
    id: 2,
    title: "Atraso na entrega de imóvel na planta: conheça seus direitos",
    excerpt: "Adquirir um imóvel na planta é um projeto de vida. Saiba o que caracteriza o atraso injustificado e quais indenizações o comprador pode pleitear.",
    content: (
      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-gold first-letter:mr-3 first-letter:float-left">
          Adquirir um imóvel na planta é a concretização de um projeto de vida. No entanto, o atraso na entrega é uma realidade frequente no mercado imobiliário e pode gerar importantes consequências jurídicas.
        </p>
        <h4 className="text-navy font-serif text-xl pt-4">O que caracteriza o atraso?</h4>
        <p>Os contratos preveem um prazo de tolerância (geralmente de até 180 dias). Após esse período, a não entrega configura inadimplemento contratual por parte da incorporadora.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-5 border-t-2 border-gold bg-navy text-white rounded-b-xl">
            <span className="font-serif text-gold text-lg block mb-2">Lucros Cessantes</span>
            <p className="text-xs opacity-80 text-justify">Valor correspondente ao aluguel que o imóvel poderia gerar ou que o comprador precisou pagar no período.</p>
          </div>
          <div className="p-5 border-t-2 border-gold bg-navy text-white rounded-b-xl">
            <span className="font-serif text-gold text-lg block mb-2">Danos Morais</span>
            <p className="text-xs opacity-80 text-justify">Aplicável em situações específicas onde o prejuízo ultrapassa o mero aborrecimento contratual.</p>
          </div>
        </div>
        <p>É possível manter a aquisição do imóvel e pleitear judicialmente a indenização pelos prejuízos decorrentes do atraso.</p>
      </div>
    ),
    date: "01 de Março, 2026",
    category: "Direito Imobiliário",
    icon: Scale
  },
  {
    id: 3,
    title: "Due Diligence Imobiliária: o que é e para que serve",
    excerpt: "A análise técnica e jurídica minuciosa que funciona como um raio-X do imóvel, identificando riscos antes da concretização da compra.",
    content: (
      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-gold first-letter:mr-3 first-letter:float-left">
          A due diligence imobiliária é uma etapa essencial em qualquer negociação. Trata-se de uma análise técnica e jurídica minuciosa para verificar a regularidade do imóvel e das partes envolvidas.
        </p>
        <p>Na prática, funciona como um <strong>“raio-X”</strong>. São examinados documentos como matrícula atualizada, histórico de proprietários, existência de ônus (hipotecas, penhoras) e dívidas tributárias.</p>
        <div className="flex items-center gap-4 p-6 bg-gold/10 rounded-2xl border border-gold/20 my-8">
          <ShieldCheck className="w-12 h-12 text-gold shrink-0" />
          <p className="text-navy font-medium italic">"Prevenir problemas futuros é mais eficiente e econômico do que remediar disputas judiciais."</p>
        </div>
        <p>Um imóvel adquirido sem a devida verificação pode gerar perda do bem ou impossibilidade de registro. Por isso, este procedimento é um investimento indispensável para a proteção do patrimônio.</p>
      </div>
    ),
    date: "22 de Fevereiro, 2026",
    category: "Direito Imobiliário",
    icon: ShieldCheck
  },
]

export function Blog() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="blog" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative max-w-6xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="w-12 h-1 bg-navy mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mb-4">
            Blog <span className="text-gold italic">Jurídico</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="border border-border/50 bg-white hover:shadow-elegant-lg transition-all duration-500 group overflow-hidden hover:-translate-y-2 cursor-pointer" onClick={() => setSelectedArticle(article)}>
              <div className="bg-navy px-4 py-3"><span className="text-gold text-[10px] font-bold tracking-widest uppercase">{article.category}</span></div>
              <CardContent className="p-6 text-left">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-4"><Calendar className="w-4 h-4 text-gold/60" /><span>{article.date}</span></div>
                <h3 className="font-serif text-lg text-navy mb-3 group-hover:text-gold transition-colors duration-300 leading-tight min-h-[50px]">{article.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-6 line-clamp-3">{article.excerpt}</p>
                <button className="inline-flex items-center gap-2 text-navy font-bold text-[10px] uppercase tracking-widest">Ler mais <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" /></button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* MODAL / POPUP */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/80 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-scale-in">
            <button onClick={() => setSelectedArticle(null)} className="absolute top-6 right-6 p-2 text-navy hover:bg-gold/10 rounded-full transition-colors z-30">
                <X className="w-6 h-6" />
            </button>
            
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6 text-gold">
                <selectedArticle.icon className="w-8 h-8" />
                <span className="text-[10px] font-bold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">{selectedArticle.category}</span>
              </div>
              <h2 className="font-serif text-2xl md:text-4xl text-navy mb-6 leading-tight">{selectedArticle.title}</h2>
              <div className="w-16 h-1 bg-gold mb-8" />
              
              <div className="prose prose-slate max-w-none">
                {selectedArticle.content}
              </div>
              
              <button onClick={() => setSelectedArticle(null)} className="mt-12 w-full py-4 bg-navy text-white font-bold rounded-xl hover:bg-gold transition-all duration-300 uppercase tracking-widest text-xs shadow-lg">Concluir Leitura</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
