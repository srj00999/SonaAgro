import React, { useEffect, useState } from 'react';
import '../assets/Styles/Home.css';

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState(0);
  const [backgroundImages, setBackgroundImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const importedImages = await Promise.all([
        import('../assets/Images/Goats.jpg'),
        import('../assets/Images/Chickens.jpg'),
        import('../assets/Images/Dogs.jpg'),
        import('../assets/Images/Fishes1.jpg'),
        import('../assets/Images/Fishes2.jpg'),
      ]);

      setBackgroundImages(importedImages.map((module) => module.default));
    };

    importImages();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundImage((prevImage) => (prevImage + 1) % backgroundImages.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [backgroundImages]);

  return (
    <div className="home" style={{ backgroundImage: `url(${backgroundImages[backgroundImage]})` }}>
      <div className="overlay"></div>
      <div className="hero">
        <h1>Welcome to Our Website</h1>
        <p>Discover the best services for your needs.</p>
        <button>Explore Now</button>
      </div>
    </div>
  );
};

export default Home;
