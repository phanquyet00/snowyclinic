import "@/styles/globals.css"; // Import Tailwind CSS

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="bg-gray-100 text-gray-900">
        <div className="flex h-screen">
          {/* Sidebar */}
          <aside className="w-72 bg-gray-900 text-white flex flex-col p-5 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Admin Panel</h2>
            <nav className="flex-1">
              <ul className="space-y-2">
                <li>
                  <a href="/admin/dashboard" className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-700 transition">
                    📊 <span className="ml-2">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="/admin/services" className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-700 transition">
                    💆‍♀️ <span className="ml-2">Quản lý Dịch Vụ</span>
                  </a>
                </li>
                <li>
                  <a href="/admin/posts" className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-700 transition">
                    📝 <span className="ml-2">Quản lý Bài Viết</span>
                  </a>
                </li>
                <li>
                  <a href="/admin/customers" className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-700 transition">
                    👥 <span className="ml-2">Quản lý Khách Hàng</span>
                  </a>
                </li>
                <li>
                  <a href="/admin/appointments" className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-700 transition">
                    📅 <span className="ml-2">Quản lý Lịch Hẹn</span>
                  </a>
                </li>
                <li>
                  <a href="/admin/staff" className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-700 transition">
                    🏥 <span className="ml-2">Quản lý Nhân Viên</span>
                  </a>
                </li>
                <li>
                  <a href="/admin/reviews" className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-700 transition">
                    ⭐ <span className="ml-2">Quản lý Đánh Giá</span>
                  </a>
                </li>
                <li>
                  <a href="/admin/settings" className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-700 transition">
                    ⚙️ <span className="ml-2">Cài Đặt</span>
                  </a>
                </li>
              </ul>
            </nav>
            <button className="mt-auto w-full py-3 bg-red-600 hover:bg-red-700 transition rounded-lg text-white">
              Đăng xuất
            </button>
          </aside>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
              <h1 className="text-2xl font-bold">Quản trị</h1>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">👤 Admin</span>
              </div>
            </header>

            {/* Nội dung trang */}
            <main className="flex-1 p-6 overflow-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}