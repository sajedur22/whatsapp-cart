
"use client";

import  '../asets/style.css';
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import CartModal from "../components/CartModel";

export default function Page() {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", location: "" });

  // ২০টা product
  const products = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (i + 1) * 10,
    image: `../Products/product${(i % 5) + 1}.png`,
  }));

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty } : item)));
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const sendToWhatsApp = () => {
    if (!form.name || !form.email || !form.location) {
      alert("Please fill in all fields!");
      return;
    }

    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    let message = `🛒 New Order\n\n👤 Name: ${form.name}\n📧 Email: ${form.email}\n📍 Location: ${form.location}\n\nOrder Details:\n`;

    cart.forEach((item) => {
      message += `- ${item.name} x${item.qty} = $${item.price * item.qty}\n`;
    });
    message += `\nTotal: $${total}`;

    const phone = "8801571422223"; // তোমার WhatsApp নম্বর
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <Navbar cartCount={cart.length} onCartClick={() => setShowModal(true)} />
      <Hero />

      {/* Products */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>

      {/* Cart Modal */}
      {showModal && (
        <CartModal
          cart={cart}
          total={total}
          form={form}
          setForm={setForm}
          updateQty={updateQty}
          onClose={() => setShowModal(false)}
          onSend={sendToWhatsApp}
        />
      )}
    </div>
  );
}

