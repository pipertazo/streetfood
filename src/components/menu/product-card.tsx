"use client";

import { BurgerConfigSheet } from "@/components/menu/burger-config-sheet";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { PrimaryButton } from "@/components/shared/primary-button";
import { useCartStore } from "@/features/cart/cart-store";
import { formatCurrency } from "@/lib/utils/currency";
import type { MenuProduct } from "@/types/menu";

type ProductCardProps = {
  product: MenuProduct;
};

export function ProductCard({ product }: ProductCardProps) {
  const addSimpleProduct = useCartStore((state) => state.addSimpleProduct);
  const imageSrc = `/products/${product.id}.jpg`;

  return (
    <article className="overflow-hidden rounded-[28px] border border-sand/10 bg-ember shadow-card">
      <img
        src={imageSrc}
        alt={product.name}
        className="h-56 w-full rounded-b-none object-cover"
      />

      <div className="space-y-4 p-5">
        <div className="space-y-3">
  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
    {product.type === "burger" ? "Combo burger" : "Street side"}
  </p>
  <h3 className="text-2xl font-extrabold text-cream">{product.name}</h3>
  <p className="text-sm leading-6 text-smoke">
    {product.type === "burger" ? product.baseDescription : product.description}
  </p>

  {product.type === "burger" ? (
    <div className="inline-flex w-fit items-center rounded-full border border-[#2d7c4a] bg-[#163126] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#fbf6e3]">
      Incluye papas y gaseosa
    </div>
  ) : null}
</div>

        <div className="rounded-2xl border border-sand/10 bg-coal/50 p-4">
          {product.type === "burger" ? (
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-smoke">Simple</p>
                <p className="text-lg font-extrabold text-cream">
                  {formatCurrency(product.prices.simple)}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.16em] text-smoke">Doble</p>
                <p className="text-lg font-extrabold text-cream">
                  {formatCurrency(product.prices.doble)}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-lg font-extrabold text-cream">{formatCurrency(product.price)}</p>
          )}
        </div>

        {product.type === "burger" ? (
          <BurgerConfigSheet product={product} />
        ) : (
          <PrimaryButton
            className="w-full"
            onClick={() => addSimpleProduct(product)}
            type="button"
          >
            Agregar al carrito
          </PrimaryButton>
        )}
      </div>
    </article>
  );
}