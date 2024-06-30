import React from 'react';
import Navbar from "../component/Navbar";
import Heroimg from "../component/Heroimg";
import Footer from "../component/Footer"


const Home = () => {
  return (
    <div>
    {/* calling a component */}
     <Navbar/>
     <Heroimg />
     <Footer/>
    </div>
  )
};

export default Home;
