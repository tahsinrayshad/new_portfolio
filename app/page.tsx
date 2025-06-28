import Hero from "@/components/sections/Hero"
import About from "@/components/sections/Academics"
import PersonalInfo from "@/components/sections/About"
import Skills from "@/components/sections/Skills"
import Projects from "@/components/sections/Projects"
import Achievements from "@/components/sections/Achievements"
import Experience from "@/components/sections/Experience"
import Contact from "@/components/sections/Contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PersonalInfo />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Experience />
      <Contact />
    </main>
  )
}
