import React from 'react'
// Social media icons (optional, aap text bhi use kar sakte hain)

const Footer = () => {
    return (
        // Main Footer Container
        <div className='w-full max-w-6xl mx-auto px-4 py-16 text-gray-300'>

            {/* Top Row: 3 Columns */}
            <div className='flex justify-between items-start flex-wrap gap-y-8 mb-12'> {/* Added flex-wrap and gap-y for responsiveness */}

                {/* --- Column 1: Logo, Desc, Social --- */}
                {/* Adjust width (e.g., w-full md:w-2/5 for responsiveness) */}
                <div className='w-full md:w-2/5 flex flex-col gap-4 pr-8'>
                    {/* Logo and Name */}
                    <div className='flex items-center gap-x-2'>
                        <img src="/5e88b52117aa40baa6a96e43b5c4e57858edaa47.png" alt="FloraVision Logo" className='w-12 h-12' />
                        <p className='text-gray-300 font-bold text-3xl'>FloraVision.</p>
                    </div>
                    {/* Description */}
                    <p className='text-gray-400 font-light text-md max-w-md'>
                        "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
                    </p>
                    {/* Social Links */}
                    <div className="flex gap-4 mt-4">
                        <a href="#" className='text-gray-400 hover:text-white text-2xl font-semibold'>FB</a>
                        <a href="#" className='text-gray-400 hover:text-white text-2xl font-semibold'>TW</a>
                        <a href="#" className='text-gray-400 hover:text-white text-2xl font-semibold'>LI</a>
                    </div>
                </div>

                {/* --- Column 2: Quick Links --- */}
                {/* Adjust width (e.g., w-1/2 md:w-1/5 for responsiveness) */}
                <div className='w-1/2 md:w-1/5 flex flex-col gap-3'>
                    <h2 className='font-semibold text-xl text-white mb-2'>Quick Link's</h2>
                    <ul className='flex flex-col gap-2'>
                        <li><a href="#" className='text-gray-400 hover:text-white underline'>Home</a></li>
                        <li><a href="#top-selling-section" className='text-gray-400 hover:text-white underline'>Type's Of plant's</a></li>
                        <li><a href="#" className='text-gray-400 hover:text-white underline'>Contact</a></li>
                        <li><a href="#" className='text-gray-400 hover:text-white underline'>Privacy</a></li>
                    </ul>
                </div>

                {/* --- Column 3: Newsletter --- */}
                {/* Adjust width (e.g., w-full md:w-2/5 for responsiveness) */}
                <div className='w-full md:w-2/5 flex flex-col gap-4'>
                    <h2 className='font-semibold text-xl text-white'>For Every Update.</h2> {/* Font weight adjusted */}
                    <div className='relative w-full max-w-sm'> {/* Width adjusted */}
                        <input
                            type="email"
                            // Padding and border adjusted slightly
                            className='border-white/50 border rounded-lg p-3 pr-28 w-full text-white bg-transparent placeholder-gray-400 focus:border-white focus:outline-none'
                            placeholder='Enter Email'
                        />
                        <button
                            // Padding adjusted for Figma look
                            className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-white text-black text-sm font-semibold py-2 px-4 rounded-md hover:bg-gray-200"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>

            {/* Bottom Row: Copyright */}
            <p className="text-xl text-right mr-44  text-white -mt-20"> {/* 'text-right' se right align kiya */}
                FloraVision @ all right reserve
            </p>

        </div>
    )
}

export default Footer