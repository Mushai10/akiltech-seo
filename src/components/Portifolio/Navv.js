import React from "react";
import "./Navv.css";
import { Link } from "react-router-dom";

function NavPort() {
  return (
    <div>
      <div className="navNews">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <Link to="/website-portifolio">
                <li className="nav-item">
                  <a className="nav-link" href="#eeeee">
                    Websites
                  </a>
                </li>
              </Link>

             {/* <Link to="/graphics-portifolio">
                <li className="nav-item">
                  <a className="nav-link " href="#ee">
                    Graphics Design
                  </a>
                </li>
              </Link>
              <Link to="/trending">
                <li className="nav-item active">
                  <a className="nav-link" href="#eee">
                    Trending <span className="sr-only">(current)</span>
                  </a>
                </li>
              </Link>*/}
            </ul>
            <form className="form-inline my-2 my-lg-0">
            <Link to="/request">
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Request A Quote
              </button>
              </Link>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavPort;
