import React from 'react'
import Navbar from "../component/Navbar";
import Footer from "../component/Footer"
import Heroimg2 from '../component/Heroimg2';
import Form from '../component/Form';


const Contact = () => {
  return (
    <div>
     <Navbar/>
     <Heroimg2 heading="CONTACT." text="Let's Connect"/>
     <Form/>
     <Footer/>
    </div>
  )
}

export default Contact
