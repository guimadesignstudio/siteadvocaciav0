import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { FloatingActions } from "@/components/floating-actions"
import Script from 'next/script'
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
  openGraph: {
    title: 'Esttela Guimarães Advocacia',
    description: 'Advocacia com excelência e dedicação.',
    url: 'https://esttelaguimaraes.adv.br',
    siteName: 'Esttela Guimarães Advocacia',
    images: [
      {
        url: 'https://esttelaguimaraes.adv.br/apple-icon.png',
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
      <head>
        {/* Google Tag Manager - Parte 1 */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TTW4J33N');
          `}
        </Script>
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) - Parte 2 */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-TTW4J33N"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}
        <FloatingActions />
        <Analytics />
      </body>
    </html>
  )
}
