import React, { useEffect, useState } from "react";

export default function HeroSection() {
  const slides = [
    { id: 1, img: "/img/banner.jpg",},
    { id: 1, img: "/img/mach2.jpeg",},
    { id: 1, img: "/img/mach4.jpeg",},
    
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2500); // slide every 2.5s
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">
      {/* Background Video (optional) */}
      {/* <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/video.mp4" type="video/mp4" />
      </video> */}

      {/* 🔹 Top Sliding Ads */}
      <div className="absolute top-24 left-0 w-full h bg-w backdrop-blur-md flex items-center overflow-hidden">
        <div
          className="flex transition-transform bg-whit duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full flex items-center justify-center gap-4 px-6"
            >
              <img
                src={slide.img}
                alt={slide.text}
                className=" h-36 object-cover  "
              />
              {/* <p className="text-lg sm:text-xl font-semibold text-white">
                {slide.text}
              </p> */}
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Bottom Text Box */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/1 backdrop-blur-md font-[ClashDisplay] text-center p-8 max-w-4xl w-[90%] rounded-2xl bord">
        <h2 className="text-2xl sm:text-6xl text-red-600 font-black mb-4">
          All Types Injection Moulding & Repairing
        </h2>
        <p className="text-xl sm:text-2xl font-[satoshi] mb-8 text-white">
          Your trusted partner for machine maintenance in New Delhi.
        </p>

        {/* Modern Animated Buttons */}
        <div className="flex justify-center flex-wrap gap-6">
          <a
            href="#contactus"
            className="relative px-8 py-3 text-lg font-bold text-white rounded-full overflow-hidden transition-all duration-500 group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-full opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></span>
            <span className="relative z-10 group-hover:tracking-widest transition-all duration-300">
              Draft Your Inquiry
            </span>
          </a>

          <a
            href="#location"
            className="relative px-8 py-3 text-lg font-bold text-white border-2 border-white rounded-full overflow-hidden transition-all duration-500 group"
          >
            <span className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></span>
            <span className="relative z-10 group-hover:text-black group-hover:tracking-widest transition-all duration-300">
              Our Location
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
