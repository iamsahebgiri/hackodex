{/* -----------------------------------------------FAQS--------------------------------------------------- */}
export interface FaqItem {
    question: string;
    answer: string;
  }
  
  export const faqs: FaqItem[] = [
    {
      question: "How can contributors register?",
      answer:
        "You need not register !! Firstly sign-in on your Hackodex website then start contributing to the enlisted 'hackcodex2023' tagged repositories, we will automatically track down all your contributions from your GitHub ID.",
    },
    {
      question: "What is open source and GitHub?",
      answer:
        "Open source refers to software with source code that is freely available and can be modified. GitHub is a platform for hosting and collaborating on open source projects. ",
    },
    {
      question: "How to create a GitHub Account?",
      answer:"To create a GitHub account, go to github.com and click 'Sign up'. Enter your details and create a username and password. Verify your email and you're ready to start using GitHub.",
    },
    {
      question: "Do you have rewards?",
      answer:" Yes!!! Our top 3 contributors will be receiving swag kits.What if you don't end up in top 3? If you get atleast 3 PRs merged, we still have rewards for you! ",
    },
  ];

  {/* ----------------------------------------REGISTER INSTRUCTIONS--------------------------------------------- */}
  
  export interface RegistrationInstruction {
    step: number;
    description: string;
  }
  
  export const registrationInstructions: RegistrationInstruction[] = [
    {
      step: 1,
      description: "You must be enrolled in any bachelors degree.",
    },
    {
      step: 2,
      description:
        "You must have public project on GitHub with merge access.",
    },
    {
      step: 3,
      description:
        "Your project have more than two easy-to-fix issues.",
    },
    {
      step: 4,
      description:
        "Your repositories must contain tags/topic hackodex2023.",
    },
    {
      step: 5,
      description:
        "Your README must be descriptive.",
    },
    {
      step: 7,
      description:
        "To complete this event, you must merge at least 3 meaningful PRs",
    },
    {
      step: 8,
      description:
        "HACKODEX organizers approve your project.",
    },
    {
      step: 9,
      description:
        "No projects will be approved related to competitive coding or similar kind of stuff.",
    },
    {
      step: 10,
      description:
        "You need to add the 'hackodex2023' and 'hackodex2023-accepted' label to the merged PRs.",
    },
    
  ];

  export const contributionInstructions: RegistrationInstruction[] = [
    {
      step: 1,
      description: "Follow code conventions",
    },
    {
      step: 2,
      description:
        "Write clear commit messages",
    },
    {
      step: 3,
      description:
        "A minimum of 3 PRs should be merged in order to be eligible for the certificate.",
    },
    {
      step: 4,
      description:
        "It is mandatory to fill the form.",
    },
    {
      step: 5,
      description:
        "Everyone taking part in hackodex should join the discord server",
    },
  ];

  {/* ------------------------------------------EVENT TIMELINE----------------------------------------------- */}

  export interface Event {
    id: number;
    title: string;
    date: string;
    description: string;
  }
  
  export interface TimelineData {
    events: Event[];
  }

  export const timelineData: TimelineData = {
    events: [
      {
        id: 1,
        title: "Mentor Registerations",
        date: "2023-03-30 to 2023-04-10",
        description: "Individuals who wish to be project mentors must register themselves using the Google Form available on the Registeration Page",
      },
      {
        id: 2,
        title: "Open Source Contributions",
        date: "2023-04-08 to 2023-05-07",
        description: "Individuals can Start contributing to open-source projects under the 'hackodex2023' tag, discuss with mentors and make PRs for the same. We will track your contributions during this phase!",
      },
    ],
  };

  {/* ------------------------------------------Contributors Guideline----------------------------------------------- */}

  export const contributorGuidelines: { id: number; title: string; description: string }[] = [
    {
      id: 1,
      title: 'Follow code conventions',
      description:
        'Make sure your code adheres to the project’s code conventions. If you are not sure about the conventions, ask the project maintainers for guidance.',
    },
    {
      id: 2,
      title: 'Create pull requests',
      description:
        'When you have completed work on a feature or bug fix, create a pull request against the project’s main branch. The pull request should include a clear and concise description of the changes you have made and any relevant screenshots or testing information.',
    },
    {
      id: 3,
      title: 'Write clear commit messages',
      description:
        'Make sure your commit messages are clear and descriptive. Use imperative mood, such as "Fix bug" instead of "Fixed bug". Provide enough context to understand the purpose of the changes made in the commit.',
    },
  ];
  
   {/* ------------------------------------------Resources List----------------------------------------------- */}


  export const resources = [
    {
      id: 1,
      title: 'Codex: GitHub basics for Beginners',
      url: 'https://www.youtube.com/watch?v=4ohwTU0NJ6s',
    },
    {
      id: 2,
      title: 'Codex: GitHub For Contributions',
      url: 'https://www.youtube.com/watch?v=0ZoXSFtYHh8&t=5s',
    },
    {
      id: 3,
      title: 'Open-Source: How to Contribute?',
      url: 'https://opensource.guide/how-to-contribute/',
    },
    {
      id: 4,
      title: 'GitHub: Training Kit',
      url: 'https://training.github.com/',
    },
    {
      id: 5,
      title: 'GitHub: How to write a pull request?',
      url: 'https://github.blog/2015-01-21-how-to-write-the-perfect-pull-request/',
    },
    {
      id: 6,
      title: 'GitHub: GitHub Desktop',
      url: 'https://desktop.github.com/',
    },
    {
      id: 7,
      title: 'GitHub: What is a good commit message?',
      url: 'https://dev.to/chrissiemhrk/git-commit-message-5e21',
    },
    {
      id: 8,
      title: 'GitHub: Flow for Collaboration',
      url: 'https://docs.github.com/en/get-started/quickstart/github-flow',
    },
  ];
  
  {/* ------------------------------------------Footer----------------------------------------------- */}
  
  export interface Footer {
    gmail: string;
    instagram: string;
    linkedin: string;
    github: string;
    youtube: string;
    rights: string;
  }
  
  export const footerData: Footer = {
    gmail: 'codexiter@gmail.com',
    instagram: 'https://www.instagram.com/codexiter',
    linkedin: 'https://www.linkedin.com/company/codex-iter',
    github:'https://github.com/codex-iter',
    youtube:'https://www.youtube.com/channel/UCu1S3gm2ODknxDlkpPX2RrA',
    rights: 'All rights reserved . Hackodex 2.0 (2023)',
  };

  {/* ------------------------------------------ Sponsors ----------------------------------------------- */}


  export interface SponsorsType {
    id: number;
    name: string;
    logo: string;
    url: string;
  }

  export const sponsor: SponsorsType[] = [
    {
      id: 1,
      name: 'Cuvette',
      logo: '/sponsors/Cuvette.png',
      url: 'https://cuvette.tech/',
    },
    {
      id: 2,
      name: 'Stream Yard',
      logo: '/sponsors/Stream_Yard.png',
      url: 'https://streamyard.com/',
    },
    {
      id: 3,
      name: 'Taskade',
      logo: '/sponsors/Taskade.png',
      url: 'https://www.taskade.com/',
    },
    {
      id: 4,
      name: 'UiPath',
      logo: '/sponsors/UiPath.png',
      url: 'https://www.uipath.com/',
    },
    {
      id: 5,
      name: 'Newton School',
      logo: '/sponsors/Newton_School.png',
      url: 'https://www.instagram.com/newtonschoolofficial/',
    },
  ]
  
   {/* ------------------------------------------Collaboration & Community----------------------------------------------- */}


   export interface CommunityType {
    id: number;
    name: string;
    logo: string;
    url: string;
  }

  export const community: CommunityType[] = [
    {
      id: 1,
      name: 'Ascent Academy',
      logo: '/community/Ascent_Academy.png',
      url: 'https://ascentacademy.vercel.app',
    },
    {
      id: 2,
      name: 'DEV Dungeon',
      logo: '/community/DEVs_Dungeon.png',
      url: 'https://nas.io/devs-dungeon',
    },
    {
      id: 3,
      name: 'GDSC ITER',
      logo: '/community/GDSC_ITER.png',
      url: 'https://gdsc.community.dev/institute-of-technical-education-research-bhubaneswar/',
    },
    {
      id: 4,
      name: 'GFG_RTU',
      logo: '/community/GFG_RTU.png',
      url: 'https://gfgsc-rtu.github.io/linktree/',
    },
    {
      id: 5,
      name: 'Webwiz',
      logo: '/community/Webwiz.png',
      url: 'https://webwiznitr.tech/',
    },
    {
      id: 6,
      name: 'NSCC SRM',
      logo: '/community/SRM.png',
      url: 'https://www.instagram.com/nscc_srm/',
    },
    {
      id: 7,
      name: 'NSCC_ITER',
      logo: '/community/NSCC_ITER.png',
      url: 'https://www.instagram.com/nscc_iter_official/',
    },
  ]
  
  export const clubs: CommunityType[] = [
    {
      id: 1,
      name: 'CDH',
      logo: '/clubs/CDH.png', 
      url: 'https://instagram.com/cdh.iter'
    },
    
    {
      id: 2,
      name: 'IEC',
      logo: '/clubs/IEC.png',
      url: 'https://www.iecsoauniversity.com/'
    },
    {
      id: 3,
      name: 'SEC',
      logo: '/clubs/SEC.png',
      url: 'http://soaenglishcafe.blogspot.com'
    },
    {
      id: 4,
      name: 'SLC',
      logo: '/clubs/SLC.png',
      url: 'https://instagram.com/soaliterary_club'
    },
    {
      id: 5,
      name: 'SOA',
      logo: '/clubs/SOA Radio.png',
      url: 'https://youtu.be/px76qAcKyNI'
    },
    {
      id: 6,
      name: 'Shristhi',
      logo: '/clubs/Srishti.png',
      url: 'https://instagram.com/srishticlub'
    }
    // Add more sponsors here*/
  ];
  
  {/* ------------------------------------------ Events ----------------------------------------------- */}


  export interface Events {
    id: number;
    name: string;
    date: string;
    time: string;
    venue: string;
    url: string;
  }

  export const events: Events[] = [
    {
      id: 0,
      name: 'BOT DEPLOYMENT SERIES',
      date: '29th April, 2023',
      time: '6:30PM - 7:30 PM',
      venue: '',
      url: 'https://meet.google.com/apu-ynbz-adc',
    },
    {
      id: 1,
      name: 'Quick & Clever',
      date: '26th April, 2023',
      time: '',
      venue: 'ITER, SOA University',
      url: 'https://forms.gle/s9MTtDSjdgEJcyuHA',
    },
    {
      id: 2,
      name: 'Web Development in Bussiness',
      date: '23th April, 2023',
      time: '6:00PM - 7:30PM',
      venue: '',
      url: 'https://www.youtube.com/live/FpuGqYtkKDw?feature=share&t=240',
    },
    {
      id: 3,
      name: 'Code for X',
      date: '10th April, 2023',
      time: '7:00 p.m. - 9:00 p.m.',
      venue: '',
      url: 'https://practice.geeksforgeeks.org/contest/code-for-x',
    },
    {
      id: 4,
      name: 'Opinion Oasis',
      date: '9th April, 2023',
      time: '',
      venue: 'ITER, SOA University',
      url: 'https://forms.gle/iAmdUx1yUq9Bo8VM8',
    },
  ]
  