import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { SocialIcon } from "react-social-icons";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [nameText, setNameText] = useState("");
  const [subtitleText, setSubtitleText] = useState("");
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);
  const [visibleLinks, setVisibleLinks] = useState([false, false, false]);
  
  const fullName = "ANNA KOHLBECKER";
  const fullSubtitle = "Entrepreneur, Developer";
  
  useEffect(() => {
    let nameIndex = 0;
    let subtitleIndex = 0;
    
    // Type the name first
    const nameTimer = setInterval(() => {
      if (nameIndex < fullName.length) {
        setNameText(fullName.slice(0, nameIndex + 1));
        nameIndex++;
      } else {
        clearInterval(nameTimer);
        setShowCursor1(false);
        setShowCursor2(true);
        
        // Start typing subtitle after name is complete
        const subtitleTimer = setInterval(() => {
          if (subtitleIndex < fullSubtitle.length) {
            setSubtitleText(fullSubtitle.slice(0, subtitleIndex + 1));
            subtitleIndex++;
          } else {
            clearInterval(subtitleTimer);
            setShowCursor2(false);
            
            // Start showing links one by one after typing is complete
            setTimeout(() => {
              setVisibleLinks(prev => [true, prev[1], prev[2]]);
              setTimeout(() => {
                setVisibleLinks(prev => [true, true, prev[2]]);
                setTimeout(() => {
                  setVisibleLinks([true, true, true]);
                }, 300);
              }, 300);
            }, 500);
          }
        }, 100);
      }
    }, 150);
    
    return () => {
      clearInterval(nameTimer);
    };
  }, []);

  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {nameText}
                  {showCursor1 && <span className="animate-pulse">|</span>}
                </span>
                <br />
                <span className="text-muted-foreground font-thin text-3xl lg:text-4xl">
                  {subtitleText}
                  {showCursor2 && <span className="animate-pulse">|</span>}
                </span>
              </h1>
            </div>
            
            <div className="flex justify-start space-x-4 mb-6">
              <div className={`transition-all duration-500 ${visibleLinks[0] ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
                <SocialIcon url="https://github.com/AnnaKohlbecker" style={{ height: 40, width: 40 }} fgColor="white" bgColor="black" />
              </div>
              <div className={`transition-all duration-500 ${visibleLinks[1] ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
                <SocialIcon url="https://www.linkedin.com/in/anna-kohlbecker-413761220/" style={{ height: 40, width: 40 }} fgColor="white" bgColor="black" />
              </div>
              <div className={`transition-all duration-500 ${visibleLinks[2] ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
                <a href="#contact" className="flex items-center justify-center w-10 h-10 bg-black rounded-full hover:bg-black">
                  <Mail className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative group max-w-md mx-auto">
            <img 
              src={heroPortrait} 
              alt="Anna Kohlbecker - Developer" 
              className="rounded-full object-cover w-full aspect-square"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
              <span className="text-white text-2xl font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                Hey :)
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;