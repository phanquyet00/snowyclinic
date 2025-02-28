import "./globals.css";
import Navbar from "@/component/Navbar";
import ConsultationForm from "@/component/ConsultationForm";
import FloatingToolbar from "@/component/FloatingToolbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <Navbar />
        {children}
        <ConsultationForm />
        <FloatingToolbar />
      </body>
    </html>
  );
}
