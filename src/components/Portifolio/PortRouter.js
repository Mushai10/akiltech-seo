import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Graphics from "./GraphicsPortfolio";
import Websites from "./WebsitePortifolio";

import Navv from "./Navv";

export const PortRouter = () => {
  return (
    <BrowserRouter>
      <div className="trendsCover">
        <Navv />
        <Routes>
          <Route path="/" component={Websites} exact />
          <Route path="/graphics-portifolio" component={Graphics} exact />
       
          
         </Routes>
      </div>
    </BrowserRouter>
  );
};

export default PortRouter;
