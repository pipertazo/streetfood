import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils/cn";

type SecondaryButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export function SecondaryButton({ children, className, ...props }: SecondaryButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-full border border-sand/25 bg-transparent px-5 py-3 text-sm font-bold text-cream transition hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
