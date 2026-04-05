import { cn } from "@/lib/utils/cn";

type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

export function ImagePlaceholder({ label, className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] border border-sand/10 bg-ember/90",
        className,
      )}
    >
      <div className="absolute inset-0 bg-street-grid bg-[length:16px_16px] opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(241,184,45,0.22),_transparent_50%)]" />
      <div className="relative flex h-full min-h-40 flex-col items-center justify-center gap-2 px-6 text-center">
        <span className="rounded-full border border-sand/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
          Placeholder
        </span>
        <p className="max-w-[18rem] text-sm font-semibold text-cream/90">{label}</p>
      </div>
    </div>
  );
}
