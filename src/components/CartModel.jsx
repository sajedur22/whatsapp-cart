"use client";
import { useEffect } from "react";

export default function CartModal({ cart, total, form, setForm, updateQty, onClose, onSend }) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 font-mono flex items-center justify-center bg-black/90 z-50">
      <div className="bg-white rounded-lg w-full max-w-lg p-6 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-3 right-3 text-xl text-red-800 hover:scale-125 duration-300"
        >
          ✖
        </button>
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <ul className="mb-3 space-y-2">
            {cart.map((item) => (
              <li key={item.id} className="">
               <div className="flex justify-between items-center">
                 <span className="w-70">
                  {item.name} - 
                </span>
                <span>
                  ${item.price} x
                </span>
                <input 
                    type="number"
                    value={item.qty}
                    min="1"
                    onChange={(e) =>
                      updateQty(item.id, parseInt(e.target.value))
                    }
                    className="w-8 border-b-2 border-emerald-700 outline-none"
                  />
                <span className="text-emerald-700">= ${item.price * item.qty}</span>
               </div>
              </li>
            ))}
          </ul>
        )}
        <p className="h-[2px] w-full bg-amber-700"></p>
        <p className="font-semibold flex justify-between"> <span>Total:</span> <span className="text-emerald-700">${total}</span></p>

        {/* Checkout Form */}
        <div className="mt-4 space-y-2">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border-2 rounded-md py-2 px-4 outline-none focus:border-emerald-700"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border-2 rounded-md py-2 px-4 outline-none focus:border-emerald-700"
          />
          <input
            type="text"
            placeholder="Your Location"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className="w-full border-2 rounded-md py-2 px-4 outline-none focus:border-emerald-700"
          />
        </div>

        <button
          onClick={onSend}
          className="mt-4 cursor-pointer bg-emerald-700 text-white px-4 py-2 rounded w-full hover:scale-105 duration-300"
        >
          Send Order via WhatsApp
        </button>
      </div>
    </div>
  );
}
