"use client";
import { useState } from "react";

export default function CartToWhatsApp() {
  const [cart, setCart] = useState([]);

  // Sample products
  const products = [
    {
      id: 1,
      name: "Hoodie",
      price: 25,
      photos: [
        "https://images.unsplash.com/photo-1548883354-94bcfe321c99?q=80&w=600",
        "https://images.unsplash.com/photo-1574180045827-681f8a1a9622?q=80&w=600",
      ],
    },
    {
      id: 2,
      name: "Headset",
      price: 50,
      photos: [
        "https://images.unsplash.com/photo-1518449073235-44e345196396?q=80&w=600",
      ],
    },
  ];

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const sendToWhatsApp = () => {
    if (cart.length === 0) return alert("Cart is empty!");
    let msg = "🛒 New Order:\n";
    cart.forEach((item) => {
      msg += `- ${item.name} x${item.qty} : $${item.price * item.qty}\n`;
    });
    msg += `Total: $${total}\n`;
    const phone = "8801571422223"; // WhatsApp number
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">🛒 My Shop</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            {/* Simple photo carousel */}
            <div className="mb-3">
              {product.photos.length === 1 ? (
                <img
                  src={product.photos[0]}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded"
                />
              ) : (
                <div className="flex space-x-2 overflow-x-auto">
                  {product.photos.map((photo, idx) => (
                    <img
                      key={idx}
                      src={photo}
                      alt={product.name}
                      className="w-40 h-40 object-cover rounded flex-shrink-0"
                    />
                  ))}
                </div>
              )}
            </div>

            <p className="font-semibold text-lg">{product.name}</p>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart */}
      <div className="border-t pt-4">
        <h3 className="font-bold mb-2">Cart</h3>
        {cart.length === 0 ? (
          <p className="text-gray-500">Cart is empty.</p>
        ) : (
          <ul className="mb-2 space-y-1">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>
                  {item.name} x{item.qty}
                </span>
                <span>${item.price * item.qty}</span>
              </li>
            ))}
          </ul>
        )}
        <p className="font-semibold mb-2">Total: ${total}</p>
        <button
          onClick={sendToWhatsApp}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Order via WhatsApp
        </button>
      </div>
    </div>
  );
}
