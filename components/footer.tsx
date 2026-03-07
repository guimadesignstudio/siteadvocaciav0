import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, Phone } from "lucide-react"

const WHATSAPP_LINK = "https://wa.me/5521990147026?text=Olá! Gostaria de agendar uma consulta."

export function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="Esttela Guimarães Advocacia"
                width={500}
                height={500}
                className="w-40 h-40 object-contain"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Advocacia com excelência e dedicação.<br />
              Atendimento jurídico personalizado.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <Link
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-gold transition-all duration-300 text-sm group"
              >
                <Phone className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                (21) 99014-7026
              </Link>
              <Link
                href="mailto:mesguimaraes.adv@gmail.com"
                className="flex items-center gap-3 text-white/70 hover:text-gold transition-all duration-300 text-sm group"
              >
                <Mail className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                mesguimaraes.adv@gmail.com
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.instagram.com/esttelaguimaraes/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center text-white/70 hover:text-gold hover:border-gold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gold/20"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-white/50 text-sm">
              © 2026 Esttela Guimarães Advocacia — Todos os direitos reservados
            </p>
            <span className="hidden md:inline text-white/30">|</span>
            <p className="text-white/30 text-xs">
              OAB/RJ 139.141 | OAB/SP 355.634
            </p>
          </div>
          <p className="text-white/40 text-xs">
            Construído por <span className="text-gold/70 hover:text-gold transition-colors">GuimaDesign Studio</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
