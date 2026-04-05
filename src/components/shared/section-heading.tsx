import type { PropsWithChildren } from "react";

type SectionHeadingProps = PropsWithChildren<{
  eyebrow?: string;
  title: string;
  description?: string;
}>;

export function SectionHeading({
  eyebrow,
  title,
  description,
  children,
}: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">{eyebrow}</p>
      ) : null}
      <div className="space-y-2">
        <h2 className="font-display text-4xl uppercase tracking-[0.04em] text-cream sm:text-5xl">
          {title}
        </h2>
        {description ? <p className="max-w-2xl text-sm text-smoke sm:text-base">{description}</p> : null}
      </div>
      {children}
    </div>
  );
}
