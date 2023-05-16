import {
    // tech
    javascript,
    typescript,
    java,
    cs,
    cpp,
    html,
    css,
    reactjs,
    vuejs,
    nodejs,
    selenium,
    mongodb,
    aws,
    jira,
    git,
    docker,
    kubernetes,
    // timeline
    work,
    school,
    star,
    // projects
    parcade,
    trailblazer,
    shoppe,
    DSLmio,
    // services
    frontend,
    backend,
    devops,
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
        title: "Frontend",
        icon: frontend,
        text: "I love creating engaging and responsive user interfaces using HTML, CSS, and JavaScript.",
    },
    {
        title: "Backend",
        icon: backend,
        text: "I specialize in creating scalable and performant server-side applications and RESTful APIs using Node.js and Express.",
    },
    {
        title: "DevOps",
        icon: devops,
        text: "I have expertise in deploying, and maintaining cloud-based infrastructure using AWS services and bitbucket pipelines.",
    },
];

const technologies = [
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "C#",
        icon: cs,
    },
    {
        name: "C++",
        icon: cpp,
    },
    {
        name: "HTML",
        icon: html,
    },
    {
        name: "CSS",
        icon: css,
    },
    {
        name: "React",
        icon: reactjs,
    },
    {
        name: "Vue",
        icon: vuejs,
    },
    {
        name: "Node",
        icon: nodejs,
    },
    {
        name: "Selenium",
        icon: selenium,
    },
    {
        name: "Mongo",
        icon: mongodb,
    },
    {
        name: "AWS",
        icon: aws,
    },
    {
        name: "Jira",
        icon: jira,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Docker",
        icon: docker,
    },
    {
        name: "Kubernetes",
        icon: kubernetes,
    },
];

const experiences = [
    {
        title: "Junior Software Engineer",
        company_name: "Highmark Interactive",
        icon: work,
        iconBg: "#809bce",
        date: "Nov 2022 - May 2023",
        text: "Collaborated with the team at Highmark to identify issues with their development processes and identify possible solutions. Subsequently develop various scripts to automate development for new-hires, and implement bitbucket pipelines on various application to automate build, test, and deployment operations.",
        points: ["Back-End (PHP)", "Devops (Bitbucket Pipeline, AWS, Bash)"],
    },
    {
        title: "Software Engineer",
        company_name: "National Center for Audiology",
        icon: work,
        iconBg: "#809bce",
        date: "May 2022 - Sept 2022",
        text: "Experienced a wide breadth of software fields by provisioning a kubernetes cluster, developing a full-stack application from scratch, maintaining current applications, and hosting/maintaining various applications on kubernetes.",
        points: [
            "Front-End (User Experience, UI Design)",
            "Back-End (RESTful APIs, Database Management)",
            "Testing and Maintenance",
            "Devops (Docker, Kubernetes)",
        ],
    },
    {
        title: "Software Engineering Graduate",
        company_name: "Western University",
        icon: school,
        iconBg: "#eac4d5",
        date: "Sept 2019 - April 2023",
        text: "",
        points: [
            "Graduated with a Bachelors of Engineering Science in Software Engineering.",
            "Member of Western AI, Rocketry, Hyperloop, and Founders Network clubs.",
            "Finished with a 3.8 GPA.",
        ],
    },
    {
        title: "",
        company_name: "",
        icon: star,
        iconBg: "#eac4d5",
        text: "",
        date: "",
        points: [],
    },
];

const testimonials = [];

const projects = [
    {
        name: "Parcade",
        description:
            "Web-based platform that allows users to host, book, and manage home-owned driveway parking spots, providing a convenient and efficient solution for parking needs.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "NodeJS",
                color: "green-text-gradient",
            },
            {
                name: "AWS",
                color: "pink-text-gradient",
            },
            {
                name: "Stripe",
                color: "purple-text-gradient",
            },
        ],
        image: parcade,
        source_code_link: "https://github.com/jmutton2/parcade",
        active_site_link: "",
    },
    {
        name: "Trailblazer",
        description:
            "An interactive single-page application demonstrating various pathfinding algorithms on a dynamic playground.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: trailblazer,
        source_code_link: "https://github.com/jmutton2/trailblazer",
        active_site_link: "https://trailblazer.jacobmutton.tech",
    },
    {
        name: "Hearing Aid Calibration Test App",
        description:
            "A reliable and comprehensive test application for hearing aid calibration verification, embedded with data collection for improved research.",
        tags: [
            {
                name: "Rust",
                color: "blue-text-gradient",
            },
            {
                name: "MongoDB",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: DSLmio,
        source_code_link: "",
        active_site_link: "",
    },
    {
        name: "Shoppe",
        description:
            "A responsive and user-friendly web app based on pre-made designs, which leverages a shoe e-commerce API to fetch and display dynamic data.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: shoppe,
        source_code_link: "https://github.com/jmutton2/shoppe",
        active_site_link: "https://shoppe.jacobmutton.tech",
    },
];

export { services, technologies, experiences, projects, testimonials };
