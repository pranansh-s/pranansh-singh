export type WorkDetail = {
  image: string;
  phone: string[];
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
    name: 'atal bihari vajpayee botanical garden',
    color: '#f2e7c3',
    text: 'The official website for the Atal Bihari Vajpayee Visapur Botanical Garden, designed and delivered as part of a government contract. Built to welcome every visitor, it tells the garden\'s story in multiple languages through a full i18next localization layer and brings its flora to life with choreographed GSAP, Framer Motion, and Lottie animations that stay smooth even on slow connections. Under the hood, aggressive image optimization, tight performance budgets, and automated sitemap generation keep the site instant to load and easy to discover in local search.',
    tools: ['government contract', 'multi-lingual', 'animation-heavy', 'seo-ready'],
    toolIcons: [
      '/logos/react.svg',
      '/logos/nextjs.svg',
      '/logos/framer-motion.svg',
      '/logos/i18next.svg',
      '/logos/tailwindcss.svg',
      '/logos/typescript.svg',
    ],
    github: 'https://github.com/pranansh-s/visapur-botanical-garden',
    link: 'https://visapur-garden.vercel.app/',
    year: '25',
  },
  {
    image: '/work/NotionApps/NOTION.webp',
    phone: ['/work/NotionApps/portrait.svg', '/work/NotionApps/landscape.svg'],
    name: 'notionapps',
    color: '#77bfd0',
    tools: ['no-code platform', 'end-user auth', 'onboarding funnels'],
    toolIcons: ['/logos/react.svg', '/logos/javascript.svg', '/logos/css.svg'],
    text: 'NotionApps is a production no-code platform that turns Notion databases into polished, responsive web apps — no engineers required. Working as a product engineer, I shipped features across the acquisition funnel: secure end-user authentication, full internationalization support, and dynamic onboarding flows that guide new builders to their first live app. I also led the quality-of-life work that keeps a fast-moving product maintainable — carving oversized React components into clean state boundaries and untangling client-side state synchronization bugs affecting live customer apps.',
    link: 'https://www.notionapps.com/',
    year: '24',
  },
  {
    image: '/work/Namegen/NAMEGEN.webp',
    phone: ['/work/Namegen/portrait.svg', '/work/Namegen/landscape.svg'],
    name: 'namegen',
    color: '#8B79CF',
    text: 'A business-name generator that gives founders what they actually need: a name they can own. NameGen prompts LLaMA models to produce brand names tuned by industry, keywords, and naming style, then immediately verifies each suggestion against live domain availability across multiple extensions and a trademark search — so every idea on screen is actionable, dramatically cutting the wait between idea and answer. Favorites can be saved and compared side by side, while a centralized config-driven architecture and programmatic SEO pages keep the platform easy to extend and easy to find.',
    tools: ['ai-assisted', 'domain intelligence', 'trademark search', 'programmatic seo'],
    toolIcons: [
      '/logos/nextjs.svg',
      '/logos/redux.svg',
      '/logos/airtable.svg',
      '/logos/cloudflare.svg',
      '/logos/digitalocean.svg',
    ],
    github: 'https://github.com/pranansh-s/namegen',
    link: 'https://namegen-ten.vercel.app/',
    year: '24',
  },
  {
    image: '/work/The Barbeque Company/BBQ.webp',
    phone: ['/work/The Barbeque Company/portrait.svg', '/work/The Barbeque Company/landscape.svg'],
    name: 'the barbeque company',
    color: '#FB5A35',
    text: 'A full-stack commercial platform for The Barbeque Company, handling everything from browsing the menu and reserving a table to paying for the order. Customers check out through an integrated Paytm payment gateway and receive automated real-time order updates via event-driven messaging, while staff manage menus, media, and content themselves through a headless Strapi CMS exposed over GraphQL. High-resolution food photography is delivered through automated Cloudinary media pipelines, and a strictly-typed Next.js frontend keeps the experience fast and responsive across desktop and mobile.',
    tools: ['e-commerce', 'paytm payments', 'headless cms', 'graphql api'],
    toolIcons: [
      '/logos/nextjs.svg',
      '/logos/material-ui.svg',
      '/logos/nodejs.svg',
      '/logos/cloudinary.svg',
      '/logos/typescript.svg',
    ],
    github: 'https://github.com/pranansh-s/bbq-backup',
    year: '23',
  },
];

