
import React from "react";
import { DetailedCaseStudy } from "../types";
import { Users, Phone, Globe } from "lucide-react";

const hopskipdriveStudy: DetailedCaseStudy = {
  id: "hopskipdrive",
  title: "HopSkipDrive: Optimizing Customer Support Services",
  category: "Transportation",
  client: "HopSkipDrive",
  clientLogo: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=100&h=50&auto=format&fit=crop",
  industry: "Transportation",
  timeframe: "Ongoing partnership",
  results: "$215K annual savings",
  challenge: "HopSkipDrive needed to optimize their customer support operations across multiple channels including CRM, telephony, and chatbots. They were facing inefficiencies in their support processes, leading to long wait times and higher operational costs.",
  approach: "We implemented a comprehensive managed services solution to streamline HopSkipDrive's customer support infrastructure:",
  keyPoints: [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Managed Services",
      description: "Provided end-to-end management of their CRM (Kustomer), ensuring optimal configuration and performance."
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Telephony Optimization",
      description: "Reconfigured their Amazon Connect telephony system to improve call routing and reduce wait times."
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Chatbot Enhancement",
      description: "Enhanced their KIQ chatbots to handle more customer inquiries automatically and efficiently."
    }
  ],
  resultsDetails: "Through our managed services and platform administration, HopSkipDrive achieved $215,000 in annualized savings by streamlining their support operations. Additionally, our telephony optimizations resulted in a 45% reduction in phone wait times, significantly improving customer satisfaction. The enhanced chatbot capabilities increased automation rates, allowing human agents to focus on more complex customer issues.",
  heroImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&auto=format&fit=crop",
  excerpt: "How we managed HopSkipDrive's CRM, telephony, and chatbots to improve efficiency and reduce costs.",
  image: "https://images.unsplash.com/photo-1608827856883-3051731846ab?w=800&auto=format&fit=crop",
};

export default hopskipdriveStudy;
