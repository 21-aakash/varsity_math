// components/EnquiryForm.tsx
'use client';
import { useState } from "react";

export default function EnquiryForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <section id="enquiry" className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Enquiry Form</h2>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-gray-50 p-6 rounded-lg shadow space-y-4">
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required className="w-full p-3 border rounded" />
        <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required className="w-full p-3 border rounded" />
        <input type="text" name="phone" placeholder="Your Phone" value={form.phone} onChange={handleChange} required className="w-full p-3 border rounded" />
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required className="w-full p-3 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Submit</button>
        {status && <p className="text-center">{status}</p>}
      </form>
    </section>
  );
}
