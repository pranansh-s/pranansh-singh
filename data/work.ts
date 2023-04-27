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
        text: "work for the barbeque company, made website uwuw uwuwu, some text about that explain strapi wowie and stuff. work for the barbeque company, made website uwuw uwuwu, some text about that explain strapi wowie and stuff. work for the barbeque company, made website uwuw uwuwu, some text about that explain strapi wowie and stuff. work for the barbeque company, made website uwuw uwuwu, some text about that explain strapi wowie and stuff.",
        link: "https://thebbq.company/",
    },
    {
        images: ["./work/Eventstry/EVENTSTRY.png"],
        phone: ["./work/Eventstry/potrait.svg", "./work/Eventstry/landscape.svg"],
        doodleIcons: ["./work/Eventstry/balloon.svg", "./work/Eventstry/gift.svg"],
        name: "eventstry",
        color: "#FF80C1",
        text: "work for the barbeque company, made website uwuw uwuwu, some text about that explain strapi wowie and stuff. work for the barbeque company, made website uwuw uwuwu, some text about that explain strapi wowie and stuff. work for the barbeque company, made website uwuw uwuwu, some text about that explain strapi wowie and stuff. work for the barbeque company, made website uwuw uwuwu, some text about that explain strapi wowie and stuff.",
        link: "https://www.eventstry.com/",
    },
    {
        images: ["./work/Pixelatd/PIXELATD.png"],
        phone: ["./work/Pixelatd/potrait.svg", "./work/Pixelatd/landscape.svg"],
        doodleIcons: ["./work/Pixelatd/movie clapper.svg", "./work/Pixelatd/camera.svg"],
        name: "pixelatd",
        color: "#0E0F1B",
        text: "work for the barbeque company, made website uwuw uwuwu, some text about that explain strapi wowie and stuff. work for the barbeque company, made website uwuw uwuwu, some text about that explain strapi wowie and stuff. work for the barbeque company, made website uwuw uwuwu, some text about that explain strapi wowie and stuff. work for the barbeque company, made website uwuw uwuwu, some text about that explain strapi wowie and stuff.",
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