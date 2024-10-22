import "./AppFooter.css";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebookF,FaLinkedinIn} from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const AppFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
      <div className="footer-section">
        <h4>Bangladesh</h4>
        <p>Hafeez Uddin Group</p>
        <p>Business Bay Offices,</p>
        <p>1913, Tamani Arts,</p>
        <p>Dhaka, BD</p>
        <p>Phone: +880 130 784 1529</p>
      </div>
      <div className="footer-section">
        <h4>Soudi Arab</h4>
        <p>Hafeez Uddin Investments Arab Limited</p>
        <p>P.O Box 11152</p>
        <p>Riyad SA</p>
        <p>Saudi Arab</p>
        <p>Phone: +880 130 784 1529</p>
      </div>
      <div className="footer-section">
        <h4>Follow With</h4>
        <p>Stay up to date with latest industry news</p>
        <button className="subscribe-button">Click Here</button>
        <div className="social-icons">
          <a
            href="#"
            title="Follow on Facebook"
            className="icon-box"
            style={{ backgroundColor: "#ffffff" }}
          >
            <FaFacebookF color="#1877F2" />
          </a>
          <a
            href="#"
            className="icon-box"
            title="Follow on Linkedin"
            style={{ backgroundColor: "#ffffff" }}
          >
            <FaLinkedinIn color="#1877F2" />
          </a>
          <a
            href="#"
            className="icon-box"
            title="Follow on Instagram"
            style={{ backgroundColor: "#ffffff" }}
          >
            <FiInstagram color="#fc007e" />
          </a>
        </div>
      </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2024 © All Rights Reserved. Hafeez Uddin Tizarah and Trade Company for Paper Trading.</p>
      </div>
    </footer>
  );
};

export default AppFooter;
