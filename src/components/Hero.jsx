import React from "react";
import "../styles/hero.css";
import prosuiteWebIcon from '../assets/prosuite-web.png'; 

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <p className="welcome">Welcome to ProSuite</p>
        <div className="discover">Discover the power of Software</div>

        <p className="content">
          Every day, our clients are faced with challenges and opportunities. <br/>
          We help them solve their problems by connecting them to informationtechnology. <br/>
          We offer solutions that grow, empower and help businesses. <br/>
        </p>

        <div className="buttons">
          <Link to="/" className="btn btn-light">
            GET STARTED
          </Link>
          <Link to="/" className="btn">
            REQUEST A DEMO
          </Link>
        </div>
      </div>

      <div className="right">
      <img className="image1" src={prosuiteWebIcon} alt="prosuite Web Icon"  />
      </div>
    </div>
  );
};

export default Hero;
