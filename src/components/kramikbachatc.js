


import React from 'react'

function Kramikbachatc({title, subtopics}){
  
    return (
        <div className="px-4 mx-auto max-w-screen-2xl md:px-24">
          <div className='flex flex-col md:flex-row'>
            <div  className='md:w-4/5'>
              <div>
                <img
                  src="https://i.pinimg.com/736x/b6/75/cd/b675cd4ce031e6d6784038dbbb24f464.jpg"
                  alt="smsservice"
                  className="object-contain w-full rounded-md"
                />
              </div>
    
              <div className="my-6 ">
                <h1 className="mt-4 font-normal"> Any Branch Banking Service is one of our services ,which our members are highly benefited thorough out all our service centers. We provide ABBS service to our account holders throughout our branch network.</h1>
                
              </div>
            </div>
    
            <div >
              <div className="w-full py-8 pl-2 pr-8 bg-gray-100 rounded-lg shadow-md md:ml-8 md:mt-4 md:pr-24 md:pl-2 md:py-12">
                <h2 className="mb-4 text-xl font-semibold">{title}</h2>
               
              </div>
            </div>
          </div>
        </div>
      )
}

export default Kramikbachatc

