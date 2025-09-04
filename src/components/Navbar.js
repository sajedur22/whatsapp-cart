"use client";

export default function Navbar({ cartCount, onCartClick, searchQuery, setSearchQuery }) {
    return (
        <nav className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-4 bg-gray-900 text-white shadow-md">
            {/* Brand */}
            <h1 className="text-2xl font-extrabold tracking-wide cursor-pointer hover:text-blue-400 transition">
                🛍️ My Book Store
            </h1>

            {/* Search Bar */}
            <div className="flex items-center w-full md:w-1/3">
                <input
                    type="text"
                    placeholder="🔍 Search books..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-2 rounded-l bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700 transition">
                    Search
                </button>
            </div>

            {/* Cart */}
            <button
                onClick={onCartClick}
                className="relative bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
            >
                Cart
                <span className="absolute -top-2 -right-2 bg-red-600 text-xs font-bold px-2 py-0.5 rounded-full">
          {cartCount}
        </span>
            </button>
        </nav>
    );
}

