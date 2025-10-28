import React from 'react'
import { ShoppingBag } from 'lucide-react'; // Import the icon

// --- Mock data based on your Figma screenshot ---
const plantData = [
  {
    imgSrc: "/c8eb5b1abede1308e0eaf899d1f7faae62a0c2f6.png", // Assuming this is Aglaonema
    name: "Aglaonema plant",
    description: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
    price: "300/-"
  },
  {
    imgSrc: "/b48312dbddc890f7f35ef3964ae1e7900b89782c (1).png",
    name: "Plantan Lilles",
    description: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
    price: "380/-"
  },
  {
    imgSrc: "/6d90916507b2b3030961c99c6af0ebac97b86c78.png",
    name: "Cactus",
    description: "It is known for their ability to thrive in arid environments and conditions.",
    price: "259/-"
  },
  {
    imgSrc: "/6d90916507b2b3030961c99c6af0ebac97b86c78.png",
    name: "Swiss cheese Plant",
    description: "It is a popular tropical houseplant known for its distinctive, perforated leaves.",
    price: "400/-"
  },
  {
    imgSrc: "/eb0351a5771ed55c7f3454bcce697dfe63237769.png",
    name: "Sansevieria plant",
    description: "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
    price: "450/-"
  },
  {
    imgSrc: "/444fba49a2674d2262c5455bcc501cb91b314490.png",
    name: "Agave plant",
    description: "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
    price: "359/-"
  }
];

// --- Reusable Plant Card Component ---
const PlantCard = ({ plant }) => {
  return (
    // FIX 1: Fixed height classes (h-96, md:h-[...], lg:h-[...]) hata di hain.
    // min-h-[350px] rakha hai.
    <div className="relative bg-[#333D33]/60 backdrop-blur-md rounded-[60px] p-6 pt-20 md:pt-6 flex flex-col border-t-2 border-l-2 border-white/20 shadow-lg min-h-[350px]"> 
      
      {/* Corner border div - No Change */}
      <div className="absolute flex flex-col bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-white/20 rounded-br-[60px]">
      </div>

      {/* Image positioning and size - No Change from your provided code */}
      <img
        src={plant.imgSrc}
        alt={plant.name}
        className=" absolute w-full h-60 right-2 object-contain -top-20 mb-4"
        onError={(e) => e.target.src = 'https://placehold.co/300x300/2A332A/FFFFFF?text=Image+Error'}
      />
      
      {/* Text size and alignment - No Change from your provided code */}
      <h3 className="pt-36 text-3xl font-normal text-gray-200 mb-2">{plant.name}</h3>
      {/* FIX 2: Fixed height 'h-20' hata diya hai */}
      <p className="text-gray-300 font-normal text-lg mb-4">{plant.description}</p>
      
      {/* Price/Button row */}
      <div className="flex justify-between items-center w-full mt-auto">
        <h4 className="text-2xl font-semibold text-white">Rs. {plant.price}</h4>
        <button className="font-normal text-lg border border-white p-2 rounded-lg hover:bg-white/10 text-white cursor-pointer">
          <ShoppingBag size={24} />
        </button>
      </div>
    </div>
  );
};

// --- Main TopSelling Component ---
const TopSelling = () => {
  return (
    <div id="top-selling-section" className='flex flex-col items-center w-full max-w-6xl mx-auto px-4 py-24'>
      <h2 className='font-semibold text-white text-5xl mb-24'>Our Top Selling Plants</h2>

      {/* Grid gap-y made responsive */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-20"> {/* Changed back gap-y-16 to gap-y-20 */}
        {plantData.map((plant) => (
          <PlantCard key={plant.name} plant={plant} />
        ))}
      </div>
    </div>
  )
}

export default TopSelling

