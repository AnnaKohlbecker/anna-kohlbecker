import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import JourneySection from "@/components/JourneySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-bg flex justify-center items-stretch">
      <div className="min-h-screen flex flex-col max-w-4xl w-full border-x border-gray">
        <main className="flex-1">
          <section id="home">
            <HeroSection />
          </section>
          <section id="portfolio">
            <PortfolioSection />
          </section>
          <section id="journey">
            <JourneySection />
          </section>
          <section id="contact">
            <ContactSection />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
