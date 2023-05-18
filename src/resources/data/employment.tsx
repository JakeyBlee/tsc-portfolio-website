export interface Employment{
    title: string,
    organization: string,
    dateFrom: string,
    dateTo: string,
    summary : string,
    description?: string[],
    skills: string[],
    image: string
};

export const data : Employment[] = [
    {
        title: 'Software Developer',
        organization: 'GoodGrowth',
        dateFrom: 'June 2023',
        dateTo: 'Current',
        summary: 'Working with the Development team based in Birmingham, I help to innovate and build world-class customer journeys on legacy systems at breakneck speed. Serving a multitude of global brands, we turn digital failure into commercial success. We capture growth using data science, insight and creativity.',
        skills: [
            'JavaScript', 'TypeScript', 'React.js', 'Cascading Style Sheets (CSS)', 'SASS', 'Teamwork', 'Leadership', 'Communication', 'Git', 'GitHub', 'E-Commerce', 'Innovation', 'Analytics'
        ],
        image: 'goodgrowth.png'
    },
    {
        title: 'Trainee Developer',
        organization: 'Self-Employed',
        dateFrom: 'July 2022',
        dateTo: 'May 2023',
        summary: '0-1 years experience in a variety of Full Stack technologies, mainly focussed around the PERN stack. Throughout this time I have worked on front end projects such as portfolio websites and mock social media browsers, to full stack deployments of cloud hosted e-commerce applications. I have worked with SQL, Node.js, Express.js, React.js, and have (limited) experience with AWS cloud services.',
        description:[
            `Though not strictly employment, over the past 8 months I have been reliably dedicating three full days per week developing my own skillset in software development, investing more time in this endeavour than in my paid employment.`,
            `Over this time I have built a number of applications using the PERN software stack (PostgreSQL, Express.js, React.js, Node.js). My main expertise is in JavaScript ES6 / TypeScript but I also have experience in CSS / SASS and SQL. I am also open to learn additional languages, particularly Python and MQL.`,
            `My first project was a simple portfolio website written in HTML and CSS with minimal JavaScript. From here I spent a lot of time working with the React.js framework and its more specific packages such as Redux state management. Using this I built a mock Reddit browser utilising the Reddit API.`,
            `Following this I began working closely with Node.js, with particular attention to the Express.js library. I also began learning SQL and relational database structure with the goal to build a RESTful API to serve as the backend to a full-stack e-commerce application I was working on. The front-end of this project was once again written in React.js, improving on the work from my previous task.`,
            `Recently I have been building on my core JavaScript knowledge by learning TypeScript, and have been also learning SASS to improve the readability and maintainability of my CSS. My current portfolio website rebuild project utilises both of these languages and should be deployed in the coming weeks.`,
            `I have some limited exposure to Amazon Web Services as my e-commerce application is hosted on three of their platforms; the PostgreSQL database uses their RDS platform and the back-end is hosted on an EC2 instance. I also utilise an S3 bucket for image storage. I am very interested in completing a professional AWS certification in the future.`,
            `Alongside all of the above projects I have worked closely with version-control software Git and all of my code repositories are available on my GitHub page.`
            ],
        skills: [
            'JavaScript', 'TypeScript', 'React.js', 'Redux.js', 'Node.js', 'Express.js', 'Cascading Style Sheets (CSS)', 'SASS', 'SQL', 'PostgreSQL', 'Amazon Web Services (AWS)', 'Git', 'GitHub'
        ],
        image: 'self-employed.png'
    },
    {
        title: 'Medical Doctor',
        organization: 'NHS England',
        dateFrom: 'Aug 2019',
        dateTo: 'May 2023',
        summary: '3+ years professional experience working as a medical doctor in a variety of roles within the NHS. These roles span both primary (community) medicine and secondary (hospital) placements. I have worked in Renal Medicine, General and Orthopaedic surgery, Paediatrics and General Practice. I have spent much of this time in large, diverse teams and once senior acted as a mentor to more junior colleagues.',
        description:[
            `Since graduating Cardiff Medical School I have worked at Broomfield Hospital in a variety of medical and surgical specialties. During my first two years I was a Foundation Trainee rotating through Renal Medicine, General Surgery, General Practice, Orthopaedics and Paediatrics, but during the COVID pandemic was often required to give support wherever needed.`,
            `Throughout my time in both the hospital and General Practice setting I have worked closely in large teams with a multitude of different people from diverse backgrounds. The nature of the training programme means that rotating around different working environments is common which has resulted in me being able to quickly adapt and learn new skills to fit a number largely varied roles. I am a clear and effective communicator and a key part of this job is making sure patients can understand complex medical topics whilst having difficult but empathetic discussions about their sensitivities.`,
            `Following completion of my training I worked as a locum Senior House Officer in Geriatric Medicine. Over this time, being more senior, I also helped as a mentor to younger doctors joining my team - offering guidance and advice whilst they integrated themselves within the NHS. I had applied for General Practice Training in 2022 however due to personal reasons withdrew my application. I reapplied again in 2023 but am now intending to follow my larger personal interests and transition into the technology and software development sector instead. In both years' applications I scored in the top quartile of candidates in the UK.`,
            `Over the past year I have reduced my hospital working hours to two days per week so that I could focus on training myself in Software Development.`
            ],
        skills: [
            'Tutoring', 'Empathy', 'Professionalism', 'Compassion', 'Perserverance', 'Communication', 'Teamwork', 'Team Leadership', 'Analytical Skills', 'Problem Solving', 'Time Management'
        ],
        image: 'nhs.png'
    },
];