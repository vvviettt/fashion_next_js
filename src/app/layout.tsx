import Footer from "@/components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Header />
          <div className="pt-24">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
