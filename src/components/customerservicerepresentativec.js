import React from 'react'

 import { FaMap  ,   FaUser ,   FaMoneyCheck ,   FaHome, FaClock} from 'react-icons/fa'

import { FaMailBulk } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const CustomerServiceRepresentative = () => {
  return (
    <div className='px-8 mx-auto max-w-screen-2xl md:px-20'>
      <div className='md:px-20 '>
      <h1 className='mt-10 text-xl font-bold md:text-4xl '>Customer Service Representative -1  Openings</h1>
      <div className='mt-4 '> This is a  full-time position for a CustomerServiceRepresentative with 3+ years of Experience in banking  quality assurance.
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
                <div className=' md:ml-16'> 1 Positions</div>
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
                <div className=' md:ml-4' >Communication skills,Empathy and Patience, Active listening,Problem Solving Abilities,Product Knowledge, technical proficiency, time management, adaptability</div>
             </div>
         </div>

         <div className='px-4 py-6 border md:pt-10'>
            <div>
            We are looking for CustomerServiceRepresentative to join our team.
            </div>
            <div className='mb-2'>
             We are looking for self-managed people who can work without constant supervision.
            </div>

            <div >
            As a CustomerServiceRepresentative, we are looking for providing assistance, resolving inquiries, and ensuring positive experiences to enhance customer satisfaction and loyalty.

            </div>

            <h6 className='mt-6 text-2xl font-bold'>Responsibilities</h6>
            <div className='mt-4 '>You will be responsible for one or more of the following tasks depending on your skills and prior experience.</div>

            <ul className='px-4 list-disc md:pl-8'>
                <li className='mt-4 '> Interact with potential borrowers to understand their financial needs and goals, and provide guidance on suitable loan options.   </li>
                <li className='mt-2 '> Collect and review loan applications, ensuring all required documentation is provided and accurate.</li>
                <li className='mt-2 '>Evaluate the creditworthiness of loan applicants by reviewing credit reports, financial statements, and other relevant information.</li>
                <li className='mt-2 '> Assess the risk associated with each loan application based on factors such as credit history, income stability, debt-to-income ratio, and collateral.</li>
                <li className='mt-2 '>  Structure loan terms, including interest rates, loan amounts, repayment schedules, and collateral requirements, based on borrower qualifications and institutional policies.</li>
                <li className='mt-2 '>: Ensure compliance with federal and state lending regulations, including the Fair Lending Act, Truth in Lending Act, and Equal Credit Opportunity Act.</li>
                <li className='mt-2 '>Provide personalized financial advice to clients, including recommendations on loan products, refinancing options, and debt management strategies.</li>
                <li className='mt-2 '>Prepare loan documentation, including promissory notes, mortgage deeds, and loan agreements, and ensure all legal and regulatory requirements are met.</li>
                <li className='mt-2 '> Submit loan applications to underwriting departments for review and approval, and communicate any additional requirements or conditions to borrowers. </li>
            </ul>

            <h6 className='mt-6 text-2xl font-bold '>Minimum Requirements</h6>
            <div className='mt-4 '>If you have at least a few of the following skills, you can apply for this position. You will be assigned the best role based on your prior experience.</div>
            <ul className='ml-4 list-disc md:pl-8'>
                <li className='mt-2 '>Address customer inquiries, requests, and complaints via phone, email, chat, or in-person interactions in a timely and professional manner.</li>
                <li className='mt-2 '> : Offer accurate information about products, services, pricing, promotions, policies, and procedures to assist customers with their queries and decision-making.</li>
                <li className='mt-2 '>Identify and resolve customer issues, concerns, or problems effectively by troubleshooting, escalating to appropriate departments if necessary, and following up to ensure satisfactory resolution.</li>
                <li className='mt-2 '>Process customer transactions, orders, returns, refunds, and exchanges accurately and efficiently using relevant systems or software.</li>
                <li className='mt-2 '>Follow up with customers to ensure satisfaction with resolution outcomes, gather feedback on their experience, and identify opportunities for improvement.</li>
                <li className='mt-2 '> Identify opportunities to upsell or cross-sell additional products, services, or upgrades based on customer needs, preferences, or purchase history.</li>
                <li className='mt-2 '>  Educate customers on product features, benefits, and usage instructions to maximize their understanding and usage of the products or services.</li>
                <li className='mt-2 '>Adhere to company policies, procedures, and service standards while handling customer interactions to maintain consistency and quality in service delivery.</li>
            </ul>

            <h6 className='mt-6 text-2xl font-bold '>Preferred Qualities</h6>
            <div className='mt-4 '>If you possess one or more of the following qualities, you are more likely to be selected for the position.</div>
            <ul className='list-disc md:pl-8'>
                <li className='mt-2 '> Clear and effective communication, both verbal and written, to interact with customers professionally, convey information clearly, and resolve issues effectively.</li>
                <li className='mt-2 '> Ability to empathize with customers' concerns, demonstrate patience, and remain calm and composed, especially in challenging or emotional situations.</li>
                <li className='mt-2 '>Strong problem-solving skills to analyze customer issues, identify root causes, and provide appropriate solutions or alternatives to meet their needs.</li>
                <li className='mt-2 '>  Skill in actively listening to customers to understand their needs, concerns, and preferences, and provide personalized assistance or guidance accordingly.</li>
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

export default CustomerServiceRepresentative
