import React from 'react'

 import { FaMap  ,   FaUser ,   FaMoneyCheck ,   FaHome, FaClock} from 'react-icons/fa'

import { FaMailBulk } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const FinancialAnalyst = () => {
  return (
    <div className='px-8 mx-auto max-w-screen-2xl '>
      <div className=''>
      <h1 className='mt-10 text-xl font-bold md:text-4xl '>FinancialAnalyst -3  Openings</h1>
      <div className='mt-4 '> This is a  full-time position for a Senior FinancialAnalyst with 3+ years of Experience in banking  quality assurance.
        Salary ranges from Rs. 50,000 to 60,000.
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
                <div className=' md:ml-16'> 3 Positions</div>
             </div>

             <div className='flex items-center mt-2 '>
             <div className='md:flex'>
                 < FaMoneyCheck className='mr-4'/>
                 <div className='hidden md:flex'>Salary:</div>
                 </div>
                <div className=' md:ml-20'>NPR 30,000 - 40,000</div>
             </div>

             <div className='flex flex-wrap items-center mt-2 '>
             <div className='md:flex'>
                 < FaHome className='mr-4'/>
                 <div className='hidden md:flex'>Required Skills:</div>
                 </div>
                <div className=' md:ml-4' >Financial Analysis, Financial Modeling, Data Analysis, Investment Analysis, Valuation Methods, Risk Management, Financial Reporting Standards, Economic analysis, Industry Knowledge</div>
             </div>
         </div>

         <div className='px-4 py-6 border md:pt-10'>
            <div>
            We are looking for few senior FinancialAnalyst to join our team.
            </div>
            <div className='mb-2'>
             We are looking for self-managed people who can work without constant supervision.
            </div>

            <div >
            As a Senior Financial Analyst oversees complex financial analysis, provides strategic insights to senior management, and plays a key role in decision-making processes within the organization.


            </div>

            <h6 className='mt-6 text-2xl font-bold'>Responsibilities</h6>
            <div className='mt-4 '>You will be responsible for one or more of the following tasks depending on your skills and prior experience.</div>

            <ul className='px-4 list-disc md:pl-8'>
                <li className='mt-4 '>  Conduct in-depth financial analysis, including variance analysis, trend analysis, and forecasting, to provide insights into the organization's financial performance and trends.  </li>
                <li className='mt-2 '> Collect and review loan applications, ensuring all required documentation is provided and accurate.</li>
                <li className='mt-2 '> Prepare and analyze financial reports, including monthly, quarterly, and annual financial statements, to provide management with timely and accurate financial information.</li>
                <li className='mt-2 '>  Contribute to strategic planning initiatives by providing financial insights, recommendations, and scenario analysis to support decision-making and goal-setting.</li>
                <li className='mt-2 '>   Develop and monitor key performance indicators (KPIs) and metrics to evaluate the organization's financial performance and operational efficiency.</li>
                <li className='mt-2 '>: Serve as a financial business partner to department heads and senior management, providing financial guidance, analysis, and support to help achieve organizational objectives.</li>
                <li className='mt-2 '> Evaluate investment opportunities, capital projects, and business initiatives through financial modeling, ROI analysis, and risk assessment to support investment decisions.</li>
                <li className='mt-2 '>Identify opportunities for cost optimization, efficiency improvements, and resource allocation optimization through cost analysis and process improvement initiatives.</li>
                <li className='mt-2 '>Lead FP&A activities, including budgeting, forecasting, variance analysis, and scenario planning, to support strategic decision-making and resource allocation.</li>
            </ul>

            <h6 className='mt-6 text-2xl font-bold '>Minimum Requirements</h6>
            <div className='mt-4 '>If you have at least a few of the following skills, you can apply for this position. You will be assigned the best role based on your prior experience.</div>
            <ul className='ml-4 list-disc md:pl-8'>
                <li className='mt-2 '>Strong analytical and quantitative skills are essential for financial analysts to analyze financial data, conduct financial modeling, and evaluate investment opportunities.</li>
                <li className='mt-2 '> Proficiency in Microsoft Excel is usually required for financial analysts to perform data analysis, financial modeling, and reporting tasks. Familiarity with financial software and tools, such as financial modeling software or ERP systems, may also be beneficial.</li>
                <li className='mt-2 '> A solid understanding of financial concepts, principles, and practices is necessary for financial analysts to interpret financial statements, analyze financial performance, and assess investment risks and opportunities.</li>
                <li className='mt-2 '> Attention to detail is crucial for financial analysts to ensure accuracy and reliability in financial analysis, reporting, and modeling activities.</li>
                <li className='mt-2 '> Strong problem-solving abilities are required for financial analysts to identify financial challenges, analyze root causes, and develop practical solutions to address them.</li>
                <li className='mt-2 '>  Financial analysts often work as part of cross-functional teams, collaborating with colleagues from finance, accounting, operations, and other departments. The ability to work effectively in a team environment is essential.</li>
                <li className='mt-2 '> Effective time management skills are necessary for financial analysts to prioritize tasks, meet deadlines, and handle multiple projects simultaneously.</li>
                <li className='mt-2 '>handling sensitive financial information and must adhere to ethical standards and integrity in all aspects of their work, including confidentiality, objectivity, and compliance with regulations.</li>
            </ul>

            <h6 className='mt-6 text-2xl font-bold '>Preferred Qualities</h6>
            <div className='mt-4 '>If you possess one or more of the following qualities, you are more likely to be selected for the position.</div>
            <ul className='list-disc md:pl-8'>
                <li className='mt-2 '>The ability to think critically and analytically to interpret complex financial data, identify trends, and draw meaningful insights to support decision-making.</li>
                <li className='mt-2 '>Keen attention to detail when analyzing financial statements, conducting financial modeling, and preparing reports to ensure accuracy and reliability in financial analysis.</li>
                <li className='mt-2 '>Strong problem-solving skills to identify financial challenges, analyze root causes, and develop practical solutions to address them effectively.</li>
                <li className='mt-2 '>Proficiency in quantitative analysis, including financial modeling, data analysis, and statistical techniques, to derive insights and make informed decisions based on data-driven evidence.</li>
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

export default FinancialAnalyst
