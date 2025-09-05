"use client";

import "../assets/style.css"; // spelling ঠিক করো
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import CartModal from "../components/CartModel";
import Footer from "@/components/Footer"; // নিশ্চিত হও যে ফাইলের নামও CartModal.js

export default function Page() {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [form, setForm] = useState({ name: "", email: "", location: "" });


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

  const clearCart = () => {
    setCart([]); // simply reset cart
  };
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
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

    const phone = "8801571422223"; // WhatsApp
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
      <div>
        <Navbar
            cartCount={cart.length}
            onCartClick={() => setShowModal(true)}
            searchQuery={searchQuery}       // search state পাঠাও
            setSearchQuery={setSearchQuery} // setState function পাঠাও
        />

        <Hero />

        {/* products */}
        <div>
          <ProductCard addToCart={addToCart} searchQuery={searchQuery} />
        </div>

        <div>
          <Footer/>
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
                clearCart={clearCart}
            />
        )}
      </div>
  );
}
