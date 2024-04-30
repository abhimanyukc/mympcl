import React  from 'react';
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import Bankingservices from '../components/services/Bankingservicec'
import Combo from '../components/combo'





const Bankingservicesr = () => {
  return (
    
    <div className='text-base leading-6 tracking-normal bg-white text-3d3d3d text-start'> 
      <Combo/>
      <Sidebar/>
      <Bankingservices/>
     <Footer/>
    </div>
  )
}

export default Bankingservicesr
