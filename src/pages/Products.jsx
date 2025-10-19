import React from "react";
import { COMPANY_DATA } from "../data/companyData.js";
import ServiceCard from "../components/ServiceCard.jsx";

const PRODUCTS = [
  {
    name: "Model X1000",
    description: "High precision and energy-efficient injection moulding machine suitable for industrial production.",
    image: "/img/mach4.jpeg",
  },
  {
    name: "Model Z2000",
    description: "Heavy-duty performance with advanced PLC control and optimized energy usage.",
    image: "/img/barrel.jpeg",
  },
  {
    name: "Screw Barrel Replacement Kit",
    description: "Durable and precise screw barrels to maintain machine efficiency and product quality.",
    image: "/img/plc.jpeg",
  },
  {
    name: "PLC Control System Upgrade",
    description: "Advanced PLC upgrade package for precise process control and troubleshooting.",
    image: "/img/honing.jpeg",
  },
];

const Products = () => (
  <div className="min-h-screen bg-blue-200 font-sans">
    

    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-[ClashDisplay] text-gray-900 mb-4 text-center">
        Our Products
      </h2>
      <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-center">
        Explore our range of high-quality injection moulding machines and accessories designed for precision and reliability.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 bg-blue-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-900">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

   
    
  </div>
);

export default Products;
