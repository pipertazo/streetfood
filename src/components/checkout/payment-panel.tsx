import Image from "next/image";

import { businessConfig } from "@/lib/config/business-config";

export function PaymentPanel() {
  return (
    <section className="space-y-4 rounded-[28px] border border-sand/10 bg-ember p-5 shadow-card sm:p-6">
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Pago</p>
        <h2 className="text-2xl font-extrabold text-cream">Mercado Pago</h2>
        <p className="text-sm leading-6 text-smoke">
          Pagá por fuera de la web y después enviá el pedido por WhatsApp con el comprobante.
        </p>
      </div>

      <div className="rounded-2xl border border-sand/10 bg-coal/60 p-4">
        <p className="text-sm font-semibold text-smoke">Alias</p>
        <p className="mt-1 text-xl font-extrabold text-cream">{businessConfig.mercadoPagoAlias}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_220px]">
        <div className="rounded-2xl border border-dashed border-sand/15 bg-coal/60 p-4">
          <p className="text-sm font-semibold text-smoke">Link de pago</p>
          <p className="mt-2 text-sm leading-6 text-cream/85">
            Pendiente para integrar. Este bloque queda listo para reemplazar por el link final
            cuando lo tengas.
          </p>
          {/* Futuro: reemplazar este texto por el link real de Mercado Pago. */}
        </div>
        <div className="rounded-2xl border border-dashed border-sand/15 bg-coal/60 p-4">
          <p className="text-sm font-semibold text-smoke">QR</p>
          <div className="mt-3 overflow-hidden rounded-2xl border border-sand/10 bg-ember/80 p-4">
            <Image
              alt="Placeholder de QR para Mercado Pago"
              className="mx-auto h-auto w-full max-w-[180px]"
              height={500}
              src="/placeholders/qr-placeholder.svg"
              width={500}
            />
          </div>
          {/* Futuro: reemplazar este placeholder por el QR definitivo. */}
        </div>
      </div>
    </section>
  );
}
