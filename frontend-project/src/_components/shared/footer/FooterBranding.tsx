import { footerSocialLink } from "@/data/footer.data";
import Image from "next/image";

export default function FooterBranding() {
  return (
    <div className=" flex-col flex gap-[28px]">
      <p className=" text-primary-text font-bold text-[32px] whitespace-nowrap">
        Business Logo
      </p>

      <div className=" flex items-center gap-4">
        {footerSocialLink.map((icon, index) => (
          <Image key={index} src={icon} alt="Image" width={24} height={24} />
        ))}
      </div>
    </div>
  );
}
