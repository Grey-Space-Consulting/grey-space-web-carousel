
import { ArrowRight, Building, ChevronRight, Cog, Globe, Headphones, Lightbulb, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useIsMobile } from "@/hooks/use-mobile";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Services data with expanded content
const services = [
  {
    id: "leadership",
    title: "Fractional CX & Strategic Leadership",
    description: "Expert leadership and strategic guidance to align your customer experience initiatives with business objectives.",
    expandedDescription: "Our fractional leadership team brings decades of executive experience to your organization without the overhead of full-time hires. We provide strategic direction, stakeholder alignment, and hands-on guidance to transform your customer experience operations.",
    benefits: [
      "Reduce executive hiring costs while accessing senior expertise",
      "Accelerate CX improvements with proven frameworks",
      "Align technology investments with business objectives",
      "Develop internal leadership capabilities through mentorship"
    ],
    callToAction: "Book a Strategy Call",
    actionLink: "/#contact",
    icon: Users
  },
  {
    id: "integration",
    title: "System Integration & Workflows",
    description: "Seamlessly connect your systems and optimize workflows for maximum operational efficiency.",
    expandedDescription: "We specialize in connecting disparate systems into a cohesive technology ecosystem. Our integration experts eliminate data silos, automate manual processes, and create unified workflows that drive operational excellence.",
    benefits: [
      "Eliminate duplicate data entry and manual processes",
      "Create seamless customer journeys across channels",
      "Unlock insights through connected data sources",
      "Increase team productivity with streamlined workflows"
    ],
    callToAction: "Schedule a Tech Assessment",
    actionLink: "/#contact",
    icon: Building
  },
  {
    id: "training",
    title: "Training & Process Optimization",
    description: "Enhance team capabilities and streamline processes through comprehensive training and optimization.",
    expandedDescription: "Our training programs combine technical skills development with process optimization to ensure your team can fully leverage your technology investments. We create custom playbooks, deliver hands-on workshops, and implement continuous improvement frameworks.",
    benefits: [
      "Improve team adoption of new technologies",
      "Standardize processes for consistent customer experiences",
      "Reduce onboarding time for new employees",
      "Build a culture of continuous improvement"
    ],
    callToAction: "Explore Training Options",
    actionLink: "/#contact",
    icon: Cog
  },
  {
    id: "tools",
    title: "Tool Selections, Audits, & Migrations",
    description: "Expert guidance in selecting, auditing, and migrating to the right tools for your business needs.",
    expandedDescription: "Choosing the right technology stack is critical for operational success. We guide you through vendor selection, perform detailed technical audits, and execute smooth migrations that minimize disruption while maximizing ROI.",
    benefits: [
      "Make confident technology investment decisions",
      "Identify improvement opportunities in existing systems",
      "Reduce risk during complex migrations",
      "Optimize configurations for your specific needs"
    ],
    callToAction: "Request a Tool Audit",
    actionLink: "/#contact",
    icon: Globe
  },
  {
    id: "automation",
    title: "Intelligent Automation & AI",
    description: "Leverage cutting-edge AI and automation solutions to enhance operational efficiency and innovation.",
    expandedDescription: "We implement AI-powered solutions that transform customer experience while reducing operational costs. From conversational AI and predictive analytics to intelligent routing and process automation, we help you harness the power of artificial intelligence.",
    benefits: [
      "Increase self-service resolution rates",
      "Reduce response times with intelligent routing",
      "Anticipate customer needs with predictive analytics",
      "Scale operations without proportional cost increases"
    ],
    callToAction: "Discover AI Solutions",
    actionLink: "/#contact",
    icon: Lightbulb
  },
  {
    id: "helpdesk",
    title: "Managed Helpdesk",
    description: "Customized support solution with AI-powered responses, seamless system integration, and comprehensive training for your team.",
    expandedDescription: "Our managed helpdesk service provides 24/7 technical support with AI-powered automation and seamless integration with your existing systems. We handle everything from initial setup and configuration to ongoing maintenance and optimization.",
    benefits: [
      "Provide 24/7 support without staffing challenges",
      "Reduce resolution times with AI-powered responses",
      "Maintain data consistency across platforms",
      "Scale support operations up or down as needed"
    ],
    callToAction: "Get Support Solutions",
    actionLink: "/#contact",
    icon: Headphones
  }
];

interface ServicesSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const ServicesSection = ({ sectionRef }: ServicesSectionProps) => {
  const [activeTab, setActiveTab] = useState("leadership");
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section 
      id="services"
      ref={sectionRef}
      className="section-padding px-6 md:px-10 opacity-0"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
            Our Services
          </div>
          <h2 className="heading-lg mb-4">How We Help You Succeed</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive operations technology services are designed to transform your business from the inside out.
          </p>
        </div>
        
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          {isMobile ? (
            <div className="mb-8">
              <Select value={activeTab} onValueChange={setActiveTab}>
                <SelectTrigger className="w-full bg-secondary/30 border rounded-lg py-2 px-4">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.id}>
                      {service.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : (
            <TabsList className="w-full md:w-auto grid grid-cols-3 lg:grid-cols-6 gap-2 bg-secondary/30 border rounded-lg p-1 h-auto mb-8">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="text-sm py-2 px-3 rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-md h-full flex items-center justify-center text-center"
                >
                  <service.icon className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span className="hidden md:block">{service.title.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          )}

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="glass-card rounded-xl p-6 md:p-8">
                  <div className="h-12 w-12 mb-6 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {service.expandedDescription}
                  </p>
                  <Link to={service.actionLink}>
                    <Button variant="default" size="lg" className="gap-2 font-medium">
                      {service.callToAction}
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                <div className="space-y-8">
                  <div className="glass-card rounded-xl p-6 md:p-8">
                    <h4 className="text-xl font-semibold mb-4">Key Benefits</h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-center mt-6">
                    <Link to="/#contact">
                      <Button variant="outline" size="lg" className="gap-2">
                        Request Information
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {isMobile && (
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-8">
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full">
                {isOpen ? "Show Less" : "See All Services"}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 space-y-4">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  className="glass-card rounded-xl p-6 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                      <service.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  <Link to={service.actionLink}>
                    <Button variant="link" className="p-0 h-auto text-primary gap-2">
                      {service.callToAction}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
        )}

        <div className="mt-16 text-center">
          <Link to="/#contact">
            <Button variant="default" size="lg" className="gap-2 font-medium text-base">
              Get in Touch
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
