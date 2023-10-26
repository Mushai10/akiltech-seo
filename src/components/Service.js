import React, { useEffect } from "react";
import AkilCall from "./commons/AkilCall";

const Service = () => {
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
                  <h2>Services</h2>
                  <p>
                    We offer outstanding software engineering expertise coupled
                    with user interface/experience designers. This makes
                    AkilTech a one-stop-shop for digital product development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--  Hero area End -->
    <!-- Custom services strated here --> */}
      <div className="container categories-area ">
        <div className="section-tittle text-center mt-35 mb-35">
          <span>Our Services</span>
        </div>
        <div className="row mt-50 mb-100 cont-center">
          <div className="col-md  ">
            <img
              src="assets/img/services/web.jpg"
              height="200"
              width="200"
              alt=""
            />
          </div>
          <div className="col-md align-items-center  cont-center">
            <h2>FrontEnd Web Development</h2>
            <p className="text-left">
              We design and build beautiful, user-intuitive frontend experiences
              around your unique business needs.
            </p>
            <a href="services" className="border-btn">
              FullStack Development
            </a>
            <a href="services" className="border-btn">
              Blogs
            </a>
            <a href="services" className="border-btn">
              Wordpress
            </a>
            <a href="services" className="border-btn">
              Website Development
            </a>
            <a href="services" className="border-btn">
              E-Commerce{" "}
            </a>
          </div>
        </div>
        <div className="row mt-50 mb-150">
          <div className="col-md align-items-center text-sm-center cont-center">
            <h2>Backend Development</h2>
            <p className="text-left">
              AkilTech specializes in complex backend developments using
              standards-based code to get applications to market quickly.We also
              develop custom APIs for your business and organizations.
            </p>
            <a href="services" className="border-btn">
              Database Design
            </a>
            <a href="services" className="border-btn">
              Database Integration
            </a>
            <a href="services" className="border-btn">
              Database Development
            </a>
            <a href="services" className="border-btn">
              {" "}
              Custom API Development
            </a>
            <a href="services" className="border-btn">
              Database Management
            </a>
            <a href="services" className="border-btn">
              Database Migration
            </a>
            <a href="services" className="border-btn">
              Database Maintenance
            </a>
          </div>
          <div className="col-md text-md-center text-center text-sm-center cont-center">
            <img
              className="mt-80"
              src="assets/img/services/database.png"
              height="200"
              width="200"
              alt=""
            />
          </div>
        </div>

        <div className="row mt-50 mb-150">
          <div className="col-md cont-center ">
            <img
              src="assets/img/services/coder.jpg"
              height="200"
              width="200"
              alt=""
            />
          </div>
          <div className="col-md cat-cap  text-center cont-center ">
            <h2>Mobile App Development</h2>
            <p className="text-left">
              Our expertise in mobile app development puts incredible
              functionality, world-className user experience and powerful
              features into your customers’ palms.
            </p>
            <a href="services" className="border-btn">
              IOs Development
            </a>
            <a href="services" className="border-btn">
              Android development
            </a>
          </div>
        </div>

        <div className="row mt-50 mb-30">
          <div className="col-md cat-cap text-center cont-center ">
            <h2>Product Design</h2>
            <p className="text-left">
             Transform your brand with our professional graphic design services. Whether you are looking for logos, business
