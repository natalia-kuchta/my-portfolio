import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    vue,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    capy,
    blog,
    portfolio,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Capy HTTP Website",
        icon: mobile,
    },
    {
        title: "Three.js Developer",
        icon: backend,
    },
    {
        title: "Creator Blog",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Vue",
        icon: vue,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Web Developer",

        iconBg: "#fe019a",
        date: "March 2020 - October 2024",
        points: [
            "Developing and maintaining web applications using JavaScript and other related technologies.",
            "Built Vue components from Figma designs, integrated with API."

        ],
    },
    {
        title: "Precise Lab Sp. z o.o.",
        iconBg: "#fe019a",
        date:  "May 2020 - January 2023",
        points: [
            "Fronted for projects unexpected poland, arikaso, interview record."
        ],
    },
    {
        title: "Coorganizer of Learn AI Together",


        iconBg: "#fe019a",
        date: "September 2024 - Present",
        points: [
            "Events for 10 participants in Tbilisi, Georgia"

        ],
    },
    {
        title: "GET INTO TECH INCO",


        iconBg: "#fe019a",
        date: "Jan 2022 - Present",
        points: [
         "Academy Course - 5 weeks",
        ],
    },
];

// const testimonials = [
//     {
//         testimonial:
//             "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//         name: "Sara Lee",
//         designation: "CFO",
//         company: "Acme Co",
//         image: "https://randomuser.me/api/portraits/women/4.jpg",
//     },
//     {
//         testimonial:
//             "I've never met a web developer who truly cares about their clients' success like Rick does.",
//         name: "Chris Brown",
//         designation: "COO",
//         company: "DEF Corp",
//         image: "https://randomuser.me/api/portraits/men/5.jpg",
//     },
//     {
//         testimonial:
//             "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//         name: "Lisa Wang",
//         designation: "CTO",
//         company: "456 Enterprises",
//         image: "https://randomuser.me/api/portraits/women/6.jpg",
//     },
// ];

const projects = [
    {
        name: "Capy HTTP",
        description:
            "Welcome to the cozy corner of the internet where capybaras reign supreme! " +
            "Just like the famous cat image repository, our site captures the essence of tranquility and humor, but with a delightful twist—capybaras!",
        tags: [
            {
                name: "astro",
                color: "blue-text-gradient",
            },

            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "python",
                color: "pink-text-gradient",
            },
        ],
        image:capy,
        source_code_link: "https://github.com/natalia-kuchta",
    },
    {
        name: "Blog",
        description:
            " Explore the cosmic realms of new technologies, innovative projects, and hands-on tutorials. With a vibrant, cyber galaxy aesthetic, enjoy a fusion of hacker-nomad vibes, witty humor, and out-of-this-world memes featuring capybaras and programmer cats. Join as!",
        tags: [
            {
                name: "astro",
                color: "#fe019a",
            },

            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: blog,
        source_code_link: "https://github.com/natalia-kuchta",
    },
    {
        name: "Portfolio",
        description:
            "Explore my 3D portfolio featuring captivating visualizations and dynamic animations, showcasing whimsical capybara, vibrant bubble-pink spheres, and computer model. With expertise in animation and a solid programming background, I bring creativity and technical skill together to create engaging and immersive experiences.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "three.js",
                color: "blue-text-gradient",
            },

            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: portfolio,
        source_code_link: "https://github.com/natalia-kuchta",
    },
];

export { services, technologies, experiences, projects };