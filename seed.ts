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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      step: 2,
      description:
        "Sed sit amet leo eu dolor tincidunt hendrerit vel in est. Vestibulum ac dui nulla.",
    },
    {
      step: 3,
      description:
        "Pellentesque venenatis leo ac lorem elementum imperdiet. Aliquam vel magna nec sem fringilla fringilla.",
    },
    {
      step: 4,
      description:
        "Pellentesque venenatis leo ac lorem elementum imperdiet. Aliquam vel magna nec sem fringilla fringilla.",
    },
    {
      step: 5,
      description:
        "Pellentesque venenatis leo ac lorem elementum imperdiet. Aliquam vel magna nec sem fringilla fringilla.",
    },
    {
      step: 7,
      description:
        "Pellentesque venenatis leo ac lorem elementum imperdiet. Aliquam vel magna nec sem fringilla fringilla.",
    },
    {
      step: 8,
      description:
        "Pellentesque venenatis leo ac lorem elementum imperdiet. Aliquam vel magna nec sem fringilla fringilla.",
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
        date: "2022-01-01",
        description: "Description of Event 1",
      },
      {
        id: 2,
        title: "Event 2",
        date: "2022-02-01",
        description: "Description of Event 2",
      },
      {
        id: 3,
        title: "Event 3",
        date: "2022-03-01",
        description: "Description of Event 3",
      },
    ],
  };
  