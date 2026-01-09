import { cn } from "@/lib/utils";

type SolutionVisualProps = {
  variant?: "dashboard" | "mobile";
  accent?: "blue" | "teal" | "violet";
  frameClassName?: string;
  className?: string;
};

const accentMap: Record<NonNullable<SolutionVisualProps["accent"]>, string> = {
  blue: "from-primary/15 via-transparent to-primary/10",
  teal: "from-emerald-400/10 via-transparent to-cyan-400/10",
  violet: "from-violet-400/10 via-transparent to-fuchsia-400/10",
};

const SolutionVisual = ({ variant = "dashboard", accent = "blue", frameClassName, className }: SolutionVisualProps) => {
  const frame = variant === "mobile" ? "h-44" : "h-56";

  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-secondary/30 overflow-hidden",
        "shadow-card",
        "transition-all duration-500 group-hover:shadow-card-hover",
        className,
      )}
    >
      <div className={cn("w-full", frame, frameClassName, "bg-gradient-to-br", accentMap[accent])} />
      <div className="p-4">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-primary/60" />
          <div className="h-2.5 w-16 rounded-full bg-border" />
          <div className="h-2.5 w-10 rounded-full bg-border/70" />
        </div>
        <div className="mt-4 grid grid-cols-12 gap-3">
          <div className="col-span-7 space-y-2">
            <div className="h-2.5 rounded bg-border/80" />
            <div className="h-2.5 rounded bg-border/60" />
            <div className="h-2.5 w-4/5 rounded bg-border/50" />
          </div>
          <div className="col-span-5 space-y-2">
            <div className="h-10 rounded bg-border/40" />
            <div className="h-10 rounded bg-border/30" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionVisual;
