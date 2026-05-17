import { useEffect, useMemo, useState } from "react";
import engravingIn from "@/assets/engraving_input.jpeg";
import engravingOut from "@/assets/engraving_output.png";
import geometricIn from "@/assets/geometric_input.jpeg";
import geometricOut from "@/assets/geometric_output.png";
import vectorIn from "@/assets/vector_input.jpeg";
import vectorOut from "@/assets/vector_output.png";
import neonNoirOut from "@/assets/neon_noir_output.png";
import porcelainOut from "@/assets/3d_porcelain_output.png";
import heritageHueOut from "@/assets/heritage_hue_output.png";

type Style = {
  value: string;
  name: string;
  description: string;
  input?: string;
  output: string;
};

export const STYLES: readonly Style[] = [
  {
    value: "classic_engraving",
    name: "Classic Engraving",
    description: "Hand-etched detail with timeless monochrome shading.",
    input: engravingIn,
    output: engravingOut,
  },
  {
    value: "geometric_shadow",
    name: "Geometric Shadow",
    description: "Bold geometric planes with deep contrast and modern edge.",
    input: geometricIn,
    output: geometricOut,
  },
  {
    value: "clean_vector",
    name: "Clean Vector",
    description: "Crisp vector lines, flat fills — versatile for any platform.",
    input: vectorIn,
    output: vectorOut,
  },
  {
    value: "neon_noir",
    name: "Neon Noir",
    description: "Electric magenta and indigo on jet black — bold, after-hours energy.",
    input: engravingIn,
    output: neonNoirOut,
  },
  {
    value: "porcelain_3d",
    name: "Porcelain 3D",
    description: "Glossy sculpted 3D portrait with playful, premium polish.",
    input: geometricIn,
    output: porcelainOut,
  },
  {
    value: "heritage_hue",
    name: "Heritage Hue",
    description: "Crosshatched heritage portrait in classic navy and ivory.",
    input: vectorIn,
    output: heritageHueOut,
  },
] as const;

export function StyleCarousel({ compact = false }: { compact?: boolean }) {
  const slides = useMemo(() => STYLES.filter((s): s is Style & { input: string } => !!s.input), []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 3150);
    return () => clearInterval(id);
  }, [slides.length]);

  const slide = slides[index];

  return (
    <div
      className={`iridescent-border w-full ${compact ? "max-w-sm p-2.5" : "max-w-xl p-3 sm:p-5"} shadow-[0_30px_80px_-30px_rgba(120,80,255,0.35)]`}
    >
      <div className="relative overflow-hidden rounded-md">
        <div className={`grid grid-cols-[1fr_auto_1fr] items-center ${compact ? "gap-2 px-1.5 py-2" : "gap-3 sm:gap-5 px-2 py-3"}`}>
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
          <div aria-hidden className="text-iridescent text-2xl sm:text-3xl font-light leading-none">→</div>
          <div className="relative aspect-square w-full overflow-hidden rounded-md bg-foreground">
            <img
              key={`out-${index}`}
              src={slide.output}
              alt={`${slide.name} mascot output`}
              className="h-full w-full object-contain animate-in fade-in duration-500"
            />
          </div>
        </div>

        <div className={`flex items-center justify-between ${compact ? "px-2 pb-1.5 pt-0.5" : "px-3 pb-2 pt-1"}`}>
          <div className="flex items-center gap-1.5">
            {slides.map((_, i) => (
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
          <span className={`font-sans uppercase tracking-[0.2em] text-foreground ${compact ? "text-[9px]" : "text-[10px] sm:text-xs"}`}>
            {slide.name}
          </span>
        </div>
      </div>
    </div>
  );
}
