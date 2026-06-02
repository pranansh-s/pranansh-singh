export type WorkDetail = {
  image: string;
  phone: string[];
  doodleIcons: string[];
  name: string;
  color: string;
  text: string;
  tools: string[];
  toolIcons: string[];
  link?: string;
  github?: string;
  year: string;
};

export const work: WorkDetail[] = [
  {
    image: '/work/Atal Bihar Vajpayee Botanical Garden/ATAL.webp',
    phone: [
      '/work/Atal Bihar Vajpayee Botanical Garden/portrait.svg',
      '/work/Atal Bihar Vajpayee Botanical Garden/landscape.svg',
    ],
    doodleIcons: [
      '/work/Atal Bihar Vajpayee Botanical Garden/location.svg',
      '/work/Atal Bihar Vajpayee Botanical Garden/calendar.svg',
    ],
    name: 'atal bihari vajpayee botanical garden',
    color: '#f2e7c3',
    text: "Architected and delivered the official digital platform for the Atal Bihari Vajpayee Visapur Botanical Garden as part of a competitive government contract. Engineered a highly accessible, multi-lingual client-side architecture with seamless internationalization (i18next) and optimized performance budgets to ensure instant load times across various network conditions. Implemented dynamic, high-performance visual storytelling utilizing custom GSAP and Framer Motion orchestrations, while establishing robust programmatic SEO pipelines that significantly boosted discoverability and localized search presence.",
    tools: ['Animation-heavy', 'Localization-ready', 'Performance-optimized', 'SEO-driven'],
    toolIcons: ['/logos/react.svg', '/logos/nextjs.svg', '/logos/framer-motion.svg', '/logos/i18next.svg', '/logos/tailwindcss.svg', '/logos/typescript.svg'],
    github: 'https://github.com/pranansh-s/visapur-botanical-garden',
    link: 'https://visapur-garden.vercel.app/',
    year: '25',
  },
  {
    image: '/work/NotionApps/NOTION.webp',
    phone: ['/work/NotionApps/portrait.svg', '/work/NotionApps/landscape.webp'],
    doodleIcons: ['/work/NotionApps/tablet.svg', '/work/NotionApps/file-form.svg'],
    name: 'notionapps',
    color: '#77bfd0',
    tools: ['No-code Platform', 'Component-optimized', 'End-user Onboarding'],
    toolIcons: ['/logos/react.svg', '/logos/javascript.svg', '/logos/css.svg'],
    text: "Architected and engineered key system modules for NotionApps, a production-grade no-code platform that generates responsive web applications directly from Notion databases. Designed and integrated secure end-user authentication mechanisms, robust internationalization systems, and dynamic onboarding funnels to optimize user acquisition pathways. Significantly improved codebase maintainability and UI performance by implementing clean state boundaries, refactoring oversized React components, and debugging complex client-side state synchronization issues in a fast-paced product environment.",
    link: 'https://www.notionapps.com/',
    year: '24',
  },
  {
    image: '/work/Namegen/NAMEGEN.webp',
    phone: ['/work/Namegen/portrait.svg', '/work/Namegen/landscape.svg'],
    doodleIcons: ['/work/Namegen/bulb.svg', '/work/Namegen/ruler.svg'],
    name: 'namegen',
    color: '#8B79CF',
    text: "Built a high-performance business name generation platform that leverages LLM prompting paradigms to generate domain-available brand names in real time. Solved complex API latency issues by parallelizing multi-registrar DNS availability checks and trademark database queries, reducing response times by over 60%. Designed a modular, config-driven state architecture to easily scale feature flags and regional configurations, complete with a persistent user dashboard to compare, filter, and track selected brand identities.",
    tools: ['AI-assisted', 'Programmatic SEO', 'Domain Intelligence', 'Config-driven'],
    toolIcons: ['/logos/nextjs.svg', '/logos/redux.svg', '/logos/airtable.svg', '/logos/cloudflare.svg', '/logos/digitalocean.svg'],
    github: 'https://github.com/pranansh-s/namegen',
    link: 'https://namegen-ten.vercel.app/',
    year: '24',
  },
  {
    image: '/work/The Barbeque Company/BBQ.webp',
    phone: ['/work/The Barbeque Company/portrait.svg', '/work/The Barbeque Company/landscape.svg'],
    doodleIcons: ['/work/The Barbeque Company/cutlery.svg', '/work/The Barbeque Company/dish.svg'],
    name: 'the barbeque company',
    color: '#FB5A35',
    text: "Developed and deployed a robust full-stack e-commerce and reservation platform for a commercial hospitality brand, utilizing a modern headless CMS architecture for dynamic content distribution. Engineered a strictly-typed, scalable backend system with a clean separation of concerns, providing high availability for reservation pipelines and instant menu synchronization. Handled high-resolution asset delivery and loading optimization through automated media pipelines, driving a seamless and highly responsive user experience across desktop and mobile devices.",
    tools: ['CMS-driven', 'E-Commerce Integration', 'GraphQL API'],
    toolIcons: ['/logos/nextjs.svg', '/logos/material-ui.svg', '/logos/nodejs.svg', '/logos/cloudinary.svg', '/logos/typescript.svg'],
    github: 'https://github.com/pranansh-s/bbq-backup',
    year: '23',
  },
];

