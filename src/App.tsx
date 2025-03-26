
import { CursorGlow } from './components/CursorGlow'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <CursorGlow />
      <main>
        <Hero />
        <Projects />
      </main>
    </div>
  )
}

export default App