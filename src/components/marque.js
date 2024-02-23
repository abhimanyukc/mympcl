import React from 'react'

const Marque = () => {
  return (

    <div className='p-1 px-4 mx-auto bg-white select-none max-w-screen-2xl md:px-24 md:pb-4'>
          <div className='flex items-center '> <div className='p-1 font-serif text-xl font-bold text-white bg-indigo-800 cursor-text'>Notices</div>
            <marquee  className="text-2xl text-black border cursor-pointer " behavior="scroll" direction="left">
                <ul className='flex'>
                    <li className='mr-16 list-disc '><div className=''>गाउसहर बहुउदेस्यिय सहकारि सस्था लि  पोखरा-८,  कास्कि </div></li>
                    <li className='mr-16 list-disc'><div>Text2</div></li>
                    <li className='mr-16 list-disc'><div>Text3</div></li>
                    <li className='list-disc'><div>Text4</div></li>
                </ul></marquee>
            </div>
    </div>
  )
}

export default Marque
