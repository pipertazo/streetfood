import { SectionHeading } from "@/components/shared/section-heading";

export function ServiceModes() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl space-y-8">
        <SectionHeading
          eyebrow="Modalidades"
          title="Delivery o take away"
          description="Elegí cómo te queda más cómodo."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-[28px] border border-sand/10 bg-ember p-6 shadow-card">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
              Delivery en Cipolletti
            </p>
            <h3 className="mt-3 text-2xl font-extrabold text-cream">Te lo llevamos</h3>
            <p className="mt-2 text-sm leading-6 text-smoke">
              Completás tu dirección, envias el comprobante por WhatsApp, nosotros te lo llevamos.
            </p>
          </article>
          <article className="rounded-[28px] border border-sand/10 bg-ember p-6 shadow-card">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
              Take away rápido
            </p>
            <h3 className="mt-3 text-2xl font-extrabold text-cream">Pasás y retirás</h3>
            <p className="mt-2 text-sm leading-6 text-smoke">
              Si preferís resolver rápido, elegí retiro y completá solo los datos
              necesarios.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
