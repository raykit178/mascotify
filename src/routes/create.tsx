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
import { BACKEND_URL } from "@/lib/config";

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
      const paymentId = new URLSearchParams(window.location.search).get("payment_id") ?? "";
      const fd = new FormData();
      fd.append("photo", photo);
      fd.append("style", style);
      fd.append("name", name.trim());
      fd.append("payment_id", paymentId);
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
    if (!canSubmit || !photo) return;
    try {
      const photoDataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(photo);
      });
      sessionStorage.setItem(
        "badgeOrder",
        JSON.stringify({
          photoDataUrl,
          photoName: photo.name,
          photoType: photo.type,
          style,
          name: name.trim(),
        }),
      );
      const res = await fetch(`${BACKEND_URL}/create-checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), style }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as { url: string };
      window.location.href = data.url;
    } catch (err) {
      console.error(err);
      badgeStore.set({
        screen: "error",
        errorMsg: "We couldn't start checkout. Please try again.",
      });
    }
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
      <BrandHeader
        right={
          <h1 className="font-display text-2xl sm:text-3xl font-light leading-none tracking-tight">
            Create your{" "}
            <em className="text-iridescent not-italic">
              <span className="italic">badge.</span>
            </em>
          </h1>
        }
      />

      <main className="relative z-10 mx-auto max-w-3xl px-6 pb-40 sm:pb-10 lg:px-10">
        {/* Upload */}
        <section className="mt-2 sm:mt-4">
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
            className="group mt-3 flex min-h-[120px] cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dotted border-foreground/30 bg-card/40 px-6 py-5 text-center transition hover:border-2 hover:border-dotted hover:border-foreground/60 hover:bg-card/60"
          >
            {photoPreview ? (
              <>
                <img src={photoPreview} alt="" className="h-20 w-20 rounded-md object-cover" />
                <span className="font-sans text-xs text-foreground/90">{photo?.name}</span>
                <span className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground">
                  Change photo
                </span>
              </>
            ) : (
              <>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--iridescent-from)] to-[var(--iridescent-to)] text-2xl font-light text-background shadow-lg transition group-hover:scale-105">
                  +
                </span>
                <span className="font-sans text-xs text-foreground/90">
                  Choose a clear, well-lit photo
                </span>
                <span className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground">
                  Browse files
                </span>
              </>
            )}
          </label>
        </section>

        {/* Styles */}
        <section className="mt-5">
          <SectionLabel n="02" title="Pick a style" />
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {STYLES.map((s) => {
              const selected = style === s.name;
              return (
                <button
                  key={s.name}
                  onClick={() => badgeStore.set({ style: s.name })}
                  className={`group relative text-left rounded-lg border p-3 transition ${
                    selected
                      ? "border-transparent bg-card/80 ring-2 ring-[var(--iridescent-from)] shadow-[0_0_0_1px_var(--iridescent-to),0_18px_50px_-15px_rgba(120,80,255,0.6)]"
                      : "border-dotted border-foreground/30 bg-card/30 hover:border-2 hover:border-dotted hover:border-foreground/60 hover:bg-card/50"
                  }`}
                >
                  <div className="flex items-start gap-3 sm:flex-col sm:gap-2">
                    <div className="shrink-0 aspect-square w-20 sm:w-full overflow-hidden rounded-md bg-foreground">
                      <img src={s.output} alt={s.name} className="h-full w-full object-contain" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display text-lg font-semibold leading-tight text-foreground">
                          {s.name}
                        </h3>
                        <span
                          className={`shrink-0 mt-1 h-3.5 w-3.5 rounded-full border ${
                            selected
                              ? "border-foreground bg-gradient-to-br from-[var(--iridescent-from)] to-[var(--iridescent-to)]"
                              : "border-foreground/40"
                          }`}
                        />
                      </div>
                      <p className="mt-1 font-sans text-xs leading-snug text-foreground/85">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Logo text */}
        <section className="mt-5">
          <SectionLabel n="03" title="Logo text" />
          <div className="relative mt-3">
            <input
              type="text"
              value={name}
              maxLength={NAME_MAX}
              onChange={(e) => badgeStore.set({ name: e.target.value })}
              placeholder="BITE SCIENCE"
              className="w-full rounded-md border border-dotted border-foreground/40 bg-card/40 px-4 py-3 pr-14 font-sans text-sm text-foreground placeholder:text-foreground/50 transition hover:border-foreground/70 focus:border-2 focus:border-dotted focus:border-foreground/90 focus:bg-card/60 focus:outline-none"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-sans text-[10px] text-foreground/70">
              {name.length}/{NAME_MAX}
            </span>
          </div>
        </section>

        {/* CTA — desktop */}
        <section className="mt-5 hidden text-center sm:block">
          <button
            onClick={handleCheckout}
            disabled={!canSubmit}
            className={`iridescent-border w-full px-12 py-5 font-sans text-lg font-semibold tracking-wide text-foreground transition disabled:opacity-40 disabled:cursor-not-allowed ${
              canSubmit
                ? "bg-gradient-to-r from-[var(--iridescent-from)]/15 to-[var(--iridescent-to)]/15 shadow-[0_18px_60px_-15px_rgba(120,80,255,0.55)] hover:from-[var(--iridescent-from)]/25 hover:to-[var(--iridescent-to)]/25"
                : ""
            }`}
          >
            Get my badge — $9
          </button>
          <p className="mt-2 font-sans text-xs text-foreground/75">
            Secure checkout via Dodo Payments. Full refund if generation fails.
          </p>
        </section>

      </main>

      {/* CTA — mobile sticky */}
      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-foreground/10 bg-background/95 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md sm:hidden">
        <button
          onClick={handleCheckout}
          disabled={!canSubmit}
          className={`iridescent-border w-full px-6 py-5 font-sans text-base font-semibold tracking-wide text-foreground transition disabled:opacity-40 disabled:cursor-not-allowed ${
            canSubmit
              ? "bg-gradient-to-r from-[var(--iridescent-from)]/20 to-[var(--iridescent-to)]/20 shadow-[0_18px_60px_-15px_rgba(120,80,255,0.55)]"
              : ""
          }`}
        >
          Get my badge — $9
        </button>
        <p className="mt-2 text-center font-sans text-[10px] text-muted-foreground">
          Secure checkout via Dodo Payments · Full refund if generation fails
        </p>
      </div>
    </div>
  );
}

function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-sans text-foreground/90 text-base font-semibold leading-none">
        {n}
      </span>
      <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
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
