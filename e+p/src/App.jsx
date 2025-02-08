import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Bio from './Bio'
import Skills from './Skills'
import Education from './Education'
import SpaceExcursion from './SpaceExcursion'


function App() {

  return (
    <>
     <div>
        <Navbar/>
        <Hero/>
        <Bio/>
        <Skills/>
        <Education/>
        <SpaceExcursion/>
     </div>
    </>
  )
}

export default App



