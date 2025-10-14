import { Mail } from "lucide-react";
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
  const [visibleLinks, setVisibleLinks] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [xHover, setXHover] = useState(false);
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
                  setVisibleLinks((prev) => [true, prev[1], prev[2], prev[3]]);
                  setTimeout(() => {
                    setVisibleLinks((prev) => [true, true, prev[2], prev[3]]);
                    setTimeout(() => {
                      setVisibleLinks((prev) => [true, true, true, prev[3]]);
                      setTimeout(() => {
                        setVisibleLinks([true, true, true, true]);
                      }, 200);
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
    <section className="text-black container mx-auto">
      <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto min-h-screen items-center">
        <div className="min-h-screen space-y-8 lg:col-span-2 flex flex-col justify-center">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="text-black">
                <span className="inline-block">
                  {firstNameText}
                  {showCursor1 && <span className="animate-pulse"></span>}
                </span>
                <br />
                <span className="inline-block">
                  {lastNameText}
                  {showCursor2 && <span className="animate-pulse"></span>}
                </span>
              </span>
              <br />
              <span className="text-gray font-thin text-3xl lg:text-4xl">
                <span className="inline-block">
                  {subtitleText}
                  {showCursor3 && <span className="animate-pulse"></span>}
                </span>
              </span>
            </h1>
          </div>

          <div className="flex justify-start space-x-4 mb-6">
            <div
              className={`transition-all duration-500 ${
                visibleLinks[0]
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-4"
              }`}
            >
              <div className="rounded-full bg-white hover:bg-black transition-all duration-300 group shadow-lg hover:shadow-glow">
                <SocialIcon
                  url="https://x.com/Anna_Kohlbecker"
                  style={{ height: 36, width: 36 }}
                  fgColor={xHover ? "white" : "black"}
                  bgColor="transparent"
                  onMouseEnter={() => setXHover(true)}
                  onMouseLeave={() => setXHover(false)}
                />
              </div>
            </div>
            <div
              className={`transition-all duration-500 ${
                visibleLinks[1]
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-4"
              }`}
            >
              <div className="rounded-full bg-white hover:bg-black transition-all duration-300 group shadow-lg hover:shadow-glow">
                <SocialIcon
                  url="https://github.com/AnnaKohlbecker"
                  style={{ height: 36, width: 36 }}
                  fgColor={githubHover ? "white" : "black"}
                  bgColor="transparent"
                  onMouseEnter={() => setGithubHover(true)}
                  onMouseLeave={() => setGithubHover(false)}
                />
              </div>
            </div>
            <div
              className={`transition-all duration-500 ${
                visibleLinks[2]
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-4"
              }`}
            >
              <div className="rounded-full bg-white hover:bg-black transition-all duration-300 group shadow-lg hover:shadow-glow">
                <SocialIcon
                  url="https://www.linkedin.com/in/anna-kohlbecker-413761220/"
                  style={{ height: 36, width: 36 }}
                  fgColor={linkedinHover ? "white" : "black"}
                  bgColor="transparent"
                  onMouseEnter={() => setLinkedinHover(true)}
                  onMouseLeave={() => setLinkedinHover(false)}
                />
              </div>
            </div>
            <div
              className={`transition-all duration-500 ${
                visibleLinks[3]
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-4"
              }`}
            >
              <a
                href="#contact"
                className="flex items-center justify-center w-10 h-10 bg-white rounded-full hover:bg-black active:bg-black transition-all duration-300 group shadow-lg hover:shadow-glow"
              >
                <Mail className="w-5 h-5 text-black group-hover:text-white group-active:text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="min-h-screen relative lg:col-span-1 flex items-center justify-center">
          <img
            src={heroPortrait}
            alt="Anna Kohlbecker - Developer"
            className="rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
