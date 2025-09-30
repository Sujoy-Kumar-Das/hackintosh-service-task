import CommonContainer from "@/_components/shared/container/CommonContainer";
import CommonHeader from "@/_components/shared/header/CommonHeader";
import arrowRightIcon from "@/assets/arrow-right.png";
import Image from "next/image";
export default function ContactSection() {
  return (
    <CommonContainer className=" bg-primary rounded-3xl">
      <div className=" flex flex-col items-center gap-4 md:gap-6 lg:gap-8">
        <CommonHeader className=" text-contrast-text mb-0 md:mb-0 lg:mb-0">
          Get In Touch
        </CommonHeader>

        <p className=" font-normal text-contrast-text text-sm lg:text-lg text-center max-w-[1000px]">
          Contact us now to enquire our plumbing services, whether you have a
          commercial project that requires support, or a domestic plumbing task
          that needs the attention of a trusted professional.
        </p>

        <button className=" text-primary font-bold text-sm md:text-[16px] px-4 py-2.5 bg-contrast rounded-lg max-w-[300px] max-h-[60px] flex items-center gap-2 ">
          Book a Professional Plumber
          <Image
            alt="Arrow Right Icon"
            src={arrowRightIcon}
            height={24}
            width={24}
          />
        </button>
      </div>
    </CommonContainer>
  );
}
