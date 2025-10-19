import React, { useState } from "react";
import HeroSection from '../components/HeroSection';
import GlossaryTool from '../components/GlossaryTool';
import ContactSection from '../components/ContactSection';
import ServiceCard from '../components/ServiceCard';
import InquiryGeneratore from '../components/InquiryGenerator';
import Service from '../pages/Services';
import Products from '../pages/Products';
import About from '../pages/About';
import AnimatedSection from "../components/AnimatedSection";
import ContactModal from "../components/ContactModal";
import { BsWhatsapp } from "react-icons/bs";
import ContactUs from '../components/ContactUs';
import LocationMap from "../components/LocationMap.jsx";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <AnimatedSection>
        <div id="home"><HeroSection/></div>
        <div id="services"><Service/></div>
        <div id="products"><Products/></div>
        <div id="about"><About/></div>
        {/* <ServiceCard/> */}
        {/* <InquiryGeneratore/>
        <GlossaryTool/> */}
        <div id="contact"><ContactSection/></div>
        <ContactUs/>
        <LocationMap />
      </AnimatedSection>

      {/* Floating WhatsApp Button */}
      <button
  onClick={() => setModalOpen(true)}
  className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition animate-bounce flex items-center justify-center text-2xl"
>
  <BsWhatsapp />
</button>

      {/* Contact Modal */}
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Home;
