import Link from "next/link";

import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { SectionHeading } from "@/components/shared/section-heading";
import { featuredProducts } from "@/lib/config/menu-data";
import { formatCurrency } from "@/lib/utils/currency";

export function FeaturedProducts() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl space-y-8">
      <SectionHeading
  eyebrow="Destacados del mes"
  title="Nuestros elegidos 🔥 🔥"
  description="Una selección especial de Street Food para que elijas tus favoritos más rápido 💚"
/>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => {
            const price =
              product.type === "burger" ? product.prices.simple : product.price;
            return (
              <article
                key={product.id}
                className="overflow-hidden rounded-[28px] border border-sand/10 bg-ember shadow-card"
              >
                <img
  src={`/products/${product.id}.jpg`}
  alt={product.name}
  className="h-56 w-full rounded-b-none object-cover"
/>
                <div className="space-y-3 p-5">
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
                      {product.type === "burger" ? "Burger" : "Street pick"}
                    </p>
                    <h3 className="text-xl font-extrabold text-cream">{product.name}</h3>
                    <p className="text-sm text-smoke">
                      {product.type === "burger"
                        ? product.baseDescription
                        : product.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-extrabold text-cream">
                      Desde {formatCurrency(price)}
                    </span>
                    <Link className="text-sm font-bold text-gold" href="/menu">
                      Ver más
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
