import { About } from "@/components/about"
import { Header } from "@/components/header"
import { Timeline } from "@/components/timeline"
import { Skills } from "@/components/skills"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Header />
      <About />
      <Timeline />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}