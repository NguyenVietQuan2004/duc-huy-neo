"use client";

import { useState } from "react";

type FormData = {
  full_name: string;
  phone_number: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  // FIX CỨNG STATE
  const [form, setForm] = useState<FormData>({
    full_name: "",
    phone_number: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // HANDLE INPUT CHANGE
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // VALIDATE SIMPLE (NO LIB)
  const validate = () => {
    if (!form.full_name) return "Vui lòng nhập họ tên";
    if (!form.phone_number) return "Vui lòng nhập số điện thoại";
    if (!form.email) return "Vui lòng nhập email";
    if (!form.message) return "Vui lòng nhập lời nhắn";

    const emailRegex = /^\S+@\S+$/i;
    if (!emailRegex.test(form.email)) return "Email không hợp lệ";

    return null;
  };

  // SUBMIT
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setSuccess(false);

    const validateError = validate();
    if (validateError) {
      setError(validateError);
      return;
    }

    try {
      setLoading(true);

      // FIX CỨNG API CALL (thay contactApi)
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      setSuccess(true);

      // reset form
      setForm({
        full_name: "",
        phone_number: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setError("Đã có lỗi xảy ra, vui lòng thử lại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* SUCCESS MESSAGE */}
      {success && <div className="text-green-600 text-sm font-medium">Gửi liên hệ thành công!</div>}

      {/* ERROR MESSAGE */}
      {error && <div className="text-red-600 text-sm font-medium">{error}</div>}

      {/* FULL NAME */}
      <input
        name="full_name"
        value={form.full_name}
        onChange={handleChange}
        placeholder="Họ và tên *"
        className="w-full border p-3 rounded"
      />

      {/* PHONE */}
      <input
        name="phone_number"
        value={form.phone_number}
        onChange={handleChange}
        placeholder="Số điện thoại *"
        className="w-full border p-3 rounded"
      />

      {/* EMAIL */}
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email *"
        className="w-full border p-3 rounded"
      />

      {/* MESSAGE */}
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Lời nhắn *"
        className="w-full border p-3 rounded min-h-[120px]"
      />

      {/* BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#124D9B] text-white py-3 rounded hover:bg-blue-800 transition"
      >
        {loading ? "Đang gửi..." : "GỬI LỜI NHẮN"}
      </button>
    </form>
  );
}
