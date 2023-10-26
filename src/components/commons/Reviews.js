import React from 'react'
import {Helmet} from "react-helmet";
  
function Reviews() {
  
  return (
    <div className='reviews'>
    <h1>What Our Clients Say</h1>
    <Helmet>
    <script defer async src='https://cdn.trustindex.io/loader.js?afc800f870ee73401d56aba588'></script>
    </Helmet>
    </div>
  );
}
  
export default Reviews;