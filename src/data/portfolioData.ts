
export interface PortfolioItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  description: {
    challenge: string;
    execution: string;
    outcome: string;
    stats: {
      value: string;
      label: string;
    }[];
  };
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  image: string;
  quote: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "NVIDIA AI EVENT",
    subtitle: "TOP 5 CITIES INDIA",
    image: "/lovable-uploads/a1dace14-a760-40df-b1a0-4c1866550145.png",
    description: {
      challenge: "NVIDIA tasked us with an exciting challenge: to host an AI-focused event with creators from five major Indian cities, showcasing the power of their 40 Series RTX GPUs.",
      execution: "We carefully crafted an engaging experience featuring cutting-edge AI tools like Stable Diffusion, DLSS, and ChatRTX. From venue selection to flawless event execution, every detail was meticulously managed.",
      outcome: "The outcome was a dynamic and inspiring showcase that earned a highly positive response from creators and attendees alike.",
      stats: [
        { value: "555+", label: "5 STORE FOOTFALL" },
        { value: "60+", label: "AI PC SALE" }
      ]
    }
  },
  {
    id: 2,
    title: "MSI PRODUCT LAUNCH",
    subtitle: "NEW DELHI",
    image: "/lovable-uploads/0e63d387-d7a6-4164-a919-fbdfcc02d8f2.png",
    description: {
      challenge: "Team MSI approached us with a crucial task: executing a milestone event in New Delhi & Mumbai, where they unveiled their latest lineup of AI-Ready laptops.",
      execution: "We rose to the challenge by ensuring the best location selection, flawless event management and expert coverage of every aspect of the launch.",
      outcome: "The product launch was a tremendous success, resulting in significant media coverage and strong consumer interest.",
      stats: []
    }
  },
  {
    id: 3,
    title: "OS INVITATIONAL S1",
    subtitle: "BGMI ONLINE EVENT",
    image: "/lovable-uploads/20657afc-0b07-40ca-84ba-ac8ee1b6e6f9.png",
    description: {
      challenge: "With the rapid growth of esports and gaming in India, we took on the exciting task of organizing the AMD Presents OS Invitational Series, featuring top teams like Soul, Godlike, Orangutan and other top teams across the country.",
      execution: "Our expert execution ensured the tournaments were a major hit, attracting huge viewership and engagement.",
      outcome: "This success not only showcased the best in gaming but also delivered maximum coverage for our partner brands.",
      stats: [
        { value: "25 MILLION+", label: "ENGAGEMENT" },
        { value: "5 MILLION+", label: "VIEWERSHIP" }
      ]
    }
  },
  {
    id: 4,
    title: "PHYSICS WALLAH",
    subtitle: "VIDYAPEETH HYDERABAD",
    image: "/lovable-uploads/6860608e-97b8-4651-a55d-1edc9f7b8767.png",
    description: {
      challenge: "With only 2-3 days notice, our team at Omega Slayers was tasked with organizing a large-scale event in Hyderabad for Physics Wallah's \"Meet Up with Alakh Sir.\"",
      execution: "Despite the tight timeline, we flawlessly managed every aspect from stage setup to security ensuring a seamless experience making the event resounding success.",
      outcome: "The event was a tremendous success with outstanding attendance and engagement.",
      stats: [
        { value: "1500+", label: "ATTENDEES" },
        { value: "3 DAYS", label: "OF TURNAROUND TIME" }
      ]
    }
  },
  {
    id: 5,
    title: "PROJECT SYNERGY",
    subtitle: "NEW DELHI",
    image: "/lovable-uploads/82c3ceb0-cd73-4bd2-82ea-993eedbb44b2.png",
    description: {
      challenge: "We were tasked with organizing a workshop and demonstration area at a prestigious college in New Delhi.",
      execution: "Our team set up an engaging and interactive demonstration area that attracted significant student interest.",
      outcome: "The demonstration area was consistently filled with students, indicating a strong and sustained interest throughout the entire event.",
      stats: [
        { value: "1500+", label: "DEMO AREA FOOTFALL" },
        { value: "200+", label: "WORKSHOP FOOTFALL" }
      ]
    }
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "VIKASH HISARIYA",
    position: "M.D of Vishal Peperipheral",
    image: "/lovable-uploads/dbbf4564-5360-46d4-bd02-8a88e5bce41a.png",
    quote: "I am glad to have Omega Slayers as my marketing agency. Very professional and result driven team. Great hold on online and offline marketing. Omega Slayers understands the unique challenges of our industry and consistently delivers results that exceed our expectations. We're grateful for their support and look forward to continuing our successful partnership."
  },
  {
    id: 2,
    name: "HARSH VARDHAN PRABHU",
    position: "Marketing Manager at MSI INDIA",
    image: "/lovable-uploads/6e954a15-4e3e-4d4e-b5b0-91323ccbcd76.png",
    quote: "We've been working with Omega Slayers for our digital marketing needs, and they've been exceptional. Their tailored approach to promoting our gaming products has been incredibly effective, driving sales and brand awareness. Omega Slayers doesn't just execute marketing campaigns—they truly understand the gaming industry and leverage their expertise to connect with our target audience authentically."
  }
];
