import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Areas } from "@/components/areas"
import { Sobre } from "@/components/sobre"
import { Blog } from "@/components/blog"
import { Contato } from "@/components/contato"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Sobre />
      <Areas />
      <Blog />
      <Contato />
      <Footer />
    </main>
  )
}
