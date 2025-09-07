import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const PricingSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Contact Me</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            <Textarea 
              placeholder="Your message..." 
              className="w-full min-h-[120px] resize-none"
              rows={5}
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