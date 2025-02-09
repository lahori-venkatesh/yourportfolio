import { Button } from "@/components/ui/button";
import { Linkedin, Instagram, Youtube } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  const profileImage = "./images/image.png";

  return (
    <section className="relative min-h-screen w-screen overflow-hidden flex items-center justify-center pt-20 md:pt-4 ">
      {/* Animated background */}
      <div className="fixed inset-0 w-screen -z-10">
        <div className="absolute inset-0 w-screen bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 animate-gradient-x"></div>
        <div className="absolute inset-0 w-screen bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
        
        {/* Stars */}
        <div className="stars-container w-screen">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i} 
              className="star animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="w-full max-w-6xl mx-auto  md:pl-8 md:pr-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="space-y-4 text-center md:text-left order-2 md:order-1">
            <div className="space-y-2">
              <p className="text-white text-2xl md:text-4xl font-bold font-poppins">
                Hello <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
              </p>
              <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-2">
                I am <span className="text-primary">Your-Name</span>
              </h1>
            </div>
            <div className="h-8">
              <TypeAnimation
                sequence={[
                  'a ',
                  1,
                  'a UI/UX Designer',
                  2000,
                  'a ',
                  1,
                  'a Frontend Developer',
                  2000,
                  'a ',
                  1,
                  'a Full Stack Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-xl md:text-2xl font-poppins gradient-text"
                repeat={Infinity}
                style={{
                  display: 'inline-block'
                }}
                cursor={true}
              />
            </div>
            <p className="text-base md:text-lg text-secondary font-poppins -mt-2">
            To leverage my UX design skills and creative problem-solving abilities to craft impactful, user-centric solutions that bridge gaps in accessibility and mentorship, empowering individuals while driving innovation and delivering meaningful experiences in both personal and professional realms.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 mt-8">
              <Button size="lg" className="font-poppins px-8 
              ">View Resume</Button>
              <div className="flex items-center gap-6">
                <a href="https://www.linkedin.com/in/Your-linked-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.youtube.com/channel/your-channel-name" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-spin-slow"></div>
              <div className="absolute inset-[4px] rounded-full bg-background"></div>
              <img
                src={profileImage}
                alt="Profile"
                className="absolute inset-[3px] rounded-full object-cover w-[calc(100%-6px)] h-[calc(100%-6px)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient text styles */}
      <style>
        {`
          .TypeAnimation-module_type-animation__cursor__iDLYk {
            display: none !important;
          }
          
          .gradient-text:nth-of-type(3n + 1) {
            background: linear-gradient(to right, #EC4899, #8B5CF6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          
          .gradient-text:nth-of-type(3n + 2) {
            background: linear-gradient(to right, #3B82F6, #10B981);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          
          .gradient-text:nth-of-type(3n + 3) {
            background: linear-gradient(to right, #F59E0B, #EF4444);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;