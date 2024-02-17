import React from 'react'

const Marque = () => {
  return (

    <div className='mx-auto max-w-screen-2xl'>
          <div className='flex items-center '> <div className='py-1 mb-10 text-xl font-bold text-white bg-green-800'>Notices</div>
            <marquee  className="mb-10 text-2xl border bg-slate-100" behavior="scroll" direction="left">
                <ul className='flex'>
                    <li className='mr-16 list-disc '><div className=''>गाउसहर बहुउदेस्यिय सहकारि सस्था लि  पोखरा-८,  कास्कि </div></li>
                    <li className='mr-16 list-disc '>MovingText2</li>
                    <li className='mr-16 list-disc'>MovingText3</li>
                    <li className='list-disc'>MovingText4</li>
                </ul></marquee>
            </div>
    </div>
  )
}

export default Marque