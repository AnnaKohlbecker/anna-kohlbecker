import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Anna Kohlbecker</span>
                <br />
                <span className="text-muted-foreground font-thin text-3xl lg:text-4xl">Entrepreneur & Developer</span>
              </h1>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Contact <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20"></div>
              <img 
                src={heroPortrait} 
                alt="Anna Kohlbecker - Developer" 
                className="relative rounded-2xl shadow-card object-cover w-full max-w-80 mx-auto"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;