import React from 'react';

const CustomerSatisfaction = () => {
  const testimonialImages = [
    "/images/testimonials/Ariella.jpeg",
    "/images/testimonials/juliet.jpeg", 
    "/images/testimonials/debbie-y.png",
    "/images/testimonials/zareen.png",
    "/images/testimonials/urfa.png",
    "/images/testimonials/frances.png"
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Stars */}
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="32" height="32" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700"/>
          </svg>
        ))}
      </div>
      
      {/* Customer Avatars */}
      <div className="flex -space-x-2 mb-3">
        {testimonialImages.map((img, index) => (
          <div key={index} className="w-10 h-10 md:w-10 md:h-10 rounded-full border-2 border-white overflow-hidden bg-white">
            <img 
              src={img} 
              alt={`Customer ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Rating Text */}
      <div className="text-white text-base md:text-base font-medium text-center">
        4.9 Stars from 290+ Satisfied Users on Google
      </div>
    </div>
  );
};

export default CustomerSatisfaction; 