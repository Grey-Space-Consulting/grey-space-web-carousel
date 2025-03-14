
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, ChevronRight, Languages, GitMerge, ArrowLeftRight, DollarSign, Check, Users, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const CaseStudies = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeStudy, setActiveStudy] = useState<string | null>(null);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Check if URL has a hash and scroll to that case study
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setActiveStudy(id);
      
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const handleCaseStudyClick = (id: string) => {
    setActiveStudy(id);
    // Update URL hash without full page reload
    window.history.pushState(null, '', `#${id}`);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-in">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              Our Success Stories
            </div>
            <h1 className="heading-lg mb-6 max-w-4xl">
              Case Studies
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Explore how we've helped organizations transform their operations with innovative technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            {caseStudies.map((study, index) => (
              <div key={study.title} className="glass-card rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="h-52 bg-card/80 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary text-sm mb-3">
                    <Briefcase size={16} />
                    <span>{study.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{study.title}</h3>
                  <p className="text-muted-foreground mb-4">{study.excerpt}</p>
                  <button 
                    onClick={() => handleCaseStudyClick(study.id)}
                    className="flex items-center gap-1 text-primary hover:underline"
                  >
                    Read Case Study <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Detailed Case Studies */}
          <div className="mt-32">
            {detailedCaseStudies.map((study) => (
              <div 
                key={study.id} 
                id={study.id}
                className={cn(
                  "mb-20 pt-20 -mt-20 scroll-mt-24 transition-opacity duration-500",
                  activeStudy === study.id ? "opacity-100" : "opacity-80"
                )}
              >
                <Card className="overflow-hidden border-0 shadow-lg">
                  <div className="h-80 w-full relative">
                    <img
                      src={study.heroImage} 
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-8 text-white">
                        <div className="flex items-center gap-2 text-primary-foreground/80 text-sm mb-3">
                          <Briefcase size={16} />
                          <span>{study.category}</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{study.title}</h2>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Client</h3>
                        <div className="flex items-center gap-3">
                          <img
                            src={study.clientLogo}
                            alt={study.client}
                            className="h-10"
                          />
                          <span>{study.client}</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Industry</h3>
                        <p>{study.industry}</p>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Timeframe</h3>
                        <p>{study.timeframe}</p>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Results</h3>
                        <p className="text-primary font-medium">{study.results}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-8 mb-12">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
                        <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">{study.approach}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                          {study.keyPoints.map((point, idx) => (
                            <Card key={idx} className="border bg-muted/30">
                              <CardContent className="pt-6">
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                  {point.icon}
                                </div>
                                <h4 className="font-medium mb-2">{point.title}</h4>
                                <p className="text-sm text-muted-foreground">{point.description}</p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4">The Results</h3>
                        <p className="text-muted-foreground leading-relaxed">{study.resultsDetails}</p>
                      </div>
                    </div>
                    
                    <div className="border-t pt-8 mt-12">
                      <Pagination>
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious href="#" />
                          </PaginationItem>
                          {caseStudies.map((s) => (
                            <PaginationItem key={s.id}>
                              <PaginationLink 
                                href={`#${s.id}`}
                                isActive={activeStudy === s.id}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleCaseStudyClick(s.id);
                                }}
                              >
                                {s.id === 'turo' ? 'Turo' : s.id === 'healthcare' ? 'Healthcare' : 'Retail'}
                              </PaginationLink>
                            </PaginationItem>
                          ))}
                          <PaginationItem>
                            <PaginationNext href="#" />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const caseStudies = [
  {
    id: "turo",
    title: "Support System Integration for Turo",
    category: "Technology",
    excerpt: "How we helped Turo merge support systems after acquiring a European competitor while localizing to multiple languages.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop",
  },
  {
    id: "healthcare",
    title: "Healthcare Data Integration",
    category: "Healthcare",
    excerpt: "Transforming patient care through integrated data systems at a major hospital network.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
  },
  {
    id: "retail",
    title: "Retail Supply Chain Revolution",
    category: "Retail",
    excerpt: "Creating a resilient, AI-driven supply chain for a national retail chain.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
  },
];

const detailedCaseStudies = [
  {
    id: "turo",
    title: "Support System Integration for Turo",
    category: "Technology",
    client: "Turo",
    clientLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Turo_logo.svg/320px-Turo_logo.svg.png",
    industry: "Car Sharing / Transportation",
    timeframe: "Less than 3 months",
    results: "$200K annual savings",
    challenge: "Following Turo's acquisition of a European competitor, the company faced the complex challenge of merging two distinct customer support systems. This merger was further complicated by the need to maintain localization in multiple languages to serve their international customer base. Turo needed a solution that would minimize disruption to their operations while achieving cost efficiency.",
    approach: "Our team took a systematic approach to addressing Turo's challenges, focusing on seamless integration while preserving multilingual support capabilities:",
    keyPoints: [
      {
        icon: <GitMerge className="h-6 w-6 text-primary" />,
        title: "Support System Merger",
        description: "Implemented a phased integration strategy to merge the two support platforms without service disruption."
      },
      {
        icon: <Languages className="h-6 w-6 text-primary" />,
        title: "Multilingual Localization",
        description: "Developed a comprehensive localization framework to maintain support in all required languages."
      },
      {
        icon: <DollarSign className="h-6 w-6 text-primary" />,
        title: "Cost Optimization",
        description: "Identified and eliminated redundancies while maintaining service quality to maximize cost savings."
      }
    ],
    resultsDetails: "The project was completed in under three months, significantly faster than industry averages for similar integrations. Our solution delivered an annualized savings of $200,000 compared to competing bids and the cost of utilizing internal resources. The integrated system maintained full localization capabilities, ensuring seamless customer support across all markets. Additionally, the new unified platform improved operational efficiency by standardizing processes and eliminating redundancies.",
    heroImage: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&auto=format&fit=crop",
  },
  {
    id: "healthcare",
    title: "Healthcare Data Integration",
    category: "Healthcare",
    client: "Major Hospital Network",
    clientLogo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=100&h=50&auto=format&fit=crop",
    industry: "Healthcare",
    timeframe: "6 months",
    results: "30% improvement in patient care efficiency",
    challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    approach: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    keyPoints: [
      {
        icon: <Users className="h-6 w-6 text-primary" />,
        title: "Patient-Centric Design",
        description: "Developed systems with patient experience as the primary focus."
      },
      {
        icon: <ArrowLeftRight className="h-6 w-6 text-primary" />,
        title: "Seamless Data Flow",
        description: "Created integrated data pathways between previously siloed systems."
      },
      {
        icon: <Check className="h-6 w-6 text-primary" />,
        title: "Compliance Assurance",
        description: "Implemented robust security measures to maintain regulatory compliance."
      }
    ],
    resultsDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    heroImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&auto=format&fit=crop",
  },
  {
    id: "retail",
    title: "Retail Supply Chain Revolution",
    category: "Retail",
    client: "National Retail Chain",
    clientLogo: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=100&h=50&auto=format&fit=crop",
    industry: "Retail",
    timeframe: "9 months",
    results: "45% reduction in supply chain costs",
    challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    approach: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    keyPoints: [
      {
        icon: <Globe className="h-6 w-6 text-primary" />,
        title: "Global Integration",
        description: "Connected international supply chains into a single, manageable system."
      },
      {
        icon: <ArrowLeftRight className="h-6 w-6 text-primary" />,
        title: "Inventory Optimization",
        description: "Implemented AI-driven forecasting to minimize overstock and stockouts."
      },
      {
        icon: <DollarSign className="h-6 w-6 text-primary" />,
        title: "Cost Reduction",
        description: "Streamlined processes to eliminate waste and reduce operational costs."
      }
    ],
    resultsDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    heroImage: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=1200&auto=format&fit=crop",
  }
];

export default CaseStudies;
