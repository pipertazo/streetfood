"use client";

import Image from "next/image";
import { useState } from "react";

import { businessConfig } from "@/lib/config/business-config";

export function PaymentPanel() {
  const [copied, setCopied] = useState(false);

  async function handleCopyAlias() {
    try {
      await navigator.clipboard.writeText(businessConfig.mercadoPagoAlias);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

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
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xl font-extrabold text-cream">{businessConfig.mercadoPagoAlias}</p>
          <button
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#ffd54a] bg-[#ffe08a] px-4 text-sm font-bold text-[#106736] transition hover:brightness-105"
            onClick={handleCopyAlias}
            type="button"
          >
            {copied ? "Alias copiado" : "Copiar alias"}
          </button>
        </div>
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