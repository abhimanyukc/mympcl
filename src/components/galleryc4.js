import React, { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { MdClose } from "react-icons/md";

const Gallery4C = () => {

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
