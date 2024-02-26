import React from 'react'
import Departmentc from '../components/departmentc'
import Footer from '../components/footer'
import Nav from '../components/nav'
import Header from '../components/header'

const department = () => {
  return (
    <div>
          <div className='font-sans text-base leading-6 tracking-normal bg-white text-3d3d3d text-start '>

      
<div className='sticky top-0 left-0 z-50 w-full bg-white '>
<Header/>
<Nav/>
</div>
<Departmentc/>
<Footer/>
</div>
    </div>
  )
}

export default department
