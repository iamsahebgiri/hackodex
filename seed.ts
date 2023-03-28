{/* -----------------------------------------------FAQS--------------------------------------------------- */}

export interface FaqItem {
    question: string;
    answer: string;
  }
  
  export const faqs: FaqItem[] = [
    {
      question: "What is the first question?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non dolor vitae mi volutpat auctor vel at ipsum.",
    },
    {
      question: "What is the second question?",
      answer:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla aliquet massa eget sapien euismod, eget volutpat nulla auctor. ",
    },
    {
      question: "What is the third question?",
      answer:
        "Suspendisse vitae est a purus aliquam dictum. Nunc sed velit vel mi euismod faucibus non non urna.",
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
        title: "Event 1",
        date: "2023-04-01",
        description: "To be announced",
      },
      {
        id: 2,
        title: "Event 2",
        date: "Coming Soon",
        description: "To be announced",
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
      title: 'Next.js Documentation',
      url: 'https://nextjs.org/docs/getting-started',
    },
    {
      id: 2,
      title: 'Tailwind CSS Documentation',
      url: 'https://tailwindcss.com/docs',
    },
    {
      id: 3,
      title: 'FreeCodeCamp Next.js Tutorial',
      url: 'https://www.youtube.com/watch?v=mTz0GXj8NN0',
    },
    {
      id: 4,
      title: 'Traversy Media Tailwind CSS Tutorial',
      url: 'https://www.youtube.com/watch?v=UBOj6rqRUME',
    },
  ];
  
  {/* ------------------------------------------Footer----------------------------------------------- */}
  
  export interface Footer {
    gmail: string;
    instagram: string;
    linkedin: string;
    rights: string;
  }
  
  export const footerData: Footer = {
    gmail: 'example@gmail.com',
    instagram: 'https://www.instagram.com/example',
    linkedin: 'https://www.linkedin.com/in/example',
    rights: 'All rights reserved Hackodex 2023',
  };
  
  