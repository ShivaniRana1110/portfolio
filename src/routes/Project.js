import React from 'react'
import Navbar from "../component/Navbar";
import Footer from "../component/Footer"
import Heroimg2 from '../component/Heroimg2';
import Work from '../component/Work';
const Project = () => {
  return (
    <div>
    <Navbar/>
    {/* making variables heading and text */}
    <Heroimg2 heading="PROJECTS." text="Some of my recent works"/>
   <Work/>
    <Footer/>
    </div>
  )
}

export default Project
