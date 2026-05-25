import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-border/50 px-6 sm:px-10 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
        <p className="font-sans text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} Badgeborn
        </p>
        <Link
          to="/privacy"
          className="font-sans text-[11px] text-muted-foreground hover:text-foreground transition-colors"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
