import React from 'react'

import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import Careerc from '../components/careerc'
import Combo from '../components/combo'
import Nav from '../components/nav'


const Careers = () => {
  return (
    <div>
      <div className='sticky top-0 left-0 z-20 w-full '>
      <Nav/>
      </div>

      <Sidebar/>
     <Careerc/>
 
     <Footer/>
       
    </div>
  )
}

export default Careers
