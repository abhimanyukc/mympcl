import React from "react";
import Departmentc from "../components/departmentc";
import Footer from "../components/footer";
import Nav from "../components/nav";

const department = () => {
  return (
    <div>
      <div className="font-sans text-base leading-6 tracking-normal bg-white text-3d3d3d text-start ">
        <Nav/>

        <Departmentc />
        <Footer />
      </div>
    </div>
  );
};

export default department;
