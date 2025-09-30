import ContactSection from "./_components/home/ContactSection";
import HeroSection from "./_components/home/HeroSection";

export default function App() {
  return (
    <div>
      <HeroSection />
      <ContactSection phone={"__PHONE__"} address={"__ADDRESS__"} />
    </div>
  );
}
