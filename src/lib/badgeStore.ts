import { useSyncExternalStore } from "react";

export type Screen = "idle" | "generating" | "ready" | "error";

type State = {
  photo: File | null;
  photoPreview: string | null;
  name: string;
  style: string;
  resultUrl: string | null;
  errorMsg: string;
  screen: Screen;
};

let state: State = {
  photo: null,
  photoPreview: null,
  name: "",
  style: "Classic Engraving",
  resultUrl: null,
  errorMsg: "",
  screen: "idle",
};

const listeners = new Set<() => void>();

function setState(patch: Partial<State>) {
  state = { ...state, ...patch };
  listeners.forEach((l) => l());
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export const badgeStore = {
  get: () => state,
  set: setState,
  reset: () =>
    setState({
      photo: null,
      photoPreview: null,
      name: "",
      resultUrl: null,
      errorMsg: "",
      screen: "idle",
    }),
};

export function useBadgeStore<T>(selector: (s: State) => T): T {
  return useSyncExternalStore(
    subscribe,
    () => selector(state),
    () => selector(state),
  );
}
