import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BrandHeader } from "@/components/BrandHeader";
import { BackgroundFx } from "@/components/BackgroundFx";

export const Route = createFileRoute("/generate")({
  component: GeneratePage,
});

import { BACKEND_URL } from "@/lib/config";
const ERROR_MSG =
  "We couldn't process this photo. You'll receive a full refund automatically.";

type Status = "loading" | "ready" | "error";

function dataUrlToFile(dataUrl: string, name: string, type: string): File {
  const [, base64] = dataUrl.split(",");
  const bin = atob(base64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new File([bytes], name, { type });
}

function GeneratePage() {
  const [status, setStatus] = useState<Status>("loading");
  const [resultUrl, setResultUrl] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    let createdUrl = "";

    async function run() {
      try {
        const paymentId =
          new URLSearchParams(window.location.search).get("payment_id") ?? "";
        const raw = sessionStorage.getItem("badgeOrder");
        if (!raw) throw new Error("Missing order data");
        const order = JSON.parse(raw) as {
          photoDataUrl: string;
          photoName: string;
          photoType: string;
          style: string;
          name: string;
        };
        const photo = dataUrlToFile(
          order.photoDataUrl,
          order.photoName || "photo",
          order.photoType || "image/jpeg",
        );

        const fd = new FormData();
        fd.append("photo", photo);
        fd.append("style", order.style);
        fd.append("name", order.name);
        fd.append("payment_id", paymentId);

        const res = await fetch(`${BACKEND_URL}/generate`, {
          method: "POST",
          body: fd,
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const blob = await res.blob();
        if (cancelled) return;
        createdUrl = URL.createObjectURL(blob);
        setResultUrl(createdUrl);
        setStatus("ready");
      } catch (err) {
        console.error(err);
        if (!cancelled) setStatus("error");
      }
    }

    run();
    return () => {
      cancelled = true;
      if (createdUrl) URL.revokeObjectURL(createdUrl);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundFx />
      <BrandHeader />
      <div className="relative z-10 flex min-h-[calc(100vh-88px)] items-center justify-center px-6 text-center">
        {status === "loading" && (
          <div>
            <div className="mx-auto mb-8 h-12 w-12 rounded-full border-2 border-foreground/15 border-t-[oklch(0.78_0.14_210)] animate-spin-slow" />
            <h2 className="font-display text-3xl sm:text-4xl font-light">
              Creating your{" "}
              <em className="text-iridescent not-italic">
                <span className="italic">logo mark…</span>
              </em>
            </h2>
            <p className="mt-3 font-sans text-sm text-muted-foreground">
              Usually takes about 30 seconds.
            </p>
          </div>
        )}

        {status === "ready" && (
          <div className="max-w-md">
            <h2 className="font-display text-3xl font-light">
              Your <em className="text-iridescent not-italic"><span className="italic">badge</span></em> is ready
            </h2>
            <img
              src={resultUrl}
              alt="Your generated badge"
              className="mx-auto mt-6 max-h-[60vh] rounded-lg shadow-[0_18px_60px_-15px_rgba(120,80,255,0.45)]"
            />
            <a
              href={resultUrl}
              download="badge.png"
              className="iridescent-border mt-8 inline-block px-8 py-4 font-sans text-base font-semibold text-foreground bg-gradient-to-r from-[var(--iridescent-from)]/15 to-[var(--iridescent-to)]/15 hover:from-[var(--iridescent-from)]/25 hover:to-[var(--iridescent-to)]/25 transition"
            >
              Download PNG
            </a>
          </div>
        )}

        {status === "error" && (
          <div className="max-w-md">
            <h2 className="font-display text-3xl font-light">Something went wrong</h2>
            <p className="mt-3 font-sans text-sm text-muted-foreground">{ERROR_MSG}</p>
          </div>
        )}
      </div>
    </div>
  );
}
