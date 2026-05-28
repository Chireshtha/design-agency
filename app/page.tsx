import Navbar from './components/Layout/Navbar'
import Hero from './components/Sections/Hero'
import Services from './components/Sections/Services'
import Portfolio from './components/Sections/Portfolio'
import Contact from './components/Sections/Contact'
import Footer from './components/Layout/Footer'


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}
export default Home;