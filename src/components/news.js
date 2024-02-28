import React, { useState } from 'react';




const cardData = [
  { id: 1, title: 'jan 20,2024', image: 'https://www.fiscalnepal.com/wp-content/uploads/2024/01/17th-Year-of-Service-1024x682.jpeg', details: 'Bank Anniversary' },
  { id: 2, title: 'feb 1, 2024', image: 'https://www.swifttech.com.np/blog/wp-content/uploads/2021/05/GlobalImeBank_SCT1-3.jpg', details: 'Fast Banking with swift' },
  { id: 3, title: 'feb 6, 2024', image: 'https://content.sharesansar.com/photos/02%20praisha/Companies/NewFolder%201/Prabhu.png', details: 'Bank of the year award 2023' },
  { id: 4, title:'feb 19, 2024', image: 'https://risingnepaldaily.com/storage/media/38002/image_6483441-(2).jfif', details: 'highest taX payer in banking sector' },
  { id: 5, title: 'feb 21, 2024', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXgD0ow9jv7A1sEzFMr6t_un9mcMSQszMKQg&usqp=CAU', details: 'Inaugration of newly constructed building of bank' },
  { id: 6, title: 'feb 21, 2024', image: 'https://english.pardafas.com/wp-content/uploads/2023/12/chandra-dhakal-1.jpg', details: 'Chandra Dhakal re-elected as chairman of bank' },
  { id: 7, title: 'oct 28 ,2023', image: 'https://www.statebank1910.bank//wp-content/uploads/2021/01/img_1611589922431_883.png?temp=1611601426935', details: 'Digital Banking service' },
  { id: 8, title: 'oct 28 2023', image: 'https://myrepublica.nagariknetwork.com/uploads/media/RemittancestoNepal__20201031160522.jpg', details: 'Remmittance inflow' },
  { id: 9, title: 'dec 20, 2024', image: 'https://plus.unsplash.com/premium_photo-1661766200436-5103f7ca7873?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', details: 'News 3' },
  { id: 10, title: 'dec 29, 2023', image: 'https://myrepublica.nagariknetwork.com/uploads/media/BankSketch_20220502160413.jpg', details: 'Interest rate deduction' },
  { id: 11, title: 'jan 5, 2024', image: 'https://english.makalukhabar.com/wp-content/uploads/2022/04/GaganKumar-Thapa-_-MK-MK.jpg', details: 'Thapa stresses on broader commitment for effectiveness of health insurance' },
  { id: 12, title: 'jan 5, 2024', image: 'https://paytmblogcdn.paytm.com/wp-content/uploads/2021/07/ATM_6_WhatIsATMFullFormDefinition_Uses.jpg', details: 'News 6' },
];

const cardsPerPage = {
  medium:6,
};

const Newsc = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const cardsToShow =  cardsPerPage.small && cardsPerPage.medium ;
  const cardsToShow =  cardsPerPage.medium ;
  const totalPages = Math.ceil(cardData.length / cardsToShow);
  const startIndex = (currentPage - 1) * cardsToShow;
  const endIndex = startIndex + cardsToShow;

  const paginatedCards = cardData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container mx-auto my-8 mt-8 bg-white select-none max-w-screen-2xl md:px-24 md:py-2">
         <div className='flex justify-center m-2 text-2xl font-bold'>News</div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {paginatedCards.map((card) => (
          <div key={card.id} className="flex flex-col items-center p-8 md:border">
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
