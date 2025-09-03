"use client";

export default function CartModal({ cart, total, form, setForm, updateQty, onClose, onSend }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-full max-w-lg p-6 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          ✖
        </button>
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <ul className="mb-3 space-y-2">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <span>
                  {item.name} - ${item.price} x
                  <input
                    type="number"
                    value={item.qty}
                    min="1"
                    onChange={(e) =>
                      updateQty(item.id, parseInt(e.target.value))
                    }
                    className="w-12 border ml-2 p-1"
                  />
                </span>
                <span>= ${item.price * item.qty}</span>
              </li>
            ))}
          </ul>
        )}

        <p className="font-semibold">Total: ${total}</p>

        {/* Checkout Form */}
        <div className="mt-4 space-y-2">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Your Location"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          onClick={onSend}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded w-full"
        >
          Send Order via WhatsApp
        </button>
      </div>
    </div>
  );
}
