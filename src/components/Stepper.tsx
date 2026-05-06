const steps = ["Upload a photo", "Pick a style", "Get your badge"];

export function Stepper() {
  return (
    <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
      {steps.map((label, i) => (
        <div key={label} className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
              {i + 1}
            </span>
            <span className="font-sans text-xs text-foreground/80">{label}</span>
          </div>
          {i < steps.length - 1 && (
            <span
              aria-hidden
              className="block h-px w-6 sm:w-8 bg-gradient-to-r from-[var(--iridescent-from)] to-[var(--iridescent-to)]"
            />
          )}
        </div>
      ))}
    </div>
  );
}
