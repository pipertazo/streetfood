import { formatCurrency } from "@/lib/utils/currency";

type CartSummaryProps = {
  subtotal: number;
  delivery: number;
  total: number;
};

export function CartSummary({ subtotal, delivery, total }: CartSummaryProps) {
  return (
    <div className="rounded-[28px] border border-sand/10 bg-ember p-5">
      <div className="space-y-3 text-sm text-smoke">
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span className="font-bold text-cream">{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Delivery</span>
          <span className="font-bold text-cream">{formatCurrency(delivery)}</span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-sand/10 pt-4">
        <span className="text-sm font-bold uppercase tracking-[0.16em] text-gold">Total</span>
        <span className="text-2xl font-extrabold text-cream">{formatCurrency(total)}</span>
      </div>
    </div>
  );
}
