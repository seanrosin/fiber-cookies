import React from "react";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark position-relative" style={{backgroundColor:'#fff9e1', border: "none", boxShadow: "none"}}>
      <div className="container-fluid">
        {/* Brand Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="/assets/gut_fiber_logo.png"
            alt="Cookie Logo"
            width="50"
            style={{ marginRight: "10px" }}
          />
          <img
            src="/assets/fiber_cookies.png"
            alt="FiberCookies"
            width="160"
          />
        </a>

        {/* Mobile toggler */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"
            style={{ filter: "invert(1)" }}
          ></span>

        </button>

        {/* Centered nav links */}
        <div className="collapse navbar-collapse navbar-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-itemk">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#benefits">Benefits</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Buy Now</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
