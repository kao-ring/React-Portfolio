import React, { useState } from "react";
import "../App.css";
import works from "./works.json";

const Portfolio = () => {
  const [worksState, setWorksState] = useState(works);

  console.log(worksState);

  return (
    <main className="container">
      <div className="jumbotron bg-white m-2" id="work">
        <h2>My Works</h2>
        <hr />
      </div>
      {/* card*/}
      {worksState.map((work) => (
        <div class="card mb-3 ">
          <div class="row no-gutters">
            <div class="col-md-6 my-auto">
              <img src={work.image} class="card-img" alt="..." />
            </div>
            <div class="col-md-6">
              <div class="card-body ">
                <h4 class="card-title text-center">{work.name} </h4>
                <hr />
                <div class="card-text">Used technologies </div>
                <p> {work.used_tech}</p>

                <div class="card-text">Discription </div>
                <p> {work.discription}</p>
              </div>

              <div className="text-center">
                <a
                  href={work.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="img/icons/github_bk.png"
                    alt="GitHub"
                    class="icon"
                  />
                </a>
                <a
                  href={work.deployed_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={work.deployed_icon}
                    alt="deployed_icon"
                    class="icon-h"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Portfolio;
