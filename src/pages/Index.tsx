import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import JourneySection from "@/components/JourneySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-lightgray">
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <div className="w-3/4 h-px bg-gray mx-auto"></div>
        <section id="portfolio">
          <PortfolioSection />
        </section>
        <div className="w-3/4 h-px bg-gray mx-auto"></div>
        <section id="journey">
          <JourneySection />
        </section>
        <div className="w-3/4 h-px bg-gray mx-auto"></div>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <div className="w-3/4 h-px bg-gray mx-auto"></div>
      <Footer />
    </div>
  );
};

export default Index;
