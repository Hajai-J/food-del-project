import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  const year = new Date();
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
            iusto quidem tenetur deserunt quaerat, et officia error vitae quis
            ipsa itaque soluta! Veritatis, consequuntur. Ut cupiditate
            consequatur rerum iste ducimus!
          </p>
          <div className="footer-social-icon">
            <img className="img1" src={assets.facebook_icon} alt="" />
            <img className="img2" src={assets.twitter_icon} alt="" />
            <img className="img3" src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-99876521</li>
            <li>Demo@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p class="footer-copy-right">
        © {new Date().getFullYear()}. All rights reserved by{" "}
        <a className="footer-about" href="https://hajai.vercel.app/">Hajai❤️️</a>
      </p>
    </div>
  );
};

export default Footer;
