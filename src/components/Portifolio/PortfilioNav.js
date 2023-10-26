import React from "react";

const PortifolioNav=()=>{
    return(
        <nav aria-label="Page navigation">
         <ul class="pagination pagination-lg row no-gutters justify-content-center">
             <li class="page-item col-lg-2 col-auto"><a class="page-link shadow-sm" href="#"> Home </a></li>
             <li class="page-item col-md-2 col-auto "><a class="page-link shadow-sm" href="#">Budget</a></li>
             <li class="page-item col-md-2 col-auto "><a class="page-link shadow-sm" href="#">Wallet</a></li>
             <li class="page-item col-md-2 col-auto "><a class="page-link shadow-sm active-1" href="#">Costs</a></li>
         </ul>
     </nav>
    );
}

export default PortifolioNav;