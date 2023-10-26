import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Apply2 from "./commons/Apply2";
import AkilCall from "./commons/AkilCall";
import FrequentQuestions from "./commons/FrequentQuestions";
import TopFooter from "./commons/TopFooter";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      {/* <!-- Slider Area Start--> */}
      <div className="slider-area">
        <div className="single-sliders slider-height d-flex align-items-center">
          <div className="container position-relative">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6 col-md-6">
                <div className="hero-caption">
                  <h1>We code your Dream to Reality</h1>

                  <p>
                    Explore the potential of digital transformation in your
                    industry by hiring top Tech talent with indepth knowledge to
                    work on your project
                  </p>
                  <Link to="/services" className="btn hero-btn">
                    Our Services
                  </Link>
                </div>
              </div>
              {/* <!-- hero shape 2--> */}
              <div className="hero-shape">
                <img src="assets/img/hero/hero-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="  d-flex ">
          <div className="container position-relative">
            <div className="row ">
              <div className="col-xl-5 col-lg-6 col-md-6  mouse_scroll  "></div>
              {/* <!-- hero shape 2--> */}
              <div className="">
                <div className="header-social text-white ">
                  <a className="text-white" href="#a">
                    Follow us on:
                  </a>
                  <a
                    href="https://www.facebook.com/akiltechspecialities/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="text-white fab fa-facebook-square"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/akiltech_inc/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className=" text-white fab fa-instagram-square"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/akiltech-incoparated"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="text-white fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://twitter.com/AkilTech_inc"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className=" text-white fab fa-twitter-square"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- social --> */}
      </div>

      {/* <!-- Slider Area End -->
    <!-- Services Area Start --> */}
      <section className="categories-area section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-6 col-md-10">
              {/* <!-- Section Tittle --> */}
              <div className="section-tittle text-center mb-25">
                <span>What We Do</span>
                <h2>Solving software problems </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-20">
                <div className="cat-icon">
                  <img src="assets/img/icon/custom.png" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services">Software Development & Mantainance</a>
                  </h5>
                  <p>
                    AkilTech specializes in creating software solutions for
                    business and government departments to achieve operational
                    excellence .We help funded startups and ISVs envision
                    selling SaaS, mobile products, launch MVP in 1-4 months and
                    consistently grow it to a full-blown product with major
                    releases every 2-4 weeks.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-20">
                <div className="cat-icon">
                  <img src="assets/img/icon/mobile.png" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services">Mobile Application Development</a>
                  </h5>
                  <p>
                    AkilTech creates high performing, digitally transformative
                    and feature-packed native mobile applications for Android
                    and iOS devices.if you’re looking to hire mobile app
                    developers for a custom mobile application development
                    solution, AkilTech has the experts to deliver your mobile
                    app.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-20">
                <div className="cat-icon">
                  <img src="assets/img/icon/ux.png" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services">UI/UX Design</a>
                  </h5>
                  <p>
                    Our experts design and create digital experiences that are
                    purposeful and enjoyable for end-users, as well as for our
                    clients.Your users are our first priority, and our minimum
                    goal is a client’s maximum satisfaction. At AkilTech, we
                    focus on what’s really important for you, and will we make
                    sure that all requested and required features are discussed
                    and delivered.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-20">
                <div className="cat-icon">
                  <img src="assets/img/icon/webservices.png" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services">Website Development & Maintenance</a>
                  </h5>
                  <p>
                    We offer variety of website design , development and
                    maintenance services, from creating mobile web development
                    solutions and responsive website designs, to building custom
                    e-commerce and intranet experiences using the latest and
                    proven web technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-20">
                <div className="cat-icon">
                  <img src="assets/img/icon/api.png" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services">Custom API Integration & Development</a>
                  </h5>
                  <p>
                    Streamline your business and connect your services with
                    custom API development and integration for your platform or
                    app. Our expert developers will ensure your business is
                    integrated to critical information and data using secure API
                    communication
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-20">
                <div className="cat-icon">
                  <img src="assets/img/icon/ecom1.png" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services">E-Commerce Development </a>
                  </h5>
                  <p>
                    AkilTech offers a full-suite of e-commerce development
                    services including integrations, migrations and of course,
                    the building of results driven online stores. We also
                    provide ongoing 24x7 support and maintenance, to help keep
                    your site open for business and able to generate revenue at
                    all times.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p>
            Regardless of the size of the project,our expert software engineers,
            developers and UI/UX designers will be there to guide you through
            your needs.We provide our services in different languages
            ,frameworks ,tools,databases , libraries .We believe in customizing
            each project based on special feature requirements and market
            conditions at competitive rates that's within your budget.
          </p>
          <a href="services" className="btn mt-20">
            Read More
          </a>
        </div>
        
      </section>
     
      {/* <!-- Services Area End -->
    <!---Start a project--> */}
      <div
        style={{ marginTop: "0" }}
        className="count-down-area section-padding border-bottom"
      >
        {/* <!--End Your Project-->
      <!-- About Area  --> */}
        <section className="about-area2 section-padding gray-bg">
          <div className="count-down-area section-padding border-bottom">
            <div className="container-fluid gray-bg">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-9  col-md-12">
                  {/* <!-- Section Tittle --> */}
                  <div className="section-tittle text-center mb-60">
                    <h2>Interested in discussing a project? </h2>
                    <p className="mb-55">
                      We accelerate the development of tech ecosystems and help
                      founders bring their ideas to life. In doing so, we create
                      opportunities for the right people to come together to
                      solve the problems of today, and prevent the ones of
                      tomorrow.
                    </p>
                    <a href="request" className="border-btn">
                      Get in Touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-5 col-lg-5 col-md-10">
                {/* <!-- about-img --> */}
                <div className="about-img">
                  <img src="assets/img/gallery/about1.jpg" alt="" />
                </div>
                <div className="ratting-point">
                  <div className="features-ratting">
                    <img src="assets/img/icon/notification.svg" alt="" />
                  </div>
                  <div className="features-caption">
                    <h3>Data Insights</h3>
                    <p>we create relevant and engaging content</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-10">
                <div className="about-caption mb-50">
                  {/* <!-- Section Tittle --> */}
                  <div className="section-tittle mb-50">
                    <h2>
                      Build a presence <br />
                      on digital platforms
                    </h2>
                  </div>
                  <div className="single-offers mb-20">
                    <div className="offers-cap">
                      <img src="assets/img/icon/notification1.svg" alt="" />
                      <h3>
                        <a href="#digital_marketing">Digital Marketing</a>
                      </h3>
                      <p>
                        Build your company’s online presence with a responsive
                        website suitable for all devices. Drive organic traffic
                        on keywords that matter to your business
                      </p>
                    </div>
                  </div>
                  <div className="single-offers">
                    <div className="offers-cap">
                      <img src="assets/img/icon/notification1.svg" alt="" />
                      <h3>
                        <a href="#google">Google Analytics</a>
                      </h3>
                      <p>
                        We implement Google Analytics on your website or app in
                        order to gather and measure critical data flows by your
                        website visitors to gain a deeper understanding of user
                        behavior and experience.
                      </p>
                    </div>
                  </div>
                  <a href="services" className="btn mt-20">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        
        {/* <!-- About Area End -->
      <!--Services Area 2 --> */}
        <section className="services-area2 section-padding2">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-5 col-lg-5 col-md-6 col-sm-11">
                {/* <!-- Section Tittle --> */}
                <div className="section-tittle section-tittle2 mb-55">
                  <span>Industries We Serve</span>
                  <h2>Software Development services </h2>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-6 col-sm-11">
                {/* <!-- Section Tittle --> */}
                <div className="section-tittle section-tittle2 mb-55">
                  <p>
                    No matter the business, AkilTech has you covered with
                    industry compliant solutions, customized to your company’s
                    specific needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-cat mb-30 text-center">
                  <div className="cat-icon">
                    <img src="assets/img/icon/stack1.svg" alt="" />
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <a href="#r">Industries & Manufacturing</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-cat mb-30 text-center">
                  <div className="cat-icon">
                    <img src="assets/img/icon/stack2.svg" alt="" />
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <a href="#r">Education & Health</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-cat mb-30 text-center">
                  <div className="cat-icon">
                    <img src="assets/img/icon/stack3.svg" alt="" />
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <a href="#r">Retail & Ecommerce</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-cat mb-30 text-center">
                  <div className="cat-icon">
                    <img src="assets/img/icon/stack4.svg" alt="" />
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <a href="#e">Travel & Hospitality</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="single-cat mb-30 text-center">
                    <div className="cat-icon">
                      <img src="assets/img/icon/stack1.svg" alt="" />
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="#s">Media and Entertainment</a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="single-cat mb-30 text-center">
                    <div className="cat-icon">
                      <img src="assets/img/icon/stack2.svg" alt="" />
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="#a">Public Services & FinTech</a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="single-cat mb-30 text-center">
                    <div className="cat-icon">
                      <img src="assets/img/icon/stack3.svg" alt="" />
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="#a"> Software as a Service & SMEs</a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="single-cat mb-30 text-center">
                    <div className="cat-icon">
                      <img src="assets/img/icon/stack4.svg" alt="" />
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="#a">Agriculture & Real Estate</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-12">
                  <div className="section-tittle section-tittle3 text-center pt-35">
                    <p>
                      Need a Technology support or to discuss a project ?{" "}
                      <a href="request">Get Started Now</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Apply2 />
      </div>
      

      <TopFooter />
    </main>
  );
};

export default Home;
