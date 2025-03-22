
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <header className={cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10", 
    scrolled 
      ? "py-4 bg-background/85 backdrop-blur-md shadow-md border-b border-border/30" 
      : "py-6"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="https://greyspace-v3.netlify.app/assets/greyspace-logo-white.svg" alt="Grey Space Logo" className="h-8 w-auto group-hover:scale-105 transition-transform duration-300" />
          <span className="text-xl font-display font-bold px-0">GREY SPACE</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/case-studies" className={cn(
            "transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:transition-all",
            scrolled ? "text-foreground hover:text-primary" : "text-foreground/80 hover:text-foreground"
          )}>
            Case Studies
          </Link>
          {/* Industries link removed from desktop navigation */}
          <Link to="/services" className={cn(
            "transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:transition-all",
            scrolled ? "text-foreground hover:text-primary" : "text-foreground/80 hover:text-foreground"
          )}>
            Services
          </Link>
          <Link to="/causes" className={cn(
            "transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:transition-all",
            scrolled ? "text-foreground hover:text-primary" : "text-foreground/80 hover:text-foreground"
          )}>
            Causes We Support
          </Link>
        </nav>

        <a href="/#contact" className={cn(
          "rounded-lg px-5 py-2.5 transition-colors hidden md:block",
          scrolled 
            ? "bg-primary text-primary-foreground hover:bg-primary/90" 
            : "bg-primary/10 text-primary hover:bg-primary/20"
        )}>
          Get in touch
        </a>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 pt-20 px-6 transition-transform duration-300 ease-in-out md:hidden", isMenuOpen ? "translate-x-0" : "translate-x-full")}>
        <nav className="flex flex-col gap-6">
          <Link to="/" className="text-lg text-foreground/80 hover:text-foreground transition-colors py-2 border-b border-border flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <Home size={20} />
            Home
          </Link>
          <Link to="/case-studies" className="text-lg text-foreground/80 hover:text-foreground transition-colors py-2 border-b border-border" onClick={() => setIsMenuOpen(false)}>
            Case Studies
          </Link>
          {/* Industries link removed from mobile menu */}
          <Link to="/services" className="text-lg text-foreground/80 hover:text-foreground transition-colors py-2 border-b border-border" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          <Link to="/causes" className="text-lg text-foreground/80 hover:text-foreground transition-colors py-2 border-b border-border" onClick={() => setIsMenuOpen(false)}>
            Causes We Support
          </Link>
          <a href="/#contact" className="mt-4 rounded-lg px-5 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Get in touch
          </a>
        </nav>
      </div>
    </header>;
};

export default Navbar;
