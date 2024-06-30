import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import "./FooterStyle.css";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-container">
    <div className="left">
        <div className="location">
            <FaHome size={20} style={{color: "#fff", marginRight:"2rem"}}/>
            <div>
                <p>Crossing Republik.</p>
                <p>Ghaziabad.</p>
            </div>
        </div>
        <div className="phone">
        <h4><FaPhone size={20} style={{color: "#fff", marginRight:"2rem"}}/>7906419120</h4>
            </div>
            <div className="email">
        <h4><FaMailBulk size={20} style={{color: "#fff", marginRight:"2rem"}}/>shivanirana0919@gmail.com</h4>
            </div>

    </div>
    <div className="right">
        <h4>About</h4>
        <p>This is me Shivani Rana, student of Computer Science and Engineering.</p>
        <div className="social">
            <div className="linkedin">
        <h4><FaLinkedin size={30} style={{color: "#fff", marginRight:"2rem"}}/></h4>
            </div>
            <div className="github">
        <h4><FaGithub size={30} style={{color: "#fff", marginRight:"2rem"}}/></h4>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Footer
