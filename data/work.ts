export interface WorkDetail {
    images: string[],
    phone: string[],
    doodleIcons: string[],
    name: string,
    color: string,
    text: string,
    link?: string,
    github?: string

}

export const work: WorkDetail[] = [
    {
        images: ["./work/The Barbeque Company/BBQ.png"],
        phone: ["./work/The Barbeque Company/potrait.svg", "./work/The Barbeque Company/landscape.svg"],
        doodleIcons: ["./work/The Barbeque Company/cutlery.svg", "./work/The Barbeque Company/dish.svg"],
        name: "the barbeque company",
        color: "#FB5A35",
        text: "I developed and engineered a company website that includes payment integration and automated messaging. To ensure easy content management, I also added a backend Headless CMS. In addition, I was responsible for controlling and managing all the Dev-Ops related to DNS, server hosting, and database management. By doing so, the website is optimized for smooth and efficient functioning on a day-to-day basis.",
        link: "https://thebbq.company/",
    },
    {
        images: ["./work/Eventstry/EVENTSTRY.png"],
        phone: ["./work/Eventstry/potrait.svg", "./work/Eventstry/landscape.svg"],
        doodleIcons: ["./work/Eventstry/balloon.svg", "./work/Eventstry/gift.svg"],
        name: "eventstry",
        color: "#FF80C1",
        text: "As a Frontend Developer at Appringer, I designed and developed a dynamic website for the startup Eventstry, utilizing API integration and user management to create an intuitive and engaging user experience. Working alongside a talented team, I successfully helped the client establish their online presence, further refining my skills in frontend development and gaining valuable experience working with startups. I look forward to taking on new challenges and continuing to grow as a developer in the future.",
        link: "https://www.eventstry.com/",
    },
    {
        images: ["./work/Pixelatd/PIXELATD.png"],
        phone: ["./work/Pixelatd/potrait.svg", "./work/Pixelatd/landscape.svg"],
        doodleIcons: ["./work/Pixelatd/movie clapper.svg", "./work/Pixelatd/camera.svg"],
        name: "pixelatd",
        color: "#0E0F1B",
        text: "Throughout the project, I utilized my expertise in web development and API integration to create an engaging and interactive game that provides users with a fun and exciting experience. This project not only demonstrates my proficiency in these areas but also showcases my passion for creating unique and dynamic applications that utilize cutting-edge technologies. Overall, I am thrilled to have developed this project and am excited to continue pushing the boundaries of what is possible in web development.",
        link: "https://pixelatd.vercel.app/",
    },
    // {
    //     images: ["./work/Skookshie/EVENTSTRY.png"],
    //     phone: ["./work/Skookshie/potrait.svg", "./work/Skookshie/landscape.svg"],
    //     doodleIcons: ["./work/Skookshie/balloon.svg", "./work/Skookshie/gift.svg"],
    //     name: "skookshie",
    //     color: "#FF80C1",
    //     text: "work for the barbeque company, made website uwuw uwuwu, some text about that explain strapi wowie and stuff. work for the barbeque company, made website uwuw uwuwu, some text about that explain strapi wowie and stuff. work for the barbeque company, made website uwuw uwuwu, some text about that explain strapi wowie and stuff. work for the barbeque company, made website uwuw uwuwu, some text about that explain strapi wowie and stuff.",
    //     link: "https://skookshie.vercel.app/",
    // },
]