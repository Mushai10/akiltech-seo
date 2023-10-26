import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const E404 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="slider-area">
        <div className="single-sliders slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl col-lg col-md-6">
                <div className="hero-caption hero-caption2 text-center">
                  <h1 style={{ color: "#f48a00" }}>Oops !</h1>
                  <h4 class="text-white">404 - page not found</h4>
                  <p>
                    The page you are looking for might have been removed <br />
                    had it's name changed or is temporarily unavailable.
                  </p>
                  <Link to="/" className="btn hero-btn mt-40">
                    Go To Home Page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default E404;
