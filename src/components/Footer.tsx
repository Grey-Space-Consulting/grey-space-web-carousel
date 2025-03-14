
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="h-8 w-8 bg-primary/20 rounded-md flex items-center justify-center">
                <div className="h-3 w-3 bg-primary rounded-sm"></div>
              </div>
              <span className="text-xl font-display font-medium">Grey Space</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Transforming operations through innovative technology solutions.
            </p>
            <div className="flex gap-4">
              {[["github", "#"], ["twitter", "#"], ["linkedin", "#"]].map(([name, href]) => (
                <a 
                  key={name}
                  href={href}
                  className="h-10 w-10 rounded-full bg-secondary/50 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label={name}
                >
                  <div className="h-5 w-5 rounded-full bg-foreground/30"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Services", "About Us", "Technologies", "Partners", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`/#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-5">Services</h3>
            <ul className="space-y-3">
              {["Operations Consulting", "Technology Implementation", "Process Optimization", "Digital Transformation", "Custom Solutions"].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  1234 Technology Drive<br />
                  Suite 500<br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <a href="tel:+14155550123" className="text-muted-foreground hover:text-foreground transition-colors">
                  (415) 555-0123
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <a href="mailto:info@greyspace.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  info@greyspace.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between gap-4 text-muted-foreground text-sm">
          <p>© 2023 Grey Space. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
