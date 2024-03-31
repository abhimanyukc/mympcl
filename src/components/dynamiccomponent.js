import React from 'react'

const Dynamiccomponentc = ({title}) => {
    
  return (
    <div className='px-8 mx-auto opacity-80 bg-gradient-to-r from-green-800 to-green-500 max-w-screen-2xl md:px-20'> 

    <div className='flex items-center px-4 py-10 opacity-100 '>
     <div className='mr-2 text-white'>Home</div>
     <div className='mr-2 text-white'> /</div>
     <div className='text-white '>  {title}</div>
    </div>   
    </div>
  )
}
export default Dynamiccomponentc
