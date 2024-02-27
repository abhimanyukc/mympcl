
import React from 'react';
  import { BsPhone } from 'react-icons/bs';
   import { BsMailbox } from 'react-icons/bs';
const Branchesc = () => {
 

  return (
    <div className="mx-auto max-w-screen-2xl">
       
       <div className='mx-8 mt-24 md:mx-24'>
       <div className='flex justify-center mb-8 font-bold md:justify-start max-w-screen-2xl'>Our Branches</div>
         
         <div className='flex flex-col flex-wrap justify-center md:justify-start md:flex-row'>
        <div className='flex flex-col p-2 mb-16 mr-8 text-green-800 border rounded-lg '>
             <div className=' text-primary'>Central Office</div>
             <div className='mt-4 '>Birendranagar - 3, Jumla Road Surkhet</div>
             <div className='flex mt-2 '>
                <div><BsPhone/></div>
                <div className='text-sm text-nowrap'>083-525052, 083-525054, 9848113034</div>
            </div>
             <div className='flex flex-wrap items-center mt-2'>
                <div><BsMailbox/></div>
                <div>ganeshjalskt@gmail.com</div>
                </div>
        </div>

        <div className='p-2 mb-16 mr-8 text-green-800 border rounded-lg '>
             <div className=' text-primary'>Central Office</div>
             <div className='mt-4 '>Birendranagar - 3, Jumla Road Surkhet</div>
             <div className='flex mt-2 '>
                <div><BsPhone/></div>
                <div className='text-sm text-nowrap'>083-525052, 083-525054, 9848113034</div>
            </div>
             <div className='flex flex-wrap items-center mt-2'>
                <div><BsMailbox/></div>
                <div>ganeshjalskt@gmail.com</div>
                </div>
        </div>

        <div className='p-2 mb-16 mr-8 text-green-800 border rounded-lg '>
             <div className=' text-primary'>Central Office</div>
             <div className='mt-4 '>Birendranagar - 3, Jumla Road Surkhet</div>
             <div className='flex mt-2 '>
                <div><BsPhone/></div>
                <div className='text-sm text-nowrap'>083-525052, 083-525054, 9848113034</div>
            </div>
             <div className='flex flex-wrap items-center mt-2'>
                <div><BsMailbox/></div>
                <div>ganeshjalskt@gmail.com</div>
                </div>
        </div>

        
        <div className='p-2 mb-16 mr-8 text-green-800 border rounded-lg '>
             <div className=' text-primary'>Central Office</div>
             <div className='mt-4 '>Birendranagar - 3, Jumla Road Surkhet</div>
             <div className='flex mt-2 '>
                <div><BsPhone/></div>
                <div className='text-sm '>083-525052, 083-525054, 9848113034</div>
            </div>
             <div className='flex flex-wrap items-center mt-2'>
                <div><BsMailbox/></div>
                <div>ganeshjalskt@gmail.com</div>
                </div>
        </div>
        
        </div>
       </div>
    </div>
  );
};

export default Branchesc;
