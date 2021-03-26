/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Saurabh Sen",
  title: "Hi all, I'm Saurabh",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1KOJWUIV7ZKc9NY4gxUStitZzNduClWza/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saurabhsen1212",
  linkedin: "https://www.linkedin.com/in/saurabh-sen-47b200203",
  gmail: "sensaurabh1212@gmail.com",
  // gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/profile.php?id=100065140518198",
  // medium: "https://medium.com/@davidrakosi",
  // stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  instagram: "https://www.instagram.com/shooter_of_TMC_GANG_1212/",
  // twitter: 'https://twitter.com/davidrakosi_',
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Learning how to develop Progressive Web Applications ( PWA ) in normal and SPA Stacks"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ Netlify / Heroku "
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "mongodb-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "python3",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fas fa-flask",
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fab fa-cuttlefish ++",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Nachiketa Higher secondary school ",
      // logo: require("./assets/images/harvardLogo.png"),
      subHeader: "High school",
      duration: "July 2015 - April 2019",
      desc: "Pursued my 10th and 12th standard studies.",
      descBullets: [
        "Completed my 10th with 78% and passed 12th with 76.5% in Maths Stream",
      ],
    },
    {
      schoolName: "Gyan Ganga Institute of Technology and Sciences ",
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering ",
      duration: "August 2019 - May 2023",
      desc:
        "Pursuing my B.Tech degree in Computer Science and Engineering . Taking courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Interested in web development technology like React.js and Next.js",
      ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "90%",
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Clever Programmer",
      companylogo: require("./assets/images/cpLogo.png"),
      date: "September 2020 – Present",
      desc: "Changing lives of developers one line of code at a time.",
      descBullets: [
        "Custom building applications",
        "Coaching",
        "Streaming live on YouTube",
        "Creating tutorials",
      ],
    },
    {
      role: "Product Owner (PSD2)",
      company: "Erste Bank",
      companylogo: require("./assets/images/ersteLogo.jpg"),
      date: "July 2019 – September 2020",
      desc:
        "I lead software developers building the API for the bank in order to fulfil the PSD2 regulation requirements.",
    },
    {
      role: "Junior Information Security & Systems Representative",
      company: "Vodafone",
      companylogo: require("./assets/images/vodafoneLogo.png"),
      date: "November 2018 – July 2019",
      desc:
        "I've conducted internal audit making sure the organization is compliant with the GDPR.",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saurabhsen1212", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME WEBSITES THAT I CREATED WHILE LEARNING REACT.JS ",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Google Clone",
      projectDesc:
        "This is a clone app of Google Search, which i learn to develop during learning React.js",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://clone-e2c66.web.app/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Friend's Portfolio ",
      projectDesc:
        "This is developed using Gatsby.Js, which i learn to develop during learning React.js and hosted on Netlify.com",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sid-graphics.netlify.app/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Satyam-clicks",
      projectDesc:
        "This website is developed by using flask as a backend and mongodb atlas cloud as a database. This is a commercial website created for a PHOTOGRAPHER to take thier business online",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://satyam-clicks.herokuapp.com/",
        },
      ],
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Tinder Clone",
      projectDesc:
        "This website is developed by using React.Js, mongodb atlas cloud as a database and Firebase for hosting Website.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://tinder-clone-1da35.web.app/",
        },
      ],
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Facebook messanger Clone",
      projectDesc:
        "This website is developed by using React.Js, firebase firestore for realtime chatting experience and cloud storage, Firebase for hosting Website.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://facebook-messenger-clone-96dd1.web.app/",
        },
      ],
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Spotify Clone",
      projectDesc:
        "This website is developed by using React.Js, firebase.com for hosting Website.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://spotify-clone-460ae.web.app/",
        },
      ],
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Amazon Clone",
      projectDesc:
        "This website is developed by using React.Js and Firebase for hosting Website. I add a login and register page for new users and many React.Js libraries for clean look. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://clone-904e2.web.app/",
        },
      ],
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "WhatsApp Web Clone",
      projectDesc:
        "This website is developed by using React.Js, firebase firebase for realtime chatting experience and Firebase for hosting Website. I've also add a LOGIN WITH GOOGLE page for new users and many React.Js libraries for clean look. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://whatsapp-clone-16b43.web.app/",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "",
        },
        {
          name: "Award Letter",
          url: "",
        },
        {
          name: "Google Code-in Blog",
          url: "",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8305781500",
  email_address: "sensaurabh1212@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
