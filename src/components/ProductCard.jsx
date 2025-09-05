"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";


const products = [
    { id: 1, name: "Book of Wisdom", price: 120, desc: "Timeless guide to life lessons.", image: "/Image/atonic-hobit.png" },
    { id: 2, name: "Learning JavaScript", price: 150, desc: "Perfect for beginners in JS.", image: "/Image/being-the-red-flag.png" },
    { id: 3, name: "React for Beginners", price: 200, desc: "Step-by-step React learning.", image: "/Image/bobdelen.png" },
    { id: 4, name: "Advanced CSS", price: 100, desc: "Master modern CSS techniques.", image: "/Image/company-one.png" },
    { id: 5, name: "Node.js Essentials", price: 180, desc: "Learn backend development with Node.js.", image: "/Image/felosofi-ilras.png" },
    { id: 6, name: "Python Basics", price: 130, desc: "Introduction to Python programming.", image: "/Image/flat-shart.png" },
    { id: 7, name: "Django for Web", price: 190, desc: "Build web apps using Django.", image: "/Image/ideads-from-global.png" },
    { id: 8, name: "Data Structures", price: 160, desc: "Learn algorithms & data structures.", image: "/Image/Matt Ridley.png" },
    { id: 9, name: "Machine Learning Intro", price: 250, desc: "Get started with ML concepts.", image: "/Image/product1.png" },
    { id: 10, name: "AI with Python", price: 300, desc: "Implement AI projects using Python.", image: "/Image/product2.png" },
    { id: 11, name: "React Advanced", price: 220, desc: "Deep dive into React hooks & context.", image: "/Image/product3.png" },
    { id: 12, name: "TypeScript Guide", price: 170, desc: "Strongly typed JS with TypeScript.", image: "/Image/steal-the-book.png" },
    { id: 13, name: "GraphQL Essentials", price: 200, desc: "Build APIs with GraphQL.", image: "/Image/the-chaos-machine.png" },
    { id: 14, name: "Next.js Projects", price: 240, desc: "Fullstack apps using Next.js.", image: "/Image/the-storytelling.png" },
    { id: 15, name: "Vue.js Basics", price: 150, desc: "Learn Vue.js for frontend development.", image: "/Image/the-subtitle-of-fuck.png" },
    { id: 16, name: "Svelte Starter", price: 140, desc: "Build lightweight apps using Svelte.", image: "/Image/the-two-towers.png" },
    { id: 17, name: "Tailwind CSS Mastery", price: 130, desc: "Design beautiful UIs with Tailwind.", image: "/Image/tuist-love.png" },

];


export default function ProductCard({ addToCart,searchQuery }) {


    // filter Image based on searchQuery
    const filteredProducts = products.filter(
        (p) =>
            p.name.toLowerCase().includes((searchQuery || "").toLowerCase()) ||
            p.desc.toLowerCase().includes((searchQuery || "").toLowerCase())
    );
    if (filteredProducts.length === 0) {
        return <p className="text-center text-red-500 font-bold mt-10">❌ Product not found</p>;
    }
     

    return (
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">

            {filteredProducts.map((product) => (
              <CardContainer key={product.id} className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[18rem] md:w-[30rem] h-auto rounded-xl p-3 border  ">
                  
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={1024} height={1024}
                        className="w-full h-50 md:h-60 lg:h-70 object-cover rounded mb-2"
                    />
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {product.name}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {product.desc}
                  </CardItem>

                    <CardItem
                    as="p"
                    translateZ="60"
                    className="text-emerald-700 text-lg font-bold max-w-sm mt-2 dark:text-emerald-700"
                  >
                    ${product.price}
                  </CardItem>
                    <CardItem
                      as="button"
                      className="w-full mt-5"
                    >
                      <button
                          onClick={() => addToCart(product)}
                          className="w-[90%] mt-auto cursor-pointer bg-emerald-600 text-white px-3 py-1 rounded hover:scale-102 duration-300 m-5"
                      >
                          Add to Cart
                      </button>
                    </CardItem>
                  
                </CardBody>
              </CardContainer>
            ))}
        </div>
    );
}


