
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10",
        scrolled ? "py-4 glass-dark" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 bg-primary/20 rounded-md flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
            <div className="h-3 w-3 bg-primary rounded-sm group-hover:scale-110 transition-transform duration-300"></div>
          </div>
          <span className="text-xl font-display font-medium">Grey Space</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {/* No navigation links */}
        </nav>

        <button 
          className="rounded-lg px-5 py-2.5 bg-primary/10 text-primary hover:bg-primary/20 transition-colors hidden md:block"
        >
          Get in touch
        </button>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 pt-20 px-6 transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-6">
          <button 
            className="mt-4 rounded-lg px-5 py-3 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            Get in touch
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
