import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/commons/Header";
import Footer from "./components/commons/Footer";
import Careers from "./components/Careers";
import E404 from "./components/commons/404";
import About from "./components/about/About";
import Contact from "./components/Contact";
import Quotation from "./components/Quotation";
import Service from "./components/Service";
import Blog from "./components/blog/Blog";
import Blog1 from "./components/blog/Blog1";
import Blog2 from "./components/blog/Blog2";
import Home from "./components/Home";
import Request from "./components/Request";
import Applications from "./components/Applications";
import Portfolio from "./components/Portifolio/Portfolio";
import Graphics from "./components/Portifolio/GraphicsPortfolio";
import Website from "./components/Portifolio/WebsitePortifolio";
import PortRouter from "./components/Portifolio/PortRouter";

// import ScrollToTop from "./components/scrollTop/index";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Service />} />
        <Route path="contact" element={<Contact />} />
        <Route path="request" element={<Request />} />
        <Route path="akiltech-portifolio" element={<PortRouter />} />
        <Route path="graphics-portifolio" element={<Graphics />} />
        <Route path="website-portifolio" element={<Website />} />
        <Route path="quotation" element={<Quotation />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog1" element={<Blog1 />} />
        <Route path="website-development-cost" element={<Blog2 />} />
        <Route path="career" element={<Careers />} />
        <Route path="akiltech-portfolio" element={<Portfolio />} />
        <Route path="apply" element={<Applications />} />
        <Route path="*" element={<E404 />} />
        {/* </ScrollToTop> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
