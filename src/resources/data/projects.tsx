export interface ProjectType{
    title: string,
    progress: ('future' | 'current' | 'past')
    liveSite?: string,
    repo?: string,
    image: string,
    buildDate: string,
    summary : string,
    technologies: string[]
};

export const data : ProjectType[] = [
    {
        title: 'Wedding RSVP Application',
        progress: 'future',
        image: 'wedding.png',
        buildDate: 'TBC',
        summary: 'Upcoming project to create a functioning Full-Stack application designed to display wedding venue information and to interface with a custom built API for handling RSVP and menu preference requests.',
        technologies: [
            'JavaScript', 'TypeScript', 'React.js', 'Redux.js', 'Router', 'Node.js', 'Express.js', 'CSS', 'SASS', 'SQL', 'PostgreSQL', 'AWS', 'Git', 'GitHub'
        ]
    },
    {
        title: 'Portfolio Website V2',
        progress: 'current',
        image: 'portv2.png',
        buildDate: 'March 2023',
        summary: 'A complete rebuild of my previous portfolio website with the aim to update the underlying code to modern web-development technologies. Built around the React.js framework, in this project I utilised my recently acquired knowledge of TypeScript and SASS.',
        technologies: [
            'JavaScript', 'TypeScript', 'React.js', 'Router', 'Framer', 'CSS', 'Animation', 'SASS', 'Git', 'GitHub'
        ]
    },
    {
        title: 'E-Commerce Front-End',
        progress: 'past',
        liveSite: 'https://friendsofthethread.netlify.app/',
        repo: 'https://github.com/JakeyBlee/ecommerce-frontend',
        image: 'ecommerce.png',
        buildDate: 'February 2023',
        summary: 'The Front-End component of my Full-Stack E-Commerce Application designed to aid in selling various crafted goods. Built around the React.js library with Redux used to handle state. This project interfaced with its custom built API which is described below.',
        technologies: [
            'JavaScript', 'React.js', 'Redux.js', 'Router', 'HTTP', 'CSS', 'SASS', 'Git', 'GitHub'
        ]
    },
    {
        title: 'E-Commerce RESTful API',
        progress: 'past',
        repo: 'https://github.com/JakeyBlee/ecommerce-backend',
        image: 'backend.png',
        buildDate: 'January 2023',
        summary: 'The Back-End component of my Full-Stack E-Commerce Application which allows for the storage and alteration of data in a PostgreSQL database. The server is built with Express.js which also handles authentication and authorization, and is hosted on an Amazon Web Service EC2 instance.',
        technologies: [
            'JavaScript', 'Node.js', 'Express.js', 'Stripe.js', 'SQL', 'PostgreSQL', 'AWS', 'Git', 'GitHub'
        ]
    },
    {
        title: 'Front-End Reddit Browser',
        progress: 'past',
        liveSite: 'https://browseburn.netlify.app/',
        repo: 'https://github.com/JakeyBlee/reddit-browser',
        image: 'reddit.png',
        buildDate: 'November 2022',
        summary: 'My first project using the React.js and Redux libraries. This Front-End application accesses the Reddit database through the JSON API, filters and formats the results before displaying them in formats that are optimised depending on viewport.',
        technologies: [
            'JavaScript', 'React.js', 'Redux.js', 'Router', 'API', 'JSON', 'CSS', 'Git', 'GitHub'
        ]
    },
    {
        title: 'Portfolio Website V1',
        progress: 'past',
        liveSite: 'https://jakeyblee.github.io/',
        repo: 'https://github.com/JakeyBlee/JakeyBlee.github.io',
        image: 'portv1.png',
        buildDate: 'September 2022',
        summary: 'My first project and the first iteration of my portfolio website. Built using HTML5 and CSS3, with some basic ES6 JavaScript for simple interation. Utilises responsive design for varying viewport sizes.',
        technologies: [
            'HTML', 'CSS', 'JavaScript', 'Functions', 'Formatting', 'DOM', 'Git', 'GitHub'
        ]
    },
];