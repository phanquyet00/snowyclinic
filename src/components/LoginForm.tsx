"use client";
import { useState } from "react";

const LoginModal = ({ onClose, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("user", data.username);
        setUser(data.username);
        onClose(); // Đóng modal
      } else {
        alert("Sai tài khoản hoặc mật khẩu!");
      }
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4">Đăng nhập</h2>
        <input
          type="text"
          placeholder="Tên đăng nhập"
          className="w-full border p-2 mb-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          className="w-full border p-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className="w-full bg-blue-500 text-white py-2 rounded-md">
          Đăng nhập
        </button>
        <button onClick={onClose} className="w-full mt-2 bg-gray-300 py-2 rounded-md">
          Đóng
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
