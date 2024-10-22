import "./AppHeader.css";
import WebsiteLogo from "../../assets/httc-logo.jpeg";
import { NavLink } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebookF,FaLinkedinIn} from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineCaretDown } from "react-icons/ai";



const AppHeader = () => {
  return (
    <>
      <div className="sub-header__top">
        <div className="sub-header__left">
          Working Hour : Monday to Friday 10:00AM to 6:00PM
        </div>
        <div className="sub-header__right">
          <a
            className="contact-whatsapp"
            title="Call Whatsapp"
            href="tel:+8801307841529"
          >
            <div className="icon-box">
              <FaPhoneVolume />
            </div>
            <span className="contact-number">+880 1307841529</span>
          </a>
          <a href="#" title="Follow on Facebook" className="icon-box" style={{backgroundColor:"#ffffff"}}>
            <FaFacebookF color="#1877F2"/>
          </a>
          <a href="#" className="icon-box" title="Follow on Linkedin"style={{backgroundColor:"#ffffff"}}>
            <FaLinkedinIn color="#1877F2" />
          </a>
          <a href="#" className="icon-box" title="Follow on Instagram"style={{backgroundColor:"#ffffff"}}>
            <FiInstagram color="#fc007e" />
          </a>
        </div>
      </div>

      {/* Main header Element */}
      <header className="header">
        <NavLink to="/hafeez-group/">
          <div className="website__logo-wrapper">
            <div className="logo-image__wrapper">
              <img
                className="logo_image"
                src={WebsiteLogo}
                alt="website logo"
                title="website logo"
              />
            </div>
            <div className="logo__title-wrapper">
              <h1
                className="logo__title-text"
                title="Hafeez Uddin Tizarah and Trade Company"
              >
                Hafeez Uddin Tizarah and Trade Company
              </h1>
              <p className="logo__sub-describtion">A Paper Tading Company.</p>
            </div>
          </div>
        </NavLink>
        <nav className="header__nav">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-item" : "none-color"
            }
            to="/hafeez-group/"
          >
            <span className="header__nav-item">Home </span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-item" : "none-color"
            }
            to="/about-us"
          >
            <span className="header__nav-item">About Us</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-item" : "none-color"
            }
            to="/products"
          >
            <span className="header__nav-item">
              Products <AiOutlineCaretDown color="#000000"/>
              <nav className="dropdown-manu">
                <NavLink className="dropdown-manu__item">
                  Writing & Printing
                </NavLink>
                <NavLink className="dropdown-manu__item">
                  Packaging Board
                </NavLink>
                <NavLink className="dropdown-manu__item">
                  Speciality Paper
                </NavLink>
                <NavLink className="dropdown-manu__item">Tissues</NavLink>
              </nav>
            </span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-item" : "none-color"
            }
            to="/events"
          >
            <span className="header__nav-item">Events</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-item" : "none-color"
            }
            to="/contact-us"
          >
            <span className="header__nav-item">Contact Us</span>
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default AppHeader;
