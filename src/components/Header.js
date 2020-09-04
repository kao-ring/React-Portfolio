import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

const Header = () => {
  const location = useLocation();
  return (
    <header className="sticky-top">
      <div className="row d-flex align-items-center ">
        <h1 className="col-md-5  p-2 m-0 border-warning text-light text-center">
          <a href="/" className="nav-link text-light">
            Kaori Caplan
          </a>
        </h1>
        <div className="col-md-2 "></div>

        <div className="col-md-5 m-0 ">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link
              to="/"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className={
                location.pathname === "/portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
