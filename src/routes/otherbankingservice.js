import React from 'react'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import  Otherbankingservicec from '../components/services/Otherbankingservicec'
import Combo from '../components/combo'





const Otherbankingservice = () => {
  return (
       

    <div className='text-base leading-6 tracking-normal bg-white text-3d3d3d text-start'>

      <Combo/>
      <Sidebar/>
     <Otherbankingservicec/>
     <Footer/>
    </div>
  )
}

export default  Otherbankingservice
