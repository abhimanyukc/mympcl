// Import necessary libraries
import React, { useState } from 'react';

// Dummy card data
const cardData = [
  { id: 1, imageUrl: 'https://placekitten.com/300/200', title: 'Card 1', details: 'Details of Card 1' },
  { id: 2, imageUrl: 'https://placekitten.com/300/201', title: 'Card 2', details: 'Details of Card 2' },
  { id: 3, imageUrl: 'https://placekitten.com/300/202', title: 'Card 3', details: 'Details of Card 3' },
  { id: 4, imageUrl: 'https://placekitten.com/300/203', title: 'Card 4', details: 'Details of Card 4' },
  { id: 5, imageUrl: 'https://placekitten.com/300/204', title: 'Card 5', details: 'Details of Card 5' },
  { id: 6, imageUrl: 'https://placekitten.com/300/202', title: 'Card 6', details: 'Details of Card 6' },
 
];

const News = () => {
  // State for current page
  const [currentPage, setCurrentPage] = useState(1);
  // Cards per page
  const cardsPerPage = 3;
  // Calculate the index of the first card to display on the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  // Get the current cards to display
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {currentCards.map((card) => (
          <div key={card.id} className="mb-4">
            <img src={card.imageUrl} alt={card.title} className="object-cover w-full h-48" />
            <h3 className="mt-2 text-lg font-semibold">{card.title}</h3>
            <p className="text-gray-600">{card.details}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(cardData.length / cardsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-2 px-4 py-2 rounded-full ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default News;
