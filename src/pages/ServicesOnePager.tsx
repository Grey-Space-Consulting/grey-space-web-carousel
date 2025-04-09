
import { useEffect, useRef, useState } from "react";
import { onePagerServices } from "@/data/onePagerServicesData";
import ServiceCard from "@/components/one-pager/ServiceCard";
import OnePagerHeader from "@/components/one-pager/OnePagerHeader";
import OnePagerControls from "@/components/one-pager/OnePagerControls";
import OnePagerCTA from "@/components/one-pager/OnePagerCTA";
import OnePagerFooter from "@/components/one-pager/OnePagerFooter";

const ServicesOnePager = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  
  useEffect(() => {
    // Set the document title for better PDF naming
    document.title = "Grey Space Services - One Pager";
  }, []);
  
  const handlePrint = () => {
    window.print();
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setLogoUrl(imageUrl);
    }
  };
  
  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setAvatarUrl(imageUrl);
    }
  };
  
  return (
    <div className="min-h-screen bg-background p-4 px-[24px] mx-0">
      {/* Control buttons - these won't appear in print */}
      <OnePagerControls onPrint={handlePrint} onLogoUpload={handleLogoUpload} />

      {/* Actual PDF content */}
      <div 
        ref={pageRef} 
        className="w-full max-w-[8.5in] mx-auto bg-white shadow-lg print:shadow-none p-5 print:p-4" 
        style={{
          minHeight: "11in",
          aspectRatio: "8.5/11"
        }}
      >
        {/* Header */}
        <OnePagerHeader 
          logoUrl={logoUrl} 
          avatarUrl={avatarUrl} 
          onAvatarUpload={handleAvatarUpload} 
        />
        
        {/* Title */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold">Our Services</h2>
          <p className="text-muted-foreground text-sm">Comprehensive solutions to transform your CX operations</p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {onePagerServices.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        {/* Contact CTA */}
        <OnePagerCTA />
        
        {/* Footer */}
        <OnePagerFooter />
      </div>
    </div>
  );
};

export default ServicesOnePager;
