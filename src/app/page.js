import React from 'react';

import  '../asets/style.css';
import CartToWhatsApp from "../Component/CartToWhatsApp";

export default function Home() {
  return (
     <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <CartToWhatsApp />
    </main>
  );
}
