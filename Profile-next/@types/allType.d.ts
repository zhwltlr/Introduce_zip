export declare module "allType";

type Experiences = {
  id: number;
  exImageUrl: string;
  companyName: string;
  companyExplanation: string;
  period: string;
  content: string[];
};

type ExperienceProp = {
  experience: Experiences;
};

type ProjectsType = {
  id: number;
  githubUrl: string;
  projectImageUrl: string;
  underlineTitle: string;
  projectTitle: string;
  projectStack: string;
  projectExplanation: string;
  period: string;
  projectContent: string[];
};

type ProjectProp = {
  project: ProjectsType;
};

type SkillType = {
  skillImageUrl: string;
  score: string;
};

type SkillProp = {
  skills: SkillType;
};
