"use client";

import { useMemo, useState } from "react";

import { PrimaryButton } from "@/components/shared/primary-button";
import { SecondaryButton } from "@/components/shared/secondary-button";
import { TextareaField } from "@/components/shared/textarea-field";
import { useCartStore } from "@/features/cart/cart-store";
import { formatCurrency } from "@/lib/utils/currency";
import type { BurgerProduct, BurgerSize, DrinkOption } from "@/types/menu";

type BurgerConfigSheetProps = {
  product: BurgerProduct;
};

export function BurgerConfigSheet({ product }: BurgerConfigSheetProps) {
  const addBurger = useCartStore((state) => state.addBurger);
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState<BurgerSize>("simple");
  const [drink, setDrink] = useState<DrinkOption>(product.availableDrinks[0]);
  const [notes, setNotes] = useState("");

  const selectedPrice = useMemo(() => product.prices[size], [product.prices, size]);

  function handleAdd() {
    addBurger({
      product,
      size,
      drink,
      notes: notes.trim(),
    });
    setIsOpen(false);
    setSize("simple");
    setDrink(product.availableDrinks[0]);
    setNotes("");
  }

  return (
    <>
      <PrimaryButton className="w-full" onClick={() => setIsOpen(true)} type="button">
        Elegir y agregar
      </PrimaryButton>

      {isOpen ? (
  <div className="fixed inset-0 z-40 flex items-end bg-black/70 p-3 sm:items-center sm:justify-center">
    <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-t-[28px] border border-sand/10 bg-coal p-5 shadow-card sm:rounded-[28px] sm:p-6">
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
          Configurá tu burger
        </p>
        <h3 className="text-2xl font-extrabold text-cream">{product.name}</h3>
        <p className="text-sm leading-6 text-smoke">{product.baseDescription}</p>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-semibold text-cream">Elegí el tamaño</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {(["simple", "doble"] as BurgerSize[]).map((option) => {
            const active = option === size;
            return (
              <button
                key={option}
                className={`rounded-2xl border px-4 py-4 text-left ${
                  active
                    ? "border-gold bg-[#2b2418]"
                    : "border-sand/15 bg-ember text-cream"
                }`}
                onClick={() => setSize(option)}
                type="button"
              >
                <p className="text-sm font-bold uppercase tracking-[0.16em]">{option}</p>
                <p className="mt-1 text-lg font-extrabold">
                  {formatCurrency(product.prices[option])}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-semibold text-cream">Elegí la bebida incluida</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {product.availableDrinks.map((option) => {
            const active = option === drink;
            return (
              <button
                key={option}
                className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold ${
                  active
                    ? "border-gold bg-[#2b2418] text-cream"
                    : "border-sand/15 bg-ember text-cream"
                }`}
                onClick={() => setDrink(option)}
                type="button"
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <TextareaField
        label="Aclaración para esta hamburguesa"
        maxLength={140}
        placeholder="Ej: sin cebolla, salsa aparte, bien cocida..."
        value={notes}
        onChange={(event) => setNotes(event.target.value)}
      />

      <div className="flex flex-col gap-3 sm:flex-row">
        <SecondaryButton className="w-full" onClick={() => setIsOpen(false)} type="button">
          Cancelar
        </SecondaryButton>
        <PrimaryButton className="w-full" onClick={handleAdd} type="button">
          Agregar {formatCurrency(selectedPrice)}
        </PrimaryButton>
      </div>
    </div>
  </div>
) : null}
    </>
  );
}