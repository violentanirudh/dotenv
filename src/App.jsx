import { useState } from 'react'
import './resources/css/style.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import UpcomingEvents from './components/UpcomingEvents'
import TeamSection from './components/TeamSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className='bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 h-screen w-screen relative text-slate-300 overflow-scroll'>
      <div className="absolute inset-0 bg-zinc-950/60 bg-url['/graph-paper.svg'] overflow-scrolls">
      <div className='h-screen overflow-y-scroll py-12 px-4 bg-[url("./graph-paper.svg")] bg-repeat'>
          <div className='max-w-screen-xl mx-auto'>
            <Navbar />  
            <HeroSection />
            <UpcomingEvents />
            <TeamSection />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App