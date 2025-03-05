"use client";

import { useEffect, useState } from "react";
import { FaPhoneAlt, FaAngleUp, FaGift } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { SiZalo } from "react-icons/si";

const FloatingToolbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 flex flex-col items-end gap-3 z-50">
      {/* Thanh icon */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-2 flex flex-col gap-2 border w-16">
        <a href="#" className="flex flex-col items-center text-brown-700 dark:text-yellow-400">
          <FaGift size={24} />
          <span className="text-xs font-medium text-center">Khuyến mãi</span>
        </a>
        <hr className="w-3/4 mx-auto border-gray-300 dark:border-gray-600" />
        <a href="#" className="flex flex-col items-center text-brown-700 dark:text-yellow-400">
          <IoCalendarOutline size={24} />
          <span className="text-xs font-medium text-center">Đặt lịch</span>
        </a>
        <hr className="w-3/4 mx-auto border-gray-300 dark:border-gray-600" />
        <a href="tel:0123456789" className="flex flex-col items-center text-brown-700 dark:text-yellow-400">
          <FaPhoneAlt size={24} />
          <span className="text-xs font-medium text-center">Hotline</span>
        </a>
        <hr className="w-3/4 mx-auto border-gray-300 dark:border-gray-600" />
        <a href="https://zalo.me/0123456789" className="flex flex-col items-center text-brown-700 dark:text-yellow-400">
          <SiZalo size={24} />
          <span className="text-xs font-medium text-center">Zalo</span>
        </a>
      </div>

      {/* Nút cuộn lên */}
      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 border"
        >
          <FaAngleUp size={20} className="text-gray-600 dark:text-yellow-400" />
        </button>
      )}
    </div>
  );
};

export default FloatingToolbar;