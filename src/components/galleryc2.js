import React, {useState} from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';

const Gallery2C = () => {
    const album2Items = [
        {
          no: 1,
          imageUrl: 'https://i.pinimg.com/564x/83/64/40/836440a634a8a781467f6e3c37313a56.jpg',
          altText: "album2a",
        },
        {
          no: 2,
          imageUrl: "https://i.pinimg.com/564x/68/c9/66/68c966a44b63f7f5089ddb0b6a19bec5.jpg",
          altText: "album2b",
        },
        {
          no: 3,
          imageUrl:
            "https://i.pinimg.com/736x/e4/09/c2/e409c2f4c6e28b0f2bde84453730e58a.jpg",
          altText: "album2c",
        },
        {
          no: 4,
          imageUrl:
            "https://i.pinimg.com/564x/68/bb/2b/68bb2b8b1e4c80778bfba7074cbe4b02.jpg",
          altText: "album2d",
        },
        {
          no: 5,
          imageUrl:
            "https://i.pinimg.com/564x/87/5e/3e/875e3e079d84c108f0b2f891a0718190.jpg",
          altText: "album2e",
        },
        {
          no: 6,
          imageUrl:
            "https://i.pinimg.com/564x/d0/8d/2a/d08d2a7c19f2e2844bc3916d2924976d.jpg",
          altText: "album2f",
        },
        {
          no: 7,
          imageUrl:
            "https://i.pinimg.com/564x/d2/74/09/d2740939d9ef5e2f433209f67806aaff.jpg",
          altText: "album2g",
        },
        {
          no: 8,
          imageUrl:
            "https://i.pinimg.com/564x/1b/5f/ef/1b5fef94158fdbc0ac4f8b53c812c224.jpg",
          altText: "album2h",
        },
        {
          no: 9,
          imageUrl:
            "https://i.pinimg.com/564x/5f/55/f8/5f55f8832fa1b5c91e75e65e38547649.jpg",
          altText: "album2i",
        },
        {
          no: 10,
          imageUrl:
            "https://i.pinimg.com/564x/68/59/dc/6859dc1ceae7d11ec16414c68e307df5.jpg",
          altText: "album2j",
        },
        {
          no: 11,
          imageUrl:
            "https://i.pinimg.com/564x/69/de/eb/69deebe19fb836288f317a3672bcdc17.jpg",
          altText: "album2k",
        },
    
        {
          no: 12,
          imageUrl:
            "https://i.pinimg.com/564x/85/d5/d4/85d5d4ca86e36cd83c493b5b50c154c2.jpg",
          altText: "album2l",
        },
        {
          no: 13,
          imageUrl:
            "https://i.pinimg.com/564x/ff/58/c2/ff58c20c2dbf37ac926d3179d09be584.jpg",
          altText: "album2m",
        },
        {
          no: 14,
          imageUrl:
            "https://i.pinimg.com/564x/aa/03/df/aa03df90bf94f719996bb610617712a8.jpg",
          altText: "album2n",
        },
        {
          no: 15,
          imageUrl:
            "https://i.pinimg.com/564x/98/8a/61/988a6171321ac8cd6a28717ef20eded9.jpg",
          altText: "album2o",
        },
        {
          no: 16,
          imageUrl:
            "https://i.pinimg.com/564x/6e/29/7a/6e297ab5c8a0d41d560954d93676426e.jpg",
          altText: "album2p",
        },
      ];

      const [currentIndex, setCurrentIndex] = useState(null);
      const [modalOpen, setModalOpen] = useState(false);

      const openModal = (index) => {
        setCurrentIndex(index);
        setModalOpen(true);
      }

      const closeModal = () => {
        setCurrentIndex(null);
        setModalOpen(false);
      }
      const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? album2Items.length - 1 : prevIndex - 1
        );
      };
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === album2Items.length - 1 ? 0 : prevIndex + 1
        );
      };
    
  return (
    <div className='flex flex-col items-center px-4 mx-auto md:px-8 max-w-screen-2xl'>
      <div className='w-full max-w-screen-lg'>
      <div className='flex flex-wrap justify-center -mx-2'>
       {/* Map over album2Items array to dynamically render gallery items */}
       {album2Items.map((item, index) => (
      <div 
      key={item.no} 
      className='w-full px-2 mt-4 md:w-1/2 lg:w-1/4 hover:scale-105'
      >
      <div 
      className='flex flex-col p-2 bg-gray-100 border-b-2 shadow-lg'
      onClick={() => openModal(index)}
      >
    <img 
    src={item.imageUrl} 
    alt={item.altText} 
    className='object-cover w-full h-64 m-2' 
    />
  </div>
</div>
       ))
}

</div>
      </div>

      {modalOpen && currentIndex !== null && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 z-80">
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
                src={album2Items[currentIndex].imageUrl}
                alt={album2Items[currentIndex].altText}
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

export default Gallery2C;