export const projects: WorkDetail[] = [
  {
    image: '/work/Mute.ly/MUTELY.webp',
    phone: ['/work/Mute.ly/portrait.webp', '/work/Mute.ly/landscape.webp'],
    doodleIcons: ['/work/Mute.ly/mute.svg', '/work/Mute.ly/youtube.svg'],
    name: 'mute.ly',
    color: '#df8115',
    text: "Mute.ly is a high-performance Chrome extension that delivers secure, 100% local real-time YouTube captions using browser-side WebAssembly AI inference. Engineered with a specialized dual-mode architecture, it captures and transcribes JIT live streams using low-latency Voice Activity Detection (Silero VAD) alongside an Ahead-of-Time, seek-aware streaming pipeline for VODs powered by a local Node.js proxy server. The system features a sophisticated, telephony-grade audio DSP preprocessor utilizing second-order Butterworth high-pass/low-pass filters and dynamic gain normalization to aggressively filter room hum and static hiss, completely eliminating noise-induced hallucinations in the underlying Whisper model while preserving frame-accurate visual sync.",
    tools: ['Local AI (Whisper)', 'Biquad DSP / VAD', 'Manifest V3 Offscreen', 'Seek-Aware Streaming'],
    toolIcons: ['/logos/typescript.svg', '/logos/nodejs.svg', '/logos/express.svg'],
    github: 'https://github.com/pranansh-s/mute.ly',
    year: '26',
  },
  {
    image: '/work/EGBA/EGBA.webp',
    phone: ['/work/EGBA/portrait.webp', '/work/EGBA/landscape.webp'],
    doodleIcons: ['/work/EGBA/chip.svg', '/work/EGBA/puzzle.svg'],
    name: 'egba (emulated gameboy advance)',
    color: '#9d77d0',
    text: "Designed and built a modular, cycle-accurate Game Boy Advance emulator in Rust, modeling the ARMv4T CPU architecture including the dual ARM/THUMB instruction states, barrel shifter, and 3-stage execution pipeline. Solved complex synchronization and performance challenges by designing cache-friendly memory-mapped I/O, cycle-accurate CPU timings, and highly optimized PPU scanline graphics rendering. Utilizing a decoupled core library architecture with an integrated interactive debugging interface, the project showcases rigorous low-level systems engineering, bitwise hardware virtualization, and memory-safe resource optimization.",
    tools: ['Hardware Virtualization', 'CPU Modeling (ARMv4T)', 'Memory-safe', 'Emulator Tooling'],
    toolIcons: ['/logos/rust.svg', '/logos/sdl2.svg'],
    github: 'https://github.com/pranansh-s/egba',
    year: '26',
  },
  {
    image: '/work/Xhess/XHESS.webp',
    phone: ['/work/Xhess/portrait.webp', '/work/Xhess/landscape.webp'],
    doodleIcons: ['/work/Xhess/server.svg', '/work/Xhess/unbox.svg'],
    name: 'xhess',
    color: '#bdeb55',
    text: "Xhess is a premium, real-time multiplayer chess platform combining an immersive 3D WebGL interface with a highly scalable, containerized cloud backend. Designed as a high-traffic proof-of-concept, it pairs fluid browser animations and a custom chess engine with a low-latency socket architecture and smart database caching—slashing cloud database costs by 90% while guaranteeing sub-millisecond gameplay synchronization. It is a complete, production-grade showcase of modern full-stack engineering, real-time scalability, and visual wow-factor.",
    tools: ['Real-time Multiplayer', 'Containerized Architecture', 'Event-driven'],
    toolIcons: ['/logos/react.svg', '/logos/threejs.svg', '/logos/redux.svg', '/logos/express.svg', '/logos/socket-io.svg', '/logos/redis.svg', '/logos/docker.svg', '/logos/firebase.svg', '/logos/zod.svg'],
    github: 'https://github.com/pranansh-s/xhess',
    link: 'https://xhess-web.onrender.com/',
    year: '25',
  },
  {
    image: '/work/Rust-gine/GINE.webp',
    phone: ['/work/Rust-gine/portrait.webp', '/work/Rust-gine/landscape.webp'],
    doodleIcons: ['/work/Rust-gine/trophy.svg', '/work/Rust-gine/paint-bucket.svg'],
    name: 'rust-gine',
    color: '#77d0b1',
    text: "Engineered a custom, high-performance 2D game engine in Rust from the ground up, utilizing modern OpenGL/GLFW graphics pipelines for GPU-accelerated rendering. Designed a cache-friendly Entity-Component-System (ECS) architecture to achieve optimal data locality and CPU cache utilization, allowing the simulation of thousands of dynamic entities. Developed a custom, math-driven asset management system for textures and compiled shaders, alongside a highly creative, custom Flexbox-inspired DOM layout engine that handles responsive, nested UI positioning mathematically in real time.",
    tools: ['ECS Architecture', 'GPU-accelerated', 'Asset Pipeline', 'Data-oriented'],
    toolIcons: ['/logos/rust.svg'],
    github: 'https://github.com/pranansh-s/rust-gine',
    year: '24',
  },
];
