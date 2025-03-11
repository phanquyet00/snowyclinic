"use client";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`mt-10 border-t border-opacity-40 py-4 ${
        theme === "dark" ? "bg-black border-white text-white" : "bg-gray-100 border-gray-300 text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Logo & Thông tin */}
        <h2 className="text-xl font-semibold">SnowyClinic</h2>
        <p className="mt-2 text-sm">Viện Thẩm Mỹ SnowyClinic - Nơi tôn vinh vẻ đẹp tự nhiên.</p>

        {/* Mạng Xã Hội */}
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="https://facebook.com" target="_blank">
            <FaFacebook className="w-5 h-5 hover:text-blue-500 transition" />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <FaInstagram className="w-5 h-5 hover:text-pink-500 transition" />
          </Link>
          <Link href="tel:+84901234567">
            <FaPhone className="w-5 h-5 hover:text-green-500 transition" />
          </Link>
          <Link href="mailto:support@snowyclinic.com">
            <FaEnvelope className="w-5 h-5 hover:text-red-500 transition" />
          </Link>
        </div>

        {/* Bản quyền */}
        <p className="mt-4 text-xs opacity-75">© {new Date().getFullYear()} SnowyClinic. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
