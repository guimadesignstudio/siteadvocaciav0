import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone / WhatsApp",
    value: "(00) 00000-0000",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "contato@esttelaguimaraes.adv.br",
  },
  {
    icon: MapPin,
    title: "Endereço",
    value: "Endereço do escritório",
  },
  {
    icon: Clock,
    title: "Horário",
    value: "Seg a Sex, 9h às 18h",
  },
]

export function Contato() {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-navy">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
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
            <div key={index} className="text-center">
              <div className="w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-6 h-6 text-white/80" />
              </div>
              <h3 className="text-white font-semibold mb-1">{info.title}</h3>
              <p className="text-white/60 text-sm">{info.value}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            asChild
            className="bg-gold text-navy hover:bg-gold/90 px-10 py-6 text-sm font-semibold tracking-wider"
          >
            <Link
              href="https://wa.me/5500000000000"
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
