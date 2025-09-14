import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { SocialIcon } from "react-social-icons";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [firstNameText, setFirstNameText] = useState("");
  const [lastNameText, setLastNameText] = useState("");
  const [subtitleText, setSubtitleText] = useState("");
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);
  const [showCursor3, setShowCursor3] = useState(false);
  const [visibleLinks, setVisibleLinks] = useState([false, false, false]);
  const [githubHover, setGithubHover] = useState(false);
  const [linkedinHover, setLinkedinHover] = useState(false);
  
  const firstName = "ANNA";
  const lastName = "KOHLBECKER";
  const fullSubtitle = "Entrepreneur, Developer";
  
  useEffect(() => {
    let firstNameIndex = 0;
    let lastNameIndex = 0;
    let subtitleIndex = 0;
    
    // Type the first name first
    const firstNameTimer = setInterval(() => {
      if (firstNameIndex < firstName.length) {
        setFirstNameText(firstName.slice(0, firstNameIndex + 1));
        firstNameIndex++;
      } else {
        clearInterval(firstNameTimer);
        setShowCursor1(false);
        setShowCursor2(true);
        
        // Start typing last name after first name is complete
        const lastNameTimer = setInterval(() => {
          if (lastNameIndex < lastName.length) {
            setLastNameText(lastName.slice(0, lastNameIndex + 1));
            lastNameIndex++;
          } else {
            clearInterval(lastNameTimer);
            setShowCursor2(false);
            setShowCursor3(true);
            
            // Start typing subtitle after last name is complete
            const subtitleTimer = setInterval(() => {
              if (subtitleIndex < fullSubtitle.length) {
                setSubtitleText(fullSubtitle.slice(0, subtitleIndex + 1));
                subtitleIndex++;
              } else {
                clearInterval(subtitleTimer);
                setShowCursor3(false);
                
                // Start showing links one by one after typing is complete
                setTimeout(() => {
                  setVisibleLinks(prev => [true, prev[1], prev[2]]);
                  setTimeout(() => {
                    setVisibleLinks(prev => [true, true, prev[2]]);
                    setTimeout(() => {
                      setVisibleLinks([true, true, true]);
                    }, 200);
                  }, 200);
                }, 300);
              }
            }, 60);
          }
        }, 100);
      }
    }, 100);
    
    return () => {
      clearInterval(firstNameTimer);
    };
  }, []);

  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8 lg:col-span-3">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  <span className="inline-block" style={{ minWidth: '200px' }}>
                    {firstNameText}
                    {showCursor1 && <span className="animate-pulse"></span>}
                  </span>
                  <span> </span>
                  <span className="inline-block" style={{ minWidth: '400px' }}>
                    {lastNameText}
                    {showCursor2 && <span className="animate-pulse"></span>}
                  </span>
                </span>
                <br />
                <span className="text-muted-foreground font-thin text-3xl lg:text-4xl">
                  <span className="inline-block" style={{ minWidth: '500px' }}>
                    {subtitleText}
                    {showCursor3 && <span className="animate-pulse"></span>}
                  </span>
                </span>
              </h1>
            </div>
            
            <div className="flex justify-start space-x-4 mb-6">
              <div className={`transition-all duration-500 ${visibleLinks[0] ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
                <div className="rounded-full">
                  <SocialIcon 
                    url="https://github.com/AnnaKohlbecker" 
                    style={{ height: 40, width: 40 }} 
                    fgColor="white" 
                    bgColor={githubHover ? "black" : "#6b7280"} 
                    onMouseEnter={() => setGithubHover(true)}
                    onMouseLeave={() => setGithubHover(false)}
                  />
                </div>
              </div>
              <div className={`transition-all duration-500 ${visibleLinks[1] ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
                <div className="rounded-full">
                  <SocialIcon 
                    url="https://www.linkedin.com/in/anna-kohlbecker-413761220/" 
                    style={{ height: 40, width: 40 }} 
                    fgColor="white" 
                    bgColor={linkedinHover ? "black" : "#6b7280"}
                    onMouseEnter={() => setLinkedinHover(true)}
                    onMouseLeave={() => setLinkedinHover(false)}
                  />
                </div>
              </div>
              <div className={`transition-all duration-500 ${visibleLinks[2] ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
                <a href="#contact" className="flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full hover:bg-black active:bg-black transition-all duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative max-w-xs mx-auto lg:col-span-1">
            <img 
              src={heroPortrait} 
              alt="Anna Kohlbecker - Developer" 
              className="rounded-2xl object-cover w-full aspect-[4/5]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;