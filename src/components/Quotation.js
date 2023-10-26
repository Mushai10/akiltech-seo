import React, { useEffect } from "react";
const Quotation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="form__container">
      <div className="title__container">
        <h1>Example UI container</h1>
        <p>Follow the 4 simple steps to complete your mapping</p>
      </div>
      <div className="body__container">
        <div className="left__container">
          <div className="side__titles">
            <div className="title__name">
              <h3>Your name</h3>
              <p>Enter & press next</p>
            </div>
            <div className="title__name">
              <h3>Desctibes</h3>
              <p>select & press next</p>
            </div>
            <div className="title__name">
              <h3>Services</h3>
              <p>select & press next</p>
            </div>
            <div className="title__name">
              <h3>Budget</h3>
              <p>Select & press next</p>
            </div>
            <div className="title__name">
              <h3>Complete</h3>
              <p>Finally press submit</p>
            </div>
          </div>
          <div className="progress__bar__container">
            <ul>
              <li className="active" id="icon1">
                <ion-icon name="person-outline"></ion-icon>
              </li>
              <li id="icon2">
                <ion-icon name="book-outline"></ion-icon>
              </li>
              <li id="icon3">
                <ion-icon name="layers-outline"></ion-icon>
              </li>
              <li id="icon4">
                <ion-icon name="pricetag-outline"></ion-icon>
              </li>
              <li id="icon5">
                <ion-icon name="mail-outline"></ion-icon>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotation;
