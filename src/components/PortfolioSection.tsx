import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import project_1 from "@/assets/project-1.png";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Eventola",
      category: "Web Application",
      image: project_1,
      description: "A peer-to-peer marketplace for event location rentals.",
      url: "https://eventola.de",
    },
  ];

  return (
    <section className="min-h-screen py-20 bg-black flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">PRODUCTS</h2>
        </div>

        <div
          className={`max-w-7xl mx-auto ${
            projects.length === 1
              ? "flex justify-center"
              : "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 group flex flex-col ${
                projects.length === 1 ? "w-80" : ""
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ height: "120px" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-black text-white hover:bg-black/80"
                      onClick={() => window.open(project.url, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1">
                <div className="text-sm text-primary mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
