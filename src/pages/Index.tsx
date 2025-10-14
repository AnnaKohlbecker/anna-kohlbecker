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
          <section id="home" className="mt-64">
            <HeroSection />
          </section>
          <section id="portfolio" className="mt-64">
            <PortfolioSection />
          </section>
          <section id="journey" className="mt-64">
            <JourneySection />
          </section>
          <section id="contact" className="mt-64">
            <ContactSection />
          </section>
        </main>
        <div className="mt-64">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
