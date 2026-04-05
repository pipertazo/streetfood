"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { readStorage } from "@/lib/storage/local-storage";
import type { CartItem, DeliveryType } from "@/types/cart";
import type { BurgerProduct, DrinkOption, SimpleProduct } from "@/types/menu";

type CartState = {
  items: CartItem[];
  isDrawerOpen: boolean;
  checkoutDeliveryType: DeliveryType;
  openDrawer: () => void;
  closeDrawer: () => void;
  setCheckoutDeliveryType: (deliveryType: DeliveryType) => void;
  addBurger: (payload: {
    product: BurgerProduct;
    size: "simple" | "doble";
    drink: DrinkOption;
    notes?: string;
  }) => void;
  addSimpleProduct: (product: SimpleProduct) => void;
  incrementItem: (cartItemId: string) => void;
  decrementItem: (cartItemId: string) => void;
  removeItem: (cartItemId: string) => void;
  clearCart: () => void;
};

export const CART_STORAGE_KEY = "street-food-cart";

function createCartItemId() {
  return `cart-item-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isDrawerOpen: false,
      checkoutDeliveryType: "delivery",
      openDrawer: () => set({ isDrawerOpen: true }),
      closeDrawer: () => set({ isDrawerOpen: false }),
      setCheckoutDeliveryType: (deliveryType) => set({ checkoutDeliveryType: deliveryType }),
      addBurger: ({ product, size, drink, notes }) =>
        set((state) => ({
          items: [
            ...state.items,
            {
              cartItemId: createCartItemId(),
              productId: product.id,
              productName: product.name,
              quantity: 1,
              unitPrice: product.prices[size],
              type: "burger",
              size,
              drink,
              notes,
            },
          ],
          isDrawerOpen: true,
        })),
      addSimpleProduct: (product) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.productId === product.id && item.type === "simple",
          );

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.cartItemId === existingItem.cartItemId
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
              isDrawerOpen: true,
            };
          }

          return {
            items: [
              ...state.items,
              {
                cartItemId: createCartItemId(),
                productId: product.id,
                productName: product.name,
                quantity: 1,
                unitPrice: product.price,
                type: "simple",
              },
            ],
            isDrawerOpen: true,
          };
        }),
      incrementItem: (cartItemId) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        })),
      decrementItem: (cartItemId) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item.cartItemId === cartItemId ? { ...item, quantity: item.quantity - 1 } : item,
            )
            .filter((item) => item.quantity > 0),
        })),
      removeItem: (cartItemId) =>
        set((state) => ({
          items: state.items.filter((item) => item.cartItemId !== cartItemId),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: CART_STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        items: state.items,
        checkoutDeliveryType: state.checkoutDeliveryType,
      }),
      merge: (persistedState, currentState) => {
        const savedState = persistedState as Partial<CartState> | undefined;
        return {
          ...currentState,
          ...savedState,
        };
      },
    },
  ),
);

export function getStoredCartItems() {
  return readStorage<{ state?: Pick<CartState, "items"> } | null>(CART_STORAGE_KEY, null)?.state
    ?.items ?? [];
}
