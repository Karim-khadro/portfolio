export const intro = {
    name: "Karim",
    surname: "KHADRO",
    under_name: "I'm a Passionate, Motivated and Unstoppable Developer.",
    intro_text: ""
};
export const menu = { logo: "../images/logo.png", it1: "Profile", it2: "Experiences", it3: "Projects", it4: "Contact" }
export const sections = { s1: "Know Me", s2: "Where I’ve Studied & Worked", s3: "Some Projects", s4: "Next Step:" };
export const profile = {
    name: "Karim Khadro.",
    birth_date: "29/09/1996",
    location: "Theux, Belgium, Planet Earth.",
    profileImg_URL: "./images/profile.jpg",
    know_more: false,
    text: "I am a software developer in a constant search for new challenges. \
    I love structure, order and I stand for quality. I like spending time fixing little details and optimizing apps. \
     Fascinated by new technologies and willing to go further. I enjoy working with intelligent and passionate people, \
     which allows me to learn and grow faster. Still, I'm also a considerably autonomous person. \
     I'm interested in many things in life, like cryptocurrencies and it's technology, F1, traveling, and much more. "
}
export const exp = {
    education: [{
            inst_name: "The University of Liège",
            job_class_name: "MCs in Computer Science, Intelligent systems ",
            location: "Liège",
            starting_date: "Sept 2020",
            finish_date: "Sept 2021",
            description: "First year of master in computer science with Intelligent systems option. I learned about Deep learning, Machine learning and increased my programming knowledge. I quit after the first year of the two years and a half program."
        },
        {
            inst_name: "The Higher Education Institution of the Province of Liège",
            job_class_name: "Bachelor in Computer Science and Management, Intelligent systems ",
            location: "Seraing",
            starting_date: "Sept 2016",
            description: "The education started with basic programming in C then became mainly Java-based programming, but I also learned about SQL, PHP, MVC, UML, C#, JS and more. During my time in college, I specialized in management which allowed me to have some knowledge in the big data field. ",
            finish_date: "Jan 2020"
        },
        {
            inst_name: "Don Bosco Verviers Hight school",
            job_class_name: "Computer Technician ",
            location: "Verviers",
            starting_date: "Sept 2015",
            description: "First steps into web programming, computer reperation and computer parts, as well networking and manageniong small networks.",
            finish_date: "Jun 2016"
        }
    ],
    work: [{
            inst_name: "Geo Solutions",
            job_class_name: "Developer & GIS developer",
            location: "Namur",
            starting_date: "Mai 2022",
            description: "I develop GIS related application, and full stack with cloud base applications using technologies like: OpenLayers, Leaflet, Geoserver, Angular, NodeJs, R shiny, C#, Azure, Sprint boot, etc..",
            finish_date: "Present"
        },
        {
            inst_name: "I-pulses",
            job_class_name: "Analyst developer (student job)",
            location: "Blegny",
            starting_date: "Oct 2019",
            description: "The work was a continuation of my placement. The main part was making the chatbot fully operational and adding new functionality (Beck-end NodeJs & Front-end React), also connecting the chatbot with the client web services (C#) and finally deploying the chatbot.",
            finish_date: "31 Dec 2019"
        },
        {
            inst_name: "I-pulses",
            job_class_name: "Placement",
            location: "Blegny",
            starting_date: "Feb 2019",
            description: "Mandatory placement of my bachelor's program. I built middleware to protect users' privacy when using a cloud-based chatbot. The main idea consists of using IBM Watson as the brain of the chatbot, Microsoft chatbot as the middleware as it's open source and could be self hoster, and webchat (built-in React) is open source as front-end. The middleware in NodeJS filters all the private content to prevent it from going to the cloud. ",
            finish_date: "May 2019"
        }
    ],
    skills: [
        { name: "Java", score: 5 },
        { name: "C/C++", score: 4 },

        { name: "Python", score: 5 },
        { name: "Scrum", score: 4 },

        { name: "Command line Inteface", score: 5 },
        { name: "React", score: 4 },

        { name: "JSON", score: 5 },
        { name: "GIS technologies", score: 4 },




        { name: "SQL", score: 4 },
        { name: "Deep learning", score: 3 },


        { name: "HTML/CSS", score: 4 },
        { name: "MVC Pattern", score: 3 },


        { name: "C#", score: 4 },
        { name: "CSS/Tailwind", score: 3 },



        { name: "Javascript", score: 4 },
        { name: "R", score: 3 },



        { name: "Node js", score: 4 },
        { name: "XML", score: 2 },


        { name: "UML", score: 4 },
        { name: "Bootstrap", score: 1 }

    ],
    languages: [
        { name: "Arabic (Mother tongue)", score: 5 },
        { name: "English (Daily use)", score: 4 },
        { name: "French (Daily use)", score: 5 }

    ],
    tools: [
        { name: "VS code ", score: 5 },
        { name: "Visual Studio", score: 4 },

        { name: "MS Office", score: 5 },
        { name: "Linux ", score: 4 },

        { name: "Windows ", score: 5 },
        { name: "Atlassian / Jira ", score: 3 },


        { name: "Git / Git Flow ", score: 4 },
        { name: "Latex ", score: 3 }
    ]
};


export const projects = {
    projects: [{
            title: "Github Repo Creator",
            description: "A command line script allowing users to create a local & remote git repo",
            image_link: "./images/gitcreate.png",
            link: "https://github.com/Karim-khadro/Repo_creator"
        },
        {
            title: "Tasky",
            description: "Task manager, To-Do list, and calendar. For now, only the To-Do list is completed, the other parts are still under development",
            image_link: "./images/tasky.png",
            link: "https://github.com/Karim-khadro/Tasky",
            font_color: "text-black"
        },
        {
            title: "Kucoin app",
            description: "Using Kucoin API, this app helps users track their profits of closed positions, estimate returns from open positions, and help them decide the selling price. With more functionalities",
            image_link: "./images/kucoin.png",
            link: "https://github.com/Karim-khadro/Kucoin-app-Public",
            font_color: ""
        },
        {
            title: "Portfolio",
            description: "Personalizable website template. No programming knowledge. It's the template of this website",
            image_link: "./images/pottfolio.png",
            link: "https://github.com/Karim-khadro/portfolio",
            font_color: ""
        },
        {
            title: "Traffic sign detection",
            description: "Deep learning app that detects and classifies over 80 types of traffic signs",
            image_link: "./images/tsd.png",
            link: "https://github.com/Karim-khadro/DL-Traffic-sign-detection",
            font_color: "text-black"
        }

    ]
}

export const contact = {
    main_phrase: "Get In Touch",
    text: "I’m currently looking for new opportunities, my inbox is always open. Whether you have a job proposition or just want to say hi, I’ll try my best to get back to you!",
    email: "karim.khadro@hotmail.com",
    linkedin: "https://www.linkedin.com/in/karim-khadro-8841461ba/",
    github: "https://github.com/Karim-khadro/"
}

export const footer = { text: "Built by Karim Khadro" }