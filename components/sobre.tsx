import { Award, BookOpen, Heart } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Comprovada",
    subtitle: "Experiência",
  },
  {
    icon: BookOpen,
    title: "Múltiplas Áreas",
    subtitle: "Especialização",
  },
  {
    icon: Heart,
    title: "Humanizado",
    subtitle: "Atendimento",
  },
]

export function Sobre() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <div className="w-12 h-1 bg-navy mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mb-6">
              Sobre <span className="text-gold italic">Dra. Esttela</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Com anos de experiência na advocacia, a Dra. Esttela Guimarães é reconhecida pelo
              seu comprometimento com a justiça e pelo atendimento humanizado que oferece a
              cada cliente.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Formada em Direito e com especializações em diversas áreas, atua de forma ética e
              dedicada, buscando sempre as melhores soluções jurídicas para proteger seus
              clientes.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <feature.icon className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="font-semibold text-navy text-sm">{feature.title}</p>
                  <p className="text-gold text-xs">{feature.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Card */}
          <div className="bg-navy rounded-lg p-10 lg:p-14">
            <blockquote className="text-center">
              <p className="font-serif text-xl md:text-2xl lg:text-3xl text-white/90 italic leading-relaxed mb-6">
                {'"A verdadeira justiça começa com a escuta atenta e o compromisso com quem confia em nós."'}
              </p>
              <cite className="text-gold text-sm tracking-widest not-italic">
                DRA. ESTTELA GUIMARÃES
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
