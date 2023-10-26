import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import AkilCall from "./commons/AkilCall";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hszkz6c",
        "template_dc9u1kq",
        form.current,
        "xWTySIGTZlwyG8LVa"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <main>
      {/* <!-- Hero area Start--> */}
      <div className="slider-area">
        <div className="single-sliders slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6 col-md-6">
                
                <div className="hero-caption hero-caption2">
                  <h2>Contact Us</h2>
                  <p>
                    Developing or adapting software can be daunting, that is why
                    we are here to help you develop software that fits your
                    requirements. Contact us today to discuss your project with
                    one of our experts.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* <!--  Hero area End --> */}
      <div className="container text-center">
        <div className="card12">
          <h3 className="mb-5">Hi,there</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="text-center">
                <div className="mt-2">
                  {" "}
                  <img
                    src="https://i.imgur.com/2tx0muB.png"
                    width="50"
                    height="50"
                    alt="imag"
                  />{" "}
                </div>
                <h5 className="mt-3">Let's Partner</h5>{" "}
                <p>
                  Contact us today for a personalized quote on your next project
                  – or just pop in for a great cup of coffee and a chat!
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <div className="mt-2">
                  {" "}
                  <img
                    src="https://i.imgur.com/6NHM9Xy.png"
                    width="50"
                    height="50"
                    alt="imag"
                  />{" "}
                </div>
                <h5 className="mt-3">Digital Future</h5>
                <p>
                  {" "}
                  No matter which industry sector you belong to, we understand
                  the challenges your organization and your customers face. We
                  partner with you on your journey to Digital Transformation, so
                  that you can effectively and efficiently solve your customers’
                  problems, today and in the future.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <div className="mt-2">
                  {" "}
                  <img
                    src="https://i.imgur.com/9qaHVGj.png"
                    width="50"
                    height="50"
                    alt="issues"
                  />{" "}
                </div>
                <h5 className="mt-3">Other issues</h5>{" "}
                <p>
                  We’d like to hear from you. If you have any questions,
                  comments or feedback, please let us know.Fill the form below .
                </p>
              </div>
            </div>
          </div>
          <div className="button mt-5">
            {" "}
            <button className="btn hero-btn">
              <Link to="/request">Get Free Quote </Link>
              <i className="fa fa-long-arrow-right ml-2 mt-1"></i>
            </button>{" "}
          </div>
        </div>
      </div>
      {/* <!-- Contact Area Start --> */}
      <section className="container contact-section section-padding">
        <div className="row">
          <div className="col-12">
            <h2 className="contact-title">Let's Talk.But You First.</h2>
          </div>
          <div className="col-lg-8">
            <form
              className="form-contact contact_form"
              // action="https://formcarry.com/s/au90RT-4cC"
              // method="POST"
              // accept-charset="UTF-8"
              // id="contactForm"
              // novalidate="novalidate"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <input
                      name="subject"
                      className="form-control"
                      id="subject"
                      type="text"
                      onFocus="this.placeholder = ''"
                      onBlur="this.placeholder = 'Enter Subject'"
                      placeholder="Enter Subject"
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      name="name"
                      className="form-control valid"
                      id="name"
                      type="text"
                      onFocus="this.placeholder = ''"
                      onBlur="this.placeholder = 'Enter your name'"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      name="email"
                      className="form-control valid"
                      id="email"
                      type="email"
                      onFocus="this.placeholder = ''"
                      onBlur="this.placeholder = 'Enter email address'"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control w-100"
                      id="message"
                      cols="30"
                      rows="9"
                      onFocus="this.placeholder = ''"
                      onBlur="this.placeholder = 'Enter Message'"
                      placeholder=" Enter Message"
                      required
                    ></textarea>
                  </div>
                  <input type="hidden" name="_gotcha" />
                </div>
              </div>
              <div className="form-group mt-3">
                <button
                  // onclick="window.location.href = 'contact.html';"
                  type="submit"
                  className="button button-contactForm boxed-btn"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-3 offset-lg-1">
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-home"></i>
              </span>
              <div className="media-body">
                <h3>South Africa, Zimbabwe.</h3>
                <p>Pretoria ,Harare</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-tablet"></i>
              </span>
              <div className="media-body">
                <h3>
                  <small>South Africa</small>
                  <br />
                  +27 12 884 0084
                  <br />
                  <br />
                  <small>Zimbabwe</small>
                  <br />
                  +263 77 892 3516
                </h3>
                <br />
                <h3>
                  <small>WhatsApp</small>
                  <br />
                  +27 76 702 5904
                </h3>
              </div>
            </div>

            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-email"></i>
              </span>
              <div className="media-body">
                <h3>admin@akiltech.co</h3>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact Area End --> */}
    </main>
  );
};

export default Contact;
