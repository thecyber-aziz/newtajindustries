import React from "react";
import Header from '../components/Header';
import { COMPANY_DATA } from "../utils/data";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-red-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-4xl font-[ClashDisplay] mb-8">Get In Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="bg-red-900 p-6 rounded-xl shadow-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto w-10 h-10 mb-3 text-yellow-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.7-6.7A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.18 2h3a2 2 0 0 1 2 1.72 17.5 17.5 0 0 0 .97 1.87c.28.62-.05 1.45-.6 1.88L8.7 9c-1.8 1.54-1.84 4.09.11 6.04s4.5 1.91 6.04.11l1.6-1.37c.43-.55 1.26-.88 1.88-.6a17.5 17.5 0 0 0 1.87.97 2 2 0 0 1 1.72 2.05z"/></svg>
            <h3 className="text-xl font-bold mb-2">Contact</h3>
            <a href={`tel:${COMPANY_DATA.contact.phonePrimary.replace(/\s/g, "")}`} className="block text-2xl font-light hover:text-yellow-400 transition">{COMPANY_DATA.contact.phonePrimary}</a>
            <p className="mt-1 text-sm text-gray-300">{COMPANY_DATA.contact.phoneSecondary}</p>
          </div>

          {/* Location */}
          <div className="bg-red-900 p-6 rounded-xl shadow-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto w-10 h-10 mb-3 text-yellow-400"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            <h3 className="text-xl font-bold mb-2">Our Location</h3>
            <p className="text-lg font-light">{COMPANY_DATA.contact.address.split(',').slice(0, 2).join(',')}</p>
            <p className="text-sm text-gray-300">{COMPANY_DATA.contact.address.split(',').slice(2).join(',').trim()}</p>
          </div>

          {/* Inquiry Form CTA */}
          <div className="bg-red-900 p-6 rounded-xl shadow-2xl flex flex-col justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto w-10 h-10 mb-3 text-yellow-400"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <h3 className="text-xl font-bold mb-2">Send an Inquiry</h3>
            <a href="mailto:info@masoom-moulding.com" className="text-lg font-light hover:text-yellow-400 transition">info@masoom-moulding.com</a>
            <p className="mt-1 text-sm text-gray-300"></p>
          </div>
        </div>
        
      </div>
      {/* <Header/> */}
    </section>
  );
}
