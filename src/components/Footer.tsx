import { SocialIcon } from "react-social-icons";

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
              <SocialIcon url="https://github.com/AnnaKohlbecker" style={{ height: 40, width: 40 }} />
              <SocialIcon url="https://www.linkedin.com/in/anna-kohlbecker-413761220/" style={{ height: 40, width: 40 }} />
              <SocialIcon url="https://x.com" style={{ height: 40, width: 40 }} />
              <SocialIcon url="mailto:contact@example.com" style={{ height: 40, width: 40 }} />
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Anna Kohlbecker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;