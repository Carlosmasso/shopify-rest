import { Manrope } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CartDrawerProvider } from "@/components/cart/CartDrawerProvider";
import CartDrawer from "@/components/cart/CartDrawer";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Get Reset",
    template: "%s | Get Reset",
  },

  description:
    "Premium wellness products designed to help you rest, recover and recharge.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <CartDrawerProvider>
          <Header />
          <CartDrawer />
          {children}
          <Footer />
        </CartDrawerProvider>
      </body>
    </html>
  );
}
