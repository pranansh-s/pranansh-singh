export interface WorkDetail {
  images: string[];
  phone: string[];
  doodleIcons: string[];
  name: string;
  color: string;
  text: string;
  link?: string;
  github?: string;
}

export const work: WorkDetail[] = [
  {
    images: ['./work/Namegen/NAMEGEN.png'],
    phone: ['./work/Namegen/potrait.svg', './work/Namegen/landscape.svg'],
    doodleIcons: ['./work/Namegen/bulb.svg', './work/Namegen/ruler.svg'],
    name: 'namegen',
    color: '#8B79CF',
    text: 'I played a crucial role in creating namegen.io, collaborating with a UI/UX designer. Our aim was a user-friendly platform for generating unique business names. We used advanced algorithms to suggest fitting names aligned with brand identity. I used modern technologies like NextJS, TailwindCSS, Redux, and Typescript for development. I also implemented Affiliate Tracking via Impact and Programmatic SEO for growth. Server-side tech boosted efficiency, making Namegen.io indispensable for entrepreneurs seeking the perfect name.',
    link: 'https://namegen-ten.vercel.app/',
  },
  {
    images: ['./work/The Barbeque Company/BBQ.png'],
    phone: ['./work/The Barbeque Company/potrait.svg', './work/The Barbeque Company/landscape.svg'],
    doodleIcons: ['./work/The Barbeque Company/cutlery.svg', './work/The Barbeque Company/dish.svg'],
    name: 'the barbeque company',
    color: '#FB5A35',
    text: 'I developed and engineered a company website that includes payment integration and automated messaging. To ensure easy content management, I also added a backend Headless CMS. In addition, I was responsible for controlling and managing all the Dev-Ops related to DNS, server hosting, and database management. By doing so, the website is optimized for smooth and efficient functioning on a day-to-day basis.',
    link: 'https://thebbq.company/',
  },
];
