import React, { useState } from 'react';
import img1 from '../images/appservices.png'
import img2 from '../images/asst.jpeg'
import img3 from '../images/otherservices.png'
import img4 from '../images/365bankingservice.png'
import img5 from '../images/remittance.png'
import img6 from '../images/health-services.png'
import img7 from '../images/appservices.png'
import img8 from '../images/Capital.jpg'
import img9 from '../images/deposit.jpeg'
import img10 from '../images/atm services.png'
import img11 from '../images/slider6.jpg'
import img12 from '../images/slider8.jpg'

const cardData = [
  { id: 1, title: 'oct 28 ,2023', image: img1, details: 'News 1' },
  { id: 2, title: 'oct 28 2023', image: img2, details: 'News 2' },
  { id: 3, title: 'dec 20, 2024', image: img3, details: 'News 3' },
  { id: 4, title: 'dec 29, 2023', image: img4, details: 'News 4' },
  { id: 5, title: 'jan 5, 2024', image: img5, details: 'News 5' },
  { id: 6, title: 'jan 5, 2024', image: img6, details: 'News 6' },
  { id: 7, title: 'jan 20,2024', image: img7, details: 'News 7' },
  { id: 8, title: 'feb 1, 2024', image: img8, details: 'News 8' },
  { id: 9, title: 'feb 6, 2024', image: img9, details: 'News 9' },
  { id: 10, title:'feb 19, 2024', image: img10, details: 'News 10' },
  { id: 11, title: 'feb 21, 2024', image: img11, details: 'News 11' },
  { id: 12, title: 'feb 21, 2024', image: img12, details: 'News 12' },
];

const cardsPerPage = {
  medium:6,
  small: 4,
};

const Newsc = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsToShow =  cardsPerPage.medium && cardsPerPage.small;

  const totalPages = Math.ceil(cardData.length / cardsToShow);
  const startIndex = (currentPage - 1) * cardsToShow;
  const endIndex = startIndex + cardsToShow;

  const paginatedCards = cardData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container mx-auto my-8 mt-8 font-serif max-w-screen-2xl">
         <div className='flex justify-center m-2 text-2xl font-bold'>News</div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {paginatedCards.map((card) => (
          <div key={card.id} className="flex flex-col items-center p-4 border">
            <img src={card.image} alt={card.title} className="object-cover w-full h-40" />
            <h2 className="mt-2 font-serif text-lg font-thin text-gray-700">{card.title}</h2>
            <p className="font-bold text-gray-600">{card.details}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            className={`mx-1 px-2 py-2 rounded-full ${
              page === currentPage ? 'bg-green-500 text-white' : 'bg-gray-300'
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Newsc;
