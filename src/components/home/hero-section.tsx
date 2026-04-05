import Link from "next/link";

import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { PrimaryButton } from "@/components/shared/primary-button";
import { SecondaryButton } from "@/components/shared/secondary-button";
import { StoreStatusBadge } from "@/components/shared/store-status-badge";
import { getStorePresentation } from "@/features/store-status/store-status";

export function HeroSection() {
  const store = getStorePresentation();

  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-12">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="space-y-6">
          <StoreStatusBadge label={store.label} status={store.status} />
          <div className="space-y-4">
            <h1 className="max-w-[12ch] bg-gradient-to-r from-[#b8f0cb] via-[#49b96e] to-[#106736] bg-clip-text font-display text-6xl uppercase leading-[0.88] tracking-[0.03em] text-transparent sm:text-7xl">
  Street Food ahora tiene app de pedidos. Aprovechá las ofertas.
</h1>
<p className="max-w-xl text-base leading-7 text-smoke sm:text-lg">
  Pedí tu hamburguesa favorita, pagá por Mercado Pago y enviá el comprobante por
  WhatsApp. Nosotros nos encargamos del resto.
</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
  <Link href="/menu">
  <PrimaryButton className="w-full border-2 border-[#ffd54a] bg-[#ffe08a] px-8 py-4 text-base text-[#106736] shadow-[0_0_0_3px_rgba(255,224,138,0.18),0_12px_30px_rgba(0,0,0,0.24)] animate-pulse sm:w-auto">
  Pedir ahora 🍔
</PrimaryButton>
  </Link>
</div>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-sand/10 shadow-card">
  <img
    src="/products/mundial.jpg"
    alt="Hamburguesa del mes"
  className="h-[18rem] w-full object-cover sm:h-[24rem]"
  />
</div>
      </div>
    </section>
  );
}
