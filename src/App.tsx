
import { CursorGlow } from './components/CursorGlow'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <CursorGlow />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
      </main>
    </div>
  )
}

export default App