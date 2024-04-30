import React  from 'react';

import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import Combo from '../components/combo'
import Careercategory from '../components/careercategory'



const Careercategoryr = () => {

  return (

    <div>
      <div className='w-full '>
      <Combo/>
      </div>

      <Sidebar/>
    <Careercategory/>
 
     <Footer/>
       
    </div>
  )
}

export default Careercategoryr
