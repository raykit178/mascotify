import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function BrandHeader({ right }: { right?: ReactNode }) {
  return (
    <header className="relative z-10 flex items-start justify-between gap-4 px-6 sm:px-10 py-5 sm:py-6">
      <Link
        to="/"
        className="font-sans text-sm font-medium tracking-[0.2em] text-foreground"
      >
        BADGEBORN<sup className="text-[8px] ml-0.5 align-super">™</sup>
      </Link>
      {right ? <div className="flex-1 flex justify-end">{right}</div> : null}
    </header>
  );
}
