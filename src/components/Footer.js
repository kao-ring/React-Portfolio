import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="fixed-bottom p-2 text-center bg-dark text-white">
      <small>Copyright &copy; Kaori Caplan </small>
      <a href="http://www.linkedin.com/in/kaori-nakajima-64750072/">
        <img src="img/LI-In-Bug.png" alt="LinkedIn" className="icon" />
      </a>
      <a
        href="http://github.com/kao-ring"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="img/GitHub-Mark-Light-120px-plus.png"
          alt="GitHub"
          className="icon"
        />
      </a>
      <a
        href="http://www.facebook.com/kaori.k.nakajima.7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="img/icons8-facebook-48.png" alt="FaceBook" className="icon" />
      </a>
      <a
        href="http://www.youtube.com/channel/UCwFNHvQxnZfsfUm8V9B98kw?view_as=subscriber"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="img/youtube_social_circle_white.png"
          alt="YouTube"
          className="icon"
        />
      </a>
    </footer>
  );
};

export default Footer;
