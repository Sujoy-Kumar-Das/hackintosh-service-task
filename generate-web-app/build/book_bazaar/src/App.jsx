import ContactSection from "./_components/home/ContactSection";
import HeroSection from "./_components/home/HeroSection";

export default function App() {
  return (
    <div>
      <HeroSection />
      <ContactSection phone={"01911223344"} address={"Shop 22, New Market, Chittagong"} />
    </div>
  );
}
