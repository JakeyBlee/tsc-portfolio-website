export interface Qualification{
    type: 'degree' | 'cert' | 'course' | 'other',
    title: string,
    organization: string,
    image: string,
    date: string,
    summary : string,
    certificate?: string
};

export const data : Qualification[] = [
    {
        type: 'degree',
        title: 'MBBCh Medicine',
        organization: 'Cardiff University',
        image: 'cardiff.png',
        date: 'July 2019',
        summary: "Five year undergraduate degree in Medicine at Cardiff University Medical School."
    },
    {
        type: 'degree',
        title: 'iBSc Medical Education',
        organization: 'Cardiff University',
        image: 'cardiff.png',
        date: 'July 2017',
        summary: "Single year intercalated bachelor's degree in Medical Education."
    },
    {
        type: 'cert',
        title: 'IBM Full Stack Software Developer',
        organization: 'Coursera',
        image: 'coursera.png',
        date: 'May 2023',
        summary: 'This cerfication comprises of 12 online courses covering various Application Development and Cloud technologies. Topics include HTML, CSS, JavaScript, GitHub, Node.js, React, Cloud Native practices, DevOps, CI/CD, Containers, Docker, Kubernetes, OpenShift, Python programming, Databases, SQL, NoSQL, Django ORM, Bootstrap, Application Security, Microservices, Serverless computing, and more.',
        certificate: 'ibm.pdf'
    },
    {
        type: 'cert',
        title: 'Full-Stack Engineer',
        organization: 'Codecademy',
        image: 'codecademy.png',
        date: 'March 2023',
        summary: 'HTML, CSS, JavaScript, Git & GitHub, React, Redux, Node.js, Express.js, SQL, PostgreSQL, Web Security, Data Structures, Algorithms.',
        certificate: 'fullstack.pdf'
    },
    {
        type: 'cert',
        title: 'Front-End Engineer',
        organization: 'Codecademy',
        image: 'codecademy.png',
        date: 'March 2023',
        summary: 'HTML, CSS, JavaScript, Git & GitHub, Web Design, React, Redux, Build Tools, Data Structures, Algorithms.',
        certificate: 'frontend.pdf'
    },
    {
        type: 'cert',
        title: 'Back-End Engineer',
        organization: 'Codecademy',
        image: 'codecademy.png',
        date: 'March 2023',
        summary: 'HTML, CSS, JavaScript, Node.js, Express.js, SQL, PostgreSQL, Web Security, Software Infrastructure & Scalability, Data Structures, Algorithms.',
        certificate: 'backend.pdf'
    },
    {
        type: 'cert',
        title: 'Learn TypeScript',
        organization: 'Codecademy',
        image: 'codecademy.png',
        date: 'March 2023',
        summary: "Completed all material on the 'Learn TypeScript' course on Codecademy platform.",
        certificate: 'typescript.pdf'
    },
    {
        type: 'cert',
        title: 'Learn SASS',
        organization: 'Codecademy',
        image: 'codecademy.png',
        date: 'March 2023',
        summary: "Completed all material on the 'Learn SASS' course on Codecademy platform.",
        certificate: 'sass.pdf'
    },
    {
        type: 'other',
        title: 'A Level Qualifications',
        organization: 'KEFW Five Ways School',
        image: 'school.png',
        date: 'July 2013',
        summary: 'Mathematics: A, Biology: A*, Chemistry: A, Physics: A'
    },
    {
        type: 'other',
        title: 'GCSE Qualifications',
        organization: 'KEFW Five Ways School',
        image: 'school.png',
        date: 'July 2011',
        summary: 'Scored top in the country for my academic year with 18.5 A* equivalents.'
    },
];