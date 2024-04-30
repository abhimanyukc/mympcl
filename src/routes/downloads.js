import React from 'react';

import Footer from "../components/footer";
import Downloadsc from "../components/downloadsc";
import Combo from '../components/combo';


const Downloads = () => {

  return (
  
    <div>
      <div className="font-sans text-base leading-6 tracking-normal bg-white text-3d3d3d text-start ">
        <Combo/>
        <Downloadsc />
        <Footer />
      </div>
    </div>
  );
};

export default Downloads;
