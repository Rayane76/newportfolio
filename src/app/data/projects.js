export const projects = [
    {
        slug: "erp",
        title: "ERP - Diar Dzair",
        desc: "ERP system for Diar Dzair Group.",
        longDesc:
            "Diar Dzair ERP is a comprehensive system for managing inventory, invoicing, and product data, designed to streamline operations for the Diar Dzair Group.",
        techs: ["PHP", "Laravel", "Filament", "PosgreSQL"],
        link: "",
        github: "",
        media: [
            { type: "image", src: "/projectInfos/Erp/stock-dashboard.png", alt: "Ekrili homepage preview" },
            { type: "image", src: "/projectInfos/Erp/facturation-dashboard.png", alt: "Ekrili homepage preview" },
            { type: "image", src: "/projectInfos/Erp/stock-vehicules.png", alt: "Ekrili homepage preview" },
            { type: "image", src: "/projectInfos/Erp/factures-table.png", alt: "Ekrili homepage preview" },
            { type: "image", src: "/projectInfos/Erp/facture-blured-black.jpg", alt: "Ekrili homepage preview" },
            { type: "image", src: "/projectInfos/Erp/annonces-black.jpeg", alt: "Ekrili homepage preview" },
            { type: "image", src: "/projectInfos/Erp/annonce-affichage-black.jpeg", alt: "Ekrili homepage preview" },
            { type: "image", src: "/projectInfos/Erp/roles-black.jpeg", alt: "Ekrili homepage preview" },
        ],
    },
    {
        slug: "ekrili",
        title: "Ekrili",
        desc: "Rental website for homes and villas: Find, book, and stay.",
        longDesc:
            "Ekrili is a rental platform for homes and villas with a booking flow, property discovery, and a focus on clear listing presentation.",
        techs: ["NextJs", "ExpressJs", "Material UI", "MongoDB"],
        link: "https://ekrili.dz",
        github: "",
        media: [
            { type: "image", src: "/projectInfos/Ekrili/ekrili.png", alt: "Ekrili homepage preview" },
            { type: "image", src: "/projectInfos/Ekrili/annonce.png", alt: "Ekrili homepage preview" },
        ],
    },
    {
        slug: "aposto-store",
        title: "Aposto store",
        desc: "E-commerce website for Aposto: Clothes brand.",
        longDesc:
            "Aposto store is a clothing e-commerce experience built to present products, categories, and a clean shopping flow for the brand.",
        techs: ["NextJs", "Typescript", "Bootstrap", "Prisma"],
        link: "https://aposto-murex.vercel.app",
        github: "https://github.com/Rayane76/aposto",
        media: [
            { type: "image", src: "/projects/aposto.png", alt: "Aposto store preview" },
            { type: "image", src: "/projectInfos/Aposto/produit.png", alt: "Aposto store preview" },
        ],
    },
    {
        slug: "candy-lokum",
        title: "Candy lokum",
        desc: "E-commerce website for candies.",
        longDesc:
            "Candy lokum is an online candy store built to showcase products, product detail pages, and a purchase-oriented flow.",
        techs: ["NextJs", "Bootstrap", "Mongodb", "Docker"],
        link: "https://candy-lokum.com/",
        github: "",
        media: [
            { type: "image", src: "/projects/candy.png", alt: "Candy lokum preview" },
            { type: "image", src: "/projectInfos/Lokum/candy-page.png", alt: "Candy lokum preview" },
        ],
    },
    {
        slug: "ghack",
        title: "Ghack",
        desc: "Google Developers Group of Algiers hackathon website.",
        longDesc:
            "Ghack is an event website for the GDG Algiers hackathon with event information, visuals, and a landing-page driven experience.",
        techs: ["NextJs", "TailwindCss"],
        link: "https://ghack24.gdgalgiers.com/",
        github: "",
        media: [
            { type: "image", src: "/projects/ghack.png", alt: "Ghack homepage preview" },
        ],
    },
];

export function getProjectBySlug(slug) {
    return projects.find((project) => project.slug === slug);
}