import { Link } from "@tanstack/react-router";

export function BrandHeader() {
  return (
    <header className="relative z-10 px-6 sm:px-10 py-5 sm:py-6">
      <Link
        to="/"
        className="font-sans text-sm font-medium tracking-[0.2em] text-foreground/90"
      >
        BADGEBORN<sup className="text-[8px] ml-0.5 align-super">™</sup>
      </Link>
    </header>
  );
}
