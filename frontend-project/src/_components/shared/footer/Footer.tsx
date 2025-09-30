import { address, services } from "@/data/footer.data";
import Image from "next/image";
import CommonContainer from "../container/CommonContainer";
import FooterBranding from "./FooterBranding";
import FooterColumn from "./FooterColumn";
import FooterUsefullLinks from "./FooterUsefullLinks";

export default function Footer() {
  return (
    <CommonContainer>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8  lg:gap-[120px]">
        <FooterBranding />

        <FooterColumn title="Our Services">
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </FooterColumn>

        <FooterUsefullLinks />

        <FooterColumn title="Contact Info">
          {address.map((item) => (
            <li key={item.id} className=" flex gap-3 items-center">
              <Image alt="Image" src={item.icon} height={24} width={24} />
              {item.title}
            </li>
          ))}
        </FooterColumn>
      </div>

      <div className=" text-secondary-text flex flex-col md:flex-row items-center justify-between mt-16">
        <p>© Plumbing Pros. All Rights Reserved</p>
        <p>Website by IH Adventure And Creative</p>
      </div>
    </CommonContainer>
  );
}
