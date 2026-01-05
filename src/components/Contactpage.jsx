import React, { useEffect, useState } from "react";

export default function Contactpage() {
  const [rotate, setRotate] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  /* Eye animation */
  useEffect(() => {
    const handleMouseMove = (e) => {
      const deltaX = e.clientX - window.innerWidth / 2;
      const deltaY = e.clientY - window.innerHeight / 2;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  /* Handle input change */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* Fake Submit */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill required fields");
      return;
    }

    // Show success popup
    setShowPopup(true);

    // Reset form
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      message: "",
    });

    // Auto close popup
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div>
      {/* Eye animation section */}
      <div className="bg-[#CDEA68] h-[30vh] md:h-[50vh] relative overflow-hidden">
        <div className="flex gap-[5vw] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="h-[40vw] w-[40vw] md:h-[18vw] md:w-[18vw] bg-white rounded-full grid place-items-center"
            >
              <div className="h-[25vw] w-[25vw] md:h-[10vw] md:w-[10vw] bg-black rounded-full relative">
                <div
                  style={{ transform: `translateY(-50%) rotate(${rotate}deg)` }}
                  className="w-full h-[3vw] absolute top-1/2 -translate-y-1/2"
                >
                  <div className="h-[5vw] w-[5vw] md:h-[2vw] md:w-[2vw] bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h1 className="pl-8 GroteskFont font-semibold text-[10vw] md:text-[6vw] mt-8">
        CONTACT
      </h1>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="px-8 w-full md:w-[40vw]">
        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          value={formData.name}
          onChange={handleChange}
          className="w-full h-10 border mb-2 px-3 rounded"
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          className="w-full h-10 border mb-2 px-3 rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number *"
          value={formData.phone}
          onChange={handleChange}
          className="w-full h-10 border mb-2 px-3 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
          className="w-full h-10 border mb-2 px-3 rounded"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border mb-4 p-3 rounded"
        ></textarea>

        <button
          type="submit"
          className="bg-black text-white w-full h-10 rounded hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white px-6 py-4 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-semibold mb-2">✅ Success</h2>
            <p>Your message has been sent successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
}
