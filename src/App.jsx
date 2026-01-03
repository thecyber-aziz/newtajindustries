import React, { useEffect } from "react";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import LandingPage from "./components/LandingPage.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Eye from "./components/Eye.jsx";
import Feature from "./components/Feature.jsx";
import Ready from "./components/Readytostart.jsx";
import ContactMap from "./components/ContactMap.jsx";
import Aboutpage from "./components/Aboutpage.jsx";
import Contactpage from "./components/Contactpage.jsx";

import WhatsAppButton from "./components/WhatsAppButton.jsx";

import LocomotiveScroll from "locomotive-scroll";

/* ✅ Layout shown on ALL pages */
const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />

    {/* ✅ WhatsApp Floating Button */}
    <WhatsAppButton />

    <Footer />
  </>
);

/* ✅ Home Page Sections */
const Home = () => (
  <>
    <LandingPage />
    <Marquee />
    <About />
    <Eye />
    <Feature />
    <Ready />
    <ContactMap />
  </>
);

export default function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll();
    return () => scroll.destroy();
  }, []);

  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <Aboutpage /> },
        { path: "/contact", element: <Contactpage /> },
      ],
    },
  ]);

  return (
    <div className="font-['NeueR']">
      <RouterProvider router={router} />
    </div>
  );
}
 