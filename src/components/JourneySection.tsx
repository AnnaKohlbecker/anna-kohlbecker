import { MapPin, Calendar, Trophy, GraduationCap } from "lucide-react";

const JourneySection = () => {
  const journeySteps = [
    {
      icon: GraduationCap,
      year: "2012 - 2021",
      title: "Secondary Education with Diploma (Gauß Gymnasium)",
      description: "",
    },
    {
      icon: GraduationCap,
      year: "2022 - 2025",
      title: "Studies & Projects (DHBW Lörrach & Roche Diagnostics)",
      description: "",
    },
    {
      icon: MapPin,
      year: "2025",
      title: "Building & Scaling",
      description: "",
    },
  ];

  return (
    <section className="py-20 text-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">JOURNEY</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-black hidden md:block"></div>

            <div className="space-y-12">
              {journeySteps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex items-start space-x-6"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-6 w-4 h-4 bg-black rounded-full border-4 border-background"></div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center flex-shrink-0 md:ml-12">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {step.year}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
