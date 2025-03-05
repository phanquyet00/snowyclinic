"use client";

import { useState } from "react";
import Image from "next/image";

const ConsultationForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Nút mở form */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 left-5 font-bold px-4 py-2 rounded-full flex items-center shadow-lg bg-white text-black"
      >
        <img src="/wechat-icon.png" alt="Chat" className="w-6 h-6 mr-2" />
        NHẬN TƯ VẤN NGAY
      </button>

      {/* Form popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative w-96 p-6 rounded-xl shadow-lg overflow-hidden">
            {/* Ảnh nền */}
            <Image
              src="/background.avif"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="absolute top-0 left-0 w-full h-full -z-10"
            />

            {/* Nút đóng form */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-lg text-white"
            >
              ✖
            </button>

            {/* Nội dung form */}
            <h2 className="text-center text-xl font-bold text-white mb-4">
              SIÊU HỘI LÀM ĐẸP
            </h2>

            <div className="flex justify-center space-x-2 mb-4 text-white">
              <div className="text-center">
                <p className="text-xl font-bold">2</p>
                <p className="text-sm">NGÀY</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">1</p>
                <p className="text-sm">GIỜ</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">15</p>
                <p className="text-sm">PHÚT</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">36</p>
                <p className="text-sm">GIÂY</p>
              </div>
            </div>

            {/* Form input */}
            <input
              type="text"
              placeholder="Họ và Tên"
              className="w-full p-2 border rounded mb-2 bg-white"
            />
            <input
              type="tel"
              placeholder="Số điện thoại"
              className="w-full p-2 border rounded mb-2 bg-white"
            />
            <select className="w-full p-2 border rounded mb-4 bg-white">
              <option>-- Vui lòng chọn --</option>
              <option>Dịch vụ 1</option>
              <option>Dịch vụ 2</option>
            </select>

            {/* Nút đăng ký */}
            <button className="w-full bg-brown-600 text-white p-2 rounded font-bold">
              ĐĂNG KÝ NGAY
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultationForm;