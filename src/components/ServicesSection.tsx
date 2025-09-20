import { Megaphone, Monitor, Bot } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description:
        "Attract more customers and grow revenue with strategies that deliver measurable results.",
    },
    {
      icon: Monitor,
      title: "Software Design & Development",
      description:
        "Turning ideas into fast, user-friendly websites and apps that convert visitors into loyal customers.",
    },
    {
      icon: Bot,
      title: "AI & Automation Solutions",
      description:
        "Saving time and money by automating repetitive tasks and creating smarter workflows.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Services</h2>
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
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
