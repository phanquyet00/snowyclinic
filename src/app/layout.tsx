import "./globals.css";
import Navbar from "@/components/Navbar";
import ConsultationForm from "@/components/ConsultationForm";
import FloatingToolbar from "@/components/FloatingToolbar";

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
