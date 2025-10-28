import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slideData = [
  {
    imgSrc: "/c8eb5b1abede1308e0eaf899d1f7faae62a0c2f6 (1).png",
    heading: "Breathe Fresh with O2 Powerhouses",
    p1: "Explore our collection of plants renowned for maximizing oxygen production, turning your space into a revitalizing sanctuary.",
    p2: "These green companions work day and night, absorbing CO2 and releasing pure oxygen, boosting focus and well-being naturally."
  },
  {
    imgSrc: "/b48312dbddc890f7f35ef3964ae1e7900b89782c.png",
    heading: "Natural Air Purifiers for Your Home",
    p1: "Go beyond oxygen! Many of our selected plants are scientifically proven to filter harmful toxins like formaldehyde and benzene from the air.",
    p2: "Create a healthier indoor environment effortlessly. Let nature do the cleaning, leaving you with fresh, purified air to breathe."
  },
  {
    imgSrc: "/95e728282f4fb901ee2edc80783c2fbd7df490c2.png",
    heading: "Boost Wellness & Reduce Stress",
    p1: "Studies show that indoor plants can significantly reduce stress levels and improve mood. Bring tranquility into your daily life.",
    p2: "Adding greenery connects us to nature, promoting a sense of calm and relaxation even in the busiest environments."
  },
  {
    imgSrc: "/eb0351a5771ed55c7f3454bcce697dfe63237769.png",
    heading: "Low Maintenance, High Impact",
    p1: "Worried about upkeep? Our O2 plant collection includes many hardy varieties that thrive with minimal care.",
    p2: "Enjoy the benefits of cleaner air and a beautiful space without the fuss. Perfect for busy lifestyles and beginners alike!"
  }
];

const Best = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = slideData.length;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };


  const currentSlide = slideData[currentIndex];

  return (
    // Main container - Added overflow-x-hidden for extra safety
    <div className='flex flex-col items-center w-full max-w-6xl mx-auto px-4 py-16 text-gray-300 gap-12 md:gap-20 overflow-x-hidden'>

      {/* --- Title Section --- Responsive Text Size */}
      <h2 className="relative text-4xl md:text-5xl font-semibold px-10 py-5 text-white text-center">
        <span
          className="absolute bottom-0 left-0 w-10 h-12 md:w-12 md:h-14 border-b-4 border-l-4 border-[#50790B] rounded-bl-xl"
        />
        Our Best o2
        <span
          className="absolute top-0 right-0 w-10 h-12 md:w-12 md:h-14 border-t-4 border-r-4 border-[#50790B] rounded-tr-xl"
        />
      </h2>

      {/* --- Main Content Card --- */}
      {/* Increased min-h slightly for more consistent height */}
      <div className="relative bg-[#333D33]/60 rounded-[70px] backdrop-blur-md p-6 md:p-12 border-l-2 border-r-2 border-white/20 w-full flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12 shadow-lg min-h-[550px] md:min-h-[500px]">

        {/* Left Side: Image container */}
        <div className="w-full md:w-1/2 relative order-first md:order-none flex justify-center items-center min-h-[250px] md:min-h-full"> {/* Use min-h-full on md */}
          <img
            src={currentSlide.imgSrc}
            alt="Best O2 Plant"
            // Mobile: Relative, centered, slightly smaller, margin-top
            // Tablet(md): Absolute, centered vertically, slightly off-left
            // Laptop(lg): Absolute, centered vertically, further off-left, larger
            className='relative md:absolute -mt-10 md:mt-0 md:-left-4 lg:-left-6 md:top-1/2 md:-translate-y-1/2 w-4/5 sm:w-3/5 md:w-[400px] lg:w-[550px] h-auto object-contain mx-auto md:mx-0 z-10'
            onError={(e) => e.target.src = 'https://placehold.co/600x600/2A332A/FFFFFF?text=Image+Error'}
          />
        </div>

        {/* Right Side: Text Content */}
        {/* Adjusted width for tablet (md:w-1/2) */}
        <div className="w-full md:w-1/2 flex flex-col justify-between gap-4 md:ml-auto text-center md:text-left py-4">

          {/* FIX: Replaced fixed height with min-height */}
          <div className="min-h-[200px] md:min-h-[250px]"> {/* Wrapper for text content with MIN-height */}
            {/* Responsive heading size */}
            <h2 className='font-semibold text-2xl md:text-3xl lg:text-4xl text-white'>{currentSlide.heading}</h2>

            {/* Responsive paragraph size */}
            <p className='font-light text-base md:text-lg text-gray-300 mt-4'>
              {currentSlide.p1}
            </p>

            {/* Responsive paragraph size */}
            <p className='font-light text-base md:text-lg text-gray-300 mt-2'>
              {currentSlide.p2}
            </p>
          </div>

          {/* Button and Pagination Row */}
          {/* Responsive button/pagination layout */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            {/* Responsive button */}
            <button className="font-normal text-base md:text-lg border border-white px-6 md:px-8 py-2 rounded-lg hover:bg-white/10 text-white transition-colors cursor-pointer w-full sm:w-auto">
              Explore
            </button>

            {/* Responsive pagination */}
            <div className="flex items-center gap-2 md:gap-4">
              <button
                onClick={handlePrevClick}
                className="p-1 md:p-2 border border-white/30 rounded-full text-white hover:bg-white/10"
              >
                <ChevronLeft size={16} md:size={20} />
              </button>
              <span className="text-gray-400 text-sm md:text-base">
                {String(currentIndex + 1).padStart(2, '0')}/0{totalItems}
              </span>

              <button
                onClick={handleNextClick}
                className="p-1 md:p-2 border border-white/30 rounded-full text-white hover:bg-white/10"
              >
                <ChevronRight size={16} md:size={20} />
              </button>

              


            </div>
            
          </div>
          
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-2">
                {slideData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${currentIndex === index ? 'bg-white' : 'bg-gray-500 hover:bg-gray-400'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
    </div>
  )
}

export default Best

