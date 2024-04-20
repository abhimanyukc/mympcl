import React from 'react'
import ContactC from '../components/contact'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'
import Nav from '../components/nav'

const Contact = () => {
    return (
        <div>
           
           <Nav/>

            <Sidebar/>
            <ContactC/>
            <Footer/>
        </div>
      )
}

export default Contact
