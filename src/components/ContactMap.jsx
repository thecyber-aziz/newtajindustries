// File: ContactMap.jsx
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function ContactMap() {
  const address = `B-51, Lawrence Road, Industrial Area, Near Seven Heven Hall, New Delhi-110035`;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address);
      alert("Address copied to clipboard");
    } catch (err) {
      console.error("Copy failed", err);
      alert("Unable to copy address. Please select and copy manually.");
    }
  };

  const openInMaps = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    window.open(mapsUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="max-w-5xl mx-auto border-b-[1px] border-black p-6">
      <div className=" p- text-[8vw] md:text-[5vw]  ">Location
        
        <div className="rounded-2xl overflow-hidden  shadow-md">
          {/* Responsive iframe wrapper */}
          <div className="w-full aspect-[16/10]  md:aspect-[16/9]">
            <iframe
              title="Company location - New Taj Industries"
              src={mapSrc}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0 "
            />
          </div>
       </div>
       
        </div>
        <br />
             <span className="flex mt-  gap-2 text-gray-700">
  <FaMapMarkerAlt className="text-red-500 mt-1" />
  NewTajIndustries address, directions, and business info
   available on Google.
</span>
    </section>
  );
}
