import type { ReactNode, MouseEventHandler } from "react";

interface CtaProps {
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler;
  variant?: "solid" | "ghost";
  download?: string;
  target?: string;
  type?: "button" | "submit";
  className?: string;
}

const base =
  "inline-flex items-center gap-2 rounded-md border px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition-all duration-200 hover:scale-[1.03] active:scale-95";

const variants = {
  solid:
    "border-brand-amber bg-brand-amber text-brand-abyss hover:bg-transparent hover:text-brand-amber",
  ghost:
    "border-white/15 bg-white/5 text-white hover:border-brand-cyan/60 hover:text-brand-cyan",
};

const Cta = ({
  children,
  href,
  onClick,
  variant = "ghost",
  download,
  target,
  type = "button",
  className = "",
}: CtaProps) => {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        download={download}
        target={target}
        rel={target === "_blank" ? "noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Cta;
