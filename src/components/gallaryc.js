import React from 'react'

const Gallaryc = () => {
  return (
    <div className='flex px-8 mx-auto max-w-screen-2xl md:px-20'>
      
      <div>

        <div className='flex flex-col flex-wrap md:flex-row'>
             
             <div className='flex flex-col p-2 mt-4 mr-2 bg-gray-100 border-b-2 shadow-lg'>
                <img src='https://pixels.com/assets/images/products/framedPrints002.jpg' alt='image1' className='m-2 '/>
                <div className='flex flex-row m-2'><div className='mr-2 font-bold '>1</div>  <div>Balbalikalai nyano kapda bitaran, mechi nagar-4  bahundagi</div></div>
             </div>

             <div className='flex flex-col p-2 mt-4 mr-2 bg-gray-100 border-b-2 shadow-lg'>
                <img src='https://pixels.com/assets/images/products/framedPrints002.jpg' alt='image1' className='m-2 '/>
                <div className='flex flex-row m-2'><div className='mr-2 font-bold'>2</div>  <div>Balbalikalai nyano kapda bitaran, mechi nagar-4  bahundagi</div></div>
             </div>

             <div className='flex flex-col p-2 mt-4 mr-2 bg-gray-100 border-b-2 shadow-lg'>
                <img src='https://pixels.com/assets/images/products/framedPrints002.jpg' alt='image1' className='m-2 '/>
                <div className='flex flex-row m-2'><div className='mr-2 font-bold ' >3</div>  <div>Balbalikalai nyano kapda bitaran, mechi nagar-4  bahundagi</div></div>
             </div>

             <div className='flex flex-col p-2 mt-4 bg-gray-100 border-b-2 shadow-lg'>
                <img src='https://pixels.com/assets/images/products/framedPrints002.jpg' alt='image1' className='m-2 '/>
                <div className='flex flex-row m-2'><div className='mr-2 font-bold '>4</div>  <div>Balbalikalai nyano kapda bitaran, mechi nagar-4  bahundagi</div></div>
             </div>
          
        </div>
      </div>
    </div>
  )
}

export default Gallaryc
