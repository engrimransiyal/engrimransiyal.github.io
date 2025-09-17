export type EducationItem = {
  school: string;
  degree: string;
  start?: string;
  end?: string;
  grade?: string;
  thesis?: string;
  link?: string;
  courses?: string[];
};

export const education: EducationItem[] = [
  {
    school: "Northwestern Polytechnical University",
    degree: "Masters in Electrical Engineering",
    start: "2023-09-01",
    end: "Current",
    grade: "86%",
    thesis: "Advance Non-Linear Control of Four-Switch Buck-Boost Converter For EV Application",
    link: "https://tinyurl.com/5c24j2kz",
    courses: [
      "Advanced Control Theory Applied in Power Electronics and Drives",
      "Modeling and Simulation of Power Electronics ",
      "Power System Control ",
      "Brief Introduction of China",
      "Matrix Theory (92)",
      "Mathematical Statistics ",
      "Chinese Language I ",
      "Chinese Language II ",
      "Advanced Power Conversion Techniques",
      "Speed Adjustment Technology of Modern AC Machine ",
      "Modeling and Simulation of Isolated Power System ",
      "Communication in Electrical Power Systems ",
      "MATLAB Modeling and Simulation Analysis of Motor Transient Process "
    ]
  },
  {
    school: "Bahauddin Zakariya University Multan",
    degree: "Bachelor in Electrical Engineering",
    start: "2016-11-14",
    end: "2020-12-22",
    grade: "3.32/4",
    thesis: "Computer Numerical Control Plotter Machine Using Arduino (FYP)",
    link: "https://tinyurl.com/595ed7uw",
    courses: [
      "Introduction to Computing ",
      "Linear Circuit Analysis ",
      "Functional English ",
      "Islamic Studies / Ethics ",
      "Calculus & Analytical Geometry ",
      "Applied Physics ",
      "Programming Fundamentals ",
      "Electronic Devices & Circuits",
      "Workshop Practice ",
      "Communication Skills",
      "Differential Equations ",
      "Basic Mechanical Engineering ",
      "Data Structures and Algorithms ",
      "Electrical Network Analysis ",
      "Electrical Machines ",
      "Engineering Drawing ",
      "Linear Algebra & Multi Variable Calculus ",
      "Pakistan Studies ",
      "Digital Logic Design ",
      "Electronic Circuit Design ",
      "Probability Method in Engineering ",
      "Complex Variables and Transforms ",
      "Applied Thermodynamics ",
      "Signals and Systems ",
      "Microprocessor Systems ",
      "Electromagnetic Field Theory ",
      "Technical Writing and Presentation Skills ",
      "Numerical Analysis ",
      "Linear Control Systems ",
      "Communication Systems ",
      "Power Distribution and Utilization",
      "Instrumentation and Measurements ",
      "Engineering Economics & Management ",
      "Project (Part-A) ",
      "Power Electronics ",
      "Advanced Electrical Machines ",
      "Electrical Power Transmission ",
      "Entrepreneurship ",
      "Social Anthropology ",
      "Project (Part-B) ",
      "Power System Protection ",
      "High Voltage Engineering ",
      "Renewable Energy Systems ",
      "Engineering Ethics "
    ]
  }
];


export type Publication = {
  title: string;
  status: string;
  description: string;
  authors: string;
  journal: string;
  publisher: string;
  link?: string;
};

export const publications: Publication[] = [
  {
    title: "Optimized Nonlinear Control for Efficient Power Management in Electric Vehicle Charging using Four-Switch Buck-Boost Converter",
    status: "Under Review",
    description: "This paper presents a dual-energy storage system for EV infrastructure, integrating PV panels and batteries using a four-switch buck-boost converter. A novel condition-based integral terminal super-twisting sliding mode control ensures stability and efficiency, with an ANN-based algorithm for PV maximum power point tracking and grey wolf optimization for gain tuning. Compared to traditional and super-twisting SMC, the system, validated via Delfino microcontroller simulation, offers superior energy utilization, storage efficiency, and EV charging stability.",
    authors: "Muhammad Imran",
    journal: "Energy Storage",
    publisher: "Wiley"
  }
];