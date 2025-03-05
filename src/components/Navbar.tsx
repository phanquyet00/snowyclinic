"use client";
import { useState } from "react";
import Link from "next/link";
import { navItems } from "@/data/Data";
import NavButton from "./Button";
import { FaChevronDown } from "react-icons/fa"; // Import icon dropdown
import ThemeSwitcher from "./ThemeSwitcher";


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  return (
    <nav className="shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">
            SnowyClinic
          </Link>
          <div className="flex space-x-6">
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
                      <Link
                        key={idx}
                        href={service.link}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
