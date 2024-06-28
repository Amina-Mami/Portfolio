import { Fade } from "react-reveal";
import me from "../assets/me.jpg";

// Import skill icons
import htmlIcon from "../assets/html-logo.png";
import cssIcon from "../assets/css-logo.png";
import jsIcon from "../assets/js-logo.png";
import reactIcon from "../assets/react-logo.png";
import nodeIcon from "../assets/node-logo.png";
import expressIcon from "../assets/express-logo.png";
import mongodbIcon from "../assets/mongodb-logo.png";
import bootstrapIcon from "../assets/bootstrap-logo.png";
import mysqlIcon from "../assets/mysql-logo.png";
import angularIcon from "../assets/angular-logo.png";
import springIcon from "../assets/spring.png";
import javaIcon from "../assets/java.png";
import oracleIcon from "../assets/oracle.png";

import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import About from "./About/About";

const Home = () => {
  return (
    <>
      <div className="home-container" id="home">
        <Fade bottom duration={2000} distance="40px">
          <section className="container-fluid vh-100 d-flex align-items-center justify-content-center">
            <div className="row justify-content-center w-100">
              <div className="col-md-5 d-flex flex-column justify-content-center align-items-start text-md-left text-center">
                <h1 className="display-3">Hi 🖐, I'm Amina</h1>
                <p className="lead">
                  I'm a{" "}
                  <span className="highlight">Full Stack Web Developer</span>
                </p>
                <div className="text-md-left text-center w-100">
                  <button className="cv btn btn-lg">Curriculum Vitae</button>
                </div>
              </div>
              <div className="col-md-5 d-flex justify-content-center align-items-center">
                <div className="profile-pic-container">
                  <img
                    src={me}
                    alt="me"
                    className="profilepic img-fluid rounded-circle"
                  />
                </div>
              </div>
            </div>
          </section>
        </Fade>
      </div>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <div className="container text-center">
          <h2 className="myskills mb-4">My Skills</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="row skills-container justify-content-center">
                {[
                  { src: htmlIcon, alt: "HTML" },
                  { src: cssIcon, alt: "CSS" },
                  { src: bootstrapIcon, alt: "Bootstrap" },
                  { src: reactIcon, alt: "React" },
                  { src: angularIcon, alt: "Angular" },
                  { src: jsIcon, alt: "JavaScript" },
                  { src: nodeIcon, alt: "Node.js" },
                  { src: expressIcon, alt: "Express.js" },
                  { src: javaIcon, alt: "Java" },
                  { src: springIcon, alt: "Spring" },
                  { src: mongodbIcon, alt: "MongoDB" },
                  { src: mysqlIcon, alt: "MySQL" },
                  { src: oracleIcon, alt: "Oracle" },
                ].map((skill, index) => (
                  <div
                    className="col-6 col-md-4 col-lg-2 skill-card"
                    key={index}
                  >
                    <img
                      src={skill.src}
                      alt={skill.alt}
                      className="skill-icon"
                    />
                    <p className="skill-name">{skill.alt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <About />
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <Projects />
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
