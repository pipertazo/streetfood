export type MenuCategory =
  | "clasicas"
  | "signature"
  | "hot-dogs"
  | "picoteo"
  | "bebidas";

export type BurgerSize = "simple" | "doble";

export type DrinkOption = "Coca-Cola" | "Coca-Cola Zero" | "Sprite" | "Fanta";

export type BurgerProduct = {
  id: string;
  type: "burger";
  name: string;
  category: "clasicas" | "signature";
  baseDescription: string;
  includesFries: true;
  availableDrinks: DrinkOption[];
  prices: Record<BurgerSize, number>;
  featured?: boolean;
};

export type SimpleProduct = {
  id: string;
  type: "simple";
  name: string;
  category: Exclude<MenuCategory, "clasicas" | "signature">;
  price: number;
  description?: string;
  featured?: boolean;
};

export type MenuProduct = BurgerProduct | SimpleProduct;

export type MenuCategoryConfig = {
  id: MenuCategory;
  label: string;
  description: string;
};
