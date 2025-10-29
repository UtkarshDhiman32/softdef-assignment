import React from 'react'

const reviewData = [
  {
    // Maine aapka 'testinomial.png' placeholder ke taur par use kiya hai
    imgSrc: "/a5003c9c04bdc265d997eb88ecb49b2ed88c8428.png", 
    name: "Shelly Russel",
    review: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!"
  },
  {
    imgSrc: "/8af347a65acb49fcb29cfac2ba705f2b27151f3f.jpg", 
    name: "Lula Rolfson",
    review: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my room."
  },
  {
    imgSrc: "/04f4a376d1869488dd43f1a5e57a36f5cdf73be4.png", 
    name: "Carol Huels",
    review: "It's like bringing a little piece of nature indoors. Definitely a great investment—my plant collection has never looked better!"
  }
];


const ReviewCard = ({ review }) => {
  return (
    <div className="bg-[#333D33]/60 rounded-[70px] backdrop-blur-md p-8 border-t-2 border-r-2 border-white/20 flex flex-col gap-4 shadow-lg">
      
      <div className="flex items-start gap-4">
        <img 
          src={review.imgSrc} 
          alt={review.name} 
          className="w-16 h-16 rounded-full object-cover mt-1" 
        />
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold text-white">{review.name}</h3>
          <div className="flex items-center gap-1 mt-1"> 
            <span className="text-yellow-400 text-lg">★</span>
            <span className="text-yellow-400 text-lg">★</span>
            <span className="text-yellow-400 text-lg">★</span>
            <span className="text-yellow-400 text-lg">★</span>
            <span className="text-yellow-400 text-lg">★</span> 
          </div>
        </div>
      </div>
      
      <p className="text-gray-300 font-light text-md mt-2"> 
        {review.review}
      </p>
    </div>
  );
};



const CustomerReview = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full py-16 gap-20'>
      
     <h2 className="relative text-5xl font-semibold px-4 py-2 text-white text-center ">
  <span 
    // FIX: Margin ko sirf desktop (lg:) par apply kiya
    className="absolute bottom-0 left-0 w-8 h-12 md:w-12 ml-8 md:h-14 border-b-4 border-l-4 border-[#FCDA69] rounded-bl-xl lg:-ml-6 md:-ml-5" 
  />
  Customer Review
  <span 
    // FIX: Margin ko sirf desktop (lg:) par apply kiya
    className="absolute top-0 right-0 w-8 h-10 md:w-12 md:-mr-5 md:h-14 mr-6  border-t-4 border-r-4 border-[#FCDA69] rounded-tr-xl lg:-mr-3" 
  />
</h2>

      <div className="w-full max-w-6xl  grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {reviewData.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </div>

    </div>
  )
}

export default CustomerReview


// const CustomerReview = () => {
//   return (
//     // Yeh main container hai title ko center karne ke liye
//     <div className='flex items-center justify-center w-full py-16'>
      
//       {/* Title Wrapper: 'relative' iske andar ke corners ke liye anchor hai */}
//       <h2 className="relative text-5xl font-semibold text-white px-10 py-5">
        
//         {/* Top-Left Corner */}
//         <span 
//           className="absolute top-0 left-0 w-12 h-8 border-t-4 border-l-4 border-[#FCDA69]" 
//         />
        
//         Customer Review
        
//         {/* Bottom-Right Corner */}
//         <span 
//           className="absolute bottom-0 right-0 w-12 h-8 border-b-4 border-r-4 border-[#FCDA69]" 
//         />
//       </h2>
//     </div>
//   )
// }

// export default CustomerReview