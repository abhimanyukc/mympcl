import React from 'react'

const Marque = () => {
  return (

    <div className='sticky  left-0 w-full max-w-screen-2xl mx-auto'>
          <div className='flex p-1 m-2 items-center '> <div className=' bg-green-800 text-xl font-bold text-white'>Notices</div>
            <marquee  className="border text-2xl bg-slate-100" behavior="scroll" direction="left">
                <ul className='flex'>
                    <li className=' mr-16 list-disc'>MovingText1</li>
                    <li className='  mr-16 list-disc'>MovingText2</li>
                    <li className='mr-16 list-disc'>MovingText3</li>
                    <li className='list-disc'>MovingText4</li>
                </ul></marquee>
            </div>
          
    </div>
  )
}

export default Marque
