import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Event Location Renting Website",
      category: "Web Application",
      image: project1,
      description: "A peer-to-peer marketplace for event location rentals.",
    },
    {
      title: "...",
      category: "Web Application",
      image: project2,
      description: "...",
    },
    {
      title: "...",
      category: "Web Application",
      image: project3,
      description: "...",
    },
  ];

  return (
    <section className="min-h-screen py-20 bg-black flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">PRODUCTS</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-black text-white hover:bg-black/80"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-6">
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
