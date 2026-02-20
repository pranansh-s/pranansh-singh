export type Card = {
  logo: string;
  color: string;
};

const Row1: Card[] = [
  { logo: '/logos/react.svg', color: '61DBFB' },
  { logo: '/logos/tailwindcss.svg', color: 'FFFFFF' },
  { logo: '/logos/nextjs.svg', color: 'FFFFFF' },
  { logo: '/logos/nodejs.svg', color: 'FFFFFF' },
  { logo: '/logos/redux.svg', color: '764ABC' },
  { logo: '/logos/aws.svg', color: 'FFFFFF' },
  { logo: '/logos/cloudinary.svg', color: 'FFFFFF' },
  { logo: '/logos/i18next.svg', color: 'FFFFFF' },
  { logo: '/logos/material-ui.svg', color: 'FFFFFF' },
  { logo: '/logos/firebase.svg', color: '000000' },
  { logo: '/logos/express.svg', color: 'FFFFFF' },
];

const Row2: Card[] = [
  { logo: '/logos/typescript.svg', color: 'FFFFFF' },
  { logo: '/logos/javascript.svg', color: 'FFFFFF' },
  { logo: '/logos/python.svg', color: '000000' },
  { logo: '/logos/sql.svg', color: 'FFFFFF' },
  { logo: '/logos/rust.svg', color: 'FFFFFF' },
  { logo: '/logos/c--.svg', color: '000000' },
  { logo: '/logos/css.svg', color: 'FFFFFF' },
  { logo: '/logos/c.svg', color: '000000' },
];

const Row3: Card[] = [
  { logo: '/logos/mongodb.svg', color: 'FFFFFF' },
  { logo: '/logos/socket-io.svg', color: 'FFFFFF' },
  { logo: '/logos/airtable.svg', color: '000000' },
  { logo: '/logos/webrtc.svg', color: 'FFFFFF' },
  { logo: '/logos/threejs.svg', color: 'FFFFFF' },
  { logo: '/logos/framer-motion.svg', color: '000000' },
  { logo: '/logos/zod.svg', color: '0107AA' },
];

const Row4: Card[] = [
  { logo: '/logos/docker.svg', color: 'FFFFFF' },
  { logo: '/logos/sdl2.svg', color: 'FFFFFF' },
  { logo: '/logos/redis.svg', color: '000000' },
  { logo: '/logos/cloudflare.svg', color: 'FFFFFF' },
  { logo: '/logos/digitalocean.svg', color: 'FFFFFF' },
];

export const RowAll: Card[][] = [[...Row4], [...Row3], [...Row2], [...Row1]];
