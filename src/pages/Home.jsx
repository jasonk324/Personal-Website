import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Education from "../components/Education"
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home = () => {
  return (
    <div className='bg-background text-white w-full overflow-hidden'>
        <Header />

      <section id="About">
        <div className="bg-background mt-24 flex justify-center items-center">
          <div className="sm:px-16 px-6">
            <About />
          </div>
        </div>
      </section>

      <div className="bg-background sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1480px] w-full">
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Footer /> 
        </div>
      </div>
    </div>
  )
}

export default Home