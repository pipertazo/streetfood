import { SectionHeading } from "@/components/shared/section-heading";
import { businessConfig } from "@/lib/config/business-config";

export function OrderSteps() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl space-y-8">
     <SectionHeading
  eyebrow="Cómo pedir"
  title="4 pasos"
  description="Hacer tu pedido es rápido, simple y directo."
/>
        <div className="grid gap-4 md:grid-cols-3">
          {businessConfig.flowSteps.map((step, index) => (
            <article
              key={step}
              className="rounded-[28px] border border-sand/10 bg-ember p-6 shadow-card"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold font-display text-2xl text-coal">
                {index + 1}
              </div>
              <h3 className="text-xl font-extrabold text-cream">{step}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
