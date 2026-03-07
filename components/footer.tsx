import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, Phone } from "lucide-react"

const WHATSAPP_LINK = "https://wa.me/5521981000527?text=Olá! Gostaria de agendar uma consulta."

export function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 py-10 relative">
      {/* Linha Fina Dourada no topo para consistência */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gold/20" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Info */}
          <div className="flex flex-col items-start">
            <div className="mb-0"> {/* Removido margin bottom aqui */}
              <Image
                src="/images/logo.png"
                alt="Esttela Guimarães Advocacia"
                width={800} // Aumentado para melhor resolução
                height={800}
                className="w-64 h-64 object-contain -ml-6" // Aumentado e puxado levemente para a esquerda para alinhar visualmente
              />
            </div>
            {/* Margem negativa para aproximar o texto da logo conforme solicitado */}
            <div className="-mt-12 space-y-2"> 
              <p className="text-white/80 font-serif text-base leading-tight">
                Advocacia com excelência e dedicação.
              </p>
              <p className="text-white/60 text-sm italic">
                Atendimento jurídico personalizado.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col md:pt-16"> {/* Alinhado verticalmente com o texto da logo */}
            <h4 className="text-gold font-serif text-lg mb-6">Contato</h4>
            <div className="space-y-4">
              <Link
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-gold transition-all duration-300 text-sm group"
              >
                <div className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center transition-colors group-hover:bg-gold/10">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                (21) 98100-0527
              </Link>
              <Link
                href="mailto:mesguimaraes.adv@gmail.com"
                className="flex items-center gap-3 text-white/70 hover:text-gold transition-all duration-300 text-sm group"
              >
                <div className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center transition-colors group-hover:bg-gold/10">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                mesguimaraes.adv@gmail.com
              </Link>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col md:pt-16">
            <h4 className="text-gold font-serif text-lg mb-6">Redes Sociais</h4>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.instagram.com/esttelaguimaraes/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-gold hover:border-gold transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-white/40 text-xs tracking-wider">
              © 2026 ESTTELA GUIMARÃES ADVOCACIA
            </p>
            <span className="hidden md:inline text-white/10">|</span>
            <p className="text-white/30 text-[10px] uppercase tracking-[0.1em]">
              OAB/RJ 139.141 | OAB/SP 355.634
            </p>
          </div>
          <p className="text-white/20 text-[10px] uppercase tracking-widest">
            Desenvolvido por <span className="text-gold/50 hover:text-gold transition-colors cursor-pointer">GuimaDesign Studio</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
