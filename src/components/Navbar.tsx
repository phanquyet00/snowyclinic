"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const menuItems = [
    {
      title: "PHUN THÊU THẨM MỸ",
      path: "/phun-theu",
      submenu: ["Điêu khắc chân mày", "Phun môi", "Phun mí"],
    },
    // {
    //   title: "PHẪU THUẬT THẨM MỸ",
    //   path: "/phau-thuat",
    //   submenu: ["Nâng mũi", "Cắt mí mắt", "Gọt cằm"],
    // },
    {
      title: "SPA – CHĂM SÓC DA",
      path: "/spa",
      submenu: ["Chăm sóc da mặt", "Tắm trắng", "Massage body"],
    },
    {
      title: "ĐIỀU TRỊ DA",
      path: "/dieu-tri-da",
      submenu: ["Trị nám", "Trị mụn", "Trẻ hóa da"],
    },
    // {
    //   title: "NHA KHOA THẨM MỸ",
    //   path: "/nha-khoa",
    //   submenu: ["Tẩy trắng răng", "Bọc răng sứ", "Niềng răng"],
    // },
    {
      title: "TIN TỨC & SỰ KIỆN",
      path: "/tin-tuc",
      submenu: ["Tin khuyến mãi", "Xu hướng làm đẹp"],
    },
  ];

  return (
    <nav className="fixed bg-white shadow-md top-0 left-0 w-full z-50">

      {/* Logo */}
      <Link href="/" className="flex justify-center px-20">
        <img src="/logo.png" alt="Logo" height={150} width={100} />
      </Link>

      <div className="max-w-7xl mx-auto px-4 flex justify-center items-center py-4">

        {/* Menu */}
        <ul className="flex space-x-6 text-brown-800 font-semibold">
          <li>
            <Link href="/about" className="hover:text-pink-500 whitespace-nowrap">
              GIỚI THIỆU
            </Link>
          </li>

          {menuItems.map((menu, index) => (
            <li key={index} className="relative">
              {/* Main menu item */}
              <button
                onClick={() => toggleDropdown(menu.title)}
                className="flex items-center space-x-1 hover:text-pink-500 whitespace-nowrap" 
              >
                <span>{menu.title}</span>
                <FaChevronDown size={12} />
              </button>

              {/* Dropdown Menu - Hiện khi click */}
              {openDropdown === menu.title && (
                <ul className="absolute left-0 mt-2 bg-white shadow-lg border rounded-lg w-48">
                  {menu.submenu.map((item, i) => (
                    <li key={i} className="hover:bg-gray-100 px-4 py-2">
                      <Link href={`${menu.path}/${i}`} className="block">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* Icon tìm kiếm */}
          <li>
            <button className="hover:text-pink-500">🔍</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
