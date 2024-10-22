import AppHeader from "../../components/header/AppHeader";
import AppFooter from "../../components/footer/AppFooter";
import "./ContactUsPage.css";

const ContactUsPage = () => {
  return (
    <>
      <AppHeader />
      <div className="bannar">
        <h1 className="page-heading">Contact with Us</h1>
        <div className="contact-info-container">
          <div className="contact-information">
            <h4>Address</h4>
            <p>Hafeez Uddin Tizarah and Tade Company </p>
            <p>Dhaka GPO: 1000, Motijheel</p>
            <b>Dhaka, Bangladesh </b>
          </div>
          <div className="contact-information">
            <h4>Opening Hours</h4>
            <p>Saturday to Thursday : 10am – 6pm</p>
            <p className="alarm">Friday: Closed</p>
          </div>
          <div className="contact-information">
            <h4>E-mail </h4>
            <a className="contanct-link" href="mailto:omarkhaled1529@gmail.com">
              info@hafeezgroup.net
            </a>
          </div>
          <div className="contact-information">
            <h4>Phone</h4>
            <a className="contanct-link" href="tel:+8801307841529">
              <strong>Call: </strong> +8801307841529
            </a>
          </div>
        </div>
      </div>
      <div className="map-wrapper">
        <h2 className="map-heading">See Location In this map</h2>
        <div className="map-iframe-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7352.631702132476!2d90.411119!3d23.728247!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f793fd71c5%3A0xa02ca345d4b7dc26!2sGeneral%20Post%20Office%20Dhaka!5e1!3m2!1sen!2sbd!4v1718447455425!5m2!1sen!2sbd"
            style={{ border: "0px", width: "100%", height: "100%" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <AppFooter />
    </>
  );
};

export default ContactUsPage;
