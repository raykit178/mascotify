import { useRef, useState } from "react";
import { StyleCarousel, STYLES } from "./StyleCarousel";
import { Stepper } from "./Stepper";

type Screen = "create" | "generating" | "ready" | "error";

const BACKEND_URL = (import.meta.env.VITE_BACKEND_URL as string | undefined) ?? "";
const NAME_MAX = 20;
const FETCH_TIMEOUT_MS = 60_000;

export function BadgeApp() {
  const [screen, setScreen] = useState<Screen>("create");
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [style, setStyle] = useState<string>(STYLES[0].name);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const canSubmit = photo && name.trim().length > 0;

  function onPhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    setPhoto(f);
    setPhotoPreview(URL.createObjectURL(f));
  }

  async function generate() {
    if (!photo) return;
    setScreen("generating");
    setErrorMsg("");

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
      setResultUrl(URL.createObjectURL(blob));
      setScreen("ready");
    } catch (err) {
      console.error(err);
      setErrorMsg(
        "We couldn't process this photo. You'll receive a full refund automatically.",
      );
      setScreen("error");
    }
  }

  async function handleCheckout() {
    if (!canSubmit) return;
    // In production: create a Stripe Checkout session via backend, redirect, then
    // generate on return. For MVP we proceed straight to generation after a
    // simulated success hand-off (replace with real Stripe Checkout integration).
    try {
      if (BACKEND_URL) {
        // Optional: hit a checkout endpoint that returns { url } to redirect.
        // const r = await fetch(`${BACKEND_URL}/checkout`, { method: "POST" });
        // const { url } = await r.json();
        // window.location.href = url; return;
      }
      await generate();
    } catch (e) {
      console.error(e);
      setErrorMsg("Payment could not be initiated.");
      setScreen("error");
    }
  }

  if (screen === "generating") return <GeneratingScreen />;
  if (screen === "ready" && resultUrl)
    return <ReadyScreen url={resultUrl} name={name} onRestart={reset} />;
  if (screen === "error")
    return <ErrorScreen message={errorMsg} onRestart={reset} />;

  function reset() {
    setScreen("create");
    setResultUrl(null);
    setErrorMsg("");
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background blobs + grain */}
      <div className="grain absolute inset-0">
        <div className="blob blob-purple h-[520px] w-[520px] -left-40 -top-40" />
        <div className="blob blob-cyan h-[520px] w-[520px] -right-40 -bottom-40" />
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 sm:px-10 py-6">
        <div className="font-sans text-sm font-medium tracking-[0.2em] text-foreground/90">
          BADGEBORN<sup className="text-[8px] ml-0.5 align-super">™</sup>
        </div>
      </header>

      <main className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 lg:grid-cols-2 lg:gap-16 lg:px-10">
        {/* Left column */}
        <section className="max-w-xl">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              AI-generated mascot logos
            </span>
          </div>

          <h1 className="font-display mt-6 text-5xl sm:text-6xl lg:text-[64px] font-light leading-[1.05] tracking-tight">
            Get your own
            <br />
            mascot logo{" "}
            <em className="text-iridescent not-italic">
              <span className="italic">in seconds.</span>
            </em>
          </h1>

          <div className="mt-8">
            <Stepper />
          </div>

          {/* Photo upload */}
          <div className="mt-8">
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
              className="flex cursor-pointer items-center justify-between gap-4 rounded-md border border-border bg-card/40 px-4 py-3 transition hover:border-foreground/30"
            >
              <span className="flex items-center gap-3">
                {photoPreview ? (
                  <img
                    src={photoPreview}
                    alt="Selected"
                    className="h-9 w-9 rounded-sm object-cover"
                  />
                ) : (
                  <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-muted text-foreground/60">
                    +
                  </span>
                )}
                <span className="font-sans text-sm text-foreground/90">
                  {photo ? photo.name : "Upload your photo"}
                </span>
              </span>
              <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                {photo ? "Change" : "Browse"}
              </span>
            </label>
            <p className="mt-2 font-sans text-xs text-muted-foreground">
              Best results: clear face, good lighting. Avoid sunglasses or heavy
              shadows.
            </p>
          </div>

          {/* Name + Style */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                Your name or logo text
              </label>
              <div className="relative mt-1.5">
                <input
                  type="text"
                  value={name}
                  maxLength={NAME_MAX}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="BITE SCIENCE"
                  className="w-full rounded-md border border-border bg-card/40 px-3 py-2.5 pr-12 font-sans text-sm text-foreground placeholder:text-foreground/30 focus:border-foreground/40 focus:outline-none"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 font-sans text-[10px] text-muted-foreground">
                  {name.length}/{NAME_MAX}
                </span>
              </div>
            </div>
            <div>
              <label className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                Style
              </label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="mt-1.5 w-full appearance-none rounded-md border border-border bg-card/40 px-3 py-2.5 font-sans text-sm text-foreground focus:border-foreground/40 focus:outline-none"
              >
                {STYLES.map((s) => (
                  <option key={s.name} value={s.name} className="bg-background">
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <button
              onClick={handleCheckout}
              disabled={!canSubmit}
              className="iridescent-border group relative w-full sm:w-auto px-8 py-3.5 font-sans text-sm font-medium tracking-wide text-foreground transition disabled:opacity-40 disabled:cursor-not-allowed hover:[&:not(:disabled)]:bg-foreground/[0.03]"
            >
              <span className="relative z-10">Get My Badge — $9</span>
            </button>
            <p className="mt-3 font-sans text-xs text-muted-foreground">
              Secure checkout via Stripe. Full refund if generation fails.
            </p>
          </div>
        </section>

        {/* Right column */}
        <section className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-xl">
            <div className="dot-pattern absolute -inset-10 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
            <StyleCarousel />
          </div>
        </section>
      </main>
    </div>
  );
}

function GeneratingScreen() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">
      <div className="grain absolute inset-0">
        <div className="blob blob-purple h-[420px] w-[420px] -left-32 top-1/3" />
        <div className="blob blob-cyan h-[420px] w-[420px] -right-32 bottom-1/4" />
      </div>
      <div className="relative z-10">
        <div className="mx-auto mb-8 h-12 w-12 rounded-full border-2 border-foreground/15 border-t-[oklch(0.78_0.14_210)] animate-spin-slow" />
        <h2 className="font-display text-3xl sm:text-4xl font-light">
          Creating your <em className="text-iridescent not-italic"><span className="italic">logo mark…</span></em>
        </h2>
        <p className="mt-3 font-sans text-sm text-muted-foreground">
          Usually takes about 30 seconds.
        </p>
      </div>
    </div>
  );
}

