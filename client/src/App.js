import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Loader from './Components/Loader'; // Import the Loader component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      // Clear timeout if component unmounts before loading completes
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <>
      {loading ? (
        // Render Loader component while loading
        <Loader />
      ) : (
        // Render content after loading
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Service />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
