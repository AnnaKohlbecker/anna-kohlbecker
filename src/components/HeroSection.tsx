import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SocialIcon } from "react-social-icons";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
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
            
            <div className="flex justify-center lg:justify-start space-x-4 mb-6">
              <SocialIcon url="https://github.com/AnnaKohlbecker" style={{ height: 40, width: 40 }} />
              <SocialIcon url="https://www.linkedin.com/in/anna-kohlbecker-413761220/" style={{ height: 40, width: 40 }} />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <a href="#contact">Contact <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={heroPortrait} 
              alt="Anna Kohlbecker - Developer" 
              className="rounded-2xl object-cover w-full max-w-md mx-auto"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;