export type SkillLevel =
  | "Advanced"
  | "Intermediate"
  | "Beginner";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "C++", level: "Intermediate" },
      { name: "Java", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Django", level: "Intermediate" },
      { name: "React", level: "Beginner" },
      { name: "Astro", level: "Beginner" },
    ],
  },
  {
    title: "Databases",
    skills: [{ name: "PostgreSQL", level: "Beginner" }],
  },
  {
    title: "DevOps & Operating Systems",
    skills: [
      { name: "Linux", level: "Intermediate" },
      { name: "Docker", level: "Beginner" },
      { name: "Kubernetes", level: "Beginner" },
    ],
  },
  {
    title: "Development Tools",
    skills: [
      { name: "Visual Studio Code", level: "Intermediate" },
      { name: "Git", level: "Beginner" },
      { name: "Bash", level: "Beginner" },
      { name: "tmux", level: "Beginner" },
    ],
  },
  {
    title: "Core Competencies",
    skills: [
      { name: "Algorithms", level: "Advanced" },
      { name: "Problem Solving", level: "Advanced" },
      { name: "Mathematics", level: "Advanced" },
      { name: "Reinforcement Learning", level: "Intermediate" },
      { name: "Machine Learning", level: "Intermediate" },
      { name: "Artificial Intelligence", level: "Intermediate" },
    ],
  },
];
