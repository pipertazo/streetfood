import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";

import "@/app/globals.css";

import { CartDrawer } from "@/components/cart/cart-drawer";
import { Footer } from "@/components/layout/footer";
import { MobileCartBar } from "@/components/layout/mobile-cart-bar";
import { SiteHeader } from "@/components/layout/site-header";
import { cn } from "@/lib/utils/cn";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Street Food",
  description: "Pedidos online simples para Street Food.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={cn(bebas.variable, manrope.variable, "bg-coal font-body text-cream")}>
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(241,184,45,0.12),_transparent_30%),linear-gradient(180deg,_#131313_0%,_#111111_100%)]">
          <SiteHeader />
          <main className="pb-24 md:pb-0">{children}</main>
          <Footer />
          <CartDrawer />
          <MobileCartBar />
        </div>
      </body>
    </html>
  );
}
