import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { BrandHeader } from "@/components/BrandHeader";
import { BackgroundFx } from "@/components/BackgroundFx";
import { badgeStore, useBadgeStore } from "@/lib/badgeStore";

export const Route = createFileRoute("/ready")({
  component: ReadyPage,
});

function ReadyPage() {
  const navigate = useNavigate();
  const { resultUrl, name } = useBadgeStore((s) => s);


  useEffect(() => {
    if (!resultUrl) navigate({ to: "/" });
  }, [resultUrl, navigate]);

  if (!resultUrl) return null;

  const filename = `${name.toLowerCase().replace(/\s+/g, "-") || "badge"}-badgeborn.png`;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundFx />
      <BrandHeader />

      <main className="relative z-10 flex min-h-[calc(100vh-88px)] flex-col items-center justify-center px-6 pb-16 text-center">
        <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Your badge is ready
        </p>
        <h2 className="font-display mt-3 text-3xl sm:text-4xl font-light">
          Looking <em className="text-iridescent not-italic"><span className="italic">sharp.</span></em>
        </h2>

        <div className="iridescent-border mt-8 p-4">
          <div className="rounded-md bg-foreground p-6">
            <img
              src={displayUrl}
              alt="Your generated mascot badge"
              className="mx-auto h-auto w-full max-w-sm"
            />
          </div>
        </div>

        <a
          href={displayUrl}
          download={filename}
          className="iridescent-border mt-8 inline-block px-8 py-3.5 font-sans text-sm font-medium tracking-wide text-foreground hover:bg-foreground/[0.03]"
        >
          Download PNG
        </a>
        <p className="mt-6 max-w-md font-sans text-xs leading-relaxed text-muted-foreground">
          Issues or feedback? Email us at{" "}
          <a
            href="mailto:badgeborn@gmail.com"
            className="text-foreground underline-offset-4 hover:underline"
          >
            badgeborn@gmail.com
          </a>{" "}
          and attach your source photo and the output above.
        </p>
        <Link
          to="/"
          onClick={() => badgeStore.reset()}
          className="mt-6 font-sans text-xs uppercase tracking-wider text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          Make another
        </Link>
      </main>
    </div>
  );
}
