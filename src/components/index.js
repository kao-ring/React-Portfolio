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
          I'm a Columbia Engineering Boot Camp student.
        </p>
        <p className="lead">
          I'm also a sax player. I've been playing music since I was 6, started
          my career when I was 18 years old as a sax player at a big band at a
          dance hall. Since then, I've worked with artists such as Ben E. King,
          The Stylistics, Three Degrees etc. I got my first computer when I was
          25, to make music file for mobile phone company as ringtones and
          starting making some band homepages with html, making some game
          automation programs with java scripts for fun. And now I'm about to
          start a new career.
        </p>
      </div>
    </main>
  );
};

export default About;
