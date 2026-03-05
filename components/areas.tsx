import { Users, FileText, Scale, ShieldCheck, Home, Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const areas = [
  {
    icon: Users,
    title: "Direito de Família",
    description: "Divórcio, guarda, pensão alimentícia, adoção e planejamento familiar.",
  },
  {
    icon: FileText,
    title: "Direito Civil",
    description: "Contratos, responsabilidade civil, indenizações e questões patrimoniais.",
  },
  {
    icon: Scale,
    title: "Direito Trabalhista",
    description: "Reclamatórias, acordos, rescisões e defesa dos direitos do trabalhador.",
  },
  {
    icon: ShieldCheck,
    title: "Direito do Consumidor",
    description: "Proteção ao consumidor, cobranças indevidas e relações de consumo.",
  },
  {
    icon: Home,
    title: "Direito Imobiliário",
    description: "Compra e venda, locações, usucapião e regularização de imóveis.",
  },
  {
    icon: Building2,
    title: "Direito Empresarial",
    description: "Constituição de empresas, contratos e consultoria societária.",
  },
]

export function Areas() {
  return (
    <section id="areas" className="py-20 lg:py-28 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-navy mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mb-4">
            Áreas de <span className="text-gold italic">Atuação</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Atendimento especializado em diversas áreas do direito, sempre com foco
            no melhor resultado para o cliente.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <Card
              key={index}
              className="border border-border/50 bg-white hover:shadow-lg transition-shadow duration-300 group"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-cream rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                  <area.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-xl text-navy mb-3">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
