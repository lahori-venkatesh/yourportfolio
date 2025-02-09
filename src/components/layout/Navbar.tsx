import { Github, Menu, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ scrolled }: { scrolled: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#story", label: "My Story" },
    { href: "#contact", label: "Contact Me" },
  ];

  const socialLinks = {
    github: "https://github.com/Your-Github profile",
    linkedin: "https://www.linkedin.com/in/your-linked profile"
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-background/95 backdrop-blur-sm" : ""
    } border-b border-[#196EF8]/40`}>
      <div className="container mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-bold text-primary font-poppins 
            bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Portfolio
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-foreground hover:text-primary transition-colors font-poppins"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-poppins"
                >
                  {link.label}
                </a>
              )
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="border-l border-[#196EF8]/80 bg-background/95 backdrop-blur-sm">
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    link.href.startsWith("/") ? (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="text-foreground hover:text-primary transition-colors font-poppins text-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        key={link.href}
                        href={link.href}
                        className="text-foreground hover:text-primary transition-colors font-poppins text-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </a>
                    )
                  ))}
                  <div className="flex space-x-4 pt-4">
                    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon">
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <Button variant="outline" className="gap-2 hidden md:flex border-[#196EF8]/80">
            <Github className="h-4 w-4" />
            GitHub
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;