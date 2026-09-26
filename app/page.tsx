import Hero from "@/components/sections/Hero"
import About from "@/components/sections/Academics"
import PersonalInfo from "@/components/sections/About"
import Research from "@/components/sections/Research"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"
import Achievements from "@/components/sections/Achievements"
import Experience from "@/components/sections/Experience"
import ECA from "@/components/sections/ECA"
import Contact from "@/components/sections/Contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PersonalInfo />
      <About />
      <Research />
      <Projects />
      <Skills />
      <Achievements />
      <Experience />
      <ECA />
      <Contact />
    </main>
  )
}
