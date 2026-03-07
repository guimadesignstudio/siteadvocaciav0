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
  // A seção 'icons' foi removida para que o Next.js use automaticamente 
  // os arquivos icon.png e apple-icon.png que você subir na pasta /app
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
