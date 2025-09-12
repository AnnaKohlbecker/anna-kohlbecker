import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Clock, Users } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const WhyHireMeSection = () => {
  const benefits = [
    {
      icon: Award,
      title: "3+ Years Experience",
      description: "Proven track record with 15+ successful projects."
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Why Contact Me For <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Your Project?</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyHireMeSection;