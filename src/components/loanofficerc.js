import React from 'react'

 import { FaMap  ,   FaUser ,   FaMoneyCheck ,   FaHome, FaClock} from 'react-icons/fa'

import { FaMailBulk } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const LoanOfficer = () => {
  return (
    <div className='px-8 mx-auto max-w-screen-2xl '>
      <div className=''>
      <h1 className='mt-10 text-xl font-bold md:text-4xl '>lOAN Officer -4  Openings</h1>
      <div className='mt-4 '> This is a  full-time position for a Senior Loan Officer with 3+ years of Experience in banking  quality assurance.
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
                <div className=' md:ml-16'> 4 Positions</div>
             </div>

             <div className='flex items-center mt-2 '>
             <div className='md:flex'>
                 < FaMoneyCheck className='mr-4'/>
                 <div className='hidden md:flex'>Salary:</div>
                 </div>
                <div className=' md:ml-20'>NPR 50,000 - 60,000</div>
             </div>

             <div className='flex flex-wrap items-center mt-2 '>
             <div className='md:flex'>
                 < FaHome className='mr-4'/>
                 <div className='hidden md:flex'>Required Skills:</div>
                 </div>
                <div className=' md:ml-4' >Financial Analysis, Risk Assessment,  Loan Products Knowledge, Regulatory Compliance, Customer Service</div>
             </div>
         </div>

         <div className='px-4 py-6 border md:pt-10'>
            <div>
            We are looking for few senior Loan Officer to join our team.
            </div>
            <div className='mb-2'>
             We are looking for self-managed people who can work without constant supervision.
            </div>

            <div >
            As a Senior Loan Officer, facilitates the lending process by assessing client creditworthiness, recommending suitable loan products, and guiding applicants through the application and approval process


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
                <li className='mt-2 '> Ability to analyze financial statements, credit reports, tax returns, and other financial documents to assess the creditworthiness of loan applicants.</li>
                <li className='mt-2 '> Proficiency in evaluating the level of risk associated with different loan applications based on factors such as credit history, income stability, debt-to-income ratio, and collateral.</li>
                <li className='mt-2 '>Excellent customer service skills to build rapport with clients, understand their financial needs, explain loan options, and guide them through the loan application process.</li>
                <li className='mt-2 '> Strong verbal and written communication skills to effectively convey loan terms, requirements, and decisions to clients, as well as collaborate with internal teams and external partners.</li>
                <li className='mt-2 '>Ability to negotiate loan terms, interest rates, and fees with clients to reach mutually beneficial agreements while safeguarding the institution's interests and profitability.</li>
                <li className='mt-2 '> Aptitude for identifying potential challenges or obstacles in the loan approval process and proactively finding solutions to address them while maintaining customer satisfaction and regulatory compliance.</li>
                <li className='mt-2 '> Effective time management skills to prioritize tasks, manage a pipeline of loan applications, meet deadlines, and provide timely updates to clients throughout the loan process.</li>
                <li className='mt-2 '>Knowledge of relevant laws, regulations, and compliance requirements governing lending practices, including the Fair Lending Act, Truth in Lending Act, and Equal Credit Opportunity Act.</li>
            </ul>

            <h6 className='mt-6 text-2xl font-bold '>Preferred Qualities</h6>
            <div className='mt-4 '>If you possess one or more of the following qualities, you are more likely to be selected for the position.</div>
            <ul className='list-disc md:pl-8'>
                <li className='mt-2 '>Loan officers need to effectively communicate with clients, colleagues, and stakeholders. They should be able to explain complex financial terms and processes in a clear and understandable manner.</li>
                <li className='mt-2 '> Having empathy towards clients' financial situations can help loan officers understand their needs better and provide personalized assistance and guidance.</li>
                <li className='mt-2 '>While not always a requirement, having some sales and marketing skills can help loan officers identify opportunities, build relationships, and promote loan products effectively.</li>
                <li className='mt-2 '> Loan officers handle sensitive financial information and play a crucial role in clients' financial well-being. Integrity and adherence to ethical standards are paramount in this role.</li>
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

export default LoanOfficer
