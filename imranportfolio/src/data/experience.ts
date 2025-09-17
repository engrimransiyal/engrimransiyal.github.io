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
      "Fault diagnosis of the electrical system of machines.",
      "Troubleshooting of Servo and Stepper motors on CMM."
    ],
    // link:' https://tinyurl.com/yvczjrjc '
  },
  {
    company: "Umar Spinning Mills",
    role: "Electrical Engineer",
    start: "2022-12-01",
    end: "2023-08-10",
    location: "Lahore, Pakistan",
    bullets: [
      "Supervision of maintenance process.",
      "Measuring the performance of machines.",
      "Replacement and installation of electrical equipment.",
      "Presentations and reports every month."
    ],
    link: "https://tinyurl.com/vvczjrjc"
  },
  {
    company: "Alpha Solar",
    role: "Trainee Engineer",
    start: "2022-01-01",
    end: "2022-11-30",
    location: "Lahore, Pakistan",
    bullets: [
      "Surveys for solar panel installation.",
      "Estimation of the load",
      "Supervision and inspection of all the installation process",
      "Troubleshooting"
    ],
    link: "https://tinyurl.com/bdxah7p6"
  },
  {
    company: "Expert Solar Energy",
    role: "Trainee Site Engineer",
    start: "2021-01-01",
    end: "2021-12-30",
    location: "Multan, Pakistan",
    bullets: [
      "Project supervision at different sites.",
      "Installation of electrical equipment.",
      "Fault diagnosis and troubleshooting."
    ],
    link: "https://tinyurl.com/2freyz28"
  },
  {
    company: "Pak Elektron Limited",
    role: "Intern Engineer",
    start: "2021-06-01",
    end: "2021-07-12",
    location: "Lahore, Pakistan",
    bullets: [
      "Worked in the Production of Transformer.",
      "Designing and Testing of Transformer.",
      "Cost maintenance of Transformer.",
      "Maintenance of efficiency and capabilities of Transformer.",
      "Integration of protection devices with Transformer."
    ],
    link: "https://tinyurl.com/4htnjfpt"
  },
  {
    company: "Multan Electric Power Company",
    role: "Intern Engineer",
    start: "2019-07-01",
    end: "2019-09-30",
    location: "Multan, Pakistan",
    bullets: [
      "Worked in the power distribution system.",
      "Calculated and managed electricity bills.",
      "The supervised installation process of equipment.",
      "Researched current transformers and potential transformers.",
      "Visited grid stations and collected data."
    ],
    link: "https://tinyurl.com/3tze426f"
  }
];