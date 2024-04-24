import React from 'react'

 import { FaMap  ,   FaUser ,   FaMoneyCheck ,   FaHome, FaClock} from 'react-icons/fa'

import { FaMailBulk } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Softwareengineerc = () => {
  return (
    <div className='px-8 mx-auto max-w-screen-2xl'>
      <div className=''>
      <h1 className='mt-10 text-xl font-bold md:text-4xl '>Senior QA Engineer-2  Openings</h1>
      <div className='mt-4 '> This is a  full-time position for a Senior Quality Assurance Engineer with 3+ years of Experience in mobile apps  quality assurance.
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
                <div className=' md:ml-4' >Automated testing tools, Functional testing tools, Issue tracking tools, Attention to detail</div>
             </div>
         </div>

         <div className='px-4 py-6 border md:pt-10'>
            <div>
            We are looking for few senior quality assurance engineers to join our team.
            </div>
            <div className='mb-2'>
             We are looking for self-managed people who can work without constant supervision.
            </div>

            <div >
            As a Senior QA Engineer, you will be responsible for designing, developing, and maintaining automated test scripts for our app and site. You will work closely with our development team to ensure that our products meet high standards of quality and performance.
            </div>

            <h6 className='mt-6 text-2xl font-bold'>Responsibilities</h6>
            <div className='mt-4 '>You will be responsible for one or more of the following tasks depending on your skills and prior experience.</div>

            <ul className='px-4 list-disc md:pl-8'>
                <li className='mt-4 '>Design, develop, and maintain automated test scripts using industry standard tools and technologies   </li>
                <li className='mt-2 '>Work closely with the development team to ensure that new features and functionality are thoroughly tested before release</li>
                <li className='mt-2 '>Collaborate with product managers, developers, and other stakeholders to define test plans and test cases</li>
                <li className='mt-2 '>Perform functional, regression, and performance testing of software applications</li>
                <li className='mt-2 '>Participate in code reviews and provide feedback on quality and testability</li>
                <li className='mt-2 '>Analyze and report defects, and work with developers to resolve issues</li>
                <li className='mt-2 '>Continuously improve testing processes and methodologies to ensure efficiency and effectiveness</li>
                <li className='mt-2 '>Mentor junior QA engineers and provide guidance on best practices and tools</li>
                <li className='mt-2 '>Stay up-to-date with new testing tools and test strategies</li>
            </ul>

            <h6 className='mt-6 text-2xl font-bold '>Minimum Requirements</h6>
            <div className='mt-4 '>If you have at least a few of the following skills, you can apply for this position. You will be assigned the best role based on your prior experience.</div>
            <ul className='ml-4 list-disc md:pl-8'>
                <li className='mt-2 '>Worked as a full-time QA engineer for at least 3 years</li>
                <li className='mt-2 '>Strong knowledge of software QA methodologies, tools, and processes</li>
                <li className='mt-2 '>Experience in writing clear, concise, and comprehensive test plans and test cases</li>
                <li className='mt-2 '>Prior experience with working with a mobile apps development team</li>
                <li className='mt-2 '>Hands-on experience with automated testing tools, BDD workflow and E2E testing</li>
                <li className='mt-2 '>Hands-on experience with API testing tools, performance and regression testing</li>
                <li className='mt-2 '>Excellent analytical and problem-solving skills</li>
                <li className='mt-2 '>Should be proactive and have good multitasking skills</li>
            </ul>

            <h6 className='mt-6 text-2xl font-bold '>Preferred Qualities</h6>
            <div className='mt-4 '>If you possess one or more of the following qualities, you are more likely to be selected for the position.</div>
            <ul className='list-disc md:pl-8'>
                <li className='mt-2 '>Experience working in an Agile/Scrum development process</li>
                <li className='mt-2 '>Experience with performance (load and stress) testing is a plus</li>
                <li className='mt-2 '>Knowledge of any high-level programming language is a plus</li>
                <li className='mt-2 '>Has great communication and social skills</li>
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

export default Softwareengineerc
