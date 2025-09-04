"use client";

const products = [
    { id: 1, name: "Book of Wisdom", price: 120, desc: "Timeless guide to life lessons.", image:'/products/product1.png' },
    { id: 2, name: "Learning JavaScript", price: 150, desc: "Perfect for beginners in JS.", image: "/products/product2.png" },
    { id: 3, name: "React for Beginners", price: 200, desc: "Step-by-step React learning.", image: "/products/product3.png" },
    { id: 4, name: "Mastering Next.js", price: 250, desc: "Deep dive into Next.js features.", image: "/products/product4.png" },
    { id: 5, name: "Python Cookbook", price: 180, desc: "Practical Python recipes.", image: "/products/product5.png" },
    { id: 6, name: "Node.js Guide", price: 220, desc: "Build powerful backend apps.", image: "/products/product6.png" },
    { id: 7, name: "Data Science 101", price: 300, desc: "Intro to data science concepts.", image: "/products/product7.png" },
    { id: 8, name: "AI & Machine Learning", price: 350, desc: "Learn AI & ML fundamentals.", image: "/products/product8.png" },
    { id: 9, name: "Database Design", price: 190, desc: "Design efficient databases.", image: "/products/product9.png" },
    { id: 10, name: "Clean Code", price: 280, desc: "Write readable, maintainable code.", image: "/products/product10.png" },
    { id: 11, name: "UI/UX Principles", price: 210, desc: "Basics of great design.", image: "/products/product11.png" },
    { id: 12, name: "Cybersecurity Basics", price: 260, desc: "Protect yourself online.", image: "/products/product12.png" },
    { id: 13, name: "Linux Essentials", price: 170, desc: "Learn Linux fundamentals.", image: "/products/product13.png" },
    { id: 14, name: "Cloud Computing", price: 320, desc: "Understand cloud services.", image: "/products/product14.png" },
    { id: 15, name: "Docker Deep Dive", price: 240, desc: "Master containerization.", image: "/products/product15.png" },
    { id: 16, name: "Kubernetes Handbook", price: 330, desc: "Learn K8s orchestration.", image: "/products/product16.png" },
    { id: 17, name: "Blockchain Basics", price: 270, desc: "Intro to blockchain tech.", image: "/products/product17.png" },
    { id: 18, name: "Digital Marketing", price: 200, desc: "Boost your online presence.", image: "/products/product18.png" },
    { id: 19, name: "Photography Guide", price: 150, desc: "Capture stunning photos.", image: "/products/product19.png" },
    { id: 20, name: "Freelancing Tips", price: 100, desc: "Grow your freelance career.", image: "/products/product20.png" },
];

export default function ProductCard({ addToCart,searchQuery }) {

    // filter products based on searchQuery
    const filteredProducts = products.filter(
        (p) =>
            p.name.toLowerCase().includes((searchQuery || "").toLowerCase()) ||
            p.desc.toLowerCase().includes((searchQuery || "").toLowerCase())
    );

    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
                <div
                    key={product.id}
                    className="border rounded-lg shadow p-4 flex flex-col bg-white"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-40 object-cover rounded mb-2"
                    />
                    <h3 className="font-bold text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.desc}</p> {/* ✅ short description */}
                    <p className="text-gray-800 font-semibold mt-1">${product.price}</p>
                    <button
                        onClick={() => addToCart(product)}
                        className="mt-auto bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}
