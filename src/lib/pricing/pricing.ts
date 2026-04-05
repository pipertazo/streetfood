import { businessConfig } from "@/lib/config/business-config";
import type { CartItem, DeliveryType } from "@/types/cart";

export function getCartSubtotal(items: CartItem[]) {
  return items.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
}

export function getDeliveryFee(deliveryType: DeliveryType) {
  return deliveryType === "delivery" ? businessConfig.deliveryFee : 0;
}

export function getCartTotal(items: CartItem[], deliveryType: DeliveryType) {
  return getCartSubtotal(items) + getDeliveryFee(deliveryType);
}
