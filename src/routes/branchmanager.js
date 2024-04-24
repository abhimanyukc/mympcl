import React, { useState, useEffect } from 'react';
import Nav from '../components/nav'
import BranchManager from '../components/branchmanager'
import Footer from '../components/footer'


const Branchmanager = () => {

  return (
 
    <div>
      <Nav/>
          <BranchManager/>
        <Footer/>
    </div>
  )
}

export default Branchmanager
