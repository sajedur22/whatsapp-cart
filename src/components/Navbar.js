"use client";

export default function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">🛍️ My Shop</h1>
      <button
        onClick={onCartClick}
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
}
