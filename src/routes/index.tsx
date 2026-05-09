import { createFileRoute, Link } from "@tanstack/react-router";
import { StyleCarousel } from "@/components/StyleCarousel";
import { BrandHeader } from "@/components/BrandHeader";
import { BackgroundFx } from "@/components/BackgroundFx";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Eyebrow() {
  return (
    <div className="flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        AI-generated mascot logos
      </span>
    </div>
  );
}

function Headline() {
  return (
    <h1 className="font-display text-4xl sm:text-5xl lg:text-[64px] font-light leading-[1.05] tracking-tight">
      Get your own
      <br />
      mascot logo{" "}
      <em className="text-iridescent not-italic">
        <span className="italic">in seconds.</span>
      </em>
    </h1>
  );
}

function CTA() {
  return (
    <Link
      to="/create"
      className="iridescent-border inline-block px-8 py-3.5 font-sans text-sm font-medium tracking-wide text-foreground hover:bg-foreground/[0.03]"
    >
      Create your badge — $9
    </Link>
  );
}

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundFx />
      <BrandHeader />

      {/* Mobile layout: ordered to fit above the fold */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        {/* MOBILE */}
        <div className="flex flex-col items-center gap-5 text-center lg:hidden">
          <div className="mt-1"><Eyebrow /></div>
          <div className="w-full flex justify-center"><StyleCarousel compact /></div>
          <div className="max-w-sm"><Headline /></div>
          <div className="mt-1"><CTA /></div>

          <div className="mt-10 max-w-md space-y-6 text-left">
            <p className="font-sans text-sm text-muted-foreground">
              Upload one photo. Pick a style. Get a polished, high-resolution PNG
              you can use anywhere — Twitch, Twitter, Discord.
            </p>
            <div className="grid grid-cols-3 gap-3 text-center">
              <Stat n="3" label="Styles" />
              <Stat n="~30s" label="Delivery" />
              <Stat n="$9" label="One-time" />
            </div>
            <p className="font-sans text-[11px] text-muted-foreground">
              Secure checkout via Dodo Payments. Full refund if generation fails.
            </p>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden min-h-[calc(100vh-88px)] grid-cols-2 items-center gap-16 lg:grid">
          <section className="max-w-xl">
            <Eyebrow />
            <div className="mt-6"><Headline /></div>
            <p className="mt-6 max-w-md font-sans text-sm text-muted-foreground">
              Upload one photo. Pick a style. Get a polished PNG you can use
              anywhere — Twitch, Twitter, Discord.
            </p>
            <div className="mt-8"><CTA /></div>
            <p className="mt-3 font-sans text-xs text-muted-foreground">
              Secure checkout via Dodo Payments. Full refund if generation fails.
            </p>
          </section>
          <section className="flex justify-end">
            <div className="relative w-full max-w-xl">
              <div className="dot-pattern absolute -inset-10 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
              <StyleCarousel />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-md border border-border bg-card/30 px-2 py-3">
      <div className="font-display text-2xl text-foreground">{n}</div>
      <div className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
