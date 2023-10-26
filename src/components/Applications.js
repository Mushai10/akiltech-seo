import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
// import { Link } from "react-router-dom";

const Applications = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hszkz6c",
        "careers_9gi00cn",
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
                  <h2>Join Us</h2>
                  <p>
                    We offer outstanding software engineering expertise coupled
                    with user interface/experience designers. This makes
                    AkilTech a one-stop shop for digital product development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="conta">
        <form
          // action="https://getform.io/f/6cf05784-c0aa-4139-ac34-c1b7cd6eb69f"
          // method="POST"
          // enctype="multipart/form-data"
          ref={form}
          onSubmit={sendEmail}
        >
          <p className="h4 fw-bold text-center pt-4 mb-5">
            Submit your details{" "}
          </p>
          <div className="row">
            <div className="col-md-6 mb-4 ">
              {" "}
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="First Name"
                required
              />{" "}
            </div>
            <div className="col-md-6 mb-4 ">
              {" "}
              <input
                className="form-control"
                type="text"
                name="surname"
                placeholder="Last Name"
                required
              />{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-4">
              {" "}
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="form-control"
                required
              />{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-4">
              {" "}
              <input
                type="phone"
                name="phone"
                placeholder="Phone"
                className="form-control"
                required
              />{" "}
            </div>
          </div>
          {/* <div className="row mb-3">
            <div className="col-12 mb-4">
              {" "}
              <input required type="file" id="myfile" name="myfile" />
              <br />{" "}
            </div>
          </div> */}

          <div className="row">
            <div className="col-12 mb-4">
              <div className="btn btn-primary d-block">
                <input type="Submit" value="submit" />
              </div>
            </div>
          </div>
          <p className="text-center textmuted"> Follow us on social media</p>
          <div className="pb-4">
            <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
              <li className="icon me-3 m-2">
                <a
                  href="https://www.facebook.com/akiltechspecialities"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="fab fa-facebook"></span>
                </a>
              </li>
              <li className="icon me-3 m-2">
                <a
                  href="https://www.instagram.com/akiltech_inc/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="fab fa-instagram"></span>
                </a>
              </li>
              <li className="icon me-3 m-2 ">
                <a
                  href="https://twitter.com/AkilTech_inc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="fab fa-twitter"></span>
                </a>
              </li>
              <li className="icon m-2">
                <a
                  href="https://www.linkedin.com/company/akiltech-incoparated"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="fab fa-linkedin-in"></span>
                </a>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Applications;
