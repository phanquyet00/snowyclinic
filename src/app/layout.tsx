import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import ThemeProviderWrapper from "@/components/ThemeProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>
        <ThemeProviderWrapper>
          <Navbar />
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
