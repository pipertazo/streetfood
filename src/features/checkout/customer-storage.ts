import { removeStorage, writeStorage } from "@/lib/storage/local-storage";
import type { CheckoutFormData, StoredCustomerData } from "@/types/checkout";

export const CUSTOMER_STORAGE_KEY = "street-food-customer";

export function saveCustomerData(values: CheckoutFormData) {
  const payload: StoredCustomerData = {
    fullName: values.fullName,
    phone: values.phone,
    deliveryType: values.deliveryType,
    address: values.address,
    email: values.email,
  };

  if (values.rememberData) {
    writeStorage(CUSTOMER_STORAGE_KEY, payload);
    return;
  }

  removeStorage(CUSTOMER_STORAGE_KEY);
}
