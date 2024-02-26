// CardContainer.js
import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const Branchesc = () => {
  const cardsData = [
    { title: 'Card 1', content: 'Content for Card 1' },
    { title: 'Card 2', content: 'Content for Card 2' },
    { title: 'Card 3', content: 'Content for Card 3' },
    { title: 'Card 4', content: 'Content for Card 4' },
    { title: 'Card 5', content: 'Content for Card 5' },
    { title: 'Card 6', content: 'Content for Card 6' },
  ];

  return (
    <div className="flex flex-wrap mx-auto max-w-screen-2xl ">
      {cardsData.map((card, index) => (
        <Card key={index} className="">
          <CardContent>
            <Typography variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {card.content}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Branchesc;
