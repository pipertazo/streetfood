import { ProductCard } from "@/components/menu/product-card";
import type { MenuCategoryConfig, MenuProduct } from "@/types/menu";

type MenuSectionProps = {
  category: MenuCategoryConfig;
  products: MenuProduct[];
};

export function MenuSection({ category, products }: MenuSectionProps) {
  return (
    <section className="space-y-5" id={category.id}>
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
          {category.label}
        </p>
        <h2 className="text-3xl font-extrabold text-cream">{category.description}</h2>
      </div>
      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
