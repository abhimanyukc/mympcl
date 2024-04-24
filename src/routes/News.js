import React from 'react';


import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import Newsc from '../components/news'
import Nav from '../components/nav'


const News = () => {
  return (
    
    <div>
        <Nav/>
      <Sidebar/>
       <Newsc/>
     <Footer/> 
    </div>
  )
}

export default News
