import React from "react";
import { Link } from "react-router-dom";

const Apply2 = () => {
  return (
    <div className="row mt-50 mb-30 ">
      <div className="col-md cat-cap col-lg-12 text-center align-items-center ">
        <h2>Love building digital products?</h2>
        <p>
          We’re always on the lookout for talented, ambitious team members. Get
          in touch to discuss opportunities.
        </p>
        <Link to="/apply" className="border-btn" style={{ color: "#f48a00" }}>
          Apply
        </Link>
      </div>
    </div>
  );
};

export default Apply2;
