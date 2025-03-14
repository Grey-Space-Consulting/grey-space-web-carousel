
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="text-center max-w-md animate-fade-in">
          <div className="h-20 w-20 mx-auto mb-6 flex items-center justify-center bg-primary/10 rounded-xl">
            <span className="text-4xl font-semibold text-primary">404</span>
          </div>
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <a 
            href="/" 
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors inline-block"
          >
            Back to Home
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
