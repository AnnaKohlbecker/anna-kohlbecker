import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PricingSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Contact Me</span>
          </h2>
        </div>

        <div className="max-w-md mx-auto">
          <div className="space-y-4">
            <Input 
              type="text" 
              placeholder="Your message..." 
              className="w-full"
            />
            <Button 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              size="lg"
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;