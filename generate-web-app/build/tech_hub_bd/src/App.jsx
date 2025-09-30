import ContactSection from "./_components/home/ContactSection";
import HeroSection from "./_components/home/HeroSection";

export default function App() {
  return (
    <div>
      <HeroSection />
      <ContactSection phone={"01898765432"} address={"Level 4, Block B, Dhanmondi, Dhaka"} />
    </div>
  );
}
