import "@/styles/globals.css"

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="vi">
        <body className="flex items-center justify-center min-h-screen bg-gray-100">
          {children}
        </body>
      </html>
    );
  }
  