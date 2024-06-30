import "./HeroimgStyle.css";
import IntroImg from "../assets/intro-bg.png"

import React from 'react'
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
    <div className="mask">
      <img className="intro-img" src={IntroImg} alt="IntroImg"/>

    </div>
      <div className="content">
        <p>Hello, I'M Shivani Rana.</p>
        <h1>Frontend Developer.</h1>
        <div>
            <Link to="/project" className="btn">Projects</Link>

            <Link to="/contact" className="btn btn-light">contact</Link>
        </div>

      </div>
    </div>
  )
}

export default Heroimg
