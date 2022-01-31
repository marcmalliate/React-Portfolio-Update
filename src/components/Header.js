import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <div className="page-title">
        <h1>Marcus Malliate</h1>
        <p>Full Stack Developer</p>
      </div>

      <div className="navbar">
        <a href="#about-me" class="nav-button">
          About Me
        </a>
        <a href="#my-work" class="nav-button">
          My Portfolio
        </a>
        <a href="#contact-me" class="nav-button">
          Contact
        </a>
        <a href="#resume" class="nav-button">
          Resume
        </a>
      </div>
    </header>
  );
}

export default Header;
