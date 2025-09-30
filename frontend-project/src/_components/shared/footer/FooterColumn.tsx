import { ReactNode } from "react";

export default function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className=" flex flex-col gap-6 text-secondary-text text-sm whitespace-nowrap">
      <h4 className="font-semibold ">{title}</h4>
      <ul className=" font-normal flex flex-col gap-5">{children}</ul>
    </div>
  );
}
