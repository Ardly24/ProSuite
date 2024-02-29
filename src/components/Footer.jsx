import React from "react";
import "../styles/footer.css";
import image2 from "../assets/image2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="aboutprosuite">
          <img
            className="image1"
            src={image2}
            alt="prosuite logo"
            style={{ width: "149px", height: "53px" }}
          />
          <p>
            ProSuite is a suite of cloud-based platforms which aims at
            transforming and automating enterprise tasks. Our solutions focus on
            user experience and easy-to-use tools including Asset Management,
            Risk Management and Perfomance Management.
          </p>
        </div>

        <div className="services">
          <h4>Services</h4>

          <ul className="serviceslist">
            <li> ProSuite Risk</li>
            <li>ProSuite Docs</li>
            <li>ProSuite Asset</li>
            <li>ProSuite Perfomance</li>
          </ul>
        </div>


        <div className="links">
        <h4>Links</h4>
        <ul>
            <li><Link to="/ProSuite">Home</Link></li>
            <li><Link to="/ProSuite/about">About</Link></li>
             <li><Link to="/ProSuite/project">Solutions</Link></li>
             <li><Link to="/ProSuite/contact">Contact</Link></li>
             <li><Link to="/ProSuite/contact">Request a Demo</Link></li>
          </ul>
        </div>

        <div className="contact-us">
        <h4>Contact Us</h4>  
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia morbi praesent nulla tempor sagittis. Curabitur donec cursus donec risrdum nullam orci sit dictum. Molestie nunc sed amet vulputate in. Condimentum mi massa id interdum risus, tortor nunc mauris.
        </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
