import ContactSection from "./_components/home/ContactSection";
import HeroSection from "./_components/home/HeroSection";

export default function App() {
  return (
    <div>
      <HeroSection />
      <ContactSection phone={"01712345678"} address={"House 12, Road 5, Banani, Dhaka"} />
    </div>
  );
}
