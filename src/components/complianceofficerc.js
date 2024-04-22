import React from 'react'

 import { FaMap  ,   FaUser ,   FaMoneyCheck ,   FaHome, FaClock} from 'react-icons/fa'

import { FaMailBulk } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const ComplianceOfficer = () => {
  return (
    <div className='px-8 mx-auto max-w-screen-2xl md:px-20'>
      <div className='md:px-20 '>
      <h1 className='mt-10 text-xl font-bold md:text-4xl '>Compliance Officer -2  Openings</h1>
      <div className='mt-4 '> This is a  full-time position for a  Compliance Officer with 1+ years of Experience in banking  quality assurance.
        Salary ranges from Rs. 20,000 to 40,000.
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
                <div className=' md:ml-20'>NPR 20,000 - 40,000</div>
             </div>

             <div className='flex flex-wrap items-center mt-2 '>
             <div className='md:flex'>
                 < FaHome className='mr-4'/>
                 <div className='hidden md:flex'>Required Skills:</div>
                 </div>
                <div className=' md:ml-4' >Understanding of Regulations, Risk Management,Policy Development and Implementation,Monitoring and Surveillance,Investigation Skills,Training and Education,Communication and Reporting,Analytical Skills,Attention to Detail</div>
             </div>
         </div>

         <div className='px-4 py-6 border md:pt-10'>
            <div>
            We are looking for few Compliance Officer to join our team.
            </div>
            <div className='mb-2'>
             We are looking for self-managed people who can work without constant supervision.
            </div>

            <div >
            As a Compliance Officer ensures that an organization adheres to relevant laws, regulations, and internal policies by implementing and overseeing compliance programs, conducting audits, and providing guidance to mitigate risks and promote ethical conduct.


            </div>

            <h6 className='mt-6 text-2xl font-bold'>Responsibilities</h6>
            <div className='mt-4 '>You will be responsible for one or more of the following tasks depending on your skills and prior experience.</div>

            <ul className='px-4 list-disc md:pl-8'>
                <li className='mt-4 '> Creating and updating compliance policies, procedures, and controls to ensure alignment with relevant laws, regulations, and industry standards.</li>
                <li className='mt-2 '> Establishing and overseeing compliance programs to promote adherence to regulatory requirements and mitigate compliance risks across the organization.</li>
                <li className='mt-2 '>Monitoring changes in laws, regulations, and industry standards to assess their impact on the organization and update compliance initiatives accordingly.</li>
                <li className='mt-2 '> Performing regular risk assessments to identify compliance risks associated with business activities, products, and processes, and developing risk mitigation strategies.</li>
                <li className='mt-2 '>Offering guidance and interpretation on regulatory requirements to employees, managers, and stakeholders to ensure understanding and compliance.</li>
                <li className='mt-2 '>Developing and delivering compliance training programs and educational materials to raise awareness of compliance requirements and foster a culture of compliance within the organization.</li>
                <li className='mt-2 '> Conducting compliance audits and reviews to assess the effectiveness of compliance programs, identify areas of non-compliance, and recommend corrective actions.</li>
                <li className='mt-2 '> Investigating allegations of compliance violations, misconduct, or irregularities, gathering evidence, conducting interviews, and documenting findings.</li>
                <li className='mt-2 '>Reporting compliance-related issues, findings, and recommendations to senior management, board members, regulatory authorities, and other relevant stakeholders as required.</li>
            </ul>

            <h6 className='mt-6 text-2xl font-bold '>Minimum Requirements</h6>
            <div className='mt-4 '>If you have at least a few of the following skills, you can apply for this position. You will be assigned the best role based on your prior experience.</div>
            <ul className='ml-4 list-disc md:pl-8'>
                <li className='mt-2 '> A bachelor's degree in business administration, finance, accounting, law, or a related field is often required.</li>
                <li className='mt-2 '> Previous experience in compliance, risk management, auditing, or a related field is usually required. </li>
                <li className='mt-2 '> In-depth knowledge of relevant laws, regulations, and industry standards applicable to the organization's operations, such as financial regulations (e.g., SEC, FINRA), data protection laws (e.g., GDPR, HIPAA), or industry-specific regulations (e.g., FDA regulations for pharmaceutical companies).</li>
                <li className='mt-2 '> Strong analytical skills to assess complex regulatory requirements, identify compliance risks, and develop risk mitigation strategies and compliance solutions.</li>
                <li className='mt-2 '>Effective communication skills to convey complex regulatory concepts and requirements clearly and concisely to various stakeholders, both verbally and in writing.</li>
                <li className='mt-2 '> Keen attention to detail when reviewing regulatory documents, conducting compliance assessments, or analyzing data to ensure accuracy and completeness in compliance-related activities.</li>
                <li className='mt-2 '> Strong problem-solving skills to address compliance issues, develop practical solutions, and implement corrective actions to achieve compliance objectives.</li>
                <li className='mt-2 '>Commitment to upholding ethical standards, integrity, and professionalism in all aspects of compliance activities, including maintaining confidentiality, avoiding conflicts of interest, and acting with impartiality and objectivity.</li>
            </ul>

            <h6 className='mt-6 text-2xl font-bold '>Preferred Qualities</h6>
            <div className='mt-4 '>If you possess one or more of the following qualities, you are more likely to be selected for the position.</div>
            <ul className='list-disc md:pl-8'>
                <li className='mt-2 '>Demonstrating a strong commitment to ethical conduct, integrity, and professionalism in all aspects of compliance activities, including maintaining confidentiality, avoiding conflicts of interest, and acting with impartiality and objectivity.</li>
                <li className='mt-2 '> Possessing keen attention to detail when reviewing regulatory documents, conducting compliance assessments, or analyzing data to ensure accuracy and completeness in compliance-related activities.</li>
                <li className='mt-2 '>Demonstrating strong analytical skills to assess complex regulatory requirements, identify compliance risks, and develop risk mitigation strategies and compliance solutions.</li>
                <li className='mt-2 '> Being adaptable to changing regulatory requirements, business priorities, and organizational dynamics while maintaining composure and professionalism.</li>
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

export default ComplianceOfficer
