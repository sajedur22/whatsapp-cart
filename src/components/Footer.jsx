"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="text-xl font-bold">🛍️ My Book Store</div>

                <div className="flex gap-4 text-gray-300 justify-center md:justify-end">
                    <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"
                       className="hover:text-blue-500 transition">
                        <FaFacebookF size={20}/>
                    </a>
                    <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer"
                       className="hover:text-blue-400 transition">
                        <FaTwitter size={20}/>
                    </a>
                    <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"
                       className="hover:text-pink-500 transition">
                        <FaInstagram size={20}/>
                    </a>
                    <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"
                       className="hover:text-blue-700 transition">
                        <FaLinkedinIn size={20}/>
                    </a>
                </div>

            </div>

            <div className="mt-6 text-center text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} My Book Store. All rights reserved.
            </div>
        </footer>

    );
}
