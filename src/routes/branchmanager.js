import React from 'react';
import Nav from '../components/nav'
import BranchManager from '../components/branchmanager'
import Footer from '../components/footer'
import Combo from '../components/combo';


const Branchmanager = () => {

  return (
 
    <div>
      <Combo/>
          <BranchManager/>
        <Footer/>
    </div>
  )
}

export default Branchmanager
