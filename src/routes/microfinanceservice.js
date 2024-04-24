import React  from 'react';
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import MicrofinanceServicec from '../components/services/MicrofinanceServicec'
import Combo from '../components/combo'






const Microfinanceservice = () => {

  return (
       
 
    <div className='text-base leading-6 tracking-normal bg-white text-3d3d3d text-start'>
      <Combo/>
      <Sidebar/>
     <MicrofinanceServicec/>
     <Footer/>
    </div>

  )
}

export default  Microfinanceservice
