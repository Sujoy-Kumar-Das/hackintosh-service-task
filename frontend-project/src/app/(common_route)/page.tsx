import Footer from "@/_components/shared/footer/Footer";
import ContactSection from "./_components/contact_section/ContactSection";
import FaqSection from "./_components/faq_section/FaqSection";

export default function HomePage() {
  return (
    <div>
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
