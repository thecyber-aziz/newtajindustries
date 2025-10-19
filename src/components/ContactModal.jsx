import React, { useState } from "react";

export default function ContactModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const whatsappNumber = "918700762005"; // Replace with your WhatsApp number

  const handleSend = () => {
    if (!name || !phone || !message) {
      alert("Please fill all required fields!");
      return;
    }

    const text = `Name: ${name}%0ACompany: ${company}%0APhone: ${phone}%0AMessage: ${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;

    window.open(url, "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold"
        >
          X
        </button>
        <h2 className="text-2xl font-bold mb-4">Send Message</h2>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Company Name"
            className="border p-2 rounded"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone"
            className="border p-2 rounded"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            placeholder="Message"
            className="border p-2 rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={handleSend}
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
