import React from "react";
import "../styles/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="main__nav">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <MenuIcon />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="d-flex ms-auto">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active_class"
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active_class"
                  to="/about"
                >
                  About
                </NavLink>
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active_class"
                  to="/gallary"
                >
                  Gallary
                </NavLink>
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active_class"
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
