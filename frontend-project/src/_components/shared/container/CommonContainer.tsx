import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CommonContainerProps {
  children: ReactNode;
  className?: string;
}

export default function CommonContainer({
  children,
  className,
}: CommonContainerProps) {
  return (
    <section
      className={twMerge(
        "mx-auto lg:p-[120px] md:p-10 py-8 px-4 ",
        "w-[390px] md:w-5xl lg:w-[1360px]",
        className
      )}
    >
      {children}
    </section>
  );
}
