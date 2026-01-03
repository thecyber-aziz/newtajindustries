import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const whatsappNumber = "918700762005"; // ✅ your WhatsApp number
  const message = "Hello I’m interested in your molding machines.Please guide me with available models, specifications, and pricing.  Thank you.";

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg z-[9999] hover:bg-green-600 transition"
      title="Chat with us on WhatsApp"
      aria-label="WhatsApp Chat"
    >
      <FaWhatsapp size={28} />
    </button>
  );
}
