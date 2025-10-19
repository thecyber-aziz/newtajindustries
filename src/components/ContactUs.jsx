import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus("❌ Please fill all required fields!");
      return;
    }

    setLoading(true);
    setStatus("");

    // Send email via EmailJS
    emailjs
      .send(
        "service_xyeavzb",    // Your EmailJS Service ID
        "template_44ueem5",   // Your EmailJS Template ID
        {
          from_name: formData.name,   // {{from_name}} in template
          reply_to: formData.email,   // {{reply_to}} in template
          company: formData.company,  // {{company}}
          phone: formData.phone,      // {{phone}}
          message: formData.message,  // {{message}}
        },
        "TARr5KQrPrPyUlO5I"  // Your EmailJS Public Key
      )
      .then(() => {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", company: "", phone: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setStatus("❌ Failed to send message. Try again later.");
      })
      .finally(() => setLoading(false));
  };
  const htmlContent = `
  <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
    ...
    <!-- Paste the full HTML above -->
    ...
  </div>
`;


  return (
    <div id="contactus" className="min-h-screen  bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-[ClashDisplay] mb-6 text-center text-gray-800">Contact Us</h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email*"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.company}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone*"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Message*"
            className="border p-3 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
            className={`bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 font-semibold ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p
              className={`mt-3 text-center font-medium ${
                status.includes("successfully") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
