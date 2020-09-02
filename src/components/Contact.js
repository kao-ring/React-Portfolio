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
            e-mail : <a href="mailto:kao.ring@yahoo.com"> kao.ring@yahoo.com</a>
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
