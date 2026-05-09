// Public backend URL for the badge generation API.
// Safe to commit: VITE_* env vars are inlined into the client bundle and visible
// to anyone inspecting the site, so this is no more exposed than an env var would be.
// Change this value when your backend URL changes.
export const BACKEND_URL = "http://localhost:8000";
