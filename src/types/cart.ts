import type { BurgerSize, DrinkOption, MenuProduct } from "@/types/menu";

export type DeliveryType = "delivery" | "takeaway";

type BaseCartItem = {
  cartItemId: string;
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  type: MenuProduct["type"];
};

export type BurgerCartItem = BaseCartItem & {
  type: "burger";
  size: BurgerSize;
  drink: DrinkOption;
  notes?: string;
};

export type SimpleCartItem = BaseCartItem & {
  type: "simple";
};

export type CartItem = BurgerCartItem | SimpleCartItem;
