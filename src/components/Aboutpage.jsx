import React, { useEffect, useState } from "react";

export default function Aboutpage() {
  const [rotate, setRotate] = useState(0);

  // Slider images
  const images = [
    "/AboutImg2.png",
    "/AboutImg.png",
    "/AboutImg3.png",
    "/AboutImg4.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mouse move eye animation
  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Slider controls
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* Eye Section */}
      <div className="box bg-[#CDEA68] h-[30vh] md:h-[50vh] relative overflow-hidden">
        <div className="eyeBackground w-fit flex gap-[5vw] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">

          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="eye h-[40vw] w-[40vw] bg-white rounded-full grid place-items-center"
            >
              <div className="eye h-[25vw] w-[25vw] bg-black rounded-full relative">
                <div
                  style={{ transform: `translateY(-50%) rotate(${rotate}deg)` }}
                  className="w-full h-[3vw] absolute top-1/2 -translate-y-1/2"
                >
                  <div className="eye h-[5vw] w-[5vw] bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Heading */}
      <h1 className="pl-8 GroteskFont font-semibold text-[10vw] md:text-[6vw] mt-8">
        ABOUT
      </h1>

      {/* Content */}
      <div className="cardInnerbox p-8">
        <h2 className="text-[4vw] md:text-[2vw]">• NEW TAJ INDUSTRIES</h2>

        {/* Image Slider */}
        <div className="relative w-full md:w-[40vw] h-[30vh] md:h-[30vw] rounded-xl overflow-hidden my-[4vw] md:my-[2vw]">

          <img
            src={images[currentIndex]}
            alt="About Slider"
            className="w-full h-full object-cover transition-all duration-500"
          />

          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/8 p-2 rounded-full hover:bg-white"
          >
            ◀
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/8 p-2 rounded-full hover:bg-white"
          >
            ▶
          </button>
        </div>

        {/* Text */}
        <p className="text-[4vw] md:text-[2vw] mb-4">
          We are a leading manufacturer of high-quality injection molding
          machines, delivering precision-engineered solutions for the plastic
          manufacturing industry. With a strong focus on innovation, durability,
          and performance, our machines are designed to meet global industrial
          standards and support efficient, large-scale production.
        </p>

        {/* Tags */}
        {[
          "ALL",
          "TYPES",
          "INJECTION",
          "MOLDING",
          "MACHINE",
          "MANUFACTURER",
        ].map((item) => (
          <button
            key={item}
            className="border-zinc-950 border rounded-full px-3 mr-3 mb-3"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="md:centr"><img src="/board.jpg" alt="" /></div>
    </div>
  );
}
