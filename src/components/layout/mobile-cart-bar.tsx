"use client";

import Link from "next/link";

import { PrimaryButton } from "@/components/shared/primary-button";
import { useCartStore } from "@/features/cart/cart-store";
import { getCartCount, getCartSummary } from "@/features/cart/cart-selectors";
import { formatCurrency } from "@/lib/utils/currency";

export function MobileCartBar() {
  const items = useCartStore((state) => state.items);
  const deliveryType = useCartStore((state) => state.checkoutDeliveryType);
  const openDrawer = useCartStore((state) => state.openDrawer);

  if (items.length === 0) {
    return null;
  }

  const itemCount = getCartCount(items);
  const summary = getCartSummary(items, deliveryType);

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-sand/10 bg-coal/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-6xl items-center gap-3">
        <button
          className="flex-1 rounded-2xl border border-sand/15 bg-ember px-4 py-3 text-left"
          onClick={openDrawer}
          type="button"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-smoke">
            {itemCount} {itemCount === 1 ? "producto" : "productos"}
          </p>
          <p className="text-lg font-extrabold text-cream">{formatCurrency(summary.total)}</p>
        </button>
        <Link className="w-[45%]" href="/checkout">
         <PrimaryButton className="w-full">Ir a pagar</PrimaryButton>
        </Link>
      </div>
    </div>
  );
}