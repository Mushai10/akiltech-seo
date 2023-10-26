import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Apply2 from "./commons/Apply2";

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      {/* <!-- Hero area Start--> */}
      <div className="slider-area">
        <div className="single-sliders slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6 col-md-6">
                <div className="hero-caption hero-caption2">
                  <h2>Careers</h2>
                  <p>
                    Join a team that solves real-world problems with technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--  Hero area End --> */}
      <div className="container">
        <div className="row mt-50 mb-100">
          <div className="col-md  ">
            <h2>Make an impact across industries</h2>
            <p>
              We work with a varied range of leading and developing businesses,
              including new venturer.Our main goal is to solve for the customer
              ,not just for their happiness, but also their success.
            </p>
          </div>
          <div className="col-md align-items-center">
            <h2>Gain responsibility, fast</h2>
            <p>
              As self-managing professionals, we hold high standards for
              ourselves and for our client-centered consulting work. You will
              have the opportunity to work autonomously and on team projects to
              deliver real client value.
            </p>
          </div>
        </div>
        <div className="row mt-50 mb-50">
          <div className="col-md align-items-center">
            <h2>Solve real business problems</h2>
            <p className="text-left">
              Our aim is to build the software tools that enable clients to push
              their business to the next level. We build the software that not
              only improves, but powers our clients business.
            </p>
          </div>
          <div className="col-md  ">
            <h2>Always learning and improving</h2>
            <p>
              Embedded in our culture is our intellectual curiosity and our
              pro-active engagement in our personal and professional growth
              through continuous learning and knowledge sharing.
            </p>
          </div>
        </div>
        <div className="row mt-50 ">
          <div className="col-md text-center">
            <img
              src="assets/img/services/careerg.jpg"
              height="200"
              width="200"
              alt=""
            />
          </div>
        </div>
        <Apply2 />
      </div>

      {/* <!-- Great Stuffs End -->
  <!-- More about info --> */}
      <section
        className="collection section-img-bg2  section-over1"
        data-background="assets/img/gallery/section_bg01.jpg"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="single-question text-center">
                {/* <!-- Video icon --> */}
                <div className="video-icon mb-40">
                  <Link
                    className="popup-video btn-icon"
                    to="/" //https://www.youtube.com/watch?v=up68UAfH0d0"
                    data-animation="bounceIn"
                    data-delay=".4s"
                  >
                    <i className="fas fa-play"></i>
                  </Link>
                </div>
                <h2
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".1s"
                >
                  Digital Innovation Agency for your Business & Startup
                </h2>
                <Link
                  to="/about"
                  className="white-btn wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay=".4s"
                >
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about info End --> */}
    </main>
  );
};

export default Careers;
