import Hero from './components/sections/Hero'
import Modules from './components/sections/Modules'
import Pricing from './components/sections/Pricing'
import FAQ from './components/sections/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <Modules />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
