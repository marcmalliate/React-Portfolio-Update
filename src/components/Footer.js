import React from "react";
import "../styles/Footer.css";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";

// We use JSX curly braces to evaluate the style object on the JSX tag

function Footer() {
  return (
    <footer>
      <div>
        <p> I look forward to working with you in the future! </p>
      </div>
      <div id="icons">
        <a
          href="https://github.com/marcmalliate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="place-holder" class="img" />
        </a>

        <a
          href="https://www.linkedin.com/in/marcus-malliat%C3%A9-965b5945/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="place-holder" class="img" />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
