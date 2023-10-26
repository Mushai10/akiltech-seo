import React from "react";
// import { Link } from "react-router-dom";

const TopFooter = () => {
  return (
    <section className="collection section-img-bg2 section-over1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="single-question text-center">
              {/* <!-- Video icon --> */}
              <div className="video-icon mb-40">
                <a
                  className="popup-video btn-icon"
                  href="/"
                  data-animation="bounceIn"
                  data-delay=".4s"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
              <h2
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
              >
                Digital Innovation Agency for your Business & Startup
              </h2>
              <a
                href="about"
                className="white-btn wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay=".4s"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopFooter;
