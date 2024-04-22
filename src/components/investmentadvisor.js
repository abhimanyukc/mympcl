import React from 'react'

 import { FaMap  ,   FaUser ,   FaMoneyCheck ,   FaHome, FaClock} from 'react-icons/fa'

import { FaMailBulk } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const InvestmentAdvisor = () => {
  return (
    <div className='px-8 mx-auto max-w-screen-2xl md:px-20'>
      <div className='md:px-20 '>
      <h1 className='mt-10 text-xl font-bold md:text-4xl '>Investment Advisor -2  Openings</h1>
      <div className='mt-4 '> This is a  full-time position for a  Investment Advisor with 3+ years of Experience in banking  quality assurance.
        Salary ranges from Rs. 20,000 to 30,000.
         </div>

         <div className='px-2 py-2 mt-8 bg-gray-100 border md:pb-6 md:pl-6 '>
             <div className='flex items-center mt-2 '>
                <div className='md:flex'>
                 < FaMap className='mr-4'/>
                 <div className='hidden md:flex'>Job location:</div>
                 </div>
                <div className=' md:ml-12'>Kathmandu and Pokhara</div>
             </div>

             <div className='flex items-center mt-2'>
             <div className='md:flex'>
                 < FaClock className='mr-4'/>
                 <div className='hidden md:flex'>Type:</div>
                 </div>
                <div className='md:ml-24'>Full Time</div>
             </div>

             <div className='flex items-center mt-2'>
             <div className='md:flex'>
                 < FaUser className='mr-4'/>
                 <div className='hidden md:flex'>Vacancy:</div>
                 </div>
                <div className=' md:ml-16'> 2 Positions</div>
             </div>

             <div className='flex items-center mt-2 '>
             <div className='md:flex'>
                 < FaMoneyCheck className='mr-4'/>
                 <div className='hidden md:flex'>Salary:</div>
                 </div>
                <div className=' md:ml-20'>NPR 20,000 - 30,000</div>
             </div>

             <div className='flex flex-wrap items-center mt-2 '>
             <div className='md:flex'>
                 < FaHome className='mr-4'/>
                 <div className='hidden md:flex'>Required Skills:</div>
                 </div>
                <div className=' md:ml-4' >Investment Analysis, Portfolio Management, Financial Planning, Risk Management, Client Relationship Management, Communication Skills, Ethical Conduct, Regulatory Compliance, Continuing Education, Analytical Skills,Technology Proficiency</div>
             </div>
         </div>

         <div className='px-4 py-6 border md:pt-10'>
            <div>
            We are looking for few  Investment Advisor to join our team.
            </div>
            <div className='mb-2'>
             We are looking for self-managed people who can work without constant supervision.
            </div>

            <div >
            As a  Investment Advisor   to provide personalized financial advice and guidance to clients, helping them navigate the complexities of investment markets, achieve their financial goals, and make informed decisions about their investment portfolios.









            </div>

            <h6 className='mt-6 text-2xl font-bold'>Responsibilities</h6>
            <div className='mt-4 '>You will be responsible for one or more of the following tasks depending on your skills and prior experience.</div>

            <ul className='px-4 list-disc md:pl-8'>
                <li className='mt-4 '>Conducting comprehensive financial assessments to understand clients' financial goals, risk tolerance, and investment objectives.</li>
                <li className='mt-2 '>Developing personalized investment strategies and asset allocation plans tailored to clients' individual financial circumstances and long-term goals.</li>
                <li className='mt-2 '>Recommending specific investment products and portfolio allocations based on thorough analysis of market trends, economic indicators, and investment opportunities.</li>
                <li className='mt-2 '>Monitoring and reviewing clients' investment portfolios regularly to assess performance, rebalance asset allocations, and adjust strategies as needed to optimize returns and manage risks.</li>
                <li className='mt-2 '> Providing ongoing financial education and guidance to clients, explaining investment concepts, market dynamics, and the rationale behind investment recommendations.</li>
                <li className='mt-2 '>Staying informed about regulatory changes, market developments, and industry trends that may impact clients' investment portfolios, and proactively communicating relevant information to clients.</li>
                <li className='mt-2 '>Upholding fiduciary duty and acting in the best interests of clients by prioritizing their financial well-being, avoiding conflicts of interest, and maintaining transparency in all client interactions.</li>
                <li className='mt-2 '>Assisting clients with financial planning needs beyond investments, such as retirement planning, education planning, estate planning, tax optimization, and risk management.</li>
                <li className='mt-2 '> Adhering to regulatory requirements and compliance standards governing the financial services industry, including maintaining necessary licenses and registrations, and adhering to ethical and professional standards. </li>
            </ul>

            <h6 className='mt-6 text-2xl font-bold '>Minimum Requirements</h6>
            <div className='mt-4 '>If you have at least a few of the following skills, you can apply for this position. You will be assigned the best role based on your prior experience.</div>
            <ul className='ml-4 list-disc md:pl-8'>
                <li className='mt-2 '>  A bachelor's degree in finance, economics, business administration, accounting, or a related field is typically required. Some employers may prefer candidates with advanced degrees,</li>
                <li className='mt-2 '>  In many jurisdictions, investment advisors are required to obtain relevant licenses or registrations to provide investment advice and manage client portfolios.</li>
                <li className='mt-2 '>Previous experience in the financial services industry is often preferred, particularly in roles related to investment analysis, financial planning, portfolio management, or wealth management.</li>
                <li className='mt-2 '> A solid understanding of financial markets, investment products, asset allocation strategies, and portfolio management principles is essential for providing effective investment advice.</li>
                <li className='mt-2 '>Familiarity with regulatory requirements governing the financial services industry, including securities regulations, investment adviser regulations, and fiduciary standards, is crucial for compliance with applicable laws and regulations.</li>
                <li className='mt-2 '>Commitment to upholding ethical standards, integrity, and professionalism in all aspects of the advisory relationship, including adherence to fiduciary duty and acting in the best interests of clients.</li>
                <li className='mt-2 '> Strong analytical skills to analyze financial data, evaluate investment opportunities, assess risks, and make informed investment recommendations based on clients' financial goals and risk tolerance.</li>
                <li className='mt-2 '>Effective communication skills to interact with clients, explain investment concepts, present investment recommendations, and address client inquiries or concerns in a clear and understandable manner.</li>
            </ul>

            <h6 className='mt-6 text-2xl font-bold '>Preferred Qualities</h6>
            <div className='mt-4 '>If you possess one or more of the following qualities, you are more likely to be selected for the position.</div>
            <ul className='list-disc md:pl-8'>
                <li className='mt-2 '>Demonstrating honesty, transparency, and ethical conduct in all aspects of the advisory relationship, including adherence to fiduciary duty and acting in the best interests of clients.</li>
                <li className='mt-2 '>Putting clients' needs first and prioritizing their financial well-being by providing personalized advice and guidance tailored to their individual financial goals, risk tolerance, and investment preferences.</li>
                <li className='mt-2 '>Building trust and credibility with clients through reliability, consistency, and accountability in delivering investment advice, managing portfolios, and communicating openly and transparently.</li>
                <li className='mt-2 '> Possessing excellent verbal and written communication skills to articulate complex financial concepts, explain investment strategies, and address client inquiries or concerns in a clear, concise, and understandable manner.</li>
            </ul>

            <Link to = '/career/applicationForm' className='flex items-center justify-center px-4 py-2 rounded-md w-36 md:mt-2 bg-secondary '>
                <FaMailBulk className='ml-1 text-white'/>
               <div className='ml-2 text-white '>Apply Now</div> 
                </Link>
         </div>

         <div className='mt-6 '>We are always looking for nice people to join our team. Even if you don’t find a role that suits your experience,
             you can   <span className='font-semibold underline text-secondary text-nowrap'>Send an application</span>  for a position that you are interested in. When we have a vacancy, we will contact you.</div>
    </div>
    </div>
  )
}

export default InvestmentAdvisor
