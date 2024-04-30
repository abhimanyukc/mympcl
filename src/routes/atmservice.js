import React  from 'react';
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import Atmservicec from '../components/services/Atmservicec'
import Combo from '../components/combo'






const Atmservice = () => {

  return (
   
    <div className='text-base leading-6 tracking-normal bg-white text-3d3d3d text-start'>
      <Combo/>
      <Sidebar/>
     <Atmservicec/>
     <Footer/>
    </div>
   
  )
}

export default  Atmservice
