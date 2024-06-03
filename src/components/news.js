import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';






const cardsPerPage = {
  medium:6,
};

const Newsc = () => {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/news/');
        setCardData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchCardData();
  }, []);
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

  const {t} = useTranslation('global')
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (

    <div className="container mx-auto my-8 mt-8 bg-white select-none max-w-screen-2xl md:py-24">
         <div className='flex justify-center m-2 text-2xl font-bold'>{t('news.message')}</div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {paginatedCards.map((card) => (
          <div key={card.id} className="flex flex-col items-center p-8 md:border">
            <img src={card.image} alt={t(card.title)} className="object-cover w-full h-40" />
            <h2 className="mt-2 font-serif text-lg font-thin text-gray-700">{t(card.title)}</h2>
            <p className="font-bold text-gray-600">{t(card.details)}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            className={`mx-1 px-2 py-2 rounded-full ${
              page === currentPage ? 'bg-green-800 text-white' : 'bg-gray-300'
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
