import React from "react";
import "../styles/Project.css";
import headshot1 from "../assets/images/headshot1.jpg";
import Picture3 from "../assets/images/Picture3.png";
import Picture1 from "../assets/images/Picture1.png";
import Picture2 from "../assets/images/Picture2.png";

// We use JSX curly braces to evaluate the style object on the JSX tag

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
          you've come to the right place. This is the space where you can check
          out all the projects I've been working on and learn a little bit more
          about me. I hold a bachelors degree in Business and have studied
          abroad at Greenwich University in London. I love travelling and so far
          I've been lucky enough to visit 32 countries. I'm hoping to reach 50
          before my 50th birthday.
          <br></br>
          Currently, I'm spending my days expanding my knowledge of
          web-development and coding at Adelaide University. I'm excited to put
          my skills into practice.{" "}
        </p>

        <img src={headshot1} alt="profile" />
      </div>

      <div id="my-work">
        <h2>Portfolio</h2>
      </div>
      <section className="my-work">
        <div className="my-work-card">
          <h3>Marvelous Memes</h3>
          <p>
            This project uses two third party APIs and is responsive, clean and
            has a mobile first design.. Click{" "}
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
            <img src={Picture3} alt="place-holder" />
          </a>
        </div>

        <div className="my-work-card">
          <h3>This is a Weather Dashboard</h3>
          <p>
            It uses the Open Weather one call API. Click{" "}
            <a
              href="https://github.com/marcmalliate/Weather-Dashboard"
              target="_blank"
            >
              here
            </a>{" "}
            for GitHub repo, click image for deployed website.
          </p>
          <a href="Insert" target="_blank" rel="noopener noreferrer">
            <img src={Picture1} alt="place-holder" />
          </a>
        </div>

        <div className="my-work-card">
          <h3>This is an Online Book Club</h3>
          <p>
            It uses handlebars.js and is deployed using Heroku. Click{" "}
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
            <label for="phone-number">Phone number:</label>
            <input
              className="text-input"
              id="phone-number"
              type="text"
              placeholder="Phone number"
            />
          </p>
          <p>
            <label for="query">Query:</label>
            <textarea
              className="text-input"
              id="query"
              placeholder="Please write your query here"
            ></textarea>
          </p>
          <p>
            <button>Submit</button>
          </p>
        </form>
      </div>

      <div id="resume">
        <h2>Resume</h2>
        <a href=" download https://www.canva.com/design/DAEuDjeIKic/bRHahalgvOHhHSpHBUDSjg/view?utm_content=DAEuDjeIKic&utm_campaign=designshare&utm_medium=embeds&utm_source=link"></a>
      </div>
    </section>
  );
}

export default Section;
