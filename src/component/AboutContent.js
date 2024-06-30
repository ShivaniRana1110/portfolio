import { Link } from "react-router-dom"
import "./AboutContentStyle.css"

import React from 'react'
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.jpg"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I'm a Front-End Developer. I create websites.</p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stck top">
                <img src={React1} className="img" alt="true"/>
            </div>
            <div className="img-stck bottom">
                <img src={React2} className="img" alt="true"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
