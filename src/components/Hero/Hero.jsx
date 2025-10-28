import React, { useState } from 'react';
import { PlayCircle, ChevronRight } from 'lucide-react';

// --- Data for the right side plant card slider ---
const heroPlants = [
  {
    imgSrc: "/c8eb5b1abede1308e0eaf899d1f7faae62a0c2f6.png", // Aapki original image
    type: "Indoor Plant",
    name: "Aglaonema plant"
  },
  {
    imgSrc: "/b48312dbddc890f7f35ef3964ae1e7900b89782c.png", // Trending se li hai
    type: "Desk Plant",
    name: "Green Desk Plant"
  },
  {
    imgSrc: "/95e728282f4fb901ee2edc80783c2fbd7df490c2.png", // Trending se li hai
    type: "Succulent",
    name: "Potted Succulent"
  }
];

const Hero = () => {
  const [currentPlantIndex, setCurrentPlantIndex] = useState(0);

  const handleNextPlant = () => {
    setCurrentPlantIndex((prevIndex) => (prevIndex + 1) % heroPlants.length);
  };

  const handleDotClick = (index) => {
    setCurrentPlantIndex(index);
  };

  const currentPlant = heroPlants[currentPlantIndex];

  return (
    // Main container - Padding adjust ki mobile ke liye
    <div className="relative w-full max-w-6xl mx-auto px-4 lg:px-4 py-10 lg:py-20 mt-10 text-gray-300">

      {/* Flex container - Mobile mein column, Laptop mein row */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-12 lg:gap-0">

        {/* --- Left Side: Text Content --- */}
        {/* Mobile: Full width, centered text, no left offset */}
        {/* Laptop (lg): Original width, left offset */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:relative lg:-left-60 gap-1 text-center lg:text-left">

          {/* Text Size adjust ki mobile/tablet ke liye */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight lg:leading-1.1">
            Earth's Exhale
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-md mt-2">
            "Earth's Exhale" symbolizes the purity and vitality of the Earth's natural
            environment and its essential role in sustaining life.
          </p>

          {/* Button Group - Center kiya mobile mein */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6"> {/* Changed mt-4 to mt-6 */}
            <button className="font-extralight text-xl lg:text-2xl border-2 border-white px-8 lg:px-10 py-2 lg:py-3 rounded-2xl hover:text-gray-300 text-white transition-colors cursor-pointer w-full sm:w-auto">
              Buy Now
            </button>
            <button className="flex items-center gap-2 font-semibold text-white hover:text-gray-300 transition-colors cursor-pointer text-lg lg:text-base">
              <PlayCircle size={40} className="lg:w-[52px] lg:h-[52px]" /> {/* Adjusted icon size */}
              Live Demo...
            </button>
          </div>

          {/* Testimonial Card - Center kiya mobile mein */}
          {/* Width adjust ki mobile ke liye */}
          <div className="bg-[#333D33]/60 mt-12 lg:mt-20 backdrop-blur-md rounded-4xl border-t-2 border-l-2 border-white/20 w-full max-w-[410px] h-auto lg:h-[200px] flex flex-col sm:flex-row items-center gap-4 p-4 shadow-lg text-left"> {/* Adjusted height, flex direction */}
            <img
              src="/testinomial.png"
              alt="Ronin Hamill"
              // Adjusted margin for mobile
              className="w-16 h-16 rounded-full shrink-0 mt-4 sm:mt-0 sm:mb-0"
              onError={(e) => e.target.src = 'https://placehold.co/64x64/333D33/FFFFFF?text=Img'}
            />
            <div className="flex flex-col justify-center items-center sm:items-start"> {/* Centered items on mobile */}
              <h4 className="font-semibold text-white text-lg">Ronin Hamill</h4>
              <div className="flex items-center gap-2 mb-1">
                {/* Stars */}
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-lg ${i < 4 ? 'text-yellow-400' : 'relative'}`}>
                    {i < 4 ? '★' : (
                      <>
                        <span className="text-yellow-400 absolute inset-0 w-1/2 overflow-hidden">★</span>
                        <span className="text-gray-500">★</span>
                      </>
                    )}
                  </span>
                ))}
              </div>
              <p className="mt-2 lg:mt-4 font-normal text-gray-300 text-sm max-w-[300px] leading-snug text-center sm:text-left"> {/* Adjusted margin, centered text mobile */}
                I can't express how thrilled I am with my new Aglaonema plant...
              </p>
            </div>
          </div>


        </div>

        {/* --- Right Side: Plant Card --- */}
        {/* Mobile: Full width, centered, no left offset, margin top */}
        {/* Laptop (lg): Original width, left offset */}
        {/* --- Right Side: Plant Card --- */}
        <div className="w-full max-w-sm lg:w-1/3 lg:relative lg:left-60 mt-12 lg:mt-0"> {/* Adjusted max-width for mobile */}
          {/* FIX: Yahaan 'backdrop-blur-md' add kiya hai */}
          <div className="bg-[#333D33]/80 border-t-2 border-l-2 border-white/20 backdrop-blur-md shadow-lg rounded-3xl p-6 text-center relative flex flex-col min-h-[450px]">

            <img
              src={currentPlant.imgSrc}
              alt={currentPlant.name}
              className="w-full h-auto -mt-16 md:-mt-20 lg:-mt-24 mb-4"
              onError={(e) => e.target.src = 'https://placehold.co/400x450/2A332A/FFFFFF?text=Image+Error'}
            />

            <div className="grow"> {/* Changed flex-grow to grow */}
              <p className="text-gray-400 text-base md:text-lg">{currentPlant.type}</p>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-300 mb-2">{currentPlant.name}</h3>
            </div>

            <div className="mt-auto w-full">
              <button
                onClick={handleNextPlant}
                className="absolute right-4 lg:right-6 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-white/10 transition-colors z-10"
              >
                <ChevronRight size={24} />
              </button>

              <button className="font-extralight text-xl lg:text-2xl border-2 border-white px-6 lg:px-8 py-2 rounded-2xl hover:text-gray-300 text-white transition-colors cursor-pointer w-full max-w-[200px] mx-auto mb-4">
                Buy Now
              </button>

              <div className="flex justify-center gap-2 mt-2">
                {heroPlants.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${currentPlantIndex === index ? 'bg-white' : 'bg-gray-500 hover:bg-gray-400'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;