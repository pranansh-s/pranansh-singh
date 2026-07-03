export type Card = {
  name: string;
  logo: string;
  color: string;
};

const Row1: Card[] = [
  { name: 'React', logo: '/logos/react.svg', color: '000000' },
  { name: 'Tailwind CSS', logo: '/logos/tailwindcss.svg', color: 'FFFFFF' },
  { name: 'Next.js', logo: '/logos/nextjs.svg', color: 'FFFFFF' },
  { name: 'Node.js', logo: '/logos/nodejs.svg', color: 'FFFFFF' },
  { name: 'Redux', logo: '/logos/redux.svg', color: 'FFFFFF' },
  { name: 'AWS', logo: '/logos/aws.svg', color: 'FFFFFF' },
  { name: 'Cloudinary', logo: '/logos/cloudinary.svg', color: 'FFFFFF' },
  { name: 'i18next', logo: '/logos/i18next.svg', color: 'FFFFFF' },
  { name: 'Material UI', logo: '/logos/material-ui.svg', color: 'FFFFFF' },
  { name: 'Firebase', logo: '/logos/firebase.svg', color: '000000' },
  { name: 'Express', logo: '/logos/express.svg', color: 'FFFFFF' },
];

const Row2: Card[] = [
  { name: 'TypeScript', logo: '/logos/typescript.svg', color: 'FFFFFF' },
  { name: 'JavaScript', logo: '/logos/javascript.svg', color: 'FFFFFF' },
  { name: 'Python', logo: '/logos/python.svg', color: '000000' },
  { name: 'SQL', logo: '/logos/sql.svg', color: 'FFFFFF' },
  { name: 'Rust', logo: '/logos/rust.svg', color: 'FFFFFF' },
  { name: 'C/C++', logo: '/logos/c++.svg', color: '000000' },
  { name: 'CSS', logo: '/logos/css.svg', color: 'FFFFFF' },
  { name: 'C#', logo: '/logos/c_sharp.svg', color: '000000' },
];

const Row3: Card[] = [
  { name: 'MongoDB', logo: '/logos/mongodb.svg', color: 'FFFFFF' },
  { name: 'Socket.IO', logo: '/logos/socket-io.svg', color: 'FFFFFF' },
  { name: 'Airtable', logo: '/logos/airtable.svg', color: '000000' },
  { name: 'WebRTC', logo: '/logos/webrtc.svg', color: 'FFFFFF' },
  { name: 'Three.js', logo: '/logos/threejs.svg', color: 'FFFFFF' },
  { name: 'Framer Motion', logo: '/logos/framer-motion.svg', color: '000000' },
  { name: 'Zod', logo: '/logos/zod.svg', color: '0107AA' },
];

const Row4: Card[] = [
  { name: 'Docker', logo: '/logos/docker.svg', color: 'FFFFFF' },
  { name: 'SDL2', logo: '/logos/sdl2.svg', color: 'FFFFFF' },
  { name: 'Redis', logo: '/logos/redis.svg', color: '000000' },
  { name: 'Cloudflare', logo: '/logos/cloudflare.svg', color: 'FFFFFF' },
  { name: 'DigitalOcean', logo: '/logos/digitalocean.svg', color: 'FFFFFF' },
];

export const RowAll: Card[][] = [[...Row4], [...Row3], [...Row2], [...Row1]];
export const RowAllResponsive: Card[][] = [
  [...Row4, ...Row3],
  [...Row2, ...Row1],
];
