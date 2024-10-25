import { useState, useEffect } from 'react';

function Carousel({ titles }) {
  const [currentIndex, setCurrentIndex] = useState(1); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [titles.length]);

  
  const getVisibleImages = () => {
    const prevIndex = (currentIndex - 1 + titles.length) % titles.length;
    const nextIndex = (currentIndex + 1) % titles.length;
    return [prevIndex, currentIndex, nextIndex];
  };

  const visibleImages = getVisibleImages();

  return (
    <div className="text-center h-96 mt-12">
      <h3 className="text-2xl font-bold">Títulos Obtenidos</h3>
      <div className="flex justify-center mt-12">
        {visibleImages.map((index) => (
          <img
            key={index}
            src={titles[index]}
            alt={`Título ${index + 1}`}
            className={`w-96  object-cover mx-2 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-50'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
