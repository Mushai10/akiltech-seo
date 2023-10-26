import React from "react";
import GraphicsPortfolio from "./GraphicsPortfolio";
import NavPort from "./Navv";
import WebsitePortifolio from "./WebsitePortifolio";
 
const Portfolio=()=>{
    return(
      <> <div className="slider-area">
      <div className="single-sliders slider-height2 d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6 col-md-6">
              
              <div className="hero-caption hero-caption2">
                <h2>Our Work</h2>
                <p>
                We have all the tech tools you need to get ahead of your competition and helping you deliver at the pace of digital. By partnering with us, your approach to working will be transformed, and we will deliver value by utilizing technology.
                  
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
<div className="container mb-5 mt-5">
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"> Websites</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Graphics</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Mobile Apps </a>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
  <WebsitePortifolio/>
</div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
</div>
    
  

</div>
</>
    );
}
export default Portfolio;
