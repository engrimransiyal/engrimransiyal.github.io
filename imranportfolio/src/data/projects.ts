export type Project = {
  title: string;
  date?: string;
  short: string;
  link?: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    title: "Closed-loop Controlled 10kW LLC Resonant Converter",
    date: "2024",
    short: "Designed & simulated 10kW LLC resonant converter (310V→400V) with soft-switching at 100kHz.",
    link: "https://tinyurl.com/53sxpk9b",
    tags: ["MATLAB", "Power Electronics"]
  },
  {
    title: "PV and Battery Integration",
    date: "2023",
    short: "MPPT-based hybrid energy system with battery for stable DC bus & energy management.",
    link: "https://tinyurl.com/mtj7bmcv",
    tags: ["Renewables", "MPPT"]
  },
  {
    title: "MPC in Boost Converters",
    date: "2023",
    short: "Model Predictive Control for boost converter achieving fast transient response and low overshoot.",
    link: "https://tinyurl.com/ye2vee67",
    tags: ["MPC", "Control"]
  },
  {
    title: "CNC Plotter Using Arduino (FYP)",
    date: "2020",
    short: "Arduino-based CNC drawing machine using stepper motors and G-code like control.",
    link: "https://tinyurl.com/ypaktsmj",
    tags: ["Arduino", "CNC"]
  }
];
