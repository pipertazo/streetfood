import Link from "next/link";

import { FeaturedProducts } from "@/components/home/featured-products";
import { HeroSection } from "@/components/home/hero-section";
import { OrderSteps } from "@/components/home/order-steps";
import { ServiceModes } from "@/components/home/service-modes";
import { StoreHoursPanel } from "@/components/home/store-hours-panel";
import { PrimaryButton } from "@/components/shared/primary-button";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <StoreHoursPanel />
      <OrderSteps />
      <ServiceModes />

      <section className="px-4 pb-16 pt-4 sm:px-6 sm:pb-20">
        <div className="mx-auto flex max-w-6xl justify-center">
          <Link href="/menu">
            <PrimaryButton>Ir al menú completo</PrimaryButton>
          </Link>
        </div>
      </section>
    </>
  );
}
