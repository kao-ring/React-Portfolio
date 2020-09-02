import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="fixed-bottom p-2 text-center bg-dark text-white">
      <small>Copyright &copy; Kaori Caplan </small>
      <a
        href="http://www.linkedin.com/in/kaori-nakajima-64750072/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="img/icons/linkedin.png" alt="LinkedIn" className="icon" />
      </a>
      <a
        href="http://github.com/kao-ring"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="img/icons/github.png" alt="GitHub" className="icon" />
      </a>
      <a
        href="http://www.facebook.com/kaori.k.nakajima.7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="img/icons/facebook.png" alt="FaceBook" className="icon" />
      </a>
      <a
        href="http://www.youtube.com/channel/UCwFNHvQxnZfsfUm8V9B98kw?view_as=subscriber"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="img/icons/youtube.png" alt="YouTube" className="icon" />
      </a>
    </footer>
  );
};

export default Footer;
