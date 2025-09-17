export type EducationItem = {
  school: string;
  degree: string;
  start?: string;
  end?: string;
  grade?: string;
  thesis?: string;
  link?: string;
};

export const education: EducationItem[] = [
    
  {
    school: "Northwestern Polytechnical University",
    degree: "Masters in Electrical Engineering",
    start: "2023-09-01",
    end: "Current",
    grade: "86%",
    thesis: "Advance Non-Linear Control of Four-Switch Buck-Boost Converter For EV Application",
    link: "https://tinyurl.com/5c24j2kz"
  },
  {
    school: "Bahauddin Zakariya University Multan",
    degree: "Bachelor in Electrical Engineering",
    start: "2016-11-14",
    end: "2020-12-22",
    grade: "3.32/4",
    thesis: "Computer Numerical Control Plotter Machine Using Arduino (FYP)",
    link: "https://tinyurl.com/595ed7uw"
  }
];
