
import React from 'react'

 import { FaMap  ,   FaUser ,   FaMoneyCheck ,   FaHome, FaClock} from 'react-icons/fa'

import { FaMailBulk } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const TechnologySpecialist = () => {
  return (
    <div className='px-8 mx-auto max-w-screen-2xl '>
      <div className=''>
      <h1 className='mt-10 text-xl font-bold md:text-4xl '>TechnologySpecialist Specialist -2  Openings</h1>
      <div className='mt-4 '> This is a  full-time position for a   Mortgage Specialist with 1+ years of Experience in banking  quality assurance.
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
                <div className=' md:ml-4' >Technical proficiency, Problem solving abilities, analytical skills, attention to detail, communication skills, project management, adaptability and learning agility, collaboration and team work, customer focus, risk management and security awareness, troubleshooting and diagnostics, documenting and reporting</div>
             </div>
         </div>

         <div className='px-4 py-6 border md:pt-10'>
            <div>
            We are looking for few  Technology Specialist to join our team.
            </div>
            <div className='mb-2'>
             We are looking for self-managed people who can work without constant supervision.
            </div>

            <div >
            As a  Technology Specialist responsible for leveraging technical expertise to design, implement, and support technology solutions that meet business objectives and enhance organizational efficiency and effectiveness.

            </div>

            <h6 className='mt-6 text-2xl font-bold'>Responsibilities</h6>
            <div className='mt-4 '>You will be responsible for one or more of the following tasks depending on your skills and prior experience.</div>

            <ul className='px-4 list-disc md:pl-8'>
                <li className='mt-4 '>Providing technical support to users within the organization, troubleshooting hardware, software, and network issues, and resolving technical problems efficiently to minimize downtime.</li>
                <li className='mt-2 '>Managing and maintaining computer systems, servers, networks, and other IT infrastructure components.</li>
                <li className='mt-2 '>Developing and maintaining software applications, scripts, or automation tools to improve business processes, enhance productivity, or meet specific organizational needs. </li>
                <li className='mt-2 '> Designing, implementing, and managing databases to store and retrieve data efficiently.</li>
                <li className='mt-2 '>Configuring and managing computer networks, including LANs, WANs, and VPNs. </li>
                <li className='mt-2 '>  Implementing security measures to protect the organization's IT infrastructure, systems, and data from cyber threats such as malware, viruses, hacking, and data breaches</li>
                <li className='mt-2 '>Planning, coordinating, and executing IT projects, such as system upgrades, migrations, or implementations. </li>
                <li className='mt-2 '>Providing training and support to end-users on new technologies, software applications, </li>
                <li className='mt-2 '> Staying updated on emerging technologies, industry trends, and best practices in IT.</li>
            </ul>

            <h6 className='mt-6 text-2xl font-bold '>Minimum Requirements</h6>
            <div className='mt-4 '>If you have at least a few of the following skills, you can apply for this position. You will be assigned the best role based on your prior experience.</div>
            <ul className='ml-4 list-disc md:pl-8'>
                <li className='mt-2 '>A bachelor's degree in computer science, information technology, computer engineering, or a related field is often required</li>
                <li className='mt-2 '>Relevant work experience in IT, computer systems, or a related field is typically required. </li>
                <li className='mt-2 '>While not always mandatory, certifications can demonstrate proficiency and expertise in specific technologies or areas of specialization.</li>
                <li className='mt-2 '> Strong interpersonal and communication skills to interact with clients, real estate agents, lenders, and other stakeholders, and provide excellent customer service throughout the mortgage process.</li>
                <li className='mt-2 '> Ability to review and analyze financial documents, loan applications, and other paperwork accurately, and ensure compliance with regulatory requirements and industry standards.</li>
                <li className='mt-2 '>Basic computer skills to navigate mortgage origination software, customer relationship management (CRM) systems, and electronic document management platforms used in the mortgage industry.</li>
                <li className='mt-2 '> Ability to generate leads, cultivate relationships with potential clients and referral sources, and effectively communicate the value proposition of mortgage products and services.</li>
                <li className='mt-2 '> Willingness to collaborate with mortgage underwriters, loan processors, real estate agents, and other professionals involved in the mortgage transaction process to facilitate efficient communication and workflow.</li>
            </ul>

            <h6 className='mt-6 text-2xl font-bold '>Preferred Qualities</h6>
            <div className='mt-4 '>If you possess one or more of the following qualities, you are more likely to be selected for the position.</div>
            <ul className='list-disc md:pl-8'>
                <li className='mt-2 '>The ability to analyze complex problems, think critically, and develop innovative solutions is highly valued.</li>
                <li className='mt-2 '> Technology is constantly evolving, so the ability to quickly learn new technologies, tools, and methodologies is essential.</li>
                <li className='mt-2 '>Effective communication skills, both verbal and written, are crucial for conveying technical information to non-technical stakeholders</li>
                <li className='mt-2 '> Strong analytical skills enable technology specialists to understand and interpret data, identify patterns and trends, and make informed decisions to optimize systems and processes.</li>
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

export default TechnologySpecialist
