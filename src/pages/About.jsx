import React, { useState } from "react";

const About = () => {
  const IMAGES = [
    "/img/moulding.jpeg",
    "/img/dril22.jpeg",
    "/img/dril11.jpeg",
    "/img/honing.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % IMAGES.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <section className="py-16 max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-[ClashDisplay] text-black mb-6 text-center">
          About New Taj Industry
        </h1>

        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          New Taj Industry specializes in precision injection moulding and
          industrial machinery repair. We have years of experience providing
          high-quality services for various plastic industries.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Our team of expert technicians ensures timely maintenance, accurate
          repairs, and professional consultancy to optimize your machine
          performance. We also provide specialized services in PLC maintenance,
          screw barrel repair, honing, and other industrial solutions.
        </p>

        {/* 🔹 Image Slider Section */}
        <div className="relative w-full max-w-3xl mx-auto">
          <img
            src={IMAGES[current]}
            alt={`Slide ${current + 1}`}
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg transition-all duration-500"
          />

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition"
          >
            ❮
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition"
          >
            ❯
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  index === current ? "bg-blue-600" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
