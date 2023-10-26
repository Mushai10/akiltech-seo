import React, { useEffect } from "react";
import Focus from "./Focus";
import Values from "./Values";
import Vision from "./Vision";
import Mission from "./Mission";
import AkilCall from "../commons/AkilCall";

const About = () => {
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
                  <h2>About Us</h2>
                  <p>
                    We are a top software development company that offers
                    top-rated Software Development Services due to our team of
                    skilled top software developers, professionals, key business
                    insights, and a dedicated working process
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--  Hero area End -->
  <!--Intro start here--> */}
      <div className="container section-title mt-60 mb-60">
        <Vision />
        <Mission />

        <p>
          So, What is the value Akiltech’s business seeks to create?{" "}
          <large className="font-weight-bold">
            Accelerate digital innovation and transformation
          </large>
        </p>
        <p>
          How does AkilTech seek to create that value?{" "}
          <large className="font-weight-bold">
            Offering outstanding software engineering expertise{" "}
          </large>
        </p>
        <p>
          {" "}
          For Whom does the Akiltech seek to create that value?{" "}
          <large className="font-weight-bold">
            Business enterprises ,individuals and all organizations seeking
            software services.
          </large>
        </p>

        <Values />
        <Focus />
      </div>
      
      <section className="container gray-bg">
        <div className="row mt-50 mb-50 ">
          <div className="col-md cat-cap col-lg-6 text-left ">
            <h2>Love building digital products?</h2>
            <p>
              We’re always on the lookout for talented, ambitious team members.
              Get in touch to discuss opportunities.
            </p>
            <a href="apply" className="border-btn">
              Careers
            </a>
          </div>
          <div className="col-md col-lg-6 text-center text-align-center">
            <img
              src="assets/img/services/coder.jpg"
              height="200"
              width="200"
              alt=""
            />{" "}
          </div>
        </div>
      </section>
      {/* <!-- Count Down Start --> */}
      <div className="count-down-area section-padding ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9  col-md-12">
              {/* <!-- Section Tittle --> */}
              <div className="section-tittle text-center mb-60">
                <h2>Interested in discussing a project? </h2>
                <p className="mb-55">
                  We accelerate the development of tech ecosystems and help
                  founders bring their ideas to life. In doing so, we create
                  opportunities for the right people to come together to solve
                  the problems of today, and prevent the ones of tomorrow.
                </p>
                <a href="contact" className="border-btn">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Count Down End -->
  <!-- About Area  -->


  <!-- About Area End -->
  <!-- More about info --> */}
      <section
        className="container-fluid collection section-img-bg2  section-over1"
        data-background="assets/img/gallery/section_bg01.jpg"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="single-question text-center">
                {/* <!-- Video icon --> */}
                <div className="video-icon mb-40">
                  <a
                    className="popup-video btn-icon"
                    href="/" //https://www.youtube.com/watch?v=up68UAfH0d0
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
      {/* <!-- about info End --> */}
    </main>
  );
};

export default About;
