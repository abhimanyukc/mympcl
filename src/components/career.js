import React from 'react'
import { FaArrowRight, FaUser   } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Careertest = () => {
    
  return (
    <div  className='px-8 mx-auto max-w-screen-2xl '>
        <div className='mt-8 mb-4'>
        <div className='flex font-bold text-black '><div className='mr-2 text-2xl border-b-2 border-red-500 md:text-4xl'>Current</div> <div className='text-2xl md:text-4xl'>Vacancies</div></div>
        </div>


         <div className='flex flex-wrap '>
        <Link to="/career/softwareEngineer" className='flex flex-col flex-wrap w-3/4 px-2 py-2 mb-4 bg-gray-300 border-b shadow-md md:ml-4 md:w-96 rounded-xl'>
            <div className='mr-2 text-primary '>Software Engineer</div>
            <div className=' text-danger'>
                <div>Expire on:</div>
               <div className=' text-nowrap'> Dec 1, 2024</div>
            </div>
            <div className='flex items-center'> 
            <div className='text-primary '><FaUser/></div>
            <div className='ml-1 font-thin'>1</div>
            <div className='ml-1 font-thin '>Opening</div>
            </div>
            <div className='flex items-center w-24 p-1 px-4 mt-1 ml-2 text-white bg-primary'>
                <div>Apply</div>
                <FaArrowRight className=' hover:scale-100 hover:ml-1'/>
            </div>
        </Link>

        <Link to ='/career/bankTeller' className='flex flex-col flex-wrap w-3/4 px-2 py-2 mb-4 bg-gray-300 border-b shadow-md md:ml-4 md:w-96 rounded-xl'>
            <div className='mr-2 text-primary '>Bank Teller</div>
            <div className=' text-danger'>
                <div>Expire on:</div>
               <div className=' text-nowrap'> Dec 1, 2024</div>
            </div>
            <div className='flex items-center'> 
            <div className='text-primary '><FaUser/></div>
            <div className='ml-1 font-thin'>2</div>
            <div className='ml-1 font-thin '>Opening</div>
            </div>
            <div className='flex items-center w-24 p-1 px-4 mt-1 ml-2 text-white bg-primary'>
                <div>Apply</div>
                <FaArrowRight className=' hover:scale-100 hover:ml-1'/>
            </div>
        </Link>

        <Link to ='/career/customerServiceRepresentative' className='flex flex-col flex-wrap w-3/4 px-2 py-2 mb-4 bg-gray-300 border-b shadow-md md:ml-4 md:w-96 rounded-xl'>
            <div className='mr-2 text-primary '>Customer Service Representative</div>
            <div className=' text-danger'>
                <div>Expire on:</div>
               <div className=' text-nowrap'> Dec 1, 2024</div>
            </div>
            <div className='flex items-center'> 
            <div className='text-primary '><FaUser/></div>
            <div className='ml-1 font-thin'>2</div>
            <div className='ml-1 font-thin '>Opening</div>
            </div>
            <div className='flex items-center w-24 p-1 px-4 mt-1 ml-2 text-white bg-primary'>
                <div>Apply</div>
                <FaArrowRight className=' hover:scale-100 hover:ml-1'/>
            </div>
        </Link>

        <Link to = '/career/loanOfficer' className='flex flex-col flex-wrap w-3/4 px-2 py-2 mb-4 bg-gray-300 border-b shadow-md md:ml-4 md:w-96 rounded-xl'>
            <div className='mr-2 text-primary '>Loan Officer</div>
            <div className=' text-danger'>
                <div>Expire on:</div>
               <div className=' text-nowrap'> Dec 1, 2024</div>
            </div>
            <div className='flex items-center'> 
            <div className='text-primary '><FaUser/></div>
            <div className='ml-1 font-thin'>1</div>
            <div className='ml-1 font-thin '>Opening</div>
            </div>
            <div className='flex items-center w-24 p-1 px-4 mt-1 ml-2 text-white bg-primary'>
                <div>Apply</div>
                <FaArrowRight className=' hover:scale-100 hover:ml-1'/>
            </div>
        </Link>

        <Link to = '/career/financialAnalyst' className='flex flex-col flex-wrap w-3/4 px-2 py-2 mb-4 bg-gray-300 border-b shadow-md md:ml-4 md:w-96 rounded-xl'>
            <div className='mr-2 text-primary '>Financial Analyst</div>
            <div className=' text-danger'>
                <div>Expire on:</div>
               <div className=' text-nowrap'> Dec 1, 2024</div>
            </div>
            <div className='flex items-center'> 
            <div className='text-primary '><FaUser/></div>
            <div className='ml-1 font-thin'>1</div>
            <div className='ml-1 font-thin '>Opening</div>
            </div>
            <div className='flex items-center w-24 p-1 px-4 mt-1 ml-2 text-white bg-primary'>
                <div>Apply</div>
                <FaArrowRight className=' hover:scale-100 hover:ml-1'/>
            </div>
        </Link>

        <Link to = '/career/riskAnalyst' className='flex flex-col flex-wrap w-3/4 px-2 py-2 mb-4 bg-gray-300 border-b shadow-md md:ml-4 md:w-96 rounded-xl'>
            <div className='mr-2 text-primary '>Risk Analyst</div>
            <div className=' text-danger'>
                <div>Expire on:</div>
               <div className=' text-nowrap'> Dec 1, 2024</div>
            </div>
            <div className='flex items-center'> 
            <div className='text-primary '><FaUser/></div>
            <div className='ml-1 font-thin'>1</div>
            <div className='ml-1 font-thin '>Opening</div>
            </div>
            <div className='flex items-center w-24 p-1 px-4 mt-1 ml-2 text-white bg-primary'>
                <div>Apply</div>
                <FaArrowRight className=' hover:scale-100 hover:ml-1'/>
            </div>
        </Link>


        <Link to = '/career/complianceOfficer' className='flex flex-col flex-wrap w-3/4 px-2 py-2 mb-4 bg-gray-300 border-b shadow-md md:ml-4 md:w-96 rounded-xl'>
            <div className='mr-2 text-primary '>Compliance Officer</div>
            <div className=' text-danger'>
                <div>Expire on:</div>
               <div className=' text-nowrap'> Dec 1, 2024</div>
            </div>
            <div className='flex items-center'> 
            <div className='text-primary '><FaUser/></div>
            <div className='ml-1 font-thin'>1</div>
            <div className='ml-1 font-thin '>Opening</div>
            </div>
            <div className='flex items-center w-24 p-1 px-4 mt-1 ml-2 text-white bg-primary'>
                <div>Apply</div>
                <FaArrowRight className=' hover:scale-100 hover:ml-1'/>
            </div>
        </Link>

        <Link to = '/career/branchManager' className='flex flex-col flex-wrap w-3/4 px-2 py-2 mb-4 bg-gray-300 border-b shadow-md md:ml-4 md:w-96 rounded-xl'>
            <div className='mr-2 text-primary '>Branch Manager</div>
            <div className=' text-danger'>
                <div>Expire on:</div>
               <div className=' text-nowrap'> Dec 1, 2024</div>
            </div>
            <div className='flex items-center'> 
            <div className='text-primary '><FaUser/></div>
            <div className='ml-1 font-thin'>1</div>
            <div className='ml-1 font-thin '>Opening</div>
            </div>
            <div className='flex items-center w-24 p-1 px-4 mt-1 ml-2 text-white bg-primary'>
                <div>Apply</div>
                <FaArrowRight className=' hover:scale-100 hover:ml-1'/>
            </div>
        </Link>

        <Link to = '/career/investmentAdvisor' className='flex flex-col flex-wrap w-3/4 px-2 py-2 mb-4 bg-gray-300 border-b shadow-md md:ml-4 md:w-96 rounded-xl'>
            <div className='mr-2 text-primary '>Investment Advisor</div>
            <div className=' text-danger'>
                <div>Expire on:</div>
               <div className=' text-nowrap'> Dec 1, 2024</div>
            </div>
            <div className='flex items-center'> 
            <div className='text-primary '><FaUser/></div>
            <div className='ml-1 font-thin'>1</div>
            <div className='ml-1 font-thin '>Opening</div>
            </div>
            <div className='flex items-center w-24 p-1 px-4 mt-1 ml-2 text-white bg-primary'>
                <div>Apply</div>
                <FaArrowRight className=' hover:scale-100 hover:ml-1'/>
            </div>
        </Link>

        <Link to = '/career/mortgageSpecialist' className='flex flex-col flex-wrap w-3/4 px-2 py-2 mb-4 bg-gray-300 border-b shadow-md md:ml-4 md:w-96 rounded-xl'>
            <div className='mr-2 text-primary '>Mortgage Specialist</div>
            <div className=' text-danger'>
                <div>Expire on:</div>
               <div className=' text-nowrap'> Dec 1, 2024</div>
            </div>
            <div className='flex items-center'> 
            <div className='text-primary '><FaUser/></div>
            <div className='ml-1 font-thin'>1</div>
            <div className='ml-1 font-thin '>Opening</div>
            </div>
            <div className='flex items-center w-24 p-1 px-4 mt-1 ml-2 text-white bg-primary'>
                <div>Apply</div>
                <FaArrowRight className=' hover:scale-100 hover:ml-1'/>
            </div>
        </Link>

        <Link to = '/career/technologySpecialist' className='flex flex-col flex-wrap w-3/4 px-2 py-2 mb-4 bg-gray-300 border-b shadow-md md:ml-4 md:w-96 rounded-xl'>
            <div className='mr-2 text-primary '>Technology Specialist</div>
            <div className=' text-danger'>
                <div>Expire on:</div>
               <div className=' text-nowrap'> Dec 1, 2024</div>
            </div>
            <div className='flex items-center'> 
            <div className='text-primary '><FaUser/></div>
            <div className='ml-1 font-thin'>1</div>
            <div className='ml-1 font-thin '>Opening</div>
            </div>
            <div className='flex items-center w-24 p-1 px-4 mt-1 ml-2 text-white bg-primary'>
                <div>Apply</div>
                <FaArrowRight className=' hover:scale-100 hover:ml-1'/>
            </div>
        </Link>

        </div>
    </div>
  )
}

export default Careertest
