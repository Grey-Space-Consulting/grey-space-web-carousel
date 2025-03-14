
export type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  image?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechInnovate Inc.",
    quote: "Grey Space transformed our operations with their innovative solutions. Their team's expertise and dedication led to a 40% increase in efficiency within three months.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Operations Director",
    company: "Global Logistics",
    quote: "We've worked with many consultants, but Grey Space truly stands out. Their holistic approach to operations technology has revolutionized our supply chain.",
    rating: 5
  },
  {
    id: 3,
    name: "Jennifer Lopez",
    role: "VP of Manufacturing",
    company: "Industrial Solutions",
    quote: "The implementation team at Grey Space exceeded our expectations. Their attention to detail and understanding of our industry challenges was impressive.",
    rating: 4
  },
  {
    id: 4,
    name: "David Wilson",
    role: "CEO",
    company: "Startup Ventures",
    quote: "As a growing company, we needed scalable operations solutions. Grey Space delivered a custom technology stack that has supported our 300% growth seamlessly.",
    rating: 5
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "Head of Digital",
    company: "Retail Innovations",
    quote: "Grey Space's strategic guidance helped us navigate our digital transformation journey. Their expertise bridged our technology gaps and empowered our team.",
    rating: 5
  }
];
