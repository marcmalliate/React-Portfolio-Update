import React from "react";
import "../styles/Project.css";
import headshot1 from "../assets/images/headshot1.jpg";
import Picture3 from "../assets/images/Picture3.png";
import Picture1 from "../assets/images/Picture1.png";
import Picture2 from "../assets/images/Picture2.png";
import Picture4 from "../assets/images/Picture4.png";
import Picture5 from "../assets/images/Picture5.png";
import Picture6 from "../assets/images/Picture6.png";

function Section() {
  return (
    <section>
      <div className="quote">
        <h1>"Life begins at the edge of your comfort zone."</h1>
        <p>So let's get un-comfy!</p>
      </div>

      <div id="about-me">
        <h2>About Me</h2>
        <p>
          Heya, If you're looking for Marcus' web-development portfolio then
          you've come to the right place.
          <br></br>
          <br></br>
          This is the space where you can check out all the projects I've been
          working on and learn a little bit more about me.
          <br></br>I hold a bachelors degree in Business and have studied abroad
          at Greenwich University in London.
          <br></br>
          <br></br>I love travelling and so far I've been lucky enough to visit
          32 countries. I'm hoping to reach 50 before my 50th birthday.
          <br></br>
          <br></br>
          Currently, I'm spending my days expanding my knowledge of
          web-development and coding at Adelaide University. <br></br>
          I'm excited to put my skills into practice.{" "}
        </p>
        <br></br>
        <p>
          <img src={headshot1} alt="profile" />
        </p>
      </div>

      <div id="my-work">
        <h2>My Portfolio</h2>
      </div>

      <section className="my-work">
        <div className="my-work-card">
          <h3>Marvelous Memes</h3>
          <p>
            This project uses two third party APIs and is responsive, clean and
            has a mobile first design.. <br></br>
            Click{" "}
            <a
              href="https://github.com/marcmalliate/Collaborative-Project"
              target="_blank"
            >
              here
            </a>{" "}
            for GitHub repo, click image for deployed website.
          </p>
          <a
            href="https://marcmalliate.github.io/Collaborative-Project/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Picture1} alt="place-holder" />
          </a>
        </div>

        <div className="my-work-card">
          <h3>This is a Weather Dashboard</h3>
          <p>
            It uses the Open Weather one call API.
            <br></br>
            Click{" "}
            <a
              href="https://github.com/marcmalliate/Weather-Dashboard"
              target="_blank"
            >
              here
            </a>{" "}
            for GitHub repo, click image for deployed website.
          </p>
          <a
            href="https://marcmalliate.github.io/Weather-Dashboard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Picture3} alt="place-holder" />
          </a>
        </div>

        <div className="my-work-card">
          <h3>This is an Online Book Club</h3>
          <p>
            It uses handlebars.js and is deployed using Heroku.
            <br></br>
            Click{" "}
            <a
              href="https://github.com/marcmalliate/The-Book-Was-Better"
              target="_blank"
            >
              here
            </a>{" "}
            for GitHub repo, click image for deployed website.
          </p>
          <a
            href="https://the-book-was-better-book-club.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Picture2} alt="place-holder" />
          </a>
        </div>

        <div className="my-work-card">
          <h3>Daily Work Scheduler</h3>
          <p>
            The assignment was to a simple calendar application that allows a
            user to save events for each hour of the day by modifying starter
            code.
            <br></br>
            Click{" "}
            <a
              href="https://github.com/marcmalliate/Third-Party-APIs"
              target="_blank"
            >
              here
            </a>{" "}
            for GitHub repo, click image for deployed website.
          </p>
          <a
            href="https://marcmalliate.github.io/Third-Party-APIs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Picture6} alt="place-holder" />
          </a>
        </div>

        <div className="my-work-card">
          <h3>Code Quiz</h3>
          <p>
            This website has been designed to run a quiz about coding. It has
            been built using HTML, Css and Javascript.
            <br></br>
            Click{" "}
            <a href="https://github.com/marcmalliate/Code-Quiz" target="_blank">
              here
            </a>{" "}
            for GitHub repo, click image for deployed website.
          </p>
          <a
            href=" https://marcmalliate.github.io/Password-Generator/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Picture5} alt="place-holder" />
          </a>
        </div>

        <div className="my-work-card">
          <h3>Marc's Awesome Text Editor</h3>
          <p>
            Single page app that meets PWA criteria and uses a service worker.
            <br></br>
            Click{" "}
            <a href="https://github.com/marcmalliate/MATE" target="_blank">
              here
            </a>{" "}
            for GitHub repo, click image for deployed website.
          </p>
          <a
            href="https://marcs-awesome-text-editor.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Picture4} alt="place-holder" />
          </a>
        </div>
      </section>

      <div id="contact-me">
        <h2>Contact Me</h2>
        <p>Get in touch and lets work on a project together...</p>

        <form className="contact-form">
          <p>
            <label for="username">Name:</label>
            <input
              className="text-input"
              id="username"
              type="text"
              placeholder="Contact name"
            />
          </p>
          <p>
            <label for="email">E-mail:</label>
            <input
              className="text-input"
              id="email"
              type="text"
              placeholder="me@example.com"
            />
          </p>
          <p>
            <label for="query">Message:</label>
            <textarea
              className="text-input"
              id="query"
              placeholder="What would you like to say?"
            ></textarea>
          </p>
          <p>
            <button>Send</button>
          </p>
        </form>
      </div>

      <div id="resume">
        <h2>View My Resume</h2>
        <p>
          <a href="https://www.canva.com/design/DAEuDjeIKic/bRHahalgvOHhHSpHBUDSjg/view?utm_content=DAEuDjeIKic&utm_campaign=designshare&utm_medium=embeds&utm_source=link">
            {" "}
            <button>Resume</button>{" "}
          </a>
        </p>
      </div>
    </section>
  );
}

export default Section;
