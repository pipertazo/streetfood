import { businessConfig } from "@/lib/config/business-config";
import { formatCurrency } from "@/lib/utils/currency";
import type { CartItem, DeliveryType } from "@/types/cart";
import type { CheckoutFormData } from "@/types/checkout";

function formatItem(item: CartItem) {
  if (item.type === "burger") {
    const notes = item.notes ? ` | Aclaracion: ${item.notes}` : "";
    return `- ${item.productName} (${item.size}) x${item.quantity} | Bebida: ${item.drink}${notes} | ${formatCurrency(item.unitPrice * item.quantity)}`;
  }

  return `- ${item.productName} x${item.quantity} | ${formatCurrency(item.unitPrice * item.quantity)}`;
}

function getDeliveryLabel(deliveryType: DeliveryType) {
  return deliveryType === "delivery" ? "Delivery" : "Take away";
}

export function buildWhatsAppMessage({
  customer,
  items,
  subtotal,
  deliveryFee,
  total,
}: {
  customer: CheckoutFormData;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
}) {
  const lines = [
    `Hola ${businessConfig.brandName}, quiero hacer este pedido:`,
    "",
    `Nombre y apellido: ${customer.fullName}`,
    `Telefono: ${customer.phone}`,
    `Entrega: ${getDeliveryLabel(customer.deliveryType)}`,
    ...(customer.deliveryType === "delivery" ? [`Direccion: ${customer.address}`] : []),
    ...(customer.email ? [`Email: ${customer.email}`] : []),
    "",
    "Detalle del pedido:",
    ...items.map(formatItem),
    "",
    `Subtotal: ${formatCurrency(subtotal)}`,
    `Delivery: ${formatCurrency(deliveryFee)}`,
    `Total final: ${formatCurrency(total)}`,
    "",
    "Adjunto el comprobante de Mercado Pago por este medio.",
  ];

  return lines.join("\n");
}
