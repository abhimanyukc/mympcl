import React from 'react'

 import { FaMap  ,   FaUser ,   FaMoneyCheck ,   FaHome, FaClock} from 'react-icons/fa'

import { FaMailBulk } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const RiskAnalyst = () => {
  return (
    <div className='px-8 mx-auto max-w-screen-2xl '>
      <div className=''>
      <h1 className='mt-10 text-xl font-bold md:text-4xl '>Risk Analyst-2  Openings</h1>
      <div className='mt-4 '> This is a  full-time position for a Senior Risk Analyst with 3+ years of Experience in banking  quality assurance.
        Salary ranges from Rs. 70,000 to 1,30,000.
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
                <div className=' md:ml-20'>NPR 70,000 - 130,000</div>
             </div>

             <div className='flex flex-wrap items-center mt-2 '>
             <div className='md:flex'>
                 < FaHome className='mr-4'/>
                 <div className='hidden md:flex'>Required Skills:</div>
                 </div>
                <div className=' md:ml-4' >Risk optimization, risk gathering, risk tackling and solving abilities</div>
             </div>
         </div>

         <div className='px-4 py-6 border md:pt-10'>
            <div>
            We are looking for few senior risk analyst to join our team.
            </div>
            <div className='mb-2'>
             We are looking for self-managed people who can work without constant supervision.
            </div>

            <div >
            As a Senior Risk Analyst, you will be responsible for identifying and mitigating risk that can occur
            </div>

            <h6 className='mt-6 text-2xl font-bold'>Responsibilities</h6>
            <div className='mt-4 '>You will be responsible for one or more of the following tasks depending on your skills and prior experience.</div>

            <ul className='px-4 list-disc md:pl-8'>
                <li className='mt-4 '>Conduct risk assessments to identify, assess, and prioritize potential risks to the organization.   </li>
                <li className='mt-2 '>Develop and maintain risk registers or databases to record and report risks to relevant stakeholders.</li>
                <li className='mt-2 '>Develop risk mitigation strategies and action plans to minimize the impact of identified risks.</li>
                <li className='mt-2 '>Utilize statistical and analytical tools to quantify and assess risk exposure.</li>
                <li className='mt-2 '> Ensure that the organization's risk management practices comply with relevant laws and regulations.</li>
                <li className='mt-2 '>Develop risk models and simulations to forecast the potential impact of different risk scenarios on the organization.</li>
                <li className='mt-2 '>Provide training and education on risk management principles, processes, and tools to enhance risk awareness and competency.</li>
                <li className='mt-2 '>Identify gaps or weaknesses in existing controls and recommend improvements to strengthen the organization's risk management framework.</li>
                <li className='mt-2 '>Assess the organization's insurance needs and evaluate insurance policies to ensure adequate coverage against key risks. </li>
            </ul>

            <h6 className='mt-6 text-2xl font-bold '>Minimum Requirements</h6>
            <div className='mt-4 '>If you have at least a few of the following skills, you can apply for this position. You will be assigned the best role based on your prior experience.</div>
            <ul className='ml-4 list-disc md:pl-8'>
                <li className='mt-2 '>Ability to analyze complex data, identify trends, and draw meaningful insights to assess and manage risks effectively</li>
                <li className='mt-2 '>Proficiency in quantitative analysis, including statistical analysis, financial modeling, and risk assessment techniques.</li>
                <li className='mt-2 '> Understanding of risk management principles, methodologies, and frameworks such as COSO, ISO 31000, or Basel III</li>
                <li className='mt-2 '>Knowledge of financial concepts, including financial markets, valuation methods, financial statements, and key financial ratios</li>
                <li className='mt-2 '>Capability to identify and solve problems related to risk management, including the ability to develop innovative solutions to mitigate risks</li>
                <li className='mt-2 '>Strong written and verbal communication skills to effectively convey risk findings, recommendations, and insights to stakeholders at all levels of the organization</li>
                <li className='mt-2 '> Ability to pay close attention to detail when analyzing data, assessing risks, and documenting findings to ensure accuracy and reliability.</li>
                <li className='mt-2 '>Familiarity with relevant software tools and technologies used in risk analysis, such as risk management software, data analytics tools, and Microsoft Excel</li>
            </ul>

            <h6 className='mt-6 text-2xl font-bold '>Preferred Qualities</h6>
            <div className='mt-4 '>If you possess one or more of the following qualities, you are more likely to be selected for the position.</div>
            <ul className='list-disc md:pl-8'>
                <li className='mt-2 '>The ability to think critically and analytically to assess complex situations, identify potential risks, and develop effective risk management strategies.</li>
                <li className='mt-2 '> A keen attention to detail is crucial for accurately analyzing data, identifying trends, and detecting potential risks that may otherwise go unnoticed</li>
                <li className='mt-2 '>Strong problem-solving abilities enable risk analysts to navigate challenges, address issues, and develop innovative solutions to mitigate risks effectively</li>
                <li className='mt-2 '>The capacity to adapt to changing circumstances, priorities, and environments is essential for risk analysts to respond effectively to evolving risks and organizational needs</li>
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

export default RiskAnalyst
