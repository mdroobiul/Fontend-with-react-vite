import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Footer from "./components/Footer"


function App() {
  
  return (
    <>
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>

    </>
  )
}

export default App
