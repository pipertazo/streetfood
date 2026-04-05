import type { DeliveryType } from "@/types/cart";

export type CheckoutFormData = {
  fullName: string;
  phone: string;
  deliveryType: DeliveryType;
  address: string;
  email?: string;
  rememberData: boolean;
};

export type StoredCustomerData = Omit<CheckoutFormData, "rememberData">;
