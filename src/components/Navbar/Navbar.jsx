import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full max-w-6xl mx-auto px-4 py-3 sticky top-4 z-50">
      <div className="relative backdrop-blur-sm  rounded-lg w-full text-gray-300 flex items-center px-4 md:px-8 md:-ml-72 py-3 ">


        <div className="flex items-center gap-2 shrink-0">
          <img src="/Plant.png" alt="plant" className="w-6 h-6" />
          <h3 className="font-semibold text-xl text-white">FloraVision</h3>
        </div>

        <ul className="hidden md:flex items-center gap-12 md:ml-80 md:relative md:left-40">
          <li className="font-medium text-white hover:text-white cursor-pointer transition-colors">
            Home
          </li>
          <li  className="font-medium hover:text-white cursor-pointer transition-colors">
            Plants Type
          </li>
          <li className="font-medium hover:text-white cursor-pointer transition-colors">
            More
          </li>
          <li className="font-medium hover:text-white cursor-pointer transition-colors">
            Contact
          </li>
        </ul>


        <div className="hidden md:flex relative md:left-[600px] items-center gap-6">
          <img src="/Search.png" alt="search" className="w-5 h-5 cursor-pointer hover:opacity-80" />
          <img src="/bag.png" alt="bag" className="w-5 h-5 cursor-pointer hover:opacity-80" />

        </div>


        <div className="md:hidden flex items-center ml-auto">
          <button onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden  absolute top-full left-0 right-0 mt-2 bg-black/60 backdrop-blur-md rounded-lg shadow-lg mx-4 py-4 px-6 flex flex-col items-center gap-4">
          <a href="#" className="font-medium text-white  cursor-pointer transition-colors block w-full text-center py-2">Home</a>
          <a href="#" className="font-medium text-white  cursor-pointer transition-colors block w-full text-center py-2">Plants Type</a>
          <a href="#" className="font-medium text-white  cursor-pointer transition-colors block w-full text-center py-2">More</a>
          <a href="#" className="font-medium text-white  cursor-pointer transition-colors block w-full text-center py-2">Contact</a>
          <div className="flex items-center gap-6 mt-4 pt-4 border-t border-gray-700 w-full justify-center">
            <img src="/Search.png" alt="search" className="w-5 h-5 cursor-pointer hover:opacity-80" />
            <img src="/bag.png" alt="bag" className="w-5 h-5 cursor-pointer hover:opacity-80" />
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;