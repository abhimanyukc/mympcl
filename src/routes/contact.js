import React from 'react'
import ContactC from '../components/contact'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'
import Combo from '../components/combo'

const Contact = () => {
    return (
        <div>
           <Combo/>
            <Sidebar/>
            <ContactC/>
            <Footer/>
        </div>
      )
}

export default Contact
