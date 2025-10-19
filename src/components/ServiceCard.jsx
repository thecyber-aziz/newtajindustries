// ServiceCard.jsx
import React from "react";

const ServiceCard = ({ service }) => (
  <div className="bg-red-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition flex flex-col">
    {/* Image */}
    <div className="h-48 w-full overflow-hidden">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Text */}
    <div className="p-6 flex flex-col flex-1">
      <h2 className="text-2xl text-black font-semibold mb-2">{service.title}</h2>
      <p className="text-gray-950 flex-1">{service.description}</p>
    </div>
  </div>
);

export default ServiceCard;
