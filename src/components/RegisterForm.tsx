"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error("Đăng ký thất bại");
      }
      router.push("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Đăng Ký</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="username" 
          placeholder="Tên đăng nhập" 
          value={formData.username} 
          onChange={handleChange} 
          required 
          className="w-full p-2 border rounded mb-2"
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          className="w-full p-2 border rounded mb-2"
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Mật khẩu" 
          value={formData.password} 
          onChange={handleChange} 
          required 
          className="w-full p-2 border rounded mb-2"
        />
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Đăng Ký
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;