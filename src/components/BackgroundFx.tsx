export function BackgroundFx() {
  return (
    <div className="grain pointer-events-none absolute inset-0 overflow-hidden">
      <div className="blob blob-purple h-[520px] w-[520px] -left-40 -top-40" />
      <div className="blob blob-cyan h-[520px] w-[520px] -right-40 -bottom-40" />
    </div>
  );
}
