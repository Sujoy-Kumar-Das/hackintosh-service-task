import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function CommonHeader({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={twMerge(
        "text-2xl md:text-[32px] lg:text-5xl font-bold text-accent-text mb-8 md:mb-16 lg:mb-20 text-center ",
        className
      )}
    >
      {children}
    </h1>
  );
}
