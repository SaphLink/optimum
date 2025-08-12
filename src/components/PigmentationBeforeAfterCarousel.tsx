import React, { useState } from 'react';

const PigmentationBeforeAfterCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const beforeAfterPairs = [
    { before: '/images/beforeandafter/pigb4.jpg', after: '/images/beforeandafter/pigaf.jpg' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterPairs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterPairs.length) % beforeAfterPairs.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="pt-[2rem] pb-[0.5rem] md:pt-[3rem] md:pb-[1rem] px-[1rem] md:px-[3rem] bg-white">
      {/* Title */}
      <h2 className="text-[2.5rem] md:text-[4rem] font-[500] text-center text-[#35281e] px-2 md:px-0 leading-tight mb-[0.5rem]">
        BEFORE & AFTER RESULTS
      </h2>
      <p className="text-center text-[#35281e] text-[1rem] md:text-[1.2rem] mb-[2rem] font-[Raleway]">
        See the real results from our pigmentation removal treatments.
      </p>

      {/* Carousel Container */}
      <div className="relative max-w-[800px] mx-auto">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#f8eedf] hover:bg-[#35281e] hover:text-white text-[#35281e] w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 z-10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#f8eedf] hover:bg-[#35281e] hover:text-white text-[#35281e] w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 z-10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Carousel Slides */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {beforeAfterPairs.map((pair, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  {/* Before Image */}
                  <div className="w-full md:w-1/2">
                    <div className="relative">
                      <img
                        src={pair.before}
                        alt={`Before treatment ${index + 1}`}
                        className="w-full h-[250px] md:h-[500px] object-cover rounded-lg shadow-lg"
                        style={{ objectPosition: index === 2 ? 'center 90%' : 'center' }}
                      />
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-4 py-2 rounded-full text-sm md:text-lg font-semibold">
                        BEFORE
                      </div>
                    </div>
                  </div>

                  {/* After Image */}
                  <div className="w-full md:w-1/2">
                    <div className="relative">
                      <img
                        src={pair.after}
                        alt={`After treatment ${index + 1}`}
                        className="w-full h-[250px] md:h-[500px] object-cover rounded-lg shadow-lg"
                        style={{ objectPosition: index === 2 ? 'center 15%' : 'center' }}
                      />
                      <div className="absolute top-3 left-3 bg-green-500 text-white px-4 py-2 rounded-full text-sm md:text-lg font-semibold">
                        AFTER
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {beforeAfterPairs.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-[#35281e]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PigmentationBeforeAfterCarousel; 