// import React from "react";
//import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div
      style={{ backgroundColor: "#2d2d2d" }}
      className="header-area header-transparent"
    >
      <div className="main-header header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              {/* <div className="menu-wrapper d-flex align-items-center justify-content-between">
                <div className="left-content d-flex align-items-center"> */}
              {/* <!-- Main-menu --> */}
              <nav className="navbar navbar-expand-lg navbar-dark ">
                <Link className="navbar-brand" to="/">
                  <img src="assets/img/logo/logo.png" alt="" />
                </Link>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse  navbar-collapse "
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  id="navbarNav"
                >
                  <ul className="navbar-nav" id="navigation">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/services">
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/career">
                        Careers
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/akiltech-portfolio">
                        Our Work
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* </div> */}
              {/* <!-- Button --> */}
              {/* <div className="buttons">
                  <ul>
                    <li className="button-header">
                      <Link to="/request" className="header-btn2 border-btn2">
                        Get Free Quote
                      </Link>
                    </li>
                  </ul>
                </div> */}
              {/* </div> */}
            </div>
          </div>
          {/* <!-- Mobile Menu --> */}
          {/* <div className="col-12">
            <div className="mobile_menu d-block d-lg-none"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
