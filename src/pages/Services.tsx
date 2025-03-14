
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Lightbulb, Users, Cog, ListChecks, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Services = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const packages = [
    {
      title: "CX Leadership & Strategy Package",
      description: "Expert leadership with a focus on aligning customer experience initiatives with strategic goals.",
      price: "$10,000/month",
      duration: "20 hours/month",
      icon: <Users className="h-8 w-8 text-primary mb-3" />,
      services: [
        "Fractional CX Leadership: Flexible leadership support for your CX strategy.",
        "Strategic Consulting: Align your technology and CX investments with business goals.",
        "Training & Process Optimization: Enhance your team's capabilities and streamline workflows."
      ],
      deliverables: [
        "CX strategy roadmap",
        "Executive guidance and leadership for CX teams",
        "Process improvements and training materials"
      ],
      highlighted: false
    },
    {
      title: "System & Workflow Optimization Package",
      description: "Improve internal operations through system integration, workflow optimization, and technology upgrades.",
      price: "$15,000 - $25,000",
      duration: "Depends on system complexity",
      icon: <Cog className="h-8 w-8 text-primary mb-3" />,
      services: [
        "System Integration & Workflows: Streamline system connections and operational processes.",
        "Tool Selections, Audits, & Migrations: Select and migrate the right tools for your business.",
        "Training & Process Optimization: Train your teams on new systems and processes."
      ],
      deliverables: [
        "System integration plan",
        "Process workflow documentation",
        "Tool audit and migration reports"
      ],
      highlighted: true
    },
    {
      title: "AI & Automation Innovation Package",
      description: "Automate repetitive tasks and integrate AI for smarter operations and better customer experience.",
      price: "$20,000 - $40,000",
      duration: "Based on automation scope",
      icon: <Lightbulb className="h-8 w-8 text-primary mb-3" />,
      services: [
        "Intelligent Automation & AI: Implement automation and AI to enhance operational efficiency.",
        "System Integration & Workflows: Ensure systems work seamlessly with new AI tools.",
        "Training & Process Optimization: Equip your team to work with automated systems."
      ],
      deliverables: [
        "AI implementation plan",
        "Automation setup and testing",
        "Training on using automation tools"
      ],
      highlighted: false
    },
    {
      title: "Comprehensive Transformation Package",
      description: "Full-service, end-to-end solution for businesses looking to completely overhaul their CX and operations.",
      price: "$40,000 - $75,000",
      duration: "Depends on engagement scope",
      icon: <ArrowRight className="h-8 w-8 text-primary mb-3" />,
      services: [
        "Fractional CX Leadership: Ongoing leadership for the transformation.",
        "Strategic Consulting: Align business strategy with CX and operational goals.",
        "System Integration & Workflows: Integrate new systems for operational excellence.",
        "Tool Selections, Audits, & Migrations: Choose the best tools for your needs.",
        "Training & Process Optimization: Equip your teams with necessary adaptation skills."
      ],
      deliverables: [
        "A comprehensive transformation strategy",
        "New systems, tools, and processes implemented",
        "Ongoing leadership support and training"
      ],
      highlighted: false
    },
    {
      title: "CX Audit & Optimization Package",
      description: "For businesses that already have CX processes in place but need an audit and optimization for greater impact.",
      price: "$7,500 - $15,000",
      duration: "Based on business size",
      icon: <ListChecks className="h-8 w-8 text-primary mb-3" />,
      services: [
        "Tool Selections, Audits, & Migrations: Conduct an audit of existing CX tools.",
        "Training & Process Optimization: Identify gaps and provide training to improve performance.",
        "System Integration & Workflows: Streamline systems and improve cross-team workflows."
      ],
      deliverables: [
        "CX audit report with recommended actions",
        "Process improvement plan and training schedule",
        "Optimized workflows"
      ],
      highlighted: false
    },
    {
      title: "Executive CX Workshop Package",
      description: "Short-term, intensive workshops that will kickstart your CX transformation.",
      price: "$5,000 - $10,000",
      duration: "Half-day to full-day",
      icon: <Users className="h-8 w-8 text-primary mb-3" />,
      services: [
        "Strategic Consulting: One-day workshop for executive leaders on CX strategy.",
        "Training & Process Optimization: Targeted training for specific teams."
      ],
      deliverables: [
        "Workshop presentations and materials",
        "Actionable steps for CX transformation"
      ],
      highlighted: false
    }
  ];

  const additionalServices = [
    "Customer Journey Mapping: Visualize customer journeys to identify friction points and improvement areas.",
    "CX Performance Metrics & KPIs: Develop metrics to measure CX success and optimize accordingly.",
    "Change Management Support: Assist in managing the human side of CX transformations.",
    "Ongoing CX Analytics & Reporting: Provide continuous support and analysis for CX improvement."
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-16 animate-fade-in">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              Our Services
            </div>
            <h1 className="heading-lg mb-6 max-w-4xl">
              How We Help You Succeed
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Our comprehensive operations technology services are designed to transform your business from the inside out.
            </p>
          </div>
          
          <div className="mb-16 text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              Service Packages
            </div>
            <h2 className="heading-lg mb-6">
              Tailored Solutions for Your Business
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully designed service packages or mix and match to meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.title}
                className={`animate-fade-in ${pkg.highlighted ? 'border-primary shadow-lg relative overflow-hidden' : ''}`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {pkg.highlighted && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  {pkg.icon}
                  <CardTitle className={pkg.highlighted ? 'text-primary' : ''}>{pkg.title}</CardTitle>
                  <CardDescription className="mt-1">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground ml-2 text-sm">{pkg.duration}</span>
                  </div>
                  
                  <Separator className="mb-4" />
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Services Included:</h4>
                    <ul className="space-y-2">
                      {pkg.services.map((service, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                          <span className="text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Deliverables:</h4>
                    <ul className="space-y-2">
                      {pkg.deliverables.map((deliverable, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                          <span className="text-sm">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className={`w-full ${pkg.highlighted ? '' : 'variant-outline'}`}>
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="heading-md mb-6">Additional Services</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Enhance your package with these specialized services to create a custom solution
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {additionalServices.map((service, index) => (
                <div key={index} className="glass-card p-6 flex items-start rounded-lg">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-1" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-xl text-center">
            <h3 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Our team can create a tailored package that perfectly fits your unique business requirements and challenges.
            </p>
            <Button size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
