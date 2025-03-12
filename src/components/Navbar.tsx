"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { navItems } from "@/data/Data";
import NavButton from "./Button";
import { FaChevronDown } from "react-icons/fa";
import ThemeSwitcher from "./ThemeSwitcher";
import LoginModal from "./LoginForm";
import RegisterModal from "./RegisterForm";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // Lấy thông tin user từ localStorage khi load trang
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Xử lý đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setShowDropdown(false);
  };

  return (
    <nav className="bg-white dark:bg-black shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">
            SnowyClinic
          </Link>
          <div className="flex space-x-6">
            <Link href="/about">
              <NavButton text="GIỚI THIỆU" icon={null} />
            </Link>
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setOpenMenu(index)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <NavButton text={item.title} icon={<FaChevronDown />} />
                {openMenu === index && (
                  <div className="absolute left-0 w-48 bg-white shadow-lg rounded-md py-2">
                    {item.services.map((service, idx) => (
                      <Link key={idx} href={service.link} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Nếu đã đăng nhập, hiển thị tên user */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="text-gray-800 dark:text-white font-semibold"
              >
                {user}
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md py-2">
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200">
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          ) : (
            // Nếu chưa đăng nhập, hiển thị nút Đăng nhập & Đăng ký
            <div className="flex space-x-4 items-center">
              <button onClick={() => setShowLogin(true)}>
                <NavButton text="Đăng nhập" icon={null} />
              </button>
              <button onClick={() => setShowRegister(true)}>
                <NavButton text="Đăng ký" icon={null} />
              </button>
              <ThemeSwitcher />
            </div>
          )}
        </div>
      </div>

      {/* Hiển thị Modal khi trạng thái showLogin = true */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} setUser={setUser} />}

      {/* Hiển thị Modal khi trạng thái showRegister = true */}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    </nav>
  );
};

export default Navbar;
