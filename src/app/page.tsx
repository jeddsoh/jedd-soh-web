import Hero from "./components/hero"
import Projects from "./components/projects"
import About from "./components/about"
import Contact from "./components/contact"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-4">
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}
