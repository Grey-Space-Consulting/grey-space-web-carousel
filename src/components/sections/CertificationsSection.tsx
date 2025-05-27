
import { useState } from "react";
import { Upload } from "lucide-react";

interface CertificationsSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const CertificationsSection = ({ sectionRef }: CertificationsSectionProps) => {
  const [certificationImages, setCertificationImages] = useState<{[key: number]: string}>({});

  const handleImageUpload = (certIndex: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCertificationImages(prev => ({
          ...prev,
          [certIndex]: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const renderCertificationBox = (index: number) => (
    <div key={index} className="glass-card rounded-xl p-6 flex flex-col items-center text-center hover:translate-y-[-5px] transition-all duration-300">
      <div className="h-24 w-24 rounded-lg bg-secondary/50 mb-4 flex items-center justify-center overflow-hidden relative group">
        {certificationImages[index] ? (
          <img 
            src={certificationImages[index]} 
            alt={`Certification ${index + 1}`}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="text-muted-foreground text-sm">Certification {index + 1}</div>
        )}
        <label 
          htmlFor={`cert-upload-${index}`} 
          className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center rounded-lg"
        >
          <Upload size={16} className="text-white" />
        </label>
        <input
          id={`cert-upload-${index}`}
          type="file"
          accept="image/*"
          onChange={(e) => handleImageUpload(index, e)}
          className="hidden"
        />
      </div>
      <h3 className="font-semibold text-lg mb-2">Certification Name</h3>
      <p className="text-sm text-muted-foreground">Brief description of this certification</p>
    </div>
  );

  return (
    <section 
      id="certifications"
      ref={sectionRef}
      className="section-padding px-6 md:px-10 bg-background opacity-0"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
            Certifications
          </div>
          <h2 className="heading-lg mb-3">Our Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We maintain industry certifications to ensure we deliver the highest quality solutions and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[0, 1, 2, 3, 4].map(index => renderCertificationBox(index))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
