import CommonContainer from "@/_components/shared/container/CommonContainer";
import CommonHeader from "@/_components/shared/header/CommonHeader";
import FaqList from "./FaqList";

export default function FaqSection() {
  return (
    <CommonContainer>
      <CommonHeader>Frequently asked questions</CommonHeader>
      <FaqList />
    </CommonContainer>
  );
}
