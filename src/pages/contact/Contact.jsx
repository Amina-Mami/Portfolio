import "./Contact.css"; // Import your CSS file for Contact component styling
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa"; // Import icons from react-icons library

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container-fluid">
        <h1 className="section-title">Feel free to reach out!</h1>
        <div className="contact-info">
          <p className="info">
            <FaEnvelope className="icon" /> amina.mami@esprit.tn
          </p>
          <p className="info">
            <FaPhone className="icon" /> +216 93 45 46 99
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/amina-mami/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a
              href="https://github.com/Amina-Mami"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
