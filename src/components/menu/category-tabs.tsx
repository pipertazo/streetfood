import Link from "next/link";

import type { MenuCategoryConfig } from "@/types/menu";

type CategoryTabsProps = {
  categories: MenuCategoryConfig[];
};

export function CategoryTabs({ categories }: CategoryTabsProps) {
  return (
    <div className="sticky top-[88px] z-20 -mx-4 overflow-x-auto border-y border-sand/10 bg-coal/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6">
      <div className="mx-auto flex max-w-6xl gap-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            className="whitespace-nowrap rounded-full border border-sand/15 px-4 py-2 text-sm font-bold text-cream"
            href={`#${category.id}`}
          >
            {category.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
