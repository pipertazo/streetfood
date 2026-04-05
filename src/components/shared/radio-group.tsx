type RadioOption = {
  label: string;
  value: string;
  description?: string;
};

type RadioGroupProps = {
  label: string;
  name: string;
  value?: string;
  options: RadioOption[];
  error?: string;
  onChange: (value: string) => void;
};

export function RadioGroup({ label, name, value, options, error, onChange }: RadioGroupProps) {
  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-semibold text-cream">{label}</legend>
      <div className="grid gap-3">
        {options.map((option) => {
          const checked = value === option.value;
          return (
            <label
              key={option.value}
              className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 transition ${
                checked
                  ? "border-gold bg-[#2b2418]"
                  : "border-sand/15 bg-ember hover:border-sand/35"
              }`}
            >
              <input
                checked={checked}
                className="mt-1 h-4 w-4 accent-gold"
                name={name}
                type="radio"
                value={option.value}
                onChange={() => onChange(option.value)}
              />
              <span className="space-y-1">
                <span className="block text-sm font-bold text-cream">{option.label}</span>
                {option.description ? (
                  <span className="block text-sm text-smoke">{option.description}</span>
                ) : null}
              </span>
            </label>
          );
        })}
      </div>
      {error ? <span className="text-sm text-[#f8a887]">{error}</span> : null}
    </fieldset>
  );
}
