"use client";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="border rounded-lg shadow p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <h3 className="font-bold">{product.name}</h3>
      <p>${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
