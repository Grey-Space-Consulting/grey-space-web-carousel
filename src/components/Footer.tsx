
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  return <footer className="bg-card/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-[14px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <img src="https://greyspace-v3.netlify.app/assets/greyspace-logo-white.svg" alt="Grey Space Logo" className="h-8 w-auto" />
              <span className="text-xl font-display font-medium">Grey Space</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Transforming operations through innovative technology solutions.
            </p>
            
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
                  Case Studies
                </Link>
              </li>
              {/* Industries link removed from footer */}
              <li>
                <Link to="/causes" className="text-muted-foreground hover:text-foreground transition-colors">
                  Causes We Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-5">Contact</h3>
            <ul className="space-y-4">
              
              
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <a href="mailto:hello@greyspace.co" className="text-muted-foreground hover:text-foreground transition-colors">
                  hello@greyspace.co
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
    </footer>;
};
export default Footer;
