"use client";

import { useState } from "react";
import Hello from "@/public/assets/44028.jpg";

export default function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    const res = await fetch("/api/enquiry", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      setStatus("Submitted!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus("Error. Try again.");
    }
  };

  return (
    <section
      id="enquiry"
      className="w-full flex items-center justify-center bg-blue-50 px-4 sm:px-6 py-12 sm:py-16"
    >
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-2xl rounded-3xl p-6 sm:p-8">
        {/* Left Side Text */}

        {/* <div className="flex flex-col md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
            Get in touch with us 🌟
          </h2>
          <p className="text-gray-600 text-sm sm:text-md">
            We’re here to support, guide, and inspire you every step of the way.
          </p>
          
        </div> */}


        {/* Left Side Text + Image */}
<div className="flex flex-col md:text-left">
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
    Get in touch with us 🌟
  </h2>
  <p className="text-gray-600 text-sm sm:text-md mb-6">
    We’re here to support, guide, and inspire you every step of the way.
  </p>

  {/* Image under text */}
  <img 
    src={Hello.src}
    alt="Contact illustration" 
    className="hidden md:block w-full max-h-64 object-cover rounded-lg shadow-md"
  />
</div>


        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="+91 9876543210"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Write your message here..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all text-sm sm:text-base"
          >
            {status === "Sending..." ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="text-center text-sm text-gray-600 mt-2">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
