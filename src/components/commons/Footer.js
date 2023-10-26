import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-area footer-padding">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-4 col-lg-3 col-md-6 col-sm-8">
                <div className="single-footer-caption mb-50">
                  <div className="single-footer-caption mb-30">
                    <div className="footer-logo mb-35">
                      <Link to="/">
                        <img src="assets/img/logo/footer.png" alt="logo" />
                      </Link>
                    </div>
                    <div className="footer-tittle">
                      <div className="footer-pera">
                        <p>
                          To accelerate digital innovation and transformation by
                          creating software that suits diverse needs of end
                          users.
                        </p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col">
                        <p>South Africa</p>
                        <li className="number">
                          <a href="tel:+27 12 884 0084">+27 12 884 0084 </a>
                        </li>
                      </div>
                      <div className="col">
                        <p>Zimbabwe</p>
                        <li className="number">
                          <a href="tel:+263 77 892 3516">+263 77 892 3516</a>
                        </li>
                      </div>
                    </div>
                    <center>
                      {" "}
                      <div>
                        {/*<p>WhatsApp</p>
                        <li className="number">
                          <a href="https://wa.me/+27767025904?text=Hie,%20akilTech%20Inc%20">
                            +27 76 702 5904
                          </a>
  </li>*/}<a
        href="https://wa.me/+27767025904?text=Hie,%20akilTech%20Inc%20"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-whatsapp whatsapp-icon"></i>
      </a>
                      </div>
                    </center>
                  
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Navigation</h4>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/services">Services</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link to="/career">Careers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Services</h4>
                    <ul>
                      <li>
                        <Link to="/services"> Website Development</Link>
                      </li>
                      <li>
                        <Link to="/services"> Mobile Development</Link>
                      </li>
                      <li>
                        <Link to="/services"> Product Design</Link>
                      </li>
                      <li>
                        <Link to="/services"> Database Development</Link>
                      </li>
                      <li>
                        <Link to="/services">API Integration</Link>
                      </li>
                      <li>
                        <Link to="/services"> Agile Development</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                <div className="single-footer-caption mb-20">
                  <div className="footer-tittle mb-10">
                    <h4>Subscribe newsletter</h4>
                    <p>
                      Subscribe our newsletter to get updates about our services
                      and offers.
                    </p>
                  </div>
                  {/* <!-- Form --> */}
                  <div className="footer-form mb-10">
                    <div id="mc_embed_signup">
                      <form
                        target="_blank"
                        action="#33"
                        method="get"
                        className="subscribe_form relative mail_part"
                      >
                        <input
                          type="email"
                          name="email"
                          id="newsletter-form-email"
                          placeholder="Email Address"
                          className="placeholder hide-on-focus"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = ' Email Address '"
                        />
                        <div className="form-icon">
                          <button
                            type="submit"
                            onclick="sendMail()"
                            name="submit"
                            id="newsletter-submit"
                            className="email_icon newsletter-submit button-contactForm"
                          >
                            <i className="fas fa-arrow-right"></i>
                          </button>
                        </div>
                        <div className="mt-10 info"></div>
                      </form>
                    </div>
                  </div>
                  {/* <!-- social --> */}
                  <div className="footer-social">
                    <a
                      href="https://www.facebook.com/akiltechspecialities/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/akiltech_inc/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/akiltech-incoparated"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      href="https://twitter.com/AkilTech_inc"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- footer-bottom area --> */}
        <div className="footer-bottom-area">
          <div className="container">
            <div className="footer-border">
              <div className="row">
                <div className="col-xl-12">
                  <div className="footer-copy-right text-center">
                    <p>
                      Copyright &copy;
                      {new Date().getFullYear()}
                      <Link
                        to="https://www.facebook.com/akiltechspecialities/"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        {" "}
                        AkilTech Inc.
                      </Link>
                      All rights reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
