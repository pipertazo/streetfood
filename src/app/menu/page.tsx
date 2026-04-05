import { CategoryTabs } from "@/components/menu/category-tabs";
import { MenuSection } from "@/components/menu/menu-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { menuCategories, menuProducts } from "@/lib/config/menu-data";

export default function MenuPage() {
  return (
    <>
      <section className="px-4 pb-8 pt-8 sm:px-6 sm:pb-10 sm:pt-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Menú"
            title="Pedí a tu ritmo"
            description="Todo el menú está pensado para recorrerse fácil desde el celu, con botones grandes y decisiones claras."
          />
        </div>
      </section>

      <CategoryTabs categories={menuCategories} />

      <section className="px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-6xl space-y-12">
          {menuCategories.map((category) => (
            <MenuSection
              key={category.id}
              category={category}
              products={menuProducts.filter((product) => product.category === category.id)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
