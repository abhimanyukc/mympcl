import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';

const Gallery3C = () => {
    const album3Items = [
        {
          id: 1,
          imageUrl: 'https://i.pinimg.com/564x/72/cc/c4/72ccc4539d10b1dc11f44c3560917a29.jpg',
          altText: "album3a",
        },
        {
          id: 2,
          imageUrl: "https://i.pinimg.com/564x/32/6a/67/326a670b17eb521f946e42535e4354e2.jpg",
          altText: "album3b",
        },
        {
          id: 3,
          imageUrl:
            "https://i.pinimg.com/564x/e0/4a/02/e04a02305b73047bda3167423579561d.jpg",
          altText: "album3c",
        },
        {
          id: 4,
          imageUrl:
            "https://i.pinimg.com/564x/8e/aa/11/8eaa116d384b7b84ac6790af649658e1.jpg",
          altText: "album3d",
        },
        {
          id: 5,
          imageUrl:
            "https://i.pinimg.com/564x/22/31/75/223175d64b83558cd1cd8021e5c3bbec.jpg",
          altText: "album3e",
        },
        {
          id: 6,
          imageUrl:
            "https://i.pinimg.com/564x/e5/88/89/e588896292f7586f7e0506417c9ddd56.jpg",
          altText: "album3f",
        },
        {
          id: 7,
          imageUrl:
            "https://i.pinimg.com/564x/1b/47/64/1b47643c528c03a90f09746268195043.jpg",
          altText: "album3g",
        },
        {
          id: 8,
          imageUrl:
            "https://i.pinimg.com/736x/2a/57/0d/2a570dbd8f5b225ac0227173046998c4.jpg",
          altText: "album3h",
        },
        {
          id: 9,
          imageUrl:
            "https://i.pinimg.com/564x/e3/6d/12/e36d1212cfad7580388a3042b1b8a589.jpg",
          altText: "album3i",
        },
        {
          id: 10,
          imageUrl:
            "https://i.pinimg.com/564x/48/35/d7/4835d738f169a5615c575d9aa39fb866.jpg",
          altText: "album3j",
        },
        {
          id: 11,
          imageUrl:
            "https://i.pinimg.com/564x/69/de/eb/69deebe19fb836288f317a3672bcdc17.jpg",
          altText: "album3k",
        },
    
        {
          id: 12,
          imageUrl:
            "https://i.pinimg.com/564x/85/d5/d4/85d5d4ca86e36cd83c493b5b50c154c2.jpg",
          altText: "album3l",
        },
        {
          id: 13,
          imageUrl:
            "https://i.pinimg.com/564x/ff/58/c2/ff58c20c2dbf37ac926d3179d09be584.jpg",
          altText: "album3m",
        },
        {
          id: 14,
          imageUrl:
            "https://i.pinimg.com/564x/aa/03/df/aa03df90bf94f719996bb610617712a8.jpg",
          altText: "album3n",
        },
        {
          id: 15,
          imageUrl:
            "https://i.pinimg.com/564x/98/8a/61/988a6171321ac8cd6a28717ef20eded9.jpg",
          altText: "album3o",
        },
        {
          id: 16,
          imageUrl:
            "https://i.pinimg.com/564x/6e/29/7a/6e297ab5c8a0d41d560954d93676426e.jpg",
          altText: "album3p",
        },
      ];

      const [currentIndex, setCurrentIndex] = useState(null);
      const [modalOpen, setModalOpen] = useState(false);
    
      const openModal = (index) => {
        setCurrentIndex(index);
        setModalOpen(true);
      };
    
      const closeModal = () => {
        setCurrentIndex(null);
        setModalOpen(false);
      };
    
      const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? album3Items.length - 1 : prevIndex - 1
        );
      };
      const handleNext = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === album3Items.length - 1 ? 0 : prevIndex + 1
        );
      };
    
  return (
    <div className='flex flex-col items-center px-4 mx-auto md:px-8 max-w-screen-2xl'>
      <div className='w-full max-w-screen-lg'>
        <div className='flex flex-wrap justify-center -mx-2'>
          {/* Map over album3Items array to dynamically render gallery items */}
          {album3Items.map((item, index) => (
          <div  key={item.id} className='w-full px-2 mt-4 md:w-1/2 lg:w-1/4 hover:scale-105'>
            <div className='flex flex-col p-2 bg-gray-100 border-b-2 shadow-lg'
               onClick={() => openModal(index)}>
              <img src={item.imageUrl} alt={item.altText} className='object-cover w-full h-64 m-2' />
            </div>
          </div>
          ))
        }
        </div>
      </div>

      {modalOpen && currentIndex !== null && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="relative max-w-screen-lg">
            <button
              onClick={handlePrevious}
              className="absolute left-0 px-4 py-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-l top-1/2"
            >
              <BsChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 px-4 py-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-r top-1/2"
            >
              <BsChevronRight />
            </button>
            <div className="text-center">
              <img
                src={album3Items[currentIndex].imageUrl}
                alt={album3Items[currentIndex].altText}
                className="object-cover "
                style={{ width: "400px", height: "400px" }}
              />
            </div>
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 px-4 py-2 text-white"
            >
              <MdClose/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery3C;
