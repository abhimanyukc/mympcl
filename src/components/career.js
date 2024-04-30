import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaArrowRight, FaUser   } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Careertest = () => {
     const [t, i18n] =  useTranslation('global')
    
  return (
    <div  className='px-8 mx-auto max-w-screen-2xl '>
        <div className='mt-8 mb-4'>
        <div className='flex font-bold text-black '><div className='mr-2 text-2xl border-b-2 border-red-500 md:text-4xl'>{t('careerTest.message')}</div> <div className='text-2xl md:text-4xl'>{t('careerTest1.message')}</div></div>
        </div>


         <div className='flex flex-wrap '>
        <Link to="/career/softwareEngineer" className='flex flex-col flex-wrap w-3/4 px-2 py-2 mb-6 bg-gray-300 border-b shadow-md md:py-6 md:px-4 md:ml-10 md:w-96 rounded-xl'>
            <div className='mr-2 text-primary '>{t('careerTest2.message')}</div>
            <div className=' text-danger'>
                <div>{t('careerTest8.message')}</div>
               <div className=' text-nowrap'> {t('careerTest3.message')}</div>
            </div>
            <div className='flex items-center'> 
            <div className='text-primary '><FaUser/></div>
            <div className='ml-1 font-thin'>{t('careerTest4.message')}</div>
            <div className='ml-1 font-thin '>{t('careerTest5.message')}</div>
            </div>
            <div className='flex items-center w-24 p-1 px-4 mt-1 ml-2 text-white bg-primary'>
                <div>{t('careerTest6.message')}</div>
                <FaArrowRight className=' hover:scale-100 hover:ml-1'/>
            </div>
        </Link>

        <Link to ='/career/bankTeller' className='flex flex-col flex-wrap w-3/4 px-2 py-2 mb-6 bg-gray-300 border-b shadow-md md:py-6 md:px-4 md:ml-10 md:w-96 rounded-xl'>
            <div className='mr-2 text-primary '>{t('careerTest7.message')}</div>
            <div className=' text-danger'>
                <div>{t('careerTest8.message')}</div>
               <div className=' text-nowrap'> {t('careerTest9.message')}</div>
            </div>
            <div className='flex items-center'> 
            <div className='text-primary '><FaUser/></div>
            <div className='ml-1 font-thin'>{t('careerTest10.message')}</div>
            <div className='ml-1 font-thin '>{t('careerTest11.message')}</div>
            </div>
            <div className='flex items-center w-24 p-1 px-4 mt-1 ml-2 text-white bg-primary'>
                <div>{t('careerTest12.message')}</div>
                <FaArrowRight className=' hover:scale-100 hover:ml-1'/>
            </div>
        </Link>

        <Link to ='/career/customerServiceRepresentative' className='flex flex-col flex-wrap w-3/4 px-2 py-2 mb-6 bg-gray-300 border-b shadow-md md:py-6 md:px-4 md:ml-10 md:w-96 rounded-xl'>
            <div className='mr-2 text-primary '>{t('careerTest13.message')}</div>
            <div className=' text-danger'>
                <div>{t('careerTest14.message')}</div>
               <div className=' text-nowrap'> {t('careerTest15.message')}</div>
            </div>
            <div className='flex items-center'> 
            <div className='text-primary '><FaUser/></div>
            <div className='ml-1 font-thin'>{t('careerTest16.message')}</div>
            <div className='ml-1 font-thin '>{t('careerTest17.message')}</div>
            </div>
            <div className='flex items-center w-24 p-1 px-4 mt-1 ml-2 text-white bg-primary'>
                <div>{t('careerTest18.message')}</div>
                <FaArrowRight className=' hover:scale-100 hover:ml-1'/>
            </div>
        </Link>

        <Link to = '/career/loanOfficer' className='flex flex-col flex-wrap w-3/4 px-2 py-2 mb-6 bg-gray-300 border-b shadow-md md:py-6 md:px-4 md:ml-10 md:w-96 rounded-xl'>
            <div className='mr-2 text-primary '>{t('careerTest19.message')}</div>
            <div className=' text-danger'>
                <div>{t('careerTest20.message')}</div>
               <div className=' text-nowrap'> {t('careerTest21.message')}</div>
            </div>
            <div className='flex items-center'> 
            <div className='text-primary '><FaUser/></div>
            <div className='ml-1 font-thin'>{t('careerTest22.message')}</div>
            <div className='ml-1 font-thin '>{t('careerTest23.message')}</div>
            </div>
            <div className='flex items-center w-24 p-1 px-4 mt-1 ml-2 text-white bg-primary'>
                <div>{t('careerTest24.message')}</div>
                <FaArrowRight className=' hover:scale-100 hover:ml-1'/>
            </div>
        </Link>

        <Link to = '/career/financialAnalyst' className='flex flex-col flex-wrap w-3/4 px-2 py-2 mb-6 bg-gray-300 border-b shadow-md md:py-6 md:px-4 md:ml-10 md:w-96 rounded-xl'>
            <div className='mr-2 text-primary '>{t('careerTest25.message')}</div>
            <div className=' text-danger'>
                <div>{t('careerTest26.message')}</div>
               <div className=' text-nowrap'> {t('careerTest27.message')}</div>
            </div>
            <div className='flex items-center'> 
            <div className='text-primary '><FaUser/></div>
            <div className='ml-1 font-thin'>{t('careerTest28.message')}</div>
            <div className='ml-1 font-thin '>{t('careerTest29.message')}</div>
            </div>
            <div className='flex items-center w-24 p-1 px-4 mt-1 ml-2 text-white bg-primary'>
                <div>{t('careerTest30.message')}</div>
                <FaArrowRight className=' hover:scale-100 hover:ml-1'/>
            </div>
        </Link>

        <Link to = '/career/riskAnalyst' className='flex flex-col flex-wrap w-3/4 px-2 py-2 mb-6 bg-gray-300 border-b shadow-md md:py-6 md:px-4 md:ml-10 md:w-96 rounded-xl'>
            <div className='mr-2 text-primary '>{t('careerTest31.message')}</div>
            <div className=' text-danger'>
                <div>{t('careerTest32.message')}</div>
               <div className=' text-nowrap'>{t('careerTest33.message')}</div>
            </div>
            <div className='flex items-center'> 
            <div className='text-primary '><FaUser/></div>
            <div className='ml-1 font-thin'>{t('careerTest34.message')}</div>
            <div className='ml-1 font-thin '>{t('careerTest35.message')}</div>
            </div>
            <div className='flex items-center w-24 p-1 px-4 mt-1 ml-2 text-white bg-primary'>
                <div>{t('careerTest36.message')}</div>
                <FaArrowRight className=' hover:scale-100 hover:ml-1'/>
            </div>
        </Link>


        <Link to = '/career/complianceOfficer' className='flex flex-col flex-wrap w-3/4 px-2 py-2 mb-6 bg-gray-300 border-b shadow-md md:py-6 md:px-4 md:ml-10 md:w-96 rounded-xl'>
            <div className='mr-2 text-primary '>{t('careerTest37.message')}</div>
            <div className=' text-danger'>
                <div>{t('careerTest38.message')}</div>
               <div className=' text-nowrap'>{t('careerTest39.message')}</div>
            </div>
            <div className='flex items-center'> 
            <div className='text-primary '><FaUser/></div>
            <div className='ml-1 font-thin'>{t('careerTest40.message')}</div>
            <div className='ml-1 font-thin '>{t('careerTest41.message')}</div>
            </div>
            <div className='flex items-center w-24 p-1 px-4 mt-1 ml-2 text-white bg-primary'>
                <div>{t('careerTest42.message')}</div>
                <FaArrowRight className=' hover:scale-100 hover:ml-1'/>
            </div>
        </Link>

        <Link to = '/career/branchManager' className='flex flex-col flex-wrap w-3/4 px-2 py-2 mb-6 bg-gray-300 border-b shadow-md md:py-6 md:px-4 md:ml-10 md:w-96 rounded-xl'>
            <div className='mr-2 text-primary '>{t('careerTest43.message')}</div>
            <div className=' text-danger'>
                <div>{t('careerTest44.message')}</div>
               <div className=' text-nowrap'> {t('careerTest45.message')}</div>
            </div>
            <div className='flex items-center'> 
            <div className='text-primary '><FaUser/></div>
            <div className='ml-1 font-thin'>{t('careerTest46.message')}</div>
            <div className='ml-1 font-thin '>{t('careerTest47.message')}</div>
            </div>
            <div className='flex items-center w-24 p-1 px-4 mt-1 ml-2 text-white bg-primary'>
                <div>{t('careerTest48.message')}</div>
                <FaArrowRight className=' hover:scale-100 hover:ml-1'/>
            </div>
        </Link>

        <Link to = '/career/investmentAdvisor' className='flex flex-col flex-wrap w-3/4 px-2 py-2 mb-6 bg-gray-300 border-b shadow-md md:py-6 md:px-4 md:ml-10 md:w-96 rounded-xl'>
            <div className='mr-2 text-primary '>{t('careerTest49.message')}</div>
            <div className=' text-danger'>
                <div>{t('careerTest50.message')}</div>
               <div className=' text-nowrap'> {t('careerTest51.message')}</div>
            </div>
            <div className='flex items-center'> 
            <div className='text-primary '><FaUser/></div>
            <div className='ml-1 font-thin'>{t('careerTest52.message')}</div>
            <div className='ml-1 font-thin '>{t('careerTest53.message')}</div>
            </div>
            <div className='flex items-center w-24 p-1 px-4 mt-1 ml-2 text-white bg-primary'>
                <div>{t('careerTest54.message')}</div>
                <FaArrowRight className=' hover:scale-100 hover:ml-1'/>
            </div>
        </Link>

        <Link to = '/career/mortgageSpecialist' className='flex flex-col flex-wrap w-3/4 px-2 py-2 mb-6 bg-gray-300 border-b shadow-md md:py-6 md:px-4 md:ml-10 md:w-96 rounded-xl'>
            <div className='mr-2 text-primary '>{t('careerTest55.message')}</div>
            <div className=' text-danger'>
                <div>{t('careerTest56.message')}</div>
               <div className=' text-nowrap'> {t('careerTest57.message')}</div>
            </div>
            <div className='flex items-center'> 
            <div className='text-primary '><FaUser/></div>
            <div className='ml-1 font-thin'>{t('careerTest58.message')}</div>
            <div className='ml-1 font-thin '>{t('careerTest59.message')}</div>
            </div>
            <div className='flex items-center w-24 p-1 px-4 mt-1 ml-2 text-white bg-primary'>
                <div>{t('careerTest60.message')}</div>
                <FaArrowRight className=' hover:scale-100 hover:ml-1'/>
            </div>
        </Link>

        <Link to = '/career/technologySpecialist' className='flex flex-col flex-wrap w-3/4 px-2 py-2 mb-6 bg-gray-300 border-b shadow-md md:py-6 md:px-4 md:ml-10 md:w-96 rounded-xl'>
            <div className='mr-2 text-primary '>{t('careerTest61.message')}</div>
            <div className=' text-danger'>
                <div>{t('careerTest62.message')}</div>
               <div className=' text-nowrap'>{t('careerTest63.message')}</div>
            </div>
            <div className='flex items-center'> 
            <div className='text-primary '><FaUser/></div>
            <div className='ml-1 font-thin'>{t('careerTest64.message')}</div>
            <div className='ml-1 font-thin '>{t('careerTest65.message')}</div>
            </div>
            <div className='flex items-center w-24 p-1 px-4 mt-1 ml-2 text-white bg-primary'>
                <div>{t('careerTest66.message')}</div>
                <FaArrowRight className=' hover:scale-100 hover:ml-1'/>
            </div>
        </Link>

        </div>
    </div>
  )
}

export default Careertest
