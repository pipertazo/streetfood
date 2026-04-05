import { getCartSubtotal, getCartTotal, getDeliveryFee } from "@/lib/pricing/pricing";
import type { CartItem, DeliveryType } from "@/types/cart";

export function getCartCount(items: CartItem[]) {
  return items.reduce((total, item) => total + item.quantity, 0);
}

export function getCartSummary(items: CartItem[], deliveryType: DeliveryType) {
  const subtotal = getCartSubtotal(items);
  const delivery = getDeliveryFee(deliveryType);
  const total = getCartTotal(items, deliveryType);

  return { subtotal, delivery, total };
}
