"use client";

import Link from "next/link";

import { useCartStore } from "@/features/cart/cart-store";
import { getCartCount } from "@/features/cart/cart-selectors";

export function SiteHeader() {
  const items = useCartStore((state) => state.items);
  const openDrawer = useCartStore((state) => state.openDrawer);
  const itemCount = getCartCount(items);

  return (
    <header className="sticky top-0 z-30 border-b border-sand/10 bg-coal/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/branding/logo.png"
            alt="Logo Street Food"
            className="h-11 w-11 rounded-full border border-sand/15 bg-ember object-cover"
          />
          <div>
            <p className="font-display text-2xl uppercase tracking-[0.08em] text-cream">
              Street Food
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-smoke">Pedidos online</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-semibold text-cream md:flex">
          <Link href="/">Inicio</Link>
          <Link href="/menu">Menú</Link>
          <Link href="/checkout">Pagar</Link>
        </nav>

        <button
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-sand/15 px-4 text-sm font-bold text-cream"
          onClick={openDrawer}
          type="button"
        >
          Carrito
          <span className="inline-flex min-h-6 min-w-6 items-center justify-center rounded-full bg-gold px-1 text-xs text-coal">
            {itemCount}
          </span>
        </button>
      </div>
    </header>
  );
}