cards, brochures or promotional items, our professional
graphic designers can create the right designs to meet
your business objectives
            </p>
            <a href="services" className="border-btn">
              UI/UX Design
            </a>
            <a href="services" className="border-btn">
              Website Design
            </a>
            <a href="services" className="border-btn">
              App Design
            </a>
            <a href="services" className="border-btn">
              Flyers
            </a>
            <a href="services" className="border-btn">
              Logo
            </a>
            <a href="services" className="border-btn">
              Business Cards
            </a>
          </div>
          <div className="col-md text-md-center text-center cont-center">
            <img
              className="mx-auto d-block"
              src="assets/img/services/web.jpg"
              height="200"
              width="200"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <!--  Custom services end here -->
    <!-- Services Area Start --> */}
    
      <section className="categories-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <img src="assets/img/icon/custom.png" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services">Custom Software Development</a>
                  </h5>
                  <p>
                    AkilTech builds cleverly integrated custom software
                    solutions that enable your business to grow. We solve custom
                    software development problems for funded startups and
                    enterprises.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <img src="assets/img/icon/web-maintenance.png" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services">Software Maintenance and Support.</a>
                  </h5>
                  <p>
                    The software maintenance cycle never ends. AkilTech will
                    continuously manage, support, improve and scale your
                    software product.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <img src="assets/img/icon/agile.png" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services">Agile Software Development.</a>
                  </h5>
                  <p>
                    We build better software, faster. Delivering innovative
                    platforms to startups and enterprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
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
              <div className="single-cat text-center mb-50">
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
              <div className="single-cat text-center mb-50">
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
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <img src="assets/img/icon/ddatabase.png" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services">Database Development </a>
                  </h5>
                  <p>
                    We design data-driven web ,mobile,internal and more
                    applications ranging from small projects to enterprise-grade
                    systems applications that allow users to access data
                    securely at any time of the day, from any device. From
                    planning to implementing the database design in accordance
                    with your business application model, we provide a good
                    database application that lets you manage complex data
                    handling more proficiently.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <img src="assets/img/icon/database.png" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services">Custom Database Development</a>
                  </h5>
                  <p>
                    Get custom database development solutions that are
                    tailor-made to address your unique business requirements.
                    Let us help you revamp your existing database system to a
                    more structured, secure, and sophisticated solution to
                    enhance your business workflow and integrate all data
                    sources seamlessly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <img src="assets/img/icon/migration.png" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services">Database Migration </a>
                  </h5>
                  <p>
                    We help businesses optimize their IT landscape with
                    cost-effective applications to modernize and upgrade with
                    database migration to improve work efficiency, cost
                    reduction, and secure management. With our organized
                    database migration, we migrate your business data,
                    applications, and processes from one database to another
                    more suitable for your growing business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Services Area End -->
    <!--Digital Services Area 2 --> */}

      <div className="container mt-3 mb-3 ">
        <div className="mt-2 mb-10 ml-10  heading ">
          {" "}
          <h2>Let’s Talk Digital Marketing</h2>{" "}
        </div>
        <div className="row mt-1 g-4 mb-50">
          <div className="col-md-4">
            <div className="card p-2">
              <div className="email mt-1">
                {" "}
                <span>
                  <span className="bodrd">Email</span> Marketing
                </span>
                <div className="dummytext mt-1">
                  {" "}
                  <p>
                    Our professional email marketers help your business stay
                    top-of-mind with your prospects and existing customers by
                    sending custom email newsletters every month. Our team
                    handles the design, copywriting, and your customer list
                    segmentation.
                  </p>{" "}
                </div>
              </div>
              <div className="d-flex flex row align-items-center mr-2 mt-2">
                <div className="icons">
                  {" "}
                  <i className="fa fa-check-circle"></i>{" "}
                  <span>Email Newsletter setup</span>{" "}
                </div>
                <div className="icons">
                  {" "}
                  <i className="fa fa-check-circle"></i>{" "}
                  <span>Email Sequence</span>{" "}
                </div>
                <div className="icons">
                  {" "}
                  <i className="fa fa-check-circle"></i>{" "}
                  <span>Email Monitization</span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-2">
              <div className="email mt-1">
                {" "}
                <span>
                  <span className="bodrd1">Paid </span>Advertising
                </span>
                <div className="dummytext mt-1">
                  {" "}
                  <p>
                    Paid advertising is an incredibly powerful digital marketing
                    strategy to increase your conversions and maximize your ROI.
                    Data-driven PPC management services create valuable
                    opportunities to connect your brand with customers and
                    improve your profitability.
                  </p>{" "}
                </div>
              </div>
              <div className="d-flex flex row align-items-center mr-2 mt-2">
                <div className="icons1">
                  {" "}
                  <i className="fa fa-check-circle"></i> <span>Google Ads</span>{" "}
                </div>
                <div className="icons1">
                  {" "}
                  <i className="fa fa-check-circle"></i>{" "}
                  <span>Facebook Ads</span>{" "}
                </div>
                <div className="icons1">
                  {" "}
                  <i className="fa fa-check-circle"></i>{" "}
                  <span>Linkedin & Twitter Ads</span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-2">
              <div className="email mt-1">
                {" "}
                <span>
                  <span className="bodrd5">SEO</span>
                </span>
                <div className="dummytext mt-1">
                  {" "}
                  <p>
                    if your business needs to generate more website traffic,
                    leads, and sales, you need SEO services. SEO generates
                    higher keyword rankings on Google, resulting in more
                    qualified website traffic, leads, and sales from the web
                  </p>{" "}
                </div>
              </div>
              <div className="d-flex flex row align-items-center mr-2 mt-2">
                <div className="icons2">
                  {" "}
                  <i className="fa fa-check-circle"></i> <span>SEO audits</span>{" "}
                </div>
                <div className="icons2">
                  {" "}
                  <i className="fa fa-check-circle"></i>{" "}
                  <span>On-Page audits</span>{" "}
                </div>
                <div className="icons2">
                  {" "}
                  <i className="fa fa-check-circle"></i>{" "}
                  <span>Off-Page audits</span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-30">
            <div className="card p-2">
              <div className="email mt-1">
                {" "}
                <span>
                  <span className="bodrd2">Content</span> Marketing
                </span>
                <div className="dummytext mt-1">
                  {" "}
                  <p>
                    We provide you with content that drives results. You’ll get
                    easy-to-understand monthly reports on the status and results
                    of all your content campaigns and how they’re affecting your
                    bottom line and branding efforts.
                  </p>{" "}
                </div>
              </div>
              <div className="d-flex flex row align-items-center mr-2 mt-2">
                <div className="icons3">
                  {" "}
                  <i className="fa fa-check-circle"></i>{" "}
                  <span>Article & Written Content</span>
                </div>
                <div className="icons3">
                  {" "}
                  <i className="fa fa-check-circle"></i>{" "}
                  <span>Video Content</span>{" "}
                </div>
                <div className="icons3">
                  {" "}
                  <i className="fa fa-check-circle"></i>{" "}
                  <span>Infographics</span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-30">
            <div className="card p-2">
              <div className="email mt-1">
                {" "}
                <span>
                  <span className="bodrd3">Display</span> Advertising
                </span>
                <div className="dummytext mt-1">
                  {" "}
                  <p>
                    With our comprehensive display ad services ,we delve into
                    your business goals and develop a campaign strategy
                    leveraging the types of display ads that make sense for your
                    business.
                  </p>{" "}
                </div>
              </div>
              <div className="d-flex flex row align-items-center mr-2 mt-2">
                <div className="icons4">
                  {" "}
                  <i className="fa fa-check-circle"></i>{" "}
                  <span>Analytical Analysis</span>{" "}
                </div>
                <div className="icons4">
                  {" "}
                  <i className="fa fa-check-circle"></i>{" "}
                  <span>A/B Testing</span>{" "}
                </div>
                <div className="icons4">
                  {" "}
                  <i className="fa fa-check-circle"></i>{" "}
                  <span>Conversion Optimization</span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-30">
            <div className="card p-2">
              <div className="email mt-1">
                {" "}
                <span>
                  <span className="bodrd4">Social</span> Media
                </span>
                <div className="dummytext mt-1">
                  {" "}
                  <p>
                    Social media channels have become a major source of news and
                    information in today’s internet-driven world. But that’s not
                    all. Social media presence is also a vital factor in search
                    rankings and digital marketing.
                  </p>{" "}
                </div>
              </div>
              <div className="d-flex flex row align-items-center mr-2 mt-2">
                <div className="icons5">
                  {" "}
                  <i className="fa fa-check-circle"></i>{" "}
                  <span>Content Creation</span>{" "}
                </div>
                <div className="icons5">
                  {" "}
                  <i className="fa fa-check-circle"></i>{" "}
                  <span>Community Management</span>{" "}
                </div>
                <div className="icons5">
                  {" "}
                  <i className="fa fa-check-circle"></i>{" "}
                  <span>Social Media Growth</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Digital Services End Area 2 -->
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
                  No matter the business, AkilTech has you covered with industry
                  compliant solutions, customized to your company’s specific
                  needs.
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
                    <a href="#a">Industries & Manufacturing</a>
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
                    <a href="#e">Education & Health</a>
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
                    <a href="#e">Retail & E-commerce</a>
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
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-cat mb-30 text-center">
                <div className="cat-icon">
                  <img src="assets/img/icon/stack2.svg" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="#r">Entertainment & Sport</a>
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
                    <a href="#u">Public Service & FinTech</a>
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
                    <a href="#w"> Software as a Service & SMEs</a>
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
                  Need a Technology support?{" "}
                  <a href="request">Get Started Now</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Services Area 2 -->
    <!--? More about info --> */}
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
                  <a
                    className="popup-video btn-icon"
                    href="/" //https://www.youtube.com/watch?v=up68UAfH0d0"
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

export default Service;
