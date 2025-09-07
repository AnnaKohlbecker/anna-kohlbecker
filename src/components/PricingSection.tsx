import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const packages = [
    {
      name: "Basic",
      price: "$100",
      period: "/project",
      description: "Perfect for small projects and startups",
      features: [
        "1 Page Design",
        "Basic UI Kit",
        "2 Revisions",
        "Mobile Responsive",
        "48hr Delivery"
      ],
      popular: false
    },
    {
      name: "Standard",
      price: "$500",
      period: "/project",
      description: "Most popular choice for growing businesses",
      features: [
        "Up to 5 Pages",
        "Custom UI Kit",
        "5 Revisions",
        "Mobile & Tablet",
        "Source Files",
        "24hr Support"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "$800",
      period: "/project",
      description: "Complete solution for enterprise projects",
      features: [
        "Up to 10 Pages",
        "Custom Design System",
        "Unlimited Revisions",
        "All Device Support",
        "Source Files",
        "Priority Support",
        "Style Guide"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Choose Your Best <span className="bg-gradient-primary bg-clip-text text-transparent">Package</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the perfect package that fits your needs and budget. All packages include high-quality design and support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-muted-foreground">{pkg.period}</span>
                </div>
                <p className="text-muted-foreground">{pkg.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  pkg.popular 
                    ? 'bg-accent hover:bg-accent/90 text-accent-foreground' 
                    : 'bg-primary hover:bg-primary/90'
                }`}
                size="lg"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;