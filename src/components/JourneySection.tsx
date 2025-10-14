import {
  MapPin,
  Calendar,
  Trophy,
  GraduationCap,
  Building2,
  BriefcaseBusiness,
} from "lucide-react";

const JourneySection = () => {
  const journeySteps = [
    {
      icon: GraduationCap,
      year: "2012 - 2021",
      organization: ["Gauß Gymnasium Worms, Germany"],
      title: "Diploma & Projects",
      description: ["Python Course", "Robotics Club"],
    },
    {
      icon: GraduationCap,
      year: "2022 - 2025",
      organization: [
        "DHBW Lörrach, Germany",
        "Roche Diagnostics Mannheim, Germany",
      ],
      title: "Computer Science B. Sc., Work & Projects",
      description: [
        "Project Management",
        "Website Development",
        "App Development",
        "Low Code Development",
        "AI Integration",
        "Data Management",
        "Software Quality Assurance",
        "API Integration",
        "DevOps",
        "Cybersecurity Basics",
      ],
    },
    {
      icon: BriefcaseBusiness,
      year: "2025 - Present",
      title: "Agency Service & SaaS Products",
      description: ["Eventola", "BlinkForge"],
    },
  ];

  return (
    <section className="py-20 text-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">JOURNEY</h2>
        </div>

        <div className="mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-black border-l-2 border-dotted border-black bg-transparent"></div>

            <div className="space-y-12">
              {journeySteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Icon positioned on timeline */}
                  <div className="absolute left-2 w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0 z-10">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="ml-20">
                    <div className="p-6">
                      <div className="flex flex-wrap items-center mb-3 gap-3">
                        <span className="text-sm font-semibold text-primary bg-gray px-3 py-1 rounded-full flex items-center gap-1">
                          <Calendar className="h-3 w-3 flex-shrink-0" />
                          {step.year}
                        </span>
                        {step.organization &&
                          step.organization.map((org, orgIndex) => (
                            <span
                              key={orgIndex}
                              className="text-sm font-semibold text-primary bg-gray px-3 py-1 rounded-full flex items-center gap-1 break-words"
                            >
                              <Building2 className="h-3 w-3 flex-shrink-0" />
                              <span className="break-words">{org}</span>
                            </span>
                          ))}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      {step.description && step.description.length > 0 && (
                        <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-1">
                          {step.description.map((desc, descIndex) => (
                            <li key={descIndex}>{desc}</li>
                          ))}
                        </ul>
                      )}
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
