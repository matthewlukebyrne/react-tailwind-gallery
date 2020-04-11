import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';


function App() {
  // Array will get filled when making request
  const [images, setImages] = useState([]);
  // Once done fetching can set it to false
  const [isLoading, setIsLoading] = useState(true);
  // Search Term
  const [term, setTerm] = useState('');

  // Fetch URL (Arrow Functionality with backticks) API link URL with Json Data
  // Uses what it is the .env file
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  // Loops through and returns with additional loading....
  return (
    <div className='container mx-auto'>
      {/* Returning the Image Search */}
      {/* Will have a set text prop */}
      <ImageSearch searchText={(text) => setTerm(text)} />

      {/* If its not loading with checking the length */}
      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found...</h1>}

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : 
      <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>}
    </div>
  );
}

export default App;
