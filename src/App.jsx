import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import Organizations from './components/Organizations'
import Download from './components/Download'
import Footer from './components/Footer'
import Privacy from './components/Privacy'
import Terms from './components/Terms'

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Organizations />
      <Download />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
