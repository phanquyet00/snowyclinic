"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Sử dụng useEffect để đảm bảo rằng component chỉ render trên client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Tránh render trên server để tránh lỗi hydration mismatch
  if (!mounted) return null;

  return (
    <button
      className="p-2 border rounded-lg"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "🌞 Chế độ sáng" : "🌙 Chế độ tối"}
    </button>
  );
}
