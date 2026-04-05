import { cn } from "@/lib/utils/cn";

type TextFieldProps = {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function TextField({ label, error, className, ...props }: TextFieldProps) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-semibold text-cream">{label}</span>
      <input
        className={cn(
          "min-h-12 w-full rounded-2xl border border-sand/15 bg-coal px-4 text-base text-cream outline-none transition placeholder:text-smoke/65 focus:border-gold",
          className,
        )}
        {...props}
      />
      {error ? <span className="text-sm text-[#f8a887]">{error}</span> : null}
    </label>
  );
}
