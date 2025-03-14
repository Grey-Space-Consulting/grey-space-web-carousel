
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
    name: "Orlando Pisegna",
    role: "Manager of Care Operations",
    company: "Spring Health",
    quote: "The most impressive and rewarding aspect of working with Grey Space is their ability to quickly understand our operational needs and swiftly put together a tailored solution that meets our end goals. It is a pleasure working with the Grey Space Team.",
    rating: 5
  },
  {
    id: 2,
    name: "Ryan Van de Car",
    role: "Director of Operations",
    company: "NBH Bank",
    quote: "Grey Space has been a tremendous help in the deployment of our CRM systems. Their experience led to great recommendations, faster and less stressful implementation, and they’re very responsive to our post deployment needs. I can’t say enough about the quality of the team!",
    rating: 5
  },
  {
    id: 3,
    name: "Richard Luna",
    role: "Director of Support Opertaions",
    company: "August Smarthome | Masterlock",
    quote: "Grey Space has been a huge help to the company's Customer Support operations. The team is very knowledgeable, easy to work with, and are always making suggestions on best practices. Grey Space is a fantastic company to set your team up for success",
    rating: 5
  },
  {
    id: 4,
    name: "Evan Robinson",
    role: "CTO",
    company: "Jitsu",
    quote: "Jitsu enlisted Grey Space to help us migrate from a homegrown support tool to a real CRM that could keep up with our growing business. Grey Space mapped Zendesk precisely to our needs…Their knowledge of Zendesk runs deep, and we’ve always felt like we could reach out to them with any questions, even well after the projects concluded.",
    rating: 5
  },
  {
    id: 5,
    name: "Rachel Ehrlich",
    role: "Sr. Director of Operations",
    company: "Sweetgreen",
    quote: "We're very satisfied with Grey Space's support! It's been great having everyone and their areas of expertise, and I now prefer asking Grey Space for support because the team is more knowledgeable and there's less back and forth.",
    rating: 5
  },
  {
    id: 6,
    name: "Rob Gordon",
    role: "Director of CRM",
    company: "FurYou",
    quote: "The work Grey Space has done for Fur to date has been outstanding. Exactly the level of response and competence that I was hoping for.",
    rating: 5
  },
  {
    id: 7,
    name: "Erin Garrity",
    role: "Director of Customer Service",
    company: "Prose Beauty",
    quote: "Grey Space has been an key partner in helping to grow my CX team! They're great to work with, super knowledgeable, and thoughtful in their approach. They really understand what we're trying to accomplish and their help has been invaluable!",
    rating: 5
  }
];
