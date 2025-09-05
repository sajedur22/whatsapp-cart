"use client";
import { ShoppingCart } from "lucide-react";


export default function Navbar({ cartCount, onCartClick, searchQuery, setSearchQuery }) {



    const handleSearch = () => {

        setSearchQuery(""); // clear input after search
    };
    return (
        <nav className="fixed h-16 w-full z-50 bg-blue-700/10">
            <div className="max-w-[1400px] mx-auto px-2 md:px-10  h-16 flex items-center justify-between gap-5">
                
                <h2 className="text-white cursor-pointer text-2xl md:text-4xl" title="My Book Store">
                    🛍️ 
                </h2>
                <div className="flex w-[70%]">
                    <input
                        type="text"
                        placeholder="🔍 Search books..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-3 py-2 rounded-l bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-600 focus:ring-inset"
                    />
                    <button  onClick={handleSearch} className="bg-blue-700/90 text-white text-sm md:text-lg  px-2  md:px-4 md:py-2 rounded-r   hover:bg-blue-700 transition">
                        Search
                    </button>
                </div>
                <button
                    onClick={onCartClick}
                    className="relative cursor-pointer text-white bg-blue-700/50 px-2 py-1 md:px-2 md:py-1 border-2 border-blue-700 rounded hover:bg-blue-700 transition"
                >
                    <ShoppingCart className="hover:scale-125  duration-300"/>
                    <span className="absolute -top-2 -right-2 bg-red-600 text-xs font-bold px-2 py-0.5 rounded-full">
                        {cartCount}
                    </span>
                </button>
                
            </div>
        </nav>
    );
}



