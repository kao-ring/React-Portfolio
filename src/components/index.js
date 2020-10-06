import React from "react";
import "../App.css";

const About = () => {
  return (
    <main className="container">
      <div className="jumbotron bg-white m-3">
        <h2>About Me</h2>

        <hr />

        <figure>
          <img
            src="img/kiki_01.jpeg"
            alt="Kaori Caplan"
            className="float-left pr-3 pb-2 photo"
          />
        </figure>

        <p className="lead">
          Hello, I'm Kaori Caplan. <br />
          I'm a Professional Full Stack Developer.
        </p>
        <p className="lead">
          Professional Full Stack Developer with music background experience in
          game/music programming with JavaScript and MIDI. Recently earned a
          certificate in full stack development from the Columbia Engineering in
          New York, with newly developed skills in MERN stack, CSS and
          responsive web design. Currently focused on server-side development
          using Javascript frameworks.
        </p>
      </div>
    </main>
  );
};

export default About;
