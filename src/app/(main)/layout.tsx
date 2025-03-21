import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import ThemeProviderWrapper from "@/components/ThemeProvider";
import ConsultationForm from "@/components/ConsultationForm";
import FloatingToolbar from "@/components/FloatingToolbar";
import Footer from "@/components/footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>
        <ThemeProviderWrapper>
          <Navbar />
          <main className="mt-16">{children}</main>
          <ConsultationForm />
          <FloatingToolbar />
          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
