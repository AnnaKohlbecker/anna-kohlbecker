import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import WhyHireMeSection from "@/components/WhyHireMeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="portfolio">
          <PortfolioSection />
        </section>
        <WhyHireMeSection />
        <section id="contact">
          <PricingSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
