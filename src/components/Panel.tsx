import type { ReactNode } from "react";

interface PanelProps {
  children: ReactNode;
  label?: string;
  className?: string;
  bodyClassName?: string;
}

const Panel = ({ children, label, className = "", bodyClassName = "" }: PanelProps) => (
  <div
    className={`relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm ${className}`}
  >
    <span className="absolute -top-px -left-px h-4 w-4 rounded-tl-2xl border-t-2 border-l-2 border-brand-cyan/70" />
    <span className="absolute -top-px -right-px h-4 w-4 rounded-tr-2xl border-t-2 border-r-2 border-brand-cyan/70" />
    <span className="absolute -bottom-px -left-px h-4 w-4 rounded-bl-2xl border-b-2 border-l-2 border-brand-amber/70" />
    <span className="absolute -bottom-px -right-px h-4 w-4 rounded-br-2xl border-b-2 border-r-2 border-brand-amber/70" />

    {label && (
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-brand-amber/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand-cyan/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="ml-2 font-mono text-[11px] uppercase tracking-widest text-white/40">
          {label}
        </span>
      </div>
    )}

    <div className={bodyClassName || "p-5 md:p-6"}>{children}</div>
  </div>
);

export default Panel;
