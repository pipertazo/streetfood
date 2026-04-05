import { StoreStatusBadge } from "@/components/shared/store-status-badge";
import { getStorePresentation } from "@/features/store-status/store-status";

export function StoreHoursPanel() {
  const store = getStorePresentation();

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-sand/10 bg-ember p-6 shadow-card sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Horarios</p>
            <h2 className="font-display text-4xl uppercase text-cream">Siempre claro</h2>
            <p className="max-w-xl text-sm leading-6 text-smoke">
              Todos los días de 12:00 a 15:00 y de 20:00 a 00:00. Podés mirar el menú en
              cualquier momento; solo bloqueamos el envío final si el local está cerrado.
            </p>
          </div>
          <StoreStatusBadge label={store.label} status={store.status} />
        </div>
      </div>
    </section>
  );
}
