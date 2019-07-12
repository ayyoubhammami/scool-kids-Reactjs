import React from "react";

import Googlemap from './googleMap';

const Footer = () => {
  return (
      <div>
  <div className='row'>

      <div className='col-md-4'>
      <Googlemap  />
      </div>
      
      <div  className=' col-md-3 offset-md-2' >
      <h1>You Welcome</h1>

      </div>
      
      </div>
  </div>
  );
}

export default Footer;