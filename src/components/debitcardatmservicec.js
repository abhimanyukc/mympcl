import React from 'react'
import { MdDateRange } from 'react-icons/md';

const Debitcardatmservicec = ({ title, subtopics }) => {
  return (
    <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
      <div className='flex flex-col md:flex-row'>
        <div  className='md:w-4/5'>
          <div>
            <img
              src="https://i.pinimg.com/564x/54/e9/04/54e90431c6ae44af6c12f23930f81778.jpg"
              alt="debitcard"
              className="object-contain w-full rounded-md"
            />
          </div>

          <div className="mt-6 ">
            <h1 className="mt-4 text-3xl font-semibold"> Gausahar ATM with Association with SmartChoice</h1>
            <div className="mt-2">
              <p>
               SmartChoice Technologies Ltd. established on 2001, popularly known as SCT and SCT-Network is a Payment Service Operator (PSO) licensed under the Nepal Central Bank. SCT provides different types of Cards and Payment Platform to most of the Commercial Banks, Development Banks, PSP (Payment Service Provider) and other financial institutions in Nepal. 
SCT has also entered a strategic alliance with international payment processors and schemes (UnionPay International, Pulse Network, FSS etc.) to extend its services and accessibility.
SCT is Pioneer to introduce first of its kind, integrated shared switching payment Network in Nepal, along with Domestic proprietary Card Scheme (SCT) in Nepal. 
SCT offers diversified payment services ranging from Issuance of Dual Interface (Contact and Contactless) Debit and Prepaid Card (Domestic and International), Interconnection of ATM & POS, Interoperability between multiple BFIs, Gateway to International Schemes, QRC Payment Platform and complete solution of Financial Technology thereby supporting the growth and infrastructure for Digital payment in Nepal.
              </p>
 
              <p className='mt-4 font-semibold underline text-md'>
              ATM Transaction Limit of GauSahar Nepal Coop Ltd.
             </p>
              <ul className='px-2 mt-4'>
              <li className=''>Daily Amount Limit ATM/POS(NEPAL)</li>
               <li> Minimum(ATM)--- NPRs 500</li>  
                <li>Maximum per Txn(ATM)---NPRs 25000</li>
                <li>Per day Limit(ATM)---NPRs 50000</li>
                <li>Maximum per Txn(POS)---NPRs 50000</li>
                  <li>Per day limit(POS)---NPRs 75000</li>
                  <li>Monthly Limit(ATM/POS)---NPRs 200000</li>
                 <li>Per day Count limit(ATM/POS)---5</li>
                 <li>Monthly Count Limit(ATM/POS)---30</li>
                 <li>Per Txn India (POS)---INRs( 2 to 40230)</li>
                  <li>Per day Count limit India (POS)---5</li>
                 <li>Per Txn india (ATM)---INRs (800 to 16092)</li>
                  <li>Daily Txn limit India (ATM)---INRs 24138</li>
                  <li>Monthly Txn limit India (ATM)---INRs160920</li>
                  <li>Txn Count limit India (ATM/POS)-Per day-5, Monthly-30</li>
              </ul>
                    <h1 className='mt-4 font-bold underline'>Charge as per transaction.</h1>
                    <ol className='px-2'>
                   <li>Per transaction @Rs 30 other ATM.</li> 
                    <li>Balance inquiry @Rs 5 on ATM.</li>
                   <li>Balance inquiry @Rs 13 on Other ATM.</li>
                    </ol>
              
                    <div className='my-4 text-lg font-bold'>**Note. Transaction only on SCT network.</div>
                    <h1 className='text-lg font-bold '>Our ATM locations are</h1>
                    <p>Dhulabari Service Center.</p>
                 <p>Charpane Service Center.(In front of Head Office)</p>
           
                   <div className='mt-6 font-bold underline'>List of SCT Bank and financial Institutions</div>
                    <div className='my-4 font-bold'>Commercial Banks</div>
                    
                    <ul className='px-2 text-blue-400 underline '>
                    <li> Agriculture Development Bank Ltd.</li>
                   <li> Civil Bank Ltd.</li>
                     <li>Everest Bank Ltd.</li>
                      <li>Global IME Bank Ltd.</li>
                     <li>Himalayan Bank Ltd.</li>
                      <li>Mega Bank Nepal Ltd.</li>
                       <li>Nabil Bank Ltd.</li>
                       <li>NMB Bank Ltd.</li>
                       <li>Prabhu Bank Ltd.</li>
                    </ul>

                    <div className='font-bold mt-7'>Development Banks</div>
                    <ul className='px-2 my-4 text-blue-400 underline '>
                    <li> Green Development Bank Ltd.</li>
                   <li> Kamana Sewa Bikas Bank Ltd.</li>
                     <li>Karnali Development Bank Ltd.</li>
                      <li>Saptakoshi Development Bank Ltd.</li>
                     <li>Sindhu Bikas Bank Ltd.</li>
                    </ul>
            </div>
          </div>
        </div>

        <div >
          <div className="w-full py-8 pl-2 pr-8 bg-gray-100 rounded-lg shadow-md md:ml-8 md:mt-4 md:pr-24 md:pl-2 md:py-12">
            <h2 className="mb-4 text-xl font-semibold">{title}</h2>
            {subtopics.map((subtopic, index) => (
              <div key={index} className="flex items-center mb-2">
                <div className="flex flex-col">
                  <div className="text-sm">{subtopic.text}</div>
                  <div className="flex items-center">
                    {/* Using MdDateRange icon component */}
                    <MdDateRange className="w-6 h-6 mr-2 text-gray-500" />
                    <div>
                      <p className="text-sm">{subtopic.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Debitcardatmservicec
