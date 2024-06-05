import React, { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { MdClose } from "react-icons/md";

const Gallery4C = () => {
  // const album4Items = [
  //   {
  //     no: 1,
  //     imageUrl:
  //       "https://i.pinimg.com/564x/82/7a/e4/827ae45170f460b2000354f59b13bcfb.jpg",
  //     altText: "album4a",
  //   },
  //   {
  //     no: 2,
  //     imageUrl:
  //       "https://images.squarespace-cdn.com/content/v1/5fa5849fc7ab3308abbdad97/47c8fe76-fcc9-4e6a-aa3d-cb5af22f96c1/Pushpa+Sahakari.jpg",
  //     altText: "album4b",
  //   },
  //   {
  //     no: 3,
  //     imageUrl: "https://www.deoc.gov.np/slider/sarsafai%20pgm_1649060788.jpg",
  //     altText: "album4c",
  //   },
  //   {
  //     no: 4,
  //     imageUrl:
  //       "https://i.pinimg.com/564x/68/bb/2b/68bb2b8b1e4c80778bfba7074cbe4b02.jpg",
  //     altText: "album4d",
  //   },
  //   {
  //     no: 5,
  //     imageUrl:
  //       "https://i.pinimg.com/564x/87/5e/3e/875e3e079d84c108f0b2f891a0718190.jpg",
  //     altText: "album4e",
  //   },
  //   {
  //     no: 6,
  //     imageUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1HRAEysPl598vO3jxMQuol7Zy9vJKrvDDmB4ItNfAw&s",
  //     altText: "album4f",
  //   },
  //   {
  //     no: 7,
  //     imageUrl:
  //       "https://gaunsahar.com/uploads/news/images/820166910GlobalIMExGIZ..jpeg",
  //     altText: "album4g",
  //   },
  //   {
  //     no: 8,
  //     imageUrl:
  //       "https://i.pinimg.com/564x/1b/5f/ef/1b5fef94158fdbc0ac4f8b53c812c224.jpg",
  //     altText: "album4h",
  //   },
  //   {
  //     no: 9,
  //     imageUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFVudBJJoHt9zj_huM6Y57fUQoRs98FAQm_toFgWkR7Q&s",
  //     altText: "album4i",
  //   },
  //   {
  //     no: 10,
  //     imageUrl:
  //       "https://i.pinimg.com/564x/b5/d7/aa/b5d7aa81f0f972cc8c400a45476e0084.jpg",
  //     altText: "album4j",
  //   },
  //   {
  //     no: 11,
  //     imageUrl:
  //       "https://i.pinimg.com/564x/2e/a4/d2/2ea4d2af9032e3c91a5de5dbc76aed2a.jpg",
  //     altText: "album4k",
  //   },

  //   {
  //     no: 12,
  //     imageUrl:
  //       "https://i.pinimg.com/564x/67/69/5a/67695aadd691cf8642cac8c379c2f0c3.jpg",
  //     altText: "album4l",
  //   },
  //   {
  //     no: 13,
  //     imageUrl:
  //       "https://i.pinimg.com/736x/ea/bf/8d/eabf8dd52cc24344d0e746bb1e6c5d5e.jpg",
  //     altText: "album4m",
  //   },
  //   {
  //     no: 14,
  //     imageUrl:
  //       "https://i.pinimg.com/736x/6c/bf/0c/6cbf0ca423aa319a3965b9ca3c53401c.jpg",
  //     altText: "album4n",
  //   },
  //   {
  //     no: 15,
  //     imageUrl:
  //       "https://i.pinimg.com/564x/8b/42/d3/8b42d3ef0c94c702a3a55dd8b07b1981.jpg",
  //     altText: "album4o",
  //   },
  //   {
  //     no: 16,
  //     imageUrl:
  //       "https://i.pinimg.com/564x/00/34/c8/0034c831c6b1b05e044acc658bbd5c99.jpg",
  //     altText: "album4p",
  //   },
  // ];

     const [album4Items , setAlbum4Items] = useState([]);

     useEffect( ()=> {
        fetch("http://localhost:5000/api/gallery/album4/")
        .then( response =>{
             if(!response.ok)
              {
                throw new Error ('response is not ok');
              }
               return response.json();
        })
        .then(data => {
          setAlbum4Items(data);
        })
        .catch(err => {
          console.error('error in fetching album4 data', err);
        })

     })
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
      prevIndex === 0 ? album4Items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === album4Items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center px-4 mx-auto md:px-8 max-w-screen-2xl">
      <div className="w-full max-w-screen-lg">
        <div className="flex flex-wrap justify-center -mx-2">
            {/* Map over album2Items array to dynamically render gallery items */}
            {album4Items.map((item,index) => (
          <div  
          key={item.no} 
          className="w-full px-2 mt-4 md:w-1/2 lg:w-1/4 hover:scale-105"
          >
            <div
             className="flex flex-col p-2 bg-gray-100 border-b-2 shadow-lg"
             onClick={() => openModal(index)}>
              <img
                src={item.imageUrl}
                alt={item.altText}
                className="object-cover w-full h-64 m-2"
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
                src={album4Items[currentIndex].imageUrl}
                alt={album4Items[currentIndex].altText}
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

export default Gallery4C;
