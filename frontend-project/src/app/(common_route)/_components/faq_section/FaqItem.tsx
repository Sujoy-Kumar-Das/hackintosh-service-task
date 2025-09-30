import downIcon from "@/assets/downIcon.png";
import upperIcon from "@/assets/upperIcon.png";
import Image from "next/image";

interface FaqItemProps {
  title: string;
  detail: string;
  isOpen: boolean;
  onSelectId: () => void;
}

export default function FaqItem({
  title,
  detail,
  isOpen,
  onSelectId,
}: FaqItemProps) {
  return (
    <div>
      <div className=" flex items-center justify-between">
        <h1 className=" font-semibold lg:text-[28px] md:text-[20px] text-[16px] text-accent-text mb-2 md:mb-3 lg:mb-5">
          {title}
        </h1>

        <Image
          alt={isOpen ? "UpperIcon" : " DownIcon"}
          src={isOpen ? upperIcon : downIcon}
          height={20}
          width={20}
          onClick={onSelectId}
        />
      </div>

      {isOpen && (
        <p className=" text-secondary-text text-sm lg:text-[20px] mb-2 md:mb-3 lg:mb-5 ">
          {detail}
        </p>
      )}

      <hr className="  border-b border-[#D4DBE0]" />
    </div>
  );
}
