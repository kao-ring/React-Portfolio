import React from "react";
import "../App.css";
import Pdf from "./assets/Kaori_Caplan_Resume.pdf";

const Contact = () => {
  return (
    <main className="container">
      <div className="jumbotron bg-white m-3">
        <h2>Contacts</h2>

        <hr />

        <ul>
          <li>
            e-mail :{" "}
            <a href="mailto:kaori.caplan@gmail.com">kaori.caplan@gmail.com</a>
          </li>
          <br />
          <li>
            github :{" "}
            <a
              href="https://github.com/kao-ring"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/kao-ring
            </a>
          </li>
          <br />
          <li>
            LinkedIn :{" "}
            <a
              href="https://www.linkedin.com/in/kaori-caplan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/kaori-caplan/
            </a>
          </li>
          <br />
          <li>
            phone : <a href="tel:+1-917-663-0289"> +1-917-663-0289</a>
          </li>
          <br />
          <li>
            <a href={Pdf} target="_blank" rel="noopener noreferrer">
              Kaori Caplan's Resume
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contact;
