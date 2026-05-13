import { cn } from "@/lib/utils";

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={cn("font-heading text-xl tracking-wider flex items-center", className)}>
      <span className="text-foreground transition-colors">shelf</span>
      <span className="text-shelf-blue">one.</span>
    </div>
  );
};