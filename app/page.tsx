import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Areas } from "@/components/areas"
import { Sobre } from "@/components/sobre"
import { Contato } from "@/components/contato"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Sobre />
      <Areas />
      <Contato />
      <Footer />
    </main>
  )
}
