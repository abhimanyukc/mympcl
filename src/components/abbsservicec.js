import React from 'react'
import { MdDateRange } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

const Abbsservicec = ({title, subtopics}) => {
      const [t, i18n] = useTranslation("global");
      
    return (
        <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
          <div className='flex flex-col md:flex-row'>
            <div  className='md:w-4/5'>
              <div>
                <img
                  src="https://i.pinimg.com/564x/2a/30/27/2a30274cf6bee5e6661d79063e178a8b.jpg"
                  alt="anybranchbankingservice"
                  className="object-contain w-full rounded-md"
                />
              </div>
              
              <div className="my-6 ">
                <h1 className="mt-4 font-normal"> {t('absService.message')}</h1>
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

export default Abbsservicec
