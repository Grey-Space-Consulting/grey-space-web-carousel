
import React from "react";
import { DetailedCaseStudy } from "../types";
import { BarChart, Users, Clock } from "lucide-react";

const sweetgreenStudy: DetailedCaseStudy = {
  id: "sweetgreen",
  title: "Scaling Customer Support with Automation",
  category: "Food & Beverage",
  client: "Sweetgreen",
  clientLogo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Sweetgreen_logo.png",
  industry: "Fast Casual Restaurant",
  timeframe: "3+ year partnership",
  results: "$175K annual savings",
  challenge: "Sweetgreen faced the challenge of managing increasing customer support demands while rapidly expanding their store network. They needed to maintain high-quality customer service without proportionally increasing headcount costs. As a fast-growing company with both physical locations and a popular mobile app, their support volume was growing exponentially, threatening to increase operational costs unsustainably.",
  approach: "We implemented a multi-faceted approach to help Sweetgreen optimize their customer support operations while keeping costs under control:",
  keyPoints: [
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "AI-Powered Automation",
      description: "Deployed intelligent automation solutions to handle routine inquiries and frequently asked questions."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Agent Efficiency Tools",
      description: "Implemented agent assistance tools that reduced handling time while maintaining quality standards."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Continuous Optimization",
      description: "Established data-driven improvement cycles to continuously refine automation and support processes."
    }
  ],
  resultsDetails: "Over our three-year partnership, Sweetgreen has realized $175,000 in annualized savings through our support optimization solutions. The automated systems we implemented achieved a 35% automated deflection rate, allowing human agents to focus on more complex issues. Additionally, our agent assistance tools contributed to a significant 24% decrease in handle times, further improving operational efficiency. Sweetgreen was able to successfully scale their business without proportionally increasing their customer support costs.",
  heroImage: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&auto=format&fit=crop",
  excerpt: "How we helped Sweetgreen reduce costs while expanding their store network through intelligent customer service automation.",
  image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop",
};

export default sweetgreenStudy;
