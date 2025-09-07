import { Palette, Monitor, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "Design",
      description: "Creating beautiful and intuitive user interfaces with modern design principles and attention to detail."
    },
    {
      icon: Monitor,
      title: "UI/UX",
      description: "Designing user experiences that are both functional and delightful, focusing on usability and conversion."
    },
    {
      icon: Zap,
      title: "Branding",
      description: "Developing strong brand identities that connect with your audience and stand out in the market."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My Awesome <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I offer comprehensive design solutions to help your business grow and succeed in the digital world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-2xl p-8 text-center shadow-card hover:shadow-glow transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;