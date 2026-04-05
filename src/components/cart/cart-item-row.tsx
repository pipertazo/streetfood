"use client";

import { useCartStore } from "@/features/cart/cart-store";
import { formatCurrency } from "@/lib/utils/currency";
import type { CartItem } from "@/types/cart";

type CartItemRowProps = {
  item: CartItem;
};

export function CartItemRow({ item }: CartItemRowProps) {
  const incrementItem = useCartStore((state) => state.incrementItem);
  const decrementItem = useCartStore((state) => state.decrementItem);
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <article className="rounded-2xl border border-sand/10 bg-ember p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <p className="text-base font-bold text-cream">{item.productName}</p>
          {item.type === "burger" ? (
            <p className="text-sm text-smoke">
              {item.size} | {item.drink}
              {item.notes ? ` | ${item.notes}` : ""}
            </p>
          ) : null}
          <p className="text-sm font-semibold text-gold">{formatCurrency(item.unitPrice)}</p>
        </div>
        <button
          className="text-sm font-bold text-[#f8a887]"
          onClick={() => removeItem(item.cartItemId)}
          type="button"
        >
          Eliminar
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand/15 text-lg font-bold text-cream"
            onClick={() => decrementItem(item.cartItemId)}
            type="button"
          >
            -
          </button>
          <span className="min-w-6 text-center text-base font-bold text-cream">{item.quantity}</span>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand/15 text-lg font-bold text-cream"
            onClick={() => incrementItem(item.cartItemId)}
            type="button"
          >
            +
          </button>
        </div>
        <p className="text-base font-extrabold text-cream">
          {formatCurrency(item.quantity * item.unitPrice)}
        </p>
      </div>
    </article>
  );
}
