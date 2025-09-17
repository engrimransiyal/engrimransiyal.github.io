export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end?: string;
  location?: string;
  bullets: string[];
  link?: string;
};

export const experience: ExperienceItem[] = [
    
  {
    company: "Guangxutu Electromechanical",
    role: "Intern Engineer",
    start: "2025-04-15",
    end: "Current",
    location: "Xian, China",
    bullets: [
      "Optimized control of measuring machines.",
      "Assembled the control system of machines.",
      "Fault diagnosis of electrical systems",
      "Troubleshooting Servo and Stepper motors on CMM."
    ],
    link: "https://tinyurl.com/yvczjrjc"
  },
  {
    company: "Umar Spinning Mills",
    role: "Electrical Engineer",
    start: "2022-12-01",
    end: "2023-08-10",
    location: "Lahore, Pakistan",
    bullets: [
      "Supervised maintenance processes.",
      "Measured machine performance.",
      "Installation and replacement of electrical equipment.",
      "Monthly presentations and reports."
    ],
    link: "https://tinyurl.com/bdxah7p6"
  },
  {
    company: "Alpha Solar",
    role: "Trainee Engineer",
    start: "2022-01-01",
    end: "2022-11-30",
    location: "Lahore, Pakistan",
    bullets: [
      "Surveys and estimation for solar panel installations.",
      "Supervision and inspection of installation processes.",
      "Troubleshooting and quality checks."
    ],
    link: "https://tinyurl.com/bdxah7p6"
  },
  {
    company: "Multan Electric Power Company",
    role: "Intern Engineer",
    start: "2019-07-01",
    end: "2019-09-30",
    location: "Multan, Pakistan",
    bullets: [
      "Worked in power distribution system.",
      "Collected data at grid stations.",
      "Research on current and potential transformers."
    ],
    link: "https://tinyurl.com/3tze4z6f"
  }
];
