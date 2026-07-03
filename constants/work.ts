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
    text: 'The official website for the Atal Bihari Vajpayee Visapur Botanical Garden, delivered under a government contract — a category where sites are usually slow, dated, and single-language. This one is the opposite: it welcomes visitors in multiple languages through a full i18next localization layer and brings the garden\'s flora to life with choreographed GSAP, Framer Motion, and Lottie animations that stay smooth even on the slow rural connections its visitors actually use. Aggressive image optimization, tight performance budgets, and automated sitemap generation keep it instant to load and easy to find in local search.',
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
    text: 'NotionApps is a production no-code platform that turns Notion databases into polished, responsive web apps — real customers, real revenue, no engineers required. As a product engineer I shipped across the entire acquisition funnel: secure end-user authentication, full internationalization, and dynamic onboarding flows that take a new builder from sign-up to their first live app. I also did the work fast-moving startups usually skip — carving oversized React components into clean state boundaries and untangling state-sync bugs affecting live customer apps — the difference between a product that ships fast and one that ships fast twice.',
    link: 'https://www.notionapps.com/',
    year: '24',
  },
  {
    image: '/work/Namegen/NAMEGEN.webp',
    phone: ['/work/Namegen/portrait.svg', '/work/Namegen/landscape.svg'],
    name: 'namegen',
    color: '#8B79CF',
    text: 'Every business-name generator can spit out names — almost none can tell you which ones you can actually own. NameGen prompts LLaMA models with your industry, keywords, and naming style, then verifies every suggestion against live domain availability across multiple extensions and a trademark search before it reaches the screen — so each result is a name you can register today, not a dead end you discover an hour later. Favorites save for side-by-side comparison, while a config-driven architecture and programmatic SEO pages keep the platform easy to extend and easy to find.',
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
    text: 'Most restaurant websites are a static menu and a phone number. The Barbeque Company got a full commerce platform: customers browse the menu, reserve a table, and pay through an integrated Paytm gateway, then receive automated real-time order updates via event-driven messaging. Staff run the business themselves — menus, media, content — through a headless Strapi CMS exposed over GraphQL, with no developer needed for day-to-day changes. High-resolution food photography flows through automated Cloudinary pipelines, and a strictly-typed Next.js frontend keeps it fast on any device.',
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
    text: "Mute.ly is a Chrome extension that captions any YouTube video or live stream with AI running entirely on your device — no cloud, no API keys, nothing you watch ever leaves your machine. Where virtually every captioning tool ships your audio to a server, Mute.ly runs the full speech-recognition pipeline inside the browser on WebGPU — fast enough to caption live streams as they happen, turning speech into text in ~74ms while making ~25% fewer word errors than Whisper, the industry standard. Regular videos are transcribed ahead of playback and cached, so skipping around never stalls the player. And the captions themselves meet real broadcast standards — 42 characters x 2 lines at a Netflix-grade reading rate — polish that auto-captions don't even attempt.",
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
    text: 'A Game Boy Advance emulator written from scratch in Rust — and where most hobby emulators approximate timing and hope, EGBA models the ARM7TDMI down to per-cycle bus costs and runs the same aging-test ROM Nintendo used to validate real hardware, end to end. It boots the genuine GBA BIOS, passes the full ARMwrestler CPU suite across both ARM and THUMB instruction sets, renders all six background modes, and reproduces the obscure hardware quirks — open-bus reads, BIOS protection — that commercial games secretly depend on and lesser emulators silently get wrong. The emulation core is completely I/O-free and portable to any frontend, with an SDL2 window, terminal debugger, and battery-save persistence built around it.',
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
    text: 'Xhess is a real-time multiplayer chess platform that ditches the flat 2D board every chess site ships for a fully rendered 3D scene — studio lighting, interactive pieces, hand-drawn themes, all inside the browser. And where nearly every chess app imports the same third-party rules library, Xhess runs its own engine written from scratch, shared between frontend and backend through one fully type-safe codebase. Moves, clocks, draw offers, and live chat sync in real time over Socket.IO, while a Redis cache-aside layer serves hot game state in under a millisecond and slashes database costs under load — the same pattern high-traffic gaming backends run on, secured end to end by Firebase Auth and Zod validation.',
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
    text: 'A 2D game engine built on raw OpenGL in Rust — no frameworks, no engine crates, GPU programming from first principles. It does what decades of C++ engines never quite managed: a zero-global-state architecture where every subsystem is explicitly owned, making resource leaks and lifecycle bugs impossible by construction rather than by discipline. On top sit a unified sprite pipeline with custom GLSL shaders, a DOM-style nested UI tree — a web idea rarely seen inside a game engine — smooth zoom-to-cursor camera controls, and high-precision scheduled timing, each proven through standalone playable examples and an automated test suite.',
    tools: ['custom game engine', 'opengl + glsl', 'zero-global ownership', 'dom-style ui'],
    toolIcons: ['/logos/rust.svg'],
    github: 'https://github.com/pranansh-s/rust-gine',
    year: '24',
  },
];
