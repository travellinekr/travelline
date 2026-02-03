export type ProjectType = "travel" | "work";

export type Project = {
  id: string;
  title: string;
  type: ProjectType;
  desc: string;
  date: string;
};