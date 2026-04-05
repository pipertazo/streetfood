import { cn } from "@/lib/utils/cn";

type TextareaFieldProps = {
  label: string;
  error?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextareaField({ label, error, className, ...props }: TextareaFieldProps) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-semibold text-cream">{label}</span>
      <textarea
        className={cn(
          "min-h-28 w-full rounded-2xl border border-sand/15 bg-coal px-4 py-3 text-base text-cream outline-none transition placeholder:text-smoke/65 focus:border-gold",
          className,
        )}
        {...props}
      />
      {error ? <span className="text-sm text-[#f8a887]">{error}</span> : null}
    </label>
  );
}