function ReadyScreen({
  url,
  name,
  onRestart,
}: {
  url: string;
  name: string;
  onRestart: () => void;
}) {
  const filename = `${name.toLowerCase().replace(/\s+/g, "-") || "badge"}-badgeborn.png`;
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16 text-center">
      <div className="grain absolute inset-0">
        <div className="blob blob-purple h-[420px] w-[420px] -left-32 top-1/4" />
        <div className="blob blob-cyan h-[420px] w-[420px] -right-32 bottom-1/4" />
      </div>
      <div className="relative z-10 w-full max-w-md">
        <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Your badge is ready
        </p>
        <h2 className="font-display mt-3 text-3xl sm:text-4xl font-light">
          Looking <em className="text-iridescent not-italic"><span className="italic">sharp.</span></em>
        </h2>

        <div className="iridescent-border mt-8 p-4">
          <div className="rounded-md bg-foreground p-6">
            <img src={url} alt="Your generated mascot badge" className="mx-auto h-auto w-full max-w-sm" />
          </div>
        </div>

        <a
          href={url}
          download={filename}
          className="iridescent-border mt-8 inline-block px-8 py-3.5 font-sans text-sm font-medium tracking-wide text-foreground hover:bg-foreground/[0.03]"
        >
          Download PNG
        </a>
        <p className="mt-3 font-sans text-xs text-muted-foreground">
          Save it and use it anywhere — Twitch, Twitter, Discord.
        </p>
        <button
          onClick={onRestart}
          className="mt-6 font-sans text-xs uppercase tracking-wider text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          Make another
        </button>
      </div>
    </div>
  );
}

function ErrorScreen({ message, onRestart }: { message: string; onRestart: () => void }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">
      <div className="grain absolute inset-0" />
      <div className="relative z-10 max-w-md">
        <h2 className="font-display text-3xl font-light">Something went wrong</h2>
        <p className="mt-3 font-sans text-sm text-muted-foreground">{message}</p>
        <button
          onClick={onRestart}
          className="iridescent-border mt-6 inline-block px-6 py-3 font-sans text-sm text-foreground hover:bg-foreground/[0.03]"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
