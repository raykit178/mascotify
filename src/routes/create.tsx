import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useRef } from "react";
import { STYLES } from "@/components/StyleCarousel";
import { BrandHeader } from "@/components/BrandHeader";
import { BackgroundFx } from "@/components/BackgroundFx";
import { badgeStore, useBadgeStore } from "@/lib/badgeStore";

export const Route = createFileRoute("/create")({
  component: CreatePage,
});

const NAME_MAX = 20;
const FETCH_TIMEOUT_MS = 60_000;
const BACKEND_URL = (import.meta.env.VITE_BACKEND_URL as string | undefined) ?? "";

function CreatePage() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { photo, photoPreview, name, style, screen, errorMsg } = useBadgeStore((s) => s);

  const canSubmit = !!photo && name.trim().length > 0;

  function onPhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    badgeStore.set({ photo: f, photoPreview: URL.createObjectURL(f) });
  }

  async function generate() {
    if (!photo) return;
    badgeStore.set({ screen: "generating", errorMsg: "" });
    try {
      const fd = new FormData();
      fd.append("photo", photo);
      fd.append("style", style);
      fd.append("name", name.trim());
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), FETCH_TIMEOUT_MS);
      const res = await fetch(`${BACKEND_URL}/generate`, {
        method: "POST",
        body: fd,
        signal: ctrl.signal,
      });
      clearTimeout(t);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = await res.blob();
      badgeStore.set({ resultUrl: URL.createObjectURL(blob), screen: "ready" });
      navigate({ to: "/ready" });
    } catch (err) {
      console.error(err);
      badgeStore.set({
        screen: "error",
        errorMsg: "We couldn't process this photo. You'll receive a full refund automatically.",
      });
    }
  }

  async function handleCheckout() {
    if (!canSubmit) return;
    // Production: call BACKEND_URL/checkout to get Stripe session, redirect, then generate on return.
    await generate();
  }

  if (screen === "generating") return <Generating />;
  if (screen === "error")
    return (
      <ErrorView
        message={errorMsg}
        onRetry={() => badgeStore.set({ screen: "idle", errorMsg: "" })}
      />
    );

  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundFx />
      <BrandHeader />

      <main className="relative z-10 mx-auto max-w-5xl px-6 pb-20 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Step 1 of 2
            </span>
          </div>
          <h1 className="font-display mt-5 text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
            Build your <em className="text-iridescent not-italic"><span className="italic">badge.</span></em>
          </h1>
          <p className="mt-3 font-sans text-sm text-muted-foreground">
            Upload a photo, pick a style, and add your text.
          </p>
        </div>

        {/* Upload */}
        <section className="mx-auto mt-10 max-w-2xl">
          <SectionLabel n="01" title="Upload your photo" />
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={onPhotoChange}
            className="hidden"
            id="photo-input"
          />
          <label
            htmlFor="photo-input"
            className="mt-3 flex cursor-pointer items-center justify-between gap-4 rounded-md border border-border bg-card/40 px-4 py-3 transition hover:border-foreground/30"
          >
            <span className="flex items-center gap-3">
              {photoPreview ? (
                <img src={photoPreview} alt="" className="h-10 w-10 rounded-sm object-cover" />
              ) : (
                <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-muted text-foreground/60">+</span>
              )}
              <span className="font-sans text-sm text-foreground/90">
                {photo ? photo.name : "Choose a clear, well-lit photo"}
              </span>
            </span>
            <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
              {photo ? "Change" : "Browse"}
            </span>
          </label>
          <p className="mt-2 font-sans text-xs text-muted-foreground">
            Best results: clear face, good lighting. Avoid sunglasses or heavy shadows.
          </p>
        </section>

        {/* Styles */}
        <section className="mx-auto mt-10 max-w-5xl">
          <SectionLabel n="02" title="Pick a style" />
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {STYLES.map((s) => {
              const selected = style === s.name;
              return (
                <button
                  key={s.name}
                  onClick={() => badgeStore.set({ style: s.name })}
                  className={`group text-left rounded-lg border p-3 transition ${
                    selected
                      ? "border-transparent iridescent-border bg-card/50"
                      : "border-border bg-card/30 hover:border-foreground/30"
                  }`}
                >
                  <div className="aspect-square w-full overflow-hidden rounded-md bg-foreground">
                    <img src={s.output} alt={s.name} className="h-full w-full object-contain" />
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <h3 className="font-display text-lg">{s.name}</h3>
                    <span
                      className={`h-3.5 w-3.5 rounded-full border ${
                        selected
                          ? "border-foreground bg-gradient-to-br from-[var(--iridescent-from)] to-[var(--iridescent-to)]"
                          : "border-foreground/30"
                      }`}
                    />
                  </div>
                  <p className="mt-1 font-sans text-xs leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        {/* Logo text */}
        <section className="mx-auto mt-10 max-w-2xl">
          <SectionLabel n="03" title="Logo text" />
          <div className="relative mt-3">
            <input
              type="text"
              value={name}
              maxLength={NAME_MAX}
              onChange={(e) => badgeStore.set({ name: e.target.value })}
              placeholder="BITE SCIENCE"
              className="w-full rounded-md border border-border bg-card/40 px-4 py-3 pr-14 font-sans text-sm text-foreground placeholder:text-foreground/30 focus:border-foreground/40 focus:outline-none"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-sans text-[10px] text-muted-foreground">
              {name.length}/{NAME_MAX}
            </span>
          </div>
          <p className="mt-2 font-sans text-xs text-muted-foreground">
            Your name, brand, or handle. Keep it short for the cleanest result.
          </p>
        </section>

        {/* CTA */}
        <section className="mx-auto mt-12 max-w-2xl text-center">
          <button
            onClick={handleCheckout}
            disabled={!canSubmit}
            className="iridescent-border w-full sm:w-auto px-10 py-4 font-sans text-sm font-medium tracking-wide text-foreground transition disabled:opacity-40 disabled:cursor-not-allowed hover:[&:not(:disabled)]:bg-foreground/[0.03]"
          >
            Get my badge — $9
          </button>
          <p className="mt-3 font-sans text-xs text-muted-foreground">
            Secure checkout via Stripe. Full refund if generation fails.
          </p>
        </section>
      </main>
    </div>
  );
}

function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-display text-iridescent text-xl">{n}</span>
      <h2 className="font-sans text-xs uppercase tracking-[0.2em] text-foreground/80">
        {title}
      </h2>
    </div>
  );
}

function Generating() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundFx />
      <BrandHeader />
      <div className="relative z-10 flex min-h-[calc(100vh-88px)] items-center justify-center px-6 text-center">
        <div>
          <div className="mx-auto mb-8 h-12 w-12 rounded-full border-2 border-foreground/15 border-t-[oklch(0.78_0.14_210)] animate-spin-slow" />
          <h2 className="font-display text-3xl sm:text-4xl font-light">
            Creating your <em className="text-iridescent not-italic"><span className="italic">logo mark…</span></em>
          </h2>
          <p className="mt-3 font-sans text-sm text-muted-foreground">
            Usually takes about 30 seconds.
          </p>
        </div>
      </div>
    </div>
  );
}

function ErrorView({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundFx />
      <BrandHeader />
      <div className="relative z-10 flex min-h-[calc(100vh-88px)] items-center justify-center px-6 text-center">
        <div className="max-w-md">
          <h2 className="font-display text-3xl font-light">Something went wrong</h2>
          <p className="mt-3 font-sans text-sm text-muted-foreground">{message}</p>
          <button
            onClick={onRetry}
            className="iridescent-border mt-6 inline-block px-6 py-3 font-sans text-sm text-foreground hover:bg-foreground/[0.03]"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
