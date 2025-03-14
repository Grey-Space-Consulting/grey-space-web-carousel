
import React from "react";
import { Clock, DollarSign, Users, MessageSquare, BarChart } from "lucide-react";
import type { DetailedCaseStudy } from "../types";

const hellotechStudy: DetailedCaseStudy = {
  id: "hellotech",
  title: "Accelerated CRM Migration for HelloTech by Latch",
  category: "Customer Support",
  excerpt: "Completed a Kustomer to Gladly migration in under 3 weeks instead of the typical 3 months, with significant cost savings.",
  image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070",
  client: "HelloTech by Latch",
  clientLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1974",
  industry: "Technology Services",
  timeframe: "3 weeks",
  results: "Nearly $40k in cost savings",
  challenge: "Following Latch's acquisition of HelloTech, they needed to migrate their customer support platform from Kustomer to Gladly. This type of migration typically requires 3 months of work and significant investment in professional services. They needed a faster, more cost-effective solution without compromising quality.",
  approach: "Our team developed a comprehensive migration strategy that prioritized speed while maintaining data integrity. We worked closely with both the HelloTech and Latch teams to understand their unique workflows and customer support needs, then customized the migration process accordingly.",
  keyPoints: [
    {
      icon: <Clock className="text-primary" />,
      title: "Accelerated Timeline",
      description: "Completed a 3-month project in under 3 weeks through efficient planning and execution."
    },
    {
      icon: <Users className="text-primary" />,
      title: "Team Restructuring",
      description: "Provided guidance on reorganizing support teams to optimize the new platform's capabilities."
    },
    {
      icon: <MessageSquare className="text-primary" />,
      title: "Reduced Wait Times",
      description: "Implemented solutions that significantly reduced both phone and chat wait times."
    },
    {
      icon: <BarChart className="text-primary" />,
      title: "Enhanced Reporting",
      description: "Deployed advanced analytics and reporting tools to provide better insights into customer support operations."
    },
    {
      icon: <DollarSign className="text-primary" />,
      title: "Cost Savings",
      description: "Delivered the migration at nearly $40k less than Gladly's professional services quote."
    }
  ],
  resultsDetails: "The migration was completed in less than 3 weeks, compared to the industry standard of 3 months. This accelerated timeline allowed HelloTech to quickly leverage Gladly's advanced features while minimizing disruption to their customer support operations. The project resulted in reduced wait times for both phone and chat support, improved reporting capabilities, and nearly $40,000 in cost savings compared to using Gladly's professional services. Additionally, our team provided valuable guidance on restructuring support teams to better align with the new platform's capabilities.",
  heroImage: "https://images.unsplash.com/photo-1581092921461-39b9c6564228?q=80&w=2070"
};

export default hellotechStudy;
