import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const GalleryC = () => {
  // Array of gallery items
  // const galleryItems = [
  //   {
  //     no: 1,
  //     title: 'kapda bitaran',
  //     imageUrl: 'https://pixels.com/assets/images/products/framedPrints002.jpg',
  //     linkUrl: '/gallery/albumi'
  //   },
  //   {
  //     no: 2,
  //     title: '27th Agm',
  //     imageUrl: 'https://i.pinimg.com/564x/cc/72/fe/cc72febd5d54cf625c3523f0942423bc.jpg',
  //     linkUrl: '/gallery/albumii'
  //   },
  //   {
  //     no: 3,
  //     title: 'album iii',
  //     imageUrl: 'https://i.pinimg.com/564x/72/cc/c4/72ccc4539d10b1dc11f44c3560917a29.jpg',
  //     linkUrl: '/gallery/albumiii'
  //   },
  //   {
  //     no: 4,
  //     title: 'album iv',
  //     imageUrl: 'https://i.pinimg.com/564x/82/7a/e4/827ae45170f460b2000354f59b13bcfb.jpg',
  //     linkUrl: '/gallery/albumiv'
  //   }
  // ];
  const [galleryItems, setGalleryItems] = useState([]);
  
  useEffect(()=> {
    axios.get("http://localhost:5000/api/gallery/")
    .then(response=> {
       setGalleryItems(response.data);
    })
    .catch(err=>{
         console.error("Error in fetching gallery data", err)
    })
  }, [])
  return (
    <div className='flex flex-col items-center px-4 mx-auto md:px-8 max-w-screen-2xl'>
      <div className='w-full max-w-screen-lg'>
        <div className='flex flex-wrap justify-center -mx-2'>
          {/* Map over galleryItems array to dynamically render gallery items */}
          {galleryItems.map(item => (
            <Link key={item.no} to={item.linkUrl} className='w-full px-2 mt-4 md:w-1/2 lg:w-1/4 hover:scale-105'>
              <div className='flex flex-col p-2 bg-gray-100 border-b-2 shadow-lg'>
                <img src={item.imageUrl} alt={`album${item.no}`} className='object-cover w-full h-64 m-2' />
                <div className='flex flex-row m-2'>
                  <div className='mr-2 font-bold'>{item.no}</div>
                  <div>{item.title}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryC;
