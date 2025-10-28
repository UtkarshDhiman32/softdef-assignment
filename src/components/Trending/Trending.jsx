import React from 'react'
import { ShoppingBag } from 'lucide-react'

const Trending = () => {
  return (
    // Responsive padding and gap
    <div className='flex flex-col items-center w-full max-w-6xl mx-auto px-4 py-16 text-gray-300 gap-16 lg:gap-24'>

      {/* 1. Title - Responsive text size and padding */}
      <h2 className='relative text-white font-semibold text-3xl sm:text-4xl lg:text-5xl z-10 px-6 py-3 lg:px-10 lg:py-5 text-center'>
        {/* Responsive corner sizes */}
        <span 
            className="absolute bottom-0 left-0 w-10 h-10 lg:w-12 lg:h-14 border-b-4 border-l-4 border-[#50790B] rounded-bl-lg lg:rounded-bl-xl" 
        />
        Our Trendy plants
        <span 
            className="absolute top-0 right-0 w-10 h-10 lg:w-12 lg:h-14 border-t-4 border-r-4 border-[#50790B] rounded-tr-lg lg:rounded-tr-xl" 
        />
      </h2>

      {/* --- Card 1 --- */}
      {/* Mobile/Tablet: Stacked layout */}
      {/* Desktop (lg): Horizontal layout */}
      <div className="relative w-full lg:mt-12 flex flex-col lg:flex-row items-center"> 
        
        {/* Image - Responsive positioning and size */}
        <img
          src="/b48312dbddc890f7f35ef3964ae1e7900b89782c.png"
          alt="Desk Decoration Plant"
          // Mobile/Tablet: Centered, smaller overlap
          // Desktop (lg): Original absolute positioning
          className='relative lg:absolute lg:-mt-16 lg:-top-20 lg:left-8 w-2/3 sm:w-1/2 lg:w-1/3 rounded-lg z-10 mb-4 lg:mb-0 mx-auto lg:mx-0 md:inset-y-32 inset-y-24' 
          onError={(e) => e.target.src = 'https://placehold.co/200x200/2A332A/FFFFFF?text=Image+Error'}
        />

        {/* Card Content Box - Responsive rounding, padding */}
        <div className='relative bg-[#333D33]/60 backdrop-blur-lg rounded-[60px] lg:rounded-[100px] border border-white/30 w-full p-6 pt-16 sm:pt-20 lg:p-8 shadow-lg'>
          {/* Text Content - Responsive width and margin */}
          <div className='flex flex-col gap-2 w-full lg:w-[55%] lg:ml-auto text-center lg:text-left lg:px-8'> 
            <h2 className='text-white text-2xl lg:text-3xl font-semibold'>For Your Desks Decorations</h2>
            <p className='font-light text-md md:text-md text-gray-300 max-w-lg mx-auto lg:mx-0'>
              I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!
            </p>
            <h2 className='font-semibold text-3xl lg:text-4xl text-white mt-2'>Rs. 599/-</h2>
            {/* Button Row - Responsive layout */}
            <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-4'>
              <button className="font-normal text-base md:text-lg border border-white rounded-lg hover:text-gray-300 text-white cursor-pointer px-6 md:px-8 py-2 w-full sm:w-auto">
                Explore
              </button>
              <button className="font-normal text-base md:text-lg border border-white p-2 rounded-lg hover:text-gray-300 text-white cursor-pointer">
                {/* Responsive icon size */}
                <ShoppingBag size={window.innerWidth < 768 ? 20 : 24} /> 
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- Card 2 --- */}
      {/* Mobile/Tablet: Stacked layout */}
      {/* Desktop (lg): Horizontal layout */}
      <div className="relative w-full lg:mt-24 flex flex-col lg:flex-row items-center">
        
         {/* Card Content Box - Comes first in code for mobile ordering */}
         <div className='relative bg-[#333D33]/60 backdrop-blur-lg rounded-[60px] lg:rounded-[100px] border border-white/30 w-full p-6 pt-16 sm:pt-20 lg:p-8 shadow-lg '>
            {/* Text Content - Responsive width and margin */}
           <div className='flex  flex-col gap-2 w-full lg:w-[55%] text-center lg:text-left lg:px-8'> {/* Removed lg:ml-auto */}
             <h2 className='text-white text-2xl lg:text-3xl font-semibold'>For Your Desks Decorations</h2> 
             <p className='font-light text-md md:text-md text-gray-300 max-w-lg mx-auto lg:mx-0'>
               This greenery adds a touch of nature and serenity to my desk, making it feel more calming and inviting.
             </p>
             <h2 className='font-semibold text-3xl lg:text-4xl text-white mt-2'>Rs. 399/-</h2>
             {/* Button Row - Responsive layout */}
             <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-4'>
               <button className="font-normal text-base md:text-lg border border-white rounded-lg hover:text-gray-300 text-white cursor-pointer px-6 md:px-8 py-2 w-full sm:w-auto">
                 Explore
               </button>
               <button className="font-normal text-base md:text-lg border border-white p-2 rounded-lg hover:text-gray-300 text-white cursor-pointer">
                 {/* Responsive icon size */}
                 <ShoppingBag size={window.innerWidth < 768 ? 20 : 24} />
               </button>
             </div>
           </div>
         </div>

        {/* Image - Comes AFTER text in code but uses 'order-first' */}
        <img
          src="/95e728282f4fb901ee2edc80783c2fbd7df490c2.png" 
          alt="Succulent Plant"
          // Mobile/Tablet: Centered, smaller overlap, appears first
          // Desktop (lg): Original absolute positioning on the right
          className='relative lg:absolute  order-first lg:order-none md:inset-y-36  -mt-16 lg:-top-20 lg:right-8 w-2/3 sm:w-1/2 lg:w-1/3 rounded-lg z-10 mb-4 lg:mb-0 mx-auto lg:mx-0 inset-y-24' 
          onError={(e) => e.target.src = 'https://placehold.co/200x200/2A332A/FFFFFF?text=Image+Error'}
        />

      </div>
    </div>
  )
}

export default Trending

