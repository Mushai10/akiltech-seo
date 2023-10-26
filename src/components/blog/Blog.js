import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <div className="slider-area">
        <div className="single-sliders slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6 col-md-6">
                <div className="hero-caption hero-caption2">
                  <h2>Blog</h2>
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
      <section className="blog_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="blog_left_sidebar">
                <article className="blog_item">
                  <div className="blog_item_img">
                    <img
                      className="card-img rounded-0"
                      src="assets/img/blog/costs.jpg"
                      alt=""
                    />
                    {/* <img src="assets/img/icon/stack4.svg" alt="" /> */}
                    <a href="#f" className="blog_item_date">
                      <h3>15</h3>
                      <p>Jan</p>
                    </a>
                  </div>
                  <div className="blog_details">
                    <Link to="/website-development-cost">
                      {" "}
                      <a href="#s" className="d-inline-block">
                        <h2 className="blog-head" style={{ color: "#2d2d2d" }}>
                          How much does it cost to develop a website
                        </h2>
                      </a>
                    </Link>
                    <p>
                      No matter how small your operation, a website is essential
                      for any modern business. But how much should you budget
                      for your business website costs?
                    </p>
                  </div>
                </article>
                <article className="blog_item">
                  <div className="blog_item_img">
                    <img
                      className="card-img rounded-0"
                      src="assets/img/blog/freelance.jpg"
                      alt=""
                    />
                    <a href="#d" className="blog_item_date">
                      <h3>14</h3>
                      <p>Feb</p>
                    </a>
                  </div>
                  <div className="blog_details">
                    <Link to="/blog1">
                      {" "}
                      <a href="#j" className="d-inline-block">
                        <h2 className="blog-head" style={{ color: "#2d2d2d;" }}>
                          Hire a Freelancer or Software Development Company
                        </h2>
                      </a>
                    </Link>
                    <p>
                      “Oh, man, who should I hire: independent contractors or
                      in-house teams? Freelance vs app company: which is
                      better?” If these and other similar questions are swirling
                      in your head, remember this:
                    </p>
                  </div>
                </article>
                <nav className="blog-pagination justify-content-center d-flex">
                  <ul className="pagination">
                    <li className="page-item">
                      <a href="#r" className="page-link" aria-label="Previous">
                        <i className="ti-angle-left"></i>
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#r" className="page-link">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                      <a href="#r" className="page-link">
                        2
                      </a>
                    </li>

                    <li className="page-item">
                      <a href="#r" className="page-link" aria-label="Next">
                        <i className="ti-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget popular_post_widget">
                  <h3 className="widget_title" style={{ color: "#2d2d2d" }}>
                    Recent Post
                  </h3>

                  <div className="media post_item">
                    <img
                      style={{ width: "85px" }}
                      src="assets/img/post/post_12.jpg"
                      alt="post"
                    />

                    <div className="media-body">
                      <Link to="/blog1">
                        <h3 style={{ color: "#2d2d2d;" }}>
                          Hire a Freelancer or Software Development Company?
                        </h3>
                      </Link>
                      <p>February 14, 2022</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img
                      style={{ width: "85px" }}
                      src="assets/img/post/post_13.jpg"
                      alt="post"
                    />
                    <div className="media-body">
                      <Link to="/website-development-cost">
                        <h3 style={{ color: "#2d2d2d;" }}>
                          {" "}
                          How much does it cost to develop a website ?
                        </h3>
                      </Link>
                      <p>January 15, 2022</p>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
