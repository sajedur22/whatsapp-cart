"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
 

const products = [
    { id: 1, name: "Book of Wisdom", price: 120, desc: "Timeless guide to life lessons.", image:'/products/product1.png' },
    { id: 2, name: "Learning JavaScript", price: 150, desc: "Perfect for beginners in JS.", image: "/products/product2.png" },
    { id: 3, name: "React for Beginners", price: 200, desc: "Step-by-step React learning.", image: "/products/product3.png" },
];

export default function ProductCard({ addToCart,searchQuery }) {


    // filter products based on searchQuery
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


//  <div
//                     key={product.id}
//                     className="rounded-lg p-1  flex flex-col bg-white  shadow-md shadow-white/60"
//                 >
//                     <Image
//                         src={product.image}
//                         alt={product.name}
//                         width={1024} height={1024}
//                         className="w-full h-50 md:h-60 lg:h-70 object-cover rounded mb-2"
//                     />
//                     <h3 className="font-bold text-gray-900/90 text-center">{product.name}</h3>
//                     <p className="text-sm text-gray-900/50 text-center">{product.desc}</p> {/* ✅ short description */}
//                     <p className="text-emerald-800 font-semibold mt-1 text-center">${product.price}</p>
//                     <button
//                         onClick={() => addToCart(product)}
//                         className="mt-auto cursor-pointer bg-emerald-600 text-white px-3 py-1 rounded hover:scale-102 duration-300 m-5"
//                     >
//                         Add to Cart
//                     </button>
//                 </div>
