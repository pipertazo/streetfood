import { cn } from "@/lib/utils/cn";
import type { StoreStatus } from "@/types/business";

type StoreStatusBadgeProps = {
  status: StoreStatus;
  label: string;
};

export function StoreStatusBadge({ status, label }: StoreStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]",
        status === "open"
          ? "border-[#3b7b4c] bg-[#17331f] text-[#8be0a0]"
          : "border-[#6f3f2f] bg-[#2f1812] text-[#f2a482]",
      )}
    >
      {label}
    </span>
  );
}
