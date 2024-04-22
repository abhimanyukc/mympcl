import React from 'react'

 import { FaMap  ,   FaUser ,   FaMoneyCheck ,   FaHome, FaClock} from 'react-icons/fa'

import { FaMailBulk } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const BranchManager = () => {
  return (
    <div className='px-8 mx-auto max-w-screen-2xl md:px-20'>
      <div className='md:px-20 '>
      <h1 className='mt-10 text-xl font-bold md:text-4xl '>Branch Manager -1  Openings</h1>
      <div className='mt-4 '> This is a  full-time position for a  BranchManager with 3+ years of Experience in banking  quality assurance.
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
                <div className=' md:ml-16'> 1 Positions</div>
             </div>

             <div className='flex items-center mt-2 '>
             <div className='md:flex'>
                 < FaMoneyCheck className='mr-4'/>
                 <div className='hidden md:flex'>Salary:</div>
                 </div>
                <div className=' md:ml-20'>NPR 10,000 - 20,000</div>
             </div>

             <div className='flex flex-wrap items-center mt-2 '>
             <div className='md:flex'>
                 < FaHome className='mr-4'/>
                 <div className='hidden md:flex'>Required Skills:</div>
                 </div>
                <div className=' md:ml-4' >Leadership, Team Management, = Customer Service, Sales and Business development, Financial Management, Risk Management, operations management, problem solving abilities, communication skills, analytical skills</div>
             </div>
         </div>

         <div className='px-4 py-6 border md:pt-10'>
            <div>
            We are looking for few  branch manager to join our team.
            </div>
            <div className='mb-2'>
             We are looking for self-managed people who can work without constant supervision.
            </div>

            <div >
            As a  branch manager  to oversees all aspects of branch operations, including customer service, sales, staff management, and financial performance, to ensure the branch meets its objectives and provides excellent service to customers.









            </div>

            <h6 className='mt-6 text-2xl font-bold'>Responsibilities</h6>
            <div className='mt-4 '>You will be responsible for one or more of the following tasks depending on your skills and prior experience.</div>

            <ul className='px-4 list-disc md:pl-8'>
                <li className='mt-4 '> Overseeing all aspects of branch operations, including customer service, cash management, transaction processing, and compliance with banking regulations. </li>
                <li className='mt-2 '>Managing and leading a team of banking professionals, including hiring, training, coaching, and performance management, to ensure high levels of employee engagement and productivity.</li>
                <li className='mt-2 '>Building and maintaining relationships with customers to understand their financial needs, address inquiries or concerns, and promote banking products and services.</li>
                <li className='mt-2 '> Developing and implementing strategies to drive branch revenue growth, meet sales targets, and increase market share through effective sales and marketing initiatives.</li>
                <li className='mt-2 '>  Monitoring branch financial performance, analyzing financial data, and implementing measures to optimize profitability, control expenses, and achieve budgetary goals.</li>
                <li className='mt-2 '>Ensuring compliance with banking regulations, policies, and procedures, as well as identifying and mitigating risks related to fraud, operational errors, and compliance breaches.</li>
                <li className='mt-2 '>Developing and executing branch strategies and action plans that align with organizational goals and objectives, as well as adapting strategies in response to market trends and competitive pressures.</li>
                <li className='mt-2 '>Conducting regular performance evaluations of branch staff, providing feedback and coaching to support professional development and improve performance.</li>
                <li className='mt-2 '>  Building and maintaining relationships within the local community to enhance brand awareness, generate leads, and support community initiatives that contribute to the branch's success. </li>
            </ul>

            <h6 className='mt-6 text-2xl font-bold '>Minimum Requirements</h6>
            <div className='mt-4 '>If you have at least a few of the following skills, you can apply for this position. You will be assigned the best role based on your prior experience.</div>
            <ul className='ml-4 list-disc md:pl-8'>
                <li className='mt-2 '>  A bachelor's degree in business administration, finance, accounting, economics, or a related field is often required.</li>
                <li className='mt-2 '> Previous experience in banking, financial services, or a related industry is usually required</li>
                <li className='mt-2 '>Strong leadership abilities, including the ability to motivate, inspire, and lead a team of banking professionals to achieve branch goals and objectives.</li>
                <li className='mt-2 '> Excellent customer service skills to build and maintain relationships with customers, address inquiries or concerns, and ensure a positive customer experience.</li>
                <li className='mt-2 '>Demonstrated experience in sales and business development to drive branch revenue growth, meet sales targets, and promote banking products and services to customers.</li>
                <li className='mt-2 '> Understanding of financial principles, including banking products and services, financial statements, budgeting, and profitability analysis.</li>
                <li className='mt-2 '> Knowledge of risk management principles and regulatory compliance requirements to ensure adherence to banking regulations, policies, and procedures.</li>
                <li className='mt-2 '>Strong analytical skills to analyze financial data, identify trends, and make informed decisions to improve branch performance and optimize processes.</li>
            </ul>

            <h6 className='mt-6 text-2xl font-bold '>Preferred Qualities</h6>
            <div className='mt-4 '>If you possess one or more of the following qualities, you are more likely to be selected for the position.</div>
            <ul className='list-disc md:pl-8'>
                <li className='mt-2 '>A bachelor's degree in business administration, finance, accounting, economics, or a related field is often required</li>
                <li className='mt-2 '> Previous experience in banking, financial services, or a related industry is usually required. </li>
                <li className='mt-2 '>Strong leadership abilities, including the ability to motivate, inspire, and lead a team of banking professionals to achieve branch goals and objectives.</li>
                <li className='mt-2 '> Excellent customer service skills to build and maintain relationships with customers, address inquiries or concerns, and ensure a positive customer experience.</li>
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

export default BranchManager
