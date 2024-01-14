import React, { useEffect, useState } from 'react';
import '../assets/Styles/Home.css';
import Chickens from '../assets/Images/Chickens.jpg';
import Goats from '../assets/Images/Goats.jpg';
import Dogs from '../assets/Images/Dogs.jpg';
import Fishes1 from '../assets/Images/Fishes1.jpg';
import Fishes2 from '../assets/Images/Fishes2.jpg';

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState(1);

  // Array of background images
  const backgroundImages = [Goats, Chickens, Dogs, Fishes1, Fishes2];

  useEffect(() => {
    // Change background image every 5 seconds (5000 milliseconds)
    const intervalId = setInterval(() => {
      setBackgroundImage((prevImage) => (prevImage % backgroundImages.length) + 1);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [backgroundImages]); // Change the dependency to backgroundImages
  

  return (
    <div className="home" style={{ backgroundImage: `url(${backgroundImages[backgroundImage - 1]})` }}>
      <div className="hero">
        <h1>Welcome to Our Website</h1>
        <p>Discover the best services for your needs.</p>
        <button>Explore Now</button>
      </div>
    </div>
  );
};

export default Home;