export const projects: WorkDetail[] = [
  {
    image: '/work/Mute.ly/MUTELY.webp',
    phone: ['/work/Mute.ly/portrait.webp', '/work/Mute.ly/landscape.webp'],
    name: 'mute.ly',
    color: '#df8115',
    text: 'Mute.ly is a Chrome extension that gives any YouTube video or live stream real-time AI captions generated entirely on your own machine — no cloud, no API keys, nothing you watch ever leaves your device. It runs OpenAI\'s Whisper directly in the browser via WebGPU-accelerated ONNX inference, with a dual-mode pipeline: live streams are captioned the moment someone finishes speaking using Silero voice-activity detection, while regular videos are transcribed ahead of playback in seek-aware chunks so skipping around never stalls. A custom audio-cleanup stage strips hum and background noise before inference, eliminating the hallucinated text that plagues raw Whisper output.',
    tools: ['on-device ai (whisper)', 'webgpu inference', 'voice activity detection', 'seek-aware streaming'],
    toolIcons: ['/logos/typescript.svg', '/logos/nodejs.svg'],
    github: 'https://github.com/pranansh-s/mute.ly',
    year: '26',
  },
  {
    image: '/work/EGBA/EGBA.webp',
    phone: ['/work/EGBA/portrait.webp', '/work/EGBA/landscape.webp'],
    name: 'egba (emulated gameboy advance)',
    color: '#9d77d0',
    text: 'A cycle-accurate Game Boy Advance emulator written from scratch in Rust — faithful enough to boot the real GBA BIOS and watch the Nintendo logo scroll. It models the ARM7TDMI processor down to per-cycle bus timing: dual ARM/THUMB instruction sets passing the full ARMwrestler test suite, the 3-stage pipeline, barrel shifter, and the hardware quirks real games depend on, alongside a scanline PPU rendering all six background modes and DMA-driven stereo audio. A strict four-crate workspace keeps the I/O-free emulation core portable, with an SDL2 frontend, terminal debugger, and battery-save persistence built around it.',
    tools: ['cycle-accurate emulation', 'arm7tdmi cpu', 'pixel perfect ppu', 'built-in debugger'],
    toolIcons: ['/logos/rust.svg', '/logos/sdl2.svg'],
    github: 'https://github.com/pranansh-s/egba',
    year: '26',
  },
  {
    image: '/work/Xhess/XHESS.webp',
    phone: ['/work/Xhess/portrait.webp', '/work/Xhess/landscape.webp'],
    name: 'xhess',
    color: '#bdeb55',
    text: 'Xhess is a real-time multiplayer chess platform where every match plays out on an immersive board, rendered in the browser with React Three Fiber and studio lighting. Underneath, an Express and Socket.IO gateway synchronizes moves, turn clocks, draw offers, and live chat with low latency, while a Redis cache-aside layer in front of Firestore serves hot game state in under a millisecond and dramatically cuts database costs under load. The chess rules themselves are a custom strategy-pattern engine — no third-party chess library — shared with the Next.js frontend through a fully type-safe monorepo secured by Firebase Auth and Zod validation.',
    tools: ['real-time multiplayer', '3d webgl', 'custom chess engine', 'cache-aside redis'],
    toolIcons: [
      '/logos/react.svg',
      '/logos/nextjs.svg',
      '/logos/threejs.svg',
      '/logos/redux.svg',
      '/logos/express.svg',
      '/logos/socket-io.svg',
      '/logos/redis.svg',
      '/logos/docker.svg',
      '/logos/firebase.svg',
      '/logos/zod.svg',
    ],
    github: 'https://github.com/pranansh-s/xhess',
    link: 'https://xhess-web.onrender.com/',
    year: '25',
  },
  {
    image: '/work/Rust-gine/GINE.webp',
    phone: ['/work/Rust-gine/portrait.webp', '/work/Rust-gine/landscape.webp'],
    name: 'rust-gine',
    color: '#77d0b1',
    text: 'A 2D game engine built from the ground up in Rust on OpenGL 3.3 — no frameworks, just raw GPU-accelerated graphics programming. It takes a deliberately explicit approach to architecture: a zero-global-state ownership model where the game manager owns every subsystem, making resource lifecycles deterministic and leak-free by construction. On top sit a unified sprite rendering pipeline with custom GLSL shaders, a DOM-inspired nested UI layout tree, a camera with smooth zoom-to-cursor and drag-panning, and high-precision timing with scheduled task callbacks — all exercised through standalone playable examples and an automated test suite.',
    tools: ['custom game engine', 'opengl + glsl', 'zero-global ownership', 'dom-style ui'],
    toolIcons: ['/logos/rust.svg'],
    github: 'https://github.com/pranansh-s/rust-gine',
    year: '24',
  },
];
