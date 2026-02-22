import React, { useEffect, useState } from "react";
import logo_img from "../../../assets/logo.svg";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useVisualSettings } from "../../../../context/VisualSettingsContext.jsx";

const Navbar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");
  const { fullLogo, miniLogo } = useVisualSettings();

  useEffect(() => {
    // Only enable scroll spy on homepage
    if (location.pathname !== "/") {
      setActiveSection(""); // clear active section
      return;
    }

    // Default active section when page loads
    const hash = location.hash.slice(1); // get the hash from the URL
    if (hash) {
      setActiveSection(hash); // If there's a hash in the URL, set the corresponding section as active
    } else {
      setActiveSection("home"); // Default to "home" section when no hash exists
    }

    const sections = ["home", "about", "society", "company"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set active section based on which one is in view
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section); // Observe each section
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const isActive = (id) => {
    return activeSection === id ? "active" : "";
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-white shadow">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={fullLogo || logo_img}
            alt="logo img"
            height="70%"
            width="70%"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <HashLink
                className={`nav-link ${isActive("home")}`}
                smooth
                to="/#home"
              >
                Home
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                className={`nav-link ${isActive("about")}`}
                smooth
                to="/#about"
              >
                About Us
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                className={`nav-link ${isActive("society")}`}
                smooth
                to="/#society"
              >
                Society
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                className={`nav-link ${isActive("company")}`}
                smooth
                to="/#company"
              >
                Company
              </HashLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                href="https://portal.adz10x.com/login"
              >
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://adz10x.in/register"
                target="_blank"
                className="btn navbar-btn"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
