import React from 'react'


import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import Newsc from '../components/news'
import Combo from '../components/combo'

const News = () => {
  return (
    <div>
       <Combo/>
      <Sidebar/>
       <Newsc/>
     <Footer/>
       
    </div>
  )
}

export default News
