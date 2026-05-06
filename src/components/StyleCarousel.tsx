import { useEffect, useState } from "react";
import engravingIn from "@/assets/engraving_input.jpeg";
import engravingOut from "@/assets/engraving_output.png";
import geometricIn from "@/assets/geometric_input.jpeg";
import geometricOut from "@/assets/geometric_output.png";
import vectorIn from "@/assets/vector_input.jpeg";
import vectorOut from "@/assets/vector_output.png";

export const STYLES = [
  { name: "Classic Engraving", input: engravingIn, output: engravingOut },
  { name: "Geometric Shadows", input: geometricIn, output: geometricOut },
  { name: "Clean Vector", input: vectorIn, output: vectorOut },
] as const;

export function StyleCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % STYLES.length), 3500);
    return () => clearInterval(id);
  }, []);

  const slide = STYLES[index];

  return (
    <div className="iridescent-border w-full max-w-xl p-3 sm:p-5 shadow-[0_30px_80px_-30px_rgba(120,80,255,0.35)]">
      <div className="relative overflow-hidden rounded-md">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-5 px-2 py-3">
          {/* Before */}
          <div className="relative aspect-square w-full overflow-hidden rounded-md bg-muted">
            <img
              key={`in-${index}`}
              src={slide.input}
              alt={`${slide.name} source photo`}
              className="h-full w-full object-cover animate-in fade-in duration-500"
            />
            <span className="absolute bottom-1.5 left-1.5 rounded-sm bg-black/60 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-foreground/80">
              Your photo
            </span>
          </div>

          {/* Arrow */}
          <div
            aria-hidden
            className="text-iridescent text-2xl sm:text-3xl font-light leading-none"
          >
            →
          </div>

          {/* After */}
          <div className="relative aspect-square w-full overflow-hidden rounded-md bg-foreground">
            <img
              key={`out-${index}`}
              src={slide.output}
              alt={`${slide.name} mascot output`}
              className="h-full w-full object-contain animate-in fade-in duration-500"
            />
          </div>
        </div>

        {/* Footer: dots + style name */}
        <div className="flex items-center justify-between px-3 pb-2 pt-1">
          <div className="flex items-center gap-1.5">
            {STYLES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-gradient-to-r from-[var(--iridescent-from)] to-[var(--iridescent-to)]"
                    : "w-3 bg-foreground/20"
                }`}
              />
            ))}
          </div>
          <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.2em] text-foreground">
            {slide.name}
          </span>
        </div>
      </div>
    </div>
  );
}
