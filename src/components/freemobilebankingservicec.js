import React from 'react'
import { MdDateRange } from 'react-icons/md'

const Freemobilebankingservicec = ({ title, subtopics }) => {
  return (
    <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
    <div className='flex flex-col md:flex-row'>
      <div  className='md:w-4/5'>
        <div>
          <img
            src="https://i.pinimg.com/564x/b1/95/d8/b195d8b789fc19b9668b0f65b649c38b.jpg"
            alt="mobilebanking"
            className="object-contain w-full rounded-md"
          />
        </div>

        <div className="mt-6 ">
          <div className="mt-2 "> GauSahar Nepal Coop Ltd , has been providing its share holders and members free mobile banking services for couple of years now. We have providing our valuable share holders and customers mobile banking service under the name 'Sahara Smart' where fund transfer is easily available to most of the banking and financial institutes under the network and also provides with all the utiliy payment with all standards.</div>
          <div className="mt-2">
            <p className='font-medium '>
               In a Collaboration with websoft technology we are able to launch smart app for GauSahar Sahkari Cooperative limited
            </p>
             
             <div className='mt-4'>
             <img src='https://i.pinimg.com/564x/56/1c/78/561c78110fb57685f0d6d7193607cfcf.jpg' alt="mobile app" />
             </div>
            
           

          </div>
        </div>
      </div>

      <div >
        <div className="w-full py-8 pl-2 pr-8 bg-gray-100 rounded-lg shadow-md md:ml-8 md:mt-4 md:pr-24 md:pl-2 md:py-12">
          <h2 className="mb-4 text-xl font-semibold">{title}</h2>
          {subtopics.map((subtopic, index) => (
            <div key={index} className="flex items-center mb-2">
              <div className="flex flex-col">
                <div className="text-sm">{subtopic.text}</div>
                <div className="flex items-center">
                  {/* Using MdDateRange icon component */}
                  <MdDateRange className="w-6 h-6 mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm">{subtopic.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Freemobilebankingservicec
