 import React from 'react'
 
 const Informationc = () => {
   return (
     <div className='mx-auto max-w-screen-2xl'>

       
       <div className='flex flex-col px-8 mt-4 md:mt-28 md:flex-row md:px-24'>

       <div className='flex flex-col w-full pb-4 md:w-3/4 md:mr-8 md:h-1/2'>
        <div className='mb-4 font-bold'>Introduction</div>
        <div>The Ganeshjal Multipurpose Cooperative was established in Bs. 02/07/2064. It was registered in District Cooperative Office in Surkhet by 25 people in Patalganga DVC 06.
           The cooperative had been working in the agricultural sector since it was founded but the services diversified from 2073 when the functional committee was changed and headed by present Chairperson Mr. Prem Kumar BC. .</div>
        <div className=''> <img
            src={require('../images/slider10.png')}
            alt='Online account service'
            className='object-fill w-full p-1 my-2 md:m-2 h-1/2 md:h-1/2 rounded-xl md:mt-3 md:mx-0'
          /></div>
          <div className='md:mt-4'>
          The Organization initiated its savings and credit services in 2073 with the inauguration of the Head Office situated on Jumla Road, Birendrangar Municipality, Surkhet. In the following year, 2074, the organization pioneered ATM services, marking a significant milestone as the first ATM service provider in the cooperative history of the western region of Nepal.
           Moreover, in the same year (BS 2074), the cooperative introduced Ganeshjal smart banking, QR code payment, and eBanking services. By BS 2075, this cooperative, unique to the Karnali Province, had extended its services to include health and accidental insurance coverage for its members. The cooperative further expanded its outreach in 2075 by establishing two service centers in Birendranagar, specifically in the 10th and 15th wards.
          </div> 
          <div className='pt-4 font-bold'>Vision</div>
          <div>To emerge as the most forward-thinking cooperative within the Karnali Province and across Nepal.</div>
           <div className='pt-4 font-bold'>Mission</div>
           <div>To maintain and strengthen our status as the foremost cooperative in the Karnali Province 
            by delivering exceptional customer service, fostering creativity, promoting growth, and actively engaging our employees.</div>
       </div>

        <div  className='flex flex-col md:w-1/4 '>
          <div className='p-1 border-b-2'>
            <p>365 Banking Service</p>
          </div>

          <div className='p-1 border-b-2'>
            <p>Sms Banking</p>
          </div>

          <div className='p-1 border-b-2'>
            <p>Mobile Banking </p>
          </div>

          <div className='p-1 border-b-2'>
            <p>Internet Banking</p>
          </div>

          <div  className='p-1 border-b-2'>
            <p>Remittance</p>
          </div>

          <div className='p-1 border-b-2'>
            <p>Health Service</p>
          </div>

        

        </div>

       </div>
     </div>
   )
 }
 
 export default Informationc
 