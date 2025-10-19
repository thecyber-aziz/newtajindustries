import React from "react";
import { COMPANY_DATA } from "../data/companyData.js";

const Header = () => (
  <header className="bg-red-800 text-white p-4 flex justify-between items-center sticky top- z-50">
    <h1 className="text-2xl font-bold">{COMPANY_DATA.name}</h1>
    <a
      href={`tel:${COMPANY_DATA.contact.phonePrimary.replace(/\s/g, "")}`}
      className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
    >
      Call Now
    </a>
  </header>
);

export default Header;
