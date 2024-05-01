import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { MdClose } from "react-icons/md";

const Gallery1C = () => {
  //array of album1 items
  const album1Items = [
    {
      id: 1,
      imageUrl: "https://pixels.com/assets/images/products/framedPrints002.jpg",
      altText: "album1a",
    },
    {
      id: 2,
      imageUrl:
        "https://i.pinimg.com/564x/83/64/40/836440a634a8a781467f6e3c37313a56.jpg",
      altText: "album1b",
    },
    {
      id: 3,
      imageUrl:
        "https://i.pinimg.com/564x/ed/6b/25/ed6b2564920c9022070da97570379b95.jpg",
      altText: "album1c",
    },
    {
      id: 4,
      imageUrl:
        "https://i.pinimg.com/564x/cc/9e/ce/cc9eceb0e25954732e32cad314e93956.jpg",
      altText: "album1d",
    },
    {
      id: 5,
      imageUrl:
        "https://i.pinimg.com/736x/61/df/89/61df8940c947dd1f812b7edef388c08b.jpg",
      altText: "album1e",
    },
    {
      id: 6,
      imageUrl:
        "https://i.pinimg.com/564x/d7/8a/61/d78a619d187d56c2a411dfbf87b9d35e.jpg",
      altText: "album1f",
    },
    {
      id: 7,
      imageUrl:
        "https://i.pinimg.com/564x/8a/60/31/8a6031f2865b6ebe7e392173add919ea.jpg",
      altText: "album1g",
    },
    {
      id: 8,
      imageUrl:
        "https://i.pinimg.com/736x/ca/c1/22/cac1221322a73f81dba76b9f4d3c9ee9.jpg",
      altText: "album1h",
    },
    {
      id: 9,
      imageUrl:
        "https://i.pinimg.com/564x/2c/c8/14/2cc8144af7e1e87ddfc8497a9cb98f9f.jpg",
      altText: "album1i",
    },
    {
      id: 10,
      imageUrl:
        "https://i.pinimg.com/564x/83/64/40/836440a634a8a781467f6e3c37313a56.jpg",
      altText: "album1j",
    },
    {
      id: 11,
      imageUrl:
        "https://i.pinimg.com/564x/ca/c1/22/cac1221322a73f81dba76b9f4d3c9ee9.jpg",
      altText: "album1k",
    },

    {
      id: 12,
      imageUrl:
        "https://i.pinimg.com/736x/51/6f/88/516f88358ced1a7934f950d5cf87e245.jpg",
      altText: "album1l",
    },
    {
      id: 13,
      imageUrl:
        "https://i.pinimg.com/736x/6f/1c/a7/6f1ca7e941426ab626fb95437f380323.jpg",
      altText: "album1m",
    },
    {
      id: 14,
      imageUrl:
        "https://i.pinimg.com/564x/34/db/4f/34db4f55e10e29a7a73dff6349943421.jpg",
      altText: "album1n",
    },
    {
      id: 15,
      imageUrl:
        "https://i.pinimg.com/564x/d7/8a/61/d78a619d187d56c2a411dfbf87b9d35e.jpg",
      altText: "album1o",
    },
    {
      id: 16,
      imageUrl:
        "https://i.pinimg.com/564x/ae/46/af/ae46afaf2b9ea91a10a4713049b46f7f.jpg",
      altText: "album1p",
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
      prevIndex === 0 ? album1Items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === album1Items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center px-4 mx-auto md:px-8 max-w-screen-2xl">
      <div className="w-full max-w-screen-lg">
        <div className="flex flex-wrap justify-center -mx-2">
          {album1Items.map((item, index) => (
            <div
              key={item.id}
              className="w-full px-2 mt-4 md:w-1/2 lg:w-1/4 hover:scale-105"
            >
              <div
                className="flex flex-col p-2 bg-gray-100 border-b-2 shadow-lg"
                onClick={() => openModal(index)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.altText}
                  className="object-cover w-full h-64 m-2"
                />
              </div>
            </div>
          ))}
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
                src={album1Items[currentIndex].imageUrl}
                alt={album1Items[currentIndex].altText}
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

export default Gallery1C;
