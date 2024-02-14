import React from 'react'
import Header from '../components/header'
import Nav from '../components/nav'
import Marque from '../components/marque'
import ContactC from '../components/contact'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'

const Contact = () => {
    return (
        <div>
            <div className='sticky top-0 left-0 z-20 w-full '>
      <Header/>
      <Nav/>
      <Marque/>
      </div>
            <Sidebar/>
            <ContactC/>
            <Footer/>
        </div>
      )
}

export default Contact
