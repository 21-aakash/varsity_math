"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdmissionForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    class: "",
    board: "",
    medium: "",
    school: "",
    admissionDate: "",
  });

  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [paymentProof, setPaymentProof] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));
    if (profilePic) formData.append("profilePic", profilePic);
    if (paymentProof) formData.append("paymentProof", paymentProof);

    const res = await fetch("/api/student/admission", {
      method: "POST",
      body: formData,
    });

    setLoading(false);

    if (res.ok) {
      router.push("/dashboard");
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4">Admission Form</h2>

        <input type="text" name="name" placeholder="Full Name" className="w-full border p-2 rounded"
          value={form.name} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone" className="w-full border p-2 rounded"
          value={form.phone} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" className="w-full border p-2 rounded"
          value={form.email} onChange={handleChange} required />

        <input type="text" name="class" placeholder="Class" className="w-full border p-2 rounded"
          value={form.class} onChange={handleChange} required />
        <input type="text" name="board" placeholder="Board" className="w-full border p-2 rounded"
          value={form.board} onChange={handleChange} required />
        <input type="text" name="medium" placeholder="Medium (English/Hindi...)" className="w-full border p-2 rounded"
          value={form.medium} onChange={handleChange} required />
        <input type="text" name="school" placeholder="School Name" className="w-full border p-2 rounded"
          value={form.school} onChange={handleChange} required />
        <input type="date" name="admissionDate" className="w-full border p-2 rounded"
          value={form.admissionDate} onChange={handleChange} required />

        <label className="block">Profile Picture</label>
        <input type="file" accept="image/*" onChange={(e) => setProfilePic(e.target.files?.[0] || null)} required />

        <label className="block">Payment Proof</label>
        <input type="file" accept="image/*" onChange={(e) => setPaymentProof(e.target.files?.[0] || null)} required />

        <button type="submit" disabled={loading}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
          {loading ? "Submitting..." : "Submit Admission Form"}
        </button>
      </form>
    </div>
  );
}
