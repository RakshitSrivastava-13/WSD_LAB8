// src/App.js
import React from 'react';
import Card from './Card';
import image1 from './assets/eight8.jpeg';  // Import image with unique variable name
import image2 from './assets/five5.jpeg';   // Import image with unique variable name
import image3 from './assets/four4.jpeg';   // Import image with unique variable name

function App() {
  // Array of card data with different images
  const cardData = [
    {
      title: 'Beautiful Destination 1',
      features: ['Stunning views', 'Great hiking trails', 'Relaxing atmosphere'],
      imageUrl: image1
    },
    {
      title: 'Beautiful Destination 2',
      features: ['Amazing sunsets', 'Cool breeze', 'Peaceful environment'],
      imageUrl: image2
    },
    {
      title: 'Beautiful Destination 3',
      features: ['Lush greenery', 'Waterfalls', 'Fresh air'],
      imageUrl: image3
    }
  ];

  return (
    <div className="app">
      {cardData.map((data, index) => (
        <Card
          key={index}
          title={data.title}
          features={data.features}
          imageUrl={data.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
