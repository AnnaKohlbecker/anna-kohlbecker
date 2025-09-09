import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div>
          {/* Brand */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <span className="text-xl font-bold">Anna Kohlbecker</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Let's build something amazing together.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Anna Kohlbecker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;