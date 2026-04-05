"use client";

import Link from "next/link";

import { CartItemRow } from "@/components/cart/cart-item-row";
import { CartSummary } from "@/components/cart/cart-summary";
import { EmptyCart } from "@/components/cart/empty-cart";
import { PrimaryButton } from "@/components/shared/primary-button";
import { SecondaryButton } from "@/components/shared/secondary-button";
import { useCartStore } from "@/features/cart/cart-store";
import { getCartSummary } from "@/features/cart/cart-selectors";

export function CartDrawer() {
  const items = useCartStore((state) => state.items);
  const isDrawerOpen = useCartStore((state) => state.isDrawerOpen);
  const closeDrawer = useCartStore((state) => state.closeDrawer);
  const clearCart = useCartStore((state) => state.clearCart);
  const deliveryType = useCartStore((state) => state.checkoutDeliveryType);
  const summary = getCartSummary(items, deliveryType);

  if (!isDrawerOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70">
      <div className="flex h-full w-full max-w-md flex-col gap-5 overflow-y-auto border-l border-sand/10 bg-coal p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Carrito</p>
            <h2 className="text-2xl font-extrabold text-cream">Tu pedido</h2>
          </div>
          <button className="text-sm font-bold text-cream" onClick={closeDrawer} type="button">
            Cerrar
          </button>
        </div>

        <div className="space-y-3">
          {items.length === 0 ? (
            <EmptyCart />
          ) : (
            items.map((item) => <CartItemRow key={item.cartItemId} item={item} />)
          )}
        </div>

        <CartSummary
          delivery={summary.delivery}
          subtotal={summary.subtotal}
          total={summary.total}
        />

        <div className="grid gap-3">
          <Link href="/checkout" onClick={closeDrawer}>
            <PrimaryButton className="w-full">Ir a pagar</PrimaryButton>
          </Link>
          <SecondaryButton className="w-full" onClick={clearCart} type="button">
            Vaciar carrito
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}