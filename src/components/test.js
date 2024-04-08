import React from 'react';

// ChildComponent that receives title and description as props
const ChildComponent = ({ title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

// ParentComponent where title and description are defined
const ParentComponent = () => {
  // Define title and description
  const title = 'Title from Parent Component';
  const description = 'Description from Parent Component';

  return (
    <div>
      {/* Render ChildComponent and pass title and description as props */}
      <ChildComponent title={title} description={description} />
    </div>
  );
};

export default ParentComponent;
