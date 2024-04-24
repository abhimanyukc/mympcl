import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const LoanCard = ({ image, title, description , route}) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 m-4 bg-white rounded-lg shadow-lg">
            <Link to={`/${route}`}> {/* Use Link component with route */}
      <img src={image} alt={title} className="w-32 h-32 mb-4 rounded-full " />
      <p className="text-lg font-semibold text-gray-600">{description}</p>
    </Link>
    </div>
  );
};

const Loansc = ({ loans }) => {
  return (
    <div className="px-6 mx-auto max-w-screen-2xl md:px-8">
      <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {loans.map((loan, index) => (
          <LoanCard
            key={index}
            image={loan.image}
            title={loan.title}
            description={loan.description}
            route={loan.route}  // pass route as prop
          />
        ))}
      </div>
    </div>
  );
};

export default Loansc;
