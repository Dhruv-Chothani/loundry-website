export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand shadow-glow">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-brand-foreground" aria-hidden="true">
          <path d="M4 9c0-1.5 1-3 3-3h10c2 0 3 1.5 3 3v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="14" r="3.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M9 6c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-foreground">
        Fresh<span className="text-gradient-brand">Fold</span>
      </span>
    </div>
  );
}