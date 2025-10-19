// LocationMap.jsx
import React from "react";
import { COMPANY_DATA } from "../data/companyData.js";

const LocationMap = () => (
  <section id="location" className="py-16 bg-gray-100">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-[ClashDisplay] mb-8">Our Location</h2>

      {/* Map + Contact Info */}
      <div className="grid md:grid-cols-2  gap-8 items-center">
        {/* Map */}
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.123456789!2d77.123456!3d28.654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd123456789%3A0xabcdef1234567890!2sB-51%2C%20Lawrence%20Road%2C%20Industrial%20Area%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1696578945678!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="New Taj Industries Location"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div  className="text-lef   t space-y-4">
          <h3 className="text-2xl text-center font-[ClashDisplay]">
            <img src="img/logo.png" alt="" className="h-full w-auto object-contain" />
            New Taj Industry</h3>
          <p>{COMPANY_DATA.tagline}</p>
          <p><strong>Name:</strong> {COMPANY_DATA.name}</p>
          <p>
            <strong>Phone:</strong> {COMPANY_DATA.contact.phonePrimary}
          </p>
          <p>
            <strong>Address:</strong> {COMPANY_DATA.contact.address}
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:masoom8700@gmail.com"
              className="text-blue-600 hover:underline"
            >
              masoom8700@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default LocationMap;
