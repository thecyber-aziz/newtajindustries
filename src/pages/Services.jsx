import React from "react";

import ServiceCard from "../components/ServiceCard.jsx";
import { COMPANY_DATA } from "../data/companyData.js";

const Services = () => (
  <div className="min-h-screen bg-red-700 font-sans">
    

    <section className="py-16 max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-[ClashDisplay] text-r-800 mb-12 text-center">Our Services</h1>
      <div className="grid md:grid-cols-2 font-[satoshi] lg:grid-cols-3  gap-8">
        {COMPANY_DATA.services.map((s, i) => (
          <ServiceCard key={i} service={s} />
        ))}
      </div>
    </section>
  </div>
);

export default Services;
