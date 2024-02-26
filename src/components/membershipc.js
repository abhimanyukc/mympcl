// Import React and necessary modules
import React from 'react';

const ImageCard = ({ name, imageUrl }) => (
  <div className="w-full p-4 md:w-1/3 lg:w-1/4">
    <div className="overflow-hidden bg-white rounded-lg shadow-md">
      <img src={imageUrl} alt={name} className="object-fill w-full h-48" />
      <div className="p-4">
        <p className="mb-2 text-xl font-semibold">{name}</p>
      </div>
    </div>
  </div>
);

const Membershipc = () => {
  const imageCards = [
    { name: 'Image 1', imageUrl: 'https://cdn.stocksnap.io/img-thumbs/960w/business-man_JJUUYMLKOC.jpg' },
    { name: 'Image 2', imageUrl: 'https://cdn.stocksnap.io/img-thumbs/960w/woman-business_MA3I9K7GPD.jpg' },
    { name: 'Image 3', imageUrl: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Image 4', imageUrl: 'https://plus.unsplash.com/premium_photo-1675130119373-61ada6685d63?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Image 5', imageUrl: 'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Image 6', imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Image 7', imageUrl: 'https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Image 8', imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Image 9', imageUrl: 'https://cdn.stocksnap.io/img-thumbs/960w/man-reading_NEJC2MVDAZ.jpg' },
  ];

  return (
    <div className='mx-auto max-w-screen-2xl'>
    <div className="flex flex-wrap mx-6 md:mx-20">
      {imageCards.map((card, index) => (
        <ImageCard key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default Membershipc;