export type Project = {
  title: string;
  date?: string;
  short: string;
  description: string;
  link?: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    title: "Closed-loop Controlled 10kW LLC Resonant Converter",
    date: "2024",
    short: "Designed & simulated 10kW LLC resonant converter (310V→400V) with soft-switching at 100kHz.",
    description: "Designed and simulated a closed-loop controlled 10kW LLC resonant converter in MATLAB/Simulink, achieving high-efficiency DC-DC conversion (310V→400V) with soft-switching at 100kHz. Optimized resonant tank parameters (Lm, Lr, Cr) and implemented PID control for robust voltage regulation under 25A load. Demonstrated tradeoffs between frequency modulation and duty cycle for applications in EV chargers and renewable energy systems.",
    link: "https://tinyurl.com/53sxpk9b",
    tags: ["MATLAB/Simulink", "Power Electronics", "DC-DC Conversion", "EV Chargers", "Renewable Energy"]
  },
  {
    title: "PV and Battery Integration",
    date: "2023",
    short: "MPPT-based hybrid energy system with battery for stable DC bus & energy management.",
    description: "Developed a MATLAB simulation for Maximum Power Point Tracking (MPPT) in a hybrid energy system, utilizing a boost converter to extract optimal power from a PV panel while maintaining a stable DC bus voltage. The system incorporated a battery for energy management—discharging during low irradiance to support the bus and charging during high irradiance while sustaining voltage levels. PI controllers were implemented to regulate energy flow between power sources and the DC bus, advancing efficient renewable energy integration for EV charging applications.",
    link: "https://tinyurl.com/mtj7bmcv",
    tags: ["MATLAB", "MPPT", "Hybrid Energy Systems", "Battery Management", "EV Charging"]
  },
  {
    title: "Model Predictive Control (MPC) in Boost Converters",
    date: "2023",
    short: "Model Predictive Control for boost converter achieving fast transient response and low overshoot.",
    description: "Developed and simulated a Model Predictive Control (MPC) algorithm for a boost converter in MATLAB/Simulink to achieve precise current and voltage regulation. The MPC optimized real-time control actions, ensuring fast dynamic response to input voltage (V_in) and load variations while minimizing output voltage (V_out) overshoot. Validated through simulations, the controller demonstrated robust reference tracking of inductor current (IL) and output voltage (V_out), outperforming traditional PI control. This project highlights MPC's potential for applications in EV chargers, renewable energy systems, and power electronics.",
    link: "https://tinyurl.com/ye2vee67",
    tags: ["MATLAB/Simulink", "Model Predictive Control", "Power Electronics", "EV Chargers", "Renewable Energy"]
  },
  {
    title: "Two-Stage Power Conversion for Grid-Connected PV Systems",
    date: "2023",
    short: "Two-stage grid-connected PV system with MPPT control and low THD AC conversion.",
    description: "Designed and simulated a two-stage power conversion system for grid-connected PV applications, integrating MPPT control, DC bus voltage regulation, and grid-synchronized AC conversion. Implemented advanced control algorithms to maximize solar energy harvest while maintaining stable DC bus voltage and low THD (<5%) AC output. The system demonstrated robust performance under varying irradiance conditions, achieving efficient power transfer to the grid with proper synchronization. Developed in MATLAB/Simulink, this project highlights practical solutions for renewable energy integration.",
    link: "https://tinyurl.com/yyduffee",
    tags: ["MATLAB/Simulink", "Grid-Connected Systems", "MPPT", "Renewable Energy", "Power Conversion"]
  },
  {
    title: "Autotransformer-Based 18-Pulse Rectifier",
    date: "2023",
    short: "18-pulse rectifier with minimized harmonic distortion (THD < 1%) for clean power applications.",
    description: "Designed and simulated an autotransformer-based 18-pulse rectifier in MATLAB for isolated power systems, achieving high-efficiency AC-DC conversion with minimized harmonic distortion (THD < 1%). Implemented a 40-degree phase-shifting transformer to enable 18-pulse operation, significantly reducing lower-order harmonics. Analyzed system performance through FFT, demonstrating stable DC output with minimal ripple. Validated the design's suitability for industrial applications requiring clean power, such as telecom and precision manufacturing.",
    link: "https://tinyurl.com/454hfedd",
    tags: ["MATLAB", "Power Electronics", "Harmonic Reduction", "Industrial Applications", "AC-DC Conversion"]
  },
  {
    title: "Stress and Fourier Analysis of a Power Amplifier",
    date: "2023",
    short: "FEA and Fourier analysis for reliability testing and harmonic reduction in power amplifiers.",
    description: "Conducted stress and Fourier analysis of a power amplifier using Saber simulation tools. Performed Finite Element Analysis (FEA) to evaluate mechanical/thermal stresses and identify overstressed components (e.g., transistors at 114% stress ratio). Applied Fourier transforms to analyze harmonic distortion, achieving a 37dB reduction in second-harmonic amplitude. Demonstrated proficiency in reliability testing and frequency-domain optimization for power electronics.",
    link: "https://tinyurl.com/37muksv3",
    tags: ["Saber Simulation", "FEA", "Fourier Analysis", "Reliability Testing", "Power Electronics"]
  },
  {
    title: "CNC Plotter Using Arduino (Final Year Project)",
    date: "2020",
    short: "Arduino-based CNC drawing machine using stepper motors and G-code like control.",
    description: "This project blends Computer Numerical Control (CNC) and Arduino technology to craft a computer-controlled drawing machine. With precision from stepper motors and actuators, the Arduino microcontroller directs intricate drawings on diverse surfaces. This project beautifully merges skills in mechanical engineering, electronics, and programming, offering hands-on experience in constructing an affordable, versatile CNC device for drawing, and writing. It showcases the practical application of theoretical knowledge, underscoring my multidisciplinary capabilities and resulting in a functional and innovative outcome.",
    link: "https://tinyurl.com/vpaktsmj",
    tags: ["Arduino", "CNC", "Stepper Motors", "Embedded Systems", "Mechatronics"]
  },
  {
    title: "DC Boost Converter",
    date: "2020",
    short: "Efficient DC voltage boost converter for renewable energy and electronics applications.",
    description: "This project focused on a DC boost converter, aiming to efficiently increase low-voltage DC input for applications like renewable energy and electronics. I optimized performance by selecting components and explored control strategies for efficiency. Through experiments and simulations, I gained insights into power electronics intricacies and the challenges of designing efficient voltage boost converters, enhancing my technical skills and understanding of their pivotal role in modern electronics.",
    tags: ["Power Electronics", "DC-DC Conversion", "Renewable Energy", "Electronics"]
  },
  {
    title: "Home Automation System",
    date: "2020",
    short: "Smart home system for automated control of lights, temperature, security, and entertainment.",
    description: "Home Automation System aimed to improve daily life through smart technology integration. I created a system to automate lights, temperature, security, and entertainment via a centralized interface. Using sensors and communication modules, the system allowed real-time monitoring and user control, promoting a user-friendly, energy-efficient living environment. The project demonstrated my skills in programming and hardware integration, emphasizing the transformative impact of smart home technologies.",
    tags: ["IoT", "Home Automation", "Embedded Systems", "Smart Home"]
  },
  {
    title: "Three Phase Fault Detection",
    date: "2020",
    short: "ML-based system for swift identification and addressing of three-phase faults in power systems.",
    description: "In this project, the goal was to develop a robust system using advanced algorithms and machine learning to swiftly identify and address three-phase faults in electrical power systems. The project provided valuable insights into power system protection, emphasizing the practical application of cutting-edge technologies for ensuring the reliability and stability of electrical networks.",
    tags: ["Power Systems", "Fault Detection", "Machine Learning", "Protection Systems"]
  },
  {
    title: "Car Accident Alert",
    date: "2020",
    short: "Automated accident detection system with GPS tracking for improved emergency response.",
    description: "This was a standout project in my bachelor's studies, aiming to enhance road safety through technology. The system automatically detects accidents using sensors and GPS for accurate location tracking, triggering immediate alerts for quicker emergency response. This project showcased my technical skills and a commitment to using technology for societal betterment by improving road safety and emergency response mechanisms.",
    tags: ["Embedded Systems", "GPS", "Safety Systems", "IoT"]
  }
];