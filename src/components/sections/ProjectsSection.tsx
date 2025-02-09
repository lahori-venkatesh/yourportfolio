import { Button } from "@/components/ui/button";
import { Description } from "@radix-ui/react-toast";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Personal Portfolio Project",
      description: "A modern personal portfolio built with React, TypeScript, and Tailwind CSS, featuring an interactive user interface, smooth animations, and responsive design. It showcases my projects, skills, and professional journey, with easy access to my resume and social media links for seamless networking",
      image: "/images/portfolio.jpg",
      tools: ["Vite", "Typescript", "React", "Tailwing CSS", "shadcn-ui", "Typewriter.js"],
      link: "https://your-project-link"
    },
    {
      title: "Medical - Frontend project forRevolutionizing Online Healthcare Services",
      description: "MediVars connects you with expert doctors and healthcare professionals anytime, anywhere. With secure video consultations, instant medical advice, and comprehensive health management, MediVars ensures top-notch care from the comfort of your home. Your health, our priority.",
      image: "/images/medical.png",
      tools: ["TypeScript", "Vite", "React", "Tailwind CSS", "Shadcn UI"],
      link: "https://your-project-link"
    },
    {
      title: "Marriage Matrimony-Fullstack project for marriage profile matching platform",
      description: "Comprehensive healthcare management dashboard enabling medical professionals to monitor patient data, track treatments, and analyze health trends in real-time.",
      image: "/images/matrimony.png",
      tools: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
      link: "/projects/healthcare"
    },
    {
      title: "Hair-Cut-Fullstack for Salon slot booking service",
      description: "A feature-rich social media platform with real-time messaging, post sharing, and user engagement analytics. Built with modern technologies for optimal performance and scalability.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tools: ["Next.js", "Firebase", "TypeScript", "Redux"],
      link: "https://your-project-link"
    },
    {
      title: "InfyCo-Fullstack for peer-to-peer knowledge-sharing platfrom",
      description: "InfyCo is a peer-to-peer knowledge-sharing platform designed to connect students and professionals with mentors and experts across various fields. It bridges the gap between learners and industry specialists by offering one-on-one mentorship sessions, personalized guidance, and a collaborative environment.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tools: [ "Next.js", "Firebase", "TypeScript", "Redux" ],
      link:"https://your-project-link"
    }
  ];

  return (
    <section className="my-10">
      <div className="w-full max-w-[92%] md:max-w-full mx-auto px-0">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          My Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-background/50 backdrop-blur-sm rounded-lg overflow-hidden border border-[#196EF8]/80 hover:border-primary/20 transition-all duration-300"
            >
              <div className="aspect-video relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 space-y-3">
                <h3 className="text-lg font-medium font-poppins">{project.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-2 py-0.5 text-xs rounded-full bg-primary/5 text-primary/80"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <Link to={project.link}>
                  <Button variant="ghost" className="w-full mt-2 text-sm md:bg-transparent md:hover:bg-accent md:hover:text-accent-foreground bg-[#0F76F4] text-white hover:bg-[#0F76F4]/90 md:text-foreground">
                    View Project
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
