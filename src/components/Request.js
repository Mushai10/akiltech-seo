import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const Request = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0d64c9j",
        "template_zlg3lhl",
        form.current,
        "user_yqm0ekJM4KGkjA5VdtizZ"
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
                  <h2>Let's Talk</h2>
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
    <!-- Blog Area Start--> */}
      <div className="container card-0 justify-content-center ">
        <div className="card-body px-sm-4 px-0">
          <div className="row justify-content-center mb-5">
            <div className="col-md-10 col">
              <h3 className="font-weight-bold ml-md-0 mx-auto text-center text-sm-left">
                {" "}
                Request a Quote{" "}
              </h3>
              <p className="mt-md-4 ml-md-0 ml-2 text-center text-sm-left">
                {" "}
                Our company only provides services that ethically enrich our
                clients, provide a breathtaking user experience, and breed
                devoted customers who cannot imagine doing business with anyone
                else.
              </p>
            </div>
          </div>
          <div className="row justify-content-center round">
            <div className="col-lg-10 col-md-12 ">
              <div className="card1f shadow-lg card-1">
                <div className="card-body inner-card">
                  <form
                    // action="https://formsubmit.co/tapiwanashemushai@gmail.com"
                    // method="POST"
                    ref={form}
                    onSubmit={sendEmail}
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label for="first-name">First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="first-name"
                            name="firstName"
                            required
                            placeholder="Type your Name"
                          />{" "}
                        </div>
                        <div className="form-group">
                          {" "}
                          <label for="Mobile-Number">Mobile Number</label>{" "}
                          <input
                            type="number"
                            name="phone"
                            className="form-control"
                            id="Mobile-Number"
                            placeholder="Type your Mobile-Number"
                            required
                          />{" "}
                        </div>

                        <div className="form-group">
                          {" "}
                          <label for="time">
                            Maximum time for the project
                          </label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            id="time"
                            name="time"
                            placeholder="Enter Time period"
                            required
                          />{" "}
                        </div>
                        <div className="form-group">
                          <label for="skill">Required Technology(optional)</label>{" "}
                          <input
                            type="text"
                            name="skills"
                            className="form-control"
                            id="skill"
                            placeholder="Type your Name"
                            required
                          />{" "}
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="form-group">
                          {" "}
                          <label for="last-name">Last Name</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            id="last-name"
                            name="lastName"
                            placeholder="Type your Last Name"
                            required
                          />{" "}
                        </div>
                        <div className="form-group">
                          {" "}
                          <label for="phone">Email</label>{" "}
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            placeholder="Type your Email"
                            required
                          />{" "}
                        </div>
                        <div className="form-group">
                          {" "}
                          <label for="Evaluate Budget">
                            Evaluate Budget
                          </label>{" "}
                          <input
                            type="text"
                            name="budget"
                            required
                            className="form-control"
                            id="Evaluate Budget"
                            placeholder="Type your Budget"
                          />{" "}
                        </div>
                        <div className="form-group">
                          {" "}
                          <label for="Company-Name">Company Name</label>{" "}
                          <input
                            type="text"
                            name="company"
                            className="form-control"
                            required
                            id="Company-Name"
                            placeholder="Type your Company Name"
                          />{" "}
                        </div>
                      </div>
                    </div>
                    <div className="row  justify-content-center round">
                      <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="form-group">
                          {" "}
                          <label for="inputEmail4">Country</label>{" "}
                          <select
                            required
                            name="country"
                            className="form-control"
                          >
                            <option>South Africa</option>
                            <option>Zimbabwe</option>
                            <option>Botswana</option>
                            <option>Zambia</option>
                            <option>Namibia</option>
                            <option>Uganda</option>
                            <option>Rwanda</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="form-group ">
                          {" "}
                          <label className="" for="inputEmail4">
                            Project Type
                          </label>
                          <select
                            required
                            name="project"
                            className="form-control"
                          >
                            <option>Web Design</option>
                            <option>Wordpress </option>
                            <option>Mobile Application(iOS&Android)</option>
                            <option>Agile Software Development </option>
                            <option>UI/UX Design</option>
                            <option>Software Maintenance</option>
                            <option>Database Development</option>
                            <option>Database Design</option>
                            <option>Custom API Development</option>
                            <option>API Integration</option>
                            <option>Database Administration</option>
                          </select>{" "}
                        </div>
                      </div>
                    </div>

                    <div className="row justify-content-center">
                      <div className="col-md-12 col-lg-10 col-12">
                        <div className="form-group">
                          {" "}
                          <label for="exampleFormControlTextarea2">
                            Message
                          </label>
                          <textarea
                            className="form-control rounded-0"
                            id="exampleFormControlTextarea2"
                            rows="3"
                            name="message"
                            required
                          ></textarea>
                        </div>
                        <div className="mb-2 mt-4">
                          <div className="text-center">
                            <button type="submit" className="btn </a>">
                              <small className="font-weight-bold">
                                Request a Quote
                              </small>
                            </button>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Blog Area End --> */}
    </main>
  );
};

export default Request;
