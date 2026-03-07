import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { FloatingActions } from "@/components/floating-actions"
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Esttela Guimarães Advocacia | Escritório de Advocacia',
  description: 'Advocacia com excelência e dedicação. Atendimento jurídico personalizado em diversas áreas do direito.',
  generator: 'v0.app',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  // Configuração para a imagem aparecer no WhatsApp e redes sociais
  openGraph: {
    title: 'Esttela Guimarães Advocacia',
    description: 'Advocacia com excelência e dedicação.',
    url: 'https://esttelaguimaraes.adv.br',
    siteName: 'Esttela Guimarães Advocacia',
    images: [
      {
        url: 'https://esttelaguimaraes.adv.br/apple-icon.png', // Usando o ícone maior da sua pasta public
        width: 180,
        height: 180,
        alt: 'Logo Esttela Guimarães Advocacia',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <FloatingActions />
        <Analytics />
      </body>
    </html>
  )
}
