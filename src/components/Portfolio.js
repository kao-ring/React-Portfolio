import React from "react";
import "../App.css";

const Portfolio = () => {
  return (
    <main className="container">
      <div className="jumbotron bg-white m-2" id="work">
        <h2>My work as a developer</h2>

        <hr />
      </div>
      <div className="row">
        <div className="col-sm-6 my-3 mx-auto">
          <div className="app-banner">
            <a
              href="https://note-taker-express-kc.herokuapp.com/"
              target="_blank"
            >
              <img
                src="img/heroku-logo-solid-gradient.png"
                alt="Heroku"
                className="icon-h"
              />
            </a>
            Note Taker
            <a href="https://github.com/kao-ring/Note-Taker" target="_blank">
              <img
                src="img/GitHub-Mark-Light-120px-plus.png"
                alt="GitHub"
                className="icon"
              />
            </a>
          </div>
          <a
            href="https://note-taker-express-kc.herokuapp.com/"
            target="_blank"
          >
            <img
              src="img/note_taker.png"
              alt="note_taker"
              className="app-img"
            />
          </a>
        </div>
        <div className="col-sm-6 my-3 mx-auto">
          <div className="app-banner">
            <a href="https://eat-da-burger-kiki.herokuapp.com/" target="_blank">
              <img
                src="img/heroku-logo-solid-gradient.png"
                alt="Heroku"
                className="icon-h"
              />
            </a>
            Eat Da Burger!
            <a
              href="https://github.com/kao-ring/Eat-Da-Burger-"
              target="_blank"
            >
              <img
                src="img/GitHub-Mark-Light-120px-plus.png"
                alt="GitHub"
                className="icon"
              />
            </a>
          </div>
          <a href="https://eat-da-burger-kiki.herokuapp.com/" target="_blank">
            <img
              src="img/burger_app.png"
              alt="Eat-Da-urger"
              className="app-img"
            />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 my-3 mx-auto">
          <div className="app-banner">
            Team Project
            <a href="https://github.com/nata-stelmakh/PawsCity" target="_blank">
              <img
                src="img/GitHub-Mark-Light-120px-plus.png"
                alt="GitHub"
                className="icon"
              />
            </a>
          </div>
          <a href="https://nata-stelmakh.github.io/PawsCity/" target="_blank">
            <img
              src="img/kiki_Paws City.png"
              alt="PawsCity"
              className="app-img"
            />
          </a>
        </div>
        <div className="col-sm-6 my-3 mx-auto">
          <div className="app-banner">
            Web App
            <a
              href="https://github.com/kao-ring/Weather-Dashboard"
              target="_blank"
            >
              <img
                src="img/GitHub-Mark-Light-120px-plus.png"
                alt="GitHub"
                className="icon"
              />
            </a>
          </div>
          <a
            href="https://kao-ring.github.io/Weather-Dashboard/"
            target="_blank"
          >
            <img
              src="img/kiki_Weather Dashboard.png"
              alt="WeatherDashboard"
              className="app-img"
            />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 my-3 mx-auto">
          <div className="app-banner">
            Web App
            <a
              href="https://github.com/kao-ring/Work-Day-Scheduler"
              target="_blank"
            >
              <img
                src="img/GitHub-Mark-Light-120px-plus.png"
                alt="GitHub"
                className="icon"
              />
            </a>
          </div>
          <a
            href="https://kao-ring.github.io/Work-Day-Scheduler/"
            target="_blank"
          >
            <img
              src="img/kiki_Work Day Scheduler.png"
              alt="Scheduler"
              className="app-img"
            />
          </a>
        </div>
        <div className="col-sm-6 my-3 mx-auto">
          <div className="app-banner">
            Web App
            <a
              href="https://github.com/kao-ring/Code-Quiz---HW04"
              target="_blank"
            >
              <img
                src="img/GitHub-Mark-Light-120px-plus.png"
                alt="GitHub"
                className="icon"
              />
            </a>
          </div>
          <a
            href="https://kao-ring.github.io/Code-Quiz---HW04/"
            target="_blank"
          >
            <img
              src="img/kiki_Coding Quiz.png"
              alt="CodingQuiz"
              className="app-img"
            />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
