export type WorkDetail = {
  image: string;
  phone: string[];
  doodleIcons: string[];
  name: string;
  color: string;
  text: string;
  tools: string[];
  link?: string;
  github?: string;
};

export const work: WorkDetail[] = [
  {
    image: '/work/The Barbeque Company/BBQ.png',
    phone: ['/work/The Barbeque Company/potrait.svg', '/work/The Barbeque Company/landscape.svg'],
    doodleIcons: ['/work/The Barbeque Company/cutlery.svg', '/work/The Barbeque Company/dish.svg'],
    name: 'atal bihari vajpayee botanical garden',
    color: '#FFFBEE',
    text: "Developed as a government contract project, this platform serves as the official, elegant digital presence for the Atal Bihari Vajpayee Visapur Botanical Garden. The website is highly optimized for performance and SEO, offering seamless multi-language translation and a centralized content management approach for easy client updates. It brings the garden's flora, visiting hours, and conservation efforts to life using incredibly smooth, high-quality animations and a responsive, mobile-first design.",
    tools: ['Framer Motion & GSAP', 'Lottie Animations', 'i18next (Localization)', 'Husky', 'Typescript'],
    github: 'https://github.com/pranansh-s/visapur-botanical-garden',
    link: 'https://visapur-garden.vercel.app/',
  },
  {
    image: '/work/The Barbeque Company/BBQ.png',
    phone: ['/work/The Barbeque Company/potrait.svg', '/work/The Barbeque Company/landscape.svg'],
    doodleIcons: ['/work/The Barbeque Company/cutlery.svg', '/work/The Barbeque Company/dish.svg'],
    name: 'notionapps',
    color: '#FB5A35',
    tools: ['Higher-Order Components', 'Behavior Driven Development', 'React.JS', 'Component Optimizations'],
    text: "Engineered key features such as localization, end-user signup, and enhanced user onboarding, contributing to the seamless functionality of NotionApps, a no-code tool for creating apps from Notion sheets. Managed a large-scale codebase by addressing complex bugs, optimizing performance, and implementing UI/UX improvements while adhering to the company's coding standards. Collaborated closely with the co-founder to deliver high-quality, maintainable code that aligned with strategic goals, driving the success of new feature rollouts and ensuring platform stability.",
    link: 'https://www.notionapps.com/',
  },
  {
    image: '/work/Namegen/NAMEGEN.png',
    phone: ['/work/Namegen/potrait.svg', '/work/Namegen/landscape.svg'],
    doodleIcons: ['/work/Namegen/bulb.svg', '/work/Namegen/ruler.svg'],
    name: 'namegen',
    color: '#8B79CF',
    text: 'Namegen is an intelligent, AI-powered web application designed to help entrepreneurs brainstorm and secure the perfect identity for their new business. By simply inputting industry keywords and preferred stylistic directions, the platform leverages large language models to generate creative brand names while simultaneously performing real-time domain availability and basic trademark checks. It also includes features for users to save and compare their favorite names, supported by a highly maintainable, centralized configuration architecture for seamless future localization.',
    tools:
      ['Groq LLaMA', 'Airtable', 'Affiliate Tracking', 'Redux', 'Programmatic SEO', 'Cloudflare', 'DigitalOcean'],
    github: 'https://github.com/pranansh-s/namegen',
    link: 'https://namegen-ten.vercel.app/',
  },
  {
    image: '/work/The Barbeque Company/BBQ.png',
    phone: ['/work/The Barbeque Company/potrait.svg', '/work/The Barbeque Company/landscape.svg'],
    doodleIcons: ['/work/The Barbeque Company/cutlery.svg', '/work/The Barbeque Company/dish.svg'],
    name: 'the barbeque company',
    color: '#FB5A35',
    text: 'This repository houses the full-stack codebase for the Barbeque Company website, serving as a comprehensive architectural backup for a previous client engagement. It demonstrates a clear separation of concerns by splitting the frontend and backend environments, ensuring a maintainable and scalable structure for a commercial restaurant platform. The project highlights my ability to deliver functional, end-to-end business solutions tailored exactly to client specifications while maintaining strict typing across the stack.',
    tools: ['Material UI', 'Strapi (Headless CMS)', 'Paytm Payment', 'GraphQL', 'Cloudinary'],
    link: 'https://github.com/pranansh-s/bbq-backup',
  },
];

export const projects: WorkDetail[] = [
  {
    image: '/work/Namegen/NAMEGEN.png',
    phone: ['/work/Namegen/potrait.svg', '/work/Namegen/landscape.svg'],
    doodleIcons: ['/work/Namegen/bulb.svg', '/work/Namegen/ruler.svg'],
    name: 'xhess',
    color: '#8B79CF',
    text: 'Xhess is a modern, real-time multiplayer chess platform engineered with a focus on high performance, enterprise-grade security, and seamless scalability. Architected as a monorepo, it effortlessly shares types and utilities between the frontend and backend, while incorporating advanced mechanics like strict rate-limiting, secure headers, and a robust caching layer to minimize database latency. Though developed as a proof of concept, it effectively demonstrates a production-ready, containerized architecture complete with beautiful UI interactions and strict, end-to-end type validations.',
    tools: ['High-Order Components'],
    github: 'https://github.com/pranansh-s/xhess',
    link: 'https://xhess-web.onrender.com/',
  },
  {
    image: '/work/The Barbeque Company/BBQ.png',
    phone: ['/work/The Barbeque Company/potrait.svg', '/work/The Barbeque Company/landscape.svg'],
    doodleIcons: ['/work/The Barbeque Company/cutlery.svg', '/work/The Barbeque Company/dish.svg'],
    name: 'egba',
    color: '#FB5A35',
    text: 'EGBA is a modular, cycle-accurate Game Boy Advance emulator suite engineered entirely in Rust to precisely replicate classic gaming hardware. The emulator accurately models the ARMv4T CPU architecture—including the full ARM and THUMB instruction sets, barrel shifter, and pipeline—while managing complex hardware integrations like memory-mapped I/O, PPU graphics rendering, and APU sound generation. Utilizing a library-based architecture with an integrated debugging UI, this project demonstrates a profound understanding of hardware virtualization, CPU instruction execution, and low-level memory management.',
    tools: ['High-Order Components'],
    github: 'https://github.com/pranansh-s/egba',
  },
  {
    image: '/work/The Barbeque Company/BBQ.png',
    phone: ['/work/The Barbeque Company/potrait.svg', '/work/The Barbeque Company/landscape.svg'],
    doodleIcons: ['/work/The Barbeque Company/cutlery.svg', '/work/The Barbeque Company/dish.svg'],
    name: 'rust-gine',
    color: '#FB5A35',
    text: 'Rust-Gine is a custom-built 2D game engine developed from scratch utilizing a modern graphics pipeline to render high-performance 2D environments. Built around a modular Entity-Component System (ECS), the engine features a functional camera system with pan and zoom capabilities, a robust resource manager for textures and shaders, and a highly unique, DOM-inspired UI layout system using Flexbox concepts. This project showcases deep, low-level systems programming capabilities and an advanced understanding of graphics rendering mathematics.',
    tools: ['High-Order Components'],
    github: 'https://github.com/pranansh-s/rust-gine',
  },
];
