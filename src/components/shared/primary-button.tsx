import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils/cn";

type PrimaryButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export function PrimaryButton({ children, className, ...props }: PrimaryButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-coal transition hover:brightness-105 disabled:cursor-not-allowed disabled:bg-[#6f6551] disabled:text-sand/60",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
