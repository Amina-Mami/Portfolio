import { useState, useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import "./header.css";

const Header = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to) => {
    setActive(to);
  };

  return (
    <header className="fixed-top">
      <nav>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onSetActive={handleSetActive}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onSetActive={handleSetActive}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onSetActive={handleSetActive}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onSetActive={handleSetActive}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onSetActive={handleSetActive}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
