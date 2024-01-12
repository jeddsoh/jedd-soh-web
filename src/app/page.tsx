import Hero from "./components/hero"
import Projects from "./components/projects"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-6">
      <Hero />
      <Projects />
    </main>
  )
}
