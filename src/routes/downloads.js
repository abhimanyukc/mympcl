import React from "react";

import Footer from "../components/footer";
import Combo from "../components/combo";
import Downloadsc from "../components/downloadsc";

const Downloads = () => {
  return (
    <div>
      <div className="font-sans text-base leading-6 tracking-normal bg-white text-3d3d3d text-start ">
        <Combo />

        <Downloadsc />
        <Footer />
      </div>
    </div>
  );
};

export default Downloads;
