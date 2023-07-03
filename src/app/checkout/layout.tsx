import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Checkout from "@/components/Checkout";

const inter = Inter({ subsets: ["latin"] });

export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex max-w-[1280px] mx-auto py-14 ">
      <div className="flex-1">{children}</div>
      <div className="px-10"></div>
      <Checkout />
    </div>
  );
}
