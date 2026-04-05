import type { OpeningWindow } from "@/types/business";

export const businessConfig = {
  brandName: "Street Food",
  whatsappPhone: "5492616608278",
  mercadoPagoAlias: "rbmoises",
  mercadoPagoLink: "",
  deliveryFee: 4000,
  deliveryZoneLabel: "Cipolletti",
openingWindows: [
  { startHour: 12, startMinute: 0, endHour: 15, endMinute: 0 },
  { startHour: 20, startMinute: 0, endHour: 0, endMinute: 0 },
] satisfies OpeningWindow[],
 flowSteps: [
  "Elegí tu hamburguesa",
  "Dale click en (Ir a pagar)",
  "Completá tus datos",
  "Pagá con Mercado Pago y envianos el comprobante",
],
  featuredTagline: "Hechas para pedir fácil, comer bien y repetir.",
};